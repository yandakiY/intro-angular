import { Directive, ElementRef, HostListener } from "@angular/core";

@Directive({
    selector:'p[highlight]'
})
export class HighLightDirective{
    constructor(private elementRef: ElementRef<HTMLElement>) {
        
    }

    @HostListener('click' , ['$event.clientX', '$event.clientY'])
    onMouseEnter(clientX: number, clientY: number){
        console.log("On est entrer en position X : ", clientX , " position Y :", clientY)
    }
}