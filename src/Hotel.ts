const EMPTY_ROOM = null;

export class Hotel {
  private guests: string[] = [];

  constructor(private numberOfRooms: number) {
  }

  public checkInGuest(guest: { name: string }){
    if(this.guests.length === this.numberOfRooms) {
      throw new Error("No room at the inn")
    }
    if(this.guests.includes(guest.name)) {
      throw new Error("You've already checked in dummy!")
    }
    this.guests.push(guest.name)
  }
}
