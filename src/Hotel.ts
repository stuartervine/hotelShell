export class Hotel {
  public guests: any[] = [];

  constructor(_rooms: number) {}

  static checkInGuest(guest: { name: string }){
    console.log("check in guest here!")
  }
}