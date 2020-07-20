import {format} from 'date-fns';
import {ptBR} from 'date-fns/locale';

export const formatDate = (unformattedDate) => {
  return format(unformattedDate, 'EEEE, do MMMM');
};

export const formatHour = (unformattedDate) => {
  return format(unformattedDate, 'H:mm');
};
