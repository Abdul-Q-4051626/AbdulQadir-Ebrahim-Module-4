import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import LoginScreen from './screens/LoginScreen/LoginScreen';
import RegistrationScreen from './screens/RegistrationScreen/RegistrationScreen';
import DashboardScreen from './screens/DashboardScreen/DashboardScreen';
import MensApparel from './screens/ProductsScreen/MensApparel';
import ContactUsScreen from './screens/ContactUsScreen/ContactUsScreen';
import GoogleMapsScreen from './screens/GoogleMapsScreen/GoogleMapsScreen';


const Stack = createStackNavigator();
const Home = () => {
return (
  <NavigationContainer>
    <Stack.Navigator>
          <Stack.Screen name="LoginScreen" component={LoginScreen} options={{headerShown: false}}/>
          <Stack.Screen name="RegistrationScreen" component={RegistrationScreen} options={{headerShown: false}}/>
          <Stack.Screen name="DashboardScreen" component={DashboardScreen} options={{title: "Dashboard"}} />
          <Stack.Screen name="MensApparel" component={MensApparel} options={{title: "Mens Products"}} />
          <Stack.Screen name="ContactUsScreen" component={ContactUsScreen} options={{title: "Contact us"}} />
          <Stack.Screen name="GoogleMapsScreen" component={GoogleMapsScreen} options={{title: "Find our stores"}} />

    </Stack.Navigator>
  </NavigationContainer>
);
}
  
export default Home;
