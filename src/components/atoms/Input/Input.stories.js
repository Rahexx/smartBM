import React from 'react';
import Input from './Input';

export default {
  title: 'Components/Atoms/Input',
  component: Input,
};

export const mainInput = () => <Input placeholder="Nazwa kategorii" />;
export const FormInput = () => <Input form placeholder="Kategoria" />;
export const SearchInput = () => <Input search placeholder="Szukaj kategorii" />;
