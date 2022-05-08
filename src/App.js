import './App.css';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import {useState} from "react";
import Box from "./components/Box";
import Box1 from './components/Box1';
import Box3 from './components/Box3';
function App() {

  const [colorType, setColorType] = useState(true)

  return (
    
    <div className={colorType === true ? "pagina" : "paginaLight"}> 
    <div className= "font" onClick={() => setColorType(!colorType)}> 
    {colorType === true ? 
    <p className='darkTitle'>Dark Mode <DarkModeIcon className='moonsize' fontSize='5000px'/></p>
    :
    <p className='lightTitle'>Light Mode <WbSunnyIcon className='moonsize' fontSize='5000px'/></p>
  }
    </div>
    <div className="linha"/>

  <div>
<div>
  <Box1 colorMode={colorType}/> 
</div>

    <div className='boxRow'>
      <Box tipo={"problema"} colorMode={colorType}/>
      <Box tipo={"ideia"} colorMode={colorType}/>
      <Box tipo={"outro"} colorMode={colorType}/>
    </div>

<div> <Box3 colorMode={colorType}/> </div>  
    </div>
    </div>
  );
}

export default App;
