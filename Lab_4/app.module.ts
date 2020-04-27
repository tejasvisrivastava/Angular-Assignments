import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule} from '@angular/forms';
import { FilterPipe } from './filter-pipe';
import { AppComponent } from './app.component';
import { MyserviceService } from './myservice.service';
import { HttpClient,HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    FilterPipe
  ],
  imports: [FormsModule,ReactiveFormsModule,
    BrowserModule,
    HttpClientModule
  ],
  providers: [HttpClient,MyserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }