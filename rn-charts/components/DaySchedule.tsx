import React, { Fragment, FunctionComponent, useCallback, useMemo, useState } from 'react';
import { StyleSheet, TouchableOpacity, View, Text } from 'react-native';
import { IDay } from '../interfaces';
import Colors from '../constants/Colors';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Lessons } from './Lessons';

export interface IDaySchedule {
  daySchedule: IDay;
}

export const DaySchedule: FunctionComponent<IDaySchedule> = ({ daySchedule }) => {
  const { name, lessons, id } = daySchedule;
  const [isCollapse, setIsCollapse] = useState<boolean>(false);
  const toggle = useCallback(() => setIsCollapse(!isCollapse), [isCollapse]);
  const iconName = useMemo(() => (isCollapse ? 'chevron-up' : 'chevron-down'), [isCollapse]);
  const lessonsArray = useMemo(() => Object.values(lessons), [lessons]);

  return (
    <Fragment>
      <TouchableOpacity onPress={toggle}>
        <View style={styles.daySchedule}>
          <Text>{name}</Text>
          <Icon name={iconName} />
        </View>
      </TouchableOpacity>
      {isCollapse && <Lessons lessons={lessonsArray} id={id} />}
    </Fragment>
  );
};

const styles = StyleSheet.create({
  daySchedule: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 40,
    width: '100%',
    paddingHorizontal: 15,
    backgroundColor: Colors.background,
    color: Colors.text,
    marginBottom: 5,
  },
});
