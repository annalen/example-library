import {NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import {BarModule} from "./bar/src/bar.module";
import {ViewModule} from "./view/src/view.module";




@NgModule({
  imports: [
    CommonModule,
      BarModule,
      ViewModule
  ],
  declarations: [],
    exports: [
        BarModule,
        ViewModule
    ]
})
export class FooModule { }
