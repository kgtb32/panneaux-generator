import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { InputTextModule } from 'primeng/inputtext';

export interface TextInputDialogData {
  description: string;
  buttonLabel?: string;
  placeholder?: string;
}

@Component({
  selector: 'app-text-input-dialog',
  imports: [InputTextModule, ButtonModule, FormsModule],
  standalone: true,
  templateUrl: './text-input-dialog.component.html',
  styleUrls: [],
})
export class TextInputDialogComponent implements OnInit {
  private readonly dialogRef = inject(DynamicDialogRef);
  private readonly dialogService = inject(DialogService);

  public data?: TextInputDialogData;

  public value: string = '';

  ngOnInit(): void {
    this.data = this.dialogService.getInstance(this.dialogRef)?.data;
  }

  public validate() {
    this.dialogRef.close(this.value);
  }
}
