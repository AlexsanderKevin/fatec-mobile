import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Login from "../views/Login/Login";
import Home from "../views/Home/Home";

const Tab = createBottomTabNavigator();

export default function TabRoutes() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="login"
        component={Login}
      />
      <Tab.Screen
        name="home"
        component={Home}
      />
    </Tab.Navigator>
  )
}
