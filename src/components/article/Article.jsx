import React from 'react'
import './article.css'
export default function Article({imgurl}) {
  return (
    <div className='gpt3__blog-container_article'>
      <div className='gpt3__blog-container_article-image'>
        <img src={imgurl} alt="img" />
      </div>
      <div className='gpt3__blog-container_article-content'>
        <p>Sep 26, 2021</p>
        <h3>GPT-3 and Open  AI is the future. Let us exlore how it is?</h3>
        <p>Read Full Article</p>
      </div>
    </div>
  )
}
