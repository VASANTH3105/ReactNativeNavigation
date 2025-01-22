import { View, Text, Modal, Button, StyleSheet } from 'react-native'
import React, { useState } from 'react'

const BottomModal = () => {
    const [visible, setVisible] = useState(false);

  return (
    <View>
      <Modal
      visible = {visible}
      animationType='slide'
      transparent={true}
      onRequestClose={() => { setVisible(false) }}

      >
        <View style = {styles.modalContainer}>
        <Text>Hello</Text>
        <Button title='demo'/>
        </View>
      </Modal>
    </View>
  )
}

const styles = StyleSheet.create({
    modalContainer: {
        width: '100%',
    }
})
export default BottomModal