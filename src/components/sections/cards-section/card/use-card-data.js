import { useEffect, useState } from "react";

// https://stackoverflow.com/questions/1129216/sort-array-of-objects-by-string-property-value
function sortListItems(a, b, property) {
  if (a[property] < b[property]) {
    return -1;
  }
  if (a[property] > b[property]) {
    return 1;
  }
  return 0;
}

export const useCardData = (title, data) => {
  const [listData, setListData] = useState([]);
  const [originalItems, setOriginalItems] = useState([]);

  function onSortChange(title, value) {
    if (value === "ascending") {
      const newItems = [...listData.items];
      newItems.sort((a, b) => sortListItems(a, b, title));
      setListData({
        headers: [
          ...listData.headers.map((header) => {
            if (header.title === title) {
              return {
                ...header,
                sortValue: "ascending",
              };
            }
            return {
              ...header,
              sortValue: "unsorted",
            };
          }),
        ],
        items: newItems,
      });
    }

    if (value === "descending") {
      const newItems = [...listData.items];
      newItems.reverse();
      setListData({
        headers: [
          ...listData.headers.map((header) => {
            if (header.title === title) {
              return {
                ...header,
                sortValue: "descending",
              };
            }
            return {
              ...header,
              sortValue: "unsorted",
            };
          }),
        ],
        items: newItems,
      });
    }

    if (value === "unsorted") {
      setListData({
        headers: [
          ...listData.headers.map((header) => ({
            ...header,
            sortValue: "unsorted",
          })),
        ],
        items: originalItems,
      });
    }
  }

  useEffect(() => {
    let newListData = [];
    let originalItems = [];
    if (title === "Capsules") {
      const items = data.map((item) => ({
        Type: item.type,
        Status: item.status,
      }));

      newListData = {
        headers: [
          {
            title: "Type",
            sortValue: "unsorted",
          },
          {
            title: "Status",
            sortValue: "unsorted",
          },
        ],
        items,
      };

      originalItems = items;
    }

    if (title === "Rockets") {
      const items = data.map((item) => ({
        Country: item.country,
        Name: item.name,
      }));

      newListData = {
        headers: [
          {
            title: "Country",
            sortValue: "unsorted",
          },
          {
            title: "Name",
            sortValue: "unsorted",
          },
        ],
        items,
      };

      originalItems = items;
    }

    if (title === "Crew") {
      const items = data.map((item) => ({
        Name: item.name,
        Agency: item.agency,
      }));

      newListData = {
        headers: [
          {
            title: "Name",
            sortValue: "unsorted",
          },
          {
            title: "Agency",
            sortValue: "unsorted",
          },
        ],
        items,
      };

      originalItems = items;
    }

    if (title === "Starlink") {
      const items = data.map((item) => ({
        "Object Name": item.spaceTrack.OBJECT_NAME,
        "Launch Date": item.spaceTrack.LAUNCH_DATE,
      }));

      newListData = {
        headers: [
          {
            title: "Object Name",
            sortValue: "unsorted",
          },
          {
            title: "Launch Date",
            sortValue: "unsorted",
          },
        ],
        items,
      };

      originalItems = items;
    }

    setOriginalItems(originalItems);
    setListData(newListData);
  }, [title, data]);

  return { listData, originalItems, onSortChange };
};
