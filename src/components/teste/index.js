import React, { useState } from 'react'
import UserInput from '../UserInput'


export default function Teste(props){ 

  


     const [ resultado, setResultado] = useState("teste");


     return(
          <> 

              <UserInput texto={resultado}></UserInput>

          </>
     )
}

