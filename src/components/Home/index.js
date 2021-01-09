import React , {  useState } from 'react'
import { Link } from 'react-router-dom'

import {  Button  } from '@material-ui/core';

import './index.css'

export default function Header(props){

     const [ texto , setTexto] = useState(props.texto);
     window.onload = cabecalho;

     const url = "http://localhost:3000/";

     function cabecalho(){ 

    
          if(window.location.toString() != url){
               setTexto([ <h1>Typing Practice</h1>,
                    <h3 className="line-1 anim-typewriter">Practicing...</h3>,]) 

}else{
     
          setTexto([
               <h1>Typing Practice</h1>,
                    <h3 className="line-1 anim-typewriter"  >Reasons for do it</h3>,
               
               <p>Some things are so obvious they can be easily overlooked. As a developer your ability to type quickly and accurately is one factor that influences your development productivity. The objective of the Typing Practice app is to provide you with typing practice along with metrics to allow you to measure your progress.
                    </p>,
                    <p>
                    Typing practice displays a word which you must then type within a specific interval of time. If the word is incorrectly typed it stays on screen and the time interval remains the same. But when the word is correctly typed a new word is displayed and the time interval is slightly reduced.
                    </p>,
                    <p>Hopefully, this repetitive practice will help you improve both your typing speed and accuracy.</p>,
                    <br />,
                    <Button variant="contained" color="primary"  href="/Teste">Iniciate</Button>,])
          } 
     }
          

     return(
          <header>
               <div class="overlay">
                    {texto}
               </div>
          </header>

     )
}


