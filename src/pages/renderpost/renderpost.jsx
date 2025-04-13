import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import Navbar from '../../components/navbar';
import PostRender from './components/postrender';
const RenderPost = () => {
  const post = useParams().postName;
  return (
    <div>
    <Navbar/>
    <PostRender  postName={post}/>
    </div>
  );
};

export default RenderPost;
