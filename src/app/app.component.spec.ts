import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import {ReactiveFormsModule} from "@angular/forms";
import {AuthComponent} from "./auth/auth.component";

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule
      ],
      declarations: [
        AppComponent,
        AuthComponent
      ],
    }).compileComponents();
  });
});
