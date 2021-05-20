import React, { useState } from "react";
import { List } from "../../../../core/list/list";
import { Modal } from "../../../../core/modal/modal";
import { SortButtons } from "../../../../core/sort-buttons/sort-buttons";

export const Card = (props) => {
  const { src, title, alt } = props;
  const [isModalOpen, setIsModalOpen] = useState(false);

  const onClick = (e) => {
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
          <SortButtons />
          <div className="lists-container">
            <List />
            <List />
            <div className="gradient" />
          </div>
        </Modal>
      ) : null}
    </>
  );
};
