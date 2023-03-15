import React from 'react';

export default () => {
  const onDragStart = (event, nodeType) => {
    event.dataTransfer.setData('application/reactflow', nodeType);
    event.dataTransfer.effectAllowed = 'move';
  };

  return (
    <div>
      <li><div className="dndnode input" onDragStart={(event) => onDragStart(event, 'Conv1D')} draggable>
        Conv1D
      </div></li>
      <li><div className="dndnode" onDragStart={(event) => onDragStart(event, 'Conv2D')} draggable>
        Conv2D
      </div></li>
    </div>
  );
};