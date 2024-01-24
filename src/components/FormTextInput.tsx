import React from 'react';

type Props = {
  setToDoValue: (value: string) => void;
};

const FormTextInput = ({ setToDoValue }: Props) => {
  return <input type="text" onChange={(e) => setToDoValue(e.target.value)} />;
};

export default FormTextInput;
