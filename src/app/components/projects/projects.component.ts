import { Component } from '@angular/core';

export interface Tools {
  name:string;
}
@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent {

  allProjectTool: Tools[] = [
    {
      name: 'Angular',
    },
    {
      name: 'Angular Material',
    },
    {
      name: 'Bootstrap',
    },
    {
      name: 'Ngx Spinner',
    },
    {
      name: 'Ngx Toastr',
    },
    {
      name: 'Reactive Forms',
    },
    {
      name: 'Rxjs',
    },
    {
      name: 'Git',
    },
    {
      name: 'GitHub',
    },

  ];

  quizPoject: Tools[] = [
   
    {
      name: 'Mat Stepper',
    }

  ];

  hotelProject: Tools[] = [
    {
      name: 'Stripe',
    },
    {
      name: 'Charts Js',
    },
    {
      name: 'Ngx Translate',
    },
    {
      name: 'Ngx Owl Carousel',
    },
    {
      name: 'Ngx Dropzone',
    },
    {
      name: 'Ngx File Drop',
    },
    {
      name: 'Mat Stepper',
    },

  ];

  projectSystem: Tools[] = [
 
    {
      name: 'Angular Drag-drop',
    },
    
    {
      name: 'Jwt Decode',
    },
    {
      name: 'Charts Js',
    }
    ,
    {
      name: 'Ngx File Drop',
    },
  
   
  ];

  foodProject: Tools[] = [
    {
      name: 'Jwt Decode',
    }
    ,
    {
      name: 'Ngx File Drop',
    },
  ];
  

  freshCartProject: Tools[] = [
 
    {
      name: 'Ngx Pagination',
    },
    {
      name: 'Jwt Decode',
    }
    ,
    {
      name: 'Ngx Owl Carousel',
    },
    {
      name: 'Stripe',
    },
   
  ];

}
