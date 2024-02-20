import React from 'react';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonButton,
  IonTabs,
  IonTabBar,
  IonTabButton,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonList,
  IonSelect,
  IonItem,
  IonSelectOption

} from '@ionic/react';
import { Route, Redirect } from 'react-router';
import { home, globe, location, medkit } from 'ionicons/icons';
import Home from '../pages/Home';
import { fetchData } from '../components/API'

const CONS: React.FC = () => {
  const generic = document.getElementById('From').value;
  const local = document.getElementById('Location').value;
    const fetchDataAndSaveToLocal = async () => {
      if (generic === undefined &&  local === undefined ) {
        alert('Please, change a country');
       
      } else {
        const dat1 = { key: 'Key1', generic: generic };
        const dat2 = { key: 'Key2', local: local  };
        window.localStorage.setItem(dat1.key, dat1.generic);
        window.localStorage.setItem(dat2.key, dat2.local);
        await fetchData();
        alert('Comflite ');
      }
    };

    fetchDataAndSaveToLocal();
  return <CountryPage/>;
};
const CountryPage = () => (
  <>
    <IonHeader>
      <IonToolbar>
        <IonTitle><IonIcon src="../src/assets/media/logo.svg" id="icon" /></IonTitle>
      </IonToolbar>
    </IonHeader>
    <IonContent id="container">
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          height: '80%',
          textAlign: 'left',
        }}>
          
        <IonList>
          <h2><IonIcon icon={home} /> Select your Home country</h2>
          <IonItem>
            <IonSelect  id="From" label="your country:" placeholder="choose">
              <IonSelectOption value="USA">USA</IonSelectOption>
              <IonSelectOption value="Ukraine">Ukraine</IonSelectOption>
              <IonSelectOption value="Netherlands">Netherlands</IonSelectOption>
              <IonSelectOption value="Italy">Germany</IonSelectOption>
            </IonSelect>
          </IonItem>
          <div style={{ padding: '40px' }}></div>
          <h2><IonIcon icon={location} /> Select your location</h2>
          <IonItem>
            <IonSelect  id="Location" label="your location:" placeholder="choose">
              <IonSelectOption value="USA">USA</IonSelectOption>
              <IonSelectOption value="Ukraine">Ukraine</IonSelectOption>
              <IonSelectOption value="Netherlands">Netherlands</IonSelectOption>
              <IonSelectOption value="Italy">Germany</IonSelectOption>
            </IonSelect>
          </IonItem>
        </IonList>
      </div>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'left',
        }}>
        <IonButton onClick={CONS}>SAVE</IonButton>
      </div>

    </IonContent>
  </>
);

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
    <Route path="/country" component={AppTabs} />
  </IonRouterOutlet>

)


export default App;