import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const UserList = ({name, userName, email, address, phone}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.listData}>
        Nama :<Text style={styles.normal}> {name}</Text>
      </Text>
      <Text style={styles.listData}>
        Username :<Text style={styles.normal}> {userName}</Text>
      </Text>
      <Text style={styles.listData}>
        Email :<Text style={styles.normal}> {email}</Text>
      </Text>
      <Text style={styles.listData}>
        Address :<Text style={styles.normal}> {address}</Text>
      </Text>
      <Text style={styles.listData}>
        Phone :<Text style={styles.normal}> {phone}</Text>
      </Text>
    </View>
  );
};

export default UserList;

const styles = StyleSheet.create({
  container: {
    borderColor: '#C5C5C5',
    borderWidth: 1,
    borderRadius: 10,
    paddingLeft: 26,
    paddingBottom: 10,
    paddingTop: 13,
    marginBottom: 30,
  },
  Label: {
    fontSize: 36,
    fontWeight: '700',
  },
  listData: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  normal: {
    fontSize: 14,
    fontWeight: 'normal',
  },
});