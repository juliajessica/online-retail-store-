import { Component, OnInit } from '@angular/core';
import { Album } from '../model/album.model';
import { Router } from '@angular/router';
import { AlbumService } from '../album.service';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-marketplace',
  templateUrl: './marketplace.component.html',
  styleUrls: ['./marketplace.component.css'],
  providers: [AlbumService]
})
export class MarketplaceComponent implements OnInit {
  albums: FirebaseListObservable<any[]>; //returns the firstbase array

  constructor(
    private router: Router,
    private albumService: AlbumService) {}
  //passing AlbumService as an instance so MarketPlace can use it

  ngOnInit(){
    this.albums = this.albumService.getAlbums();
  } //use this when you want something to automoatically load

  goToDetailPage(clickedAlbum){
    this.router.navigate(['albums', clickedAlbum.$key]);
  };
  //These arguments are used to construct the URL to our route. 'albums' refers to the first portion of the route's path. clickedAlbum.id refers to the dynamic segment of the path. If clickedAlbum.id is 37, this would create a route path of albums/37.
}
