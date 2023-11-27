import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

// PostModal component for creating new posts
function PostModal({ onCreatePost }) {
  // State for controlling the modal visibility and form data
  const [show, setShow] = useState(false);
  const [formData, setFormData] = useState({ name: '', post: '' });

  // Function to close the modal
  const handleClose = () => setShow(false);

  // Function to show the modal
  const handleShow = () => setShow(true);

  // Function to handle form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  // Function to handle form submission and create a new post
  const handleSubmit = () => {
    onCreatePost({
      postedBy: formData.name,
      post: formData.post,
    });
    handleClose(); // Close the modal after submission
    setFormData({ name: '', post: '' }); // Clear the form data
  };

  // JSX structure for the modal
  return (
    <>
      {/* Button to open the modal */}
      <Button variant="primary" onClick={handleShow} className='modal-button'>
        What's on your mind today? Share with us ...
      </Button>

      {/* Modal component */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Share Your Thoughts</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* Form for entering post details */}
          <Form>
            {/* Input for the user's name */}
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Your Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="type your name..."
                name='name'
                autoFocus
                value={formData.name}
                onChange={handleChange}
              />
            </Form.Group>
            {/* Textarea for entering post content */}
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
              <Form.Label>Your Thoughts</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                type="text"
                placeholder='write your thoughts here...'
                name='post'
                value={formData.post}
                onChange={handleChange}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        {/* Footer with buttons for discarding and creating posts */}
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Discard
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Create Post
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default PostModal;
