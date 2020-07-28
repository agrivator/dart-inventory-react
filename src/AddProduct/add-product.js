import React from "react";
import { MDBInput, MDBContainer, MDBRow, MDBBtn, MDBCol,MDBDropdownItem,MDBDropdownMenu ,MDBDropdown,MDBDropdownToggle} from "mdbreact";

const AddProduct = () => {
    return (
        <MDBContainer className=" mx-auto border p-5">
            <MDBRow className=" mx-auto">
                <MDBCol md="8"  className="mx-auto">
                    <form>
                        <p className="h3 text-center mb-4">Add Product</p>
                        <div className="grey-text">
                            <MDBInput label="Name of Product" type="text" />
                            <MDBInput type="textarea" label="Description" rows="3" />
                        </div>
                        <div className="input-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text" id="inputGroupFileAddon01">
                                    Upload</span>
                            </div>
                            <div className="custom-file">
                                <input
                                    type="file"
                                    className="custom-file-input"
                                    id="inputGroupFile01"
                                    aria-describedby="inputGroupFileAddon01"
                                />
                                <label className="custom-file-label" htmlFor="inputGroupFile01">
                                    Choose Image</label>
                            </div>
                        </div>
                        <MDBDropdown className="mt-3" dropright size="sm">
                            <MDBDropdownToggle caret color="green">
                                Categories
                            </MDBDropdownToggle>
                            <MDBDropdownMenu basic>
                                <MDBDropdownItem>category 1</MDBDropdownItem>
                                <MDBDropdownItem>category 2</MDBDropdownItem>
                                <MDBDropdownItem>category 3</MDBDropdownItem>
                                <MDBDropdownItem>category 4</MDBDropdownItem>
                                <MDBDropdownItem>category 5</MDBDropdownItem>
                                <MDBDropdownItem>category 6</MDBDropdownItem>
                            </MDBDropdownMenu>
                        </MDBDropdown>
                        <div className="text-center mt-3">
                            <MDBBtn color="green" size="sm">Add Product</MDBBtn>
                        </div>
                    </form>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    );
}

export default AddProduct;