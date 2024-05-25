import Navigationbar from "./components/bootstrap/Navigationbar";
import Greetings from "./components/Greetings";
import Events from "./components/minicomponents/Events";

function App() {
  return (
    <>
      <Navigationbar />
      <h1 className="text-3xl font-bold underline">React Mastery begins Now!</h1>
      <Greetings />
      <Events />
    </>
  );
}

export default App;
