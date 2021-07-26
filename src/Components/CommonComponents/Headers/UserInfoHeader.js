import React from 'react';
import "../../../Stylesheets/Header.css";

export function UserInfoHeader(props) {
    return (
        <div className="header-outer">
            <div className="header-inner">
                <div className="header-left">
                    <p style={{fontSize: '21px', fontWeight:'700'}}>ZS Input</p>
                </div>
                <div className="header-right">
                    <i className="fa fa-user" style={{fontSize:'35px'}}/>
                </div>
            </div>
        </div>
    )
}