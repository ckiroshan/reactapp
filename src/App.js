import Greetings from "./components/Greetings";
import Password from "./components/Password";

function App() {
  return (
    <>
      <h1>React Mastery begins Now!</h1>
      <Greetings />
      <Password isValid={true} />
      <Password isValid={false} />
    </>
  );
}

export default App;
