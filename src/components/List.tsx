import React from 'react';
import ListItem from './ListItem';

const List = ({ toDos }: any) => {
  return (
    <ul>
      {toDos.map((toDo: string) => (
        <ListItem key={toDo}>{toDo}</ListItem>
      ))}
    </ul>
  );
};

export default List;
