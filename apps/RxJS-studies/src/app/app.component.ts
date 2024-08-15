import { Component, DestroyRef, effect, inject, OnInit, signal } from '@angular/core';
import { interval, map, Observable } from 'rxjs';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit{
  private destroyRef = inject(DestroyRef);
  clickCount = signal(0);
  clickCount$ = toObservable(this.clickCount)
  interval$ = interval(1000);
  intervalSignal = toSignal(this.interval$, {initialValue: 0});

  customInterval$ = new Observable((subscriber) => {
    let count = 0;
    const interval = setInterval(() => {
      if(count > 3){
        clearInterval(interval);
        subscriber.complete();
        return
      }else{
        subscriber.error('error message');
      }
      subscriber.next({message: 'New Value'});
      count++
    }, 2000);
  })


  ngOnInit() {

    // const subscription = interval(1000).pipe(
    //   map((value) => value *2)
    // ).subscribe({
    //   next: (value) => console.log(value),
    //   error: err => console.error(err)
    // });
    // this.destroyRef.onDestroy(() =>{
    //   subscription.unsubscribe();
    // })

    this.customInterval$.subscribe({
      next: (value) => console.log(value),
      complete: () => console.log('completed'),
      error: (err) => console.error(err),
    })

    const subscription = this.clickCount$.subscribe({
      next: value => console.log(value),
      error: err => console.error(err),
    })

    this.destroyRef.onDestroy(() => {
      subscription.unsubscribe();
    })


  }

  onClick(){
    this.clickCount.update((count) => count + 1);
  };
}
