import {NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import {ViewComponent} from "./view.component";
import {BarModule} from "../../bar/src/bar.module";


@NgModule({
  imports: [
    CommonModule,
      BarModule
  ],
  declarations: [ViewComponent],
    exports: [ViewComponent]
})
export class ViewModule { }
