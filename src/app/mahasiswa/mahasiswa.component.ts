import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Mahasiswa } from './mahasiswa';
import { MahasiswaService } from './mahasiswa.service';

@Component({
  selector: 'app-mahasiswa',
  templateUrl: './mahasiswa.component.html',
  providers: [MahasiswaService]
})

export class MahasiswaComponent implements OnInit {

  namaMhs = '';

  id!: string;

  mahasiswaForm!: FormGroup;

  constructor(private mahasiswaService: MahasiswaService, private route: ActivatedRoute) {
    this.mahasiswaForm = new FormGroup({
      namaId: new FormControl(null, [Validators.required]),
      nimId: new FormControl(undefined || null)
    });
  }

  ngOnInit(): void {
    this.route.params.subscribe(rute => {
      this.id = rute.id;
      console.log(" id " + this.id);
      if (this.id) {
        this.mahasiswaService.getMahasiswa(this.id).subscribe(hasil => {
          if (hasil) {
            this.mahasiswaForm.get('namaId')?.setValue(hasil.namaId);
            this.mahasiswaForm.get('nimId')?.setValue(hasil.nimId);
          }
        });
      }
    }
    );
  }

  simpan() {
    if (this.mahasiswaForm?.valid) {
      const mahasiswa = new Mahasiswa();
      mahasiswa.namaId = this.mahasiswaForm?.controls.namaId.value;
      mahasiswa.nimId = this.mahasiswaForm?.controls.nimId.value;
      console.log(mahasiswa);
      this.mahasiswaService.simpanMa(mahasiswa, false).subscribe(
        hasil => {
          console.log(hasil);
          alert("Simpan Berhasil!");
        }, error => {
          console.log(error);
          alert("Simpan Gagal!");
        }
      );
      console.log("Nim : " + this.mahasiswaForm?.controls.nimId.value + " || Nama: " + this.mahasiswaForm?.controls.namaId.value);
    } else {
      alert('Wajib diisi!')
    }
  }

}
