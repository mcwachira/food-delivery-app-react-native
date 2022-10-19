import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import HomeScreen from '../screens/HomeScreen';
import RestaurantDetailsPage from '../screens/RestaurantDetailsScreen';
import DishDetailsScreen from '../screens/DishDetailsScreen';
import Basket from '../screens/Basket';
import OrderScreen from '../screens/OrdersScreen';
import OrderDetails from "../screens/OrderDetails";
import { Foundation, FontAwesome5, MaterialIcons } from "@expo/vector-icons"
import DishListItem from "../components/DishListItem";
import ProfileScreen from "../screens/ProfileScreen";

const Stack = createNativeStackNavigator()

const RootNavigator = () => {

    const {dbUser} = useContext(AuthContext)
    return (

       <Stack.Navigator screenOptions={{headerShown:false}}>

            {dbUser ?( <Stack.Screen name="HomeTabs" component={HomeTabs} /> ):
               ( <Stack.Screen name="Profile" component={ProfileScreen} />)
               }
     

        
       </Stack.Navigator>
    )
}

const Tab = createMaterialBottomTabNavigator()
const HomeTabs = () => {
    return (
        <Tab.Navigator screenOptions={{headerShown:false}} barStyle={{backgroundColor:'white'}}>
            <Tab.Screen name='Home'
             component={HomeStackNavigator}
                options={{
                    tabBarIcon: ({ color }) => (
                        <Foundation name="home" size={24} color={color} />
                    ),
                }}
             />
            <Tab.Screen name='orders' 
            component={OrderStackNavigator}
                options={{
                    tabBarIcon: ({ color }) => (
                        <MaterialIcons name="list-alt" size={24} color={color} />
                    ),
                }}
            />
            <Tab.Screen name='profile'
             component={ProfileScreen} 
                options={{
                    tabBarIcon: ({ color }) => (
                        <FontAwesome5 name="user-alt" size={24} color={color} />
                    ),
                }}
             />
        </Tab.Navigator>
    )
}

const HomeStack = createNativeStackNavigator()
const HomeStackNavigator = () => {
    return(
        <HomeStack.Navigator>

            <HomeStack.Screen name="Restaurants" component={HomeScreen} />
            <HomeStack.Screen name='Restaurant' component={RestaurantDetailsPage} screenOptions={{ headerShown: false }} />
            <HomeStack.Screen name='Dish' component={DishDetailsScreen} />
            <HomeStack.Screen name='Basket' component={Basket} />
        </HomeStack.Navigator>
    )
}

const OrderStack = createNativeStackNavigator()
const OrderStackNavigator = () => {
    return (
        <OrderStack.Navigator>

            <OrderStack.Screen name="Orders" component={OrderScreen} />
            <OrderStack.Screen name='Order' component={OrderDetails} />
        
        </OrderStack.Navigator>
    )
}
export default  RootNavigator