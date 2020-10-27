import React, { Component } from "react";
import { ListGroup } from "react-bootstrap";
class IssueLists extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listTickets: []
    };
  }
  componentDidMount() {
    fetch("https://desk.zoho.com/api/v1/tickets?")
      .then(response => response.json())
      .then(data => this.setState({ ListTickets: data }));
  }
  render() {
    return (
      <div>
        <ListGroup>
          {this.state.listTickets.map(ticket => (
            <ListGroup.Item>
              {ticket.ticketNumber}
              {ticket.subject} {ticket.contact.id} {ticket.status}
            </ListGroup.Item>
          ))}
        </ListGroup>
      </div>
    );
  }
}

export default IssueLists;
