import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { WritingComponent } from './pages/writing/writing.component';
import { DailyComponent } from './pages/daily/daily.component';

const routes: Routes = [
  {
    path: 'summer', 
    component: AppComponent
  },
  {
    path: 'write',
    component: WritingComponent
  },
  {
    path: 'daily',
    component: DailyComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
