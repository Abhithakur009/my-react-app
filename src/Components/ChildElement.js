import React from 'react';
import ChildElement from './ChildElement';
import { useState, useEffect } from 'react';
import { Row, Col } from 'react-bootstrap-v5';


const allInputData = { id: new Date().getTime().toString() }

const initialFormData = Object.freeze({
    title: "",
    subtitle: "",
    file: ""
});

function Parentdata(props) {
    const [arr, setArr] = useState([<ChildList  handleChange={getFromChild} />]);
    const [firstVal, setFirstval] = useState('');
    const [items, setItems] = useState([]);

useEffect(() => {
  localStorage.setItem('items', JSON.stringify(items));
}, [items]);



    function getFromChild(formData) {

        console.log(props.formData)
    }



    function addOption(event) {

        event.preventDefault();
        console.log(allInputData);
        setArr([...arr, <ChildList handleChange={getFromChild} />])
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(props);
        // ... submit to API or something
    };



    const ItemDelete = (id) => {

        const newIds = id;
        if (newIds == 0) {
        } else {
            var el = document.querySelector('[data-myid="' + newIds + '"]');
            el.remove();
        }
    }

    return (
        <div className="container border" >
            <div className="row mt-2 justify-content-center">

                <div className="col-md-6">
                    <h3 className="form-label">Product Option </h3>
                </div>
                <div className="col-md-3">
                </div>
                <div className="col-md-3">
                    <button type="button" onClick={addOption} className="btn btn-primary">
                        Add New Option
                    </button>
                    <button type="button" onClick={handleSubmit} className="btn btn-primary">
                        Save option
                    </button>
                </div>

            </div>

            <div id="children-pane" >

                {arr.map((item, index) => (
                    <>
                        <div className="mu-div" key={index} data-myid={index}>

                            {item}



                            <button id={index} onClick={() => ItemDelete(index)} type="button" className="btn btn-primary">
                                Delete
                            </button>
                        </div>
                    </>

                ))}
            </div>
         <Row>
             <Col>
             <div className="test">mytest</div>
             </Col>
         </Row>
        </div>
    )
}



function ChildList(props) {

const [formData, updateFormData] = React.useState(initialFormData);

//const { parentCallback }= props;


  const handleChange = (e) => {

        updateFormData({
            ...formData,
            // Trimming any whitespace
            [e.target.name]: e.target.value.trim()
        });
       // props.parentCallback(formData);
        console.log(formData);
    };

    return (
        <div className="container mt-5">
            <div className="row justify-content-center mt-2 ">
                <div className="col-md-12">
                    <h5 className="productoption">
                        Add Option Name</h5>
                    <input type="text" name="option-name" className="form-control" />
                </div>
            </div>

            <div className="row justify-content-center apdata">
                <div className="col-md-3">
                    <label className="form-label">Upload Image </label>
                    <input name="file" className="form-control" id="formFileLg" onChange={handleChange} type="file" />
                </div>
                <div className="col-md-3">
                    <label className="form-label">Title </label>
                    <input type="text" name="title" onChange={handleChange} className="form-control" />
                </div>
                <div className="col-md-3">
                    <label className="form-label">Sub Title</label>
                    <input type="text" name="subtitle" onChange={handleChange} className="form-control" />
                </div>
                <div className="col-md-3">

                </div>
            </div>
        </div>
    );
}
export default Parentdata