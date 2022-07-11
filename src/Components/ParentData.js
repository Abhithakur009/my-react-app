import React, { useState } from 'react'
import { Container, Row, Col, Button, Form } from 'react-bootstrap-v5';
import { useForm } from "react-hook-form";



function Parentdata() {

    //new Form data 
    const [picture, setPicture] = useState(null);
    const [imgData, setImgData] = useState(null);
    const { register, handleSubmit, watch, formState: { errors } } = useForm([]);
    // const onSubmit = data => console.log(data);
    const [selectedOptions, setSelectedOptions] = useState();


    function handleSelect(data) {
        setSelectedOptions(data);
        // setSelectedOptions(prevState => {data: prevState.data + 1});
    }

    const [fields, setFields] = useState([{
        id: 1,
        imgname: "",
        firstName: "",
        lastName: ""
    }
])

    const handleChangeInput = (i, e) => {
        console.log(e.target.value);
        const values = [...fields]
        values[i][e.target.name] = e.target.value
        setFields(values)


        if (e.target.files[0]) {
            console.log("picture: ", e.target.files);
            values[i][e.target.name] = e.target.file
            setFields(values)
            setPicture(e.target.files[0]);
            const reader = new FileReader();
            reader.addEventListener("load", () => {
                setImgData(reader.result);
            });
            reader.readAsDataURL(e.target.files[0]);
        }
    }


    function onSubmit(data) {
        console.log("data", data);
        console.log(JSON.stringify(data));

    }

    const handleAdd = (id) => {
        setFields([...fields, { id: id + 2, imgname:'', firstName: '', lastName: '' }])
    }

    const handleSubtract = (i) => {
        const values = [...fields]
        values.splice(i, 1)
        setFields([...values])
    }

    const optionThumnails = {
        width: "100%",
        height: "100%",
        maxWidth: "90px",
        marginTop: "5px"
    };

    // const onChangePicture = (i, e) => {

    //     const values = [...fields]
    //     values[i][e.target.name] = e.target.files
    //     setFields(values)
    //     if (e.target.files[0]) {
    //         console.log("picture: ", e.target.files);
    //         setPicture(e.target.files[0]);
    //         const reader = new FileReader();
    //         reader.addEventListener("load", () => {
    //             setImgData(reader.result);
    //         });
    //         reader.readAsDataURL(e.target.files[0]);
    //     }
    // };


    return (
        <>
            <Container className="display-flex">

                <Row>
                    <Form onSubmit={handleSubmit(onSubmit)}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            {fields.map((field, i) => (
                                <div key={i}>
                                    <Row className="mt-5">
                                        <Col md>
                                            <Form.Label>First Name</Form.Label>
                                            <Form.Control
                                                type="text"
                                                placeholder="Enter First Name"
                                                name="firstName"
                                                value={field.firstName}
                                                onChange={e => handleChangeInput(i, e)}
                                            />
                                        </Col>
                                        <Col md>
                                            <label className="form-label">Upload Image </label>
                                            <input className="form-control" name="imgname" value={field.imgname} id="formFileLg" onChange={ e => handleChangeInput(i, e)} type="file" />
                                            <div className="previewProfilePic">
                                                <img style={optionThumnails} className="playerProfilePic_home_tile" src={imgData} />
                                            </div>

                                        </Col>
                                        <Col md>
                                            <Form.Label>Last Name</Form.Label>
                                            <Form.Control
                                                type="text"
                                                placeholder="Enter Last Name"
                                                name="lastName"
                                                value={field.lastName}
                                                onChange={e => handleChangeInput(i, e)}
                                            />
                                        </Col>
                                        <Col md>
                                            <Button onClick={() => handleAdd(i)} className="mt-4 mr-5">
                                             Add
                                            </Button>
                                            <Button disabled={field.id === 1} onClick={() => handleSubtract(i)} className="mt-4">
                                            Remove
                                            </Button>
                                        </Col>
                                    </Row>
                                </div>
                            ))}
                        </Form.Group>
                        <Button type="submit" variant="success" style={{ float: "left" }} >
                            Send
                        </Button>
                    </Form>
                    {JSON.stringify(fields)}
                   
                </Row>

            </Container>
        </>
    )
}

export default Parentdata