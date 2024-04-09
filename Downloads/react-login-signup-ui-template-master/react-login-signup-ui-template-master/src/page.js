import React, { Component } from 'react';

export default class First extends Component {
    render() {
        return (
            <div className='first full-screen-background'>
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <div className="container">
                    
                    
                    <button type="submit" className="log" onClick={() => { window.location.href = '#'; }}>
                        <a href="/Identify_Role" style={{ color: 'white', textDecoration: 'none' }}>تسجيل الدخول</a>
                    </button>
                    <button type="submit" className="sign" onClick={() => { window.location.href = '#'; }}>
                        <a href="/sign-up" style={{ color: 'white', textDecoration: 'none' }}>تسجيل جديد</a>
                    </button>
                </div>
            </div>
        );
    }
}
