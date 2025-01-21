import { View, Text, StyleSheet, Image } from 'react-native';
import React from 'react';
import Carousel from 'react-native-reanimated-carousel';
import { Dimensions } from 'react-native';

const myData = [
  {
    id: 1,
    title: 'Rapid Data Technologies',
    imageUrl:
      'https://media.licdn.com/dms/image/v2/D5622AQFDJEIfDmFYew/feedshare-shrink_800/B56ZP5fNTbG4Ak-/0/1735057531307?e=1740614400&v=beta&t=7CNgeQ-vRJ0k2mNxzkB8svxnij46FG7u7dPXvGwqMw0',
  },
  {
    id: 2,
    title: 'Rapid Data Technologies',
    imageUrl:
      'https://media.licdn.com/dms/image/v2/D5622AQFGKuFJFJ4ORw/feedshare-shrink_1280/B56ZP5fNUAH0Ao-/0/1735057529247?e=1740614400&v=beta&t=U7KZ1t14QOEVbeufDfQMk0bQVF433IiOkPuaxuXn9iA',
  },
  {
    id: 3,
    title: 'Rapid Data Technologies',
    imageUrl:
      'https://media.licdn.com/dms/image/v2/D5622AQF_Qzkb3z00Uw/feedshare-shrink_800/B56ZP5fNVSHIAk-/0/1735057539365?e=1740614400&v=beta&t=KmTtyooHj_eVn0ul4Y_gzl88gcSjBPT6IHppq0lfDjQ',
  },
  {
    id: 4,
    title: 'Rapid Data Technologies',
    imageUrl:
      'https://media.licdn.com/dms/image/v2/D5622AQGbhRIXusTS5Q/feedshare-shrink_2048_1536/feedshare-shrink_2048_1536/0/1731306667740?e=1740614400&v=beta&t=XURw2FUKTP-Cu3UXDcjsjuRsDW8lxB3Ykeg--U60KZk',
  },
];

const MyCarousel = () => {
  const width = Dimensions.get('window').width;

  const renderItem = ({ item }: any) => (
    <View style={styles.card}>
      <Image source={{ uri: item.imageUrl }} style={styles.image} />
      <View style={styles.overlay}>
        <Text style={styles.title}>{item.title}</Text>
      </View>
    </View>
  );

  return (
    <View style={{ flex: 1 }}>
      <Carousel
        style={styles.myCarousel}
        data={myData}
        renderItem={renderItem}
        loop
        width={width}
        height={width / 2}
        autoPlay={true}
        scrollAnimationDuration={1000}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    position: 'relative', // Enables absolute positioning for the overlay
    overflow: 'hidden',
    marginHorizontal: 5,
    marginTop: 2,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: '100%',
    height: 190, // Adjust image height
    resizeMode: 'cover',
  },
  overlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    paddingVertical: 10,
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
    backgroundColor: '#00000050',
    width: '100%',
    height: '100%',
  },
  title: {
    fontSize: 12,
    fontWeight: 'medium',
    color: 'white',
    left: 10,
  },
  myCarousel: {
    //backgroundColor: "black",
  },
});

export default MyCarousel;
