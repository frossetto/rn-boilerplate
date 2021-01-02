import { SystemState, UPDATE_SESSION, SystemActionTypes } from './types';

// eslint-disable-next-line import/prefer-default-export
export const updateSession = (newSession: SystemState): SystemActionTypes => ({
  type: UPDATE_SESSION,
  payload: newSession,
});
