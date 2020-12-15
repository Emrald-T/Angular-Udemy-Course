import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGaurd } from './auth-guard.service';
import { CanDeactiveGaurd } from './servers/edit-server/can-deactivate-guard.service';

import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { EditServerComponent } from './servers/edit-server/edit-server.component';
import { ServerComponent } from './servers/server/server.component';
import { ServersComponent } from './servers/servers.component';
import { UserComponent } from './users/user/user.component';
import { UsersComponent } from './users/users.component';
import { ServerResolveGaurd } from './servers/server/server-resolve-guard.service';

const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'users', component: UsersComponent, children: [
      { path: ':id/:name', component: UserComponent }
    ] },
    {
        path: 'servers',
        // canActivate: [AuthGaurd],
        canActivateChild: [AuthGaurd],
        component: ServersComponent,
        children: [
            { path: ':id', component: ServerComponent, resolve: {serverData: ServerResolveGaurd} },
            { path: ':id/edit', component: EditServerComponent, canDeactivate: [CanDeactiveGaurd] }
        ]
    },
    { path: 'not-found', component: PageNotFoundComponent, data: {message: 'Page not found!!'}},
    { path: '**', redirectTo: '/not-found'},
  ];

@NgModule({
    imports: [
        // RouterModule.forRoot(appRoutes, {useHash: true})
        RouterModule.forRoot(appRoutes)
    ],
    exports: [RouterModule]
})

export class AppRoutingModule {

}
