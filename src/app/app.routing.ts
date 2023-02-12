import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: '/overview', pathMatch: 'full' },
  {
    path: 'overview',
    loadChildren: () =>
      import('./features/overview/overview.module').then(
        (m) => m.OverviewModule
      ),
  },
  {
    path: 'wind',
    loadChildren: () =>
      import('./features/wind/wind.module').then((m) => m.WindModule),
  },
  {
    path: 'waves',
    loadChildren: () =>
      import('./features/waves/waves.module').then((m) => m.WavesModule),
  },
  {
    path: 'weather',
    loadChildren: () =>
      import('./features/weather/weather.module').then((m) => m.WeatherModule),
  },
  {
    path: 'cctv',
    loadChildren: () =>
      import('./features/cctv/cctv.module').then((m) => m.CctvModule),
  },
  {
    path: 'lightning',
    loadChildren: () =>
      import('./features/lightning/lightning.module').then(
        (m) => m.LightningModule
      ),
  },

  // Fallback when no prior route is matched
  { path: '**', redirectTo: '', pathMatch: 'full' },
];
