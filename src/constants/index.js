import Login from "./../container/login/index";
import Shop from "./../container/shop/index";
export const API_ENDPOINT = 'http://localhost:3000';
export const STATUSES = [
    {
        value: 0,
        label: 'READY',
    },
    {
        value: 1,
        label: 'IN PROGRESS',
    },
    {
        value: 2,
        label: 'COMPLETED',
    },
];

export const STATUS_CODE = { SUCCESS: 200, CREATED: 201, UPDATED: 202 };

export const ADMIN_ROUTES = [
   {
       path:"/login",
       element:<Login/>
   },
   {
       path:"/shop",
       element:<Shop/>
   }
];