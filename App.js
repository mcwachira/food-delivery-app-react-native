import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Image } from 'react-native';
import HomeScreen from './src/screens/HomeScreen';
import RestaurantDetailsPage from './src/screens/RestaurantDetailsScreen';
import MenuDishDetails from './src/screens/MenuDishDetails';
export default function App() {
  return (
    <View style={styles.container}>
  {/* restaurant item*/}



<MenuDishDetails/>
    
{/* <RestaurantDetailsPage/> */}
     {/* <HomeScreen/> */}
      <StatusBar style='auto'/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',

  },
  
});
