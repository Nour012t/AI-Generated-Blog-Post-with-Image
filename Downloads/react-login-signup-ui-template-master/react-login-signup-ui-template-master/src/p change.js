import React, { Component } from 'react';

export default class PasswordChanged extends Component {
  render() {
    return (
      <div className="container">
            
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Twitter_Verified_Badge.svg/244px-Twitter_Verified_Badge.svg.png"
          alt="تم تغيير كلمة المرور"
          className="header-image"
        />
        <br/>
        <h1>تم تغيير كلمة المرور بنجاح</h1>
        <a href="/sign-in">العودة إلى تسجيل الدخول</a>
      </div>
    );
  }
}
