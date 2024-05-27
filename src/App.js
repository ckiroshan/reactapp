import Navigationbar from "./components/bootstrap/Navigationbar";
import Forms from "./components/Forms";
import Greetings from "./components/Greetings";

function App() {
  return (
    <>
      <Navigationbar />
      <h1 className="text-3xl font-bold underline">React Mastery begins Now!</h1>
      <Greetings />
      <Forms />
    </>
  );
}

export default App;
