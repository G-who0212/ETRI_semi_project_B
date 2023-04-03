import React from 'react';

export default () => {
  const onDragStart = (event, nodeType, nodeColor,layerName) => {
    event.dataTransfer.setData('application/reactflow', nodeType);
    event.dataTransfer.setData('colorNode', nodeColor);
    event.dataTransfer.setData('layerName',layerName);
    event.dataTransfer.effectAllowed = 'move';
  };

  return (
    <div>
      <li><div className="dndnode input" onDragStart={(event) => onDragStart(event, 'Conv1D', '#E5E4CC','Conv1D')} draggable>
        Conv1D
      </div></li>
      <li><div className="dndnode" onDragStart={(event) => onDragStart(event, 'Conv2D', '#E5E4CC','Conv2D')} draggable>
        Conv2D
      </div></li>
    </div>
  );
};
