import React, { useState } from 'react'
import { Text, View } from 'react-native'

import { Button } from '@src/component/Form'
import { __ } from '@src/utility/translation'
import styles from './../styles'
import Tariff from './Tariff'
import SubCategories from './SubCategories'
import Comparison from './Comparison'
import Support from '@src/component/Support'

const Category = ({
  category,
  selectedCategory,
  tariffs,
  fetching,
  isComparison,
  selectCategory,
  activatePlan,
  openComparison,
  openComparisonList
}) => {
  const [selectedPlans, setSelectedPlans] = useState({})
  const [selectedPlansCount, setSelectedPlansCount] = useState(0)

  const selectPlan = id => {
    const _selectedPlans = { ...selectedPlans }
    if (_selectedPlans[id]) {
      delete _selectedPlans[id]
    } else {
      _selectedPlans[id] = 1
    }
    setSelectedPlans(_selectedPlans)
    setSelectedPlansCount(Object.keys(_selectedPlans).length)
  }

  const compareList = () => {
    const list = tariffs.filter(t => !!selectedPlans[t.id])
    if (list.length < 1) {
      Support.showError({
        layout: 'toast',
        message: __('Please select atleast 2 plans to compare')
      })
    } else {
      openComparisonList(list)
    }
  }

  const renderList = () => {
    return (
      <>
        <SubCategories
          category={category}
          selectedCategory={selectedCategory}
          selectCategory={selectCategory}
        />
        <Tariff
          list={tariffs}
          fetching={fetching}
          activatePlan={activatePlan}
        />
      </>
    )
  }
  const renderComparison = () => {
    return (
      <>
        <Comparison
          list={tariffs}
          selectedPlans={selectedPlans}
          selectPlan={selectPlan}
        />
      </>
    )
  }
  return (
    <>
      <View style={styles.headerRow}>
        <View>
          <Text style={styles.tariffHeader}>{category.name}</Text>
        </View>
        {isComparison
          ? (
            <Button style={styles.planBtn} onPress={compareList}>
              <Text style={styles.planBtnText}>
                {__('Select ')} {selectedPlansCount}-{tariffs.length}
              </Text>
            </Button>
            )
          : (
            <Button style={styles.planBtn} onPress={openComparison}>
              <Text style={styles.planBtnText}>{__('Compare Plans')}</Text>
            </Button>
            )}
      </View>

      {isComparison ? renderComparison() : renderList()}
    </>
  )
}

export default Category
