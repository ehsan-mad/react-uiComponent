import React, { useState } from "react";

const PaymentForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Payment Successful ${JSON.stringify(formData)}`);
  };
  const [expireDate, setExpireDate] = useState("");
  const handleChange = (e) => {
    if (e.target.name === "expiryDate") {
      let value = e.target.value.replace(/\D/g, "");
      if (value.length > 2) {
        value = `${value.slice(0, 2)} / ${value.slice(2, 4)}`;
      }
      setExpireDate(value);
      setFormData({ ...formData, [e.target.name]: value });
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  const [formData, setFormData] = useState({
    cardHolder: "",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
  });
  return (
    <div className="bg-slate-100 flex justify-center items-center min-h-screen">
      <div className="bg-white rounded-lg shadow-lg p-6 w-96">
        <h2 className="text-2xl font-semibold text-center text-gray-700 mb-4">
          Payment Details
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="flex text-gray-600">CardHolder Name</label>
            <input
              type="text"
              name="cardHolder"
              value={formData.cardHolder}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg focus:border-2 focus:border-blue-500 focus:outline-none "
              required
            ></input>
          </div>
          <div>
            <label className="flex text-gray-600">Card Number</label>
            <input
              type="text"
              name="cardNumber"
              value={formData.cardNumber}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg focus:border-2 focus:border-blue-500 focus:outline-none "
              required
            ></input>
          </div>
          <div className="flex gap-4">
            <div className="w-1/2">
              <label className="flex text-gray-600">Expiry Date(mm/yy)</label>
              <input
                type="text"
                name="expiryDate"
                value={formData.expiryDate}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-lg focus:border-2 focus:border-blue-500 focus:outline-none "
                required
              ></input>
            </div>
            <div className="w-1/2">
              <label className="flex text-gray-600">CVV</label>
              <input
                type="password"
                name="cvv"
                value={formData.cvv}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-lg focus:border-2 focus:border-blue-500 focus:outline-none "
                required
              ></input>
            </div>
          </div>
          <button
            type="submit"
            className="bg-blue-400 text-white rounded-lg hover:bg-blue-500 transition w-full py-2"
          >
            Pay Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default PaymentForm;
