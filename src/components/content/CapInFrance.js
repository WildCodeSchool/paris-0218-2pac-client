import React from 'react'
import ContainerForCreate from '../ContainerForCreate'

const CapInFrance = ({children}) => {
  return (
    <div>
    <ContainerForCreate>
      <h1>The CAP in France</h1>
      <p>For a summary of France’s choices regarding the implementation of the CAP 2014-2020, you can read the following factsheets from the European Commission :
        <a href="https://ec.europa.eu/agriculture/sites/agriculture/files/cap-in-your-country/pdf/fr_en.pdf">
        https://ec.europa.eu/agriculture/sites/agriculture/files/cap-in-your-country/pdf/fr_en.pdf </a>.</p>

      <p>Download the contribution of the French government to the preparation of the future post 2020 CAP</p>
    </ContainerForCreate>
    </div>
  )
}

export default CapInFrance
