import {View, Text, Button, Image, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import DocumentPicker from 'react-native-document-picker';

const FilePicker = () => {
  const [pickedImage, setPickedImage] = useState(null);

  const selectDoc = async () => {
    try {
      const doc = await DocumentPicker.pick({
        type: [DocumentPicker.types.allFiles],
      });
      setPickedImage(doc[0]); // Access the first file from the array
      console.log('Picked Document:', doc);
    } catch (error) {
      if (DocumentPicker.isCancel(error)) {
        console.log('User cancelled the picker', error);
      } else {
        console.log('Error picking document:', error);
      }
    }
  };

  return (
    <View style = {styles.container}>
      <Text>File Picker</Text>
      <View>
        <Button onPress={() => selectDoc()} title="Upload File" />
        {/* Safely access pickedImage properties */}
        {pickedImage && (
          <View style={{marginTop: 20}}>
            <Image
              source={{uri: pickedImage.uri}}
              style={{width: 200, height: 200}}
            />

            <Text>Name: {pickedImage.name}</Text>
            <Text>Type: {pickedImage.type}</Text>
            <Text>Size: {pickedImage.size} bytes</Text>
            <Text>URI: {pickedImage.uri}</Text>
          </View>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#000000',

    }
})

export default FilePicker;
