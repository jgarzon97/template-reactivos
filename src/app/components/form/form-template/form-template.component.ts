import { Component } from '@angular/core';

@Component({
  selector: 'app-form-template',
  templateUrl: './form-template.component.html',
  styleUrls: ['./form-template.component.css']
})
export class FormTemplateComponent {

  usuario = { cedula: '', nombre: '', fechanacimiento: '', ciudad: '' }
  registroForm: any;

  submitForm() {
    if(this) {
      alert('Formulario válido. Datos del usuario ' + this.usuario.nombre + ' guardados.');
    }
  }

  cancelarFormulario () {
    this.usuario = { cedula: '', nombre: '', fechanacimiento:'', ciudad:''};
  }
}
