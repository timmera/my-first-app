import { useState } from 'react';
import { TextInput } from './UI/TextInput';

export const DrinkSearch = () => {
  const [searchField, setSearchField] = useState('tea');

  return (
    <>
      <label>Search for drinks:</label>
      <TextInput />
      <p>{searchField}</p>
    </>
  );
};
