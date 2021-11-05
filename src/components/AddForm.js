import React, { useState } from 'react';
import { connect } from 'react-redux';

import { setErr, addSmurf } from '../actions';

const initialFormState = {
    name:"",
    position:"",
    nickname:"",
    description:""
}

const AddForm = (props) => {
    const [state, setState] = useState(initialFormState);

    const handleChange = e => {
        setState({
            ...state,
            [e.target.name]:e.target.value
        });
    }

    const handleSubmit = e => {
        e.preventDefault();
        if (state.name === "" || state.position === "" || state.nickname === "") {
            props.setErr("name, position, nickname required bro");
        }
        else {
            props.addSmurf(state);
            setState(initialFormState);
        }
    }

    return(<section>
        <h2>Add Smurf</h2>
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="name">Name:</label><br/>
                <input onChange={handleChange} value={state.name} name="name" id="name" />
            </div>
            <div className="form-group">
                <label htmlFor="position">Position:</label><br/>
                <input onChange={handleChange} value={state.position} name="position" id="position" />
            </div>
            <div className="form-group">
                <label htmlFor="nickname">Nickname:</label><br/>
                <input onChange={handleChange} value={state.nickname} name="nickname" id="nickname" />
            </div>
            <div className="form-group">
                <label htmlFor="description">Description:</label><br/>
                <textarea onChange={handleChange} value={state.description} name="description" id="description" />
            </div>
            {
                props.error && <div data-testid="errorAlert" className="alert alert-danger" role="alert">Error: {props.error}</div>
            }
            <button>Submit Smurf</button>
        </form>
    </section>);
}

const mapStateToProps = state => {
    return {
        error: state.error
    }
}

export default connect(mapStateToProps, { setErr, addSmurf })(AddForm);