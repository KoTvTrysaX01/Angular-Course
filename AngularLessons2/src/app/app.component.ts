import { AfterViewInit, Component, ElementRef, ViewChild, ViewContainerRef } from '@angular/core';
import { RoomsComponent } from './rooms/rooms.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // template: `<h1>Hello world from inline template</h1>
  // <p>Angular is okay</p>
  // `,
  styleUrls: ['./app.component.scss']
  // styles: [`h1 {color: red}`]
})
export class AppComponent implements AfterViewInit{
  ngAfterViewInit(): void {
    // const componentRef = this.vcr.createComponent(RoomsComponent)
    // componentRef.instance.numberOfRooms = 50;
  }
  title = 'AngularLessons';

  role = 'Admin';

  // @ViewChild('user', { read: ViewContainerRef }) vcr!: ViewContainerRef
  @ViewChild('name', {static: true}) name!: ElementRef;
  
  ngOnInit(){
    this.name.nativeElement.innerText = "Hilton Hotel"
  }
}
