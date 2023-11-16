import { useState, useEffect } from "react"
import OneNabidka from "../components/vypisNabidek/OneNabidka";

const VypisNabidek = () => {
  const [nabidky, setNabidky] = useState([]);
  const [serverMsg, setServerMsg] = useState("Načítam data");

  useEffect( () => {
    naplnitNabidky();
  },[])

  const naplnitNabidky = async () => {
    const data = await fetch ("http://localhost:5000/get-nabidka");
    const finalData = await data.json();
    const {msg,documents} = finalData;
    setNabidky(documents);
    setServerMsg(msg)
  }

  return <div className='vypisNabidek'>
      {nabidky.map((oneNabidka , index) => {
        oneNabidka = {...oneNabidka,index}
        return <OneNabidka key={index} oneNabidka={oneNabidka}  />
      })}
      <p>{serverMsg}</p>
  </div>
}

export default VypisNabidek