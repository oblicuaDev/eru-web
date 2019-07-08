import 'popper.js';
import 'bootstrap';

(function () {

  'use strict';

  Drupal.behaviors.changeMenuTabs = {
    attach: function (context) {
      jQuery('.project-block').parents('.container').find('.block--theme-eru-local-tasks').appendTo('.project-block header');
      jQuery('#photos .project__field-slider .field__item').append(jQuery('.project__field-slider .carousel-caption').addClass('description-photo'));
      if (jQuery('.element-invisible').hasClass('TRUE')){
        jQuery('.element-invisible.TRUE').removeClass('d-none');
      }
    }
  };

  Drupal.behaviors.initSite = {
    attach: function (context) {
      //Inicia funcionalidades de js y jQuery
      jQuery('.dropdown-toggle').dropdown();
    }
  };

  Drupal.behaviors.pageSearch = {
    attach: function (context) {
      //funcionalidades de la pagina de busqueda
      jQuery('#views-exposed-form-search-page-1').addClass('col-4 float-left')
        .parents('.page-search').find('.views-view-grid.cols-8').addClass('col-8 float-left');

    }
  };

  Drupal.behaviors.helloWorld = {
    attach: function (context) {
      console.log('Hello World 2');
    }
  };

})(jQuery, Drupal);
