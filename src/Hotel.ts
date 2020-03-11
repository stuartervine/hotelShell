import {Clock, SystemClock} from "./Clock";

type Guest = { name: string };
type StayingGuest = Guest & { checkin: Date };

class Bill {
  constructor(public amount: number) {
  }
}

export class Hotel {
  private stayingGuests: StayingGuest[] = [];

  constructor(private numberOfRooms: number, private clock: Clock = new SystemClock()) {
  }

  public checkInGuest(guest: Guest) {
    if (this.stayingGuests.length === this.numberOfRooms) {
      throw new Error("No room at the inn")
    }
    if (this.stayingGuests.map(g => g.name).includes(guest.name)) {
      throw new Error("You've already checked in dummy!")
    }
    this.stayingGuests.push({name: guest.name, checkin: this.clock.now()})
  }

  public checkOutGuest(guest: Guest): Bill {
    const stayingGuest = this.stayingGuests.find(stayingGuest => stayingGuest.name === guest.name);
    this.stayingGuests = this.stayingGuests.filter(stayingGuest => stayingGuest.name !== guest.name);
    const lengthOfStayInMillis = this.clock.now().getTime() - stayingGuest.checkin.getTime();
    return new Bill(100*Math.round(lengthOfStayInMillis / (1000 * 60 * 60 * 24)));
  }
}
