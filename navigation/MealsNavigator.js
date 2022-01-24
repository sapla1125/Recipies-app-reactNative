import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createAppContainer } from 'react-navigation';
import CategoriesScreen from "../screens/CategoriesScreen"
import CategoryMealsScreen from "../screens/CategoryMealsScreen"
import MealDetailScreen from '../screens/MealDetailScreen';



const Stack = createStackNavigator();

function MealsNavigator() {
  return (
      <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name="Categories " component={CategoriesScreen} />
            <Stack.Screen name="Meal Category" component={CategoryMealsScreen} />
            <Stack.Screen name="Meal Details" component={MealDetailScreen} />
        
        </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MealsNavigator;