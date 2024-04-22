'use client';
import React, { useEffect, useState } from 'react';
import SwimLane from '../SwimLane';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { Card } from '@/app/swimlane-board/page';

interface SwimLaneContainerProps {
  cards: Card[];
  updateCards:Function;
}

const SwimLaneContainer: React.FC<SwimLaneContainerProps> = ({ cards,updateCards }) => {
  return (
    <DndProvider backend={HTML5Backend}>
      <div className="container d-flex m-2 cl">
        <SwimLane updateCards={updateCards} laneId="TODO" title={'To DO'} cards={cards}></SwimLane>
        <SwimLane updateCards={updateCards} laneId="INPROGRESS" title={'IN-PROGRESS'} cards={cards}></SwimLane>
        <SwimLane updateCards={updateCards} laneId="COMPLETED" title={'COMPLETED'} cards={cards}></SwimLane>
      </div>
    </DndProvider>
  );
};

export default SwimLaneContainer;
