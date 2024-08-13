import { Component, Directive, HostListener, Input } from "@angular/core";

@Component({
    selector:'div[user-profil]',
    template: `
        <div>
            <img [src]="image" alt="">
            <h3 [class.hired]="isHired" [class.fired]="!isHired">{{firstName | uppercase}} {{lastName | uppercase}} </h3>
            Job : <strong> {{job}} ({{revenue | currency : 'EUR':'symbol'}} / mois) </strong>
            <button (onClick)="clickHired()" [class]="!isHired ? 'hired' : 'fired'" > {{isHired ? "Virer" : "Embaucher"}}</button>
        </div>
    `,
    styles:[
        `
            h3{
                color:silver
            }
            .hired{
                background-color:green
            }
            .fired{
                background-color:red
            }
        `
    ]
})

export class UserProfileComponent {
    
    @Input("first-name")
    firstName = ""

    @Input("last-name")
    lastName = ""

    @Input("job")
    job = ""

    @Input("revenue")
    revenue = ""

    @Input("hired")
    isHired = false

    image = "https://via.placeholder.com/23"

    @HostListener('click')
    clickUserProfil(){
        console.log("Click on user-profil", this.firstName)
    }

    @HostListener('click')
    clickHired(){
        this.isHired = !this.isHired
    }

};
