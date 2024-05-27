import { useState } from "react";

const style = {
  container: "container py-6",
  heading: "font-bold text-3xl",
  formGroup: "sm:col-span-4",
  inputWrapper: "mt-2",
  inputContainer: "flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md",
  inputLabel: "flex select-none items-center pl-3 text-gray-500 sm:text-sm",
  inputField: "block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6",
  button: "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 my-1 mr-2 rounded",
};

const Forms = () => {
  const [username, SetUserName] = useState("");

  const handleChange = (event) => SetUserName(event.target.value);
  const handleSubmit = (event) => {
    event.preventDefault(); // Stops browser refresh
    console.log(`You submitted form with Username: ${username}`);
    SetUserName("");
  };

  return (
    <>
      <div className={style.container}>
        <h1 className={style.heading}>Demo Form</h1>
        <form onSubmit={handleSubmit}>
          <div className={style.formGroup}>
            <div className={style.inputWrapper}>
              <div className={style.inputContainer}>
                <span className={style.inputLabel}>Username: </span>
                <input type="text" value={username} onChange={handleChange} className={style.inputField} />
                <button className={style.button}>Submit</button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Forms;
