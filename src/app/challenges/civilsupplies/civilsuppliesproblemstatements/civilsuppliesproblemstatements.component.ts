import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-civilsuppliesproblemstatements',
  templateUrl: './civilsuppliesproblemstatements.component.html',
  styleUrls: ['./civilsuppliesproblemstatements.component.css']
})
export class CivilsuppliesproblemstatementsComponent {

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
        if(segs['routerEvent']['url'] == '/challenges/civilsupplies/problemstatements'){
          this.routeClass = true;
        }
        else{
          this.routeClass = false;
        }
      });
    
  }
  apply(event: any){
    console.warn('event', event)
    this.router.navigate(['/challenges/civilsupplies/problemstatements/', event])
  }

}
