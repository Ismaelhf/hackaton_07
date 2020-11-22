import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  FlatList,
  Animated,
  Image,
} from 'react-native';

const {height, width} = Dimensions.get('window');

const PlayList = ({data}) => {
  const scrollX = new Animated.Value(0);
  //   console.warn(data);
  if (data && data.length) {
    return (
      <>
        {data.map((item) => (
          <View>
            <View style={styles.allList}>
              <View style={styles.section_img}>
                <Image
                  style={styles.img}
                  source={{
                    uri: item.image,
                  }}
                />
              </View>
              <View style={styles.section2}>
                <View style={styles.section2_icon}>
                  <Image
                    style={styles.icon}
                    source={{
                      uri: item.icon,
                    }}
                  />
                </View>
                <View style={styles.section2_text}>
                  <Text style={styles.section2_text_title}>{item.title}</Text>
                  <Text style={styles.section2_text_desp}>
                    {item.description}
                  </Text>
                </View>
              </View>
            </View>
          </View>
        ))}
      </>
    );
  }
  return null;
};
const styles = StyleSheet.create({
  allList: {
    flexDirection: 'column',
    height: 230,
    width: 195,
    marginTop: 10,
    // borderRadius: 10,
  },
  section_img: {
    flex: 0.7,
  },
  section2: {
    flex: 0.3,
    backgroundColor: '#252249',
    flexDirection: 'row',
    alignItems: 'center',
    alignContent: 'center',
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
  },
  img: {
    width: '100%',
    height: '100%',
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
  },
  section2_text: {
    flex: 0.8,
  },
  section2_text_title: {
    color: '#fff',
    fontSize: 15,
    fontWeight: 'bold',
  },
  section2_text_desp: {
    color: '#AAB9D0',
  },
  section2_icon: {
    flex: 0.2,
    marginLeft: 15,
  },
  icon: {
    width: 25,
    height: 25,
    borderRadius: 10,
  },
});
export default PlayList;
