# McDonalds Hotel 

To get started, try running `npm run test`. 

### Hotel Rules: 
- No extensions can be made to the hotel or its component parts without first implementing a failing test
- ~~The hotel is not responsible for keeping guest or restaurant data~~ <- this attempts to drive the implementation and that's not a good thing.

### Features to add: 

#### Checking In
- A named guest should be able to check in to a hotel with available rooms.
- A hotel cannot check in more guests than there are rooms.
- A guest can only check into one room.

#### Check out
- A checked in guest should be able to check out and the room become available again.
- A bill should be presented to the guest on check out, each night costs $100.

#### Complaints
- If a guest complains about a room, they are allocated a new room while their existing room is broken.
- If a room is broken it cannot be allocated to a new guest.
- A room is fixed when a builder is sent to their room.

#### Restaurant
- A guest can order a hamburger from the restaurant for $5, this should be added to their final bill.
- A guest can order a veggie burger from the restaurant for $6 (green tax), this should be added to their bill.
- A vegetarian guest cannot order a hamburger.

#### More hotels
- The hotels expands to a chain of two hotels: McDonalds and BurgerKing hotel:
  - A guest cannot check in to two hotels at the same time.
