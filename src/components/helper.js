import * as moment from 'moment';

export function current() {
  return moment().format('YYYY MM DD HH:mm:s');
}

