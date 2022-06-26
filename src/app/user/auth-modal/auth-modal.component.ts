import { Component, OnDestroy, OnInit } from '@angular/core';

// Services
import { ModalService } from 'src/app/services/modal.service';

export const authModalID = 'auth';

@Component({
  selector: 'app-auth-modal',
  templateUrl: './auth-modal.component.html',
  styleUrls: ['./auth-modal.component.scss']
})
export class AuthModalComponent implements OnInit, OnDestroy {
  constructor(private modalService: ModalService) { }

  ngOnInit(): void {
    this.modalService.register(this.modalID);
  }

  ngOnDestroy(): void {
      this.modalService.unregister(this.modalID);
  }

  get modalID(): string {
    return authModalID;
  }
}
