import { Component, OnInit } from '@angular/core';
import { GlobalDataService } from 'src/app/services/global-data.service';
import { experiences } from 'src/app/data/experiences';
import { skills } from 'src/app/data/skills';
import { projects } from 'src/app/data/projects';
import { education } from 'src/app/data/education';
import { ISkill } from 'src/app/interfaces/ISkill';
import { IProject } from 'src/app/interfaces/IProject';
import { IExperience } from 'src/app/interfaces/IExperience';
import { IEducation } from 'src/app/interfaces/IEducation';

@Component({
  selector: 'app-dynamic-content',
  templateUrl: './dynamic-content.component.html',
  styleUrls: ['./dynamic-content.component.sass']
})
export class DynamicContentComponent implements OnInit {

  imagePaths = [
    '../../../../assets/angular-circle.png',
    '../../../../assets/javascript.svg',
    '../../../../assets/typescript.png',
    '../../../../assets/jquery.png',
    '../../../../assets/html.jpg',
    '../../../../assets/sass.png',
    '../../../../assets/css.png'
  ];
  experiences: IExperience[] = experiences;
  skills: ISkill[] = skills;
  projects: IProject [] = projects;
  education: IEducation[] = education;

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
