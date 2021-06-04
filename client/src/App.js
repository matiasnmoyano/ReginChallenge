import './App.css';
import Axios from 'axios'

import React, {useEffect, useState} from 'react';
import Post from './components/post'
function App() {
  let [posts, setPosts] = useState([]);
  
  function Info () {
    Axios.get('https://hn.algolia.com/api/v1/search_by_date?query=nodejs')
    .then(res =>{
      console.log(res)
         res.data.hits.map(post =>{
          posts.push(post)
        })
        console.log(posts,'soy post') 
    })
    
   }
   function Map(){
    posts.map(post =>{
       return <Post title={post.story_title} atuhor={post.author} date={post.ceated_at}></Post>
    })}
   function Render(){
     if(posts.length < 1){
       return <Map></Map>
     }else{
       return <div>Cargando</div>
     }
   }
  useEffect(() => {
    Info()
  });

  return (
    <div className='container'>
      <div className='header'>
        <h1 className='title'>HN Feed</h1>
        <h3 className='subtitle'>we hacker news!</h3>
      </div>
       
      </div>
    
  );
  }

export default App;
