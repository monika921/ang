import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-factors',
  templateUrl: './factors.component.html',
  styleUrls: ['./factors.component.css']
})
export class FactorsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  title = 'Blog';
  factors=[
    {
      c1: 'Risk factors can influence an individuals exposure or response to a causative agent.',
      c2: 'Risk factors in the perinatal period include pregnancy-related complications.',
      c3: 'Factors in the environment and external to the food, which affect both the microorganisms and the food itself during processing and storage.',
      c4: 'Major current environmental issues may include climate change, pollution, environmental degradation, and resource depletion.',
      c5: 'A behavioral vaccine is a repeated simple behavior that reduces morbidity or mortality and increases wellbeing',
      c6: 'Nutritional risk factors, which are extrinsic factors that influence nutritional status include multiple medications, social isolation',
      c7: 'Read more about vaccines on the Official Vaccines page from the World Health Organization',
      c8: 'Key factor in ensuring vaccination',
    },
  ]    
}
