import React from 'react';
import { Route, Routes } from "react-router-dom";

import FormCliente from './views/cliente/FormCliente';
import ListCliente from './views/cliente/ListCliente';
import FormEntregador from './views/entregador/FormEntregador';
import ListEntregador from './views/entregador/ListEntregador';
import ListProduto from './views/produtos/ListProduto';
import Home from './views/home/Home';
import FormProduto from './views/produtos/FormProduto';
import FormMaterial from './views/material/FormMaterial';
import ListMaterial from './views/material/ListMaterial';
import FormCupomDesconto from './views/cupomDesconto/FormCupomDesconto';
import ListCupomDesconto from './views/cupomDesconto/ListCupomDesconto';
import FormCategoriaProduto from './views/categoriaproduto/FormCategoriaProduto';
import ListCategoriaProduto from './views/categoriaproduto/ListCategoriaProduto';
import { ProtectedRoute } from './views/util/ProtectedRoute';


function Rotas() {
    return (
        <>
            <Routes>
                <Route path="/" element={ <FormLogin/> } />
                <Route path="/home" element={<ProtectedRoute> <Home /></ProtectedRoute>}/>
                
                <Route path="list-cliente" element={ <ProtectedRoute><ListCliente/></ProtectedRoute>} />
                <Route path="form-cliente" element={ <ProtectedRoute><FormCliente/> </ProtectedRoute>} />

                <Route path="list-produto" element={ <ProtectedRoute><ListProduto/> </ProtectedRoute>} />
                <Route path="form-produto" element={ <ProtectedRoute><FormProduto/> </ProtectedRoute>} />
                
                <Route path="form-categoria-produto" element={<ProtectedRoute><FormCategoriaProduto/> </ProtectedRoute> } />
                <Route path="list-categoria-produto" element={ <ProtectedRoute><ListCategoriaProduto/></ProtectedRoute> } />

                <Route path="list-entregador" element={ <ProtectedRoute><ListEntregador/></ProtectedRoute> } />
                <Route path="form-entregador" element={<ProtectedRoute> <FormEntregador/></ProtectedRoute> } />

                <Route path="form-material" element={<ProtectedRoute><FormMaterial/></ProtectedRoute> } />
                <Route path="list-material" element={ <ProtectedRoute><ListMaterial/></ProtectedRoute> } />

                <Route path="list-cupomdesconto" element={<ProtectedRoute><ListCupomDesconto/></ProtectedRoute>  } />
                <Route path="form-cupomdesconto" element={ <ProtectedRoute><FormCupomDesconto/></ProtectedRoute> } />
               
            </Routes>
        </>
    )
}

export default Rotas
