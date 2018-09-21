import { UserState } from './user.reducer';
import * as currentRoomReducer from './currentroom.reducer';

import { combineReducers } from 'redux';
import { RoomState } from './rooms.reducer';

const rootReducer = (combineReducers as any)({
    userReducer: UserState.userReducer,
    currentRoomReducer,
    roomsReducer: RoomState.roomsReducer
});

export default rootReducer;
