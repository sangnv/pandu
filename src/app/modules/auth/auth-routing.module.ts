import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
    {
        path: 'login',
        children: [
            {
                path: '',
                loadChildren: './pages/login/login.module#LoginPageModule'
            }
        ]
    },
    {
        path: 'forgot-password',
        children: [
            {
                path: '',
                loadChildren: './pages/forgot-password/forgot-password.module#ForgotPasswordPageModule'
            }
        ]
    },
    {
        path: 'logout',
        children: [
            {
                path: '',
                loadChildren: './pages/logout/logout.module#LogoutPageModule'
            }
        ]
    },
    {
        path: 'register',
        children: [
            {
                path: '',
                loadChildren: './pages/register/register.module#RegisterPageModule'
            }
        ]
    },
    {
        path: 'welcome',
        children: [
            {
                path: '',
                loadChildren: './pages/welcome/welcome.module#WelcomePageModule'
            }
        ]
    },
    {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes),
    ],
    exports: [RouterModule]
})
export class AuthRoutingModule { }
