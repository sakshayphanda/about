import { trigger, state, transition, animate, style, query, stagger } from '@angular/animations';


export const stagger2 = trigger('stagger2', [
  transition('* => *', [ // each time the binding value changes
    query('img', [
      style({
        transform: 'translate(-50%)',
        opacity: 0
      }),
    ]),
    query('img', [
      stagger('200ms', [
        animate('300ms ease-in-out', style({
          transform: 'unset',
          opacity: 1 }))
      ])
    ])
  ])
]);
