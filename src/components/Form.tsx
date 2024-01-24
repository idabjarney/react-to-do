import React, { useState } from 'react';
import FormTextInput from './FormTextInput';
import FormSubmitBtn from './FormSubmitBtn';

type Props = {
  setToDos: any;
};

const Form = ({ setToDos }: Props) => {
  const [toDoValue, setToDoValue] = useState<string>('');

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    setToDos((currentToDos: string[]) => [...currentToDos, toDoValue]);
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <FormTextInput setToDoValue={setToDoValue} />
        <FormSubmitBtn />
      </form>
    </div>
  );
};

export default Form;
