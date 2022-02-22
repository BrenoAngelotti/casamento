import './App.css';
import { LinkButton } from './components/LinkButton';
import Box from '@mui/material/Box';
import { Paper } from '@mui/material';

function App() {
  return (
    <div 
      className="App"
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL+'/img/pattern.jpg'})`,
        backgroundRepeat: 'repeat'
      }}
    >
        <Paper className='main-paper'>
          <h3>Celebração de casamento</h3>
          <h1>Vívian & Breno</h1>
          <p>
            Data: 14 de maio de 2022<br/>
            Local: Chácara Recanto das Paineiras<br/>
            Cornélio Procópio, PR
          </p>
          <Box sx={{ '& > :not(style)': { m: 1 } }}>
            <LinkButton title="Ver no Maps" url="https://goo.gl/maps/VpExroRC5gtXfGh39"/>
            <LinkButton title="Ver no Waze" url="https://waze.com/ul/h6gggzugpy"/>
          </Box>
        </Paper>
    </div>
  );
}

export default App;
