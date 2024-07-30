// appointment.model.ts
export interface Appointment {
  id: number;
  title: string;
  dateTime: string; // Use ISO 8601 string for date and time
}