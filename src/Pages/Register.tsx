const Register = () => {
  return (
    <>
    <div className="flex flex-col items-center border-2 w-2xl justify-center rounded-2xl ">
      
      <div className="flex flex-col p-16 w-full gap-2">
        <h2 className="text-center font-bold">Register</h2>
        <label htmlFor="">Enter your name</label>
        <input type="text" name="" id="" className="border-1 rounded p-1"/>
        <label htmlFor="">House Address</label>
        <input type="text" name="" id="" className="border-1  rounded p-1" />
        <label htmlFor="">Email</label>
        <input type="email" name="" id="" className="border-1  rounded p-1" />
        <label htmlFor="">Telephone</label>
        <input type="text" name="" id="" className="border-1  rounded p-1"/>
        <label htmlFor="">Resident ID Number</label>
        <input type="text" name="" id="" className="border-1  rounded p-1" />
      </div>
    </div>
    </>
  );
};

export default Register;
