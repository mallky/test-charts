import React, { FunctionComponent, useCallback } from 'react';
import { StyleSheet, TouchableOpacity, View, Text, Linking } from 'react-native';
import Colors from '../constants/Colors';

export interface IStudentInfo {
  name: string;
  phone: string;
  number: number;
}

export const StudentInfo: FunctionComponent<IStudentInfo> = ({ name, phone, number }) => {
  const onPressPhone = useCallback(() => Linking.openURL(`tel:${phone}`), [phone]);

  return (
    <View style={styles.container}>
      <View style={styles.container}>
        <Text>{number}.</Text>
        <Text>{name}</Text>
      </View>
      <TouchableOpacity onPress={onPressPhone}>
        <Text>{phone}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: Colors.white,
    paddingVertical: 5,
    paddingHorizontal: 10,
    marginHorizontal: -10,
  },
});
