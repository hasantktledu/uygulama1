import { useEffect, useState } from 'react';
import './App.css';
import C1 from './C1';

function App() {
  const [gosterGizle, gosterGizleGuncelle] = useState(true)
  const [sayi, sayiGuncelle] = useState(0)

  console.log("Bu birinci aşama")

  useEffect( ()=>{  
    console.log("Bu üçüncü aşama.. (app useeffect)")

    return ()=>{ console.log("App içindeki useffect cleanup çalıştı..") }
  }, [] )

  console.log("Bu ikinci aşama")

  function butonTikla() {
    gosterGizleGuncelle( eskiDeger=>eskiDeger===true?false:true )
  }

  function butonTikla2() {
    sayiGuncelle( eskiDeger=>eskiDeger+5 )
  }

  return (
    <>
      Bu App componenti..
      <button onClick={butonTikla}>C1 göster/gizle</button>
      <button onClick={butonTikla2}>Arttır {sayi}</button>
      {gosterGizle && <C1 />}
    </>
  );
}

export default App;
