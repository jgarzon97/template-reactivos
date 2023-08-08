import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-reactivos',
  templateUrl: './form-reactivos.component.html',
  styleUrls: ['./form-reactivos.component.css']
})
export class FormReactivosComponent {

  registroForm!: FormGroup;
  usuario = { cedula: '', nombre: '', fechanacimiento: '', ciudad: '' }

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit () {
    this.registroForm = this.formBuilder.group({
      cedula: ['', Validators.required],
      nombre: ['', Validators.required],
      fechanacimiento: ['', Validators.required],
      ciudad: ['', Validators.required],
    });
  }

  submitForm () {
    if (this.registroForm.valid) {
      this.usuario = this.registroForm.value;
      alert('Formulario válido. Datos del usuario' + this.usuario.nombre + ' guardados.');
    }
  }

  cancelarFormulario () {
    this.usuario = { cedula: '', nombre: '', fechanacimiento:'', ciudad:''};
  }
}
