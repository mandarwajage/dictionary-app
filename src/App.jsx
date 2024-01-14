import { useEffect } from "react";
import { useEffect } from "react";
function App() {

  const disctionaryApi= async() =>{
    try{
      const data = await axios.get('https://api.dictionaryapi.dev/api/v2/entries/en/plane')
    }catch(error){
      console.log(error);
    }
  };

useEffect(() => {
  disctionaryApi()
},[])
  return (
    <>HEllo world</>
  )
}

export default App
