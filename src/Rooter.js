import Add from "./Add";
import CustomerDetail from "./CustomerDetail";
import CustomerList from "./CustomerList";
import Dashboard from "./Dashboard";
import Update from "./Update";

export const routerConfig = 
[
    {
         path:'/',
         element:<Dashboard/>
    },
    {
        path:'/CustomerList',
        element:<CustomerList/>
    },
    {
        path:'/customerDetail/:id',
        element:<CustomerDetail/>
    },
    {
        path:'/add',
        element:<Add/>
    },
    {
        path:'/update/:id',
        element:<Update/>
    }
]