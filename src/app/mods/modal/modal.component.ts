import { Component, ElementRef, OnDestroy, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit, OnDestroy {

  @Output() closeModal = new EventEmitter();

  constructor(private el: ElementRef) { }


  ngOnInit(): void {
    document.body.append(this.el.nativeElement);
  }

  ngOnDestroy(): void {
    this.el.nativeElement.remove();
  }

  onCloseModal() {
    this.closeModal.emit();
  }
}
