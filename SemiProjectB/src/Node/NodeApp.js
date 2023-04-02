import React, { useState, useRef, useCallback } from 'react';
import ReactFlow, {
  ReactFlowProvider,
  addEdge,
  useNodesState,
  useEdgesState,
  Controls,
} from 'reactflow';
import 'reactflow/dist/style.css';
import Footer from '../Footer/Footer';
import { Conv1DProps,Conv2DProps,MaxProps,AvgProps } from '../Props/defaultProps';

import axios from 'axios';
import Sidebar from './Sidebar';

import '../App.css';

let nodeid=  0;
let id = 0;
const getId = () => `dndnode_${id++}`;

const DnDFlow = ({toggleOpenModal,openModal,closeModal,setOpenModal}) => {
  const reactFlowWrapper = useRef(null);
  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);
  const [reactFlowInstance, setReactFlowInstance] = useState(null);
  const [nodestate, setnodeState] = useState({
    name:"",
    node_id: ""
  })
  const [fetch, setFetch] = useState({
    node_id:undefined,
    name:undefined,
    
  })

  const postData = async (state) => {
    await axios.post('http://127.0.0.1:8000/api/modal/create',state)
  }

  const fetchData = (node_id) => {
    axios.get('http://127.0.0.1:8000/api/modal/'+node_id).then((e)=>{setnodeState(e.data)})
    
  }

  const onConnect = useCallback((params) => setEdges((eds) => addEdge(params, eds)), []);

  const onDragOver = useCallback((event) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = 'move';
  }, []);

  const onNodeClick = (event, node) =>{

    
    fetchData(node.id)
    // setnodeState(response.data);
    
    console.log(nodestate)
  }

  // useEffect(()=>{onNodeClick()},[]);

  const onDrop = useCallback(
    (event) => {
      event.preventDefault();

      const reactFlowBounds = reactFlowWrapper.current.getBoundingClientRect();
      const type = event.dataTransfer.getData('application/reactflow');
      const color = event.dataTransfer.getData('colorNode');
      const layerName  = event.dataTransfer.getData('layerName');

      // check if the dropped element is valid
      if (typeof type === 'undefined' || !type) {
        return;
      }

      const position = reactFlowInstance.project({
        x: event.clientX - reactFlowBounds.left,
        y: event.clientY - reactFlowBounds.top,
      });
      const newNode = {
        id: getId(),
        layerName:`${layerName}`,
        type,
        position,
        data: { label: `${type}`},
        style:{
          background: `${color}`,
          width: 150,
          fontSize: "20px",
          boxShadow: "5px 5px 5px 0px rgba(0,0,0,.10)"
        }
      };

      console.log(newNode.id);
      console.log(newNode.layerName)

      setNodes((nds) => nds.concat(newNode));
      // setState({
      //   name:newNode.layerName,
      //   node_id:newNode.id
      // });
      // postData({
      //   name:newNode.layerName,
      //   node_id:newNode.id
      // });
      axios.post('http://127.0.0.1:8000/api/modal/create',{
        name:newNode.layerName,
        node_id:newNode.id
      })
      console.log(nodestate)
      
      // console.log(state);
      
    },
    [reactFlowInstance]
  );

  const SelectNode = () =>{
    
        
      return (
        
        <Footer Props={nodestate} modalState={openModal} closeModal={closeModal} setnodeState={setnodeState}/>
      )
    
      


  }
  

  return (
    <React.Fragment>
    <div className="dndflow">
      
        <div className="reactflow-wrapper" ref={reactFlowWrapper}>
          <ReactFlow
            nodes={nodes}
            edges={edges}
            onNodesChange={onNodesChange}
            onEdgesChange={onEdgesChange}
            onConnect={onConnect}
            onInit={setReactFlowInstance}
            onDrop={onDrop}
            onDragOver={onDragOver}
            onNodeDoubleClick={toggleOpenModal}
            onNodeClick={onNodeClick}
          >
            <Controls />
          </ReactFlow>
        </div>
        
    </div>
    <SelectNode/>

    </React.Fragment>
    
  );
};

export default DnDFlow;
