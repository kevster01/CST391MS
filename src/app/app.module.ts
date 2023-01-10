import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import { DefaultComponent } from './admin/default/default.component';
import { SidebarComponent } from './admin/shared/sidebar/sidebar.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { PostCreateComponent } from './admin/dashboard/posts/post-create/post-create.component';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import { PostsListComponent } from './admin/dashboard/posts/posts-list/posts-list.component';
import {MatExpansionModule} from '@angular/material/expansion';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
const Ux_Modules=[
  MatButtonModule, 
  MatSidenavModule, 
  MatIconModule,
  MatToolbarModule,
  MatInputModule,
  MatCardModule,
  MatExpansionModule,
]
@NgModule({
  declarations: [
    AppComponent,
    DefaultComponent,
    SidebarComponent,
    DashboardComponent,
    PostCreateComponent,
    PostsListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule, 
    Ux_Modules, 
    FormsModule, 
    HttpClientModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
