import Header from './components/header/Header';
import Navbar from './components/navbar/Navbar';
import Article from './components/article/Article';
import Aside from './components/aside/Aside';
import Footer from './components/footer/Footer';

import './App.css';

function App() {
  return (
    
    <div className="main">
      <Header/>
      <Navbar/>
      <Article/>
      <Aside/>
      <Footer/>
    </div>
    
  );
}

export default App;
