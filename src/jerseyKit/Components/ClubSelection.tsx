import {Image, ImageSourcePropType, View} from 'react-native';

type ClubSelectionProps = {
  clubImage: ImageSourcePropType;
  isSelected: boolean;
};

const ClubSelection = (props: ClubSelectionProps) => {
  return (
    <View
      style={{
        height: 70,
        width: 70,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 13,
        backgroundColor: props.isSelected
          ? 'rgba(255, 54, 54, 1)'
          : 'rgba(10, 10, 10, 1)',
        marginRight: 15,
      }}>
      <Image
        source={props.clubImage}
        style={{
          resizeMode: 'contain',
          height: 55,
          width: 55,
        }}
      />
    </View>
  );
};

export default ClubSelection;
