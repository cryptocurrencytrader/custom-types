/// <reference types="async"/>

import { QueueObject, AsyncResultIterator, AsyncWorker } from 'async';

declare interface Queue {
  <T, E>(worker: AsyncWorker<T, E>, concurrency?: number): QueueObject<T>;
  <T, R, E>(worker: AsyncResultIterator<T, R, E>, concurrency?: number): QueueObject<T>;
}

declare const queue: Queue;

export = queue;
export as namespace queue;
