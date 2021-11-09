import { Component, OnInit } from '@angular/core';
import { CursoServiceService } from './curso.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  cursos: string [] = [];


  constructor(private cursoService: CursoServiceService) {
    this.cursoService = cursoService;
   }

  ngOnInit(): void{
    this.cursos = this.cursoService.getCursos();
    this.cursoService.emitirCursoCriado.subscribe(
      (curso) => console.log(curso)
    );
  }

}
