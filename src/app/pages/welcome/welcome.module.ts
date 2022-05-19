import { NgModule } from '@angular/core';

import { WelcomeRoutingModule } from './welcome-routing.module';

import { WelcomeComponent } from './welcome.component';
import { CommonModule } from '@angular/common';


// ANTD
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { TableComponent } from './table/table.component';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzInputModule } from 'ng-zorro-antd/input';
import {FormsModule} from "@angular/forms";
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzButtonModule } from 'ng-zorro-antd/button';


@NgModule({
  imports: [WelcomeRoutingModule, NzTypographyModule, NzIconModule, NzTableModule, NzInputModule, FormsModule, NzDatePickerModule, CommonModule, NzButtonModule],
  declarations: [WelcomeComponent, TableComponent],
  exports: [WelcomeComponent]
})
export class WelcomeModule { }
