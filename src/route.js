import React from 'react'
import { Switch,BrowserRouter,Route } from 'react-router-dom';

import ProductPage from './ProductPage/product'
import ProductInventoryPage from './ProductInventoryPage/productInventory'
import ProductListPage from './ProductListPage/productList'
import SignInPage from './SignInPage/signin'

const Router = () =>{
    return(
        <BrowserRouter>
           <Switch>
                <Route component={SignInPage} path="/" exact />
                <Route component={ProductListPage} path="/products" exact/>
                <Route component={ProductPage} path="/products/add" exact/>
                <Route component={ProductInventoryPage} path="/product/inventory" exact/>
           </Switch>
        </BrowserRouter>
    )
}

export default Router;