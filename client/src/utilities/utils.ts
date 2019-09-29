import {v4} from 'uuid';

export function guid(): string {
  return v4();
}
