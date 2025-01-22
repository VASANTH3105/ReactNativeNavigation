import React, {useState} from 'react';
import {
  Modal,
  View,
  Text,
  Button,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';

const MyModal = () => {
  const [visible, setVisible] = useState(false);

  const width = Dimensions.get('window').width;

  return (
    <View style={styles.container}>
      <Button title="Show Modal" onPress={() => setVisible(true)} />

      <Modal
        visible={visible}
        transparent={true} // Makes the background semi-transparent
        animationType="fade" // Animation type: 'slide', 'fade', 'none'
        onRequestClose={() => setVisible(false)} // Handles back button on Android
      >
        <View style={styles.modalBackground}>
          <View style={styles.modalContainer}>
            <Text>This is a Modal!</Text>
            <TouchableOpacity onPress={() => setVisible(false)}>
              <Text style={styles.button}>Button</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00000050',
  },
  modalContainer: {
    justifyContent: 'center',
    width: '80%',
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#343434',
    padding: 10,
    paddingHorizontal: 15,
    borderRadius: 50,
    color: 'white',
    textAlign: 'center',
    marginTop: 10,
  },
});

export default MyModal;
