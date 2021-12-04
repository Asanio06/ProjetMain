import {defaultsDeep} from 'lodash';

export class Hand {
  doigt1: number = 0;
  doigt2: number = 0;
  doigt3: number = 0;
  doigt4: number = 0;
  doigt5: number = 0;

  constructor(hand?: Partial<Hand>) {
    defaultsDeep(this, hand);
  }
}
