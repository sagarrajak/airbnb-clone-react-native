import { View, Text } from 'react-native'
import React from 'react'
import { Link, Stack } from 'expo-router'
import ExploreHeader from '@/components/ExploreHeader'
import Listing from '@/components/Listing'

const Index = () => {
  return (
    <View style={{flex: 1}}>
      <Stack.Screen 
        options={{
          headerStyle: {},
          header: () => <ExploreHeader/>
        }}
      />
      <Listing/>
    </View>
  )
}

export default Index