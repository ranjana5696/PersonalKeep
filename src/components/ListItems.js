import React from "react";

function ListItems(props) {
  return (
    <>
      <li key={props.index}>
        <i
          className="fa-solid fa-circle-xmark removeBtn"
          onClick={() => {
            props.onSelect(props.id);
          }}
        />
        {props.itemVal}
      </li>
    </>
  );
}

export default ListItems;
