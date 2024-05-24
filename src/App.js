import Greetings from "./components/Greetings";
import Userprops from "./components/Userprops";

function App() {
  return (
    <>
      <h1>React Mastery begins Now!</h1>
      <Greetings />
      <Userprops 
      img="https://avatars.githubusercontent.com/u/117834125?v=4" 
      name="Kane WebDev" 
      age={18} 
      hobbies={["Coding", "Eating", "Sleeping"]} />
    </>
  );
}

export default App;
