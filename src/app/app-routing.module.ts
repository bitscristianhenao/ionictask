import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  { path: 'characters', loadChildren: () => import('./characters/characters.module').then( m => m.CharactersModule)},
  { path: 'episodes', loadChildren: () => import('./episodes/episodes.module').then( m => m.EpisodesModule)},
  { path: 'quotes', loadChildren: () => import('./quotes/quotes.module').then( m => m.QuotesModule)},
  { path: 'deaths', loadChildren: () => import('./deaths/deaths.module').then( m => m.DeathsModule)}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
