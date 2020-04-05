import { Component, OnInit } from '@angular/core';
import { GlobalDataService } from 'src/app/services/global-data.service';
import { experiences } from 'src/app/data/experiences';
import { IExperience } from 'src/app/interfaces/Iexperience';
import { skills } from 'src/app/data/skills';
import { projects } from 'src/app/data/projects';
import { education } from 'src/app/data/education';

@Component({
  selector: 'app-dynamic-content',
  templateUrl: './dynamic-content.component.html',
  styleUrls: ['./dynamic-content.component.sass']
})
export class DynamicContentComponent implements OnInit {

  experiences: IExperience[] = experiences;
  skills = [] = skills;
  projects = [] = projects;
  education = [] = education;

  constructor(
    private globalData: GlobalDataService
  ) {}

  ngOnInit(): void {
    document.querySelector('.dynamic').addEventListener('scroll', (ev) => {
      const sections = document.getElementsByClassName('sections');
      if(ev[`target`][`scrollTop`] < document.querySelectorAll('.sections')[0][`offsetTop`]) {
        this.globalData.selectedAction.emit('');
        return;
      }
      for (let i = 0; i < sections.length; i++) {
        if(ev[`target`][`scrollTop`] >= document.querySelectorAll('.sections')[i][`offsetTop`]) {
        this.globalData.selectedAction.emit(document.querySelectorAll('.sections')[i][`id`]);
        }
      }
    });
  }
}
