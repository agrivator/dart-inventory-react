import React from 'react';
import { MDBTable, MDBTableBody, MDBTableHead } from 'mdbreact';
import { MDBContainer } from '../src';
// import { MDBTypography, MDBBox } from 'mdbreact';

const BasicTable = () => {
  return (
    <MDBContainer className='mt-5'>
      <h1 className='text-center py-2'>Data Table</h1>
      <MDBTable bordered>
        <MDBTableHead color='primary-color'>
          <tr>
            <th class='th-sm'>Product Name
          </th>
            <th class='th-sm'>Category
          </th>
            <th class='th-sm'>Image
          </th>
            <th class='th-sm'>Description
          </th>
            <th class='th-sm'>Size
          </th>
            <th class='th-sm'>Price
          </th>
            <th class='th-sm'>Unit
          </th>
          </tr>
        </MDBTableHead>
        <MDBTableBody>
          <tr>
            <td>Name1</td>
            <td>Category1</td>
            <td>    <img style={{width:'150px'}} src='https://mdbootstrap.com/img/Others/documentation/img%20(75)-mini.jpg' alt='thumbnail' className='img-thumbnail' /></td>
            <td>d1</td>
            <td>Size1</td>
            <td>Price1</td>
            <td>Unit1</td>
          </tr>
          <tr>
            <td>Name2</td>
            <td>Category2</td>
            <td>    <img style={{width:'150px'}} src='https://mdbootstrap.com/img/Photos/Slides/img%20(54).jpg' alt='thumbnail' className='img-thumbnail' /></td>
            <td>d2</td>
            <td>Size2</td>
            <td>Price2</td>
            <td>Unit2</td>
          </tr>
          <tr>
            <td>Name3</td>
            <td>Category3</td>
            <td>    <img style={{width:'150px'}} src='https://mdbootstrap.com/img/Photos/Others/forest-sm.jpg' alt='thumbnail' className='img-thumbnail' /></td>
            <td>d3</td>
            <td>Size3</td>
            <td>Price3</td>
            <td>Unit3</td>
          </tr>
          <tr>
            <td>Name4</td>
            <td>Category4</td>
            <td>    <img style={{width:'150px'}} src='https://mdbootstrap.com/img/Photos/Others/nature-sm.jpg' alt='thumbnail' className='img-thumbnail' /></td>
            <td>d4</td>
            <td>Size4</td>
            <td>Price4</td>
            <td>Unit4</td>
          </tr>
          <tr>
            <td>Name5</td>
            <td>Category5</td>
            <td>    <img style={{width:'150px'}} src='https://mdbootstrap.com/img/Photos/Horizontal/Nature/6-col/img%20(131).jpg' alt='thumbnail' className='img-thumbnail' /></td>
            <td>d5</td>
            <td>Size5</td>
            <td>Price5</td>
            <td>Unit5</td>
          </tr>
        </MDBTableBody>
      </MDBTable>
    </MDBContainer>
  );
}

export default BasicTable;