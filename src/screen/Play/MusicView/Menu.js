import { COLOR, FAMILY, SIZE } from '@src/theme/typography'
import React from 'react'
import MenuNative, {
  MenuOptions,
  MenuOption,
  MenuTrigger,
  renderers
} from 'react-native-popup-menu'

const { ContextMenu } = renderers

const Menu = ({ id, content, openView }) => {
  const render = () => {
    return (
      <>
        <MenuOption value='View' text='View' />
      </>
    )
  }

  const onSelect = (value) => {
    if (value === 'View') {
      openView(id)
    }
  }

  const vProps = {
    renderer: ContextMenu,
    onOpen: () => console.log('onOpen'),
    onSelect
  }

  return (
    <MenuNative {...vProps}>
      <MenuTrigger>{content}</MenuTrigger>
      <MenuOptions customStyles={styles.menuOption}>
        {render()}
      </MenuOptions>
    </MenuNative>
  )
}

const styles = {
  menuOption: {
    optionsContainer: {
      width: 120
    },
    optionWrapper: {
      paddingHorizontal: 15,
      paddingVertical: 8,
      borderBottomWidth: 1,
      borderColor: COLOR.SMOKE_DARK
    },
    optionText: {
      fontFamily: FAMILY.MTN_REGULAR,
      fontSize: SIZE.SIZE_14,
      color: COLOR.DARK
    }
  }
}

export default Menu
