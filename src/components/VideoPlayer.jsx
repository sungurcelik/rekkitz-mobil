import {SafeAreaView, StyleSheet, Image, View} from 'react-native';
import {colors} from '../utils';

const VideoPlayer = () => {
  return (
    <View>
      <Image
        source={require('../assets/rekkitz-video.gif')}
        style={styles.gif}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  gif: {
    width: '100%',
    height: 300,
    borderWidth: 2,
    borderColor: colors.rek_yellow,
  },
});

export default VideoPlayer;
