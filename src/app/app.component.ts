import { Component, OnInit } from '@angular/core';
import { GetserviceService } from './getservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  mdata;
  rdata: any;
  constructor(private S:GetserviceService) { }
  ngOnInit()
  {
   this.getdetails();
   setInterval(()=>this.getdetails(),10000)
  }
  getdetails()
  {
    return this.S.get().subscribe(res=>{console.log(res)
    this.mdata=res['hits']})
  }
  click(x)
  {
this.rdata=x;
  }
}
