import {Pressable, StyleSheet, Text, View} from 'react-native';

const CustomButton = ({title}) => {
  return (
    <View style={styles.buttonView}>
      <Pressable>
        <Text style={styles.buttonTitle}>{title}</Text>
      </Pressable>
    </View>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  buttonView: {
    backgroundColor: 'white',
    width: 150,
    height: 35,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonTitle: {
    fontSize: 19,
    textTransform: 'uppercase',
  },
});
