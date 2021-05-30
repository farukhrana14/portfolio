import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import SimpleSlider from './components/SimpleSlider/SimpleSlider';
import MyWorks from './components/Header/MyWorks/MyWorks';
import CallToActionOne from './components/CallToActionOne/CallToActionOne';
import BlogWorks from './components/BlogWorks/BlogWorks';
import CallToActionTwo from './components/CallToActionTwo/CallToActionTwo';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import ShareThis from './../src/components/CallToActionTwo/ShareThis';

function App() {
  return (
    <div className="App container">
      <Header/>
      <ShareThis/>
      <SimpleSlider/>
      <MyWorks/>
      <CallToActionOne/>
      <BlogWorks/>
      <CallToActionTwo/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
