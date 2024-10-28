import { Component, OnInit } from '@angular/core';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { RouterOutlet } from '@angular/router';
import { SwUpdate } from '@angular/service-worker';
import { filter, map, switchMap } from 'rxjs';

import { HeaderComponent } from './header/header.component';
import { WeatherComponent } from './weather/weather.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, WeatherComponent, MatSnackBarModule, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  title = 'weather-app';

  constructor(private updates: SwUpdate, private snackbar: MatSnackBar) {}

  ngOnInit(): void {
    this.updates.versionUpdates
      .pipe(
        filter((event) => event.type === 'VERSION_READY'),
        switchMap(() =>
          this.snackbar
            .open('A new version is available!', 'Update now')
            .afterDismissed()
        ),
        filter((result) => result.dismissedByAction),
        map(() => this.updates.activateUpdate().then(() => location.reload()))
      )
      .subscribe();
  }
}
