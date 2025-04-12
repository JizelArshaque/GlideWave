import {  Component,  OnInit, ViewChild } from '@angular/core';
import { IonContent, ScrollCustomEvent } from '@ionic/angular';
declare var $: any;
@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.page.html',
  styleUrls: ['./contactus.page.scss'],
  standalone: false,
})
export class ContactusPage implements OnInit {
@ViewChild('content', { static: false }) content!: IonContent;

  constructor() { }




  ngOnInit(): void {
    window.addEventListener('load', () => {
      const loader = document.getElementById('loader');
      if (loader) {
        loader.classList.add('loader-fadeout');
      }
    });

  }

  ngAfterViewInit() {
    setTimeout(() => {
      // Service carousel
      $('.service-carousel').owlCarousel({
        items: 3,
        loop: true,
        autoplay: true,
        autoplayTimeout: 4000,
        autoplaySpeed: 1000,
        dots: false,
        nav: true,
        navText: [
          "<i class='flaticon-left-arrow'></i>",
          "<i class='flaticon-right-arrow'></i>"
        ],
        margin: 30,
        mouseDrag: true,
        smartSpeed: 1000,
        responsive: {
          0: { items: 1, nav: false },
          576: { items: 1, nav: true },
          768: { items: 2 },
          992: { items: 3 }
        }
      });
  
      // Hero carousel
      $('.hero-carousel').owlCarousel({
        items: 1,
        loop: true,
        autoplay: true,
        autoplayTimeout: 6000,
        autoplaySpeed: 2000,
        dots: true,
        nav: false,
        mouseDrag: true,
        smartSpeed: 2000,
        animateOut: 'fadeOut'
      });
  
      // Testimonial carousel
      $('.testimonial-carousel').owlCarousel({
        items: 1,
        loop: true,
        autoplay: true,
        autoplayTimeout: 4000,
        autoplaySpeed: 1000,
        dots: false,
        nav: false,
        mouseDrag: true,
        smartSpeed: 1000
      });
  
      // Partner carousel
      $('.partner-carousel').owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplaySpeed: 500,
        autoplayHoverPause: true,
        dots: false,
        margin: 30,
        responsive: {
          0: {
            items: 2
          },
          576: {
            items: 3
          },
          992: {
            items: 5
          }
        }
      });
  
    }, 100); // Short delay ensures DOM is ready
  }
  

  showSearchPopup = false;

  toggleSearchPopup(event: Event): void {
    event.preventDefault();
    this.showSearchPopup = true;
  }

  closeSearchPopup(): void {
    this.showSearchPopup = false;
  }

  onScroll(event: CustomEvent): void {
    const scrollTop = (event as ScrollCustomEvent).detail.scrollTop;

    const header = document.querySelector('.header-area');
    if (header) {
      header.classList.toggle('sticky-navbar', scrollTop > 180);
    }

    const backToTop = document.querySelector('.back-to-top');
    if (backToTop) {
      backToTop.classList.toggle('show', scrollTop > 1000);
    }
  }

  scrollToTop() {
    this.content.scrollToTop(500);
  }

  openLocationInNewTab() {
    const url = 'https://g.co/kgs/QJ6Uhan';
    window.open(url, '_blank');
  }
  callNumber() {
    window.location.href = 'tel:+971566844152';
  }
  sendEmail() {
    window.location.href = 'mailto:Contact@glidewavelog.com';
  }
}
