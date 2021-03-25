/* eslint-disable no-undef */
/* eslint-disable consistent-return */
/* eslint-disable array-callback-return */
import React, { useState } from 'react';
import AppContext from 'context';
import MainTemplate from 'template/MainTemplate';
import AddBookmark from 'components/molecules/AddBookmark/AddBookmark';
import ConfirmDelete from 'components/molecules/ConfirmDelete/ConfirmDelete';
import BookmarksSide from 'components/organisms/BookmarksSide/BookmarksSide';
import CategorySide from 'components/organisms/CategorySide/CategorySide';

const MainView = () => {
  const initialStateCategories = JSON.parse(localStorage.getItem('categoryStore'));
  const [categoryStore, setCategoryStore] = useState(
    initialStateCategories === undefined ? initialStateCategories : [],
  );

  const [active, setActive] = useState(0);

  const addCategory = (name) => {
    const id = categoryStore.length === 0 ? 1 : categoryStore[categoryStore.length - 1].id + 1;

    const updateStore = [...categoryStore, { id, name, bookmarks: [] }];
    setCategoryStore(updateStore);
    localStorage.setItem('categoryStore', JSON.stringify(updateStore));
  };

  const changeActive = (idCategory) => {
    setActive(idCategory);
  };

  const addNewBookmark = (title, link, description) => {
    const newStore = categoryStore;

    for (let i = 0; i < newStore.length; i++) {
      if (Number(newStore[i].id) === Number(active)) {
        const newBookmark = {
          title,
          description,
          link,
        };

        newStore[i].bookmarks.push(newBookmark);
        break;
      }
    }

    setCategoryStore([...newStore]);
    localStorage.setItem('categoryStore', JSON.stringify([...newStore]));
  };

  const deleteBookmark = (id) => {
    const newStore = categoryStore;

    for (let i = 0; i < newStore.length; i++) {
      if (Number(newStore[i].id) === Number(active)) {
        newStore[i].bookmarks.splice(id - 1, 1);
        break;
      }
    }

    setCategoryStore([...newStore]);
    localStorage.setItem('categoryStore', JSON.stringify([...newStore]));
  };

  const deleteCategory = () => {
    const newStore = categoryStore;

    for (let i = 0; i < newStore.length; i++) {
      if (Number(newStore[i].id) === Number(active)) {
        newStore.splice(i, 1);
        setActive('');
        break;
      }
    }

    setCategoryStore([...newStore]);
    localStorage.setItem('categoryStore', JSON.stringify([...newStore]));
  };

  const sendActiveName = () => {
    const newStore = categoryStore;
    let activeName;

    for (let i = 0; i < newStore.length; i++) {
      if (Number(newStore[i].id) === Number(active)) {
        activeName = newStore[i].name;
        break;
      }
    }

    return activeName;
  };

  const contextValue = {
    categoryStore,
    active,
    addCategory,
    changeActive,
    addNewBookmark,
    deleteBookmark,
    deleteCategory,
    sendActiveName,
  };

  return (
    <AppContext.Provider value={contextValue}>
      <MainTemplate>
        <AddBookmark />
        <ConfirmDelete />
        <CategorySide />
        <BookmarksSide title="Ogólne" />
      </MainTemplate>
    </AppContext.Provider>
  );
};

export default MainView;
