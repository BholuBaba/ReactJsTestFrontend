import React from 'react';

function Input(props) {
    return (
        <div className="form-group">
            <label htmlFor={props.id}>{props.label}</label>
            <input
                type={props.type}
                id={props.id}
                ref={props.ref}
                className="form-control"
            />
        </div>
    );
}
export default Input;