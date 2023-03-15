import './App.css';
import LayerToggle from './LayerToggle/LayerToggle';
import Menu from './Menu/Menu';
import React,{useState} from 'react';
import ReactFlow from './ReactFlow/App'

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
<<<<<<< HEAD
      {LayerMenu && <LayerToggle />}
      <ReactFlow />
=======
      <ReactFlowProvider>
        {LayerMenu && <LayerToggle />}
        {LayerMenu && <NodeApp/>}
      </ReactFlowProvider>
>>>>>>> ced0f4e7351749b4ffbd50aadd547fca4631941f
    </div>
    
  );
}

export default App;