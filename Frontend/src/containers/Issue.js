import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";
class Issue extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      dept: "",
      sub: "",
      desc: "",
      cat: "",
      email: "",
      phone: "",
      priority: "",
      file: "",
      fname: ""
    };
  }

  handleSubmit = event => {
    alert("A form was submitted: " + this.state);

    fetch("https://desk.zoho.com/api/v1/tickets", {
      method: "POST",
      // We convert the React state to JSON and send it as the POST body
      body: JSON.stringify(this.state)
    }).then(function(response) {
      console.log(response);
      return response.json();
    });

    event.preventDefault();
  };

  render() {
    console.log(this.state);
    return (
      <div style={{ marginLeft: "40px", borderStyle: "hidden" }}>
        <Form onSubmit={this.handleSubmit}>
          <h2>Submit A Ticket</h2>
          <h4>Ticket Information</h4>
          <Form.Group controlId="exampleForm.ControlSelect1">
            <Form.Label>Department</Form.Label>
            <Form.Control
              as="select"
              value={this.state.dept}
              name="dept"
              onChange={e => {
                this.setState({ dept: e.target.value });
              }}
            >
              <option>PWslab devops support</option>
              <option>iSupport</option>
            </Form.Control>
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlSelect1">
            <Form.Label>Category</Form.Label>
            <Form.Control
              as="select"
              value={this.state.cat}
              name="cat"
              onChange={e => {
                this.setState({ cat: e.target.value });
              }}
            >
              <option>-None-</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>Other</option>
            </Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label>Pws project url</Form.Label>
            <Form.Control
              value={this.state.name}
              name="name"
              onChange={e => {
                this.setState({ name: e.target.value });
              }}
              type="text"
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Subject</Form.Label>
            <Form.Control
              type="text"
              value={this.state.sub}
              name="sub"
              type="text"
              onChange={e => {
                this.setState({ sub: e.target.value });
              }}
            />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>Description</Form.Label>
            <Form.Control
              as="textarea"
              rows={6}
              name="desc"
              type="text"
              value={this.state.desc}
              onChange={e => {
                this.setState({ desc: e.target.value });
              }}
            />
          </Form.Group>
          <h4>Contact Details</h4>
          <Form.Group>
            <Form.Label>Contact Name</Form.Label>
            <Form.Control
              type="text"
              name="fname"
              value={this.state.fname}
              onChange={e => {
                this.setState({ fname: e.target.value });
              }}
            />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="name@example.com"
              name="email"
              value={this.state.email}
              onChange={e => {
                this.setState({ email: e.target.value });
              }}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Phone</Form.Label>
            <Form.Control
              type="text"
              name="phone"
              value={this.state.phone}
              onChange={e => {
                this.setState({ phone: e.target.value });
              }}
            />
          </Form.Group>
          <h4>Additional Information</h4>
          <Form.Group controlId="exampleForm.ControlSelect1">
            <Form.Label>Priority</Form.Label>
            <Form.Control
              as="select"
              name="priority"
              value={this.state.priority}
              onChange={e => {
                this.setState({ priority: e.target.value });
              }}
            >
              <option>-None-</option>
              <option>High</option>
              <option>Medium</option>
              <option>Low</option>
            </Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.File
              id="exampleFormControlFile1"
              label="Attach a file(upto 20MB)"
              name="file"
              value={this.state.File}
              onChange={e => {
                this.setState({ file: e.target.value });
              }}
            />
          </Form.Group>
          <input type="submit" class="btn btn-primary" value="Submit" />
        </Form>
      </div>
    );
  }
}

export default Issue;
