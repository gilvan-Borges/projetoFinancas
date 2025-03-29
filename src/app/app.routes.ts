import { Routes } from '@angular/router';
import { NotFoundComponent } from './errors/not-found/not-found.component';

export const routes: Routes = [
    {
        //Configuração da rota que carrega o conteúdo do módulo 'admin'
        path: 'admin',        
        loadChildren: () => import('./modules/admin/admin.module').then(m => m.AdminModule)
    },
    {
        //Definindo a rota inicial do projeto
        path: '', 
        pathMatch: 'full',
        redirectTo: '/admin/consultar-contas'
    },
    {
        //Definindo uma rota para página não encontrada (404)
        path: '**',
        component: NotFoundComponent
    }
];
