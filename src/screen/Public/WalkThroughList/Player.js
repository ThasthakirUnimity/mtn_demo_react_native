import React, { useCallback, useEffect, useState } from 'react'
import Modal from 'react-native-modalbox'
import YoutubePlayer from 'react-native-youtube-iframe'

import { Image, View } from 'react-native'
import { Button } from '@src/component/Form'

const VideoView = ({ code }) => {
  const [playing, setPlaying] = useState(false)

  useEffect(() => {
    setPlaying(true)
  }, [])

  const onStateChange = useCallback((state) => {
    if (state === 'ended') {
      setPlaying(false)
      console.log('video has finished playing!')
    }
  }, [])

  const togglePlaying = useCallback(() => {
    setPlaying((prev) => !prev)
  }, [])

  return (
    <View style={{ flex: 1, width: '100%' }}>
      <YoutubePlayer
        height={300}
        play={playing}
        videoId={code}
        onChangeState={onStateChange}
        initialPlayerParams={{
          controls: false
        }}
      />
      <Button title={playing ? 'pause' : 'play'} onPress={togglePlaying} />
    </View>
  )
}

const ImageView = ({ image }) => {
  return <Image source={{ uri: image }} style={{ width: '100%', height: 300 }} resizeMode='contain' />
}

class Player extends React.PureComponent {
  constructor (props) {
    super(props)

    this.state = {
      opened: false
    }

    this.onOpened = this.onOpened.bind(this)
    this.onClosed = this.onClosed.bind(this)
    this.open = this.open.bind(this)
    this.renderView = this.renderView.bind(this)
  }

  onOpened () {
    this.setState({ opened: true })
  }

  onClosed () {
    this.setState({ opened: false })
  }

  youtubeParser (url) {
    const regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/
    const match = url.match(regExp)
    return (match && match[7].length == 11) ? match[7] : false
  }

  open () {
    let type = null
    let code = null
    let image = null
    if (this.props.selectedItem) {
      if (this.props.selectedItem.field_video_embed?.site == 'youtube') {
        try {
          code = this.youtubeParser(this.props.selectedItem.field_video_embed.url)
          type = 'youtube'
        } catch (e) { }
      } else if (this.props.selectedItem.thumbnail_image) {
        image = this.props.selectedItem.thumbnail_image
        type = 'image'
      }
      if (type) {
        this.refModal.open()
        this.setState({
          type,
          code,
          image
        })
      }
    }
  }

  renderView () {
    if (this.state.type == 'youtube') {
      return <VideoView code={this.state.code} />
    } else if (this.state.type == 'image') {
      return <ImageView image={this.state.image} />
    }
    return null
  }

  render () {
    return (
      <Modal
        ref={c => (this.refModal = c)}
        position='center'
        swipeToClose
        backdropPressToClose
        style={{
          width: '100%', minHeight: 200, height: 'auto', justifyContent: 'center', alignItems: 'center'
        }}
        onOpened={this.onOpened}
        onClosed={this.onClosed}
      >
        {this.state.opened ? this.renderView() : null}
      </Modal>
    )
  }
}

export default Player
