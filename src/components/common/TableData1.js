import React from 'react'
import { Form, Row, Col, Table, Button } from "react-bootstrap";
export default function TableData1(props) {
    console.log(`props`, props.data)
    return (
        <div> <Row style={{margin:"40px"}}>
        <Table  striped bordered hover>
        <thead>
        <tr>
        <th>postId </th>
            <th>name </th>
                <th>id </th>
                    <th>email </th>
                        <th>body </th>
        </tr>
        </thead>
        <tbody>
        {props?.data?.map(data=>(
            <tr>
            <td>{data.postId}</td>
                   <td>{data.name}</td>
                          <td>{data.id}</td>
                                 <td>{data.email}</td>
                                        <td>{data.body}</td>
            </tr>
        ))}
        </tbody>
      
     

        </Table>
          </Row>
        </div>
    )
}
