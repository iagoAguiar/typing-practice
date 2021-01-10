import React, { useState } from 'react'
import UserInput from '../UserInput'

import './index.scss'

export default function Teste(props){ 

  


     const [ resultado ] = useState("teste");


     return(
          <> 
              <UserInput className="teste" texto={resultado}></UserInput>

          </>
     )
}

