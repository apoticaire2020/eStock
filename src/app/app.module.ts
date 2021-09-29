import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule , FormBuilder,ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AddClientComponent } from './client/add-client/add-client.component';
import { ListeClientComponent } from './client/liste-client/liste-client.component';
import { AddCategorieComponent } from './categorie/add-categorie/add-categorie.component';
import { ListeCategorieComponent } from './categorie/liste-categorie/liste-categorie.component';
import { AddArticleComponent } from './article/add-article/add-article.component';
import { ListeArticleComponent } from './article/liste-article/liste-article.component';
import { AddFournComponent } from './fournisseur/add-fourn/add-fourn.component';
import { ListeFournComponent } from './fournisseur/liste-fourn/liste-fourn.component';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
    AddClientComponent,
    ListeClientComponent,
    AddCategorieComponent,
    ListeCategorieComponent,
    AddArticleComponent,
    ListeArticleComponent,
    AddFournComponent,
    ListeFournComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    FormBuilder,
    ReactiveFormsModule,
    ToastrModule.forRoot()
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
