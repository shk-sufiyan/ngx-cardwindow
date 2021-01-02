# NgxCardwindow

This library was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.2.14.

## Description

This is an angular library for card better card UI like window with cool animations and features

## Installation

`npm i ngx-cardwindow --save`

Import then library in app.module.ts or your lazy modules

```
import { NgxCardwindowModule } from 'ngx-cardwindow';



@NgModule({
  imports: [
  	NgxCardwindowModule
  ]
})


```

Bind the component in 
```

<ngx-cardwindow [title]="'My Title'">
</ngx-cardwindow>
```