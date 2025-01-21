import { View, Text, Alert, Image, FlatList, StyleSheet } from 'react-native';
import React, { useEffect, useState } from 'react';

const RandomUser = () => {
  const [user, setUser] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchUser = async () => {
      setLoading(true);
      try {
        const response = await fetch('https://randomuser.me/api/?results=8');

        if (!response.ok) {
          Alert.alert('Error fetching data');
          return;
        }

        const data = await response.json();
        setUser(data.results);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUser(); // Call function once
  }, []);

  if (loading) {
    return <Text style={styles.loading}>Loading...</Text>;
  }

  if (error) {
    return <Text style={styles.error}>Error: {error}</Text>;
  }

  const renderItem = ({ item }: any) => {
    return (
      <View style={styles.card}>
        <Image source={{ uri: item.picture.thumbnail }} style={styles.image} />
        <View style={styles.info}>
          <Text style={styles.name}>
            {item.name.first} {item.name.last}
          </Text>
          <Text style={styles.location}>
            {item.location.city}, {item.location.country}
          </Text>
          <Text style={styles.contact}>
            {item.email} | {item.phone}
          </Text>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={user}
        keyExtractor={(item: any) => item.login.uuid}
        renderItem={renderItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    //backgroundColor: '#f5f5f5',
  },
  loading: {
    fontSize: 18,
    textAlign: 'center',
    marginTop: 20,
  },
  error: {
    fontSize: 18,
    textAlign: 'center',
    color: 'red',
    marginTop: 20,
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    marginVertical: 5,
    padding: 10,
    borderRadius: 8,
    elevation: 1, // Shadow effect
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25, // Circular image
    marginRight: 10,
  },
  info: {
    flex: 1,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  location: {
    fontSize: 14,
    color: '#555',
  },
  contact: {
    fontSize: 10,
    fontWeight: 'light',
    color: '#007AFF',
  },
});

export default RandomUser;
