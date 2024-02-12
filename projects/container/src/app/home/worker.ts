
import { Injectable } from '@angular/core';
// import { WebWorkerService } from 'angular-web-worker';
import { Observable } from 'rxjs';


export class WorkerService {
//   private worker: Worker;

//   constructor(private webWorkerService: WebWorkerService) {}

  initWorker() {
    // Initialize the web worker
//     this.worker = this.webWorkerService.create('./path-to-my-worker/my-worker.worker', {
//       type: 'module',
//     });
  }

  performHeavyTask(data: any){
    // Send data to the web worker and return a Promise

  }
}
