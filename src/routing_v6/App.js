import React, {lazy, Suspense} from 'react'
import { Route, Routes, Link } from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom';

// import Login from './Login'
// import Register from './Register'
// import NoMatch from './NoMatch'
// import Dashboard from './Dashboard'
// import Name from './Name'

const Login = lazy(()=> import('./Login'))
const Register = lazy(()=> import('./Register'))
const NoMatch = lazy(()=> import('./NoMatch'))
const Dashboard = lazy(()=> import('./Dashboard'))
const Name = lazy(()=> import('./Name'))

function App() {
  return (
    <>
    <BrowserRouter>

    
      <Suspense fallback={<div style={{background: 'red', height: '100vh'}}>Loading.....</div>} >
        <Routes>
          <Route path='/' element={<Login />}/>
          <Route path='/login' element={<Login />}/>
          <Route path='/register' element={<Register />}/>
          <Route path='/dashboard' element={<Dashboard />}/>
          <Route path='/dashboard/:name' element={<Name />}/>
          <Route path='*' element={<NoMatch />}/>
        </Routes>
      </Suspense>
    </BrowserRouter>
    </>
  )
}

export default App