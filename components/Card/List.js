import {FlatList, StyleSheet, Text, View} from 'react-native';
import axios from 'axios';
import Card from './Card';

import {useQuery} from 'react-query';

const baseUrl = 'https://jsonplaceholder.typicode.com';

export default function List({navigation}) {
  const {isLoading, error, data} = useQuery({
    queryKey: ['userList'],
    queryFn: () => axios.get(`${baseUrl}/users`).then((res) => res.data),
  });

  if (isLoading) return <Text>Loading...</Text>;

  if (error) return <Text>An error has occurred: {error.message}</Text>;

  function handleProfile(user) {
    navigation.navigate('Profile', {user: user});
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={(itemData) => (
          <Card userInfo={itemData} press={() => handleProfile(itemData)} />
        )}
        keyExtractor={(user) => user.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    marginVertical: 10,
    justifyContent: 'space-around',
  },
});
