import Navigationbar from "./components/bootstrap/Navigationbar";
import Greetings from "./components/Greetings";


function App() {
  return (
    <>
      <Navigationbar />
      <h1>React Mastery begins Now!</h1>
      <Greetings />
      <h2 className="text-3xl font-bold underline text-red-800">Hello world!</h2>
    </>
  );
}

export default App;
