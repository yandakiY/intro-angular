import { Directive, ElementRef, HostBinding, HostListener, Input } from "@angular/core";

@Directive({
    selector:'p[highlight]'
})
export class HighLightDirective{
    
    @HostBinding('style.backgroundColor')
    color = 'transparent'

    ngOnInit(){
        this.color = this.valueBgColor
    }

    @Input("background-color")
    valueBgColor = 'maroon'

    @Input("output-color")
    outputColor = 'transparent'

    @HostListener('mouseenter' , ['$event.target'])
    onMouseEnter(element: HTMLElement){
        this.color = this.valueBgColor
    }

    @HostListener('mouseout', ['$event.target'])
    onmouseout(element: HTMLElement){
        this.color = this.outputColor
    }
}