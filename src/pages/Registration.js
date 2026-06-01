import React from "react";
import "../assets/css/registration.css";

function Registration() {

  const sendOTP = () => {
    alert("OTP Sent!");
  };

  const togglePassword = (id) => {
    const input = document.getElementById(id);
    if (input.type === "password") {
      input.type = "text";
    } else {
      input.type = "password";
    }
  };

  return (
    <>
      <section className="form-section">
        <div className="container">
          <div className="luxury-card">
            <div className="form-title">CREATE ACCOUNT</div>

            <form id="registerForm">

              <div className="mb-4">
                <label className="form-label">FULL NAME</label>
                <input type="text" className="form-control" placeholder="Enter your name" />
              </div>

              <div className="mb-4">
                <label className="form-label">EMAIL ADDRESS</label>
                <input type="email" className="form-control" placeholder="Enter your email" />
              </div>

              <button
                type="button"
                className="btn luxury-btn mb-3 w-100"
                onClick={sendOTP}
              >
                VERIFY EMAIL
              </button>

              <div className="mb-4">
                <label className="form-label">ENTER OTP</label>
                <input type="text" className="form-control" placeholder="Enter OTP" />
              </div>

              <div className="mb-4">
                <label className="form-label">ADDRESS</label>
                <input type="text" className="form-control" placeholder="Enter your address" />
              </div>

              <div className="mb-4">
                <label className="form-label">GENDER</label><br />
                <input type="radio" name="gender" /> Male
                <input type="radio" name="gender" className="ms-3" /> Female
                <input type="radio" name="gender" className="ms-3" /> Other
              </div>

              <div className="mb-4 position-relative">
                <label className="form-label">PASSWORD</label>
                <input type="password" id="password" className="form-control" />
                <i
                  className="fa fa-eye position-absolute"
                  style={{ top: "45px", right: "15px", cursor: "pointer" }}
                  onClick={() => togglePassword("password")}
                ></i>
              </div>

              <div className="mb-4 position-relative">
                <label className="form-label">CONFIRM PASSWORD</label>
                <input type="password" id="confirmPassword" className="form-control" />
                <i
                  className="fa fa-eye position-absolute"
                  style={{ top: "45px", right: "15px", cursor: "pointer" }}
                  onClick={() => togglePassword("confirmPassword")}
                ></i>
              </div>

              <button type="submit" className="btn luxury-btn w-100 py-2">
                REGISTER
              </button>

            </form>
          </div>
        </div>
      </section>
    </>
  );
}

export default Registration;