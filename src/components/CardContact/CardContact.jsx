import { FiTrash2 } from 'react-icons/fi';
import { ButtonCad, Text } from './CardContact.styled';
import React from 'react';

export const CardContact = ({ id, name, number, handlDeleteContacts }) => {
  return (
    <li>
      <Text>
        {name}: {number}
      </Text>

      <ButtonCad
        type="button"
        onClick={() => {
          handlDeleteContacts(id);
        }}
      >
        <FiTrash2 />
      </ButtonCad>
    </li>
  );
};
