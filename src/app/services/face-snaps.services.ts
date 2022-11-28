import { FaceSnap } from './../face-snap/models/face-snap.model';
import { Injectable } from "@angular/core";

@Injectable({
  //permet d'enregistere le service à la racine de l'App
  //afin d'être utiliser partout
  providedIn: 'root'
})
export class FaceSnapsServices {
  faceSnaps: FaceSnap[] = [
    {
      id:1,
      title: 'Une Poupée',
      description: 'Le jouet que tous les enfants aiment',
      imageUrl: 'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
      createDate: new Date(),
      snaps: 900
    },
    {
      id:2,
      title: 'La Girafe',
      description: 'Le plus grand des animaux',
      imageUrl: 'https://static.hitek.fr/img/42/ill_m/1262881986/animauxtetechat.webp',
      createDate: new Date(),
      snaps: 0,
      location: 'Paris'
    },
    {
      id:3,
      title: 'Zebre',
      description: "L'animal multicolore",
      imageUrl: 'https://static1.magazine.ribambel.com/articles/0/22/30/@/30613-decouvrez-en-famille-les-animaux-qui-ne-v2_article_big-5.jpg',
      createDate: new Date(),
      snaps: 500
    },
    {
      id:4,
      title: 'Ours polaire',
      description: 'Le cri effryant',
      imageUrl: 'https://cdn.futura-sciences.com/cdn-cgi/image/width=1520,quality=50,format=auto/sources/images/diaporama/1238-juveniles/album-faune-juvenile3.jpg',
      createDate: new Date(),
      snaps: 25,
      location: 'Abidjan',
    },
    {
      id:5,
      title: 'Une Poupé',
      description: 'Le jouet que tous les enfants aiment',
      imageUrl: 'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
      createDate: new Date(),
      snaps: 350
    },
    {
      id:6,
      title: 'La Girafe',
      description: 'Le plus grand des animaux',
      imageUrl: 'https://static.hitek.fr/img/42/ill_m/1262881986/animauxtetechat.webp',
      createDate: new Date(),
      snaps: 80,
      location: 'Paris'
    },
    {
      id:7,
      title: 'Zebre',
      description: "L'animal multicolore",
      imageUrl: 'https://static1.magazine.ribambel.com/articles/0/22/30/@/30613-decouvrez-en-famille-les-animaux-qui-ne-v2_article_big-5.jpg',
      createDate: new Date(),
      snaps: 740
    },
    {
      id:8,
      title: 'Ours polaire',
      description: 'Le cri effryant',
      imageUrl: 'https://cdn.futura-sciences.com/cdn-cgi/image/width=1520,quality=50,format=auto/sources/images/diaporama/1238-juveniles/album-faune-juvenile3.jpg',
      createDate: new Date(),
      snaps: 250,
      location: 'Abidjan',
    }
  ];

  //Methode pour retouner les données aux components
  getAllFaceSnaps(): FaceSnap[] {
    return this.faceSnaps;
  }

  //Methode pour recuperer l'id du snap et faire l'action d'incrementation ou decrementer
  //au clique sur le bouton "oh snap"
  getFaceSnapById(faceSnapId: number): FaceSnap {
    const faceSnap = this.faceSnaps.find(faceSnap => faceSnap.id === faceSnapId);
    if (!faceSnap) {
        throw new Error('FaceSnap not found!');
    } else {
        return faceSnap;
    }
  }

  //utiliser un litteral type pour determiner le type de snap
  //et faire l'incrementation ou decrementation en fonction
  snapFaceSnapById(faceSnapId: number, snapType: 'snap' | 'unsnap'): void {
    const faceSnap = this.getFaceSnapById(faceSnapId);
    snapType === 'snap' ? faceSnap.snaps++ : faceSnap.snaps--;
  }
}
