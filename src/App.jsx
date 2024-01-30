import {Route , Routes} from 'react-router-dom'

import Layout from './components/Layout/Layout'
import Main from './pages/Main'
import SinglePost from './pages/SinglePost'
import List from './components/List';
import Form from './components/Form';
import EditPost from './pages/EditPost';
import Users from './pages/Users';
import UserPage from './pages/UserPage';
import Notifications from './pages/Notifications';


const App = () => {
  return (

    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Main />} />
        <Route path='/add' element={<Form />} />
        <Route path='/posts' element={<List />} />
        <Route path='/posts/:postId' element={<SinglePost />} />
        <Route path='/edit/:postId' element={<EditPost />} />
        <Route path='/users' element={<Users />} />
        <Route path='/users/:userId' element={<UserPage />} />
        <Route path='/notifications' element={<Notifications />} />
      </Route>
    </Routes>
  )
}
export default App