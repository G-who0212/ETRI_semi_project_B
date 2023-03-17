import React from 'react';

export default () => {
  const onDragStart = (event, nodeType, nodeColor) => {
    event.dataTransfer.setData('application/reactflow', nodeType);
    event.dataTransfer.effectAllowed = 'move';
    event.dataTransfer.setData('colorNode', nodeColor);
  };

  return (
    <div>
      <li><div className="dndnode input" onDragStart={(event) => onDragStart(event, 'MaxPooling', 'darkcyan')} draggable>
        MaxPooling
      </div></li>
      <li><div className="dndnode" onDragStart={(event) => onDragStart(event, 'AVGPooling', 'darkcyan')} draggable>
        AVGPooling
      </div></li>
    
    </div>
  );
};
