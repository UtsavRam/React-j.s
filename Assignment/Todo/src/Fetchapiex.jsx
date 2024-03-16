import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

function Fetchapiex() {
  const [Api, setApi] = useState([]);
  const [Newname, setNewname] = useState('');
  const [Newemail, setNewemail] = useState('');
  const [selectedItem, setSelectedItem] = useState(null);
  
  
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    Fetchapi();
  }, []);

  const Fetchapi = () => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((data) => setApi(data));
  };

  const AddName = () => {
    if (selectedItem) {
      // Update existing item
      // const updatedApi = Api.map((item) =>
      //   item.id === selectedItem.id ? { ...item, name: Newname, email: Newemail } : item
      // );
      // setApi(updatedApi);
      // setSelectedItem(null);
      alert("hello")
    } else {
      // Add new item
      setApi([
        ...Api,
        {
          id: Api.length + 1,
          name: Newname,
          email: Newemail,
        },
      ]);
    }
    setNewname('');
    setNewemail('');
  };

  const Deletetodo = (id) => {
    const updatedTodo = Api.filter((v) => v.id !== id);
    setApi(updatedTodo);
  };

  return (
    <>
      <div className='contenare border border-1 border-dark d-block m-auto my-3 text-center bg-dark text-light' style={{ height: '200px', width: '440px' }}>
        <div className='m-4'>
          <label htmlFor=''>Name :- </label>
          <input type='text' placeholder='Enter Your Name ' value={Newname} onChange={(e) => setNewname(e.target.value)} /> <br /><br />
          <label htmlFor=''>Email :- </label>
          <input type='email' placeholder='Enter Your Email' value={Newemail} onChange={(e) => setNewemail(e.target.value)} /> <br /><br />
          <button className='btn btn-primary' onClick={AddName}>
            Submit
          </button>
        </div>
      </div>
      <table className='table table-dark'>
        <thead>
          <tr className='text-center'>
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {Api &&
            Api.map((v, i) => (
              <tr key={i} className='text-center'>
                <td>{v.id}</td>
                <td>{v.name}</td>
                <td>{v.email}</td>
                <td className=''>
                  <button className='btn btn-primary ms-3' onClick={handleShow}>
                    Edit
                  </button>
                  <button className='btn btn-danger ms-3' onClick={() => Deletetodo(v.id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                value={Newname} onChange={(e) => setNewname(e.target.value)} 
                placeholder="Enter Your Name"
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control
               value={Newemail} onChange={(e) => setNewemail(e.target.value)} 
                type="email"
                placeholder="name@example.com"
                autoFocus
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </> 
  );
}

export default Fetchapiex;
