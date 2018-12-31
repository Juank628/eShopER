import React, { Component } from 'react';
import propTypes from 'prop-types';

class Contact extends Component {
  render() {
    return (
      <div>
          <h3>{this.props.provider}</h3>
          <h4>Vendedor: {this.props.seller}</h4>
          <h4>Phone: {this.props.phone}</h4>
      </div>
    )
  }
}

Contact.defaultProps = {
    provider: "No provider",
    seller: "No seller",
    phone: "No phone"
}

Contact.propTypes = {
    provider: propTypes.string.required,
    seller: propTypes.string.required,
    phone: propTypes.string.required
}

export default Contact;