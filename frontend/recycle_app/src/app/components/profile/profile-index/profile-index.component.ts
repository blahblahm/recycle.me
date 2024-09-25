import { Component } from '@angular/core'
import { NewsService } from 'src/app/services/news.service'

@Component({
  selector: 'profile-index',
  templateUrl: './profile-index.component.html',
  styleUrls: ['./profile-index_styles/profile-index.component.scss'],
})
export class ProfileIndexComponent {
  constructor(public newsService: NewsService) {}

  ngOnInit() {
    this.newsService.getNews()
  }
}
