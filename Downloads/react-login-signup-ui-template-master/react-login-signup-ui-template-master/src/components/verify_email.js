import React, { Component } from 'react';
import './verify_email.css'

export default class VerifyEmail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      digit1: '',
      digit2: '',
      digit3: '',
      digit4: '',
      digit5: '',
      digit6: ''
    };
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const enteredCode = Object.values(this.state).join('');
    const verificationCode = "123456"; // الرمز التحقق الخاص بك (استبدله برمز التحقق الفعلي الخاص بك)
    if (enteredCode === verificationCode) {
      // توجيه إلى صفحة ResetPassword إذا كان الرمز صحيحًا
      // قد تحتاج إلى استخدام React Router للتنقل
      // مثال: this.props.history.push('/ResetPassword');
      window.location.href = "/ResetPassword"; // توجيه إلى صفحة ResetPassword
    } else {
      alert("رمز التحقق غير صحيح. يرجى المحاولة مرة أخرى."); // تنبيه إذا كان الرمز غير صحيح
    }
  };

  render() {
    return (
      <div className="container">
        <h1>تحقق من بريدك الإلكتروني</h1>
        <p className="instruction">
          لقد قمنا بإرسال رمز التحقق إلى عنوان بريدك الإلكتروني. الرجاء التحقق
          من صندوق الوارد الخاص بك وإدخال الرمز أدناه.
        </p>
        <form onSubmit={this.handleSubmit} className="verification-form">
          <div className="verification-code">
            <input
              type="text"
              name="digit1"
              maxLength="1"
              value={this.state.digit1}
              onChange={this.handleChange}
              required
              className="verification-input"
              style={{ fontSize: '20px', width: '50px',height:'50px' }} // Adjust font size and width as needed

            />
            <input
              type="text"
              name="digit2"
              maxLength="1"
              value={this.state.digit2}
              onChange={this.handleChange}
              required
              className="verification-input"
              style={{ fontSize: '20px', width: '50px',height:'50px' }} // Adjust font size and width as needed

            />
            <input
              type="text"
              name="digit3"
              maxLength="1"
              value={this.state.digit3}
              onChange={this.handleChange}
              required
              className="verification-input"
              style={{ fontSize: '20px', width: '50px',height:'50px' }} // Adjust font size and width as needed

            />
            <input
              type="text"
              name="digit4"
              maxLength="1"
              value={this.state.digit4}
              onChange={this.handleChange}
              required
              className="verification-input"
              style={{ fontSize: '20px', width: '50px',height:'50px' }} // Adjust font size and width as needed

            />
            <input
              type="text"
              name="digit5"
              maxLength="1"
              value={this.state.digit5}
              onChange={this.handleChange}
              required
              className="verification-input"
              style={{ fontSize: '20px', width: '50px',height:'50px' }} // Adjust font size and width as needed

            />
       <input
  type="text"
  name="digit6"
  maxLength="1"
  value={this.state.digit6}
  onChange={this.handleChange}
  required
  className="verification-input"
  style={{ fontSize: '20px', width: '50px',height:'50px' }} // Adjust font size and width as needed
  

        />
        <br/>

          </div>
          
          <button type="submit" className='verify'>تحقق</button>
        </form>
        <p className="resend-instruction">
          لم تستلم البريد الإلكتروني؟ <a href="#">إعادة إرسال البريد الإلكتروني للتحقق</a>
        </p>
      </div>
    );
  }
}
