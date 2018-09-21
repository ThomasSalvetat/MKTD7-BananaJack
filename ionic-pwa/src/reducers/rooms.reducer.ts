import { Room } from '../models/model';

export namespace RoomState {

  export const types = {
    ROOMS_UPDATE: 'ROOMS/UPDATE'
  };


  export function roomsReducer (state = [], action) {
    switch (action.type) {
      case types.ROOMS_UPDATE:
        return [
          ...state,
          ...action.payload
        ];
      default:
        return state;
    }
  }

  export const actions = {
    update: (rooms: Room[]) => ({
      type: types.ROOMS_UPDATE,
      payload: rooms
    })
  };
}
