import './App.css'
import { Route, Routes } from 'react-router-dom'
import { HomePage } from './Pages/HomePage'
import { CreatePage } from './Pages/CreatePage'
import { SavedPage } from './Pages/SavedPage'
import { ProfilePage } from './Pages/ProfilePage'
import { RecipePage } from './Pages/RecipePage'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/create' element={<CreatePage/>}/>
        <Route path='/saved' element={<SavedPage/>}/>
        <Route path='/profile' element={<ProfilePage/>}/>
        <Route path='/recipes/:recipeId' element={<RecipePage/>}/>
      </Routes>
    </>
  )
}

export default App
