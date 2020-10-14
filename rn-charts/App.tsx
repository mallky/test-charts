import React, { useCallback } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useStores } from './hooks';
import { DaySchedule } from './components/DaySchedule';
import { Modal, ScrollView, StyleSheet, View } from 'react-native';
import { observer } from 'mobx-react-lite';
import { StoreProvider } from './stores';
import { AddStudentForm } from './components/AddStudentForm';

const Schedule = observer(() => {
  const { scheduleStore, modalStore } = useStores();
  const closeModal = useCallback(() => modalStore.closeModal(), []);
  const addStudent = useCallback(
    (student) => scheduleStore.addStudent(student, modalStore.day, modalStore.time),
    [],
  );

  return (
    <SafeAreaProvider>
      <ScrollView>
        <View style={styles.container}>
          {scheduleStore.scheduleArray.map((daySchedule) => (
            <DaySchedule key={daySchedule.name} daySchedule={daySchedule} />
          ))}
        </View>
      </ScrollView>
      <Modal visible={modalStore.isOpen} animationType="slide" transparent={true}>
        <AddStudentForm onCloseModal={closeModal} onAddStudent={addStudent} />
      </Modal>
    </SafeAreaProvider>
  );
});

export default function App() {
  return (
    <StoreProvider>
      <Schedule />
    </StoreProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
  },
});
