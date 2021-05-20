import React, { useMemo } from "react";
import ArrowsSortIcon from "../../../../assets/icons/arrows-sort.svg";
import ArrowUpIcon from "../../../../assets/icons/arrow-up.svg";
import ArrowDownIcon from "../../../../assets/icons/arrow-down.svg";

export const SortButton = (props) => {
  const { children, sortValue = "unsorted", onSortChange } = props;

  function handleSortChange() {
    if (sortValue === "unsorted") {
      onSortChange("ascending");
    } else if (sortValue === "ascending") {
      onSortChange("descending");
    } else if (sortValue === "descending") {
      onSortChange("unsorted");
    }
  }

  const iconSrc = useMemo(() => {
    if (sortValue === "unsorted") {
      return ArrowsSortIcon;
    } else if (sortValue === "ascending") {
      return ArrowUpIcon;
    } else if (sortValue === "descending") {
      return ArrowDownIcon;
    }
  }, [sortValue]);

  const iconClassActive =
    sortValue === "ascending" || sortValue === "descending";

  return (
    <button
      className={`sort-button ${iconClassActive ? "sort-button-active" : ""}`}
      onClick={handleSortChange}
    >
      <h3>{children}</h3>
      <img src={iconSrc} alt="Sort" />
    </button>
  );
};
