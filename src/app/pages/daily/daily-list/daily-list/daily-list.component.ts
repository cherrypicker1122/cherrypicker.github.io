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
      img: "https://th.bing.com/th/id/OIP.4TmWsjC7iC0WK27mxTGbOgHaEK?rs=1&pid=ImgDetMain", // https://picsum.photos/800/600?image=1041
      title: "20240309",
      subtitle: "",
      description: `되돌아 보니 부끄럽고 창피하다

      세상 사람들 다 아는데
      나만 모르는 것 같다
      
      말을 해도 귀 기울여주지 않는다
      나조차도 나 같은 사람에게 관심이 없다<p>
      세상 사람들 다 아는데<br/>
      나만 모르는 것 같다<br/>
      그치만 내가 할 줄 아는 게 이것 밖에 없으니까<br/>
      썩은 나무 인줄 알지만<br/>
      나도 알지만 썩은 나무 밟는 거 밖에 못해<br/>
      </p>
      누가 알아주길 바라는 마음이 얼마나 부질없고 쓸데없는 환상인지
      
      그럼에도 내가 할 줄 아는 게 이것 밖에 없으니까
      썩은 나무 인줄 알면서도 조금이라도 발 내딛을 수밖에 없다
      `,
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

