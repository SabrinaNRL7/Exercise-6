import React, {useState} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import Input from '../../atoms/Input';
import Gap from '../../atoms/Gap';
import Button from '../../atoms/Button';

const App = () => {
  const [namaLengkap, setNamaLengkap] = useState('');
  const [userName, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleSubmit = () => {
    const data = {
      namaLengkap: namaLengkap,
      userName: userName,
      email: email,
      address: address,
      phoneNumber: phoneNumber,
    };
    console.log(data);
  };

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles.registration}>Registration</Text>
        <Gap height={40} />
        <Text style={styles.labelInput}>Name</Text>
        <Input
          value={namaLengkap}
          placeholder="Masukan nama lengkap anda"
          onChangeText={e => setNamaLengkap(e)}
        />
        <Text style={styles.labelInput}>Username</Text>
        <Input
          value={userName}
          placeholder="Masukan username anda"
          onChangeText={e => setUsername(e)}
        />
        <Text style={styles.labelInput}>Email</Text>
        <Input
          value={email}
          placeholder="Masukan email anda"
          onChangeText={e => setEmail(e)}
        />
        <Text style={styles.labelInput}>Address</Text>
        <Input
          value={address}
          placeholder="Masukan alamat anda"
          onChangeText={e => setAddress(e)}
        />
        <Text style={styles.labelInput}>Phone Number</Text>
        <Input
          value={phoneNumber}
          keyboardType="numeric"
          placeholder="Masukan Nomor telepon anda"
          onChangeText={e => setPhoneNumber(e)}
        />
        <Gap height={20} />
        <Button label="Register" onSbumit={() => handleSubmit()} />
      </ScrollView>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 24,
    marginVertical: 24,
  },
  registration: {
    fontSize: 36,
    fontWeight: '700',
  },
  labelInput: {
    fontSize: 14,
    fontWeight: 'bold',
  },
})