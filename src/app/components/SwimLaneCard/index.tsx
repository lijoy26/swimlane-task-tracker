'use client';
import React, { useRef } from 'react';
import { useDrop } from 'react-dnd';
import DraggableItem from '../DraggableItem';

interface SwimLaneCardProps {
  id: string;
  title: string;
}

const SwimLaneCard: React.FC<SwimLaneCardProps> = ({ id, title }) => {
  const ref = useRef<HTMLDivElement>(null);
  return (
    <div ref={ref} className={`card`}>
      <div className="card-body">
        <DraggableItem id={id} name={title} />

      </div>
    </div>
    
  );
};

export default SwimLaneCard;






