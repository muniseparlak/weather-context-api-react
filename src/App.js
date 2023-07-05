
import './App.css';
import './styles.css'
import { WeatherProvider } from './context/weathercontext';
import Section from './components/section';
import Card from './components/card';

function App() {
  return (
    <div className="App">
      <WeatherProvider>
        <Section/>
        <Card/>
      </WeatherProvider>
      
    </div>
  );
}

export default App;
