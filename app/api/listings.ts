import client from './client';

const endpoint = '/listings';

const getListings = () => client.get(endpoint);

const addListing = (listing: any) => {
  const data = new FormData();
  data.append('title', listing.title);
  data.append('price', listing.price.toString());
  data.append('categoryId', listing.category.value);
  data.append('description', listing.description);

  listing.images.forEach((image: any, index: number) => {
    const detail = JSON.stringify({
      name: 'image' + index,
      type: 'image/jpeg',
      uri: image,
    });
    data.append('images', detail);
  });

  if (listing.location)
    data.append('location', JSON.stringify(listing.location));

  return client.post(endpoint, data);
};

export default {
  getListings,
  addListing,
};
