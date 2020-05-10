import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  photos = [
    {
      url: 'https://i.pinimg.com/originals/29/8e/84/298e84a971fd682be9b6f000b98385b0.jpg',
      description: 'Lobo Negro'
    },
    {
      url: 'https://i.pinimg.com/originals/b3/eb/57/b3eb5772fe75779130432bacf513527c.jpg',
      description: 'Lobo Branco'
    }
    {
      url: 'https://i.pinimg.com/originals/33/2f/67/332f67355a88f803142aa7428db00feb.jpg',
      description: 'Lobo Prata'
    }
  ];
 
}
