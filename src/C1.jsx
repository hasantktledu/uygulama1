import { useState } from "react"

function C1() {
    const [sayi, sayiGuncelle] = useState(0)

    function butonTiklama() {
        sayiGuncelle( eskiDeger=>eskiDeger+5 )
    }

    return (
        <>
            <p>C1 komponenti..</p>
            <p>Sayı değeri: {sayi}</p>
            <button onClick={butonTiklama}>Arttır (+5)</button>
        </>
    )
}

export default C1