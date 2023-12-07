import './App.css'
import { Navigate, Route, Routes } from 'react-router-dom'
import Layout from './Features/Layout'
import AboutDetail from './Features/About/About-detail'
import Home from './Features/Home'
import ProjectList from './Features/Project/Project-list'
import ProjectDetail from './Features/Project/Project-detail'

function App() {
  return (
    <Routes>
      <Route element={<Layout />} path='/'>
        <Route index element={<Navigate to='/home' />} />
        <Route path='about' element={<AboutDetail />} />
        <Route path='project/list' element={<ProjectList />} />
        <Route path='project/:id' element={<ProjectDetail />} />
        <Route path='home' element={<Home />} />
      </Route>
    </Routes>
  )
}

export default App
