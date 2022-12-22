import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'gameOfThrones',
    loadChildren: () =>
      import('./game-of-thrones/game-of-thrones.module').then(
        (m) => m.GameOfThronesModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
