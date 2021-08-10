import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'; // browser based app -> include core directives, pipes and more for working with the DOM
import { AppComponent } from './app.component'; // first own component
@NgModule({ // NgModule decorator takes in a an object with some known properties to configure the class u decorate as an Angular module -> metadata
    imports: [ // used to bring in other Angular modules that our module will need
        BrowserModule
    ],
    declarations: [ // used to make components, directives, and pipes available to our module that dont come from another module
        AppComponent
    ],
    bootstrap: [ // used for a root module and let Angular know which component or components will be the starting point for the bootstrap process
        AppComponent
    ]
}) // no ; because it is not a statement -> piece of coda that will be applied to the class or in some case to a field or method that it comes before
export class AppModule { // NgModule followed by a class

} 