import { useEffect } from "react";

function C1() {
  console.log("C1 log 1..");

  useEffect(() => {
    console.log("Useeffect çalıştı.. (C1)");

    return ()=>{ console.log("C1 içindeki useffect cleanup çalıştı..") }
  }, []);

  return <p>C1 komponenti..</p>;
}

export default C1;
