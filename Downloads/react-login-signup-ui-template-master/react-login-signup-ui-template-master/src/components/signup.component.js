import React, { Component } from 'react';

export default class SignUp extends Component {
  render() {
    return (
      <form>
        <h3>إنشاء حساب</h3>

        <div className="mb-3">
          <label>الاسم الأول</label>
          <input
            type="text"
            className="form-control"
            placeholder="الاسم الأول"
          />
        </div>

        <div className="mb-3">
          <label>الاسم الأخير</label>
          <input type="text" className="form-control" placeholder="الاسم الأخير" />
        </div>

        <div className="mb-3">
          <label>عنوان البريد الإلكتروني</label>
          <input
            type="email"
            className="form-control"
            placeholder="أدخل عنوان بريدك الإلكتروني"
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

        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            إنشاء حساب
          </button>
        </div>
        <p className="forgot-password text-right">
          مسجل بالفعل؟ <a href="/sign-in">تسجيل الدخول؟</a>
        </p>
      </form>
    );
  }
}
