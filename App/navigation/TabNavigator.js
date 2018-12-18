import AnswerScreen from '../Screens/Core/AnswerScreen.js'
import AskScreen from '../Screens/Core/AskScreen.js'
import MeScreen from '../Screens/Core/MeScreen.js'
import { createMaterialTopTabNavigator, createAppContainer } from 'react-navigation';
import * as Expo from 'expo';


const AppTabNavigator = createAppContainer(createMaterialTopTabNavigator({
    AnswerScreen:AnswerScreen,
    AskScreen:AskScreen,
    MeScreen:MeScreen,
    },
    /*{
      tabBarOptions: {
       style: {
                 paddingTop: Expo.Constants.statusBarHeight ,
              }
                     }
    }*/
    ));

export default AppTabNavigator;
