import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { akitaDevtools } from '@datorama/akita';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ItemDetailComponent } from './components/item-detail/item-detail.component';
import { ListItemComponent } from './components/list-item/list-item.component';
import { ListComponent } from './components/list/list.component';
import { SecondsToDatePipe } from './pipe/seconds-to-date.pipe';
import { TODO_ITEM_STORAGE } from './service/todo-item-storage';
import { MaterialModule } from './shared/material/material.module';
import { TodoItemStorageAkitaService } from './storage/todo-item-storage-akita.service';

if (!environment.production) {
  akitaDevtools();
}

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    ListItemComponent,
    ItemDetailComponent,
    SecondsToDatePipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    MaterialModule,
    FlexLayoutModule
  ],
  providers: [
    { provide: TODO_ITEM_STORAGE, useClass: TodoItemStorageAkitaService }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
