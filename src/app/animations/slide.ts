import { trigger, state, transition, animate, style, query, stagger, keyframes } from '@angular/animations';


export const slide = trigger('slide', [
  transition('false <=> true', [ // each time the binding value changes
    query('.animate', [
      stagger('500ms', [
      animate('2s', keyframes([
        style({
        transform: 'translate(2%)',
        opacity: 1,
        offset: 0.33
        }),
        style({
          transform: 'translate(3%)',
          opacity: 0.5,
          offset: 1
          })
      ]))])
    ], {optional: true})
  ])
]);
