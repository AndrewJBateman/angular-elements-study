import {
  Component,
  EventEmitter,
  Output,
  OnInit,
  Input,
  ElementRef,
  HostListener,
  ChangeDetectorRef,
  ChangeDetectionStrategy,
  ViewEncapsulation
} from '@angular/core';

@Component({
  selector: 'img-lazy',
  templateUrl: './img-lazy.component.html',
  styleUrls: ['./img-lazy.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.ShadowDom
})
export class ImgLazyComponent implements OnInit {
  @Input() src;
  @Input() alt;

  // external event isVisible
  @Output() isVisible = new EventEmitter();

  // Immutable object, only modify with setState
  state = {
    visible: false,
    loaded: false
  };

  // re-render component manually instead of relying on automatic change detection
  constructor(private el: ElementRef, private cd: ChangeDetectorRef) {}

  private setState(key, value) {
    this.state = { ...this.state, [key]: value };
    this.cd.detectChanges();
  }

  // getBoundingClientRect() will get the dimensions of the DOM element
  private calcVisibility() {
    const rect = this.el.nativeElement.getBoundingClientRect().top;
    if (rect <= window.innerHeight && !this.state.visible) {
      // Change value and render
      this.setState('visible', true);
      // emit a custom public event
      this.customEmit(true);
    }
  }

  // calculate visibility on initialisation
  ngOnInit() {
    this.calcVisibility();
  }

  // listen to global windows scroll event
  @HostListener('window:scroll', ['$event'])
  onscroll(e) {
    this.calcVisibility();
  }

  onLoad() {
    setTimeout(() => {
      this.setState('loaded', true);
    }, 2000);
  }

  // Making public methods
  @Input()
  public log = () => {
    const state = this.state;
    console.log(state);
  }

  // make custom Events
  private customEmit(val) {
    this.isVisible.emit(val);
    const domEvent = new CustomEvent('is-visible');
    this.el.nativeElement.dispatchEvent(domEvent);
  }
}
