import C2 from "./C2"
import C3 from "./C3"

function C1({veri}) {

    return (
        <>
            <p>C1 komponenti</p>
            <C2 />
            <C3 deger={veri} ad="Hasan" />
        </>
    )
}

export default C1