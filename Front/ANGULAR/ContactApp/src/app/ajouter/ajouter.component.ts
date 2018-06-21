import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Contact} from '../Shared/models/contact';

@Component({
  selector: 'app-ajouter',
  templateUrl: './ajouter.component.html',
  styleUrls: ['./ajouter.component.css']
})
export class AjouterComponent implements OnInit {

  @Output() unContactEstCree = new EventEmitter();
  nouveauContact: Contact = new Contact();
  active = true;
  constructor() { }

  ngOnInit() {
  }
  submitContact(){
    console.log(this.nouveauContact);
    this.unContactEstCree.emit({leContact: this.nouveauContact});
    this.nouveauContact = new Contact();
    this.active = false;

    setTimeout( () =>this.active = true,0 );
  }
}
