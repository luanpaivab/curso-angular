import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-parent-component',
  templateUrl: './parent-component.component.html',
  styleUrls: ['./parent-component.component.css'],
})
export class ParentComponentComponent {
  @Input() nome: string = '';
  @Input() data!: { email: string; role: string };
}
