import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Dashboard from './Dashboard'
import EditPostPage from './features/post/EditPostPage'
import SinglePostPage from './features/post/SinglePostPage'
const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Dashboard/>} />
      <Route path='posts/:postId' element={<SinglePostPage/>}/>
      <Route path='editPosts/:postId' element={<EditPostPage/>} />
    </Routes>
  )
}

export default App
