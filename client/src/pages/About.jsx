import React from 'react'

export default function About() {
  return (
    <div className='min-h-screen flex items-center justify-center'>
      <div className="max-w-2xl mx-auto p-3 text-center">
        <div>
          <h1 className='text-3xl font font-semibold text-center my-7'>About Pradip's Blog</h1>
          <div className="text-md text-gray-500 flex flex-col justify-center items-center gap-6">
            <p>
              Welcome to my blog! I'm Pradip Das, a student passionate about web development and eager to share my coding journey with you. As I navigate through the ever-evolving world of technology, I document my experiences, learnings, and insights to help fellow enthusiasts and developers. This blog is a space where I combine my love for coding with my desire to connect with like-minded individuals.
            </p>
            <p>
              Here, you'll find a wealth of content focused on JavaScript, ReactJS, HTML, CSS, Next.js, and various web development topics. From in-depth tutorials and practical project showcases to handy tips and industry insights, my goal is to provide valuable resources that cater to both beginners and seasoned developers. I believe in the power of community and the importance of continuous learning, and I aim to contribute to that through this blog.
            </p>
            <p>Whether you're just starting out in your coding journey or looking to expand your skills, I hope you find something here that sparks your interest and aids your development. Thank you for visiting, and happy coding!
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
