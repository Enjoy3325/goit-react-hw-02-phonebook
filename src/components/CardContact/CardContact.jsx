import React from 'react';
export const CardContact = ({ id, name, number, deleteContact }) => {
  return (
    <li>
      <p>
        {name}:{number}
      </p>
      <button
        type="button"
        onClick={() => {
          deleteContact(id);
        }}
      >
        <span>Delete</span>
      </button>
    </li>
  );
};
