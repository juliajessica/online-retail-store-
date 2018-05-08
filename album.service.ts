import { Injectable } from '@angular/core';
import { Album } from './model/album.model';
import { ALBUMS } from './mock-album';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class AlbumService {
  albums: FirebaseListObservable<any[]>; //binding to a firebase array

  constructor(private database: AngularFireDatabase) {
    this.albums = database.list('albums');
  }
  getAlbums() {
    return this.albums;
  } //returns the list of imported ALBUMS

  addAlbum(newAlbum: Album){
    this.albums.push(newAlbum);
  }

  getAlbumsById(albumId: string){
    return this.database.object('albums/' + albumId);
    // for(let i=0; i<=ALBUMS.length - 1; i++) {
    //   if (ALBUMS[i].id === albumId){
    //     return ALBUMS[i];
    //   }
    // }
  }
  //returns a specific album

}
