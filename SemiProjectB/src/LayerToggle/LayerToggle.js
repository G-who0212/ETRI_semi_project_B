<<<<<<< HEAD
=======
import ReactFlow, {
    ReactFlowProvider,
    addEdge,
    useNodesState,
    useEdgesState,
    Controls,
  } from 'reactflow';

  import Sidebar from '../Node/Sidebar';
import SidebarInOut from '../Node/SidebarInOut';
import SidebarPooling from '../Node/SidebarPooling';


>>>>>>> ced0f4e7351749b4ffbd50aadd547fca4631941f
const LayerToggle = () => {

    return (
        
            <div className="LayerToggle">
                <h2>Layer</h2>
                <br/>
                <details className="PoolToggle">
                    <summary>in/output</summary>
                    <ul>
                        <SidebarInOut/>
                    </ul>
                </details>

                <details className='ConvToggle'>
                    <summary>Convolution Layers</summary>
                    <ul>
                        <Sidebar/>
                        
                    </ul>
                </details>
                <details className="PoolToggle">
                    <summary>Pooling Layers</summary>
                    <ul>
                        <SidebarPooling/>
                    </ul>
                </details>
            </div>

    );
};

export default LayerToggle;