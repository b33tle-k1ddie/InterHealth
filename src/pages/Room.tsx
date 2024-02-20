// SearchPage.tsx
import React from 'react';
import { IonHeader, 
        IonToolbar,
        IonButtons, 
        IonBackButton, 
        IonTitle, 
        IonContent, 
        IonButton, 
        IonInput, 
        IonIcon, 
        IonCard, 
        IonCardContent, 
        IonCardTitle, 
        IonCardHeader, 
        IonCardSubtitle, 
        IonImg,
        IonRouterLink,
        IonRouterOutlet,
        IonNavLink,} from '@ionic/react';
        import { Route, Redirect } from 'react-router';

const Room: React.FC = () => (
  <>
    <IonHeader>
      <IonToolbar>
        <IonButtons slot="start">
          <IonBackButton defaultHref="/home" />
        </IonButtons>
        <IonTitle><IonIcon src="../src/assets/media/logo.svg" id="icon" /></IonTitle>
      </IonToolbar>
    </IonHeader>
    
    <IonRouterLink routerLink="/room" routerDirection="forward">
              <IonButton>Go to Page</IonButton>
            </IonRouterLink>
    <IonContent className="ion" scrollY={true}>
    <IonCard color="success">
      <IonCardHeader>
        <IonCardTitle>Search medicine</IonCardTitle>
      </IonCardHeader>
      <IonCardContent>

      </IonCardContent>
    </IonCard>
    </IonContent>
    
    
  </>
);

export default Room;
