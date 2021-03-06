import { Permissions } from 'expo';
import { AsyncStorage } from "react-native";
import axios from "axios";

const PUSH_ENDPOINT = 'https://rallycoding.herokuapp.com/api/tokens';

export default async () => {
  let previousToken = await AsyncStorage.getItem('pushToken')
   if (previousToken) {
       return;
   } else {
       let { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS)
       console.log('status', status)
       if (status !== 'granted') {
           return;
       }
       let token = await Notifications.getExpoPushTokenAsync()
       await axios.post(PUSH_ENDPOINT, { token: { token } })
       AsyncStorage.setItem('pushToken', token)
  }
}