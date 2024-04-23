
import { Card } from '@/app/swimlane-board/page';
import React, { useRef, useState } from 'react';
import { useDrag } from 'react-dnd';
import CardModal from '../CardModal';

interface DraggableItemProps {
 card:Card,
 id:string
}

const DraggableItem: React.FC<DraggableItemProps> = ({ card,id }) => {
    const ref = useRef<HTMLDivElement>(null);
    const [showCard,setShowCard]=useState<boolean>(false);
  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'ITEM',
    item: { id },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

const handleCardView=()=>{
    setShowCard(!showCard)
}
  return (

<div className="card" s ref={drag} style={{ opacity: isDragging ? 0.5 : 1, cursor: 'move' }} id={id} onClick={handleCardView}>
<div className="card-body">
  <h5 className="card-title">{card.cardName}</h5>
  <p className="card-text">Status: {card.status}</p>
  <p className="card-text">Added At: {card.addedAt.toLocaleDateString()}</p>
  <p className="card-text">Started At: {card.startedAt?.toLocaleDateString()}</p>
  <p className="card-text">Type: {card.type}</p>
</div>
<CardModal closeCard={ handleCardView} card={card} showCard={showCard}></CardModal>

</div>
  );
};

export default DraggableItem;
