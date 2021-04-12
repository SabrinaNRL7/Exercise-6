import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, Image, ScrollView} from 'react-native';
import Axios from 'axios';
import UsersListAPI from '../../molecules/UserList';

const UserListPage = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    //axios
    Axios.get('https://jsonplaceholder.typicode.com/users').then(result => {
      setUsers(result.data);
    });
  }, []);

  console.log(users);
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles.title}>Users List</Text>
        {users.map(item => (
          <UsersListAPI
            key={item.id}
            name={item.name}
            userName={item.username}
            email={item.email}
            address={`${item.address.street}, ${item.address.suite}, ${item.address.city}, ${item.address.zipcode}`}
            phone={item.phone}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default UserListPage;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    paddingTop: 20,
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
  },
});