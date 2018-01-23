import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {MatToolbarModule} from '@angular/material';
import {MatGridListModule} from '@angular/material';
import {MatButtonModule} from '@angular/material';
import {MatListModule} from '@angular/material';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RestangularModule, Restangular } from 'ngx-restangular';
import { RestangularConfigFactory } from './shared/restConfig';

import 'hammerjs';
import { MenuComponent } from './menu/menu.component';
import { DishdetailComponent } from './dishdetail/dishdetail.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { MatCardModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material';
import { MatInputModule } from '@angular/material';
import { MatRadioModule } from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSlideToggleModule } from '@angular/material';
import { MatMenuModule } from '@angular/material';
import { MatSelectModule } from '@angular/material';
import { MatProgressSpinnerModule } from '@angular/material';
import { MatSliderModule } from '@angular/material';
import { MatFormFieldModule } from '@angular/material';
import { HttpModule } from '@angular/http';

//Services
import { DishService } from './services/dish.service';
import { PromotionService } from './services/promotion.service';
import { LeaderService } from './services/leader.service';
import { LoginComponent } from './login/login.component';
import { baseURL } from './shared/baseurl';
import { ProcessHttpmsgService } from './services/process-httpmsg.service';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    DishdetailComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    HomeComponent,
    ContactComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    FlexLayoutModule,
    MatGridListModule,
    MatButtonModule,
    AppRoutingModule,
    MatCardModule,
    FormsModule,
    MatInputModule,
    MatDialogModule,
    MatRadioModule,
    ReactiveFormsModule,
    MatSlideToggleModule,
    MatMenuModule,
    MatSelectModule,
    MatProgressSpinnerModule,
    MatSliderModule,
    MatFormFieldModule,
    HttpModule,
    RestangularModule.forRoot(RestangularConfigFactory)    
  ],
  providers: [
    DishService,
    PromotionService,
    LeaderService,
    {provide: 'BaseURL', useValue: baseURL},
    ProcessHttpmsgService
  ],
  entryComponents: [
    LoginComponent
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
