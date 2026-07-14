import React from 'react'
import { FlatList, View } from 'react-native'
import { Text } from '@src/component/Basic'
import { Button } from '@src/component/Form'

import Item from './Item'
import Placeholder from './Placeholder'
import { __ } from '@src/utility/translation'
import styles from '../styles'
import { navigate } from '@src/navigation'

const Wallet = (props) => {
  const renderItem = ({ item }) => (<Item item={item} />)

  const renderList = () => {
    if (props.fetching) {
      return <Placeholder />
    }
    return (
      <FlatList
        data={props.fetching ? [1, 2] : props.list}
        horizontal
        contentContainerStyle={styles.newContainer}
        showsHorizontalScrollIndicator={false}
        renderItem={renderItem}
        keyExtractor={item => (item.id)}
      />
    )
  }

  return (
    <View>
      <View style={styles.headerRow}>
        <Text style={styles.headerTitle}>{__('Momo Wallet Offer')} </Text>
        <Button onPress={() => { navigate('GoldenCoinMomo') }}>
          <Text style={styles.viewBtn}>{__('View All')}</Text>
        </Button>
      </View>
      {renderList()}
    </View>
  )
}

export default Wallet

// export default class extends React.Component {
//   constructor(props) {
//     super(props)

//     this.renderTemplate = this.renderTemplate.bind(this)
//     this.renderItem = this.renderItem.bind(this)
//   }

//   renderTemplate() {
//     return <Placeholder />
//   }

//   renderItem({ item }) {
//     return (
//       <Item
//         language={this.props.language}
//         item={item}
//       />
//     )
//   }

//   render() {
//     return (
//       <View>
//         <View style={styles.headerRow}>
//           <Text text='medium' size='text18' color='default'>Momo Wallet Offer</Text>
//           <Button>
//             <Text text='regular' size='text12' color='default'>View All</Text>
//           </Button>
//         </View>
//         <FlatList
//           data={this.props.fetching ? [1, 2] : this.props.list}
//           horizontal
//           contentContainerStyle={styles.newContainer}
//           showsHorizontalScrollIndicator={false}
//           renderItem={this.props.fetching ? this.renderTemplate : this.renderItem}
//           keyExtractor={item => (item.id)}
//         />
//       </View>
//     )
//   }
// }
