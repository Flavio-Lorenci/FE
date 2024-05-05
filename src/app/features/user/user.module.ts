import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserContainerComponent } from './components/user-container/user-container.component';
import { UserRoutingModule } from './user-router.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { UserEffects } from './store/user.effects';
import { StoreModule } from '@ngrx/store';
import { userReducer } from './store/user.reducer';
import { SharedModule } from '../../shared/shared.module';
import { ConvertFileComponent } from './components/convert-file/convert-file.component';

@NgModule({
  declarations: [UserContainerComponent, ConvertFileComponent],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    CommonModule,
    UserRoutingModule,
    EffectsModule.forFeature([UserEffects]),
    StoreModule.forFeature('userState', userReducer),
  ],
})
export class UserModule {}
