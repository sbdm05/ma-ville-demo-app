import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostsResolver } from '../resolvers/posts.resolver';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private route : ActivatedRoute) {


   }
  // rechercher par mot-clé dans les articles

  // rechercher par mot-clé dans les catégories

  ngOnInit(){
    // Accédez à la valeur résolue depuis ActivatedRoute
    const resolvedData = this.route.snapshot.data['posts'];

    // Utilisez la valeur résolue comme nécessaire
    console.log('Valeur résolue:', resolvedData);
  }




}
