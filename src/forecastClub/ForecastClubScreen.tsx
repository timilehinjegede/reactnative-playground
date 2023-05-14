import React from 'react';
import {
  View,
  Text,
  Image,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

const ForecastClubScreen = ({navigation}: any) => {
  return (
    <View style={{flex: 1}}>
      <SafeAreaView style={{flex: 1}}>
        <View
          style={{
            paddingHorizontal: 20,
            paddingTop: 10,
          }}>
          <View
            style={{
              flexDirection: 'row',
            }}>
            <View style={styles.verticalDivider} />

            <Text style={styles.headerText}>{'THE\nFORECAST\nCLUB.'}</Text>
          </View>
          <Text style={styles.titleText}>{"Let's create your\nown style"}</Text>
          <Text style={styles.subTitleText}>
            Let's create your own style. Everyone has their own style and we
            will give you with the most accurate trend forecast
          </Text>

          <TouchableOpacity
            onPress={() => navigation.navigate('ForecastClubLogin')}>
            <View style={styles.button}>
              <Text style={styles.buttonText}>Let's get started</Text>
              {/* <Icon name="arrow" size={30} /> */}
            </View>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
      <View
        style={{
          flex: 1,
        }}>
        <Image
          source={require('../../images/lady1.png')}
          style={styles.image}
        />
        <View style={styles.circleSmall} />
        <View style={styles.circleBig} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerText: {
    fontSize: 18,
    fontWeight: '500',
  },
  titleText: {
    fontSize: 35,
    fontWeight: '700',
    paddingTop: 30,
  },
  subTitleText: {
    fontSize: 16,
    color: 'gray',
    paddingTop: 15,
  },
  verticalDivider: {
    width: 2,
    backgroundColor: 'black',
    marginRight: 5,
  },
  image: {
    zIndex: 1,
    resizeMode: 'cover',
    position: 'absolute',
  },
  buttonText: {color: 'white', fontSize: 18, fontWeight: '500'},
  button: {
    height: 60,
    backgroundColor: 'dodgerblue',
    borderRadius: 30,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
    alignSelf: 'center',
    paddingHorizontal: 60,
  },
  circleSmall: {
    height: 120,
    width: 120,
    backgroundColor: 'dodgerblue',
    borderRadius: 60,
    left: 15,
  },
  circleBig: {
    height: 250,
    width: 250,
    backgroundColor: 'dodgerblue',
    borderRadius: 125,
    left: 40,
    top: -60,
  },
});

export default ForecastClubScreen;
