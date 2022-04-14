import React from 'react'
import Dashboard from './Dashboard';
import Sidebar from '../components/Sidebar/Sidebar';
import Login from '../components/Auth/Login';

const code = new URLSearchParams(window.location.search).get('code')
// console.log(code)

const Home = () => {
  return (
    <> 
        <Sidebar />
        {code ? <Dashboard code={code} /> : <Login />}
    </>
  )
}

export default Home