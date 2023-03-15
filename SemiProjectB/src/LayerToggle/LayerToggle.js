const LayerToggle = () => {

    return (
        <div className="LayerToggle">
            <h2>Layer</h2>
            <br/>
            <details className='ConvToggle'>
                <summary>Convolution Layers</summary>
                <ul>
                    <li><div>Conv1d</div></li>
                    <li><div>Conv2d</div></li>
                </ul>
            </details>
            <details className="PoolToggle">
                <summary>Pooling Layers</summary>
                <ul>
                    <li><div>MaxPooling</div></li>
                    <li><div>AVGPooling</div></li>
                </ul>
            </details>
        </div>

       
    );
};

export default LayerToggle;