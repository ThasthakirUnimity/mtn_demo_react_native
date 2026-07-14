import React, {useCallback, useEffect, useState} from 'react';
import Modal from 'react-native-modalbox';
import YoutubePlayer from 'react-native-youtube-iframe';

import styles from './styles';
import {__} from '@src/utility/translation';
import {Image, Text, View} from 'react-native';
import {Button} from '@src/component/Form';

const VideoView = ({code}) => {
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    setPlaying(true);
  }, []);

  const onStateChange = useCallback(state => {
    if (state === 'ended') {
      setPlaying(false);
      console.log('video has finished playing!');
    }
  }, []);

  const togglePlaying = useCallback(() => {
    setPlaying(prev => !prev);
  }, []);

  return (
    <View style={{flex: 1, width: '100%'}}>
      <YoutubePlayer
        height={300}
        play={playing}
        videoId={code}
        onChangeState={onStateChange}
        initialPlayerParams={{
          controls: false,
        }}
      />
      <Button title={playing ? 'pause' : 'play'} onPress={togglePlaying} />
    </View>
  );
};

class Player extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      opened: false,
    };

    this.onOpened = this.onOpened.bind(this);
    this.onClosed = this.onClosed.bind(this);
    this.open = this.open.bind(this);
    this.renderView = this.renderView.bind(this);
  }

  onOpened() {
    this.setState({opened: true});
  }

  onClosed() {
    this.setState({opened: false});
  }

  open() {
    this.refModal.open();
  }

  renderView() {
    return <VideoView code={this.props.code} />;
  }

  render() {
    return (
      <Modal
        ref={c => (this.refModal = c)}
        position="center"
        swipeToClose={true}
        backdropPressToClose={true}
        style={{
          width: '100%',
          minHeight: 200,
          height: 'auto',
          justifyContent: 'center',
          alignItems: 'center',
        }}
        onOpened={this.onOpened}
        onClosed={this.onClosed}>
        {this.state.opened ? this.renderView() : null}
      </Modal>
    );
  }
}

export default Player;
