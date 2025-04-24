import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cyber-problem-statementstwo',
  templateUrl: './cyber-problem-statementstwo.component.html',
  styleUrls: ['./cyber-problem-statementstwo.component.css']
})
export class CyberProblemStatementstwoComponent {
  routeClass: boolean = false;
  constructor(private router: Router, private route: ActivatedRoute) {

   }


  ngOnInit(): void {

    // this.route.params.subscribe(
    //   params => {
    //   console.warn('route', this.route)
    //   }
    //   );

      this.router.events.subscribe((segs: any) => {
        if(segs['routerEvent']['url'] == '/challenges/cybersecurity/problemstatements'){
          this.routeClass = true;
        }
        else{
          this.routeClass = false;
        }
      });
    
  }
  apply(event: any){
    console.warn('event', event)
    this.router.navigate(['/cybersecurity/problemstatements/', event])
  }
}
