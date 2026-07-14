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
// import WheelOfFortune from './WheelOfFortune';

class SpinTheWheel extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            rewards: [],
            fetchingRewardsData: true,
            spokeData: [],
            rewardsData: {}

        }
        bind(this)
        this.fetchingRewardsData = this.fetchingRewardsData.bind(this)
        this.getWinner = this.getWinner.bind(this);
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
            "name": "spin_the_wheel",
            "msisdn": userNumber
        }
        const trigger = (await httpGame.post(`${URLS.TRIGGER}?productId=${GAMIFICATION_PRODUCT_ID}`, requestData)).data;
        const list = (await httpGame.get(URLS.TRIGGER, { params: { triggerUuid: trigger.triggerUuid, productId: GAMIFICATION_PRODUCT_ID } })).data;
        if (list.resp_code === 0) {
            const spokeData = list.reward[0].spokeData.map(o => o['display_name']);
            const rewardSpoke = list.reward[0].rewardData.spoke;
            const winner = list.reward[0].spokeData.findIndex(x => x.spoke == rewardSpoke);
            await this.promisedSetState({
                rewardsData: list.reward[0],
                spokeData,
                winner,
                triggerUuid: trigger.triggerUuid,
                fetchingRewardsList: false,
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

    async getWinner() {
        const requestData = {
            "entityId": this.state.rewardsData.entityId,
            "goalId": this.state.rewardsData.goalId,
            "triggerUuid": this.state.triggerUuid
        }
        const rewardsData = (await httpGame.post(`${URLS.REWARDS_SPIN_WHEEL}&productId=${GAMIFICATION_PRODUCT_ID}`, requestData)).data;
        const rewardPoints = rewardsData.message.rewards[this.state.rewardsData.goalId];
        await Support.showSuccess({
            message: rewardPoints.rewardArr[rewardPoints.rewardArr.length - 1].game_points == 0 ? 'Better luck next time' : `You won ${rewardPoints.rewardArr[rewardPoints.rewardArr.length - 1].game_points}`,
            onHide: () => {
                navigateCurrent('GoldenCoin')
            },
            hideDelay: 2500
        })
    }
    render() {
        return (
            <Container>
                <DarkStatusBar />
                <Header
                    default
                    leftType='back'
                    title={'Spin the Wheel'}
                    titleColor='light'
                />

                <Content style={theme.layout}>
                    <ScrollView
                        showsVerticalScrollIndicator={false}
                    >
                        {!this.state.fetchingRewardsList && this.state.spokeData.length ? <View style={{ height: 600 }}>
                            {/* <WheelOfFortune callback={this.getWinner} data={this.state.spokeData} winner={this.state.winner} /> */}
                        </View> : <Text>Loading</Text>}
                    </ScrollView>
                </Content>
            </Container>
        )
    }
}

export default connect(({ session }) => ({ session }))(SpinTheWheel)