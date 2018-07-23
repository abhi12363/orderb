import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from '../menu/menu.component';
import { RouterModule } from '@angular/router';
import { GridComponent } from '../shared/grid/grid.component';
import { ModalComponent } from '../shared/modal/modal.component';
import { GfilterComponent } from '../shared/gfilter/gfilter.component';
import { SettingsComponent } from '../settings/settings.component';
import { OrgProfileComponent } from '../settings/modal/org-profile/org-profile.component';
import { ManageUsrPrivillegesComponent } from '../settings/modal/manage-usr-privilleges/manage-usr-privilleges.component';
import { AdminUsersComponent } from '../settings/modal/admin-users/admin-users.component';
import { SitesComponent } from '../settings/modal/sites/sites.component';
import { FormatSettingsComponent } from '../settings/modal/format-settings/format-settings.component';
import { OrgSettingsComponent } from '../settings/modal/org-settings/org-settings.component';
import { TogglerComponent } from '../shared/toggler/toggler.component';
import { FormsModule } from '@angular/forms';
import {NgxTreeSelectModule, TreeSelectDefaultOptions} from 'ngx-tree-select';
import { CardComponent } from '../shared/card/card.component';
import { CategoriesComponent } from '../categories/categories.component';
import { PrepComponent } from '../prep/prep.component';
import { IngredientComponent } from '../ingredient/ingredient.component';
import { IngCategoryComponent } from '../ing-category/ing-category.component';
import { PrepModalComponent } from '../prep/modal/prep-modal/prep-modal.component';
import { MenuModalComponent } from '../menu/modal/menu-modal/menu-modal.component';
import { ModalOverlayComponent } from '../shared/modal-overlay/modal-overlay.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgxTreeSelectModule.forRoot({
      allowFilter: true,
      filterPlaceholder: 'Type your filter here...',
      maxVisibleItemCount: 5,
      allowParentSelection: true,
      childrenField: 'children',
      filterCaseSensitive: false,
      expandMode: 'Selection'
    }),
    RouterModule.forChild([
      
      
    ])
  ],
  declarations: [
    MenuComponent,
    GridComponent,
    ModalComponent,
    GfilterComponent,
    SettingsComponent,
    OrgProfileComponent,
    OrgSettingsComponent,
    FormatSettingsComponent,
    SitesComponent,
    AdminUsersComponent,
    ManageUsrPrivillegesComponent,
    TogglerComponent,
    CardComponent,
    CategoriesComponent,
    IngCategoryComponent,
    IngredientComponent,
    PrepComponent,
    PrepModalComponent,
    MenuModalComponent,
    ModalOverlayComponent
  ],
  exports:[
    MenuComponent,
    CommonModule,
    OrgProfileComponent
  ]
})
export class DashboradModule { }
