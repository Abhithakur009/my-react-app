import React from 'react'
import '../Components/MyComponents.css';

function FirstComponent() {
    return (
        <>

            <div className="container">
                <div className="row justify-content-md-center">
                    <div className="col-auto">
                        <label className="visually-hidden">Value Of First Component </label>
                        <input type="text" className="form-control-plaintext" placeholder="First Components" />
                    </div>
                    <div className="col-auto">
                        <label className="visually-hidden">Password</label>
                        <input type="text" className="form-control" id="inputPassword2" placeholder="Second Components" />
                    </div>
                    <div className="col-auto">
                        <button type="submit" className="btn btn-primary mb-3">Submit</button>
                    </div>
                </div>
            </div>

        </>
    )
}

export default FirstComponent