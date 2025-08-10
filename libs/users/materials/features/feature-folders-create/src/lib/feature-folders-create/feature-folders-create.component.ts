import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'users-feature-folders-create',
  imports: [CommonModule],
  templateUrl: './feature-folders-create.component.html',
  styleUrl: './feature-folders-create.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FeatureFoldersCreateComponent {}
