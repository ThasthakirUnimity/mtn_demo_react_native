import React from 'react'
import { ScrollView, View } from 'react-native'
import { Container, Content, Icon, Text } from '@src/component/Basic'
import { connect } from 'react-redux'
import { DarkStatusBar } from '@src/component/StatusBar'
import { navigateCurrent } from '@src/navigation'
import { GAMIFICATION_PRODUCT_ID } from '@src/config/env'
import Header from '@src/component/Header'
import { Button } from '@src/component/Form'
import { __ } from '@src/utility/translation'
import styles from '../styles'
import theme from '@src/theme/styles'
import { URLS } from "@src/config/url";
import { httpGame } from '@src/utility/http';
import { bind } from '@src/utility/component'
import Support from "@src/component/Support";
import Quiz from './Quiz';
import request from '@src/utility/request'

class SpinTheWheel extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            rewards: [],
            fetchingRewardsData: true,
            quizQuestions: [],
            rewardsData: {},
            currentQuestion: 0

        }
        bind(this)
        this.fetchingRewardsData = this.fetchingRewardsData.bind(this)
        this.validateQuiz = this.validateQuiz.bind(this);
    }

    async componentDidMount() {
        await this.fetchingRewardsData()
    }

    async fetchingRewardsData() {
        await this.promisedSetState({
            fetchingRewardsData: true
        })
        const userSession = this.props.session;
        const userNumber = userSession.numbers[userSession.numberIndex].number;
        const requestData = {
            "name": "play_quiz",
            "msisdn": userNumber
        }
        const trigger = (await httpGame.post(`${URLS.TRIGGER}?productId=${GAMIFICATION_PRODUCT_ID}`, requestData)).data;
        let list = (await httpGame.get(URLS.TRIGGER, { params: { triggerUuid: trigger.triggerUuid, productId: GAMIFICATION_PRODUCT_ID } })).data;
        if (list.resp_code === 0) {
            const quizQuestions = list.reward[0].quizData.questions;
            await this.promisedSetState({
                rewardsData: list.reward[0],
                quizQuestions,
                fetchingRewardsData: false,
                currentQuestion: 0
            })
        } else {
            await Support.showError({
                message: list.triggerInfo[0].msg,
                onHide: () => {
                    navigateCurrent('GoldenCoin')
                },
                hideDelay: 3500
            })
        }
    }

    async validateQuiz(selectedAnswer) {
        await this.promisedSetState({
            fetchingRewardsData: true
        })
        const requestData = {
            "entityId": this.state.rewardsData.entityId,
            "goalId": this.state.rewardsData.goalId,
            "setId": this.state.rewardsData.setId,
            "answerInd": 1,
            "answers": [
                {
                    "qId": this.state.quizQuestions[this.state.currentQuestion].qId,
                    "answer": selectedAnswer
                }
            ]
        }


        const rewardsData = (await httpGame.post(`${URLS.REWARDS_QUIZ}?productId=${GAMIFICATION_PRODUCT_ID}`, requestData)).data;
        if (rewardsData.resp_code) {
            await Support.showError({
                message: 'Wrong Answer',
                onHide: () => {
                    navigateCurrent('GoldenCoin')
                },
                hideDelay: 2500
            })
        } else {
            if (this.state.currentQuestion !== this.state.quizQuestions.length - 1) {
                await this.promisedSetState({
                    currentQuestion: this.state.currentQuestion + 1,
                    fetchingRewardsData: false
                })
                await Support.showSuccess({
                    message: `You Won ${rewardsData.validationData.reward_reference}`,
                    hideDelay: 2500
                })
            } else {
                await Support.showSuccess({
                    message: `You Won ${rewardsData.validationData.reward_reference}`,
                    onHide: () => {
                        navigateCurrent('GoldenCoin')
                    },
                    hideDelay: 2500
                })
            }

        }


    }
    render() {
        return (
            <Container>
                <DarkStatusBar />
                <Header
                    default
                    leftType='back'
                    title={'Quiz'}
                    titleColor='light'
                />

                <Content style={theme.layout}>

                    {!this.state.fetchingRewardsData ?
                        <Quiz data={this.state.quizQuestions[this.state.currentQuestion]} callback={this.validateQuiz} />
                        : <Text>Loading</Text>}



                </Content>
            </Container>
        )
    }
}

export default connect(({ session }) => ({ session }))(SpinTheWheel)