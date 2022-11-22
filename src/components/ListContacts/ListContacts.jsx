import { nanoid } from 'nanoid';
import { CardContact } from '../CardContact/CardContact';
import React from 'react';

export const ListContacts = ({ contacts, deleteContact }) => {
  return (
    <div>
      <ul>
        {contacts.map(({ name, number, id }) => {
          return (
            <CardContact>
              key={nanoid()} id={id} name={name} number={number}
              deleteContact={deleteContact}
            </CardContact>
          );
        })}
      </ul>
    </div>
  );
};
