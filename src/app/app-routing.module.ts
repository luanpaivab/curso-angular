import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirsComponentComponent } from './components/firs-component/firs-component.component';
import { ListRenderComponent } from './components/list-render/list-render.component';
import { ParentComponentComponent } from './components/parent-component/parent-component.component';

const routes: Routes = [
  { path: '', component: FirsComponentComponent },
  { path: 'parent', component: ParentComponentComponent },
  { path: 'list', component: ListRenderComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
