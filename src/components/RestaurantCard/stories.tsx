import React from 'react'
import { StyleSheet, View } from 'react-native'
import { storiesOf } from '@storybook/react-native'

import RestaurantCard from './component'
import constants from '../../configs/constants'

const RestaurantCardStory = () => (
  <View style={styles.container}>
    <RestaurantCard
      title="Joes Pizzeria"
      restaurantImg={{ uri: constants.DUMMY_PIC }}
      ratings={4.4}
      reviewCount={84}
      onPress={() => ({})}
    />
  </View>
)

storiesOf('Components', module).add('RestaurantCard', () => <RestaurantCardStory />)

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
})
