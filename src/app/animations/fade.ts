import { trigger, state, transition, animate, style } from '@angular/animations';

export const fade = trigger('fade', [
  state('void', style({
    opacity: 1
  })),
  transition('void <=> *', [ // :enter, :leave or void => *, * => void
    style({
      opacity: 0
    }),
    animate(2000, style({
      opacity: 1
    }))
  ])
]);
