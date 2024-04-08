import React, { Component } from 'react';

export default class Login extends Component {
  render() {
    return (
      <form style={{ direction: 'rtl' }}>
        <h1>تسجيل الدخول</h1>

        <div className="mb-3">
          <label>عنوان البريد الإلكتروني</label>
          <input
            type="email"
            className="form-control"
            placeholder="أدخل البريد الإلكتروني"
          />
        </div>

        <div className="mb-3">
          <label>كلمة المرور</label>
          <input
            type="password"
            className="form-control"
            placeholder="أدخل كلمة المرور"
          />
        </div>

        <div className="mb-3">
          <div className="custom-control custom-checkbox">
            <input
              type="checkbox"
              className="custom-control-input"
              id="customCheck1"
            />
            <label className="custom-control-label" htmlFor="customCheck1">
              تذكرني
            </label>
          </div>
        </div>

        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            تسجيل الدخول
          </button>
        </div>
        <p className="forgot-password text-right">
           <a href="/ForgotPassword">هل نسيت كلمة المرور؟</a>
        </p>
      </form>
    );
  }
}
