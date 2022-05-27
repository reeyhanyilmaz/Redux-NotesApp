import './App.css';
import Search from './components/Search/Search';
import Header from './components/Header/Header';
import TextArea from './components/TextArea/TextArea';

function App() {
  return (
    <div className="App">
      <Header />
      <Search /> 
      <TextArea />    
    </div>
  );
}

export default App;
