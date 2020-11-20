import React from 'react';
import { Form } from 'react-bootstrap';


function SearchBox(props) {
    return (
    <div className="form">
     <Form.Group className="mt-4 mx-auto d-block" style={{ width: "60%" }}>
     <Form.Control onChange={props.handleInput} type="text" placeholder="Type" />
     </Form.Group>
    </div>
    );
}

export default SearchBox;
