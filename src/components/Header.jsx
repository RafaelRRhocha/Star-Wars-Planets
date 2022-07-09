import React from 'react';
import FilterByNumber from './filters/FilterByNumber';
import FilterName from './filters/FilterNameInput';

export default function Header() {
  return (
    <header>
      <div>
        <FilterName />
        <FilterByNumber />
      </div>
    </header>
  );
}
