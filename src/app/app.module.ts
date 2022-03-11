import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { RouterModule, Routes } from '@angular/router';
import { SmartComponent } from './smart/smart.component';
import { SmartsViewComponent } from './smarts-view/smarts-view.component';
import { SmartService } from './services/smart.service';
import { AuthService } from './services/auth.service';
import { NotFoundComponent } from './not-found/not-found.component';
import { AuthGuard } from './services/auth.guard.service';


const appRoutes:Routes=[
{path:'Smarts',canActivate:[AuthGuard],component:SmartsViewComponent},
{path:'Auth',component:AuthComponent},
{path:'Smart',component:SmartComponent},
{path:'not-found',component:NotFoundComponent},
{path:'**',redirectTo:'/not-found'}


];

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    SmartComponent,
    SmartsViewComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [SmartService,AuthService,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
