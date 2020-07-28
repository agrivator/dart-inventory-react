import React from "react";
import {
  MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText,
  MDBBadge
} from "mdbreact";
import { BrowserRouter as Router } from 'react-router-dom';

const Product_card = () => {
  return (
    <Router>
      <MDBCard className="m-2" style={{ width: "22rem" }} cascade ecommerce>
        <MDBCardImage cascade top src="https://hips.hearstapps.com/ghk.h-cdn.co/assets/18/09/2048x1364/gallery-1519672422-carrots.jpg?resize=980:*" waves />
        <MDBCardBody cascade className="text-center">
          <MDBCardTitle tag="h5">
            Food
        </MDBCardTitle>
          <MDBCardTitle>
            <a href="#!"><strong>Product 1</strong></a>
          </MDBCardTitle>
          <MDBCardText>
            Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe
            eveniet ut et voluptates. Temporibus autem quibusdam. Lorem Ipsum dolor ament.
        </MDBCardText>
          <span className="float-left mr-2"><MDBBadge color="default">Food</MDBBadge></span>
          <span className="float-left mr-2"><MDBBadge color="default">Rice</MDBBadge></span>

        </MDBCardBody>
      </MDBCard>
    </Router>
  );
}

export default Product_card;