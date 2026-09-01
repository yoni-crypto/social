import React from 'react'
import { useEffect, useState } from 'react'

function Test() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((data) => {
        console.log('Posts:', data)
        setPosts(data)
      })
      .catch((error) => {
        console.error('Error:', error)
      })
  }, [])

  return (
    <div>
      {posts.map((post) => (
        <div key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  )
}

export default Test