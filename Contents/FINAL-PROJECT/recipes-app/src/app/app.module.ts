import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

// COMPONENTS
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ShoppingEditComponent } from './components/shopping-edit/shopping-edit.component';
import { ShoppingListItemComponent } from './components/shopping-list-item/shopping-list-item.component';
import { RecipeListComponent } from './components/recipe-list/recipe-list.component';
import { RecipeListItemComponent } from './components/recipe-list-item/recipe-list-item.component';
import { RecipeDetailComponent } from './components/recipe-detail/recipe-detail.component';
import { RecipeDetailDefaultComponent } from './components/recipe-detail-default/recipe-detail-default.component';
import { RecipeEditComponent } from './components/recipe-edit/recipe-edit.component';
import { MessageToastComponent } from './components/message-toast/message-toast.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
// PAGES
import { ShoppingListComponent } from './pages/shopping-list/shopping-list.component';
import { RecipeBookComponent } from './pages/recipe-book/recipe-book.component';
// DIRECTIVES
import { DropDownToggleDirective } from './directives/drop-down-toggle/drop-down-toggle.directive';
import { NavMenuToggleDirective } from './directives/nav-menu-toggle/nav-menu-toggle.directive';
// SERVICES
import { ShoppingListService } from './services/shopping-list.service';
import { RecipeService } from './services/recipes.service';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ShoppingListComponent,
    RecipeBookComponent,
    RecipeListComponent,
    RecipeListItemComponent,
    RecipeDetailComponent,
    ShoppingEditComponent,
    ShoppingListItemComponent,
    DropDownToggleDirective,
    NavMenuToggleDirective,
    MessageToastComponent,
    NotFoundComponent,
    RecipeDetailDefaultComponent,
    RecipeEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [ShoppingListService, RecipeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
