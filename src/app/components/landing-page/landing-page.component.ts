import { UtilitiesService } from './../../services/utilities.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  title: string;
  desc: string;
  constructor(private uts: UtilitiesService) {
    this.title = this.uts.title;
    this.desc = this.uts.desc;
  }

  ngOnInit(): void {
  }

}
