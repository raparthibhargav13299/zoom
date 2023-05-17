import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentPageComponent } from './content-page/content-page.component';
import { CourseContainerComponent } from './course-container/course-container.component';
import { SidebarComponent } from './sidebar/sidebar.component';

const routes: Routes = [

  {path: 'sidebar', component:SidebarComponent},
  {path: 'course', component:CourseContainerComponent},
  {path: 'content', component:ContentPageComponent},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
