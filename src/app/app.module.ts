import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppService } from './app.service';
import { RouterModule } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BasicGuard } from './interceptors/basic.guard';
import { DashboradModule } from './dashboard/dashborad.module';
import { MenuComponent } from './menu/menu.component';
import { SettingsComponent } from './settings/settings.component';
import { OrgProfileComponent } from './settings/modal/org-profile/org-profile.component';
import { OrgSettingsComponent } from './settings/modal/org-settings/org-settings.component';
import { SitesComponent } from './settings/modal/sites/sites.component';
import { AdminUsersComponent } from './settings/modal/admin-users/admin-users.component';
import { FormatSettingsComponent } from './settings/modal/format-settings/format-settings.component';
import { ManageUsrPrivillegesComponent } from './settings/modal/manage-usr-privilleges/manage-usr-privilleges.component';
import { CategoriesComponent } from './categories/categories.component';
import { IngCategoryComponent } from './ing-category/ing-category.component';
import { IngredientComponent } from './ingredient/ingredient.component';
import { PrepComponent } from './prep/prep.component';
import { PrepModalComponent } from './prep/modal/prep-modal/prep-modal.component';
import { MenuModalComponent } from './menu/modal/menu-modal/menu-modal.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { RequestFilterService } from './interceptors/request-filter.service';
import { ModalOverlayComponent } from './shared/modal-overlay/modal-overlay.component';
import 'rxjs/Rx';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,

    RouterModule.forRoot([
      {
        path: "welcome",
        component: AppComponent
      },
      {
        path: "setup",
        component: ModalOverlayComponent
      },
      {
        path: "dashboard",
        component: DashboardComponent,
        canActivate: [BasicGuard],
        children: [
          {
            path: 'setup',
            component: ModalOverlayComponent,
            outlet: 'aux'
          }
          ,
          {
            path: 'ingcat',
            component: IngCategoryComponent,
            outlet: 'aux'
          },
          {
            path: 'ing',
            component: IngredientComponent,
            outlet: 'aux'
          },
          {
            path: 'prep',
            component: PrepComponent,
            outlet: 'aux',
            children: [
              {
                path: '',
                component: PrepModalComponent,
                outlet: 'modal'
              },
              {
                path: 'addprep',
                component: PrepModalComponent,
                outlet: 'modal'
              }
            ]
          },
          {
            path: 'categories',
            component: CategoriesComponent,
            outlet: 'aux'
          },
          {
            path: 'menu',
            component: MenuComponent,
            outlet: 'aux',
            children: [
              {
                path: '',
                component: MenuModalComponent,
                outlet: 'modal'
              },
              {
                path: 'addmenu',
                component: MenuModalComponent,
                outlet: 'modal'
              }
            ]
          }
          ,
          {
            path: 'settings',
            component: SettingsComponent,
            outlet: 'aux',
            children: [
              {
                path: '',
                component: OrgProfileComponent,
                outlet: 'modal'
              },
              {
                path: 'orgprofile',
                component: OrgProfileComponent,
                outlet: 'modal'
              },
              {
                path: 'orgsetting',
                component: OrgSettingsComponent,
                outlet: 'modal'
              },
              {
                path: 'format',
                component: FormatSettingsComponent,
                outlet: 'modal'
              },
              {
                path: 'site',
                component: SitesComponent,
                outlet: 'modal'
              },
              {
                path: 'admins',
                component: AdminUsersComponent,
                outlet: 'modal'
              },
              {
                path: 'privilleges',
                component: ManageUsrPrivillegesComponent,
                outlet: 'modal'
              }
            ]
          }
        ]
      },

      {
        path: "*",
        redirectTo: "/",
        pathMatch: 'full'
      },
      {
        path: '',
        redirectTo: "/",
        pathMatch: 'full'
      }
    ]),//,{useHash:true})

    DashboradModule
  ],
  providers: [
    AppService,
    BasicGuard,
    { provide: HTTP_INTERCEPTORS, useClass: RequestFilterService, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

}
