import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ModalManager } from 'ngb-modal';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { MicroemprendimientoServicio } from 'src/app/servicio/microemprendimiento.servicio';

@Component({
  selector: 'app-inversor',
  templateUrl: './inversor.component.html',
  styleUrls: ['./inversor.component.css']
})
export class InversorComponent implements OnInit {

  @ViewChild('share') shareModal: ElementRef;

  linkModal: SafeResourceUrl;

  proyecto: any = [];

  constructor(private sanitizer: DomSanitizer, private modalService: ModalManager,
    private microemprendimientoServicio: MicroemprendimientoServicio, private route: ActivatedRoute) { }

  ngOnInit() {
    this.obtenerMicroemprendimiento(this.route.snapshot.paramMap.get('id'));
  }

  imagen(nombre: string) {
    return 'https://www.sumatoria.org/assets/images/microempresarios/thumbnails/' + nombre;
  }

  abrirShare(link: string) {
    this.linkModal = this.sanitizer.bypassSecurityTrustResourceUrl(link);
    this.abrirModal();
  }

  abrirModal() {
    this.modalService.open(this.shareModal);
  }

  obtenerMicroemprendimiento(id: string) {
    let dataEmprendimiento: any = {id_micro: id};
    this.microemprendimientoServicio.getMicroemprendimiento('microemprendedor' , dataEmprendimiento).subscribe(res => {
      console.log(res);
      this.proyecto = res['emprendimientoData'];
    }, error => {
      console.log(error);
    })
  }

}
