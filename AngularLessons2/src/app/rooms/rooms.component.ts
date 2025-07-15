import { AfterContentChecked, AfterViewInit, Component, DoCheck, OnDestroy, OnInit, QueryList, ViewChild, ViewChildren} from '@angular/core';
import { Room, RoomList } from './rooms';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})
export class RoomsComponent implements OnInit, DoCheck, AfterViewInit, AfterContentChecked{

  hotelName = 'My Hotel';

  numberOfRooms = 10;

  hideRooms = false;

  selectedRoom!: RoomList;

  rooms: Room = {
    totalRooms: 20,
    availableRooms: 10,
    bookedRooms: 5
  }

  title = 'Room list';

  roomList: RoomList[] = []
  @ViewChild(HeaderComponent, {static: true}) headerComponent!: HeaderComponent;
  @ViewChildren(HeaderComponent) headerChildComponent!: QueryList<HeaderComponent>

  constructor() { }

  ngAfterContentChecked(): void {
    // throw new Error('Method not implemented.');
  }

  ngAfterViewInit(): void {
    this.headerComponent.title = "Room View";
    this.headerChildComponent.last.title = "Last Title";
    this.headerChildComponent.get(1)!.title = "Second Title";
    // console.log(this.headerComponent)
    // throw new Error('Method not implemented.');
  }

  ngDoCheck(): void {
    console.log(`On changes is called`)
    // throw new Error('Method not implemented.');
  }


  ngOnInit(): void {

    this.roomList = [{
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
  }

  toggle(): void {
    this.hideRooms = !this.hideRooms
    this.title = "Rooms List";
  }

  selectRoom(room: RoomList){
    this.selectedRoom = room;
    console.log(room);
  }

  addRoom(){
    const room: RoomList = {
      roomNumber: 5,
      roomType: 'Deluxe',
      amenities: 'Whatever you wish dude',
      price: 15000000,
      photos: 'https://th.bing.com/th/id/R.945e552b58c25f526ad089bc493d4516?rik=42BmhcZYWlYxGA&riu=http%3a%2f%2fcache.marriott.com%2fmarriottassets%2fmarriott%2fLASJW%2flasjw-guestroom-0111-hor-clsc.jpg%3finterpolation%3dprogressive-bilinear%26&ehk=VcnNojNooaxympMvDdeRVdz3JfYVtglQmJmdSktonXM%3d&risl=&pid=ImgRaw&r=0',
      checkinTime: new Date('11-Nov-2021'),
      checkoutTime: new Date('12-Nov-2021'),
      rating: 3.532131
    };
    // this.roomList.push(room)
    this.roomList = [...this.roomList, room];
  }
}
