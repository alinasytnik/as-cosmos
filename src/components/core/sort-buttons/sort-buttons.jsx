import React, { useState } from "react";
import { SortButton } from "./sort-button/sort-button";

export const SortButtons = () => {
  const [firstSortValue, setFirstSortValue] = useState();
  const [secondSortValue, setSecondSortValue] = useState();

  function onFirstSortChange(value) {
    setFirstSortValue(value);
    setSecondSortValue("unsorted");
  }

  function onSecondSortChange(value) {
    setSecondSortValue(value);
    setFirstSortValue("unsorted");
  }

  return (
    <div className="sort-buttons">
      <SortButton sortValue={firstSortValue} onSortChange={onFirstSortChange}>
        Type
      </SortButton>
      <SortButton sortValue={secondSortValue} onSortChange={onSecondSortChange}>
        Status
      </SortButton>
    </div>
  );
};
