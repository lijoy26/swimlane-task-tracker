'use client';

import { useState, useEffect } from "react";
import SwimLaneContainer from "../components/SwimLaneContainer";
import CardModal from "../components/CardModal";
export interface Card {
  id: string;
  cardName: string;
  status: string;
  addedAt: Date;
  startedAt?: Date; // Optional property
  type: string;
}
export default function Home() {
  const [cards, setCard] = useState<Card[]>([
    {
    id: '1',
    cardName: 'Dummy Card',
    status: 'TODO',
    addedAt: new Date(),
    startedAt: new Date(), 
    type: 'Task',
  },
  {
    id: '2',
    cardName: 'Dummy Card 2',
    status: 'TODO',
    addedAt: new Date(),
    startedAt: new Date(), 
    type: 'Task',
  },
  {
    id: '3',
    cardName: 'Dummy Card 3',
    status: 'COMPLETED',
    addedAt: new Date(),
    startedAt: new Date(), 
    type: 'Task',
  },
  
  {
    id: '4',
    cardName: 'Dummy Card 4',
    status: 'INPROGRESS',
    addedAt: new Date(),
    startedAt: new Date(), 
    type: 'Task',
  },
]);
const updateCards = (newCards: Card[]) => {
  console.log('Card updated:', newCards);
  setCard(newCards);
};
  useEffect(() => {
    // console.log('Card updated:', cards);
  },[cards]);
  return (
    <div>
      <h1 className="text-center">Swim Lane Board</h1>
      <SwimLaneContainer updateCards = {updateCards} cards={cards}></SwimLaneContainer>
    </div>
  );
}
