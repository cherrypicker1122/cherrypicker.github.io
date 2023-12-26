import { Component } from '@angular/core';
import { DailyModel } from './daily-list.model';

@Component({
  selector: 'app-daily-list',
  templateUrl: './daily-list.component.html',
  styleUrls: ['./daily-list.component.scss']
})
export class DailyListComponent {

  dailyList : Array<DailyModel> = [
    {
      color : "projcard projcard-blue",
      img: "https://th.bing.com/th/id/OIP.Q9KUnLeSoZxUv2U7jvL2vQHaHa?rs=1&pid=ImgDetMain", // https://picsum.photos/800/600?image=1041
      title: "20231224",
      subtitle: "",
      description: "이번 한 해 정말 많은 일이 있었지 \n \
      그래도 몸이 많이 나아져서 2024년 부터는 \n \
      더 이상 지긋지긋하게 맞던 주사도 안 맞아도 되고 병원도 안 다녀도 된다 \n \
      나한테 주어진 시간이 얼마 안남았으니까 \n \
      열심히 살자  \n \
      근데 프론트 앤드는 하기도 싫고 배우기도 싫다",
      tagList : [],
      dayago: "1 days ago"
    },
    {
      color : "projcard projcard-red",
      img: "https://th.bing.com/th/id/OIP.Q9KUnLeSoZxUv2U7jvL2vQHaHa?rs=1&pid=ImgDetMain", //https://picsum.photos/800/600?image=1080
      title: "20231218",
      subtitle: "",
      description: "조금 더 나아질 수 있을까 \n \
      탈출 할 수 있을까",
      tagList : [],
      dayago: "12 days ago"
    }
  ]
  
}
