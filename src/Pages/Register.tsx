const Register = () => {
  return (
    <>
      <div className="flex items-center min-h-screen  justify-center bg-gray-100 ">
        <div className="flex items-center justify-center rounded-2xl p-10 border-2 w-[32rem] bg-white shadow-lg">
          <form className="flex flex-col p-6  w-full gap-2">
            <h2 className="text-center font-bold text-xl mb-4">Register</h2>
            <label htmlFor="">Enter your name</label>
            <input type="text" name="" id="" className="border-1 rounded p-2" />
            <label htmlFor="">House Address</label>
            <input
              type="text"
              name=""
              id=""
              className="border-1  rounded p-2"
            />
            <label htmlFor="">Email</label>
            <input
              type="email"
              name=""
              id=""
              className="border-1  rounded p-2"
            />
            <label htmlFor="">Telephone</label>
            <input
              type="text"
              name=""
              id=""
              className="border-1  rounded p-2"
            />
            <label htmlFor="">Resident ID Number</label>
            <input
              type="text"
              name=""
              id=""
              className="border-1  rounded p-2"
            />
            <div className=" flex items-center justify-center">
              <button className="border-1 my-4 bg-indigo-700 rounded text-white p-2">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;
