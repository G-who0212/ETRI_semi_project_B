import Sidebar from '../Node/Sidebar';
import SidebarInOut from '../Node/SidebarInOut';
import SidebarPooling from '../Node/SidebarPooling';


const LayerToggle = () => {

    return (
        
            <div className="LayerToggle">
                <h2>Layer</h2>
                <br/>
                <details className="InOutToggle">
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