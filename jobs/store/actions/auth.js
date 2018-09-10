import { AsyncStorage } from 'react-native';
import { Facebook } from 'expo';

import * as types from './types';

// How to Use AsyncStorage:
// AsyncStorage.setItem('fb_token', token);
// AsyncStorage.getItem('fb_token');

export const facebookLogin = () => async dispatch => {
  let token = await AsyncStorage.getItem('fb_token');

  if (token) {
    // Dispatch an action saying FB login is done
    dispatch({
      type: types.FACEBOOK_LOGIN_SUCCESS,
      payload: token
    })
  } else {
    // Start up FB Login process
    doFacebookLogin(dispatch);
  }
};

const doFacebookLogin = async dispatch => {
  let { type, token } = await Facebook.logInWithReadPermissionsAsync('2257988797563418', {
    permissions: ['public_profile']
  });

  if (type === 'cancel') {
    return dispatch({
      type: types.FACEBOOK_LOGIN_FAIL
    })
  }

  await AsyncStorage.setItem('fb_token', token);
  dispatch({
    type: types.FACEBOOK_LOGIN_SUCCESS,
    payload: token
  })
};