import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RefreshService {

  isRefresh() {
    const nav = performance.getEntriesByType("navigation")[0] as any;
    return nav.type === 'reload';
  }

}
