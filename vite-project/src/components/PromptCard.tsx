import { useState } from 'react';
import './PromptCard.scss';

export default function PromptCard({title, description}:{title:string, description:string}){

    const [prompt, setPrompt]= useState("");
  
   function handleSubmit(e:any){
    e.preventDefault();
    console.log(prompt);
   }

    return <>
        <h1 className='prompt-card-title'>{title}</h1>
        <p>{description}</p>
        <input className="textArea" role="textbox"  name='prompt' onChange={e=> setPrompt(e.target.value)}  />
        <button type='submit' onClick={handleSubmit}>Get Weather</button>

        <p>Ex: What is the current weather in Suceava?</p>
    </>
}