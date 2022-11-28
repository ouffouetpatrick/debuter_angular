import { Router } from '@angular/router';
import { FaceSnapsServices } from './../services/face-snaps.services';
import { Component, OnInit, Input } from '@angular/core';
import { FaceSnap } from './models/face-snap.model';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss'],
})
export class FaceSnapComponent implements OnInit {
  @Input() faceSnap!: FaceSnap;
  buttonText!: string;

  constructor(private faceSnapsServices: FaceSnapsServices, //Injecter un service ici
              private router: Router
    ){}

  ngOnInit(){
    this.buttonText = 'Oh Snap!';
  }

  onSnap() {
    if(this.buttonText === 'Oh Snap!'){
      this.faceSnapsServices.snapFaceSnapById(this.faceSnap.id, 'snap');
      this.buttonText = "Oops, un Snap!";
    }else{
      this.faceSnapsServices.snapFaceSnapById(this.faceSnap.id, 'unsnap');
      this.buttonText = "Oh Snap!";
    }
  }

  onViewFaceSnap(){
    this.router.navigateByUrl(`facesnaps/${this.faceSnap.id}`);
  }
}
