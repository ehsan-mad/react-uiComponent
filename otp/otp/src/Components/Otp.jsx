import React, { useState } from "react";

const Otp = () => {
  const [otp, setotp] = useState(["", "", "", "", "", ""]);
  const inputRefs = [];
  const handleChange = (index, value) => {
    if (isNaN(value)) {
      return;
    }
    const otpcopy = [...otp];
    otpcopy[index] = value;
    setotp(otpcopy);
    if (index < 5 && value !== "") {
      inputRefs[index + 1].focus();
    }
  };
  const handlekeychange= (index,e)=>{
    console.log(e.key);
    if(e.key ==="Backspace" && !otp[index] && index>0){
      inputRefs[index-1].focus();
    }
  }
const handleSubmit =(e)=>{
    e.preventDefault()
    alert(`Otp ${otp.join("")}`)
}
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="rounded-lg shadow-lg p-8 w-80">
        <h2 className="font-semibold text-center text-2xl text-gray-700 mb-4">
          Enter OTP
        </h2>
        <form action="" className="space-y-4" onSubmit={handleSubmit}>  
          <div className="justify-center gap-2 flex">
            {otp.map((data, index) => (
              <input
                type="text"
                key={index}
                maxLength={1}
                ref={(input) => (inputRefs[index] = input)}
                onChange={(e) => handleChange(index, e.target.value)}
                value={data}
                onKeyDown={(e) => {handlekeychange(index,e)}}
                className="w-10 h-12 text-center text-xl rounded-lg shadow-lg border focus:border-none focus:outline-none focus:ring-2 focus:ring-blue-500 "
                required
              ></input>
            ))}
          </div>
          <button className="w-full bg-blue-500 py-2 hover:bg-blue-800 text-white transition rounded-lg " type="submit">Verify Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Otp;
