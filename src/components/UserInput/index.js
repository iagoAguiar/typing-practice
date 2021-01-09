import React, { useState } from 'react';
import Score from '../Score'

export default function UserInput(props){



     const [ valor, setValor] = useState(props.texto)


     return(



          <>   
               <input value={valor} onInput={e => setValor(e.target.value)} />

               
               <Score texto={valor}/>  


          </>
     )
}