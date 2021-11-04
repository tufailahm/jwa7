import { Location } from '@angular/common';
import { ComponentFixture, fakeAsync, flush, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { AboutusComponent } from './aboutus/aboutus.component';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { routes } from './app-routing.module'
import { HomeComponent } from './home/home.component';
import { CartComponent } from './cart/cart.component';
import { ProductListComponent } from './product-list/product-list.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

let router: Router
let app: AppComponent
let fixture: ComponentFixture<AppComponent>;
let location: Location

describe('AppComponent', () => {

  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes(routes),HttpClientTestingModule
      ],
      declarations: [
        AppComponent, WelcomeComponent, AboutusComponent, HomeComponent, CartComponent, ProductListComponent
      ],
    }).compileComponents();
    router = TestBed.get(Router)
    location = TestBed.get(Location)
    fixture = TestBed.createComponent(AppComponent)
    app = fixture.componentInstance;
    router.initialNavigation();
  });


  it('should navigate to /productList when I click on ProductList', fakeAsync(() => {
    router.navigate(["productList"]).then(() => {
      expect(location.path()).toBe("/productList");
    });
    flush();
  }));


  it('should navigate to /aboutus when I click on AboutUs', fakeAsync(() => {
    router.navigate(["aboutus"]).then(() => {
      expect(location.path()).toBe("/aboutus");
    });
    flush();
  }));

  it('should navigate to /cart when I click on Cart', fakeAsync(() => {
    router.navigate(["cart"]).then(() => {
      expect(location.path()).toBe("/cart");
    });
    flush();
  }));

  it('should navigate to /welcome when I click on Welcome', fakeAsync(() => {
    router.navigate(["welcome"]).then(() => {
      expect(location.path()).toBe("/welcome");
    });
    flush();
  }));

  it('should navigate to /home when I click on Home', fakeAsync(() => {
    router.navigate(["home"]).then(() => {
      expect(location.path()).toBe("/home");
    });
    flush();
  }));





  it('should create the app', () => {
    expect(app).toBeTruthy();
  });

  it(`should have as title 'product-app-test'`, () => {
    expect(app.title).toEqual('product-app-test');
  });
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
  });


  /*  it('should render title', () => {
     const fixture = TestBed.createComponent(AppComponent);
     fixture.detectChanges();
     const compiled = fixture.nativeElement as HTMLElement;
     expect(compiled.querySelector('.content span')?.textContent).toContain('product-app-test app is running!');
   }); */











