

const LogIn = () => {
  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="flex items-center justify-center border-2 rounded-2xl w-[32rem] p-8 shadow-lg bg-white">
          <form action="" className="flex flex-col gap-2 p-12 w-full">
            <h2 className="font-bold text-xl text-center">Login</h2>
            <label htmlFor="">Email</label>
            <input type="email" name="" id="" className="rounded p-2 border-1" />
            <label htmlFor="">Password</label>
            <input type="password" name="" id="" className="rounded p-2 border-1" />
            <div className=" flex items-center justify-center">
            <button className="border-1 my-4 bg-indigo-700 rounded text-white p-2">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default LogIn
