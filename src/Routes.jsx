import { createBrowserRouter } from 'react-router-dom'
import Home from './components/Home/Home'
import Root from './components/Root'
import Row from './components/Row/Row'
import RowsDetails from './components/RowsDetails/RowsDetails'


export const router = createBrowserRouter([
    {
        path:'/',
        element:<Root></Root>,
        children:[
    
       {
        path:'/',
        element:<Home></Home>
        },
       {
        path:'/home',
        element:<Home></Home>
        },
        {
          path:'/movies',
          element:<Row></Row>
        },
        {
          path:'/movie/:id',
         loader:({params})=>fetch(`https://api.themoviedb.org/3/movie/${params.id}?api_key=38e61227f85671163c275f9bd95a8803&language=en-US`),
          element:<RowsDetails></RowsDetails>
        }

        ]
    }
])