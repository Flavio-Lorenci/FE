import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { UserContainerComponent } from "./components/user-container/user-container.component";

const routes: Routes = [{ path: '', component: UserContainerComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule {}