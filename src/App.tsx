import {Route, 
  createBrowserRouter, 
  createRoutesFromElements,
  RouterProvider} from 'react-router-dom'
import HomePage from './pages/HomePage';
import MainLayout from './layouts/MainLayout';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element = {<MainLayout/>}> {/*components that appears on every page without repeating*/}
        <Route index element = {<HomePage/>}/>
    </Route>

  
)
);

const App = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default App
