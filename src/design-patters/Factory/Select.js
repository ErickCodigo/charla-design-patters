import React from 'react';

const Select = ({options, ...rest}) => (
    <select {...rest}>
        {options.map(({value, name}) => (
            <option value={value}>{name}</option>
        ))}
    </select>
);

export default Select;
