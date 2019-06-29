import React from 'react';

const Marker = props => (
    <div style={
        {
            width: '32px',
            height: '32px',
            backgroundColor: 'red',
            border: '2px solid #fff',
            borderRadius: '100%',
            color: 'white',
            fontSize: 22,
            textAlign: 'center'
        }
    }
         {...props.onClick ? {onClick: props.onClick} : {}}
    >
        {props.number}
    </div>
);

export default Marker;