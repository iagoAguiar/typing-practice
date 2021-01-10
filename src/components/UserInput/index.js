import React, { useState } from 'react';
import Score from '../Score'

import api from '../../services/api'

export default function UserInput(props){



     const [ valor, setValor] = useState(props.texto)
    



     return(



          <>   
               <input value={valor} onInput={e => setValor(e.target.value)} />
          
               <Score texto={valor}/>  


          </>
     )
}









/*

          var urls = [
               ['../../assets/words/wordsList.txt', mostrarNaTela],
               ['/home/iago/Documentos/Programação/Projetos/typing-practice/typing-practice/src/assets/words/wordsList.txt', logarNoConsole],
               ['../../assets/words/wordsList.txt', escreverNaTela]
          ]


   */