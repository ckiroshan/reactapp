import Navigationbar from "./components/bootstrap/Navigationbar";
import Greetings from "./components/Greetings";
import Customcomp from "./components/customhooks/Customcomp";

function App() {
  return (
    <>
      <Navigationbar />
      <h1 className="text-3xl font-bold underline">React Mastery begins Now!</h1>
      <Greetings />
      <Customcomp />
    </>
  );
}

export default App;
