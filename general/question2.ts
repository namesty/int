class Video {
  private source: string;
  private isPlaying: boolean;
  private isPaused: boolean;
  private isRewinding: boolean;
  private isStopped: boolean;

  constructor(source: string) {
    this.source = source;
    this.isPlaying = false;
    this.isPaused = false;
    this.isRewinding = false;
    this.isStopped = true;
  }

  // A video can only be played when it is paused or stopped or rewinding
  play(): void {
    if (this.isPaused || this.isStopped || this.isRewinding) {
      // Make the call to play the video
      this.isPlaying = true;
      this.isPaused = false;
      this.isStopped = false;
      this.isRewinding = false;
    } else {
      throw new Error('Cannot play a video that is already playing.');
    }
  }

  // A video can only be paused when it is playing or rewinding
  pause(): void {
    if (this.isPlaying || this.isRewinding) {
      // Make the call to pause the video
      this.isPlaying = false;
      this.isPaused = true;
      this.isRewinding = false;
      this.isStopped = false;
    } else {
      throw new Error('Cannot pause a video that is not playing or rewinding');
    }
  }

  // A video can only be stopped when it is playing or paused or rewinding
  stop(): void {
    if (this.isPlaying || this.isPaused || this.isRewinding) {
      // Make the call to stop the video
      this.isPlaying = false;
      this.isPaused = false;
      this.isStopped = true;
      this.isRewinding = false;
    } else {
      throw new Error('Cannot stop a video that is not playing or paused or rewinding');
    }
  }

  // A video can only be rewinded when it is playing or paused
  rewind(): void {
    if (this.isPlaying || this.isPaused) {
      // Make the call to rewind the video
      this.isPlaying = false;
      this.isPaused = false;
      this.isStopped = false;
      this.isRewinding = true;
    } else {
      throw new Error('Cannot rewind a video that is not playing or paused');
    }
  }
}