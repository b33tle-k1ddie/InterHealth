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
  IonIcon,
  IonRouterLink
} from '@ionic/react';

import { Route, Redirect } from 'react-router';

import { OverlayEventDetail } from '@ionic/core/components';

import Room from '../pages/Room';
import { Join_r } from '../components/Room_API';


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
     
    }
  }

  function dismiss(){
    modal.current?.dismiss()
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
                <IonButton onClick={() => dismiss()}>Cancel</IonButton>
              </IonButtons>
              <IonTitle><IonIcon src="../src/assets/media/logo.svg" id="icon" /></IonTitle>
            </IonToolbar>
          </IonHeader>
          <IonContent className="ion-padding">
            <IonItem>
              <IonInput id="room"
                label="Room code:"
                labelPlacement="stacked"
                ref={input}
                type="text"
                placeholder="XXXXXX"
              />
            </IonItem>
            <br/><br/><br/><br/>
            <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'left',
        }}>
        <IonButton onClick={CONS}>Confirm</IonButton>
      </div>
          </IonContent>
        </IonModal>
      </IonContent>
    </IonPage>
  );
  async function  CONS () {
    const j_room = document.getElementById('room').value;
    
      const fetchDataAndSaveToLocal = async () => {
        if (j_room === undefined) {
          alert('Please, change a country');
         
        } else {
          const dat1 = { key: 'KeyRoom', room: j_room }; 
          window.localStorage.setItem(dat1.key, dat1.room);
          
          await Join_r();
          
          
        }
      };
  
      fetchDataAndSaveToLocal();
    return;
  };
}

export default ModalJoinRoom; 