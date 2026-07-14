import React, { useContext } from 'react'
import { View } from 'react-native'

import { Icon } from '@src/component/Basic'
import { Button, TextInput } from '@src/component/Form'
import styles from './styles'
import { Context } from './context'
import Support from '@src/component/Support'
import { __ } from '@src/utility/translation'

const SearchBox = () => {
  const { refSearch, searchKey, setSearchKey } = useContext(Context)
  const onSearch = () => {
    if (searchKey && searchKey.length < 2) {
      Support.showError({
        layout: 'toast',
        message: __('Please enter atleast 2 characters to search')
      })
      return
    }
    if (refSearch && refSearch.onSearch) {
      refSearch.onSearch()
    }
  }
  const onChangeSearchKey = (v) => setSearchKey(v)
  return (
    <View style={styles.search}>
      <TextInput
        style={styles.searchInput}
        onChangeText={onChangeSearchKey}
        onSubmitEditing={onSearch}
        value={searchKey}
      />
      <Button style={styles.searchBtn} onPress={onSearch}>
        <Icon name='search1' type='AntDesign' style={styles.searchIcon} />
      </Button>
    </View>
  )
}

export default SearchBox
