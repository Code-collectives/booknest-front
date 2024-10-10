
import './App.css'
import Navbar from './components/Navbar'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import ContactForm from './components/ReachUs'
import AboutUs from './pages/AboutUs/AboutUs'
import BookList from './pages/BookList/BookList'
import ListDetail from './pages/ListDetail'
import AddBook from './pages/Addbook/AddBook'
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
    },
    {path:"/listdetail",
      element:<ListDetail/>
    },
    {path:"/addbook",
      element:<AddBook/>
    }
  ])

  return (
<RouterProvider router={router}/>
  
  )
}

export default App
