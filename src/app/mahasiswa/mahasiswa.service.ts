import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Mahasiswa } from './mahasiswa';

@Injectable()

export class MahasiswaService {

  constructor(private httpClient: HttpClient) { }

  simpanMa(mahasiswa: Mahasiswa, isEdit: boolean): Observable<any> {
    let url = 'savemahasiswajson';
    if (isEdit) {
      url = 'savemahasiswajson';
    }
    return this.httpClient.post(environment.baseUrl + url, mahasiswa);

  }

}
