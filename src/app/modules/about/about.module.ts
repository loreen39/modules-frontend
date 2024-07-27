import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutRoutingModule } from './about-routing.module';
import { AboutComponent } from './about/about.component';
import { About2Component } from './about2/about2.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [AboutComponent, About2Component],
  imports: [
    CommonModule,
    AboutRoutingModule
  ],
  exports: [],
  providers: [],
})
export class AboutModule { }
