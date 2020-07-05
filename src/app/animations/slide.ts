import { trigger, state, transition, animate, style, query, stagger, keyframes } from '@angular/animations';


export const slide = trigger('slide', [
  transition('false <=> true', [ // each time the binding value changes
    query('.animate', [
      stagger('500ms', [
      animate('2s', keyframes([
        style({
        transform: 'translate(0%)',
        opacity: 1,
        offset: 0.33
        }),
        style({
          transform: 'translate(0%)',
          opacity: 1,
          offset: 1
          })
      ]),
      )]),
      state('true', style(
        {
          opacity: 0
        }
      ))
    ], {optional: true})
  ])
]);
