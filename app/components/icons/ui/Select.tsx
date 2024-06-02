import React, { useState } from 'react';
import { WeightType } from '~/types/Data';

function Select() {
  const [selectedValue, setSelectedValue] = useState<WeightType>('lbs');

  const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = e.target.value as WeightType;

    setSelectedValue(selectedValue);
  };
  return (
    <div className="my-2">
      <select
        className="select select-bordered"
        onChange={handleSelect}
      >
        <option
          selected={selectedValue === 'lbs'}
          value={'lbs'}
        >
          lbs
        </option>
        <option
          selected={selectedValue === 'kgs'}
          value={'kgs'}
        >
          kgs
        </option>
      </select>
    </div>
  );
}

export default Select;
