import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'A small selection of my Favorite Images';
  image1 = 'https://www.launchcode.org/assets/icons/trophy-95e8cbe9bfda44123422302951deb1c92a237d39052669b8fbfafec00cb4f608.png';
  image2 = 'https://course_report_production.s3.amazonaws.com/rich/rich_files/rich_files/2152/s300/launchcode-20logo.jpeg';
  image3 = 'https://www.astrology-zodiac-signs.com/images/Scorpio-w.png';

  constructor() { }

  ngOnInit() {
  }

}