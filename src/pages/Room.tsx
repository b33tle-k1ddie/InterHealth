// src/components/Messenger.tsx

import React, { useState } from 'react';
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonList,
  IonItem,
  IonLabel,
  IonTextarea,
  IonButton,
  IonIcon,
} from '@ionic/react';
import { send } from 'ionicons/icons';

const Messenger: React.FC = () => {
  const [messages, setMessages] = useState<{ sender: string; text: string }[]>([]);
  const [newMessage, setNewMessage] = useState<string>('');

  const sendMessage = () => {
    if (newMessage.trim() !== '') {
      setMessages([...messages, { sender: 'You', text: newMessage }]);
      setNewMessage('');
    }
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Messenger</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonList>
          {messages.map((message, index) => (
            <IonItem key={index}>
              <IonLabel>
                <h2>{message.sender}</h2>
                <p>{message.text}</p>
              </IonLabel>
            </IonItem>
          ))}
        </IonList>
      </IonContent>
      <IonToolbar>
        <IonTextarea
          placeholder="Type a message"
          value={newMessage}
          onIonChange={(e) => setNewMessage(e.detail.value!)}
        ></IonTextarea>
        <IonButton color="primary" expand="full" onClick={sendMessage}>
          <IonIcon icon={send} />
        </IonButton>
      </IonToolbar>
    </IonPage>
  );
};

export default Messenger;
