import { FaceSnapsServices } from './../services/face-snaps.services';
import { FaceSnap } from './../face-snap/models/face-snap.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-face-snap-list',
  templateUrl: './face-snap-list.component.html',
  styleUrls: ['./face-snap-list.component.scss']
})
export class FaceSnapListComponent implements OnInit {

  faceSnaps!: FaceSnap[];

  constructor(private faceSnapsServices: FaceSnapsServices) { }

  ngOnInit(): void {
    //recuperer les données depuis le service à travers la
    //methode getAllFaceSnaps
    this.faceSnaps = this.faceSnapsServices.getAllFaceSnaps();
  }
}
