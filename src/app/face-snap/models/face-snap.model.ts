//Creation de class personnalisée 1

// export class FaceSnap {
//     title: string;
//     description: string;
//     imageUrl: string;
//     createDate: Date;
//     snaps: number;

//     constructor(title: string, description: string, imageUrl: string, createDate: Date, snaps: number){
//         this.title = title;
//         this.description = description;
//         this.imageUrl = imageUrl;
//         this.createDate = createDate;
//         this.snaps = snaps;
//     }
// }


// Creation de class personnalisée 2
// Ajout de proprietés personnalisées
// Créer une class qui a les propriétés qu'on passe comme arguments
// Au constructeur.

// export class FaceSnap {
//     constructor(public title: string,
//                 public description: string,
//                 public imageUrl: string,
//                 public createDate: Date,
//                 public snaps: number){
//     }
// }

/**
 * Creation de class personnalisée 3
 * class sans constructeur, on fera l'initiation
 * en ecrivant le nom de la propriété avant la valeur
 * location? est optionel
 * ex : title = "mon titre,"
*/
export class FaceSnap {
    id!: number;
    title!: string;
    description!: string;
    imageUrl!: string;
    createDate!: Date;
    snaps!: number;
    location?: string;
}
