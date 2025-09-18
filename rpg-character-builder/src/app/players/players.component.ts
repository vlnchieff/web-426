import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface Character {
  name: string;
  gender: 'Male' | 'Female' | 'Other';
  class: 'Warrior' | 'Mage' | 'Rogue';
  faction: string;
  startingLocation: string;
  funFact: string;
}

@Component({
  selector: 'app-players',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="players-wrapper">
    <h1>Character Roster</h1>
    <div class="grid">
        @for (character of characters; track character.name) {
        <div class="card" data-testid="character-card">
            <h2>{{ character.name }}</h2>
            <p>
                <strong>Gender:</strong>
                {{ character.gender }}</p>
            <p>
                <strong>Class:</strong>
                {{ character.class }}</p>
            <p>
                <strong>Faction:</strong>
                {{ character.faction }}</p>
            <p>
                <strong>Location:</strong>
                {{ character.startingLocation }}</p>
            <p>
                <em>{{ character.funFact }}</em>
            </p>
        </div>
        }
    </div>
</div>
  `,
  styles: `
  .players-wrapper {
  padding: 2rem;
  font-family: 'Segoe UI', sans-serif;
}

.grid {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
}

.card {
  flex: 0 1 calc(33.33% - 20px);
  background-color: #fff;
  border-radius: 8px;
  padding: 1rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}`
})
export class PlayersComponent {
  characters: Character[] = [
    {
      name: 'Jackal Dundee',
      gender: 'Male',
      class: 'Warrior',
      faction: 'The Iron Brotherhood',
      startingLocation: 'Ironhold',
      funFact: 'Thorn once single-handedly defeated a dragon.'
    },
    {
      name: 'Lyra',
      gender: 'Female',
      class: 'Mage',
      faction: 'The Arcane Circle',
      startingLocation: 'Mystvale',
      funFact: 'Lyra can speak to spirits through enchanted mirrors.'
    },
    {
      name: 'Shade',
      gender: 'Other',
      class: 'Rogue',
      faction: 'The Silent Blades',
      startingLocation: 'Shadowreach',
      funFact: 'Shade has never been seen entering or leaving a room.'
    },
    {
      name: 'Bran',
      gender: 'Male',
      class: 'Warrior',
      faction: 'The Iron Brotherhood',
      startingLocation: 'Ironhold',
      funFact: 'Bran once arm-wrestled a troll and won.'
    },
    {
      name: 'Eira',
      gender: 'Female',
      class: 'Mage',
      faction: 'The Arcane Circle',
      startingLocation: 'Mystvale',
      funFact: 'Eira’s spells smell like lavender.'
    },
    {
      name: 'Nyx',
      gender: 'Other',
      class: 'Rogue',
      faction: 'The Silent Blades',
      startingLocation: 'Shadowreach',
      funFact: 'Nyx leaves behind no footprints.'
    },
    {
      name: 'Garrick',
      gender: 'Male',
      class: 'Warrior',
      faction: 'The Iron Brotherhood',
      startingLocation: 'Ironhold',
      funFact: 'Garrick uses a shield made from dragon scales.'
    },
    {
      name: 'Selene',
      gender: 'Female',
      class: 'Mage',
      faction: 'The Arcane Circle',
      startingLocation: 'Mystvale',
      funFact: 'Selene’s staff glows when danger is near.'
    },
    {
      name: 'Vex',
      gender: 'Other',
      class: 'Rogue',
      faction: 'The Silent Blades',
      startingLocation: 'Shadowreach',
      funFact: 'Vex once stole a crown during a royal ceremony.'
    },
    {
      name: 'Kael',
      gender: 'Male',
      class: 'Warrior',
      faction: 'The Iron Brotherhood',
      startingLocation: 'Ironhold',
      funFact: 'Kael trains by wrestling bears.'
    }
  ];
}

