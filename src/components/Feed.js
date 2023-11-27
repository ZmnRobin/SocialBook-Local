import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import PostModal from './PostModal';

export default function Feed() {
  // State for managing likes, comments, and data
  const [openComment, setOpenComment] = useState(null);
  const [data, setData] = useState(() => {
    // Load data from localStorage or use a default value
    const savedData = localStorage.getItem('postData');
    return savedData ? JSON.parse(savedData) : [];
  });
  const [commentInput, setCommentInput] = useState('');

  useEffect(() => {
    // Save data to localStorage whenever it changes
    localStorage.setItem('postData', JSON.stringify(data));
  }, [data]);

  useEffect(() => {
    // Automatically increase likes for all posts by 1 every 5 seconds
    const intervalId = setInterval(() => {
      handleContinuesLike();
    }, 5000); // Update likes every 5 seconds

    // Cleanup the interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  // Function to handle individual post likes
  const handleLike = (postId) => {
    setData((prevData) =>
      prevData.map((post) =>
        post.post_id === postId
          ? { ...post, likes: post.likes + 1 }
          : post
      )
    );
  };

  // Function to handle continuous likes for all posts
  const handleContinuesLike = () => {
    setData((prevData) =>
      prevData.map((post) => ({ ...post, likes: post.likes + 1 }))
    );
  };

  // Function to toggle comments for a post
  const handleCommentToggle = (postId) => {
    setOpenComment(openComment === postId ? null : postId);
  };

  // Function to add a comment to a post
  const handleAddComment = (postId) => {
    if (commentInput.trim() !== '') {
      setData((prevData) =>
        prevData.map((post) =>
          post.post_id === postId
            ? { ...post, comments: [...post.comments, commentInput] }
            : post
        )
      );
      setCommentInput('');
    }
  };

  // Function to create a new post
  const handleCreatePost = (newPost) => {
    // Generate a random post_id
    const randomId = Math.floor(Math.random() * 1000);
    const postData = {
      post_id: randomId,
      likes: 0,
      comments: [],
      ...newPost,
    };

    setData((prevData) => [postData, ...prevData]);
  };

  // JSX structure for rendering the Feed component
  return (
    <>
      {/* Component for creating new posts */}
      <PostModal onCreatePost={handleCreatePost} />

      {/* Display existing posts */}
      {data?.map((d) => (
        <Card style={{ width: '100%', marginTop: '15px' }} key={d.post_id}>
          <Card.Body>
            <Card.Title>{d.postedBy}</Card.Title>
            <Card.Text>{d.post}</Card.Text>
            <div className='row like-btn'>
              {/* Button to handle individual post likes */}
              <button
                className='col-md-6 btn btn-secondary rounded-0'
                onClick={() => handleLike(d.post_id)}
              >
                {d.likes} Like
              </button>
              {/* Button to toggle comments for a post */}
              <button
                className='col-md-6 btn btn-info rounded-0'
                onClick={() => handleCommentToggle(d.post_id)}
              >
                {d.comments.length} Comment
              </button>
            </div>
            {/* Display comments for a post if openComment matches the post_id */}
            {openComment === d.post_id && (
              <div className='mt-5'>
                {/* Display existing comments for a post */}
                {d.comments.map((c, i) => (
                  <div className='comment' key={i}>
                    <p style={{ overflowY: 'hidden' }}>{c}</p>
                  </div>
                ))}
                {/* Input field and button for adding comments */}
                <div>
                  <div class="input-group mb-3 mt-3">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Add a comment..."
                      aria-label="Recipient's username"
                      aria-describedby="button-addon2"
                      value={commentInput}
                      onChange={(e) => setCommentInput(e.target.value)}
                    />
                    <button
                      class="btn btn-outline-secondary"
                      type="button"
                      id="button-addon2"
                      onClick={() => handleAddComment(d.post_id)}
                    >
                      Add
                    </button>
                  </div>
                </div>
              </div>
            )}
          </Card.Body>
        </Card>
      ))}

      {/* Display message if no posts are found */}
      {data.length === 0 && (
        <h2 className='text-center mt-5'>No posts found.</h2>
      )}
    </>
  );
}
