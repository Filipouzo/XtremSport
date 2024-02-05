import React from 'react';

const Bouton = (props) => {


    
    return (
        <button 
            className='button'
            type={props.type || "button"}
            onClick={props.onclickProps}
        >
            {props.children}
        </button>
    );
};

export default Bouton;