import React, {useState} from 'react';
import {Control, Controller, useForm} from 'react-hook-form';
import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

const PlayWithForms = () => {
  const {
    control,
    handleSubmit,
    reset,
    formState: {errors, isValid},
  } = useForm({});

  const onSubmit = (data: any) => console.log(data);
  const onInvalid = (errors: any) => console.log(errors);

  return (
    <View style={{flex: 1, paddingHorizontal: 20, paddingVertical: 30}}>
      <TextInputField
        name="firstName"
        placeholder="First Name"
        control={control}
        rules={{
          required: {
            value: true,
            message: 'First Name is required',
          },
          pattern: {
            value: 'SOMEREGEXT',
            message: 'Doesnt match the regex',
          },
          validate: 'false',
        }}
      />

      <TextInputField
        name="lastName"
        placeholder="Last Name"
        control={control}
        rules={{
          required: true,
          message: 'Last Name is required',
        }}
      />

      <TextInputField name="email" placeholder="Email" control={control} />

      <TextInputField
        name="phoneNumber"
        placeholder="Phone Number"
        control={control}
      />

      <TextInputField
        name="password"
        placeholder="Password"
        control={control}
      />

      <TouchableOpacity
        style={[styles.button, {marginBottom: 20, marginTop: 10}]}
        onPress={() => {
          /// reset the fields which names are provided
          reset({
            firstName: '',
            lastName: '',
            email: '',
            phoneNumber: '',
            password: '',
          });
        }}>
        <Text style={{fontSize: 15, fontWeight: '600', color: 'white'}}>
          Reset Fields
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button, {opacity: isValid ? 1 : 0.2}]}
        onPress={handleSubmit(onSubmit, onInvalid)}>
        <Text style={{fontSize: 15, fontWeight: '600', color: 'white'}}>
          Submit
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const TextInputField = (props: {
  name?: string;
  placeholder: string;
  control: Control;
  rules?: any;
  //   value?: string;
}) => {
  return (
    <Controller
      name={props.name || props.placeholder}
      control={props.control}
      render={({field: {onChange, onBlur, value}}) => (
        <TextInput
          placeholder={props.placeholder}
          value={value}
          style={styles.textInput}
          onChangeText={value => onChange(value)}
          onBlur={onBlur}
        />
      )}
      rules={props.rules}
    />
  );
};

const styles = StyleSheet.create({
  button: {
    height: 55,
    backgroundColor: 'royalblue',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textInput: {
    height: 55,
    borderWidth: 1,
    borderColor: 'gray',
    marginBottom: 20,
    borderRadius: 5,
    paddingHorizontal: 20,
  },
});

export default PlayWithForms;
