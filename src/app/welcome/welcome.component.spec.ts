import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomeComponent } from './welcome.component';

describe('WelcomeComponent', () => {
  let component: WelcomeComponent;
  let fixture: ComponentFixture<WelcomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WelcomeComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WelcomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a title Welcome To Revature!!', async () => {
    fixture = TestBed.createComponent(WelcomeComponent);
    component = fixture.debugElement.componentInstance;
    expect(component.title).toEqual("Welcome To Revature!!")
  })

  it('should start the liked counter at 0', async () => {
    const component: WelcomeComponent = new WelcomeComponent();
    expect(component.likedCounter).toEqual(0);
  })

  it('should increment the liked counter at +1', async () => {
    const component: WelcomeComponent = new WelcomeComponent();
    component.likedCounter = 100,
      component.incrementLikedCounter();
    component.incrementLikedCounter();
    component.incrementLikedCounter();

    expect(component.likedCounter).toEqual(103);
  })

  it('should decrement the liked counter at -1', async () => {
    const component: WelcomeComponent = new WelcomeComponent();
    component.likedCounter = 100,
      component.decrementLikedCounter();
    component.decrementLikedCounter();

    let i: number = 0;
    for (i = 1; i <= 15; i++) {
      component.decrementLikedCounter();
    }
    expect(component.likedCounter).toEqual(83);
  })

  it('should rest the liked counter at 0', async () => {
    const component: WelcomeComponent = new WelcomeComponent();
    component.likedCounter = 100,
      component.resetLikedCounter();
    expect(component.likedCounter).toEqual(0);
  })

  it('should increment the liked counter when I click like button', async () => {
    const button =fixture.debugElement.nativeElement.querySelector(".button-like");
    button.click();
    button.click();
    expect(component.likedCounter).toEqual(2);
  })

  it('should decrement the liked counter when I click unlike button', async () => {
    const button =fixture.debugElement.nativeElement.querySelector(".button-unlike");
    button.click();
    button.click();
    expect(component.likedCounter).toEqual(-2);
  })

  it('should reset the liked counter when I click reset button', async () => {
    const button =fixture.debugElement.nativeElement.querySelector(".button-reset");
    button.click();
    expect(component.likedCounter).toEqual(0);
  })


});
