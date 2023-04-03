import React from 'react';

export default () => {
  const onDragStart = (event, nodeType, nodeColor) => {
    event.dataTransfer.setData('application/reactflow', nodeType);
    event.dataTransfer.effectAllowed = 'move';
    event.dataTransfer.setData('colorNode', nodeColor);
  };

  return (
    <div>
      <li><div className="dndnode input" onDragStart={(event) => onDragStart(event, 'input', '#DEE8E4')} draggable>
        input
      </div></li>
      <li><div className="dndnode" onDragStart={(event) => onDragStart(event, 'output', '#DEE8E4')} draggable>
        output
      </div></li>
    
    </div>
  );
};
