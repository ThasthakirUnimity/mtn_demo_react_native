import React, { useState } from 'react'

import Main from './Main'
import Form from './Form'

const EB = ({ submitPayment }) => {
  const [seleted, selectNumber] = useState(null)

  if (seleted) {
    return (<Form seleted={seleted} submitPayment={submitPayment} />)
  }

  return (<Main selectNumber={selectNumber} />)
}

export default EB
