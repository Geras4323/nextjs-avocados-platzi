import React, { useState, useEffect } from 'react'

const Home = () => {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    window.fetch('/api/avo')
      .then(response => response.json())
      .then(({ length, data }) => {
        setProductList(data);
      })
  }, [])

  return (
    <div>
      <h1 className='text-cyan-500'>Hello world!</h1>
      {productList.map((product) => (
        <div key={product.id}>
          <p>{product.id}</p>
          <p>{product.name}</p>
        </div>
      ))}
    </div>
  )
}

export default Home