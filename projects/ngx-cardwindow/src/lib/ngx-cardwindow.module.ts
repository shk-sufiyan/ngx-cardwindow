import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxCardwindowComponent } from './ngx-cardwindow.component';
import { CardComponent } from './ngx-windowCard/card.component';



@NgModule({
  declarations: [NgxCardwindowComponent, CardComponent],
  imports: [
  	CommonModule
  ],
  exports: [NgxCardwindowComponent, CardComponent]
})
export class NgxCardwindowModule { }
