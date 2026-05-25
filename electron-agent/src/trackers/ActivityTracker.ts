// HOURSTACK Activity Tracker
// Tracks keyboard and mouse activity

import * as robot from 'robotjs';

export interface ActivityData {
  timestamp: Date;
  keystrokes: number;
  mouseClicks: number;
  mouseMoves: number;
  isIdle: boolean;
}

export class ActivityTracker {
  private lastMousePos: { x: number; y: number } | null = null;
  private activityData: ActivityData = {
    timestamp: new Date(),
    keystrokes: 0,
    mouseClicks: 0,
    mouseMoves: 0,
    isIdle: false,
  };
  private idleThreshold: number = 5 * 60 * 1000; // 5 minutes
  private lastActivityTime: number = Date.now();

  start(callback: (data: ActivityData) => void) {
    setInterval(() => {
      const currentMousePos = robot.getMousePos();
      
      if (
        this.lastMousePos &&
        (currentMousePos.x !== this.lastMousePos.x ||
          currentMousePos.y !== this.lastMousePos.y)
      ) {
        this.activityData.mouseMoves++;
        this.lastActivityTime = Date.now();
      }

      this.lastMousePos = currentMousePos;

      // Check if idle
      const timeSinceLastActivity = Date.now() - this.lastActivityTime;
      this.activityData.isIdle = timeSinceLastActivity > this.idleThreshold;

      callback(this.activityData);

      // Reset counters
      this.activityData = {
        timestamp: new Date(),
        keystrokes: 0,
        mouseClicks: 0,
        mouseMoves: 0,
        isIdle: this.activityData.isIdle,
      };
    }, 60000); // Check every minute
  }
}
