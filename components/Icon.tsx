import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Feather from '@expo/vector-icons/Feather'

const Icon = ({name, size, color, onPress, ...props}: {name: any; size: number; color: string; onPress?: () => void }) => {
  return (
    <Pressable onPress={onPress} {...props}>
      <Feather name={name} size={size} color={color}/>
    </Pressable>
  )
}

export default Icon