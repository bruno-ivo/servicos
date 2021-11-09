import { EventEmitter, Injectable } from '@angular/core';
import { LogService } from '../shared/log.service';

@Injectable({
  providedIn: 'root'
})
export class CursoServiceService {

  emitirCursoCriado = new EventEmitter<string>();

  private cursos: string[] = ['Angular 2', 'Java', 'Phonegap'];

  getCursos(){
    this.logService.consoleLog('Obtendo Lista de cursos');
      return this.cursos;
  }

  constructor(private logService: LogService) {
    console.log('CursoServiceService');
   }

   addCurso(curso: string){
     this.logService.consoleLog(`Criando novo curso ${curso}`);
     this.cursos.push(curso);
     this.emitirCursoCriado.emit(curso);
   }
}
