import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { HttpClientModule } from '@angular/common/http';
import {
  EffectsRunner,
  EffectSources,
  Actions,
  EffectsModule,
} from '@ngrx/effects';
import { GlobalEffects } from './globale/store/global.effects';
import { globalReducer } from './globale/store/global.reducer';

const effectProviders = [EffectsRunner, EffectSources, Actions];
effectProviders.forEach((p) => (p.ɵprov.providedIn = null));

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    EffectsModule.forRoot(effectProviders),
    StoreModule.forRoot({ globalState: globalReducer }),
    EffectsModule.forFeature(GlobalEffects),
  ],
  bootstrap: [AppComponent],
  providers: [provideAnimationsAsync()],
})
export class AppModule {}
