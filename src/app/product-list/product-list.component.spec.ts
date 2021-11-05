import { HttpClientTestingModule } from '@angular/common/http/testing';
import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { HoverChangeColorDirective } from '../directives/hover-change-color.directive';
import { MobileNumberPipe } from '../pipes/mobile-number.pipe';

import { ProductListComponent } from './product-list.component';

describe('ProductListComponent', () => {
  let component: ProductListComponent;
  let fixture: ComponentFixture<ProductListComponent>;
  let inputEl:DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [ProductListComponent, HoverChangeColorDirective,MobileNumberPipe]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    inputEl = fixture.debugElement.query(By.css('input'))
  });


  it('hovering over input', () => {
    inputEl.triggerEventHandler('mouseover', null);
    fixture.detectChanges();
    expect(inputEl.nativeElement.style.backgroundColor).toBe('yellow')

    inputEl.triggerEventHandler('mouseout', null);
    fixture.detectChanges();
    expect(inputEl.nativeElement.style.backgroundColor).toBe('inherit')

  })


  
  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render title in h1 tag in upper case', () => {
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain(' Welcome to REVATURE PRODUCT APP! ')

  })



  //test case to check whether the price is in $ or not
 /*  it('should render price in h2 tag in $', () => {
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    //  expect(By.css('#price')).toContain("$")
    expect(compiled.querySelector("#price").textContent).toContain("$");

  }) */
});
