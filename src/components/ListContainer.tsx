import React from 'react';
import List from './List';

const ListContainer = ({ toDos }: any) => {
  return (
    <div>
      <List toDos={toDos} />
    </div>
  );
};

export default ListContainer;
