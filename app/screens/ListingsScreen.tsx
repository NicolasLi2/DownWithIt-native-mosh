import { FlatList, StyleSheet } from 'react-native';
import Screen from '../components/Screen';
import Card from '../components/Card';
import colors from '../config/colors';
import routes from '../navigation/routes';
import listingsApi from '../api/listings';
import { useEffect, useState } from 'react';

type Listing = {
  id: number;
  title: string;
  price: number;
  images: { url: string }[];
};

export default function ListingsScreen({ navigation }: any) {
  const [listings, setListings] = useState([]);

  useEffect(() => {
    loadListings();
    // console.log(listings);
  }, []);

  const loadListings = async () => {
    const response = await listingsApi.getListings();
    // console.log(response);
    // @ts-ignore
    setListings(response.data);
  };

  return (
    <Screen style={styles.screen}>
      <FlatList
        data={listings}
        keyExtractor={(listing) => listing.id.toString()}
        renderItem={({ item }: { item: Listing }) => (
          <Card
            title={item.title}
            subTitle={'$' + item.price}
            imageUrl={item.images[0].url}
            onPress={() => navigation.navigate(routes.LISTING_DETAILS, item)}
          />
        )}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 20,
    backgroundColor: colors.light,
  },
});
