import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  openLinkedin() {
    window.open('https://www.linkedin.com/in/matheusaleixoramos/', '_blank');
  }

  openGitHub() {
    window.open('https://github.com/Zyrexmt', '_blank');
  }

  currentYear: number = new Date().getFullYear();
}
