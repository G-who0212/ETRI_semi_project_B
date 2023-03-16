import './App.css';
import LayerToggle from './LayerToggle/LayerToggle';
import Menu from './Menu/Menu';
import React,{useState} from 'react';

import NodeApp from './Node/NodeApp'

import ReactFlow, {
  ReactFlowProvider,
} from 'reactflow';



function App() {
  const [LayerMenu, setLayerMenu] = useState(false);
  const LayerMenuToggle = () => {
    setLayerMenu(!LayerMenu);
  }

  return (
    <div>
      <Menu LayerMenuToggle={LayerMenuToggle}/>
      <ReactFlowProvider>
        {/* {LayerMenu && <LayerToggle />}
        {LayerMenu && <NodeApp/>} */}
        <LayerToggle/>
        <NodeApp/>
      </ReactFlowProvider>
    </div>
    
  );
}

export default App;