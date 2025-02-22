import React from "react";

const AuthForm = () => {
  const [islogin, setislogin] = React.useState(true);
  const [formData, setformData] = React.useState({name:"",email:"",password:""})
  const handleFormSubmit = (e) => {
    e.preventDefault()
    alert(`${islogin ? "Loggin in" : "Registering"} with ${formData.email}`)  }
  const handleInputChange = (e) => {
    setformData({...formData, [e.target.name]: e.target.value})
  }
  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-100">
      <div className="bg-white shadow-lg rounded-lg p-6 w-96">
        <h1 className="text-2xl font-bold text-center text-gray-700 mb-4">
          {islogin ? "Login":"Register Form"}
        </h1>
        <form onSubmit={handleFormSubmit} action="" className="space-y-4">
          {!islogin && (
            <div>
            <label className=" text-gray-600 flex">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="w-full px-3 py-2 rounded-lg border-2 border-gray-400 focus:outline-none  focus:border-blue-300"
              required
            ></input>
          </div>
          )}
          <div>
            <label className=" text-gray-600 flex">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full px-3 py-2 rounded-lg border-2 border-gray-400 focus:outline-none  focus:border-blue-300"
              required
            ></input>
          </div>
          <div>
            <label className="flex text-gray-600">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              className="w-full px-3 py-2 rounded-lg border-2 border-gray-400 focus:outline-none  focus:border-blue-300"
              required
            ></input>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-300 text-white py-2 rounded-lg hover:bg-blue-600 transition"
          >
            {islogin ? "Login" : "Register"}
          </button>
        </form>
        <p className="text-center text-gray-500 mt-4">
          {islogin ? "Don't have an account?" : "Already have an account?"}
          <button
            onClick={() => setislogin(!islogin)}
            className="text-blue-500 hover:underline"
          >
            {islogin ? "Register" : "Login"}
          </button>
        </p>
      </div>
    </div>
  );
};

export default AuthForm;
