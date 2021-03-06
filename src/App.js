import React from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';

const items = [
  {
    title: 'What is React?',
    content: 'React is a fron end javascript framewor',
  },
  {
    title: 'Why use React?',
    content: 'React is a favorite JS library among engineers',
  },
  {
    title: 'How do you use React?',
    content: 'You use React by creating components',
  },
];

const options = [
  {
    label: 'The color Red',
    value: 'Red',
  },
  {
    label: 'The color Green',
    value: 'Green',
  },
  {
    label: 'The shade of Blue',
    value: 'Blue',
  },
];

export default () => {
  return (
    <div>
      <Dropdown options={options} />
    </div>
  );
};
