import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { UserStoreService } from '../../services/user.store.service';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-user-container',
  templateUrl: './user-container.component.html',
  styleUrl: './user-container.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserContainerComponent implements OnInit {
  private unsubscribe$ = new Subject<void>();
  takeUser: any;
  public downloadLink: any;
  public statusCalculate$ = this.userStore.selectConversionStatus();
  public isInputActive = true;

  constructor(
    private userStore: UserStoreService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.userStore
      .selectConversionStatus()
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((res) => {
        if (res.status === 'finished') {
          this.downloadLink = res.tasks.find(
            (task: any) => task.name === 'export'
          ).result.files[0].url;
          this.isInputActive = true;
          return;
        }
        if (['waiting', 'processing'].includes(res.status)) {
          setTimeout(() => this.getConversionStatus(res.id), 2000);
        }
        this.cdr.detectChanges();
      });

    this.userStore
      .selectResponseConvert()
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((res) => {
        if (!res.length) return;
        this.getConversionStatus(res);
        this.isInputActive = false;
      });
  }

  public getConvertFile(event: any): void {
    this.userStore.convertFile(event);
  }

  public getConversionStatus(payload: string) {
    this.userStore.fetchConversionStatus(payload);
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
