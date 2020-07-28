// // import React from 'react';
// import NavbarPage from './navbar';
// import Product_card from './product-card';
// import { BrowserRouter as Router } from 'react-router-dom';
// import { MDBCol, MDBRow, MDBListGroup, MDBListGroupItem} from 'mdbreact';

// const Dashboard = () => {

    

//     return (
        // <Router style={{ overflow: "hidden" }}>
        //     <NavbarPage></NavbarPage>
        //     <MDBRow>
        //         <MDBCol size="2" className="#e8f5e9 green lighten-5" style={{ minHeight: "100vh" }}>
        //             <MDBRow>
        //                 <MDBCol>
        //                     <MDBCol>
        //                         <MDBListGroup vertical>
        //                             <MDBListGroupItem color="amber">Add Product</MDBListGroupItem>
        //                             <MDBListGroupItem color="amber">View Products</MDBListGroupItem>
        //                             <MDBListGroupItem color="amber">Inventories</MDBListGroupItem>
        //                             <MDBListGroupItem color="amber">Edit Product</MDBListGroupItem>
        //                         </MDBListGroup>
        //                     </MDBCol>
        //                 </MDBCol>
        //             </MDBRow>
        //         </MDBCol>
        //         <MDBCol size="10">
        //             <MDBRow>
        //                 <Product_card />
        //                 <Product_card />
        //                 <Product_card />
        //             </MDBRow>
        //         </MDBCol>
        //     </MDBRow>
        // </Router>
//     )
// }

// export default Dashboard;
import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import NavbarPage from './navbar';
import Product_card from './product-card';
import { MDBCol, MDBRow, MDBListGroup, MDBListGroupItem} from 'mdbreact';

class Dashboard extends Component {
  state = {
    DashboardItem: '1'
  };

  togglePills = tab => () => {
    const { activeItem } = this.state;
    if (activeItem !== tab) {
      this.setState({
        DashboardItem: tab
      });
    }
  };

  render() {
    const { DashboardItem } = this.state;

    return (
        <Router style={{ overflow: "hidden" }}>
        <NavbarPage></NavbarPage>
        <MDBRow>
            <MDBCol size="2" className="#e8f5e9 green lighten-5" style={{ minHeight: "100vh" }}>
                <MDBRow>
                    <MDBCol>
                        <MDBCol>
                            <MDBListGroup vertical>
                                <MDBListGroupItem color="amber">Add Product</MDBListGroupItem>
                                <MDBListGroupItem color="amber">View Products</MDBListGroupItem>
                                <MDBListGroupItem color="amber">Inventories</MDBListGroupItem>
                                <MDBListGroupItem color="amber">Edit Product</MDBListGroupItem>
                            </MDBListGroup>
                        </MDBCol>
                    </MDBCol>
                </MDBRow>
            </MDBCol>
            <MDBCol size="10">
                <MDBRow>
                    <Product_card />
                    <Product_card />
                    <Product_card />
                </MDBRow>
            </MDBCol>
        </MDBRow>
    </Router>
    );
  }
}

export default Dashboard;