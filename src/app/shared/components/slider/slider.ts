import { Component, Input, OnDestroy, OnInit } from '@angular/core';
interface CarouselImage {
  src: string;
  alt: string;
  title?: string; // Optional title for the image
}


@Component({
  selector: 'app-slider',
  imports: [],
  templateUrl: './slider.html',
  styleUrl: './slider.scss'
})
export class Slider {
 @Input() images: CarouselImage[] = [];
  @Input() autoPlay: boolean = true;
  @Input() interval: number = 3000; // Time in ms for auto-play

  currentIndex: number = 0;
  private intervalId: any;

  // ngOnInit(): void {
  //   if (this.autoPlay) {
  //     this.startAutoPlay();
  //   }
  // }

  // ngOnDestroy(): void {
  //   this.stopAutoPlay();
  // }

  startAutoPlay(): void {
    this.stopAutoPlay(); // Clear any existing interval
    this.intervalId = setInterval(() => {
      this.nextImage();
    }, this.interval);
  }

  stopAutoPlay(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
  }

  setCurrentIndex(index: number): void {
    this.currentIndex = index;
    // When manually changing image, restart auto-play
    if (this.autoPlay) {
      this.startAutoPlay();
    }
  }

  prevImage(): void {
    this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
    if (this.autoPlay) {
      this.startAutoPlay();
    }
  }

  nextImage(): void {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
    if (this.autoPlay) {
      this.startAutoPlay();
    }
  }

  // Helper to get the current image
  getCurrentImage(): CarouselImage | undefined {
    return this.images.length > 0 ? this.images[this.currentIndex] : undefined;
  }
}
