import React from "react";
import { MDBCol, MDBFormInline, MDBIcon } from "mdbreact";

const SearchPage = (props) => {
  return (
    <MDBCol md="6">
      <MDBFormInline className="md-form">
        <MDBIcon icon="search" />
        <input className="form-control form-control-sm ml-3 w-75" type="text" placeholder="Search" aria-label="Search" onChange={ props.onFilter }/>
      </MDBFormInline>
    </MDBCol>
  );
}

export default SearchPage;