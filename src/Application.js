import React from 'react'
import { Header }  from './components/Header'
import { Footer } from './components/Footer'
import { HomePage } from './pages/HomePage'
import { CartProvider } from './context/CartContext';
import { AuthProvider } from './context/AuthContext';
import { Routes, Route } from "react-router-dom";
import { Cart } from '../src/pages/Cart'
import {PanelPage} from './pages/PanelPage'
import {Login} from './pages/Login'
import PrivateRoute from './components/PrivateRoute'
import { Pedidos } from './pages/Pedidos';
import { RegisterUser } from './pages/RegisterUser';

export const Application = () => {
  
  return (<div>
              <CartProvider>
                <AuthProvider>
                   <Header></Header>
                   <Routes>
                        <Route path="/" element={<HomePage />} />
                        {/* <Route path="/terms" element={<FaqPage />} /> */}
                        <Route path="/registrar34520082" element={<RegisterUser />} />
                        <Route path="/login" element={<Login />} />
                        <Route element={<PrivateRoute />}>
                            <Route path="/panel" element={<PanelPage />}/>
                            <Route path="/pedidos" element={<Pedidos />}/>
                         </Route>
                        <Route path="/Cart" element={<Cart />} />
                    </Routes>
                   <Footer></Footer>
               </AuthProvider>  
             </CartProvider>
        </div>
  )
}

