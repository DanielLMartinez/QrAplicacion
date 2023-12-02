import { Injectable } from '@angular/core';
import { getFirestore, collection, doc, setDoc } from 'firebase/firestore';

@Injectable({
  providedIn: 'root',
})
export class FirebaseService {
  private db = getFirestore();

  addRegistro(idUnico: string, idClase: string, ingresaSeccion: string) {
    const nuevoDocumento = doc(collection(this.db, 'registros'), idUnico);

    return setDoc(nuevoDocumento, {
      'ID Clase': idClase,
      'Ingresa Seccion': ingresaSeccion,
    });
  }
  addPerfil(idUnico: string,nombreCom: string, email: string, fono: number) {
    const nuevoDocumento = doc(collection(this.db, 'Perfil'), idUnico);

    return setDoc(nuevoDocumento, {
      'Nombre Completo': nombreCom,
      'Correo': email,
      'Télefono' : fono,
    });
  }

  addRegistroAlumno(idUsuario: string, idClase: string, ingresaSeccion: string) {

    const idUnicoAlumno = this.generarIdUnico();
    const referenciaDocumento = doc(collection(this.db, 'registros', idUsuario, 'alumnos'), idUnicoAlumno);

    return setDoc(referenciaDocumento, {
      'ID Clase': idClase,
      'Ingresa Seccion': ingresaSeccion,
    });
  }

  private generarIdUnico(): string {
    const firestore = getFirestore();
    const id = doc(collection(firestore, 'dummy')).id;
    return id;
  }
}