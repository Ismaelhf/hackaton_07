import React from 'react';
import {View, StyleSheet, Text, Image, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: width / 3.5,
    height: height / 10,
    backgroundColor: 'white',
    margin: 10,
    borderRadius: 10,
  },
  textView: {
    position: 'absolute',
    bottom: 2,
    margin: 8,
    left: 1,
  },
  image: {
    width: width / 3.5,
    height: height / 12,
    borderRadius: 10,
  },
  itemTitle: {
    color: 'white',
    fontSize: 16,
    shadowColor: '#000000',
    shadowOffset: {width: 0.8, height: 0.8},
    textAlign: 'left',
    shadowOpacity: 1,
    shadowRadius: 3,
    marginBottom: 1,
    fontWeight: 'bold',
    elevation: 5,
  },
  itemText: {
    color: 'white',
    fontSize: 10,
    shadowColor: '#000000',
    // shadowOffset: {width: 0.8, height: 0.8},
    textAlign: 'left',
    shadowOpacity: 1,
    shadowRadius: 3,
    marginBottom: 5,
    // fontWeight: 'bold',
    elevation: 5,
  },
  icon: {
    position: 'absolute',
    bottom: 30,
    margin: 10,
    // left: 0,
    width: 25,
    height: 25,
  },
});

const CategorySliderItem = ({item}) => {
  // console.warn(item.image);
  return (
    <View style={[styles.container, item.backgroundColor]}>
      {/* <Image
        style={styles.image}
        source={{
          uri: item.image,
        }}
      /> */}
      <View style={styles.textView}>
        <Image
          style={styles.icon}
          source={{
            uri: item.icon,
          }}
        />
        <Text style={styles.itemTitle}>{item.title}</Text>
        <Text style={styles.itemText}>{item.description}</Text>
      </View>
    </View>
  );
};

export default CategorySliderItem;
