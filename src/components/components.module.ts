import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonDefaultComponent } from './button-default/button-default.component';
import { BottomNavBarComponent } from './bottom-nav-bar/bottom-nav-bar.component';
import { HeaderComponent } from './header/header.component';



@NgModule({
  declarations: [
    ButtonDefaultComponent,
    BottomNavBarComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ComponentsModule { }
