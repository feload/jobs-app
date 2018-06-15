import { createBottomTabNavigator } from 'react-navigation';
import AuthScreen from './screens/AuthScreen';
import WelcomeScreen from './screens/WelcomeScreen';

export default createBottomTabNavigator({
  Auth: AuthScreen,
  Welcome: WelcomeScreen
});