// Room.tsx
import React, { useState, useRef, useEffect } from 'react';
import { IonHeader, IonToolbar, IonButtons, IonBackButton, IonTitle, IonContent, IonInput, IonButton, IonIcon, IonList, IonItem, IonLabel, IonFooter } from '@ionic/react';
import { arrowBackOutline, send } from 'ionicons/icons';

const Room: React.FC = () => {
  const [messages, setMessages] = useState<string[]>([]);
  const [newMessage, setNewMessage] = useState<string>('');
  const messagesRef = useRef<any>(null);

  // Функція для відправлення повідомлення
  const sendMessage = () => {
    if (newMessage.trim() !== '') {
      setMessages([...messages, newMessage]);
      setNewMessage('');
    }
  };

  // Прокрутка до нижньої частини списку
  const scrollToBottom = () => {
    if (messagesRef.current) {
      messagesRef.current.scrollTop = messagesRef.current.scrollHeight;
    }
  };

  // Прокрутка до нижньої частини при завантаженні компонента
  useEffect(() => {
    scrollToBottom();
  }, []);

  // Прокрутка до останнього повідомлення при оновленні списку
  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  return (
    <>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton icon={arrowBackOutline} defaultHref="/home" />
          </IonButtons>
          <IonTitle>Lobby</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent className="ion" scrollY={true}>
        <IonList ref={messagesRef} className="messages-list">
          {messages.map((message, index) => (
            <IonItem key={index} className="message-item">
              <IonLabel>{message}</IonLabel>
            </IonItem>
          ))}
        </IonList>
      </IonContent>

      <IonFooter>
        <IonItem className="message-input">
          <IonInput
            placeholder="Type your message..."
            value={newMessage}
            onIonChange={(e) => setNewMessage(e.detail.value!)}
          />
          <IonButton slot="end" onClick={sendMessage}>
            <IonIcon icon={send} />
          </IonButton>
        </IonItem>
      </IonFooter>
    </>
  );
};

export default Room;
