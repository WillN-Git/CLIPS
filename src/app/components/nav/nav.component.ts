import { Component, OnInit } from '@angular/core';

// Utils
import { authModalID } from 'src/app/user/auth-modal/auth-modal.component';

// Services
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
})
export class NavComponent implements OnInit {

  constructor(private modalService: ModalService) { }

  ngOnInit(): void {
  }

  openModal($event: Event) {
    $event.preventDefault();

    this.modalService.toggleModal(authModalID);
  }
}
