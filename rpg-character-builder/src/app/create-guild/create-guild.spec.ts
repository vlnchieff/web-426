import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateGuild } from './create-guild';

describe('CreateGuild', () => {
  let component: CreateGuild;
  let fixture: ComponentFixture<CreateGuild>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateGuild]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateGuild);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
