import React from 'react';

import {__} from '@src/utility/translation';
import Category from './Category';
import Placeholder from './Placeholder';

const List = ({
  categories,
  fetchingCategories,
  selectedCategories,
  tariffs,
  fetchingTariffs,
  isComparison,
  selectCategory,
  activatePlan,
  openComparison,
  openComparisonList,
}) => {
  if (fetchingCategories) {
    return <Placeholder />;
  }

  const keys = Object.keys(categories);

  const renderItem = id => (
    <Category
      id={id}
      selectedCategory={selectedCategories[id]}
      category={categories[id]}
      tariffs={tariffs[id]}
      fetching={fetchingTariffs[id]}
      isComparison={isComparison}
      selectCategory={selectCategory}
      activatePlan={activatePlan}
      openComparison={openComparison}
      openComparisonList={openComparisonList}
    />
  );

  return keys.map(renderItem);
};

export default List;
