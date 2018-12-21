import { createStackNavigator, createAppContainer } from "react-navigation";

import HomeScreen from './src/screens/HomeScreen';
import ChatScreen from './src/screens/ChatScreen';
import DetailsScreen from './src/screens/DetailsScreen';

const AppNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen,
  },
  Details: {
    screen: DetailsScreen,
  },
  Chat: {
    screen: ChatScreen,
  }
}, {
    initialRouteName: 'Home',
});

export default createAppContainer(AppNavigator);