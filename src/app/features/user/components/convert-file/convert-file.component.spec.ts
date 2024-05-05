import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConvertFileComponent } from './convert-file.component';

describe('ConvertFileComponent', () => {
  let component: ConvertFileComponent;
  let fixture: ComponentFixture<ConvertFileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ConvertFileComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ConvertFileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
