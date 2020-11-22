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
      <View style={styles.all}>
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
              <Text style={styles.profileTextTitle}>Peter Narconi</Text>
              <Text style={styles.profileText}>148 followers</Text>
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
        <View style={styles.body}>
          {/* My social networks */}
          <View style={{height: 138}}>
            <Text style={styles.bodyTitle}>My social networks</Text>
            {/* {console.warn(categorySliderData)} */}
            <CategorySlider data={categorySliderData} />
          </View>
          {/* My favourite songs */}
          <View>
            <Text style={styles.bodyTitle}>My favourite songs</Text>
            {/* items favorite */}
            <View style={styles.favoriteContent}>
              <View style={styles.favoriteText}>
                <Text style={styles.favoriteTextTitle}>
                  Here Comes the Boom
                </Text>
                <Text style={styles.favoriteTextDesc}>Rise of the North</Text>
              </View>
              <View style={styles.favoriteImg}>
                <Image
                  style={styles.imgFavorite}
                  source={{
                    uri:
                      'data:image/jpeg;base64,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',
                  }}
                />
              </View>
            </View>
            {/* items favorite */}
            <View style={styles.favoriteContent}>
              <View style={styles.favoriteText}>
                <Text style={styles.favoriteTextTitle}>
                  Here Comes the Boom
                </Text>
                <Text style={styles.favoriteTextDesc}>Rise of the North</Text>
              </View>
              <View style={styles.favoriteImg}>
                <Image
                  style={styles.imgFavorite}
                  source={{
                    uri:
                      'https://ep01.epimg.net/cultura/imagenes/2018/06/10/actualidad/1528645771_828450_1528646079_noticia_normal.jpg',
                  }}
                />
              </View>
            </View>
          </View>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  all: {
    marginHorizontal: 25,
  },
  headProfile: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#000',
    borderBottomWidth: 1,
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
  profileTextTitle: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  profileText: {
    fontSize: 12,
    color: '#ADBCCE',
  },
  body: {
    flexDirection: 'column',
    flex: 1,
  },
  bodyTitle: {
    fontWeight: 'bold',
    fontSize: 15,
    marginTop: 25,
  },
  favoriteContent: {
    flexDirection: 'row',
    backgroundColor: '#DEEDFC',
    height: 75,
    alignItems: 'center',
    borderRadius: 10,
    marginTop: 15,
  },
  favoriteText: {
    flex: 3,
    marginLeft: 15,
  },
  favoriteTextTitle: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  favoriteTextDesc: {
    fontSize: 12,
    color: '#ADBCCE',
  },
  favoriteImg: {
    flex: 1,
    alignItems: 'flex-end',
  },
  imgFavorite: {
    width: 75,
    height: '100%',
    borderBottomRightRadius: 10,
    borderTopRightRadius: 10,
  },
});

export default Actividad_01;
