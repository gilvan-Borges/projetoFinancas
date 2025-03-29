import { RouterModule, Routes } from "@angular/router";
import { CadastrarContasComponent } from "./components/pages/cadastrar-contas/cadastrar-contas.component";
import { ConsultarContasComponent } from "./components/pages/consultar-contas/consultar-contas.component";
import { EditarContasComponent } from "./components/pages/editar-contas/editar-contas.component";
import { NgModule } from "@angular/core";

const routes: Routes = [
    { path: 'cadastrar-contas', component: CadastrarContasComponent },
    { path: 'consultar-contas', component: ConsultarContasComponent },
    { path: 'editar-contas/:id', component: EditarContasComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AdminRoutingModule { }