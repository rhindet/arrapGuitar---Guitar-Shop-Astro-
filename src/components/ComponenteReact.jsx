import React, { useState } from 'react'

export default function ComponenteReact() {
    const [cliente ,setCliente] = useState('Luis')
    console.log('Cliente y servidor');
  return (
    <div>
      {cliente}
    </div>
  )
}
