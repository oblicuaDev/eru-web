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
      jQuery('.controles button').on('click', function(e){
        /*jQuery(this).addClass('active');       */
        if (jQuery(this).hasClass('active')) {
          jQuery('.controles button').addClass('active');
          jQuery(this).removeClass('active');
        } /*else {
          jQuery('.controles button'),removeClass('active');
          jQuery(this).addClass('active');
          alert('hola');
        }*/
      });
    }
  };

  Drupal.behaviors.pageSearch = {
    attach: function (context) {
      //funcionalidades de la pagina de busqueda
      jQuery('#views-exposed-form-search-page-1').addClass('col-4 float-left')
        .parents('.page-search').find('.views-view-grid.cols-8').addClass('col-8 float-left');

    }
  };

  Drupal.behaviors.iconLists = {
    attach: function (context){
      jQuery('.news ul li').prepend("<i class='icon-lists'></i>");
      jQuery('.project-content ul li').prepend("<i class='icon-lists'></i>");
    }
  };

  Drupal.behaviors.heightVideo = {
    attach: function (context){
      jQuery('.video-home iframe').height(300);
    }
  };



})(jQuery, Drupal);
