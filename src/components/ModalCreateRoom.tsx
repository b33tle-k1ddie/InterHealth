import React, { useState, useRef } from 'react';
import {
  IonButtons,
  IonButton,
  IonModal,
  IonHeader,
  IonContent,
  IonToolbar,
  IonTitle,
  IonPage,
  IonIcon
} from '@ionic/react';
import { OverlayEventDetail } from '@ionic/core/components';

interface ModalCreateRoomProps {
  onClose: () => void;
}
import { GetRoom } from '../components/API'
const ModalCreateRoom: React.FC<ModalCreateRoomProps> = ({ onClose }) => {

  const modal = useRef<HTMLIonModalElement>(null);
  const qwerty = async () =>{
    await GetRoom();
  }
  const code = qwerty();
  const [message, setMessage] = useState(
    `<h1>Your code: ${code}</h1><br/><p>1. Share the code with your colleagues</p><br/><p>2. Press button on bottom and start partnering up!</p>`
  );
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonButton onClick={() => onClose()}>Close</IonButton>
          </IonButtons>
          <IonTitle><IonIcon src="../src/assets/media/logo.svg" id="icon" /></IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <div dangerouslySetInnerHTML={{ __html: message }} />
        <br />
        <IonButton>
          Ok, let's start!
        </IonButton>
      </IonContent>
    </IonPage>
  );
}

export default ModalCreateRoom;
