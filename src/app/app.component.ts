import { style } from '@angular/animations';
import { Component } from '@angular/core';

@Component({ // minimum 2 metadata property: selector and template or template url
    selector: 'mw-app', // angular will use to locate a custom html element and apply the component to -> at least one dash(-) between
    /* template: // for template we use html code in single quotes
    ` 
        <h1>My App</h1>
        <p>Keeping track of the media I want to watch</p>
    ` */
    templateUrl: './app.component.html', // use file as a template, relative path is good
    /* styles: // set style for the code
        [` 
            h1 { color: #ffffff; }
            .description {
                font-style: italic;
                color: green;
            }
        `], */
    styleUrls: ['./app.component.css'] // accept an array of strings
})
export class AppComponent {}