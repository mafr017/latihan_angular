import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Mahasiswa } from './mahasiswa';
import { map } from 'rxjs/operators';

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

  getMahasiswa(id: string): Observable<any> {
    return this.httpClient.get(environment.baseUrl + 'datamahasiswa/' + id)
      .pipe(map(data => data));
  }

}
