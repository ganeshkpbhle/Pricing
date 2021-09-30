import { Component } from '@angular/core';
import { CardtemplateComponent } from './cardtemplate/cardtemplate.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  cards=[{
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
  },

  {
    title:"PLUS",
    money:9,
    users:{
      noOf:"5 Users",
      textMute:false,
      strng:true
    },
    storage:{
      gb:"50GB Storage",
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
      textMute:false
    },
    support:{
      text:"Dedicated Phone Support",
      textMute:false
    },
    subdomain:{
      spec:" ",
      type:"Free Subdomain",
      textMute:false
    },
    report:{
      text:"Monthly Status Reports",
      textMute:true
    }
  },

  {
    title:"PRO",
    money:49,
    users:{
      noOf:"Unlimited Users",
      textMute:false,
      strng:true
    },
    storage:{
      gb:"150GB Storage",
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
      textMute:false
    },
    support:{
      text:"Dedicated Phone Support",
      textMute:false
    },
    subdomain:{
      spec:"Unlimited ",
      type:"Free Subdomians",
      textMute:false
    },
    report:{
      text:"Monthly Status Reports",
      textMute:false
    }
  }
  ];
}
