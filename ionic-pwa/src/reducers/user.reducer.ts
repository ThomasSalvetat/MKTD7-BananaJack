export namespace UserState {

  export const types = {
    AUTH_LOGIN: 'AUTH/LOGIN',
    AUTH_LOGOUT: 'AUTH/LOGOUT'
  };

  export function userReducer(state = {}, action) {
    switch (action.type) {
      case types.AUTH_LOGIN:
        return {
          ...state,
          user: action.payload.name,
          connected: true
        };
      case types.AUTH_LOGOUT:
        return {
          ...state,
          connected: false,
          user: null
        };

      default:
        return state;
    }
  }

  export const actions = {
    login: (name: string) => ({
      type: types.AUTH_LOGIN,
      payload: {name}
    }),
    logout: () => ({
      type: types.AUTH_LOGIN
    })
  };
}
