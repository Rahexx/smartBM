import React from 'react';
import MainTemplate from 'template/MainTemplate';
import AddBookmark from 'components/molecules/AddBookmark/AddBookmark';
import BookmarksSide from 'components/organisms/BookmarksSide/BookmarksSide';
import CategorySide from 'components/organisms/CategorySide/CategorySide';

const MainView = () => (
  <MainTemplate>
    <AddBookmark />
    <CategorySide />
    <BookmarksSide title="Ogólne" />
  </MainTemplate>
);

export default MainView;
