import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterFaction } from './character-faction';

describe('CharacterFaction', () => {
  let component: CharacterFaction;
  let fixture: ComponentFixture<CharacterFaction>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CharacterFaction]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CharacterFaction);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
