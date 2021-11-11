import React from "react";
import { Form, Row, Col, Table, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";

function Form1(props) {
  const { register, handleSubmit } = useForm();
  const submitData = (data) => {
    props.createPost(data);
  };
  return (
    <div>
      <form onSubmit={handleSubmit(submitData)}>
        <Row>
          <Col>
            <input
              type="text"
              placeholder="title"
              {...register("title", { required: true })}
              required
            />
          </Col>
          <Col>
            <textarea
              placeholder="description"
              {...register("description", { required: true })}
              required
            />
          </Col>
          <Col>
            <button type="submit">Submit</button>
          </Col>
        </Row>
      </form>
    </div>
  );
}
export default Form1;
