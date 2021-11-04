import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { AboutusComponent } from './aboutus/aboutus.component';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';

let router: Router
let app: AppComponent
let fixture: ComponentFixture<AppComponent>;

describe('AppComponent', () => {
  
  beforeEach(async () => {
     TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent,WelcomeComponent,AboutusComponent
      ],
    }).compileComponents();
  });
  
  beforeEach( () => {
    fixture = TestBed.createComponent(AppComponent);
    app = fixture.componentInstance;
   
  })

  it('should create the app', () => {
    expect(app).toBeTruthy();
  });

  it(`should have as title 'product-app-test'`, () => {
    expect(app.title).toEqual('product-app-test');
  });


/*   it(`should trigger welcomecomponent when navigating by /welcome`, () => {
    router = jasmine.createSpyObj('Router', ['navigateByUrl']);

    const link = fixture.debugElement.nativeElement.querySelector('.welcome-link');
    link.click();
    expect(router.navigateByUrl).toHaveBeenCalled();
  });

  it(`should trigger about us when navigating by /aboutus`, () => {
    router = jasmine.createSpyObj('Router', ['navigateByUrl']);
    const link = fixture.debugElement.nativeElement.querySelector('.aboutus-link');
    link.click();
    expect(router.navigateByUrl).toHaveBeenCalled();
  }); */


  /*  it('should render title', () => {
     const fixture = TestBed.createComponent(AppComponent);
     fixture.detectChanges();
     const compiled = fixture.nativeElement as HTMLElement;
     expect(compiled.querySelector('.content span')?.textContent).toContain('product-app-test app is running!');
   }); */
});










