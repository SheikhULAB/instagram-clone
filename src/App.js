
import './App.css';
import Post from './Post';
import { useState, useEffect } from 'react';
import { db } from './firebase';

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection('posts').onSnapshot(snapshot => {
      setPosts(snapshot.docs.map(doc => ({
        id: doc.id,
        post: doc.data()
      })));
    })
  },[]);

  return (
    <div className="App">
      <div className="app__header">
        <img 
        className="app__headerImage"
        src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png" 
        alt="instagram logo"/>
      </div>

      {
         posts.map(({id, post}) => (
           <Post key={id} username={post.username} caption={post.caption} imageUrl={post.imageUrl}></Post>
         ))
      }
      
    </div>
  );
}

export default App;
