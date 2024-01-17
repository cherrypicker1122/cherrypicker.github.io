import { Component, OnInit } from '@angular/core';
import { DailyModel } from './daily-list.model';

@Component({
  selector: 'app-daily-list',
  templateUrl: './daily-list.component.html',
  styleUrls: ['./daily-list.component.scss']
})
export class DailyListComponent implements OnInit {

  dailyList : Array<DailyModel> = [
    {
      img: "https://picsum.photos/800/600?image=1041", 
      title: "20240117",
      subtitle: "",
      description: "TEST",
      tagList : [],
      date : new Date(),
      dayago: ""
    },
    {
      img: "https://th.bing.com/th/id/OIP.4TmWsjC7iC0WK27mxTGbOgHaEK?rs=1&pid=ImgDetMain", // https://picsum.photos/800/600?image=1041
      title: "20240102",
      subtitle: "",
      description: "가는 길이 통째로 잘못된 것 같다. 정신없이 왔는데 결국 아무 것도 남지 않았다. \n \
          부끄럽다. \n \
          무엇이 어디서부터 잘못되었을까 ",
      tagList : [],
      date : new Date(),
      dayago: ""
    },
    {
      img: "https://th.bing.com/th/id/OIP.4TmWsjC7iC0WK27mxTGbOgHaEK?rs=1&pid=ImgDetMain", // https://picsum.photos/800/600?image=1041
      title: "20231224",
      subtitle: "",
      description: "이번 한 해 정말 많은 일이 있었지 \n \
      그래도 몸이 많이 나아져서 2024년 부터는 \n \
      더 이상 지긋지긋하게 맞던 주사도 안 맞아도 되고 병원도 안 다녀도 된다 \n \
      나한테 주어진 시간이 얼마 안 남았으니까 \n \
      열심히 살자  \n \
      근데 프론트 앤드는 하기도 싫고 배우기도 싫다",
      tagList : [],
      date : new Date('2023-12-24'),
      dayago: ""
    },
    {
      img: "https://th.bing.com/th/id/OIP.4TmWsjC7iC0WK27mxTGbOgHaEK?rs=1&pid=ImgDetMain", //https://picsum.photos/800/600?image=1080
      title: "20231218",
      subtitle: "",
      description: "조금 더 나아질 수 있을까 \n \
      탈출 할 수 있을까",
      tagList : [],
      date : new Date('2023-12-18'),
      dayago: ""
    }
  ]

  ngOnInit() {

    for(var daily of this.dailyList){
      daily.dayago = this.getDaysAgo(daily.date) + " days ago";
    }
  }

  getDaysAgo(date: Date){
    return String(Math.round((+new Date() - +date) / (1000 * 3600 * 24))); 
  }
  
}
function moment(arg0: string): any {
  throw new Error('Function not implemented.');
}

