import { NgModule } from '@angular/core';
import { MaterialModule } from 'src/app/core/material/material.module';
import { FlexlayoutModule } from 'src/app/core/flexlayout/flexlayout.module';

@NgModule({
  declarations: [],
  imports: [
    MaterialModule,
    FlexlayoutModule
  ],
  exports: [
    MaterialModule,
    FlexlayoutModule
  ]
})
export class SharedModule { }
