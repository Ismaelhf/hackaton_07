import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Image,
} from 'react-native';
import PlayList from '../components/PlayList/PlayList';
import {playListData} from '../resource/functions/data/playListData';

const Actividad_02 = () => {
  return (
    <>
      <View style={styles.all}>
        <View style={styles.head}>
          <Text style={styles.headTitle}>Freed</Text>
          <Text style={styles.headText}>10 update</Text>
        </View>
        <View style={styles.boddy}>
          <ScrollView>
            <View style={styles.section1}>
              {/* img */}
              <View style={styles.section1_Img}>
                <Image
                  style={styles.section1_Img_1}
                  source={{
                    uri:
                      'https://www.blogdelfotografo.com/wp-content/uploads/2020/04/fotografo-paisajes.jpg',
                  }}
                />
              </View>
              <View style={styles.section1_text}>
                <View style={styles.section1_icon_1}>
                  <Image
                    style={styles.section1_Img_2}
                    source={{
                      uri:
                        'https://www.blogdelfotografo.com/wp-content/uploads/2020/04/fotografo-paisajes.jpg',
                    }}
                  />
                </View>
                <View style={styles.section1_text_2}>
                  <Text style={styles.bodyTitle}>Peter MArconi</Text>
                  <Text style={styles.bodyText}>descripcion del ....</Text>
                </View>
                <View style={styles.section1_icon_2}>
                  <Image
                    style={styles.section1_Img_3}
                    source={{
                      uri:
                        'https://cdn.icon-icons.com/icons2/1456/PNG/128/mbrimorevertical_99485.png',
                    }}
                  />
                </View>
              </View>
            </View>
            <View style={styles.section2}>
              {/* img * 4 */}
              {/* {console.warn(playListData)} */}
              <View style={styles.section2_playList}>
                <PlayList data={playListData} />
              </View>
            </View>
            {/* <View style={styles.section3}> */}
            {/* img */}
            <View style={styles.section1}>
              {/* img */}
              <View style={styles.section1_Img}>
                <Image
                  style={styles.section1_Img_1}
                  source={{
                    uri: 'https://i.ytimg.com/vi/9QNUXxuwt1Y/maxresdefault.jpg',
                  }}
                />
              </View>
              <View style={styles.section1_text}>
                <View style={styles.section1_icon_1}>
                  <Image
                    style={styles.section1_Img_2}
                    source={{
                      uri:
                        'https://i.pinimg.com/originals/f9/39/f8/f939f81ef7a2068b02b91eb237eb97fd.jpg',
                    }}
                  />
                </View>
                <View style={styles.section1_text_2}>
                  <Text style={styles.bodyTitle}>Peter MArconi</Text>
                  <Text style={styles.bodyText}>descripcion del ....</Text>
                </View>
                <View style={styles.section1_icon_2}>
                  <Image
                    style={styles.section1_Img_3}
                    source={{
                      uri:
                        'https://cdn.icon-icons.com/icons2/1456/PNG/128/mbrimorevertical_99485.png',
                    }}
                  />
                </View>
              </View>
            </View>
            {/* </View> */}
          </ScrollView>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  all: {
    flex: 1,
    backgroundColor: '#001429',
    paddingHorizontal: 15,
  },
  head: {
    flex: 0.1,
    marginTop: 5,
    // backgroundColor: '#fff',
    borderColor: '#2D4052',
    borderBottomWidth: 3,
    marginBottom: 20,
  },
  headTitle: {
    color: '#AAB9D0',
    fontSize: 25,
  },
  headText: {
    color: '#AAB9D0',
  },
  boddy: {
    flex: 0.9,
    // backgroundColor: '#56CDF3',
  },
  // -------------------seccion 1
  section1: {
    // flex: 1,
    height: 230,
    // backgroundColor: '#524243',
    borderRadius: 10,
    marginVertical: 10,
  },
  section1_Img: {
    flex: 0.75,
  },
  section1_Img_1: {
    width: '100%',
    height: '100%',
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
  },
  section1_text: {
    flex: 0.25,
    backgroundColor: '#252249',
    flexDirection: 'row',
    // alignContent: 'flex-start',
    alignItems: 'center',
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
  },
  section1_icon_1: {
    flex: 0.15,
  },
  section1_text_2: {
    flex: 0.5,
  },
  section1_icon_2: {
    flex: 0.35,
    alignItems: 'flex-end',
    marginRight: 10,
  },
  bodyTitle: {
    color: '#fff',
    fontSize: 15,
    fontWeight: 'bold',
  },
  bodyText: {
    color: '#AAB9D0',
  },
  section1_Img_2: {
    width: 35,
    height: 35,
    borderRadius: 17.5,
    marginLeft: 15,
  },
  section1_Img_3: {
    width: 30,
    height: 30,
  },
  // --------------seccion 2
  section2: {
    marginTop: 10,
  },
  section2_playList: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  // ---------------seccion 3
  section3: {
    // flex: 1,
    height: 230,
    marginTop: 10,
    borderRadius: 10,
    backgroundColor: '#412A83',
  },
});

export default Actividad_02;
