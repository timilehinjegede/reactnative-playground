import React from 'react';
import {
  View,
  Text,
  Image,
  Dimensions,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

const ForecastClubLoginScreen = () => {
  return (
    <View
      style={{
        position: 'absolute',
        flex: 1,
      }}>
      <Image source={require('../../images/lady0.jpg')} style={styles.image} />
      <View style={styles.formContainer}>
        <Text style={{fontSize: 28, fontWeight: '600', textAlign: 'center'}}>
          Welcome!
        </Text>
        <Text style={styles.loginText}>Login to continue</Text>

        <TextInput
          placeholder="Email"
          placeholderTextColor={'gray'}
          style={styles.textInput}
        />

        <TextInput
          placeholder="Password"
          placeholderTextColor={'gray'}
          style={styles.textInput}
        />

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginVertical: 25,
          }}>
          <Text style={{color: 'dodgerblue', fontWeight: '400'}}>
            Create Account
          </Text>
          <Text style={{color: 'gray', fontWeight: '300'}}>
            Forgot Password?
          </Text>
        </View>

        <TouchableOpacity>
          <View style={styles.button}>
            <Text style={{color: 'white', fontSize: 18, fontWeight: '500'}}>
              Login
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  loginText: {
    fontSize: 20,
    fontWeight: '400',
    color: 'gray',
    marginTop: 8,
    textAlign: 'center',
  },
  formContainer: {
    backgroundColor: 'white',
    height: 400,
    width: '100%',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    position: 'absolute',
    bottom: -300,
    paddingHorizontal: 20,
    paddingVertical: 25,
  },
  image: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height - 300,
    resizeMode: 'cover',
  },
  textInput: {
    height: 50,
    borderBottomWidth: 0.5,
    borderColor: 'gray',
  },
  button: {
    height: 60,
    backgroundColor: 'dodgerblue',
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
    alignSelf: 'center',
    paddingHorizontal: 100,
  },
});

export default ForecastClubLoginScreen;
