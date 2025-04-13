import React, { useState, useEffect } from 'react';
const PostRender = (props) => {
  const postName = props.postName; 
  console.log(props);
  const [postContent, setPostContent] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPostContent = async () => {
      try {
        setLoading(true);
        // Assuming JSON file or similar structure where content is tied to post name (postId)
        const response = await fetch(`/rawposts/${postName}.html`); // Adjust path if needed
        if (!response.ok) {
          throw new Error('Failed to fetch post content');
        }
        const data = await response.text() // Assuming each post is a JSON with content
        setPostContent(data); // Assuming content is inside the 'content' key
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPostContent();
  }, [postName]);

  
  return (
    <section className="bg-dark text-darkest p-12 max-w-5xl mx-auto mt-5 rounded-2xl ">
    <div className='max-w-4xl mx-auto prose-lg prose-h1:font-bold prose-h2:font-bold'>
    
    <h1 className=''>{postName} </h1>
    <hr className='h-px my-8 border-0 bg-darkest'></hr>
      <div
        className="post-content mx-auto  "
        dangerouslySetInnerHTML={{ __html: postContent }} // dangerous !!! spooky
      />
      </div>
    </section>
  );
};

export default PostRender;
