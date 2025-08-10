import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FoldersListContainerStore } from './folders-list-container.store';

@Component({
  imports: [CommonModule],
  templateUrl: './folders-list-container.component.html',
  styleUrl: './folders-list-container.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [FoldersListContainerStore],
})
export class FoldersListContainerComponent {}
