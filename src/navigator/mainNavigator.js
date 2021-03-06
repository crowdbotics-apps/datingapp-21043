import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Settings125247Navigator from '../features/Settings125247/navigator';
import UserProfile125240Navigator from '../features/UserProfile125240/navigator';
import Settings125239Navigator from '../features/Settings125239/navigator';
import Settings125237Navigator from '../features/Settings125237/navigator';
import SignIn2125235Navigator from '../features/SignIn2125235/navigator';
import Settings125161Navigator from '../features/Settings125161/navigator';
import UserProfile125154Navigator from '../features/UserProfile125154/navigator';
import Settings125153Navigator from '../features/Settings125153/navigator';
import Settings125151Navigator from '../features/Settings125151/navigator';
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
Settings125247: { screen: Settings125247Navigator },
UserProfile125240: { screen: UserProfile125240Navigator },
Settings125239: { screen: Settings125239Navigator },
Settings125237: { screen: Settings125237Navigator },
SignIn2125235: { screen: SignIn2125235Navigator },
Settings125161: { screen: Settings125161Navigator },
UserProfile125154: { screen: UserProfile125154Navigator },
Settings125153: { screen: Settings125153Navigator },
Settings125151: { screen: Settings125151Navigator },
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
