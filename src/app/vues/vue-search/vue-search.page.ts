import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { HeaderPage } from 'src/app/components/header/header.page';
import { IonContent } from '@ionic/angular/standalone';
import { SearchInputPage } from 'src/app/components/search-input/search-input.page';
import { SearchService } from 'src/app/service/search/search.service';
import { ActivatedRoute } from '@angular/router';
import { ListPage } from 'src/app/components/list/list.page';
import { ExploreContainerComponent } from 'src/app/explore-container/explore-container.component';
import { IconPage } from 'src/app/components/icons/icon/icon.page';

@Component({
  selector: 'app-vue-search',
  templateUrl: './vue-search.page.html',
  styleUrls: ['./vue-search.page.scss'],
  standalone: true,
  imports: [
    HeaderPage,
    SearchInputPage,
    IonContent,
    CommonModule,
    FormsModule,
    ListPage,
    ExploreContainerComponent,
    IconPage
  ],
})
export class VueSearchPage implements OnInit {
  public savedData!: any[];
  public savedEvents!: any[];

  public returnedValue!: any[];
  public returnedEvents!: any[];

  public searchValue!: string;
  public noAnswer: boolean = false;
  constructor(
    private searchService: SearchService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {




    const resolvedData = this.route.snapshot.data['posts'];
    const resolvedEvents = this.route.snapshot.data['events'];

    this.savedData = resolvedData;
    this.savedEvents = resolvedEvents.events;

    // Utilisez la valeur résolue comme nécessaire
    console.log('Valeur résolue:', this.savedData);
    console.log('Events:', this.savedEvents);
  }

  ionViewDidEnter(){
    console.log('test depuis view');
    
  }

  onSubmit(input: string) {
    console.log(input, 'input dans vue search');
    this.searchValue = input;

    if (input.length === 0) {
      this.returnedValue = [];
      this.returnedEvents = [];
    } else {
      this.returnedValue = this.searchTerm(input.toLocaleLowerCase());
      this.returnedEvents = this.searchTermInEvent(input.toLocaleLowerCase());
    }
  }

  searchTermInEvent(term: string) {
    return this.savedEvents
      .filter((element) => {
        // Utilisez la logique de recherche spécifique ici
        // Dans cet exemple, nous recherchons si le terme est inclus dans l'élément
        return Object.values(element).some((value) => {
          if (typeof value === 'string') {
            return value.toLowerCase().includes(term);
          }
          this.noAnswer = true;
          return false;
        });
      })
      .map((element) => {
        // Construire l'objet résultant avec l'id et la propriété "content"
        return {
          id: element.id, // Remplacez 'id' par le nom de la propriété contenant l'id dans votre objet
          content: this.extractContext(element.description, term),
          title: element.title,
          type: 'événement'
        };
      });
  }

  searchTerm(term: string): any[] {
    // cherche le terme dans le tableau des articles
    return this.savedData
      .filter((element) => {
        // Utilisez la logique de recherche spécifique ici
        // Dans cet exemple, nous recherchons si le terme est inclus dans l'élément
        return Object.values(element).some((value) => {
          if (typeof value === 'string') {
            return value.toLowerCase().includes(term);
          }
          console.log('depuis no answer');
          this.noAnswer = true
          return false;
        });
      })
      .map((element) => {
        // Construire l'objet résultant avec l'id et la propriété "content"
        return {
          id: element.id, // Remplacez 'id' par le nom de la propriété contenant l'id dans votre objet
          content: this.extractContext(element.content, term),
          title: element.title,
          type: 'articles',
        };
      });
  }

  extractContext(content: string, term: string): string {
    // Supprimer les balises HTML et mettre en minuscules
    const plainText = content.replace(/<[^>]*>/g, '').toLowerCase();
    // Diviser le texte en mots
    const words = plainText.split(/\s+/);

    // Trouver l'index de chaque occurrence du terme
    const termIndexes = [];
    for (let i = 0; i < words.length; i++) {
      if (words[i].includes(term)) {
        termIndexes.push(i);
      }
    }

    // Filtrer les phrases contextuelles pour ne conserver que celles contenant le terme
    const contextPhrases = termIndexes
      .map((index) => {
        const start = Math.max(0, index - 3);
        const end = Math.min(words.length, index + 3 + 1);
        return words.slice(start, end).join(' ');
      })
      .filter((phrase) => phrase.toLowerCase().includes(term));

    // Retourner les phrases contextuelles
    return contextPhrases.join(' ');
  }


}
