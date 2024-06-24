import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home } from './page/Home.tsx'
import { AuthenticationGuard } from './component/AuthenticationGuard.tsx'
import Profile from './page/Profile.tsx'
import Login from './page/Login.tsx'
import { Auth0ProviderWithNavigate } from './component/Auth0ProviderWithNavigate.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Auth0ProviderWithNavigate>
        <Routes>
          <Route path='/' element={<Login/>}></Route>
          <Route path='/home' element={<AuthenticationGuard component={Home} />}></Route>
          <Route path='/profile' element={<AuthenticationGuard component={Profile} />}></Route>
        </Routes>
      </Auth0ProviderWithNavigate>
    </BrowserRouter>
  </React.StrictMode>,
)
