import BlogDetails from '@/components/utils/blogCardDetails';
import React from 'react';

const dynamicBlog = async({params}) => {
  const {id} = await params;
  const res = await fetch(`http://localhost:5000/api//admin/blogs/${id}`)
  const data = await res.json();
  console.log(data); 
  return (
    <div>
       
     <BlogDetails key={data._id} blog={data.data} />
 
    </div>
  );
};

export default dynamicBlog;