import React, { ReactNode } from 'react';
import Label from './styles';

interface Props {
  label: string;
  children: ReactNode;
}

function LabelComponent({ label, children }: Props) {
  return (
    <Label>
      <span>{label}</span>
      {children}
    </Label>
  );
}

export default LabelComponent;
