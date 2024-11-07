import { Routes } from '@angular/router';
import { WeightLossComponent } from './components/weight-loss/weight-loss.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { MenopauseComponent } from './components/menopause/menopause.component';

export const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'weight-loss', component: WeightLossComponent },
  {path:'menopause',component:MenopauseComponent}
];
