import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WorkerServiceService {

  constructor() { }
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
