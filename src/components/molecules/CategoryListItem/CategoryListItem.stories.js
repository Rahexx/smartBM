import React from 'react';
import CategoryListItem from './CategoryListItem';

export default {
  title: 'Components/Molecules/CategoryListItem',
  component: CategoryListItem,
};

export const CategoryItem = () => <CategoryListItem name="Elektronika" />;
export const CategoryItemActive = () => <CategoryListItem name="Elektronika" />;
