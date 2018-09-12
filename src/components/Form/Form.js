import React, { Component } from 'react';
import { FormControl, FormGroup, Button, ControlLabel, Form, Grid, Row, Col , ButtonToolbar} from 'react-bootstrap';
import './Form.css';

class FormComponent extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      value: props.value,
      touched: false,
      disabled: !(this.props.value.length > 0),
    };
  }
  
  getValidationState() {
    let value = this.state.value;

    if(!this.state.touched) {
      return null;
    }

    return (value.length > 0) ? 'success' : 'error';
  }

  handleChange(e) {
    let curentValue = e.target.value;

    this.setState({
      value: curentValue,
      touched: true,
      disabled: !(curentValue.length > 0),
    });

    this.props.handleValueChange(curentValue);
  }

  render() {
    return (
      <Grid fluid={true}>
        <Row className="show-grid">
          <Col lg={12}>
            <Form onSubmit={this.props.nextStep}>
              <FormGroup
                controlId="formBasicText"
                validationState={this.getValidationState()}
              >
                <ControlLabel>Please Enter your {this.props.name}</ControlLabel>
                <FormControl
                  className="form-input"
                  type={this.props.type}
                  value={this.state.value}
                  placeholder={'Enter ' + this.props.name}
                  onChange={this.handleChange}
                  autoFocus
                />
                <ButtonToolbar>
                  <Button type="submit" bsStyle="primary" disabled={this.state.disabled} block>Next</Button>
                </ButtonToolbar>
              </FormGroup>
            </Form>    
          </Col>
        </Row>
      </Grid>
    
    );
  }
}
export default FormComponent;
