import React from 'react';
import * as components from "./index";
import PropTypes from "prop-types";

const FieldsController = ({variant, ...rest}) => {
    const C = components[variant];
    const Component = C || components["TextField"];

    return <Component {...rest}/>
};

export default FieldsController;

FieldsController.propTypes = {
    variant: PropTypes.oneOf(["Select", "TextField", "Button"]),
    className: PropTypes.string,
    style: PropTypes.object,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.func]),
    name: PropTypes.string,
    onChange: PropTypes.func,
    disabled: PropTypes.bool
}
