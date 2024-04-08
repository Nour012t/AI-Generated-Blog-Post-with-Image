import React, { Component } from 'react';
import './rolee.css'
export default class Identify_Role extends Component {
  handleSubmit = (event) => {
    event.preventDefault(); // منع السلوك الافتراضي لتقديم النموذج
    const الدورالمحدد = document.getElementById("الدور").value;
    if (الدورالمحدد !== "") {
      window.location.href = "log1.html"; // إعادة توجيه إلى log1.html إذا تم اختيار دور
    } else {
      alert("يرجى تحديد دورك"); // إظهار تنبيه إذا لم يتم تحديد دور
    }
  };

  render() {
    return (
      <div className="container">
        <h1 style={{textAlign: "center"}}> اهلا بك في موقعنا من فضلك حدد دورك</h1>
        <br />
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="الدور">اختر دورك</label>
          <select id="الدور" name="الدور" required>
            <option value="" disabled defaultValue>اختر دورك</option>
            <option value="متطوع">متطوع</option>
            <option value="المستفيد">جهة حكومية</option>
          </select>
          <button type="submit" onClick={() => { window.location.href = '/Login'; }}>
  <a href="/sign-in" style={{ color: 'inherit', textDecoration: 'none' }}>المتابعة</a>
</button>

        </form>
      </div>
    );
  }
}
