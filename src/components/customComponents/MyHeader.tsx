import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Button,
} from 'react-native';
import React, {useContext} from 'react';
import SearchBar from './SearchBar';
import imageLib from '../../../assets/AssetExports';
import Categories from './Categories';
import Icon from 'react-native-vector-icons/FontAwesome';
import {AuthContext} from '../context/AuthContext';

const MyHeader = ({navigation}: any) => {
  const {user, logout} = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <TouchableOpacity onPress={() => console.log('clicked')}>
          <Image style={styles.image} source={imageLib.rdimage} />
        </TouchableOpacity>
        {/* <Image style={styles.profileImage} source={imageLib.profileimage} />  */}
        <TouchableOpacity onPress={() => navigation.navigate('StackDrawer')}>
          <View style={styles.userContainer}>
            <Text>{user}</Text>

            <Icon
              name="user-circle-o"
              size={25}
              color={'#888'}
              style={styles.icon}
            />
          </View>
        </TouchableOpacity>
      </View>
      <SearchBar />
      <Categories />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    margin: 0,
    padding: 8,
    elevation: 5,
    //shadowColor: '#000',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  icon: {
    marginHorizontal: 10,
  },
  myHeader: {
    marginVertical: 10,
    fontSize: 20,
    fontWeight: 'bold',
  },
  image: {
    width: 100,
    height: 20,
    marginHorizontal: 10,
  },
  logoContainer: {
    marginBottom: 5,
    paddingBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  profileImage: {
    width: 30,
    height: 30,
    borderRadius: 15,
    marginHorizontal: 10,
  },
  userContainert: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  userContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    fontWeight: 'light',
    fontSize: 16,
    backgroundColor: '#ffffff',
    marginHorizontal: 5,
    paddingVertical: 8,
    paddingHorizontal: 0,
    paddingLeft: 10,
    borderColor: '#34343450', //jet black
    borderWidth: 0.5,
    borderRadius: 50,
  },
});

export default MyHeader;
