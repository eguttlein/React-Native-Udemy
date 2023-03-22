import {FlatList, StyleSheet, View} from 'react-native';
import axios from 'axios';
import {useEffect, useState} from 'react';
import Card from './Card';

const baseUrl = 'https://jsonplaceholder.typicode.com';

export default function List() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get(`${baseUrl}/users`).then((response) => {
      setUsers(response.data);
    });
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={users}
        renderItem={(user) => <Card userInfo={user} />}
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
