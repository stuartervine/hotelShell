import {expect} from 'chai';
import {Random} from "../utils/Random";
import {Hotel} from "../src/Hotel";

describe("Hotel", () => {

  it('should be able to check in a new guest when there are available rooms', () => {
    const hotel = new Hotel(1);
    hotel.checkInGuest({name: Random.string()});
  });

  it('should not be able check in a new guest when there are no available rooms', () => {
    const hotel = new Hotel(0);
    try {
      hotel.checkInGuest({name: Random.string()});
      expect(false, "should throw exception").to.eql(true)
    } catch (e) {
      expect(e.message).to.eql("No room at the inn");
    }
  });

  it('should only allow a guest to check into one room', () => {
    const hotel = new Hotel(3);
    try {
      const guest = {name: Random.string()};
      hotel.checkInGuest(guest);
      hotel.checkInGuest(guest);
      expect(false, "should throw exception").to.eql(true)
    } catch (e) {
      expect(e.message).to.eql("You've already checked in dummy!");
    }
  });

  it('should allow a checked in guest to check out and allow a different guest to check in', () => {
    const hotel = new Hotel(1);
      const guest1 = {name: Random.string()};
      const guest2 = {name: Random.string()};
      hotel.checkInGuest(guest1);
      hotel.checkOutGuest(guest1);
      hotel.checkInGuest(guest2);
  })

});
