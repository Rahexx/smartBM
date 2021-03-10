import React, { useState } from 'react';
import AppContext from 'context';
import MainTemplate from 'template/MainTemplate';
import AddBookmark from 'components/molecules/AddBookmark/AddBookmark';
import BookmarksSide from 'components/organisms/BookmarksSide/BookmarksSide';
import CategorySide from 'components/organisms/CategorySide/CategorySide';

const initialStateCategories = [
  {
    name: 'Gry',
    bookmarks: [
      {
        title: 'Witcher',
        description:
          ' fabularna gra akcji wyprodukowana i wydana przez CD Projekt Red 19 maja 2015 na platformy Microsoft Windows, PlayStation 4 i Xbox One. Gra jest kontynuacją wydanego w 2007 roku Wiedźmina oraz Wiedźmina 2: Zabójców królów, który miał swoją premierę w 2011 roku.',
        link: 'https://store.steampowered.com/app/292030/The_Witcher_3_Wild_Hunt/',
      },
      {
        title: 'Civilization VI',
        description:
          'komputerowa strategiczna gra turowa stworzona przez Firaxis Games i wydana przez 2K Games 21 października 2016 roku na platformę Microsoft Windows oraz 9 lutego 2017 na system Linux',
        link: 'https://www.epicgames.com/store/pl/p/sid-meiers-civilization-vi',
      },
    ],
  },
];

const MainView = () => {
  const [categoryStore, setCategoryStore] = useState(initialStateCategories);
  const [active, setActive] = useState('');

  const addCategory = (name) => {
    const updateStore = [...categoryStore, { name, bookmarks: [] }];
    setCategoryStore(updateStore);
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

    setCategoryStore(newStore);
  };

  const contextValue = {
    categoryStore,
    active,
    addCategory,
    changeActive,
    addNewBookmark,
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
