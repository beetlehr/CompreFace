/*
 * Copyright (c) 2020 the original author or authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express
 * or implied. See the License for the specific language governing
 * permissions and limitations under the License.
 */
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { Routes } from '../../data/enums/routers-url.enum';
import { loadDemoStatus } from '../../store/demo/action';
import { selectDemoPageAvailability, selectDemoPending } from '../../store/demo/selectors';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  routes = Routes;
  isPending$: Observable<boolean>;
  isDemoPageAvailable$: Observable<boolean>;
  env = environment;

  constructor(private store: Store) {
    this.isPending$ = this.store.select(selectDemoPending);
    this.isDemoPageAvailable$ = this.store.select(selectDemoPageAvailability);
  }

  ngOnInit() {
    this.store.dispatch(loadDemoStatus());
  }
}
