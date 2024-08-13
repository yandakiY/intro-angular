import { Directive, HostListener } from "@angular/core";


@Directive({
    selector:'a[no-open]'
})
export class NoOpenDirective {

    @HostListener('click', ["$event"])
    onClickLinkGoogle(event: Event){
        console.log("Click sur lien google")
        event.preventDefault()
    }

};
