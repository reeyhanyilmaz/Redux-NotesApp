import './App.css';
import Search from './components/Search/Search';
import Header from './components/Header/Header';
import TextArea from './components/TextArea/TextArea';
import Content from './components/Content/Content';


function App() {
  return (  
    <div className="App">
      <Header />
      <Search /> 
      <TextArea />    
      <Content />
    </div>
  );
}

export default App;
