import React from 'react'
import { Switch,BrowserRouter,Route } from 'react-router-dom';

import ProductPage from './ProductPage/product'
import ProductInventoryPage from './ProductInventoryPage/productInventory'
import ProductListPage from './ProductListPage/productList'
import SignInPage from './SignInPage/signin'
import Dashboard from './dashboard/dashboard';
import Navbar from './covidDashboard/Navbar';
import AddProduct from './AddProduct/add-product';

const Router = () =>{
    return(
        <BrowserRouter>
           <Switch>
                <Route component={SignInPage} path="/" exact />
                <Route component={ProductListPage} path="/products" exact/>
                <Route component={ProductPage} path="/products/add" exact/>
                <Route component={ProductInventoryPage} path="/product/inventory" exact/>
                <Route component={Dashboard} path="/dashboard" exact/>
                <Route component={Navbar} path="/Navbar" exact/>
                <Route component={AddProduct} path="/add-product" exact/>
           </Switch>
        </BrowserRouter>
    )
}

export default Router;