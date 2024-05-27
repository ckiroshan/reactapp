import Navigationbar from "./components/bootstrap/Navigationbar";
import Greetings from "./components/Greetings";
// 1. Import (createContext) 
import { createContext } from "react";
import ComponentC from "./components/contextapi/ComponentC";

// 2. Creating instance of (createContext)
export const Data = createContext();

function App() {
  const name = "Kane Norton";

  return (
    <>
      <Navigationbar />
      <h1 className="text-3xl font-bold underline">React Mastery begins Now!</h1>
      <Greetings />
      {/* 3. Wrap our component into Provider Component */}
      <Data.Provider value={name}>
        <ComponentC />
      </Data.Provider>
    </>
  );
}

export default App;
