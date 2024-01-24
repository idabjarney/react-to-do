import React, { useState } from 'react';
import FormTextInput from './FormTextInput';
import FormSubmitBtn from './FormSubmitBtn';

const Form = () => {
  const [toDoValue, setToDoValue] = useState<string>('');

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
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
