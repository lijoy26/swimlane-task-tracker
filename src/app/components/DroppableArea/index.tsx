import React from 'react';
import { useDrop } from 'react-dnd';

interface DroppableAreaProps {
  onDrop: (itemId: string, laneId: string) => void;
  laneId: string;
  children?: React.ReactNode; // Add children prop as optional
}

const DroppableArea: React.FC<DroppableAreaProps> = ({ onDrop, laneId, children }) => {
  const [{ isOver }, drop] = useDrop(() => ({
    accept: 'ITEM',
    drop: (item: { id: string }) => onDrop(item.id, laneId),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  return (
    <div ref={drop} style={{ border: '1px solid black', minHeight: '100px', height: '80vh' }}>
      {children}
    </div>
  );
};

export default DroppableArea;
