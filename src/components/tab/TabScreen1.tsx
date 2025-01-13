import { View, Text, Button } from 'react-native'
import React from 'react'

const TabScreen1 = ({navigation}: any) => {
  return (
    <View>
      <Text>TabScreen1</Text>
      <Button 
      onPress={() => navigation.navigate("HomeScreen")}
      title='back to HomeScreen'
      />
    </View>
  )
}

export default TabScreen1