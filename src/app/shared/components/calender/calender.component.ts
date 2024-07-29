
import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-calendar',
  templateUrl: './calender.component.html',
  styleUrls: ['./calender.component.scss']
})
export class CalendarComponent {
  selectedDate: Date | undefined;
  selected: Date | null = null;  // Add this line
  @Output() dateSelected = new EventEmitter<Date>();

  onDateSelected(date: Date): void {
    this.selectedDate = date;
    this.dateSelected.emit(date);
  }
}
