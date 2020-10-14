import { IStudent } from '../interfaces';
import React, { FunctionComponent, useCallback } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { StudentInfo } from './StudentInfo';
import { useStores } from '../hooks';
import Colors from '../constants/Colors';
import { Days } from '../constants/Days';
import { SwipeRow } from 'react-native-swipe-list-view';
import { observer } from 'mobx-react';

export interface ILessonElement {
  students: IStudent[];
  time: string;
  day: Days;
}

export const Lesson: FunctionComponent<ILessonElement> = observer(({ day, time, students }) => {
  const { modalStore, scheduleStore } = useStores();
  const onOpenModal = useCallback(() => modalStore.openModal(day, time), [modalStore]);
  const removeStudent = useCallback(
    (studentName: string) => () => scheduleStore.removeStudent(studentName, day, time),
    [modalStore, day, time],
  );

  return (
    <View style={styles.container}>
      <Text>{time}</Text>
      <View style={styles.students}>
        {students.map((student, idx) => (
          <SwipeRow rightOpenValue={-100} key={student.id}>
            <TouchableOpacity onPress={removeStudent(student.name)}>
              <View style={styles.removeButton}>
                <Text style={{ color: Colors.white }}>Удалить</Text>
              </View>
            </TouchableOpacity>
            <StudentInfo name={student.name} phone={student.phone} number={idx + 1} />
          </SwipeRow>
        ))}
      </View>
      <TouchableOpacity onPress={onOpenModal}>
        <View style={styles.addButton}>
          <Text>Добавить</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: Colors.lightGray,
    marginBottom: 5,
    padding: 10,
  },

  students: {
    paddingVertical: 15,
  },

  addButton: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.background,
    padding: 5,
    marginBottom: 15,
  },

  removeButton: {
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'flex-end',
    backgroundColor: Colors.red,
    width: 90,
    height: 37,
  },
});
