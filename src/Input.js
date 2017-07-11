import React, { Component } from 'react';

const Input = ({
  placeholder,
  type,
}) => {
  return (
    <input
      type={ type }
      placeholder={ placeholder }
    />
  );
};

export default Input;