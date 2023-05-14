import {Image, ImageSourcePropType, Text, View} from 'react-native';

type ClubJerseyProps = {
  image: ImageSourcePropType;
  club: string;
  kitType: string;
  year: string;
};

const ClubJersey = (props: ClubJerseyProps) => {
  return (
    <View
      style={{
        height: 270,
        width: 200,
        borderRadius: 8,
        backgroundColor: 'rgba(142, 22, 26, 1)',
        marginVertical: 15,
        justifyContent: 'flex-end',
        paddingBottom: 15,
        paddingHorizontal: 15,
        marginRight: 25,
      }}>
      <View
        style={{
          width: 6,
          height: 270,
          backgroundColor: 'black',
          position: 'absolute',
          left: 70,
        }}
      />
      <View
        style={{
          width: 6,
          height: 270,
          backgroundColor: 'black',
          position: 'absolute',
          right: 80,
        }}
      />
      <View
        style={{
          width: 6,
          height: 270,
          backgroundColor: 'black',
          position: 'absolute',
          right: 102,
        }}
      />

      <Image
        source={props.image}
        style={{
          resizeMode: 'cover',
          position: 'absolute',
          height: 250,
          width: 200,
          bottom: 10,
        }}
      />

      <Text
        style={{
          color: 'white',
          fontSize: 16,
          fontWeight: '600',
          paddingBottom: 3,
        }}>
        {props.club}
      </Text>
      <Text style={{color: 'white', fontSize: 16, fontWeight: '600'}}>
        {props.kitType} {props.year}
      </Text>
    </View>
  );
};

export default ClubJersey;
