import { atom } from 'recoil';

// eslint-disable-next-line import/prefer-default-export
export const authToken = atom({
  key: 'authToken',
  default: '',
});
