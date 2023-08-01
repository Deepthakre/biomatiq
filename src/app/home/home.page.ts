import { Component } from '@angular/core';

interface CardData {
  title: string;
  content: string;
  expanded?: boolean; // Add an optional 'expanded' property
}

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
 
}
