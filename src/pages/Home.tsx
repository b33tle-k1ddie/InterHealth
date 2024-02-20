import React, {useState} from 'react';
import {
  IonButton,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonImg,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonTabs,
  IonTabBar,
  IonTabButton,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonPage,
  IonRouterLink,
  IonNavLink,
  IonNav,
  IonModal
} from '@ionic/react';

import { medkit, globe } from 'ionicons/icons';




import { Route, Redirect } from 'react-router';

import CountryPage from '../pages/Country-page';

import CameraButton from '../components/CameraButton'; 
import ModalCreateRoom from '../components/ModalCreateRoom';
import ModalJoinRoom from '../components/ModalJoinRoom'

import "./Home.css";
const Home: React.FC = () => {
  const [showCreateRoomModal, setShowCreateRoomModal] = useState(false);
  const [showJoinRoomModal, setShowJoinRoomModal] = useState(false);
  
  
  const handleOpenCreateRoomModal = () => {
    setShowCreateRoomModal(true);
  };

  const handleCloseCreateRoomModal = () => {
    setShowCreateRoomModal(false);
  };



  const handleOpenJoinRoomModal = () => {
    setShowJoinRoomModal(true);
  };

  const handleCloseJoinRoomModal = () => {
    setShowJoinRoomModal(false);
  };
  



  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonImg src="../src/assets/media/banner.png" id="" />
        </IonToolbar>
      </IonHeader>

      <IonContent className="ion-padding">

        <IonCard color="success">
          <IonCardHeader>
            <IonCardTitle>FIND DRUGS</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <IonImg src="../src/assets/media/med.png" id="card-photo" />
            <IonRouterLink routerLink="/search" routerDirection="forward">
              <IonButton>Go to Page</IonButton>
            </IonRouterLink>
          </IonCardContent>
        </IonCard>

        <IonCard color="warning">
          <IonCardHeader>
            <IonCardTitle>TAKE A PICTURE</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <IonImg src="../src/assets/media/pic.png" id="card-photo" />
            <CameraButton onPhotoTaken={handlePhotoTaken} />
          </IonCardContent>
        </IonCard>

        <IonCard color="danger">
          <IonCardHeader>
            <IonCardTitle>LOBBY</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <IonImg src="../src/assets/media/collab.png" id="card-photo" />
            <IonButton onClick={handleOpenCreateRoomModal}>Create room</IonButton>
            <IonButton onClick={handleOpenJoinRoomModal}>Join room</IonButton>
          </IonCardContent>
        </IonCard>

        <IonCard color="medium">
          <IonCardHeader>
            <IonCardTitle>LOBBY</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <IonImg src="../src/assets/media/nfc.png" id="card-photo" />
            <IonButton onClick={handleOpenCreateRoomModal}>Create room</IonButton>
            <IonButton onClick={handleOpenJoinRoomModal}>Join room</IonButton>
          </IonCardContent>
        </IonCard>

        {/* Modal for Create Room */}
        <IonModal isOpen={showCreateRoomModal} onDidDismiss={handleCloseCreateRoomModal}>
          <ModalCreateRoom onClose={handleCloseCreateRoomModal} />
        </IonModal>
         {/* Modal for Join Room */}
         <IonModal isOpen={showJoinRoomModal} onDidDismiss={handleCloseJoinRoomModal}>
          <ModalJoinRoom onClose={handleCloseJoinRoomModal} />
        </IonModal>
      </IonContent>
    </IonPage>
  )
};

  

const AppTabs: React.FC = () => (
  <IonTabs>
    <IonRouterOutlet>
      <Route path="/home" render={() => <Home />} exact={true} />
      <Route path="/country" render={() => <CountryPage />} exact={true} />
      <Redirect exact path="/" to="/home" />
    </IonRouterOutlet>

    <IonTabBar slot="bottom">
      <IonTabButton tab="home" href="/home">
        <IonIcon icon={medkit} />
        <IonLabel>General</IonLabel>
      </IonTabButton>

      <IonTabButton tab="country" href="/country">
        <IonIcon icon={globe} />
        <IonLabel>Country</IonLabel>
      </IonTabButton>
    </IonTabBar>
  </IonTabs>
);

const App: React.FC = () => (
  
    <IonRouterOutlet>
    <Route path="/home" component={AppTabs} />
    </IonRouterOutlet>

)

const handlePhotoTaken = (base64String: string | undefined) => {
  // Обробляємо отримане фото
  if (base64String) {
    // Ваш код для обробки фото
    console.log('Фото успішно отримано');
  } else {
    // Обробка ситуації, коли фото не було зроблено
    console.log('Фото не було зроблено');
  }
}
;





export default App;
