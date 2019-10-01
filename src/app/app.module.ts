import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatTabsModule, MatButtonModule, MatCheckboxModule, MatInputModule, MatFormFieldModule, MatRadioModule} from '@angular/material';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServicesModule } from './katas/rxjs/services/services.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LevelOneComponent } from './katas/rxjs/pages/level-one/level-one.component';
import { LevelTwoComponent } from './katas/rxjs/pages/level-two/level-two.component';
import { LevelThreeComponent } from './katas/rxjs/pages/level-three/level-three.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RomanNumConversionTwoComponent } from './katas/roman-num-conversion/roman-num-conversion-two.component';
import { StringCalculatorComponent } from './katas/string-calculator/string-calculator.component';
import { MainComponent } from './katas/rxjs/main/main.component';
import { HelloBitDevWorldModule } from '@bit/brianhadley.displayutilities.hello-bit-dev-world';
@NgModule({
  declarations: [
    AppComponent,
    LevelOneComponent,
    LevelTwoComponent,
    LevelThreeComponent,
    RomanNumConversionTwoComponent,
    StringCalculatorComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ServicesModule,
    FormsModule,
    MatTabsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    FlexLayoutModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatRadioModule,
    HelloBitDevWorldModule
    
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
