import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateFormat',
  standalone: true
})
export class DateFormatPipe implements PipeTransform {

  transform(inputDate: string): unknown {
    // Parse the input date string
    const year = inputDate.slice(0, 4);
    const month = inputDate.slice(4, 6);
    const day = inputDate.slice(6, 8);

    // Create a Date object using the parsed values
    const parsedDate = new Date(`${year}-${month}-${day}`);

    // Format the date in "DD MM YYYY" format
    const formattedDate = parsedDate.toLocaleDateString('fr-FR', {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
    });

    return formattedDate;
  }

}
