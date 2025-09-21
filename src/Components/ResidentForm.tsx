import { NavLink } from "react-router-dom"




const ResidentForm = () => {
  return (
    <>
      <div className="flex items-center rounded-2xl justify-center bg-gray-100 ">
        <div className="flex items-center justify-center py-4 px-10  border-2 w-[32rem] rounded-2xl bg-white shadow-lg">
          <form className="flex flex-col p-6  w-full gap-2">
            <h2 className="text-center font-bold text-xl mb-4">Generate Entry Permit</h2>
            <label htmlFor="">Visitors Name</label>
            <input type="text" name="" id="" className="border-1 rounded p-2" />
            <label htmlFor="">House Address</label>
            <input
              type="text"
              name=""
              id=""
              className="border-1  rounded p-2"
            />
            <label htmlFor="">Date</label>
            <input
              type="email"
              name=""
              id=""
              className="border-1  rounded p-2"
            />
            <label htmlFor="">Resident Telephone</label>
            <input
              type="text"
              name=""
              id=""
              className="border-1  rounded p-2"
            />
            {/* <label htmlFor="">Resident ID Number</label>
            <input
              type="text"
              name=""
              id=""
              className="border-1  rounded p-2"
            /> */}
            <div className=" flex items-center justify-center">
              <button className="border-1 my-2 bg-indigo-700 rounded text-white p-2">
                <NavLink to={"/code"}>Generate Code</NavLink>
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default ResidentForm
