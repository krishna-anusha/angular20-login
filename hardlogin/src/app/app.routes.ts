import { Routes } from '@angular/router';
import { Login } from './components/login/login';
import { Admin } from './components/admin/admin';
import { Layout } from './components/layout/layout';

export const routes: Routes = [
    
    {
        path:'',
        redirectTo:'login',
        pathMatch:'full'
    },
    {
        path:"login",
        component:Login
    },
    {
        path:'',
        component:Layout,
        children:[
            {
        path:"admin",
        component:Admin
    }
        ]
    }
    ,
    
];
