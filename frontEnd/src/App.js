import './App.css';
import './style.css';
import { RoverProvider } from './context/roverContext';
import { ModalProvider } from './context/modalContext';
import { Outlet } from 'react-router-dom';
import Header from './components/Header'
import Main from './components/Main';
import ModalOverlay from './components/ModalOverlay';
import ModalOverlayRestart from './components/ModalOverlayRestart';

function App() {

  return (
    <div>
      <RoverProvider>
        <ModalProvider>
          <Outlet />
          <Header />
          <Main />
          <ModalOverlay />
          <ModalOverlayRestart />
        </ModalProvider>
      </RoverProvider>
    </div>
  );
}

export default App;
