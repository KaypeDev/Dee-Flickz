import type { Id } from "../../../../convex/_generated/dataModel";

export type BookingFormData = {
  date?: Date;      
  time: string;    
  email: string;
  phone: string;
  name: string;
  eventLocation: string;
  message: string;
  clientId?: Id<'clients'>;
 
};