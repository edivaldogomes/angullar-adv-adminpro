import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SettingsService {
  private linkTheme = document.querySelector('#theme');

  constructor() {
    const url =
      localStorage.getItem('theme') || './assets/css/colors/purple-dark.css';
    if (this.linkTheme !== null) this.linkTheme.setAttribute('href', url);
    console.log('Settings Service Init');
  }

  changeTheme(theme: string) {
    const url = `./assets/css/colors/${theme}.css`;
    if (this.linkTheme !== null) this.linkTheme.setAttribute('href', url);
    localStorage.setItem('theme', url);
    this.checkCurrentTheme();
  }

  checkCurrentTheme(): void {
    const linksWorking = document.querySelectorAll('.selector');

    linksWorking.forEach((elem: any) => {
      elem.classList.remove('working');
      const btnTheme = elem.getAttribute('data-theme');
      const btnThemeUrl = `./assets/css/colors/${btnTheme}.css`;
      const currentTheme = this.linkTheme?.getAttribute('href');

      if (btnThemeUrl === currentTheme) {
        elem.classList.add('working');
      }
    });
    console.log('LINK WORKING', linksWorking);
  }
}
