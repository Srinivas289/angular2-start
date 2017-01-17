import { Component} from '@angular/core'
@Component({
    template:`<h1>Welcome to {{ courseName }} demo.</h1>`
})
export class WelcomeComponent
{
    courseName:string = 'Angular 1';
}