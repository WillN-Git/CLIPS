import { Component, Input, OnInit } from '@angular/core';

// Service
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  @Input() modalID: string = '';

  constructor(private modalService: ModalService) { }

  ngOnInit(): void {
    
  }

  get isModalOpen() {
    return this.modalService.isModalOpen(this.modalID);
  }

  closeModal() {
    this.modalService.toggleModal(this.modalID);
  }

}
