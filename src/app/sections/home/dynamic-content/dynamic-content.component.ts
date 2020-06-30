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
  styleUrls: ['./dynamic-content.component.sass'],
})
export class DynamicContentComponent implements OnInit {
  imagePaths = [
    '../../../../assets/angular-circle.png',
    '../../../../assets/javascript.svg',
    '../../../../assets/typescript.png',
    '../../../../assets/jquery.png',
    '../../../../assets/html.jpg',
    '../../../../assets/sass.png',
    '../../../../assets/css.png',
  ];
  experiences: IExperience[] = experiences;
  skills: ISkill[] = skills;
  projects: IProject[] = projects;
  education: IEducation[] = education;
  darkModeEnabled = false;
  mode = 'Dark';

  constructor(private globalData: GlobalDataService) {}

  ngOnInit() {
    this.darkModeEnabled = JSON.parse(localStorage.getItem('darkMode'));
    if (this.darkModeEnabled) {
      this.darkMode();
    }
    document.querySelector('.dynamic').addEventListener('scroll', (ev) => {
      const sections = document.getElementsByClassName('sections');
      if (
        ev[`target`][`scrollTop`] <
        document.querySelectorAll('.sections')[0][`offsetTop`]
      ) {
        this.globalData.selectedAction.emit('');
        return;
      }
      for (let i = 0; i < sections.length; i++) {
        if (
          ev[`target`][`scrollTop`] >=
          document.querySelectorAll('.sections')[i][`offsetTop`]
        ) {
          this.globalData.selectedAction.emit(
            document.querySelectorAll('.sections')[i][`id`]
          );
        }
      }
    });
  }

  darkMode() {
    this.setProperty('--cardBackground', '#2f2f2f');
    this.setProperty(
      '--texturedBackground',
      'url("../../../../assets/bg-2.jpg")'
    );
    this.setProperty('--sectionBackground', '#252525');
    // this.setProperty('--mainBackground', 'url("../../../../assets/bg-2.jpg")');
    this.setProperty('--sideBarTextColor', '#fff');
    this.setProperty('--cardTextColor', '#cfcece');
    this.setProperty('--cardBoxShadow', 'unset');

    this.mode = 'Light';
  }

  lightMode() {
    this.setProperty('--cardBackground', 'white');
    // this.setProperty('--mainBackground', 'url("../../../../assets/sky.jpg")');
    this.setProperty(
      '--texturedBackground',
      'url("../../../../assets/white-texture.png")'
    );
    this.setProperty('--sectionBackground', '#f8f8f8');

    this.setProperty('--sideBarTextColor', '#476282');
    this.setProperty('--cardTextColor', '#476282');
    // this.setProperty(
    //   '--cardBoxShadow',
    //   '0 1px 2px 0 rgba(60,64,67,.3), 0 1px 3px 1px rgba(60,64,67,.15)'
    // );
    this.mode = 'Dark';
  }

  toggleDarkMode() {
    if (!this.darkModeEnabled) {
      this.darkMode();
      this.darkModeEnabled = true;
      localStorage.setItem('darkMode', 'true');
    } else {
      this.lightMode();
      this.darkModeEnabled = false;
      localStorage.setItem('darkMode', 'false');
    }
  }

  setProperty(variable, value) {
    document.documentElement.style.setProperty(variable, value);
  }
}
