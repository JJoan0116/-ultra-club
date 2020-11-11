import React, { useCallback, useState } from 'react'
import { View } from '@tarojs/components'
import { PostCard, PostForm } from '../../components'
import './index.scss'

const App = () => {
  const [posts, setPosts] = useState([{
    title: '泰罗奥特曼',
    content: '泰罗是奥特之父和奥特之母唯一的亲生儿子。',
  }]);
  const [formTitle, setTitle] = useState('');
  const [formContent, setContent] = useState('');

  const handleSubmit = useCallback((e) => {
    e.preventDefault()

    const newPosts = posts.concat({ title: formTitle, content: formContent })

    setPosts(newPosts);
    setTitle('');
    setContent('');
  }, [posts, formTitle, formContent]);

  const handleTitleInput = useCallback((e) => {
    setTitle(e.target.value);
  }, []);

  const handleContentInput = useCallback((e) => {
    setContent(e.target.value);
  }, []);

  return (
    <View className='index'>
        {posts.map((post, index) => (
          <PostCard key={index} title={post.title} content={post.content} />
        ))}
        <PostForm
          formTitle={formTitle}
          formContent={formContent}
          handleSubmit={handleSubmit}
          handleTitleInput={handleTitleInput}
          handleContentInput={handleContentInput}
        />
      </View>
  )
}

App.config = {
  navigationBarTitleText: '首页',
}

export default App;
