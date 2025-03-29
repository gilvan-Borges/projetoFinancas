import { NgModule } from "@angular/core";
import { NavbarComponent } from "./components/shared/navbar/navbar.component";
import { CadastrarContasComponent } from "./components/pages/cadastrar-contas/cadastrar-contas.component";
import { ConsultarContasComponent } from "./components/pages/consultar-contas/consultar-contas.component";
import { EditarContasComponent } from "./components/pages/editar-contas/editar-contas.component";
import { CommonModule } from "@angular/common";
import { RouterLink } from "@angular/router";
import { AdminRoutingModule } from "./admin-routing.module";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatButtonModule } from "@angular/material/button";

@NgModule({    
    declarations: [
        NavbarComponent,
        CadastrarContasComponent,
        ConsultarContasComponent,
        EditarContasComponent
    ],
    imports: [
        CommonModule,
        RouterLink,
        AdminRoutingModule,
        MatToolbarModule,
        MatButtonModule
    ]
})
export class AdminModule { }