import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Image,
  TextInput,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import ClubSelection from './Components/ClubSelection';
import ClubJersey from './Components/ClubJersey';

const JerseyKitScreen = ({navigation}: any) => {
  return (
    <SafeAreaView
      style={{
        backgroundColor: 'rgba(20, 20, 20, 1)',
        flex: 1,
        paddingHorizontal: 20,
        paddingVertical: 15,
      }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'flex-end',
            }}>
            <TouchableOpacity>
              <MaterialIcons
                name="shopping-basket"
                style={{color: 'white', fontSize: 30, paddingRight: 20}}
              />
              <View
                style={{
                  height: 10,
                  width: 10,
                  backgroundColor: 'red',
                  borderRadius: 5,
                  justifyContent: 'center',
                  alignItems: 'center',
                  position: 'absolute',
                  bottom: 0,
                  left: 18,
                }}>
                <Text style={{fontSize: 8, color: 'white', fontWeight: '600'}}>
                  2
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <MaterialIcons
                name="menu"
                style={{color: 'white', fontSize: 30}}
              />
            </TouchableOpacity>
          </View>

          <Text
            style={{
              color: 'white',
              fontSize: 30,
              fontWeight: '600',
              marginBottom: 20,
            }}>
            {'Find your\nfavorite jersey kit'}
          </Text>
          <View
            style={{
              flexDirection: 'row',
              marginBottom: 25,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <View
              style={{
                flex: 1,
                height: 45,
                marginRight: 15,
                backgroundColor: 'rgba(10, 10, 10, 1)',
                borderRadius: 6,
              }}>
              <TextInput
                placeholder="Search your club"
                placeholderTextColor={'gray'}
                style={{
                  height: 45,
                  marginHorizontal: 15,
                }}
              />
            </View>
            <View
              style={{
                height: 45,
                width: 50,
                backgroundColor: 'rgba(255, 54, 54, 1)',
                borderRadius: 8,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <MaterialIcons
                name="search"
                style={{color: 'white', fontSize: 28}}
              />
            </View>
          </View>

          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={{
              height: 70,
              width: '100%',
            }}>
            <ClubSelection
              clubImage={require('../../images/jersey_kit/madrid.png')}
              isSelected={false}
            />
            <ClubSelection
              clubImage={require('../../images/jersey_kit/machester.png')}
              isSelected
            />
            <ClubSelection
              clubImage={require('../../images/jersey_kit/juventus.png')}
              isSelected={false}
            />
            <ClubSelection
              clubImage={require('../../images/jersey_kit/bayern.png')}
              isSelected={false}
            />
            <ClubSelection
              clubImage={require('../../images/jersey_kit/barcelona.png')}
              isSelected={false}
            />
          </ScrollView>

          <Text
            style={{
              fontSize: 23,
              color: 'white',
              fontWeight: '600',
              marginTop: 20,
            }}>
            This Season
          </Text>

          <ScrollView showsHorizontalScrollIndicator={false} horizontal>
            <ClubJersey
              image={require('../../images/jersey_kit/home_kit.png')}
              club="Manchester United"
              kitType="Home Kit"
              year="2019/2020"
              onPress={() => navigation.navigate('JerseyKitDetails')}
            />
            <ClubJersey
              image={require('../../images/jersey_kit/away_kit.png')}
              club="Manchester United"
              kitType="Away Kit"
              year="2019/2020"
              onPress={() => navigation.navigate('JerseyKitDetails')}
            />
          </ScrollView>

          <Text style={{fontSize: 23, color: 'white', fontWeight: '600'}}>
            Others
          </Text>

          <ScrollView showsHorizontalScrollIndicator={false} horizontal>
            <Image
              source={require('../../images/jersey_kit/others0.jpg')}
              style={{
                height: 200,
                width: 200,
                backgroundColor: 'red',
                borderRadius: 15,
                marginRight: 25,
              }}
            />
            <Image
              source={require('../../images/jersey_kit/others1.jpg')}
              style={{
                height: 200,
                width: 200,
                backgroundColor: 'red',
                borderRadius: 15,
              }}
            />
          </ScrollView>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default JerseyKitScreen;
