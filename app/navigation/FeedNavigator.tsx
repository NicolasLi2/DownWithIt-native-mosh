import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ListingsScreen from '../screens/ListingsScreen';
import ListingDetailsScreen from '../screens/ListingDetailsScreen';

const Stack = createNativeStackNavigator();

export default function FeedNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        presentation: 'modal',
        animation: 'slide_from_bottom',
      }}
    >
      <Stack.Screen name='Listings' component={ListingsScreen} />
      <Stack.Screen
        name='ListingDetails'
        component={ListingDetailsScreen}
        // options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
