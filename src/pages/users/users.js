import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
//Import the actions of Post and Get the Posts
import {
  getTestAction,
  postDataAction,
} from "../../redux/actions/user.actions";
import { Form, Row, Col, Table, Button } from "react-bootstrap";
import Form1 from "../../components/common/newForm";

class Users extends Component {
  constructor() {
    super();
    this.state = {
      //Define the required states for post and get posts data
    };
  }

  createPost = (data) => {
    console.log(`data-------`, data);
    //Call the action "postUsersData" to post the created Post
    this.props.postDataAction(data);
  };

  render() {
    // console.log(`this,state.data`, this.state.list);
    const { title, description } = this.props.list;
    return (
      <>
        {/* 
      //Modify the validations 
      //Use of react-hook-form is allowed for more flexibility in forms 
      */}
        <Row style={{ marginLeft: "100px" }}>
          <Form1 createPost={this.createPost} />

          {/* <Form onSubmit={this.createPost}>
            <Col>
              <Form.Control type="text" placeholder="User Id" required/>
            </Col><br />
            <Col>
              <Form.Control type="text" placeholder="Post Id" required/>
            </Col><br/>
            <Col>
              <Form.Control type="text" placeholder="Tile" required/>
            </Col><br/>
            <Col>
              <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1" required>
                <Form.Control as="textarea" placeholder="Create Post" rows={3} />
              </Form.Group>
            </Col><br/>
            <Col>
              <Button type="submit"> Create Post </Button>
            </Col>
          </Form> */}
        </Row>
        <hr />
        <br />

        {/* 
        
          Make the posts table dynamic according to the posts got from the API

        */}

        <Row style={{ margin: "20px" }}>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>User </th>
                <th>discription</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{title}</td>
                <td>{description}</td>
              </tr>
            </tbody>
          </Table>
        </Row>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(`state`, state.usersReducer.postData);
  return {
    list: state.usersReducer.postData,
    //Call the Posts data from the redux store
    //eg: testData:state.testReducer.testData
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    //Call the Action her

    //eg: getTestAction: (data) => dispatch(getTestAction(data))
    postDataAction: (data) => dispatch(postDataAction(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Users);
