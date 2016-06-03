import {Component} from 'angular2/core';
import {PropertyBindingComponent} from "./property-binding-component"; 

@Component({ 

selector: 'app', 
template: `

<section class="parent">
    <h1>parent component</h1>
    <h4>please enter your name</h4>
    <input type="text" [(ngModel)]="name">
    <br><br>
    <section class="child">

        <my-property-binding [myName]="name" [myAge]='35' (hobbiesChanged)='hobbies = $event'></my-property-binding>

    </section>

<h4>My hobbies are {{hobbies}}</h4>

</section>
`, 

directives: [PropertyBindingComponent] })

export class AppComponent {
name = '';
hobbies = '';

}
