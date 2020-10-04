import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Settings125061Navigator from '../features/Settings125061/navigator';
import SignIn2125059Navigator from '../features/SignIn2125059/navigator';
import Settings125057Navigator from '../features/Settings125057/navigator';
import UserProfile125050Navigator from '../features/UserProfile125050/navigator';
import Settings125049Navigator from '../features/Settings125049/navigator';
import Settings125047Navigator from '../features/Settings125047/navigator';
import SignIn2125045Navigator from '../features/SignIn2125045/navigator';
import SignIn41125042Navigator from '../features/SignIn41125042/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Settings125061: { screen: Settings125061Navigator },
SignIn2125059: { screen: SignIn2125059Navigator },
Settings125057: { screen: Settings125057Navigator },
UserProfile125050: { screen: UserProfile125050Navigator },
Settings125049: { screen: Settings125049Navigator },
Settings125047: { screen: Settings125047Navigator },
SignIn2125045: { screen: SignIn2125045Navigator },
SignIn41125042: { screen: SignIn41125042Navigator },

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
