import { FaceSnap } from './../face-snap/models/face-snap.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FaceSnapsServices } from '../services/face-snaps.services';

@Component({
  selector: 'app-single-face-snap',
  templateUrl: './single-face-snap.component.html',
  styleUrls: ['./single-face-snap.component.scss']
})
export class SingleFaceSnapComponent implements OnInit {

  faceSnap!: FaceSnap;
  buttonText!: string;

  constructor(private faceSnapsServices: FaceSnapsServices,
              private route: ActivatedRoute
    ){}

  ngOnInit(){
    this.buttonText = 'Oh Snap!';
    const FaceSnapId = +this.route.snapshot.params['id'];
    this.faceSnap = this.faceSnapsServices.getFaceSnapById(FaceSnapId);
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
}
