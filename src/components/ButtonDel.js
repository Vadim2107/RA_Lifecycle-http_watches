import React from 'react';

function ButtonDel(props) {
    return (
        <button type="submit" className="delete" onClick={props.onSubmit}>X</button>
    )
}

export default ButtonDel;
