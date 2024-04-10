import { BehaviorSubject, Observable } from 'rxjs';

import { DataStorageService } from '../services/data-storage.service';

import { SyncStatsData } from '../models/sync-stats-data.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SyncStatsService {

  public syncStats: SyncStatsData;
  private syncStatsSubject: BehaviorSubject<SyncStatsData>;
  public $syncStats: Observable<SyncStatsData>;

  constructor(
    private _dataStorage: DataStorageService
  ) {
    this.syncStats = new SyncStatsData();
    this.syncStatsSubject = new BehaviorSubject<SyncStatsData>(this.syncStats);
    this.$syncStats = this.syncStatsSubject.asObservable();
  }

  public async readStats(): Promise<SyncStatsData> {
    return await this._dataStorage.retrieveSyncData('syncStats');
  }

  public async getAndPushStats(): Promise<void> {
    const stats = await this.readStats();

    if (stats === null) {
      this.syncStats = {
        assigned: 0,
        completed: 0,
        awaitingSync: 0,
        completionPercentage: 0,
      };
    } else {
      this.syncStats = stats;
    }

    this.syncStats.completionPercentage = this.calculateCompletion();
    this.syncStatsSubject.next(this.syncStats);
  }

  public async incrementCompleted(): Promise<void> {
    console.log('run incrementCompleted');

    this.syncStats.completed++;
    this.syncStats.completionPercentage = this.calculateCompletion();

    this.syncStatsSubject.next(this.syncStats);
    await this._dataStorage.writeSyncStats(this.syncStats, 'syncStats');
  }

  public async incrementAwaitingSync(): Promise<void> {
    this.syncStats.awaitingSync++;

    this.syncStatsSubject.next(this.syncStats);
    await this._dataStorage.writeSyncStats(this.syncStats, 'syncStats');
  }

  public async decrementAwaitingSync(): Promise<void> {
    this.syncStats.awaitingSync--;

    this.syncStatsSubject.next(this.syncStats);
    await this._dataStorage.writeSyncStats(this.syncStats, 'syncStats');
  }

  public async updateAssigned(qcpCount: number): Promise<void> {
    const stats = await this.readStats();

    if (stats !== null) {
      this.syncStats = {
        assigned: qcpCount + stats.completed,
        completed: stats.completed,
        awaitingSync: stats.awaitingSync,
        completionPercentage: stats.completionPercentage,
      };

      this.syncStats.completionPercentage = this.calculateCompletion();
      this.syncStatsSubject.next(this.syncStats);

      await this._dataStorage.writeSyncStats(this.syncStats, 'syncStats');
    }
  }



  private calculateCompletion(): number {
    return Math.floor(this.syncStats.completed / this.syncStats.assigned * 100) || 0;
  }

}
