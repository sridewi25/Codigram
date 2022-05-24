import React from 'react'
import { Routes,Route } from 'react-router-dom'
import NavbarAfterLogin from '../../components/NavbarAfterLogin'
import ProfilePage from '../Profile/ProfilePage'
import PageHomeAfterLogin from './PageHomeAfterLogin/PageHomeAfterLogin'
import UserPostings from '../Postings/UserPostings'
import AddPostings from '../Postings/AddPostings'
import EditPage from '../Postings/EditPage'
import DetailPosting from './PageHomeAfterLogin/DetailPosting'



function HomeAfterLogin() {
  return (
      <>
    <NavbarAfterLogin></NavbarAfterLogin>
    
    <Routes>
        <Route path="home_user">
          <Route path="" element={<PageHomeAfterLogin></PageHomeAfterLogin>}></Route>
          <Route path="info">
            <Route path=":id" element={<DetailPosting></DetailPosting>}></Route>
          </Route>
        </Route>
        <Route path ="/profile" element={<ProfilePage></ProfilePage>}></Route>
        <Route path ="postings">
          <Route path ="" element={<UserPostings></UserPostings>}></Route>
          <Route path="add" element={<AddPostings></AddPostings>}></Route>
          <Route path="edit">
            <Route path=":id" element={<EditPage></EditPage>}></Route>
          </Route>
          <Route path="delete">
            <Route path=":id"></Route>
          </Route>
        </Route>
    </Routes>
    </>
  )
}

export default HomeAfterLogin