import React, {useState} from 'react';
import {Image, SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

type SizeProps = {
  name: string;
  isSelected: boolean;
  onSelect: () => void;
};

const JerseyKitDetailsScreen = ({navigation}: any) => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const availableSizes: string[] = ['S', 'M', 'L', 'XL', 'XXL', 'XXXL'];

  /// the size chips
  const SizeSelection = (props: SizeProps) => {
    return (
      <TouchableOpacity
        onPress={props.onSelect}
        style={{
          height: 45,
          width: 45,
          backgroundColor: props.isSelected ? 'red' : 'black',
          borderRadius: 5,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text
          style={{
            fontSize: 14,
            fontWeight: '600',
            color: 'white',
          }}>
          {props.name}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={{flex: 1}}>
      <View style={{flex: 1}}>
        <Image
          source={require('../../images/jersey_kit/pogba.jpg')}
          style={{
            width: '100%',
          }}
        />

        <SafeAreaView style={{position: 'absolute', marginLeft: 10}}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <MaterialIcons
              name="arrow-back"
              style={{color: 'white', fontSize: 28}}
            />
          </TouchableOpacity>
        </SafeAreaView>
      </View>
      <View
        style={{
          backgroundColor: 'black',
          borderRadius: 20,
          paddingVertical: 30,
          paddingHorizontal: 20,
        }}>
        <Text
          style={{
            fontSize: 22,
            fontWeight: '600',
            color: 'white',
          }}>
          Machester United
        </Text>
        <Text
          style={{
            fontSize: 18,
            fontWeight: '600',
            color: 'white',
            marginTop: 5,
          }}>
          Home kit 2019/2020
        </Text>

        <Text
          style={{
            fontSize: 18,
            fontWeight: '600',
            color: 'white',
            marginTop: 15,
          }}>
          #45,000
        </Text>

        <View style={{flexDirection: 'row', marginTop: 20}}>
          <Text
            style={{
              fontSize: 16,
              fontWeight: '600',
              color: 'white',
              marginTop: 15,
            }}>
            Size
          </Text>

          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              display: 'flex',
              flexWrap: 'wrap',
              marginHorizontal: 20,
              gap: 10,
            }}>
            {availableSizes.map((thisSize, index) => (
              <SizeSelection
                name={thisSize}
                isSelected={index == selectedIndex}
                onSelect={() => setSelectedIndex(index)}
              />
            ))}
          </View>

          <TouchableOpacity
            style={{
              backgroundColor: 'red',
              borderRadius: 5,
              paddingHorizontal: 20,
              paddingVertical: 25,
            }}>
            <Text
              style={{
                fontSize: 16,
                fontWeight: '600',
                color: 'white',
                marginBottom: 10,
              }}>
              Add
            </Text>
            <MaterialIcons
              name="shopping-basket"
              style={{color: 'white', fontSize: 30}}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default JerseyKitDetailsScreen;
