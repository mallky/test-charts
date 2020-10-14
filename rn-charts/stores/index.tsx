import ScheduleStore from './scheduleStore';
import ModalStore from './modalStore';
import { useLocalStore } from 'mobx-react';
import React from 'react';

interface IStoreContext {
  scheduleStore: ScheduleStore;
  modalStore: ModalStore;
}
const store = {
  scheduleStore: new ScheduleStore(),
  modalStore: new ModalStore(),
};

export const StoresContext = React.createContext<IStoreContext>(store);

export const StoreProvider: React.FC = ({ children }) => {
  return <StoresContext.Provider value={store}>{children}</StoresContext.Provider>;
};
