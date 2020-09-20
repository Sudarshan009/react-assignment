import React, { Component } from "react";
import ContactDetails from "../data/ContactDetails";

class ContactList extends Component {
  constructor() {
    super();
    this.state = {
      isReveal: true,
    };
  }

  render() {
    return (
      <div>
        {ContactDetails.map((ContactPerson, index) => {
          return (
            <div className="panel panel-default">
              <h2 className="ContTitle">{ContactPerson.title}</h2>

              {ContactPerson.isReveal ? (
                <div>
                  <span className="ContactPost">{ContactPerson.post}</span>
                  <br />
                  <span className="ContactNum">{ContactPerson.ContactNo}</span>
                </div>
              ) : (
                <span onClick={() => this.setState({ isReveal: false })}>
                  Reveal
                </span>
              )}
            </div>
          );
        })}
      </div>
    );
  }
}

export default ContactList;
