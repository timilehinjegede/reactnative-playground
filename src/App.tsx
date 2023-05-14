/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';

type BoxProps = {title: string};

function App(): JSX.Element {
  const ModuleBoxItem = (boxProps: BoxProps) => {
    return (
      <View style={styles.moduleBox}>
        <Text style={styles.moduleBoxText}>{boxProps.title}</Text>
      </View>
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
          <ModuleBoxItem title={'Forecast\nClub'} />
          <ModuleBoxItem title={'Dukandar\nShopping'} />
        </View>
        <View style={styles.rowStyle}>
          <ModuleBoxItem title={'Travel\nService'} />
          <ModuleBoxItem title={'Jersey\nKit'} />
        </View>
      </View>
    </SafeAreaView>
  );
}

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

export default App;
