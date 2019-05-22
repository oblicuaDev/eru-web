/**
 * @file
 * Extends the Drupal paragraphs functionality..
 */


(function ($, Drupal, drupalSettings) {
  'use strict';

  Drupal.behaviors.paragraphSlideshow = {
    attach: function (context, settings) {
      window.onload = function () {
        $('.carousel').carousel('dispose');
        $('.carousel').carousel({
          interval: 5000,
          keyboard: true,
          touch: true,
          pause: 'false',
          ride: false,
        });
        $('.carousel').carousel('pause');
      };

      $('#playButton').click(function () {
        $('.carousel').carousel('cycle');
      });

      $('#pauseButton').click(function () {
        $('.carousel').carousel('pause');
      });

      $('.carousel-control-prev').click(function () {
        $('.carousel').carousel('prev');
      });

      $('.carousel-control-next').click(function () {
        $('.carousel').carousel('next');
      });

      //Remueve la funcionalidad de slider en las vista news
      //$('.display-none-controllers .carousel').carousel('dispose');
      $('.display-none-controllers .carousel').removeClass('carousel');

    }
  };
})(jQuery, Drupal, drupalSettings);

jQuery('.alert-leave-page').click(function (event) {
});