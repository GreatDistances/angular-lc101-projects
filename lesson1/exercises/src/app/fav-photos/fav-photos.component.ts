import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'Elsewhere on the Web...';
  image1 = 'https://akns-images.eonline.com/eol_images/Entire_Site/201478/rs_560x415-140808121644-560.Celeb-Shark-Smiles-Shark-Week.ms.080814.jpg?fit=around%7C560:415&output-quality=90&crop=560:415;center,top/';
  image2 = 'https://static.wikia.nocookie.net/evil/images/0/0f/The_Chum_Bucket.jpg/';
  image3 = 'https://static.wikia.nocookie.net/mst3k/images/7/78/RiffTrax-_movie_riffing_target_Nick_Nolte.jpg/';

  constructor() { }

  ngOnInit() {
  }

}