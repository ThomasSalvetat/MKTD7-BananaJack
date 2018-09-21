export namespace UserState {

  export const types = {
    AUTH_LOGIN: 'AUTH/LOGIN'
  };

  export function userReducer(state = [], action) {
    switch (action.type) {
      case 'LOGIN':
        return {
          ...state,
          username: action.name,
          connected: true
        };
      case 'LOGOUT':
        return {
          ...state,
          connected: false,
          username: null
        };

      default:
        return state;
    }
  }

  export const actions = {
    login: (name: string) => ({
      type: types.AUTH_LOGIN,
      payload: {name}
    })
  };
}
