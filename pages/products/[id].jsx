import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

const ProductPage = () => {
  const [avo, setAvo] = useState()
  const router = useRouter()

  useEffect(() => {
    window.fetch(`/api/avo/${router.query.id}`)
      .then(response => response.json())
      .then(data => setAvo(data))
  }, [router.query.id])

  return (
    <section>
      <h1>Página producto: {avo?.name} </h1>
    </section>
  )
}

export default ProductPage