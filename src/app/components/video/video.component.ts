import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styles: []
})
export class VideoComponent implements OnInit {
  playlist = [{
    url_video: 'mwiPi_U1T0s',
    url_image: '',
  }];
  constructor() { }

  ngOnInit() {
  }

  private id: string[] = [
    'mwiPi_U1T0s',
    'aYPgS8OzfFk',
    '9oDBfnQJmjw',
    'gawBZO_69Lw',
    'y6bqXH-lYBo',
    'Jtxd4Yr_nvA',
    '7VmR9k4jlfE',
    'U1MxUpZJQQ',
    '7sb1Ec7_UC8',
    '4Ef3lW3IHM4'
  ];

}
