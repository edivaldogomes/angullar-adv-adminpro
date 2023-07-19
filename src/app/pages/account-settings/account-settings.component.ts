import { Component } from '@angular/core';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styleUrls: ['./account-settings.component.css'],
})
export class AccountSettingsComponent {
  public linkTheme = document.querySelector('#theme');

  changeTheme(theme: string) {
    console.log(theme);

    const url = `./assets/css/colors/${theme}.css`;
    console.log(this.linkTheme);
    console.log(url);
    if (this.linkTheme !== null) this.linkTheme.setAttribute('href', url);
    localStorage.setItem('theme', url);
  }
}
