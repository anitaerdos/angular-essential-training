import {Directive, HostBinding, HostListener, Input} from '@angular/core';

@Directive ({
    selector: '[mwFavorite]' // [] bcs we want the selector to find a match on an element attribute, selectors are similar to the construct of a css selector, mw->prefix
})
export class FavoriteDirective {
    @HostBinding('class.is-favorite') isFavorite = true; // host element that the directive is on
    //HostBinding is used to bind a host element property to a directive property, it takes in a string representing the property syntax
    //in our case -> to set a CSS class named is-favorite
    //class is referring to a native DOM property available on elements and HostBinding targets properties -> class.
    //isFavorite -> class property
    //HostBinding decorator is configuring this isFavorite property of the FavoriteDirective class to control whether or not the CSS class is-favorite gets put on the host element
        //which is the element that has this directive on it
    @HostBinding('class.is-favorite-hovering') hovering = false;
    @HostListener('mouseenter') onMouseEnter() {// we dont need the event emitted argument, angular works with native DOM events -> onmouseenter -> mouseenter
        this.hovering = true;
    }
    @HostListener('mouseleave') onMouseLeave() {
        this.hovering = false;
    }
    @Input() set mwFavorite(value) {
        this.isFavorite = value;
    } 
    // @Input can be used to decorate a class setter method
    // setter method is a way of defining a mehod -> called when a property with the same name is set to a value from an instance of the class
}