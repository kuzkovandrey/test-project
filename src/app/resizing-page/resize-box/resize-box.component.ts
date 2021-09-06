import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component, DoCheck,
  ElementRef,
  HostListener, OnInit,
  ViewChild,
} from "@angular/core";

@Component({
  selector: 'app-resize-box',
  templateUrl: './resize-box.component.html',
  styleUrls: ['./resize-box.component.scss']
})

export class ResizeBoxComponent implements OnInit,
                                           DoCheck,
                                           AfterContentInit,
                                           AfterContentChecked,
                                           AfterViewInit,
                                           AfterViewChecked {

  @ViewChild('box') box!: ElementRef

  width = 100
  height = 100
  left = 100
  top = 100

  minWidth = 100
  minHeight = 100

  isDownMouse = false

  ngOnInit() {
    console.log(`[OnInit] width: ${this.width}, height: ${this.height}`)
  }

  ngDoCheck() {
    console.log(`[DoCheck] width: ${this.width}, height: ${this.height}`)
  }

  ngAfterContentInit() {
    console.log(`[AfterContentInit]`)
  }

  ngAfterContentChecked() {
    console.log(`[AfterContentChecked]`)
  }

  ngAfterViewInit() {
    console.log(`[AfterViewInit]`)
  }

  ngAfterViewChecked() {
    console.log('[AfterViewChecked]')
  }

  @HostListener('pointermove', ['$event'])
  mouseMove(event: PointerEvent) {
    if (this.isDownMouse) {

      const newWidth = event.pageX - this.left
      const newHeight = event.pageY - this.top - window.innerHeight / 10

      this.width = newWidth < this.minWidth ? this.minWidth : newWidth
      this.height = newHeight < this.minHeight ? this.minHeight : newHeight
    }
  }

  mouseDown(event: PointerEvent) {
    this.isDownMouse = true
    this.box.nativeElement.setPointerCapture(event.pointerId)
  }

  @HostListener('document:pointerup')
  mouseUp() {
    this.isDownMouse = false
  }
}
