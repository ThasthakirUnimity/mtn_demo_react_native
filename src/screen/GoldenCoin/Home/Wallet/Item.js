import React from 'react'
import { TouchableOpacity, Image, View } from 'react-native'
import { Text } from '@src/component/Basic'

import styles from '../styles'
import { navigate } from '@src/navigation'
import { __ } from '@src/utility/translation'

const Item = ({ item }) => {
  return (
    <View style={styles.walletContent}>
      <TouchableOpacity
        style={styles.walletDisplay}
        onPress={() => {
          navigate('GoldenCoinOfferView', { id: item.id })
        }}
      >
        <Image source={{ uri: item.field_image }} style={styles.shopImg} />
      </TouchableOpacity>
      <View style={styles.walletGroup}>
        <View style={styles.walletRow}>
          <Text style={styles.walletText} numberOfLines={1}>{item.title}</Text>
        </View>
        <View style={styles.walletRow}>
          <Text style={styles.walletDesc} numberOfLines={2}>{item.description}</Text>
        </View>
      </View>
    </View>
  )
}

export default Item

// export default class extends React.Component {
//   render() {
//     const item = this.props.item

//     return (
//       <View style={styles.walletContent}>
//         <TouchableOpacity style={styles.walletDisplay} onPress={() => {
//           navigate('')
//         }}>
//           <Image source={item.image} style={styles.walletImg} />
//         </TouchableOpacity>
//         <Text text='medium' size='text14' color='dark' style={styles.walletText}>{item.desc}</Text>
//         <Text text='medium' size='text10' color='grey' style={styles.pointsText}>{item.points}</Text>
//       </View>
//     )
//   }
// }
