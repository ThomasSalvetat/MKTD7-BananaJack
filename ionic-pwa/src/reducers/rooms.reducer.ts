import { Room } from '../models/model';

export namespace RoomState {

  export const types = {
    ROOMS_LIST: 'ROOMS/LIST'
  };


  export function roomsReducer (state = [], action) {
    switch (action.type) {
      case types.ROOMS_LIST:
        return [
          ...state,
          ...action.payload
        ];
      default:
        return state;
    }
  }

  export const actions = {
    getList: (rooms: Room[]) => ({
      type: types.ROOMS_LIST,
      payload: rooms
    })
  };
}
