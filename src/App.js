import './App.css';
//import FocusInput from './hooks/useRefhooks/FocusInput';
//import Countercall from './hooks/useCallbackhooks/Countercall';
//import Counter from './hooks/useMemohooks/Counter';
//import Forms from './hooks/useStatehooks/Forms';
import Counter from './hooks/useReducerhooks/Counter';
function App() {
  return (
    <div className='App'>
      <h1>Hooks</h1>
      <Counter />
    </div>
  );
}

export default App;
