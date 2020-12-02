import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: [
  ]
})
export class SearchComponent{

  artistas: any[] = [];
  constructor(private spotify: SpotifyService) { }

  buscar(texto: string){
    console.log(texto);
    this.spotify.getArtistas(texto)
    .subscribe( (data:any) =>{
      this.artistas = data;
    });

  }

}
