import {
  ChangeDetectorRef,
  Component, DoCheck,
  HostListener,
} from "@angular/core";

@Component({
  selector: 'app-resize-box',
  templateUrl: './resize-box.component.html',
  styleUrls: ['./resize-box.component.scss']
})

export class ResizeBoxComponent implements DoCheck{

  width = 100
  height = 100
  left = 100
  top = 100

  minWidth = 100
  minHeight = 100

  isDownMouse = false

  constructor(private ref: ChangeDetectorRef) {
    //this.ref.detach();
  }

  ngDoCheck() {
    //console.log('check')
  }


  @HostListener('document:mousemove', ['$event'])
  mouseMove(event: MouseEvent) {
    if (this.isDownMouse) {
      const newWidth = event.clientX - this.left
      const newHeight = event.clientY - (this.top + window.innerHeight / 10)

      this.width = newWidth < this.minWidth ? this.minWidth : newWidth
      this.height = newHeight < this.minHeight ? this.minHeight : newHeight
    }
  }

  mouseDown() {
    this.isDownMouse = true
  }

  @HostListener('document:mouseup')
  mouseUp() {
    this.isDownMouse = false
  }
}
