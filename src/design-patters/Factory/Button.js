import React from 'react';

const Button = ({name, ...rest}) => (
    <button {...rest}>{name}</button>
);

export default Button;
