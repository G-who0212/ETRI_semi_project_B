import React from 'react';

export default () => {
  const onDragStart = (event, nodeType, nodeColor,layerName) => {
    event.dataTransfer.setData('application/reactflow', nodeType);
    event.dataTransfer.effectAllowed = 'move';
    event.dataTransfer.setData('colorNode', nodeColor);
    event.dataTransfer.setData('layerName',layerName);
  };

  return (
    <div>
      <li><div className="dndnode input" onDragStart={(event) => onDragStart(event, 'MaxPooling', 'darkcyan','MaxPooling')} draggable>
        MaxPooling
      </div></li>
      <li><div className="dndnode" onDragStart={(event) => onDragStart(event, 'AVGPooling', 'darkcyan','AVGPooling')} draggable>
        AVGPooling
      </div></li>
    
    </div>
  );
};
