import { Component,Input,OnInit} from '@angular/core';

@Component({
  selector: 'app-cardtemplate',
  templateUrl: './cardtemplate.component.html',
  styleUrls: ['./cardtemplate.component.css']
})
export class CardtemplateComponent implements OnInit {
  @Input() myData={
    title:"FREE",
    money:0,
    users:{
      noOf:"Single User",
      textMute:false,
      strng:false
    },
    storage:{
      gb:"5GB Storage",
      textMute:false
    },
    publicProjecs:{
      limit:"Unlimited Public Projects",
      textMute:false
    },
    Access:{
      text:"Community Access",
      textMute:false
    },
    privateProjects:{
      text:"Unlimited Private Projects",
      textMute:true
    },
    support:{
      text:"Dedicated Phone Support",
      textMute:true
    },
    subdomain:{
      spec:" ",
      type:"Free Subdomain",
      textMute:true
    },
    report:{
      text:"Monthly Status Reports",
      textMute:true
    }
  };
  constructor() {}
  ngOnInit(): void {
  }
}
