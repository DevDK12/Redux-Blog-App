import {Route , Routes} from 'react-router-dom'

import Layout from './components/Layout/Layout'
import Main from './pages/Main'
import SinglePost from './pages/SinglePost'
import List from './components/List';
import Form from './components/Form';


const App = () => {
  return (

    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Main />} />
        <Route path='/add' element={<Form />} />
        <Route path='/posts' element={<List />} />
        <Route path='/posts/:postId' element={<SinglePost />} />
      </Route>
    </Routes>
  )
}
export default App