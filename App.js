import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Onboarding from "./src/screens/OnBoardings/Onboarding";
import Onboarding2 from "./src/screens/OnBoardings/Onboarding2";
import Onboarding3 from "./src/screens/OnBoardings/Onboarding3";
import CreateAccount from "./src/screens/CreateAccount/CreateAccount";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Onboarding"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Onboarding" component={Onboarding} />
        <Stack.Screen name="Onboarding2" component={Onboarding2}/>
        <Stack.Screen name="Onboarding3" component={Onboarding3}/>
        <Stack.Screen name="CreateAccount" component={CreateAccount} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
