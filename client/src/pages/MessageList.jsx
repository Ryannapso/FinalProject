import React, { useEffect, useState } from 'react';
import{ Table } from "react-bootstrap";

function MessageList(props) {
  let [messageList, setMessageList] = useState([]);
  useEffect(() => {
   
    fetch("http://localhost:3008/messages")
      .then((response) => {
        response.json().then((json) => {
          setMessageList(json);
        });
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  if (messageList.length === 0) {
    return <h1>no data</h1>;
  } else {
    return (
      <div>
        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
            <th>#</th>
              <th>Title</th>
              <th>message</th>
              <th>Description</th>
             
            </tr>
          </thead>
          <tbody>
            {messageList.map((item) => {
              console.log("item", item);
              return (
                <tr>
                  <td>{item._id}</td>
                  <td>{item.title}</td>
                  <td>{item.message}</td>
                  <td>{item.Description}</td>
                 
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
    );
  }
}

export default MessageList;