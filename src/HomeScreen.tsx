import React, {PropsWithChildren, ReactElement} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {Icon} from 'react-native-vector-icons/Icon';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

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
    <SafeAreaView style={{flex: 1}}>
      <ScrollView
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
            <Text style={styles.helloText}>
              <Text>{'Hello,\n'}</Text>
              <Text style={styles.welcomeText}>Welcome to my playground!</Text>
            </Text>

            <View style={styles.avatar}>
              <Text>TJ</Text>
            </View>
          </View>

          <Text
            style={[
              styles.welcomeText,
              styles.paddingHorizontal,
              styles.paddingTop,
            ]}>
            UI Designs Replication
          </Text>
          <View style={styles.rowStyle}>
            <ModuleBoxItem
              title={'Forecast\nClub'}
              onPress={() => navigation.navigate('ForecastClub')}
            />
            <ModuleBoxItem
              title={'Jersey\nKit'}
              onPress={() => navigation.navigate('JerseyKit')}
            />
          </View>

          <Text
            style={[
              styles.welcomeText,
              styles.paddingHorizontal,
              styles.paddingTop,
            ]}>
            React Navigation
          </Text>

          <View style={styles.rowStyle}>
            <ModuleBoxItem
              title={'Native\nStack'}
              onPress={() => navigation.navigate('ForecastClub')}
            />
            <ModuleBoxItem
              title={'Drawers'}
              onPress={() => navigation.navigate('')}
            />
          </View>
          <View style={styles.rowStyle}>
            <ModuleBoxItem
              title={'Bottom Tabs'}
              onPress={() => navigation.navigate('ForecastClub')}
            />
            <ModuleBoxItem
              title={'Top Tabs'}
              onPress={() => navigation.navigate('')}
            />
          </View>

          <Text
            style={[
              styles.welcomeText,
              styles.paddingHorizontal,
              styles.paddingTop,
            ]}>
            Misc
          </Text>
          <View style={styles.rowStyle}>
            <ModuleBoxItem
              title={'Forms'}
              onPress={() => navigation.navigate('Forms')}
            />
            <ModuleBoxItem title={''} onPress={() => undefined} />
          </View>
        </View>
      </ScrollView>
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
  helloText: {
    fontSize: 16,
    lineHeight: 30,
  },
  welcomeText: {
    color: 'black',
    fontWeight: '600',
    fontSize: 20,
  },
  paddingHorizontal: {
    paddingHorizontal: 15,
  },
  paddingTop: {
    paddingTop: 15,
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
