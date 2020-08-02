import { Component, OnInit } from '@angular/core';
import {CarousselImage} from '../../../models/caroussel-image';

@Component({
  selector: 'app-validate-step4',
  templateUrl: './validate-confirm-info.component.html',
  styleUrls: ['./validate-confirm-info.component.scss']
})
export class ValidateConfirmInfoComponent implements OnInit {
  images: Array<CarousselImage> = [
    {
      text: 'Scroll naar beneden',
      image: 'assets/images/Screen 4.png'
    },
    {
      text: 'Druk op ‘Ga door’ om de codes te delen',
      image: 'assets/images/Screen 5.png',
    },
    {
      text: 'Geef toestemming',
      image: 'assets/images/Screen 6.png',
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
