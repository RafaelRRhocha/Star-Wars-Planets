import React from 'react';
import FilterByNumber from './filters/FilterByNumber';
import FilterName from './filters/FilterNameInput';

export default function Header() {
  return (
    <header>
      <div className="flex items-center gap-4 p-4">
        <FilterName />
        <FilterByNumber />
      </div>
    </header>
  );
}
