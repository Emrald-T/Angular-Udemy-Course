import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecipeDetailDefaultComponent } from './components/recipe-detail-default/recipe-detail-default.component';
import { RecipeDetailComponent } from './components/recipe-detail/recipe-detail.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { RecipeBookComponent } from './pages/recipe-book/recipe-book.component';
import { ShoppingListComponent } from './pages/shopping-list/shopping-list.component';
import { RecipeEditComponent } from './components/recipe-edit/recipe-edit.component';

const appRoutes: Routes = [
    {path: '', redirectTo: '/recipes', pathMatch: 'full' },
    {
        path: 'recipes',
        component: RecipeBookComponent,
        children: [
            {path: '', component: RecipeDetailDefaultComponent},
            {path: 'new', component: RecipeEditComponent},
            {path: ':id', component: RecipeDetailComponent},
            {path: ':id/edit', component: RecipeEditComponent},
        ]
    },
    {path: 'shopping-list', component: ShoppingListComponent},
    {path: 'not-found', component: NotFoundComponent},
    {path: '**',  redirectTo: '/not-found'}
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})

export class AppRoutingModule {

}
