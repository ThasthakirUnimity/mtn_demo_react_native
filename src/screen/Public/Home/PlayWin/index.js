import React from 'react'
import { View, Text, Image, Dimensions } from 'react-native'
import Svg, { Path } from 'react-native-svg'
import LinearGradient from 'react-native-linear-gradient'
import { Button } from '@src/component/Form'
import { navigate } from '@src/navigation'
import { logClickEvent } from '@src/utility/analytics'
import { __ } from '@src/utility/translation'
import Placeholder from './Placeholder'
import styles from './../styles'
import { COLOR } from '@src/theme/typography'

const { width } = Dimensions.get('window')

// ── GameCard: image + gradient title overlay ──
const GameCard = ({ item }) => (
  <Button
    style={styles.gmThumb}
    onPress={() => {
      logClickEvent('HomeGameItem', { name: item.title })
      navigate('PlayGameView', { url: item.url })
    }}
  >
    <Image source={{ uri: item.images }} style={styles.gmThumbImg} resizeMode='cover' />
    <LinearGradient
      colors={['transparent', 'rgba(0,0,0,0.75)']}
      style={styles.gmThumbOverlay}
    >
      <Text style={styles.gmThumbTitle} numberOfLines={1}>{item.title}</Text>
    </LinearGradient>
  </Button>
)

// ── PlayWin: floating grid + curved red promo section ──
const PlayWin = (props) => {
  if (props.fetching) return <Placeholder />

  const items = (props.list || []).slice(0, 6)

  const renderRow = (key, rowItems) => (
    <View key={key} style={styles.gmGridRow}>
      {rowItems.map((item, i) => <GameCard key={String(item.id || i)} item={item} />)}
      {rowItems.length < 3 && Array(3 - rowItems.length).fill(null).map((_, i) => (
        <View key={`e${i}`} style={styles.gmThumbEmpty} />
      ))}
    </View>
  )

  return (
    <View style={styles.gmSection}>

      {/* ── Section header ── */}
      <View style={styles.gmSectionHeader}>
        <Text style={styles.gmCardTitle}>{__('Play and Win')}</Text>
        <Button
          onPress={() => {
            logClickEvent('HomeGamesViewAll')
            navigate('PlayGameList')
          }}
        >
          <Text style={styles.headerBtnText}>{__('View All')}</Text>
        </Button>
      </View>

      {/* ── Floating game grid (renders first, zIndex above red section) ── */}
      <View style={styles.gmFloatingGrid}>
        {renderRow('r1', items.slice(0, 3))}
        {renderRow('r2', items.slice(3, 6))}
      </View>

      {/* ── Curved red section (negative marginTop slides under grid) ── */}
      <View style={styles.gmRedContainer}>
        {/*
          Concave arch: home-bg shows through the scooped center,
          red fills the edges and connects seamlessly to content below.
          Path: top-left → arch dips to center (y=76) → top-right → bottom rect
        */}
        <Svg
          width={width - 40}
          height={92}
          viewBox={`0 0 ${width - 40} 92`}
        >
          <Path
            d={`M 0 76 Q ${(width - 40) * 0.5} 0 ${width - 40} 76 L ${width - 40} 92 L 0 92 Z`}
            fill={COLOR.PRIMARY}
          />
        </Svg>

        {/* Red content area */}
        <View style={styles.gmRedContent}>
          <Text style={styles.gmPromoTitle}>
            {__('Discover.')}{'\n'}{__('Install.')}{'\n'}{__('Play.')}
          </Text>
          <Text style={styles.gmPromoSubtitle}>
            {__('Choose your favourite games and enjoy unlimited entertainment.')}
          </Text>
          <Button
            style={styles.gmPromoBtn}
            onPress={() => {
              logClickEvent('HomeGamesViewAll')
              navigate('PlayGameList')
            }}
          >
            <Text style={styles.gmPromoBtnText}>{__('Explore Games')}</Text>
          </Button>
        </View>
      </View>

    </View>
  )
}

export default PlayWin
