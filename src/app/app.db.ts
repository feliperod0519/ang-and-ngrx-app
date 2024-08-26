import { InMemoryDbService } from "angular-in-memory-web-api";
import { Attendee } from "./models";

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const attendees: Attendee[] = [
      {
        id: 1,
        name: 'Minou the Cat',
        guest: 0,
        attending: true
      }
    ];
    return {attendees};
  }
}