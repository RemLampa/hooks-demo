import React, { useState } from 'react';
import styled from 'styled-components';
import { v4 } from 'uuid';

const Form = styled.div`
  margin: 2em;
  padding: 1.5em;
  border: none;
  border-radius: 5px;
  background-color: #F5F5F5;
`;

const Button = styled.button`
  margin-left: 1em;
`;

function ItemForm({ onSubmit, submitText }) {
  const [ itemName, updateItemName ] = useState('');

  const id = v4();
  const inputFieldId = `item-name-field-${id}`;

  function handleChange(e) {
    updateItemName(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (!itemName) {
      return;
    }

    const item = {
      name: itemName,
      done: false,
      list: [],
    };

    onSubmit(item);
  }

  return (
    <Form>
      <label htmlFor={inputFieldId}>
        Item Name:{' '}
        <input htmlFor={inputFieldId}
          type="text"
          onChange={handleChange}
          value={itemName} />
      </label>
      <Button type="submit" onClick={handleSubmit}>{submitText}</Button>
    </Form>
  );
}

export default ItemForm;
