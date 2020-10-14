import React, { FunctionComponent, useCallback, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Colors from '../constants/Colors';
import { IStudent } from '../interfaces';

export interface IAddStudentForm {
  onCloseModal(): void;
  onAddStudent(student: Partial<IStudent>): void;
}

export const AddStudentForm: FunctionComponent<IAddStudentForm> = ({
  onCloseModal,
  onAddStudent,
}) => {
  const [name, setName] = useState<string>('');
  const [phone, setPhone] = useState<string>('');

  const addStudent = useCallback(() => {
    onAddStudent({ name, phone });
    onCloseModal();
  }, [onAddStudent, onCloseModal, name, phone]);

  return (
    <View style={styles.modalContainer}>
      <View style={styles.formContainer}>
        <View style={styles.iconCross}>
          <TouchableOpacity onPress={onCloseModal}>
            <Icon name={'close'} size={20} />
          </TouchableOpacity>
        </View>
        <View>
          <Text>Имя: </Text>
          <TextInput style={styles.input} onChangeText={setName} value={name} autoFocus />
        </View>
        <View>
          <Text>Телефон: </Text>
          <TextInput style={styles.input} onChangeText={setPhone} value={phone} />
        </View>

        <TouchableOpacity onPress={addStudent}>
          <View style={styles.addButton}>
            <Text>Добавить</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },

  formContainer: {
    backgroundColor: Colors.gray,
    padding: 10,
  },

  iconCross: {
    borderRadius: 20,
    width: 40,
    height: 40,
    backgroundColor: Colors.white,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: -20,
    right: -20,
  },

  input: {
    backgroundColor: Colors.white,
    width: 200,
    marginVertical: 5,
    height: 24,
  },

  addButton: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.background,
    padding: 5,
    marginTop: 15,
  },
});
