import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-convert-file',
  templateUrl: './convert-file.component.html',
  styleUrl: './convert-file.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ConvertFileComponent {
  @Output() submit = new EventEmitter<any>();
  @Input() downloadLink: any;
  @Input() statusCalculate: any;
  @Input() isInputActive = false;

  public controlArray: string[] = ['name', 'lastName', 'age'];

  public onFileSelected(value: any): void {
    const file: File = value.target.files[0];
    this.submit.emit(file);
  }

  public toggle(): void {
    this.isInputActive = !this.isInputActive;
  }
}
