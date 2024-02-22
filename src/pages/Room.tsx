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
import { ApolloClient, InMemoryCache, createHttpLink, gql } from '@apollo/client';


const Messenger: React.FC = () => {
  const [messages, setMessages] = useState<{ sender: string; text: string }[]>([]);
  const [newMessage, setNewMessage] = useState<string>('');
  const client = new ApolloClient({
    link: createHttpLink({
      uri: 'http://10.202.249.200:5000/graphql', // пристрій на якому піднятий аполо
    }),
    cache: new InMemoryCache(),
  });
  const sendMessage = async () => {
    if (newMessage.trim() !== '') {
      const key1 = 'Key1';
      const key2 = 'Key2';
      const from_country = window.localStorage.getItem(key1);
      const local_country = window.localStorage.getItem(key2);
      
      const GET_ALL_USERS = gql`
          query($generic: String, $local: String, $tablet: String) {
            get(generic: $generic, local: $local, tablet: $tablet)
          }
        `;
        try {
          const { data } = await client.query({
            query: GET_ALL_USERS,
            variables: {
              generic: from_country,
              local: local_country,
              tablet: newMessage
            },
          });
          const dat = JSON.parse(data.get)
           const value1 = window.localStorage.getItem('Key2');
          console.log(`ANALOG: ${dat[0]?.['analogue_' + value1]}`);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      SaveMessage('Gem', newMessage);
      await GetMessage();
      setTimeout(() => {
      const storedMessages = JSON.parse(window.localStorage.getItem('msggg') || '[]');
      const newMessages = storedMessages.map((message: string) => ({
        text: `Original: ${message}`,
        sender: window.localStorage.getItem('Key1') || '',
        
      }));
      
      setMessages(newMessages);
      setNewMessage('');
    }, 1000);}
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
