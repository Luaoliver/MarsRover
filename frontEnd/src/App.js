import './App.css';
import './style.css';
import { RoverProvider } from './context/roverContext';
import { ModalProvider } from './context/modalContext';
import Main from './components/Main';
import ModalOverlay from './components/ModalOverlay';
import ModalOverlayRestart from './components/ModalOverlayRestart';
import Header from './components/Header';
import { Outlet } from 'react-router-dom';
import { PlateauProvider } from './context/plateauContext';

function App() {

  return (
    <div>
      <RoverProvider>
        <PlateauProvider>
          <ModalProvider>
            <Outlet />
            <Header />
            <Main />
            <ModalOverlay />
            <ModalOverlayRestart />
          </ModalProvider>
        </PlateauProvider>

      </RoverProvider>
    </div>
  );
}

export default App;
