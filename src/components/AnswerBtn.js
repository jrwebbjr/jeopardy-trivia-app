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
  
  