import { trigger, state, transition, animate, style, query, stagger } from '@angular/animations';


export const stagger1 = trigger('stagger1', [
  transition('* => *', [ // each time the binding value changes
    query(':enter', [
      style({
        opacity: 0,
        transform: 'scale(1)'
      }),
      stagger(50, [
        animate('1s', style({
          transform: 'translate(-100%)',
          opacity: 0.5 }))
      ]),
      stagger(100, [
        animate('0.5s', style({
          transform: 'unset',
          opacity: 1 }))
      ])
    ])
  ])
]);
