import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlogComponent } from './components/blog/blog.component';
import { AppComponent } from './app.component';
import { PrincipalComponent } from './components/principal/principal.component';
import { NostrosComponent } from './components/nostros/nostros.component';
import { VerComponent } from './components/blog/ver/ver.component';

const routes: Routes = [
    { path: '', component: PrincipalComponent },
    { path: 'nosotros', component: NostrosComponent },
    { path: 'blog', component: BlogComponent },
    { path: 'blog/:id', component: VerComponent },
    { path: '**', pathMatch: 'full', redirectTo: '/' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { useHash: true })],
    exports: [RouterModule]
  })

export class AppRoutingModule { }
