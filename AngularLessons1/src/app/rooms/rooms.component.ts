import { Component, OnInit } from '@angular/core';
import { Room, RoomList } from './rooms';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})
export class RoomsComponent implements OnInit {

  hotelName = 'My Hotel';
  
  numberOfRooms = 10;

  hideRooms = false;

  rooms : Room = {
    totalRooms: 20,
    availableRooms: 10,
    bookedRooms: 5
  }
  
  roomList : RoomList[] = [ {
    roomNumber: 1,
    roomType: 'Deluxe Room',
    amenities: 'Free wi-fi, Air conditioner, Tv, Bathroom',
    price: 500,
    photos: 'https://th.bing.com/th/id/R.945e552b58c25f526ad089bc493d4516?rik=42BmhcZYWlYxGA&riu=http%3a%2f%2fcache.marriott.com%2fmarriottassets%2fmarriott%2fLASJW%2flasjw-guestroom-0111-hor-clsc.jpg%3finterpolation%3dprogressive-bilinear%26&ehk=VcnNojNooaxympMvDdeRVdz3JfYVtglQmJmdSktonXM%3d&risl=&pid=ImgRaw&r=0',
    checkinTime: new Date('11-Nov-2021'),
    checkoutTime: new Date('12-Nov-2021'),
    rating: 1.5
  },
  {
    roomNumber: 2,
    roomType: 'Deluxe Room',
    amenities: 'Free wi-fi, Air conditioner, Tv, Bathroom',
    price: 1500,
    photos: 'https://th.bing.com/th/id/R.945e552b58c25f526ad089bc493d4516?rik=42BmhcZYWlYxGA&riu=http%3a%2f%2fcache.marriott.com%2fmarriottassets%2fmarriott%2fLASJW%2flasjw-guestroom-0111-hor-clsc.jpg%3finterpolation%3dprogressive-bilinear%26&ehk=VcnNojNooaxympMvDdeRVdz3JfYVtglQmJmdSktonXM%3d&risl=&pid=ImgRaw&r=0',
    checkinTime: new Date('11-Nov-2021'),
    checkoutTime: new Date('12-Nov-2021'),
    rating: 2.533
  },
  {
    roomNumber: 3,
    roomType: 'Deluxe Room',
    amenities: 'Free wi-fi, Air conditioner, Tv, Bathroom',
    price: 1000,
    photos: 'https://th.bing.com/th/id/R.945e552b58c25f526ad089bc493d4516?rik=42BmhcZYWlYxGA&riu=http%3a%2f%2fcache.marriott.com%2fmarriottassets%2fmarriott%2fLASJW%2flasjw-guestroom-0111-hor-clsc.jpg%3finterpolation%3dprogressive-bilinear%26&ehk=VcnNojNooaxympMvDdeRVdz3JfYVtglQmJmdSktonXM%3d&risl=&pid=ImgRaw&r=0',
    checkinTime: new Date('11-Nov-2021'),
    checkoutTime: new Date('12-Nov-2021'),
    rating: 4.532131231
  },
  {
    roomNumber: 4,
    roomType: 'Private Suite',
    amenities: 'Free wi-fi, Air conditioner, Tv, Bathroom',
    price: 15000,
    photos: 'https://th.bing.com/th/id/R.945e552b58c25f526ad089bc493d4516?rik=42BmhcZYWlYxGA&riu=http%3a%2f%2fcache.marriott.com%2fmarriottassets%2fmarriott%2fLASJW%2flasjw-guestroom-0111-hor-clsc.jpg%3finterpolation%3dprogressive-bilinear%26&ehk=VcnNojNooaxympMvDdeRVdz3JfYVtglQmJmdSktonXM%3d&risl=&pid=ImgRaw&r=0',
    checkinTime: new Date('11-Nov-2021'),
    checkoutTime: new Date('12-Nov-2021'),
    rating: 3.532131
  }
]

  constructor() { }


  ngOnInit(): void {
  }

  toggle(): void{
    this.hideRooms = !this.hideRooms
  }

}
