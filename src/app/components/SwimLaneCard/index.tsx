'use client';
import React, { useRef } from 'react';
import { useDrop } from 'react-dnd';
import DraggableItem from '../DraggableItem';
import { Card } from '@/app/swimlane-board/page';

interface SwimLaneCardProps {
  card:Card,
  id:string,
}

const SwimLaneCard: React.FC<SwimLaneCardProps> = ({ card }) => {
  const ref = useRef<HTMLDivElement>(null);
  return (
    <div ref={ref} className={`card`}>
      <div className="card-body">
        <DraggableItem card={card} id={card.id} />

      </div>
    </div>
    
  );
};

export default SwimLaneCard;






