import './App.css';
import LayerToggle from './LayerToggle/LayerToggle';
import Menu from './Menu/Menu';
import React,{useState} from 'react';

import NodeApp from './Node/NodeApp';
import Footer from './Footer/Footer';

import ReactFlow, {
  ReactFlowProvider,
} from 'reactflow';



function App() {
  const [LayerMenu, setLayerMenu] = useState(false);
  const LayerMenuToggle = () => {
    setLayerMenu(!LayerMenu);
  }

  const [openModal, setOpenModal] = useState(false);
  const toggleOpenModal = () => {
    setOpenModal(true);
  };
  const closeModal=() => {
    setOpenModal(false);
  }



  return (
    <div>
      <Menu LayerMenuToggle={LayerMenuToggle}/>
      <ReactFlowProvider>
        <LayerToggle/>
        <NodeApp toggleOpenModal={toggleOpenModal}/>
      </ReactFlowProvider>
      <Footer modalState={openModal} closeModal={closeModal}/>
    </div>
    
  );
}

export default App;