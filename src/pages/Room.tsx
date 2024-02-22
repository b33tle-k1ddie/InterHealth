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
import { send, sync } from 'ionicons/icons';
import {SaveMessage,GetMessage } from '../components/Room_API';
const Messenger: React.FC = () => {
  const [messages, setMessages] = useState<{ sender: string; text: string }[]>([]);
  const [newMessage, setNewMessage] = useState<string>('');

  const sendMessage = async () => {
    
    if (newMessage.trim() !== '') {
      SaveMessage('Gem', newMessage);
      await GetMessage();
      const sol = window.localStorage.getItem('msggg');
      const solu = JSON.parse(sol);
      console.log(solu);
      const newMessages = solu;
    
      // Додаємо кожне нове повідомлення до масиву messages
      const updatedMessages = [ 
        ...newMessages.map(message => ({ sender: 'You', text: message }))
      ];
    
      setMessages(updatedMessages);
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
