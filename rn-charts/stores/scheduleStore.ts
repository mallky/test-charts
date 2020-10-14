import { action, computed, makeObservable, observable, toJS } from 'mobx';
import uuid from 'uuid/v1';
import { Days } from '../constants/Days';
import { IDay, IStudent } from '../interfaces';

class ScheduleStore {
  schedule: Record<string, IDay> = {};

  constructor() {
    makeObservable(this, {
      schedule: observable,
      addStudent: action,
      removeStudent: action,
      scheduleArray: computed,
    });

    this.schedule = {
      [Days.monday]: {
        id: Days.monday,
        name: 'Понедельник',
        lessons: {
          '8:30-9:45': {
            time: '8:30-9:45',
            students: [
              { name: 'Makar Kuzmichev', phone: '89120153594', id: '1' },
              { name: 'Makar Kuzmichev1', phone: '89120153595', id: '2' },
            ],
          },
          '10:00-11:00': { time: '10:00-11:00', students: [] },
        },
      },
      [Days.tuesday]: {
        id: Days.tuesday,
        name: 'Вторник',
        lessons: {
          '17:30-18:45': { time: '17:30-18:45', students: [] },
          '19:00-20:15': { time: '19:00-20:15', students: [] },
        },
      },
      [Days.wednesday]: {
        id: Days.wednesday,
        name: 'Среда',
        lessons: { '18:00-19:15': { time: '18:00-19:15', students: [] } },
      },
      [Days.thursday]: {
        id: Days.thursday,
        name: 'Четверг',
        lessons: {
          '17:30-18:45': { time: '17:30-18:45', students: [] },
          '19:00-20:15': { time: '19:00-20:15', students: [] },
        },
      },
      [Days.friday]: {
        id: Days.friday,
        name: 'Пятница',
        lessons: {},
      },
      [Days.saturday]: {
        id: Days.saturday,
        name: 'Суббота',
        lessons: { '10:00-11:30': { time: '10:00-11:30', students: [] } },
      },
      [Days.sunday]: {
        id: Days.sunday,
        name: 'Воскресенье',
        lessons: { '9:00-12:00': { time: '9:00-12:00', students: [] } },
      },
    };
  }

  addStudent(studentInfo: Partial<IStudent>, day: Days, time: string) {
    if (!day || !time || !studentInfo.name) {
      return;
    }

    if (!this.schedule[day].lessons[time].students) {
      return;
    }

    const student: IStudent = {
      id: uuid(),
      phone: studentInfo.phone || '',
      name: studentInfo.name || '',
    };

    this.schedule[day].lessons[time].students.push(student);
  }

  removeStudent(studentName: string, day: Days, time: string) {
    const students = this.schedule[day].lessons[time].students;
    const index = students.findIndex((student) => student.name === studentName);
    students.splice(index, 1);
  }

  get scheduleArray() {
    return Object.values(this.schedule);
  }
}

export default ScheduleStore;
