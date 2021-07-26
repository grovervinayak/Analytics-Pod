import React from 'react';

export function MainOuterTemplate(props) {
    return (
        <div style={{top: '75px', position: 'relative'}}>
            {props.children}
        </div>
    )
}