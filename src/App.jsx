
import './App.css'
import Navbar from './components/Navbar'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import ContactForm from './components/ReachUs'
import AboutUs from './pages/AboutUs/AboutUs'
import BookList from './pages/BookList/BookList'
function App() {
  const router = createBrowserRouter([
    {path:"/",
      element:<LandingPage />
    },
    {path:"/contactus",
      element:<ContactForm />
    },
    {path:"/aboutus",
      element:<AboutUs />
    },
    {path:"/viewlist",
      element:<BookList />
    }
  ])

  return (
<RouterProvider router={router}/>
  
  )
}

export default App
