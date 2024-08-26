import MyButton from "./components/utilities/button/Mybutton"
import WhoAmI from "./components/whoAmI/WhoAmI"; 
import SocialMedia from "./components/utilities/social/SocialMedia";
import './App.css'

function App() {
  return (
    <div className="mainDesign">
      <WhoAmI name="Rza" surname="Talibov" age="99" status="student" />
      <WhoAmI name="Fraz" surname="Ahmad" age="33" status="student" />
      <WhoAmI name="Eshaban" surname="Younis" age="23" status="student" />
      <WhoAmI name="Zara" surname="Ejaz" age="13" status="student" />
      <WhoAmI name="Fizza" surname="BOSS" age="14" status="Teacher" />
      <MyButton b_name="send" b_class="success" b_type="button"/>
      <MyButton b_name="Register" b_class="warning " b_type="submit" cssStyle={{ color: 'white'}}  />
      <MyButton b_name="Login" b_class="info" b_type="submit" />
      <ul className="social_media_ul">
        <SocialMedia icon_name="facebook" />
        <SocialMedia icon_name="twitter" />
        <SocialMedia icon_name="github" />
        <SocialMedia icon_name="twitch" />
      </ul>
    </div>
  );
}

export default App;




// import Header from './components/header/Header';
// import Navbar from './components/navbar/Navbar';
// import Article from './components/article/Article';
// import Aside from './components/aside/Aside';
// import Footer from './components/footer/Footer';

// import './App.css';

// function App() {
//   return (
    
//     <div className="main">
//       <Header/>
//       <Navbar/>
//       <Article/>
//       <Aside/>
//       <Footer/>
//     </div>
    
//   );
// }

// export default App;
