import { useState } from 'react';
import './App.css';
import C1 from './C1';

function App() {
  const [sayi, sayiGuncelle] = useState(0)

  return (
    <C1 veri={sayi} />
  );
}

export default App;
