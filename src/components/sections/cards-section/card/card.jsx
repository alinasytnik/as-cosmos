import React, { useState } from "react";
import { List, Modal, SortButton } from "../../../core";
import { useCardData } from "./use-card-data";

export const Card = (props) => {
  const { src, title, alt, data } = props;
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { listData, onSortChange } = useCardData(title, data);

  const onClick = () => {
    if (isModalOpen) {
      setIsModalOpen(false);
    } else {
      setIsModalOpen(true);
    }
  };

  const onClose = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <button className="card" onClick={onClick}>
        <img className="card-image" src={src} alt={alt} />
        <div className="card-gradient">
          <h3 className="card-title">{title}</h3>
        </div>
      </button>
      {isModalOpen ? (
        <Modal onClose={onClose}>
          <h1>{title}</h1>
          <div className="card-modal-sort-buttons">
            {listData.headers.map((header) => {
              return (
                <SortButton
                  key={header.title}
                  sortValue={header.sortValue}
                  onSortChange={(value) => onSortChange(header.title, value)}
                >
                  {header.title}
                </SortButton>
              );
            })}
          </div>
          <div className="card-modal-lists-container">
            {listData.headers.map((header, index) => (
              <List
                key={index}
                items={listData.items.map((item) => item[header.title])}
              />
            ))}

            <div className="card-modal-gradient" />
          </div>
        </Modal>
      ) : null}
    </>
  );
};

/**
 * header: [
 *   {
 *     title: string,
 *     sortValue: "unsorted" | "ascending" | "descending"
 *   },
 *   {
 *     title: string,
 *     sortValue: "unsorted" | "ascending" | "descending"
 *   }
 * ],
 * items: [
 *   {
 *     ["titleName"]: string,
 *     ["titleName"]: string,
 *   },
 * ],
 *
 * + originalItems state
 */
