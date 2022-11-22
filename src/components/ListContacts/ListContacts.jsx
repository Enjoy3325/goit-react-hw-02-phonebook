import { nanoid } from 'nanoid';
import React from 'react';

export const ListContacts = ({ id, contacts }) => {
  const serchComplited = contactsId => {
    this.setState(
        prevState => ({
            contacts: prevState.contacts.map(contact => {
                if (contact.id === contactsId) {
            return {
                        ...contact,
                        id: !contact.id
                    }
                }
          return (
            <div>
              <ul>
                <li id={id}>
                  <p>{contact}</p>
                </li>
              </ul>
            </div>
                );

        }
      })
    ));
  };
};


