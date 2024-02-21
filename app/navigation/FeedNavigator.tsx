import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ListingsScreen from '../screens/ListingsScreen';
import ListingDetailsScreen from '../screens/ListingDetailsScreen';
import routes from './routes';

const Stack = createNativeStackNavigator();

export default function FeedNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        presentation: 'modal',
        animation: 'slide_from_bottom',
        headerShown: false,
      }}
    >
      <Stack.Screen name={routes.LISTINGS} component={ListingsScreen} />
      <Stack.Screen
        name={routes.LISTING_DETAILS}
        component={ListingDetailsScreen}
      />
    </Stack.Navigator>
  );
}
