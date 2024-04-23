/* eslint-disable react/jsx-key */
'use client';
import React from 'react';
import SwimLaneCard from '../SwimLaneCard';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import DraggableItem from '../DraggableItem';
import DroppableArea from '../DroppableArea';
import { Card } from '@/app/swimlane-board/page';

interface SwimLaneProps {
  title: string;
  laneId:string;
  cards: Card[];
  updateCards:Function;
}

const SwimLane: React.FC<SwimLaneProps> = ({ title, laneId,cards,updateCards }) => {
    const handleDrop = (itemId: string, laneId: string): void => {
        console.log(`Dropped item ${itemId} into lane ${laneId}`);
        const updatedCards = cards.map((card) =>
          card.id === itemId ? { ...card, status: laneId } : card
        );
        updateCards(updatedCards);
      };
  return (



<div className="mr-auto p-2 col">
<h4>{title}</h4>
<DndProvider backend={HTML5Backend}> 

<DroppableArea onDrop={handleDrop} laneId={laneId}>


  {cards.map((card:Card) => (
    card.status === laneId ?
          <SwimLaneCard key={card.id} id={card.id} card={card} />:null
        ))}

</DroppableArea>
</DndProvider> 

</div>
  );
};

export default SwimLane;
