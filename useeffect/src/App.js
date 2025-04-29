import Greeting from './Greeting';
import './App.css';
import Greeting2 from './Greeting2';

function App() {
  return (
    <div className="App">
      {/* <Greeting/> */}
      <Greeting2 randomMax={8}/>
      {/* when the component is unmounted (navigated to necxt page) cleanup side effect is executed */}
    </div>
  );
}

export default App;
