import angular from 'angular';

/**************************************************************************
 * Define Angular application
 *************************************************************************/

var ngModule = angular.module('app', []);

/**************************************************************************
 * Configure logging
 *************************************************************************/

function disableLogging($logProvider){
  $logProvider.debugEnabled(true);
}

disableLogging.$inject = ['$logProvider'];

ngModule.config(disableLogging);

/**************************************************************************
 * Log bootstrap message
 *************************************************************************/

function confirmBootstrap($log){
  $log.debug('Angular bootstrapped!');
}

confirmBootstrap.$inject = ['$log'];

ngModule.run(confirmBootstrap);

/**************************************************************************
 * Guidelines
 *************************************************************************/

/**
 * To add dependencies to your Angular application:
 *
 * First install the dependency:
 * jspm install angular-ui-router
 *
 * Then instantiate ngModule like this:
 * var ngModule = angular.module('app', [
 *   'ui.router'
 * ]);
 */

/**
 * To add Angular Express components:
 *
 * First install the component:
 * ngx init component-name
 *
 * Then import the component: *
 * import componentName from 'components/component-name/_build/index';
 *
 * And instantiate it:
 * componentName(ngModule, {baseUrl: '/components/component-name'});
 */

/**
 * Use static imports to load Angular Express components:
 *
 * - avoid having to load a System.import polyfill in the browser
 * - make everything work out of the box when using jspm bundle-sfx
 *
 * When using System.import the browser will complain that System.import
 * is undefined when using a bundle-sfx (because you need to provide
 * a polyfill).
 */
