import * as React from 'react';
import { StoresContext } from '../stores';

export const useStores = () => {
  return React.useContext(StoresContext);
};
