import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import SignIn2125149Navigator from '../features/SignIn2125149/navigator';
import Settings125085Navigator from '../features/Settings125085/navigator';
import UserProfile125078Navigator from '../features/UserProfile125078/navigator';
import Settings125077Navigator from '../features/Settings125077/navigator';
import Settings125075Navigator from '../features/Settings125075/navigator';
import SignIn2125073Navigator from '../features/SignIn2125073/navigator';
import Settings125071Navigator from '../features/Settings125071/navigator';
import UserProfile125064Navigator from '../features/UserProfile125064/navigator';
import Settings125063Navigator from '../features/Settings125063/navigator';
import Settings125061Navigator from '../features/Settings125061/navigator';
import SignIn2125059Navigator from '../features/SignIn2125059/navigator';
import Settings125057Navigator from '../features/Settings125057/navigator';
import UserProfile125050Navigator from '../features/UserProfile125050/navigator';
import Settings125049Navigator from '../features/Settings125049/navigator';
import Settings125047Navigator from '../features/Settings125047/navigator';
import SignIn2125045Navigator from '../features/SignIn2125045/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
SignIn2125149: { screen: SignIn2125149Navigator },
Settings125085: { screen: Settings125085Navigator },
UserProfile125078: { screen: UserProfile125078Navigator },
Settings125077: { screen: Settings125077Navigator },
Settings125075: { screen: Settings125075Navigator },
SignIn2125073: { screen: SignIn2125073Navigator },
Settings125071: { screen: Settings125071Navigator },
UserProfile125064: { screen: UserProfile125064Navigator },
Settings125063: { screen: Settings125063Navigator },
Settings125061: { screen: Settings125061Navigator },
SignIn2125059: { screen: SignIn2125059Navigator },
Settings125057: { screen: Settings125057Navigator },
UserProfile125050: { screen: UserProfile125050Navigator },
Settings125049: { screen: Settings125049Navigator },
Settings125047: { screen: Settings125047Navigator },
SignIn2125045: { screen: SignIn2125045Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
