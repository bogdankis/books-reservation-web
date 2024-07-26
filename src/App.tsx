import {Route, 
  createBrowserRouter, 
  createRoutesFromElements,
  RouterProvider} from 'react-router-dom'
import HomePageGuest from './pages/HomePageGuest';
import HomePageUser from './pages/HomePageUser';
import MainLayout from './layouts/MainLayout';
import LoginPage from './pages/LoginPage';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element = {<MainLayout/>}> {/*components that appears on every page without repeating*/}
        <Route index element = {<HomePageGuest/>}/>
        <Route path='/login' element = {<LoginPage/>}/>
        <Route path="/home" element = {<HomePageUser/>}/>
    </Route>

  
)
);

const App = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default App
