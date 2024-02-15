import React from 'react';
import { IonButton, IonHeader, IonToolbar, IonTitle, IonContent, IonImg, IonCard, IonCardContent, IonCardHeader, IonCardTitle,IonTabs,IonTabBar,IonTabButton,IonIcon,IonLabel,IonRouterOutlet,IonPage,IonRouterLink,IonNavLink,IonNav, IonSelect, IonSelectOption} from '@ionic/react';
import { home, globe } from 'ionicons/icons';
import { Link } from 'react-router-dom';
import { Route, Redirect } from 'react-router';
import CountryPage from '../pages/Country-page';
import CameraButton from '../components/CameraButton'; 
import { fetchData } from '../components/API'
import "./Home.css";
import { ApolloProvider, ApolloClient } from '@apollo/client';
import React1, { useEffect } from 'react';

  
const CONS: React.FC = () => {
  const result = document.getElementById('mySelect').value;
    const fetchDataAndSaveToLocal = async () => {
      if (result === undefined) {
        alert('Please, change a country');
       
      } else {
        const dat = { key: 'Key', value: result };
        window.localStorage.setItem(dat.key, dat.value);
        const value = window.localStorage.getItem('Key');

        await fetchData();
      }
    };

    fetchDataAndSaveToLocal();
  return <Home/>;
};

  

const Home: React.FC = () => (
  
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

        <IonCard color="success">
          <IonCardHeader>
            <IonCardTitle>Data Base</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <IonSelect id="mySelect" placeholder="Оберіть елемент">
              <IonSelectOption value="1">Опція 1</IonSelectOption>
              <IonSelectOption value="2">Опція 2</IonSelectOption>
            </IonSelect>
            
            
            <IonButton onClick={CONS} >Save data base</IonButton>
            
            
            
          </IonCardContent>
        </IonCard>
      </IonContent> 
    </IonPage>
  )



const AppTabs: React.FC = () => (
  <IonTabs>
    <IonRouterOutlet>
      <Route path="/home" component={Home} exact={true} />
      <Route path="/country" component={CountryPage} exact={true} />
      <Redirect exact path="/" to="/home" />
    </IonRouterOutlet>

    <IonTabBar slot="bottom">
      <IonTabButton tab="home" href="/home">
        <IonIcon icon={home} />
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
    <Route path="/" component={AppTabs} />
    </IonRouterOutlet>
    
)

const handlePhotoTaken = (base64String: string | undefined) => {
  // Обробляємо отримане фото
  if (base64String) {
    // Ваш код для обробки фото
    console.log('Фото успішно отримано:', base64String);
  } else {
    // Обробка ситуації, коли фото не було зроблено
    console.log('Фото не було зроблено');
  }
}
;


export default App;
