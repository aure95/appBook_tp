import { Component,OnInit} from '@angular/core';

 interface Menu{

  nom:string;
  lien:string;

}


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})



export class MenuComponent implements OnInit {

  public listeMenu:Menu[]=[];



  constructor() {
    this.listeMenu.push({nom:"Livres",lien:"/books"});
    this.listeMenu.push({nom:"Auteur",lien:"/authors"});
    //console.log(this.listeMenu);}
}

ngOnInit() {
}

}
