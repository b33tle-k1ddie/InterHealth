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
  IonItem,
  IonInput,
  IonIcon
} from '@ionic/react';
import { OverlayEventDetail } from '@ionic/core/components';

import Room from '../pages/Room'

interface ModalJoinRoomProps {
  onClose: () => void;
}

const ModalJoinRoom: React.FC<ModalJoinRoomProps> = ({ onClose }) => {
  const modal = useRef<HTMLIonModalElement>(null);
  const input = useRef<HTMLIonInputElement>(null);

  const [message, setMessage] = useState(
    `<h1>How to join:</h1><br/><p>1. Press on button on bottom</p><p>2. Enter the code of your colleague</p><br/>You must be on same local network!`
  );

  function confirm() {
    modal.current?.dismiss(input.current?.value, 'confirm');
  }

  function onWillDismiss(ev: CustomEvent<OverlayEventDetail>) {
    if (ev.detail.role === 'confirm') {
     Room
    }
  }

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
        <IonButton id="open-modal" expand="block">
          Enter the room code
        </IonButton>
        <IonModal ref={modal} trigger="open-modal" onWillDismiss={(ev) => onWillDismiss(ev)}>
          <IonHeader>
            <IonToolbar>
              <IonButtons slot="start">
                <IonButton onClick={() => Room}>Cancel</IonButton>
              </IonButtons>
              <IonTitle><IonIcon src="../src/assets/media/logo.svg" id="icon" /></IonTitle>
              <IonButtons slot="end">
                <IonButton strong={true} onClick={() => confirm()}>
                  Confirm
                </IonButton>
              </IonButtons>
            </IonToolbar>
          </IonHeader>
          <IonContent className="ion-padding">
            <IonItem>
              <IonInput
                label="Room code:"
                labelPlacement="stacked"
                ref={input}
                type="text"
                placeholder="XXXXXX"
              />
            </IonItem>
          </IonContent>
        </IonModal>
      </IonContent>
    </IonPage>
  );
}

export default ModalJoinRoom;