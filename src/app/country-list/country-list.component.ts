import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';

export interface Country {
  flag: string;
  name: string;
  population: number;
  region: string;
}

@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.scss']
})
export class CountryListComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['flag', 'name', 'population', 'region'];
  dataSource = new MatTableDataSource<Country>();
  
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private _http: HttpService, private router: Router) {}

  ngOnInit() {
    this._http.getCountries().subscribe((data: Country[]) => {
      this.dataSource.data = data as Country[]
    });
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  public applyFilter = (value: string) => {
    this.dataSource.filter = value.trim().toLocaleLowerCase();
  }

  getRecord(row: Country[]) {
    console.log(row);
  }

  goToDetail(name: string) {
    let url: string = `/country/details/${name}`;
    this.router.navigate([url]);
  }
}
