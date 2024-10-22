import { StyleSheet, Text, View } from 'react-native'
import React from 'react';
import Feather from '@expo/vector-icons/Feather';

const BackButton = () => {
  return (
    <View>
     <Feather name="arrow-left" size={24} color="black" />
    </View>
  )
}

export default BackButton

const styles = StyleSheet.create({})