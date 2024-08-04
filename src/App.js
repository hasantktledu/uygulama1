import { useState } from 'react';
import './App.css';
import C1 from './C1';

function App() {
  const [gosterGizle, gosterGizleGuncelle] = useState(false)

  function butonTiklama() {
    gosterGizleGuncelle( eskiDeger => eskiDeger === true ? false : true )
  }

  return (
    <>
      { gosterGizle === true ? <C1 /> : "" } 
      <button onClick={butonTiklama}>C1 Göster/Gizle</button>
    </>
  );
}

export default App;
