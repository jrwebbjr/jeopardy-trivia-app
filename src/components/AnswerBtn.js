import { useState, useEffect } from "react";


export default function AnswerBtn() {
  const [answer, setAnswer] = useState(null)
  
  const url = `http://jservice.io/api/random`;
  
  const getAnswer = async() => {
    try{
      const response = await fetch(url);
      const data = await response.json();
      setAnswer(data);
    } catch(e){
      console.error(e)
    }
  };
  
  useEffect(() => {
    getAnswer();
  }, [])
  
  const loaded = () => {
    return (
      <div>
        <h1>{answer}</h1>
      </div>
    )
  }
  const loading = () => {
    return <h1>Loading Answer...</h1>
  };

  return answer ? loaded() : loading();
}