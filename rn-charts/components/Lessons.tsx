import React, { FunctionComponent } from 'react';
import { StyleSheet, View } from 'react-native';
import { ILesson } from '../interfaces';
import { Lesson } from './Lesson';
import { Days } from '../constants/Days';

export interface ILessons {
  lessons: ILesson[];
  id: Days;
}

export const Lessons: FunctionComponent<ILessons> = ({ lessons, id }) => {
  return (
    <View style={styles.container}>
      {lessons.map((lesson) => (
        <Lesson
          key={`${lesson.time}-${lesson.students.join()}`}
          time={lesson.time}
          students={lesson.students}
          day={id}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 5,
    width: '100%',
  },
});
