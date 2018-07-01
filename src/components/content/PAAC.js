import React from 'react'
import './Content.css'
import ContainerForCreate from '../ContainerForCreate'

const PAAC = ({children}) => {
  return (
    <div>
    <ContainerForCreate>
      <h1>La PAAC post 2020 </h1>
        <p>PAAC post 2020 souhaitée par la plateforme <i>Pour une autre PAC </i>à télécharger</p>
          <br/>
      <h1>La PAAC à horizon 2030</h1>
        <p>PAAC post 2030 souhaitée par la plateforme <i>Pour une autre PAC </i>à télécharger</p>
      </ContainerForCreate>
    </div>

  )
}

export default PAAC
