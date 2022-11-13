import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SendfeedbackComponent } from './sendfeedback/sendfeedback.component';
import { SendmessageComponent } from './sendmessage/sendmessage.component';

const routes: Routes = [
  {path:'',component:SendfeedbackComponent},
  {path:'message',component:SendmessageComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReviewsRoutingModule { }
