/// <reference types="async"/>

import { AsyncQueue, AsyncResultIterator, AsyncWorker } from 'async';

declare interface Queue {
  <T, E>(worker: AsyncWorker<T, E>, concurrency?: number): AsyncQueue<T>;
  <T, R, E>(worker: AsyncResultIterator<T, R, E>, concurrency?: number): AsyncQueue<T>;
}

declare const queue: Queue;

export = queue;
export as namespace queue;
