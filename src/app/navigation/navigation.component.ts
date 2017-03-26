import { Component, OnInit, Input, HostListener } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  @Input('title') title: string;
  @Input('targetMobileWidth') targetMobileWidth: string;

  isCondensed:Boolean = false;
  toggleNavType:String = 'expanded';
  menuType:String = 'showLinks';

  links = [
    {
      path:'/about',
      name:'About'
    },
    {
      path:'/contact',
      name:'Contact'
    },
    {
      path:'/services',
      name:'Services'
    },
    {
      path:'/help',
      name:'Help'
    }
  ];

  constructor() { }

  ngOnInit() {
    // Check and adapt to the width of the application.
    this.adaptToMobile(window);
  }

  adaptToMobile(e) {
    if (e.innerWidth <= this.targetMobileWidth && this.toggleNavType != 'condensed') {
      this.isCondensed = true;
      this.menuType = 'hideLinks';
    } else {
      this.isCondensed = false;
      this.toggleNavType = 'expanded';
      this.menuType = 'showLinks';
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize(e){
    this.adaptToMobile(e.target);
  }

  toggleHamburgerMenu(){
    if (this.toggleNavType == 'expanded') {
      this.toggleNavType = 'condensed';
      this.menuType = 'showLinks';
    } else {
      // do the reverse
      this.toggleNavType = 'expanded';
      this.menuType = 'hideLinks';
    }
  }

}
