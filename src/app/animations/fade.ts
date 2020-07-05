import { trigger, state, transition, animate, style } from '@angular/animations';

export const fade = trigger('fade', [
  state('hide', style({
    opacity: 0
  })),
  state('void', style({
    opacity: 1
  })),
  transition('void => first', [ // :enter, :leave or void => *, * => void
    style({
      opacity: 0
    }),
    animate(2000, style({
      opacity: 1
    }))
  ]),
  transition('* => next', [
    style({
      opacity: 0
    }),
    animate(2000, style({
      opacity: 1
    }))
  ])
]);
