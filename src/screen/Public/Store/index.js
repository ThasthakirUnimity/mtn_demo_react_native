import React from 'react'
import { Keyboard, Image, ScrollView, View, Platform } from 'react-native'
import { connect } from 'react-redux'
import Modal from 'react-native-modalbox'
import MapView, { Marker } from 'react-native-maps'
import Geolocation from '@react-native-community/geolocation'

import { Container, Content, Icon, Text } from '@src/component/Basic'
import { __ } from '@src/utility/translation'
import { Button, TextInput } from '@src/component/Form'
import styles from './styles'
import { TransparentStatusBar } from '@src/component/StatusBar'
import { httpCms } from '@src/utility/http'
import { URLS } from '@src/config/url'

import Store from './Store'
import storeList from './data/store'
import RechargeStore from './RechargeStore'
import rechargestoreList from './data/rechargestore'
import { goBack } from '@src/navigation'
import { applyComponentFeatures } from '@src/utility/core'
import { openUrl } from '@src/utility/linking'
import { CURRENCY, APP_DETAILS } from '@src/theme/typography'


class FindStore extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      fetchedLocation: 0,
      storeList: [...storeList],

      stores: [],
      fetchingInitial: true,
      fetchingMore: false,

      selectedStore: {},

      rechargestoreList: [...rechargestoreList],
      fetchingRechargeStoreList: false,

      region: {
        latitude: -33.865143,
        longitude: 151.209900,
        latitudeDelta: 0.015,
        longitudeDelta: 0.0121
      },

      searchKeyEditable: false
    }

    applyComponentFeatures(this)

    this.fetchCurrentLocation = this.fetchCurrentLocation.bind(this)
    this.fetchNearbyStores = this.fetchNearbyStores.bind(this)
    this.fetchStores = this.fetchStores.bind(this)
    this.onFetchResponse = this.onFetchResponse.bind(this)
    this.onChangeSearchKey = this.onChangeSearchKey.bind(this)
    this.onSearch = this.onSearch.bind(this)
    this.selectStore = this.selectStore.bind(this)
    this.openMapOption = this.openMapOption.bind(this)
    this.showLocationInMap = this.showLocationInMap.bind(this)
  }

  async componentDidMount () {
    if (this.refs?.modalRecharge) {
      this.refs.modalRecharge.open()
    }
    if (this.refs?.modalAlert) {
      this.refs.modalAlert.open()
    }
    this.fetchCurrentLocation()
    this.promisedSetState({ fetchingInitial: false })
  }

  async fetchCurrentLocation () {
    const successCb = async (data) => {
      await this.promisedSetState({ fetchedLocation: 2 })
      this.fetchNearbyStores(data.coords.latitude, data.coords.longitude)
    }
    const errorCb = (e) => {
      console.log(e)
      this.promisedSetState({ fetchedLocation: 1, searchKeyEditable: true })
    }
    Geolocation.getCurrentPosition(successCb, errorCb)
  }

  async fetchNearbyStores (lat, lng) {
    try {
      const params = {
        // latlong: '13.0402803,80.1743795<=100'
        latlong: `${lat},${lng}<=100`
      }
      const r = (await httpCms.get(URLS.STORE, { params })).data
      await this.onFetchResponse(r)
    } catch (e) {
    }
    await this.promisedSetState({ fetchingStores: false, searchKeyEditable: true })
  }

  async fetchStores () {
    try {
      const params = {
        latlong: 'all',
        key: this.state.searchKey
      }
      const r = (await httpCms.get(URLS.STORE, { params })).data
      await this.onFetchResponse(r)
    } catch (e) {
    }
    await this.promisedSetState({ fetchingStores: false, searchKeyEditable: true })
  }

  async onFetchResponse (r) {
    await this.promisedSetState({
      stores: r.rows.map(s => {
        const { field_location, ...data } = s

        let field_slider_image = []
        if (typeof data.field_slider_image === 'string') {
          field_slider_image = data.field_slider_image.split(',').map(v => v.trim()).filter(v => (!!v))
        }

        return { ...data, field_slider_image, geolocation: field_location.split(',').map(g => parseFloat(g)) }
      })
    })
    setTimeout(() => {
      this.map.fitToSuppliedMarkers(this.state.stores.map((r, i) => ('Marker' + i)), false)
    }, 100)
  }

  onChangeSearchKey (v) {
    this.setState({ isSearch: true, searchKey: v })
  }

  async onSearch () {
    if (this.state.searchKey && this.state.searchKey.trim()) {
      await this.promisedSetState({
        searchKeyEditable: false,
        stores: [],
        fetchingStores: true
      })
      Keyboard.dismiss()
      this.fetchStores()
    }
  }

  async selectStore (store) {
    await this.promisedSetState({
      selectedStore: store
    })
    this.refs.modalRecharge.close()
    this.refs.modalSearch.open()
  }

  openMapOption () {
    this.refs.modalSearch.close()
    this.refs.modalMap.open()
  }

  showLocationInMap () {
    const scheme = Platform.select({ ios: 'maps:0,0?q=', android: 'geo:0,0?q=' })
    const latLng = `${this.state.selectedStore.geolocation[0]},${this.state.selectedStore.geolocation[1]}`
    const label = 'Store'
    const url = Platform.select({
      ios: `${scheme}${label}@${latLng}`,
      android: `${scheme}${latLng}(${label})`
    })
    this.refs.modalMap.close()
    this.refs.modalRecharge.open()
    openUrl(url)
  }

  render () {
    return (
      <Container>
        <TransparentStatusBar />

        <Content style={styles.layout}>
          <ScrollView style={styles.formContainer}>
            <View>
              <MapView
                ref={ref => {
                  this.map = ref
                }}
                region={this.state.region}
                style={styles.propLocationMap}
              >
                {this.state.stores.map((s, index) => (
                  <Marker
                    key={index}
                    identifier={'Marker' + index}
                    coordinate={{
                      latitude: s.geolocation[0],
                      longitude: s.geolocation[1]
                    }}
                    title={s.title}
                    description={s.field_address}
                  />
                ))}
              </MapView>
              <View style={styles.storeHeader}>
                <Button onPress={goBack}>
                  <Icon name='chevron-left' type='Entypo' style={styles.storeHeaderIcon} />
                </Button>
              </View>
            </View>
            <View />
          </ScrollView>
        </Content>

        {/* }
        <View style={styles.footerBg}>
          <View style={styles.footer}>
            <Button variant='primary' style={styles.footerBtn} onPress={() => this.refs.modalRecharge.open()}>
              <Text text='semiBold' size='text16' color='default'>Open</Text>
            </Button>
          </View>
        </View>
        { */}

        <Modal
          ref='modalRecharge'
          position='bottom'
          style={styles.modalRecharge}
          backdropPressToClose={false}
          swipeToClose={false}
          backdrop={false}
          backButtonClose={false}
        >
          <View style={styles.formGroup}>
            <Icon name='search' type='Ionicons' style={styles.formInputIcon} />
            <View style={styles.formCol}>
              <TextInput
                editable={this.state.searchKeyEditable}
                placeholder={__('Enter your Locality')}
                placeholderTextColor='rgba(0, 0, 0, 0.3)'
                style={styles.formInput}
                onChangeText={this.onChangeSearchKey}
                onSubmitEditing={this.onSearch}
                value={this.state.searchKey}
              />
            </View>
          </View>
          {
            this.state.fetchedLocation === 2 && this.state.stores.length
              ? (
                <View>
                  <Text style={styles.nearText}>Below are the {this.state.stores.length} nearest My {APP_DETAILS.APP_NAME } services stores 100MB Data</Text>
                </View>
                )
              : null
          }

          <ScrollView>
            <RechargeStore
              list={this.state.stores}
              fetchingInitial={this.state.fetchingInitial}
              selectStore={this.selectStore}
            />
          </ScrollView>
        </Modal>

        <Modal
          ref='modalSearch'
          position='bottom'
          swipeDirection='down'
          onSwipe={this.closeModal}
          style={styles.modalSearch}
        >

          <Store
            list={this.state.selectedStore.field_slider_image}
          />

          <View style={styles.rechargeRow}>
            <Image source={{ uri: this.state.selectedStore.field_upload_image }} style={styles.rechargeImg} />
            <View style={styles.rechargeCol}>
              <Text style={styles.rechargeText}>{this.state.selectedStore.field_title}</Text>
              <View style={styles.rechargeRow2}>
                <View>
                  <Text style={styles.storeAddress}>{this.state.selectedStore.field_address}</Text>
                </View>
              </View>
            </View>
            <View>
              <Icon name='phone' type='Feather' style={styles.rechargeIcon} />
            </View>
          </View>
          <Button style={styles.mapBtn} onPress={this.openMapOption}>
            <Text style={styles.mapBtnText}>{__('Open Map')}</Text>
          </Button>
        </Modal>

        <Modal
          ref='modalMap'
          position='center'
          swipeDirection='down'
          onSwipe={this.closeModal}
          style={styles.modalMap}
        >
          <View>
            <Text style={styles.openText}>Open Maps</Text>
            <Text style={styles.navigateText}>Open with any one to navigate</Text>
            <View style={styles.imgRow}>
              <Button style={styles.mapItem} onPress={this.showLocationInMap}>
                <Image
                  source={Platform.OS === 'ios' ? require('@asset/icons/map-current.png') : require('@asset/icons/map-store.png')}
                  resizeMode='contain'
                />
              </Button>
            </View>
          </View>
        </Modal>

        {/* <Modal
          ref='modalAlert'
          position='bottom'
          swipeDirection='down'
          onSwipe={this.closeModal}
          isOpen={this.state.isOpen}
          onClosed={() =>
            this.setState({
              isOpen: false
            })}
          isDisabled={this.state.isDisabled}
          style={styles.modalAlert}
        >
          <View style={styles.alert}>
            <Icon name='warning' type='AntDesign' style={styles.warningIcon} />
            <Text text='medium' size='text18' color='dark' style={styles.alertText}>{__('Data Alert')}</Text>
            <Text text='medium' size='text14' color='grey' style={styles.alertNote}>{__('Kindly note that data charges will apply for this page.')}</Text>
            <Button variant='primary' style={styles.doneBtn} onPress={() => this.refs.modalAlert.close()}>
              <Text text='regular' size='text14' color='default'>{__('Continue')}</Text>
            </Button>
          </View>
        </Modal> */}
      </Container>
    )
  }
}

export default connect(({ session }) => ({ session }))(FindStore)
