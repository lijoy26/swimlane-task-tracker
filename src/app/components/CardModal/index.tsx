import { Card } from '@/app/swimlane-board/page';
import React, { useEffect, useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
interface DraggableItemProps {
    card:Card,
    showCard:boolean,
    closeCard:Function
   }
const CardModal:React.FC<DraggableItemProps> = ({ card,showCard,closeCard }) => {
  const [show, setShow] = useState(showCard);

  const handleClose = () => {closeCard};
useEffect(() => {
    setShow(showCard);

},[showCard])
  return (
    <>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{card.cardName}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Status: {card.status}</p>
          <p>Added At: {card.addedAt.toLocaleDateString()}</p>
          <p>Started At: {card.startedAt?.toLocaleDateString()}</p>
          <p>Type: {card.type}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default CardModal;
