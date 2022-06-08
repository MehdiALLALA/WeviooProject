import React, { useEffect, useState } from 'react'
import PostCard from './PostCard'
import { useSelector, useDispatch } from 'react-redux'
import { Dropdown } from 'primereact/dropdown';
import { MultiSelect } from 'primereact/multiselect';
import { ProgressSpinner } from 'primereact/progressspinner';
import { getTags } from '../actions/tagActions'
import { getPosts, getPostsByUser, getPostsByTags } from '../actions/postActions'
import { getUsers } from '../actions/userActions'

const Post = () => {

  const { posts, isLoading, users, usersLoading, tags, tagsLoading } = useSelector((state) => ({ posts: state.post.posts, isLoading: state.post.isLoading,
  users: state.user.users, usersLoading: state.user.usersLoading, tags: state.tag.tags, 
  tagsLoading: state.tag.tagsLoading }))
  const dispatch = useDispatch()

  const [selectedUser, setSelectedUser] = useState(null);

  const [selectedTags, setSelectedTags] = useState(null);

  useEffect(() => {
        if(posts.length === 0 && isLoading === false){
            dispatch(getPosts());
        }
        if(users.length === 0 && usersLoading === false){
            dispatch(getUsers())
        }
        if(tags.length === 0 && tagsLoading === false){
            dispatch(getTags())
        }
  })


  const onUserChange = (e) => {
    setSelectedUser(e.value)
    dispatch(getPostsByUser(e.value))
  }

  const onTagsChange = (e) => {
      setSelectedTags(e.value)
      dispatch(getPostsByTags(e.value))
  }

  const UsersList = (users) => {
        let result = [];
        users.map(user => {
            result.push({ label: user.title+" "+user.firstName+" "+user.lastName, value: user.id})
        })
        return result;
  }

  const TagsList = (tags) => {
      let result = [];
      tags.map(tag => {
          result.push({ label: tag, value: tag})
      })
      return result
  }



  const listofCards = (
    posts.map(
        post => {
            return(
            <div className='md:col6 lg:col-4' key={post.id}>
                <PostCard data={post} />
            </div>)
        }
    )
  );


  return (
    <>
    <h1 className='ml-6'>
        List Of Posts
    </h1>
    <div className='grid'>
    <div className='col-6 ml-6'>
    View posts by user : <Dropdown 
                            placeholder='Select A User' 
                            options={UsersList(users)} 
                            className='m-2' 
                            filter 
                            filterBy='label'
                            onChange={onUserChange}
                            value={selectedUser}/>
    
    </div>
    <div className='col-6 ml-6'>
    View posts by tags : <MultiSelect
                            placeholder='Select Tags' 
                            options={TagsList(tags)} 
                            onChange={onTagsChange}
                            value={selectedTags}
                            filter
                            filterBy='label'/>
    </div>
    </div>
    <div className="grid ml-1">
        {isLoading === true && posts.length === 0 ? <ProgressSpinner/> : listofCards}
    </div>
    </>
  )
}

export default Post;