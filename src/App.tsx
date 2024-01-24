import './App.scss';
import ListHeading from './components/ListHeading';
import Form from './components/Form';
import ListContainer from './components/ListContainer';
import { useState } from 'react';

function App() {
  const [toDos, setToDos] = useState<string[]>([]);
  console.log(toDos);
  return (
    <div>
      <ListHeading></ListHeading>
      <Form setToDos={setToDos}></Form>
      <ListContainer toDos={toDos} />
    </div>
  );
}

export default App;
