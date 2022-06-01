import { useState } from "react";


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

  const loaded = () => {
    return (
      <main className="w-screen h-screen bg-gray-800">
        <h1 className="bg-gray-800 text-white text-[125px] flex justify-center pb-[100px]">Welcome to Jeopardy!</h1>
        <div className="flex justify-evenly">
          <div>
            <div className="text-blue-600"></div>
          </div>
          <div className="w-[650px] h-[475px] bg-black flex flex-col">
            <div className="flex justify-center items-center pt-6">
              <h1 className="bg-blue-600 w-[600px] h-[400px] font text-4xl flex justify-center items-center p-10">{answer.question}</h1>
            </div>
            <div className="flex items-center justify-center pt-[10px] gap-10">
              <button className="bg-white px-10 text-black font-bold text-xl border-2 border-blue-600 rounded-full" onClick={handleClick}>Get Question</button>
              <button className="bg-white px-10 text-black font-bold text-xl border-2 border-blue-600 rounded-full">Show Answer</button>
              <div className="flex items-center justify-end text-red-600">.</div>
            </div>
          </div>
          <div className="flex flex-col">
            <h2 className="text-white w-max h-max font-bold text-4xl">Difficulty: {answer.value}</h2>
            <h2 className="text-white w-max h-max font-bold text-4xl pt-[50px]">Answer: {answer.answer}</h2>
          </div>
        </div>
        
      </main>
    )
  }
  const loading = () => {
    return (
      <main className="bg-gray-800 w-screen h-screen">
        <h1 className="bg-gray-800 text-white text-[125px] flex justify-center pb-[100px]">Welcome to Jeopardy!</h1>
        <div className="bg-gray-800 flex flex-col justify-center items-center">
          <h1 className="bg-gray-800 font text-[50px]">Ready for your Answer?</h1>
          <div className="flex items-center justify-center pt-10">
            <button className="bg-white px-10 text-black font-bold text-xl border-2 border-blue-600 rounded-full" onClick={handleClick}>Get Answer</button>
          </div>
        </div>
      </main>
    )
  };

  return answer ? loaded() : loading();
}