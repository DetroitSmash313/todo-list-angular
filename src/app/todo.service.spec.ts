import { TestBed } from '@angular/core/testing';

import { TodoService } from './todo.service';
import { FormsModule } from '@angular/forms';

describe('TodoService', () => {
  let service: TodoService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule]
    });
    service = TestBed.inject(TodoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
