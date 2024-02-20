import Icon from './app/components/Icon';
import ListItem from './app/components/ListItem';
import Screen from './app/components/Screen';

export default function App() {
  return (
    <Screen>
      {/* <Icon name='email' size={50} backgroundColor='red' iconColor='white' /> */}
      <ListItem
        title='My title'
        // subTitle='My subtitle'
        ImageComponent={<Icon name='email' />}
      />
    </Screen>
  );
}
