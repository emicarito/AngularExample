import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  // {
  //   path: 'market',
  //   component: HeaderComponent
  // },
  // {
  //   path: 'tools',
  //   component: FooterComponent
  // }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [LayoutComponent, HeaderComponent, FooterComponent,HomeComponent],
  exports: [LayoutComponent]
})
export class UiModule { }
