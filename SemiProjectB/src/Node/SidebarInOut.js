import React from 'react';

export default () => {
  const onDragStart = (event, nodeType, nodeColor) => {
    event.dataTransfer.setData('application/reactflow', nodeType);
    event.dataTransfer.effectAllowed = 'move';
    event.dataTransfer.setData('colorNode', nodeColor);
  };

  return (
    <div>
      <li><div className="dndnode input" onDragStart={(event) => onDragStart(event, 'input', '#ffa7cb')} draggable>
        input
      </div></li>
      <li><div className="dndnode" onDragStart={(event) => onDragStart(event, 'output', '#ffa7cb')} draggable>
        output
      </div></li>
    
    </div>
  );
};
