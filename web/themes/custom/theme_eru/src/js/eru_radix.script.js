import 'popper.js';
import 'bootstrap';

(function () {

  'use strict';

  Drupal.behaviors.changeMenuTabs = {
    attach: function (context) {
      jQuery('.project-block').parents('.container').find('.block--theme-eru-local-tasks').appendTo('.project-block header');;
    }
  };

  Drupal.behaviors.helloWorld = {
    attach: function (context) {
      console.log('Hello World');
    }
  };

})(jQuery, Drupal);
