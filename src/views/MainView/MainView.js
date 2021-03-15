/* eslint-disable no-undef */
/* eslint-disable consistent-return */
/* eslint-disable array-callback-return */
import React, { useState } from 'react';
import AppContext from 'context';
import MainTemplate from 'template/MainTemplate';
import AddBookmark from 'components/molecules/AddBookmark/AddBookmark';
import BookmarksSide from 'components/organisms/BookmarksSide/BookmarksSide';
import CategorySide from 'components/organisms/CategorySide/CategorySide';

const MainView = () => {
  const initialStateCategories = JSON.parse(localStorage.getItem('categoryStore'));
  const [categoryStore, setCategoryStore] = useState(
    initialStateCategories.length ? initialStateCategories : [],
  );

  const [active, setActive] = useState('');

  const addCategory = (name) => {
    const updateStore = [...categoryStore, { name, bookmarks: [] }];
    setCategoryStore(updateStore);
    localStorage.setItem('categoryStore', JSON.stringify(updateStore));
  };

  const changeActive = (nameCategory) => {
    setActive(nameCategory);
  };

  const addNewBookmark = (title, link, description) => {
    const newStore = categoryStore;

    for (let i = 0; i < newStore.length; i++) {
      if (newStore[i].name === active) {
        const newBookmark = {
          title,
          description,
          link,
        };

        newStore[i].bookmarks.push(newBookmark);
      }
    }

    setCategoryStore([...newStore]);
    localStorage.setItem('categoryStore', JSON.stringify([...newStore]));
  };

  const deleteBookmark = (id) => {
    const newStore = categoryStore;

    for (let i = 0; i < newStore.length; i++) {
      if (newStore[i].name === active) {
        newStore[i].bookmarks.splice(id - 1, 1);
      }
    }

    setCategoryStore([...newStore]);
    localStorage.setItem('categoryStore', JSON.stringify([...newStore]));
  };

  const contextValue = {
    categoryStore,
    active,
    addCategory,
    changeActive,
    addNewBookmark,
    deleteBookmark,
  };

  return (
    <AppContext.Provider value={contextValue}>
      <MainTemplate>
        <AddBookmark />
        <CategorySide />
        <BookmarksSide title="Ogólne" />
      </MainTemplate>
    </AppContext.Provider>
  );
};

export default MainView;
