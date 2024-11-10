import { Component , OnInit} from '@angular/core';
import { CommentService } from '../comment.service';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrl: './comment.component.css'
})
export class CommentComponent implements OnInit {
  comments: any[] = []; // Pour stocker les commentaires
  newComment: string = ''; // Pour stocker le contenu du nouveau commentaire
  stars: number = 0; // Pour stocker le nombre d'étoiles

  constructor(private commentService: CommentService) {}

  ngOnInit(): void {
    this.loadComments(); // Chargez les commentaires au démarrage
  }

  // Méthode pour charger les commentaires
  loadComments(): void {
    this.commentService.getComments().subscribe(
      (data: any[]) => {
        this.comments = data; // Assignez les données à la variable de commentaires
      },
      (error) => {
      }
    );
  }

  // Méthode pour ajouter un commentaire
  addComment(): void {
    if (this.newComment.trim() === '' || this.stars < 1 || this.stars > 5) {
      alert('Veuillez entrer un commentaire valide et choisir un nombre d\'étoiles entre 1 et 5.');
      return;
    }

    this.commentService.addComment(this.newComment, this.stars).subscribe(
      (response) => {
        this.newComment = ''; // Réinitialisez le champ de commentaire
        this.stars = 0; // Réinitialisez le nombre d'étoiles
        this.loadComments(); // Rechargez les commentaires après ajout
      },
      (error) => {
      }
    );
  }
}
