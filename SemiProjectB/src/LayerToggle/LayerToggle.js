import React, {useState} from 'react';
import ConvolutionLayers from './ConvolutionLayers';
import PoolingLayers from './PoolingLayers';

const LayerToggle = () => {
    
    const [Conv, setConv] = useState(false);
    const [Pool, setPool] = useState(false);



    const ConvToggle = () =>{
        setConv(!Conv);
    }

    const PoolToggle = () =>{
        setPool(!Pool);
    }

    return (
        <div className="LayerToggle">
            <h2>Layer</h2>
            <br/>
            <button onClick={ConvToggle}>Convolution Layers</button>
            {Conv && <ConvolutionLayers />}
            <br/>
            <button onClick={PoolToggle}>Pooling Layers</button>
            {Pool && <PoolingLayers />}
        </div>

       
    );
};

export default LayerToggle;