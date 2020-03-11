type Guest = { name: string };

export class Hotel {
  private guests: string[] = [];

  constructor(private numberOfRooms: number) {
  }

  public checkInGuest(guest: Guest){
    if(this.guests.length === this.numberOfRooms) {
      throw new Error("No room at the inn")
    }
    if(this.guests.includes(guest.name)) {
      throw new Error("You've already checked in dummy!")
    }
    this.guests.push(guest.name)
  }

  public checkOutGuest(guest: Guest) {
    this.guests = this.guests.filter(name => name !== guest.name)
  }
}
