// HOURSTACK Screenshot Tracker
// Captures screenshots at regular intervals

import * as screenshot from 'node-screenshots';

export class ScreenshotTracker {
  private interval: NodeJS.Timer | null = null;
  private frequency: number = 5 * 60 * 1000; // 5 minutes

  start(callback: (image: Buffer) => void) {
    this.interval = setInterval(async () => {
      try {
        const img = await screenshot.all();
        if (img && img.length > 0) {
          const buffer = img[0].image;
          callback(buffer);
        }
      } catch (error) {
        console.error('Screenshot capture error:', error);
      }
    }, this.frequency);
  }

  stop() {
    if (this.interval) {
      clearInterval(this.interval);
      this.interval = null;
    }
  }

  setFrequency(milliseconds: number) {
    this.frequency = milliseconds;
    if (this.interval) {
      this.stop();
      // Restart with new frequency
    }
  }
}
