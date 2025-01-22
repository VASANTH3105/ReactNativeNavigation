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
        const response = await fetch('https://randomuser.me/api/?results=18');

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

    fetchUser();
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
          <Text style={styles.contact}>{item.email}</Text>
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
        numColumns={2}
        columnWrapperStyle={styles.row} 
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
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
  row: {
    justifyContent: 'space-between', // Ensures even spacing in the row
    marginBottom: 12,
  },
  card: {
    backgroundColor: '#ffffff',
    width: '48%', // Keeps space for spacing
    alignItems: 'center',
    padding: 8,
    borderRadius: 5,
    
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 30, // Circular image
    marginBottom: 10,
  },
  info: {
    alignItems: 'center',
  },
  name: {
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  location: {
    fontSize: 12,
    color: '#555',
    textAlign: 'center',
  },
  contact: {
    fontSize: 10,
    color: '#007AFF',
    textAlign: 'center',
  },
});

export default RandomUser;
