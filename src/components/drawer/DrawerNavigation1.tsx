import {View, Text, Button, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {Dimensions} from 'react-native';
import Carousel from 'react-native-reanimated-carousel';

const DrawerNavigation1 = ({navigation}: {navigation: any}) => {
  const width = Dimensions.get('window').width;

  return (
    <View style={{flex: 1}}>
      <Carousel
        loop
        width={width}
        height={width / 2}
        autoPlay={true}
        data={[...new Array(6).keys()]}
        scrollAnimationDuration={1000}
        //onSnapToItem={index => console.log('current index:', index)}
        renderItem={({index}) => (
          <View
            style={{
              flex: 1,
              borderWidth: 1,
              justifyContent: 'center',
            }}>
            <Text style={{textAlign: 'center', fontSize: 30}}>{index}</Text>
          </View>
        )}
      />
    </View>
    // <View style={styles.container}>
    //   <Text style={styles.title}>Drawer Navigation 1</Text>
    //   <Text style={styles.description}>
    //     Welcome to the Drawer Navigation screen! Click the button below to navigate to the Home Screen.
    //   </Text>

    //   <TouchableOpacity
    //     style={styles.button}
    //     onPress={() => navigation.navigate("HomeScreen")}
    //   >
    //     <Text style={styles.buttonText}>Go to Home Screen</Text>
    //   </TouchableOpacity>
    // </View>
  );
};

export default DrawerNavigation1;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f2f2f2', // Light background color for a clean UI
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    color: '#666',
    marginBottom: 30,
    paddingHorizontal: 15,
  },
  button: {
    backgroundColor: '#6200EE', // Purple shade for the button
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 25,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
});
