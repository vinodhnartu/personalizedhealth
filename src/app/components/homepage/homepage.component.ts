import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import $ from 'jquery'; // Use this for default import
import 'slick-carousel';
import GLightbox from 'glightbox';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss',
})
export class HomepageComponent {
  ngAfterViewInit(): void {
    this.initSlickCarousel();
    // this.initMagnificPopup();
    this.initGLightbox()
  }

  private initSlickCarousel(): void {
    const customerDetails = document.querySelector(
      '.customer_details'
    ) as HTMLElement;
    if (customerDetails) {
      $(customerDetails).slick({
        centerMode: true,
        centerPadding: '0px',
        slidesToShow: 3,
        autoplay: true,
        dots: false,
        arrows: true,
        lazyLoad: 'ondemand',
        responsive: [
          { breakpoint: 1440, settings: { slidesToShow: 3 } },
          { breakpoint: 1201, settings: { slidesToShow: 2 } },
          { breakpoint: 768, settings: { slidesToShow: 2 } },
          { breakpoint: 550, settings: { slidesToShow: 1 } },
        ],
      });
    }
  }

  private initGLightbox(): void {
    GLightbox({
      selector: '.video-play-btn',
      autoplayVideos: true,
    });
  }
}
