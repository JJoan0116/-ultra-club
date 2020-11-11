import React, { useCallback } from 'react';
import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'

import './index.scss'

const PostCard = ({isList, title, content}) => {

  const handleClick = useCallback(() => {
    // 如果是列表，那么就响应点击事件，跳转到帖子详情
    if (isList) {
      Taro.navigateTo({
        url: `/pages/post/post?title=${title}&content=${content}`,
      })
    }
  }, [isList, title, content]);

  return (
    <View className='postcard' onClick={handleClick}>
      <View className='post-title'>{title}</View>
      <View className='post-content'>{content}</View>
    </View>
  )
}

export default PostCard;
