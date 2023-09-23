import { createBrowserRouter } from 'react-router-dom'

import Home from './components/Home/Home'
import Root from './components/Root'
import Row from './components/Row/Row'
import RowsDetals from './components/RowsDetails/RowsDetals'





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
          element:<RowsDetals></RowsDetals>
        }

        ]
    }
])