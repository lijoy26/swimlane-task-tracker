import React, { useRef } from 'react';
import { useDrag } from 'react-dnd';

interface DraggableItemProps {
  id: string;
  name: string;
}

const DraggableItem: React.FC<DraggableItemProps> = ({ id, name }) => {
    const ref = useRef<HTMLDivElement>(null);
  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'ITEM',
    item: { id },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  return (
    <div ref={drag} style={{ opacity: isDragging ? 0.5 : 1, cursor: 'move' }} id={id}>
      {name}
    </div>
  );
};

export default DraggableItem;
