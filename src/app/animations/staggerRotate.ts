import { trigger, state, transition, animate, style, query, stagger, keyframes } from '@angular/animations';


export const stagger3 = trigger('staggerRotate', [
  state('false', style({
    transform: 'translate(-50%)',
    opacity: 0
  })),
  transition('* => true', [ // each time the binding value changes
    query(':self', [
      style({
        transform: 'translate(-50%)',
        opacity: 0
      }),
      stagger('500ms', [
        animate('500ms', keyframes([
          style({
            transform: 'rotateX(180deg) rotateZ(90deg)',
            opacity: 1,
            offset: 0.33
          }),
          style({
            transform: 'rotateX(270deg) rotateZ(45deg)',
            opacity: 1,
            offset: 0.66
          }),
          style({
            transform: 'rotateX(360deg) rotateZ(0deg)',
            opacity: 1,
            offset: 1
          })
        ]))
      ])
    ], {optional: true})
  ])
]);
