import { AsyncStorage } from 'react-native';
import { Facebook } from 'expo';
import config from '../config.json';

import {
  FACEBOOK_LOGIN_SUCCESS,
  FACEBOOK_LOGIN_FAIL
} from './types';

export const facebookLogin = () => async dispatch => {
  const token = await AsyncStorage.getItem('fb_token');
  if (token) {
    dispatch({ type: FACEBOOK_LOGIN_SUCCESS, payload: token });
  } else {
    doFacebookLogin(dispatch);
  }
}

const doFacebookLogin = async (dispatch) => {
  let { type, token } = await Facebook.logInWithReadPermissionsAsync(config.facebook_app_id, { permissions: ['public_profile'] });

  if (type === 'cancel') {
    return dispatch({ type: FACEBOOK_LOGIN_FAIL });
  }

  await AsyncStorage.setItem('fb_token', token);
  dispatch({ type: FACEBOOK_LOGIN_SUCCESS, payload: token });
};