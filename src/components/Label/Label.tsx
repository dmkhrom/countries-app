import React from 'react';
import Label from './styles';

type Props = {
  label: string;
  children: JSX.Element;
};

function LabelComponent({ label, children }: Props) {
  return (
    <Label>
      <span>{label}</span>
      {children}
    </Label>
  );
}

export default LabelComponent;
