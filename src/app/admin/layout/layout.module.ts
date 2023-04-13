import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { FooterComponent } from './components/footer/footer.component';



@NgModule({
  declarations: [
    LayoutComponent,
    HeaderComponent,
    SidebarComponent,
    FooterComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    LayoutComponent
  ]
})
export class LayoutModule { }
