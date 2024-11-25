import {
  Dimensions,
  FlatList,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import VideoPlayer from '../components/VideoPlayer';
import CustomButton from '../components/CustomButton';
import Campaigns from '../components/Campaigns';

const {width, height} = Dimensions.get('window');

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.gif}>
          <VideoPlayer />
        </View>
        <View style={styles.contactButton}>
          <CustomButton title={'Contact Us'} />
        </View>
        <View style={styles.banner}>
          <Text style={styles.text}>
            <Text style={styles.textTitle}>
              We Do What We Do Best: Influencer Marketing!{'\n'}
            </Text>
            Rekkitz was founded on December 2020 by a very well renowned Turkish
            streamer Ahmet "Jahrein" Sonuç.{'\n'}
            The main focus of Rekkitz as an influencer agency is to pair up the
            brand with the right influencer and build successful campaigns.
            {'\n'}
            We provide a huge variety of influencers with different
            demographics.{'\n'}
            Most of our influencers are gamers and we also offer services
            outside of our focused area if the need arises.{'\n'}
            We offer 360° marketing campaigns with full coverage of data,
            statistics and reports of deliverables.{'\n'}
            Contact us if you have any further questions!
          </Text>
        </View>
        <Image
          style={styles.imgHome}
          source={require('../assets/images/home-img.webp')}
        />
        <View style={{alignItems: 'center', marginTop: 20}}>
          <Text style={{color: 'white', fontWeight: 'bold'}}>
            SOME OF OUR CAMPAIGNS
          </Text>
        </View>
        <View>
          <Campaigns />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  contactButton: {
    marginTop: 30,
    alignItems: 'center',
  },
  banner: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 70,
    marginVertical: 30,
  },
  text: {
    color: 'white',
  },
  textTitle: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  imgHome: {
    width: width,
    height: width * 0.62,
  },
});
