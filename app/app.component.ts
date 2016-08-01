import { Component } from '@angular/core';

import { HighlightDirective } from './highlight.directive';

@Component({
    selector: 'app-directives',
    templateUrl: 'app/app.component.html',
    directives: [HighlightDirective]
})
export class AppComponent {

}
