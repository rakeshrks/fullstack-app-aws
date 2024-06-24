import { useEffect, useState } from "react";

import Form from "react-bootstrap/Form";

function Lists() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.json())
      .then((data) => setData(data));
      debugger
  }, []);
  console.log(data);
  return (
    <>
      <table>
        <tr>
          <th>Id</th>
          <th>title</th>
          <th>price</th>
          <th></th>
          <th>Switch</th>
        </tr>
        {data.map((item) => (
          <tr>
            <td>{item.id}</td>
            <td>{item.title}</td>
            <td>{item.userId}</td>
            <td>{""}</td>
            <td>
              <Form.Check 
                type="switch"
                checked={item.completed}
                id="custom-switch"
              />
            </td>
          </tr>
        ))}
      </table>
    </>
  );
}

export default Lists;
