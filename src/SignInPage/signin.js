import React from 'react'
import styles from  './signinStyle.module.css'
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBCardBody, MDBCard } from 'mdbreact';

const SignInPage = () => {
return (
<MDBContainer className={styles.form}>
  <MDBRow>
    <MDBCol>
    <MDBCard>
    <MDBCardBody className={styles.formBody}>
      <form>
        <p className="h4 text-center">Sign in</p>
        <label htmlFor="defaultFormLoginEmailEx" className="grey-text">
          Your email
        </label>
        <input type="email" id="defaultFormLoginEmailEx" className="form-control" placeholder="Username" />
        <br />
        <label htmlFor="defaultFormLoginPasswordEx" className="grey-text">
          Your password
        </label>
        <input type="password" id="defaultFormLoginPasswordEx" className="form-control" placeholder="Password" />
        <div className="text-center" className={styles.button}>
          <MDBBtn color="info" type="submit" block>Login</MDBBtn>
        </div>
      </form>
      </MDBCardBody>
      </MDBCard>
    </MDBCol>
  </MDBRow>
</MDBContainer>
);
};

export default SignInPage