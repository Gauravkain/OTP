import React, { useState } from 'react'

const Otp = () => {
    const [otp, setOtp] = useState();

    const handleChange = (e) => {
        const value = e.target.value.replace(/\D/g, "");
        setOtp(value);
    };

    return (
        <div className="container">
            <h1>Phone Verification</h1>
            <br />
            <p>Enter the OTP you received on 89206-6XXXX</p>
            <br />
            <br />
            <div className="user-input">
                <input type="text" value={otp} id="text1" maxLength="1" onChange={handleChange} />
                <input type="text" value={otp} id="text2" maxLength="1" onChange={handleChange} />
                <input type="text" value={otp} id="text3" maxLength="1" onChange={handleChange} />
                <input type="text" value={otp} id="text4" maxLength="1" onChange={handleChange} />
                <input type="text" value={otp} id="text5" maxLength="1" onChange={handleChange} />
                <input type="text" value={otp} id="text6" maxLength="1" onChange={handleChange} />
            </div>

            <button>Verify Phone number</button>
        </div>
    )
}

export default Otp;
