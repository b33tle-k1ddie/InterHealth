import React, { useState, useEffect } from 'react';
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
import { SaveMessage, GetMessage } from '../components/Room_API';
import { fetchTablet } from '../components/API';
const Messenger: React.FC = () => {
  const [messages, setMessages] = useState<{ sender: string; text: string }[]>([]);
  const [newMessage, setNewMessage] = useState<string>('');

  const sendMessage = async () => {
    if (newMessage.trim() !== '') {
      SaveMessage('Gem', newMessage);
      await GetMessage();
      
      const storedMessages = JSON.parse(window.localStorage.getItem('msggg') || '[]');
      const newMessages = storedMessages.map((message: string) => ({
        text: `Original: ${message}`,
        sender: window.localStorage.getItem('Key1') || '',
      }));

      setMessages(newMessages);
      setNewMessage('');
    }
  };

  useEffect(() => {
    const loadStoredMessages = async () => {
      await GetMessage();
      const storedMessages = JSON.parse(window.localStorage.getItem('msggg') || '[]');
      const newMessages = storedMessages.map((message: string) => ({
        text: `Original: ${message}`,
        sender: window.localStorage.getItem('Key1') || '',
      }));
      setMessages(newMessages);
    };

    loadStoredMessages();
  }, []);

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
                <h2>{message.text}</h2>
                <p>{message.sender}</p>
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
