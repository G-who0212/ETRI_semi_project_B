import React from 'react';

export default () => {
  const onDragStart = (event, nodeType) => {
    event.dataTransfer.setData('application/reactflow', nodeType);
    event.dataTransfer.effectAllowed = 'move';
  };

  return (
    <div>
      <li><div className="dndnode input" onDragStart={(event) => onDragStart(event, 'input')} draggable>
        input
      </div></li>
      <li><div className="dndnode" onDragStart={(event) => onDragStart(event, 'output')} draggable>
        output
      </div></li>
    
    </div>
  );
};
