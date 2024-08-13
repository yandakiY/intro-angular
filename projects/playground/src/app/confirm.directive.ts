import { Directive, HostListener, Input } from "@angular/core";

@Directive({
    selector:'a[confirm]',
})
export class ConfirmDirective {
    
    @Input("confirm-message")
    message = "Default message"

    @HostListener("click")
    onClickConfirm() : boolean {
        console.log("click on link to confirm")
        console.log(this.message)

        return window.confirm(this.message)
        
    }
};
