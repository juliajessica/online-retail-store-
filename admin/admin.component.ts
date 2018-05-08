import { Component, OnInit } from '@angular/core';
import { AlbumService } from '../album.service';
import { Album } from '../model/album.model';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private albumService: AlbumService) {}

  ngOnInit() {
  }

  submitForm(title: string, artist: string, description: string){
    let newAlbum: Album = new Album(title, artist, description); //submit form creates a new instance of album for the newly added item
    console.log(newAlbum);
    this.albumService.addAlbum(newAlbum);
  }

}
