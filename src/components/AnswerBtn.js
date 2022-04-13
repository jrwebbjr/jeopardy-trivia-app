import { useState, useEffect } from "react";


export default function AnswerBtn() {
  const [answer, setAnswer] = useState(null)
  
  const url = `http://jservice.io/api/random`;
  
  const handleClick = async() => {
    try{
      const response = await fetch(url);
      const data = await response.json();
      setAnswer(data[0]);
    } catch(e){
      console.error(e)
    }
  };
  
  // useEffect(() => {
  //   getAnswer();
  // }, [])
  
  const loaded = () => {
    return (
      <div>
        <h1>{answer.question}</h1>
        <button onClick={handleClick}>Get Question</button>
      </div>
    )
  }
  const loading = () => {
    return (
      <>
        <h1>Loading Answer...</h1>
        <button onClick={handleClick}>Get Question</button>
      </>
    )
  };

  return answer ? loaded() : loading();
}