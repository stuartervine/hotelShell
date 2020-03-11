export class Hotel {
  private rooms: string[];

  constructor(numberOfRooms: number) {
    this.rooms = Array(numberOfRooms).fill('')
  }

  public checkInGuest(_guest: { name: string }){
    if(this.rooms.length === 0) {
      throw new Error("No room at the inn")
    }
  }
}
