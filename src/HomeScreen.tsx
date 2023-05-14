import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

type BoxProps = {title: string; onPress: () => void};

const HomeScreen = ({navigation}: any) => {
  const ModuleBoxItem = (boxProps: BoxProps) => {
    return (
      <TouchableOpacity style={styles.moduleBox} onPress={boxProps.onPress}>
        <View>
          <Text style={styles.moduleBoxText}>{boxProps.title}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}>
      <View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingHorizontal: 15,
            paddingBottom: 10,
          }}>
          <Text style={styles.welcomeText}>
            <Text>{'Hello,\n'}</Text>
            <Text
              style={{
                color: 'black',
                fontWeight: '600',
                fontSize: 20,
              }}>
              Welcome to my playground!
            </Text>
          </Text>

          <View style={styles.avatar}>
            <Text>TJ</Text>
          </View>
        </View>
        <View style={styles.rowStyle}>
          <ModuleBoxItem
            title={'Forecast\nClub'}
            onPress={() => navigation.navigate('ForecastClub')}
          />
          <ModuleBoxItem
            title={'Dukandar\nShopping'}
            onPress={() => navigation.navigate('')}
          />
        </View>
        <View style={styles.rowStyle}>
          <ModuleBoxItem
            title={'Travel\nService'}
            onPress={() => navigation.navigate('')}
          />
          <ModuleBoxItem
            title={'Jersey\nKit'}
            onPress={() => navigation.navigate('JerseyKit')}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  moduleBox: {
    backgroundColor: 'grey',
    height: 100,
    flex: 1,
    borderRadius: 8,
    justifyContent: 'center',
  },
  moduleBoxText: {
    textAlign: 'center',
    fontSize: 18,
    color: 'white',
    fontWeight: '600',
  },
  rowStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 20,
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  welcomeText: {
    fontSize: 16,
    lineHeight: 30,
  },
  avatar: {
    height: 45,
    width: 45,
    borderRadius: 25,
    backgroundColor: 'grey',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default HomeScreen;
