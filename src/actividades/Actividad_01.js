import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
} from 'react-native';
import CategorySlider from '../components/CategorySlider/CategorySlider';
import {categorySliderData} from '../resource/functions/data/categorySliderData';

const Actividad_01 = () => {
  return (
    <>
      <View>
        {/* head */}
        <View style={styles.head}>
          {/* img and title */}
          <View style={styles.headProfile}>
            <View style={styles.profileItem1}>
              <Image
                style={styles.imgPerfil}
                source={{
                  uri:
                    'https://www.movilzona.es/app/uploads/2018/10/app-foto-movimiento.jpg',
                }}
              />
            </View>
            <View style={styles.profileItem2}>
              <Text>Peter Narconi</Text>
              <Text>148 followers</Text>
            </View>
            <View style={styles.profileItem3}>
              <Image
                style={styles.imgEdit}
                source={require('../icons/edit.png')}
              />
            </View>
          </View>
        </View>
        {/* body */}
        <View>
          {/* My social networks */}
          <View style={{flex: 1}}>
            {/* {console.warn(categorySliderData)} */}
            <CategorySlider data={categorySliderData} />
          </View>
          {/* My favourite songs */}
          <View></View>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  headProfile: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#000',
    borderBottomWidth: 1,
    marginHorizontal: 25,
    paddingVertical: 20,
  },
  imgPerfil: {
    width: 80,
    height: 80,
    borderRadius: 40,
    borderColor: '#722F81',
    borderWidth: 3,
    marginBottom: 6,
  },
  imgEdit: {
    width: 15,
    height: 15,
  },
  profileItem1: {
    flex: 0.7,
  },
  profileItem2: {
    flex: 1,
    // alignItems: 'flex-start',
  },
  profileItem3: {
    flex: 1,
    alignItems: 'flex-end',
  },
});

export default Actividad_01;
