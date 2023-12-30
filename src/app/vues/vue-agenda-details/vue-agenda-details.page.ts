import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { AgendaService } from 'src/app/service/agenda/agenda.service';

@Component({
  selector: 'app-vue-agenda-details',
  templateUrl: './vue-agenda-details.page.html',
  styleUrls: ['./vue-agenda-details.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule],
})
export class VueAgendaDetailsPage implements OnInit {
  public event!: any;
  public title: string = 'Evénement'
  constructor(
    private activatedRoute: ActivatedRoute,
    private agendaService: AgendaService
  ) {}

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((params) => {
      const id = Number(params.get('id'));
      if (id) {
        this.agendaService.getEventDetails(id).subscribe((event) => {
          console.log(event);

          this.event = event;
          this.title = event.title
        });
      }
    });
  }
}
