import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title!: string;
  emailId!: string;
  user!: { loggedInUser: string };

  constructor(
    public translate: TranslateService
  ){
    // Register translation languages
    translate.addLangs(['en', 'es', 'fr']);
    // Set default language
    translate.setDefaultLang('en');

    this.getTitleString();
  }

  //Switch language
  translateLanguageTo(lang: string) {
    this.translate.use(lang);
  }

  getTitleString() {
    // asynchronous - gets translations then completes.
    this.translate.get(['TITLE', 'USER_INFO.EMAIL_ADDRESS'])
      .subscribe(translations => {
        this.title = translations['TITLE'];
        this.emailId = translations['USER_INFO.EMAIL_ADDRESS'];
      });
  }

  ngOnInit(): void {
    this.user = { loggedInUser: 'John Steve'}; // Defining static value for demo
  }
}
