import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const DATA = [
  {id: '1', image: require('../assets/images/campaigns/1.webp')},
  {id: '2', image: require('../assets/images/campaigns/2.webp')},
  {id: '3', image: require('../assets/images/campaigns/3.webp')},
  {id: '4', image: require('../assets/images/campaigns/4.webp')},
  {id: '5', image: require('../assets/images/campaigns/5.webp')},
  {id: '6', image: require('../assets/images/campaigns/6.webp')},
];
const Campaigns = () => {
  return (
    <View style={styles.container}>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={DATA}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <TouchableOpacity>
            <Image source={item.image} style={styles.image} />
          </TouchableOpacity>
        )}
        snapToInterval={285} // Resim genişliği + marginHorizontal
        decelerationRate="fast"
        snapToAlignment="center"
      />
    </View>
  );
};

export default Campaigns;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 250,
    height: 200,
    resizeMode: 'cover',
    marginHorizontal: 15,
  },
});
