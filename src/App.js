import logo from './logo.svg';
import './App.css';
import { LinkButton } from './components/LinkButton';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <LinkButton title="Ver no Google Maps" url="https://goo.gl/maps/VpExroRC5gtXfGh39"/>
        <LinkButton title="Ver no Waze" url="https://waze.com/ul/h6gggzugpy"/>
      </header>
    </div>
  );
}

export default App;
