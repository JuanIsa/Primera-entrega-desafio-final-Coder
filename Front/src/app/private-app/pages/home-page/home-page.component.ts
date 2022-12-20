import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Products } from 'src/app/interfaces/products';
import { AuthService } from 'src/app/services/auth.service';
import { FecthproductsService } from 'src/app/services/fecthproducts.service';

@Component({
  selector: 'front-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  constructor(private auths: AuthService, private dataProductsSvs: FecthproductsService, private router: Router) { }
  public administrador: boolean | undefined;
  public listOfProducts?: Products[];

  ngOnInit(): void {
    this.administrador = this.auths.administrador;
    this.dataProductsSvs.getProducts().subscribe({
      next: (data) => {
        this.listOfProducts = data;
      },
      error: (error) => console.log(error)
    })
  }
  
  goCart() {
    this.router.navigate(['home/carrito']);
  }
  userSelect() {
    this.auths.administrador = !this.auths.administrador;
    this.administrador = this.auths.administrador;
  }
}
