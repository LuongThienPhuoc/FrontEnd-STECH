import './App.css';
import ResponsiveAppBar from './Components/AppBar';
import NavigationBar from './Components/NavigationBar';
import Body from './Components/Body'
function App() {
  document.title = 'VnExpress - Báo tiếng Việt nhiều người xem nhất'
  return (
    <div className="App">
      <ResponsiveAppBar></ResponsiveAppBar>
      <NavigationBar></NavigationBar>
      <Body></Body>
    </div>
  );
}

export default App;
