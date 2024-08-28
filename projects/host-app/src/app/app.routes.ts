import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { loadRemoteModule } from '@angular-architects/module-federation';

const MFE_APP_URL = "http://localhost:4300/remoteEntry.js";
export const routes: Routes = [
    {
        path:'',
        redirectTo:'/home',
        pathMatch: 'full'
    },
    {
        path:'home',
        component: HomeComponent
    },
    {
        path:'todo-list',
        loadChildren: () =>{
            return loadRemoteModule({
                remoteEntry: MFE_APP_URL,
                remoteName: "mfeApp",
                exposedModule: "./TodoListModule"
            }).then(m => m.TodoListModule).catch((err)=> console.log(err))
        }
    },

];
