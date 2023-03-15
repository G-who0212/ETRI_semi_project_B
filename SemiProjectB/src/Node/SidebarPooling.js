import React from 'react';

export default () => {
  const onDragStart = (event, nodeType) => {
    event.dataTransfer.setData('application/reactflow', nodeType);
    event.dataTransfer.effectAllowed = 'move';
  };

  return (
    <div>
      <li><div className="dndnode input" onDragStart={(event) => onDragStart(event, 'MaxPooling')} draggable>
        MaxPooling
      </div></li>
      <li><div className="dndnode" onDragStart={(event) => onDragStart(event, 'AVGPooling')} draggable>
        AVGPooling
      </div></li>
    
    </div>
  );
};
