import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationComponent } from './navigation.component';

describe('NavigationComponent', () => {
  let component: NavigationComponent;
  let fixture: ComponentFixture<NavigationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavigationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavigationComponent);
    component = fixture.componentInstance;
    component.title = 'Tutorial App';
    component.targetMobileWidth = '560';
    fixture.detectChanges();
  });

  it('should exist', () => {
    expect(component).toBeTruthy();
  });

  it('should display the app title', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.logoWrapper').textContent).toContain('Tutorial App');
  });

  it('should display a link', () => {
    expect(component.links).toContain({ path: '/about', name: 'About' });
  });

  it('should have a "targetMobileWidth" set', () => {
    expect(component.targetMobileWidth).toEqual('560');
  });

  it('should be an expanded nav type by default', () => {
    expect(component.toggleNavType).toEqual('expanded');
  });

  it('should have default: "false" value for isCondensed', () => {
    expect(component.isCondensed).toEqual(false);
  });

  it('should have default: "showLinks" value for the menuType', () => {
    expect(component.menuType).toEqual('showLinks');
  });

  it('should toggle with the hamburger button', () => {
    component.toggleHamburgerMenu();
    expect(component.toggleNavType).toEqual('condensed');
    expect(component.menuType).toEqual('showLinks');
  });
});
