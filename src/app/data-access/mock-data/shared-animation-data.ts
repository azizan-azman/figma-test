import {
  trigger,
  transition,
  style,
  animate,
  query,
  stagger,
} from '@angular/animations';

export const fadeAnimation = trigger('fade', [
  transition(':enter', [
    style({ opacity: 0 }),
    animate('0.5s ease-in', style({ opacity: 1 })),
  ]),
  transition(':leave', [animate('0.5s ease-out', style({ opacity: 0 }))]),
]);

export const inOutAnimation = trigger('inOutAnimation', [
  transition(':enter', [
    style({ height: 0, opacity: 0 }),
    animate('1s ease-out', style({ height: 300, opacity: 1 })),
  ]),
  transition(':leave', [
    style({ height: 300, opacity: 1 }),
    animate('1s ease-in', style({ height: 0, opacity: 0 })),
  ]),
]);

export const listAnimation = trigger('listAnimation', [
  transition('* <=> *', [
    query(
      ':enter',
      [
        style({ opacity: 0 }),
        stagger('60ms', animate('600ms ease-out', style({ opacity: 1 }))),
      ],
      { optional: true }
    ),
    query(':leave', animate('300ms', style({ opacity: 0 })), {
      optional: true,
    }),
  ]),
]);
