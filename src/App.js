import Navigationbar from "./components/bootstrap/Navigationbar";
import Greetings from "./components/Greetings";
import Counteffect from "./components/Counteffect";

function App() {
  return (
    <>
      <Navigationbar />
      <h1 className="text-3xl font-bold underline">React Mastery begins Now!</h1>
      <Greetings />
      <Counteffect />
    </>
  );
}

export default App;
