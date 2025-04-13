import React, { useState, useEffect } from 'react';

const BlogList = () => {
  const [posts, setPosts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  // Fetch the metadata at runtime from the public folder
  useEffect(() => {
    const fetchMetadata = async () => {
      const response = await fetch('/postsMetadata.json');
      const metadata = await response.json();

      const postList = metadata.map((meta, index) => ({
        id: index + 1,
        title: meta.title,
        date: meta.date,
        firstLine: meta.firstLine
      }));

      setPosts(postList);
    };

    fetchMetadata();
  }, []);

  const filteredPosts = posts.filter((post) => {
    if (searchTerm === '') return true;
    const term = searchTerm.toLowerCase().trim();
    return  post.title.toLowerCase().includes(term) || post.firstLine.toLowerCase().includes(term);
  });

  const formatDate = (isoString) =>
    new Date(isoString).toLocaleDateString(undefined, {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });

  return (
    <section className="bg-dark text-darkest p-12 flex flex-col justify-center max-w-5xl mx-auto mt-5 rounded-2xl">
      <div className="relative w-full mb-10">
        <div className="absolute inset-y-0 left-0 flex items-center pl-4">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.3-4.3" />
          </svg>
        </div>
        <input
          type="text"
          className="w-full py-3 pl-12 pr-4 rounded-full bg-light text-darkest placeholder:text-darkest/60 focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-md transition-all"
          placeholder="Search Blog Posts"
          onChange={(e) => setSearchTerm(e.target.value)}
          value={searchTerm}
        />
      </div>

      <div className="space-y-4 w-full">
        {filteredPosts.map((post) => (
            <a 
            className='p-5'
            href={"#posts/"+post.title}
            key={post.id}
          >
          <div
            className="bg-light w-full rounded-2xl p-5 shadow-xl shimmer transition"
          >
              <h3 className="text-xl font-bold">{post.title}</h3>
              {post.date && (
                <p className="text-gray-500">{formatDate(post.date)}</p>
              )}
            <p className="text-darker">{post.firstLine}</p>
            
          </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default BlogList;
