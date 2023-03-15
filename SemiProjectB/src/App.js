import './App.css';
import LayerToggle from './LayerToggle/LayerToggle';
import Menu from './Menu/Menu';
import React,{useState} from 'react';
import ReactFlow from './ReactFlow/App'

function App() {
  const [LayerMenu, setLayerMenu] = useState(false);
  const LayerMenuToggle = () => {
    setLayerMenu(!LayerMenu);
  }

  return (
    <div>
      <Menu LayerMenuToggle={LayerMenuToggle}/>
      {LayerMenu && <LayerToggle />}
      <ReactFlow />
    </div>
    
  );
}

export default App;