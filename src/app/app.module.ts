import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import {RouterModule} from '@angular/router';
import {appRouteList} from './AppRoutingModule';
import {FormsModule} from '@angular/forms';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { AttributsComponent } from './components/attributs/attributs.component';
import { LogoComponent } from './components/attributs/logo/logo.component';
import { InfosComponent } from './components/attributs/infos/infos.component';
import { RoleEtTalentComponent } from './components/attributs/role-et-talent/role-et-talent.component';
import { AtoutsDefautsComponent } from './components/attributs/atouts-defauts/atouts-defauts.component';
import { MainComponent } from './components/main/main.component';
import { MainLeftComponent } from './components/main/main-left/main-left.component';
import { MainRightComponent } from './components/main/main-right/main-right.component';
import { SoulComponent } from './components/main/main-left/soul/soul.component';
import { HealthComponent } from './components/main/main-left/health/health.component';
import { RelationsComponent } from './components/main/main-left/relations/relations.component';
import { SaisonsComponent } from './components/main/main-right/saisons/saisons.component';
import { MagieEtMaterielComponent } from './components/main/main-right/magie-et-materiel/magie-et-materiel.component';
import { FooterComponent } from './components/footer/footer.component';
import { InputValueComponent } from './components/input-value/input-value.component';
import { InputListComponent } from './components/input-list/input-list.component';
import { InputCircleComponent } from './components/input-circle/input-circle.component';
import { SeasonDescribeComponent } from './components/footer/season-describe/season-describe.component';
import { ClickOutsideModule } from 'ng-click-outside';
import { SeasonChoiceComponent } from './components/season-choice/season-choice.component';
import { InputLongTextComponent } from './components/input-long-text/input-long-text.component';
import { InputListContentComponent } from './components/input-list-content/input-list-content.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    AttributsComponent,
    LogoComponent,
    InfosComponent,
    RoleEtTalentComponent,
    AtoutsDefautsComponent,
    MainComponent,
    MainLeftComponent,
    MainRightComponent,
    SoulComponent,
    HealthComponent,
    RelationsComponent,
    SaisonsComponent,
    MagieEtMaterielComponent,
    FooterComponent,
    InputValueComponent,
    InputListComponent,
    InputCircleComponent,
    SeasonDescribeComponent,
    SeasonChoiceComponent,
    InputLongTextComponent,
    InputListContentComponent,
  ],
  imports: [
    RouterModule.forRoot(appRouteList),
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ClickOutsideModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [
    RouterModule
  ]
})
export class AppModule { }
