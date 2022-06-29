import './App.css';
import ResponsiveAppBar from './Components/AppBar';
import NavigationBar from './Components/NavigationBar';
import Body from './Components/Body'
import ScrollBackTop from './Components/ScrollBackTop';
import Footer from './Components/Footer';
function App() {
  document.title = 'VnExpress - Báo tiếng Việt nhiều người xem nhất'
  return (
    <div className="App">
      <ResponsiveAppBar></ResponsiveAppBar>
      <NavigationBar></NavigationBar>
      <Body></Body>
      <ScrollBackTop></ScrollBackTop>
      <Footer></Footer>
    </div>
  );
}

export default App;
