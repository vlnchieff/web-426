import { Component } from '@angular/core';
import { NgForm, CommonModule } from '@angular/common';

interface Character {
  id: number;
  name: string;
  gender: 'Male' | 'Female' | 'Other';
  class: 'Warrior' | 'Mage' | 'Rogue';
}

@Component({
  selector: 'app-create-character',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="form-section">
      <h2>Create Character</h2>
      <form #characterForm="ngForm" (ngSubmit)="onSubmit(characterForm)">
        <label for="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          [(ngModel)]="model.name"
          required
        />

        <label for="gender">Gender</label>
        <select
          id="gender"
          name="gender"
          [(ngModel)]="model.gender"
          required
        >
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>

        <label for="class">Class</label>
        <select
          id="class"
          name="class"
          [(ngModel)]="model.class"
          required
        >
          <option value="Warrior">Warrior</option>
          <option value="Mage">Mage</option>
          <option value="Rogue">Rogue</option>
        </select>

        <button type="submit">Create</button>
      </form>
    </div>

    <div class="list-section">
      <h3>Created Characters</h3>
      <ul>
        @for (char of characters; track char.id) {
          <li>
            <strong>{{ char.name }}</strong> — {{ char.gender }}, {{ char.class }}
          </li>
        }
      </ul>
    </div>
  `,
  styles: [`
    .form-section {
      padding: 1rem;
      max-width: 400px;
      margin: auto;
      background: #f9f9f9;
      border-radius: 8px;
    }

    label {
      display: block;
      margin-top: 1rem;
    }

    input, select {
      width: 100%;
      padding: 0.5rem;
      margin-top: 0.25rem;
    }

    button {
      margin-top: 1rem;
      padding: 0.5rem 1rem;
    }

    .list-section {
      margin-top: 2rem;
      padding: 1rem;
    }

    ul {
      list-style: none;
      padding: 0;
    }

    li {
      background: #fff;
      margin-bottom: 0.5rem;
      padding: 0.5rem;
      border-radius: 4px;
      box-shadow: 0 1px 3px rgba(0,0,0,0.1);
    }
  `]
})
export class CreateCharacterComponent {
  characters: Character[] = [];

  model: Character = {
    id: 0,
    name: '',
    gender: 'Male',
    class: 'Warrior'
  };

  generateId(): number {
    return Math.floor(Math.random() * 1000) + 1;
  }

  onSubmit(form: NgForm): void {
    const newCharacter: Character = {
      id: this.generateId(),
      name: this.model.name,
      gender: this.model.gender,
      class: this.model.class
    };

    this.characters.push(newCharacter);
    this.resetForm(form); // ✅ Called immediately after adding character
  }

  resetForm(form: NgForm): void {
    form.resetForm({
      name: '',
      gender: 'Male',
      class: 'Warrior'
    });
  }
}
