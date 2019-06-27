import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ModalManager } from 'ngb-modal';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-inversor',
  templateUrl: './inversor.component.html',
  styleUrls: ['./inversor.component.css']
})
export class InversorComponent implements OnInit {

  @ViewChild('share') shareModal: ElementRef;

  linkModal: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer, private modalService: ModalManager,
    private router: ActivatedRoute) { }

  ngOnInit() {
    console.log(this.router.snapshot.paramMap.get('id'));
    // CAPTURA ID
    // DEBERIA BUSCAR POR ID EN LA BASE DE DATOS
  }

  abrirShare(link: string) {
    this.linkModal = this.sanitizer.bypassSecurityTrustResourceUrl(link);
    this.abrirModal();
  }

  abrirModal() {
    this.modalService.open(this.shareModal);
  }

}
