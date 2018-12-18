/*-----------------------------------------------------------------------------
| Copyright (c) Jupyter Development Team.
| Distributed under the terms of the Modified BSD License.
|----------------------------------------------------------------------------*/

require('es6-promise/auto');  // polyfill Promise on IE

import {
  PageConfig, URLExt
} from '@jupyterlab/coreutils';

__webpack_public_path__ = PageConfig.getOption('bundleUrl');

// This needs to come after __webpack_public_path__ is set.
require('font-awesome/css/font-awesome.min.css');

/**
 * The main entry point for the application.
 */
function main() {
  var JupyterLab = require('@jupyterlab/application').JupyterLab;

  // Get the disabled extensions.
  var disabled = { patterns: [], matches: [] };
  var disabledExtensions = [];
  try {
    var tempDisabled = PageConfig.getOption('disabledExtensions');
    if (tempDisabled) {
      disabledExtensions = JSON.parse(tempDisabled).map(function(pattern) {
        disabled.patterns.push(pattern);
        return { raw: pattern, rule: new RegExp(pattern) };
      });
    }
  } catch (error) {
    console.warn('Unable to parse disabled extensions.', error);
  }

  // Get the deferred extensions.
  var deferred = { patterns: [], matches: [] };
  var deferredExtensions = [];
  var ignorePlugins = [];
  try {
    var tempDeferred = PageConfig.getOption('deferredExtensions');
    if (tempDeferred) {
      deferredExtensions = JSON.parse(tempDeferred).map(function(pattern) {
        deferred.patterns.push(pattern);
        return { raw: pattern, rule: new RegExp(pattern) };
      });
    }
  } catch (error) {
    console.warn('Unable to parse deferred extensions.', error);
  }

  function isDeferred(value) {
    return deferredExtensions.some(function(pattern) {
      return pattern.raw === value || pattern.rule.test(value);
    });
  }

  function isDisabled(value) {
    return disabledExtensions.some(function(pattern) {
      return pattern.raw === value || pattern.rule.test(value);
    });
  }

  var register = [];

  // Handle the registered mime extensions.
  var mimeExtensions = [];
  try {
    if (isDeferred('')) {
      deferred.matches.push('');
      ignorePlugins.push('');
    }
    if (isDisabled('@jupyterlab/javascript-extension')) {
      disabled.matches.push('@jupyterlab/javascript-extension');
    } else {
      var module = require('@jupyterlab/javascript-extension/');
      var extension = module.default;

      // Handle CommonJS exports.
      if (!module.hasOwnProperty('__esModule')) {
        extension = module;
      }

      if (Array.isArray(extension)) {
        extension.forEach(function(plugin) {
          if (isDeferred(plugin.id)) {
            deferred.matches.push(plugin.id);
            ignorePlugins.push(plugin.id);
          }
          if (isDisabled(plugin.id)) {
            disabled.matches.push(plugin.id);
            return;
          }
          mimeExtensions.push(plugin);
        });
      } else {
        mimeExtensions.push(extension);
      }
    }
  } catch (e) {
    console.error(e);
  }
  try {
    if (isDeferred('')) {
      deferred.matches.push('');
      ignorePlugins.push('');
    }
    if (isDisabled('@jupyterlab/json-extension')) {
      disabled.matches.push('@jupyterlab/json-extension');
    } else {
      var module = require('@jupyterlab/json-extension/');
      var extension = module.default;

      // Handle CommonJS exports.
      if (!module.hasOwnProperty('__esModule')) {
        extension = module;
      }

      if (Array.isArray(extension)) {
        extension.forEach(function(plugin) {
          if (isDeferred(plugin.id)) {
            deferred.matches.push(plugin.id);
            ignorePlugins.push(plugin.id);
          }
          if (isDisabled(plugin.id)) {
            disabled.matches.push(plugin.id);
            return;
          }
          mimeExtensions.push(plugin);
        });
      } else {
        mimeExtensions.push(extension);
      }
    }
  } catch (e) {
    console.error(e);
  }
  try {
    if (isDeferred('')) {
      deferred.matches.push('');
      ignorePlugins.push('');
    }
    if (isDisabled('@jupyterlab/markdownviewer-extension')) {
      disabled.matches.push('@jupyterlab/markdownviewer-extension');
    } else {
      var module = require('@jupyterlab/markdownviewer-extension/');
      var extension = module.default;

      // Handle CommonJS exports.
      if (!module.hasOwnProperty('__esModule')) {
        extension = module;
      }

      if (Array.isArray(extension)) {
        extension.forEach(function(plugin) {
          if (isDeferred(plugin.id)) {
            deferred.matches.push(plugin.id);
            ignorePlugins.push(plugin.id);
          }
          if (isDisabled(plugin.id)) {
            disabled.matches.push(plugin.id);
            return;
          }
          mimeExtensions.push(plugin);
        });
      } else {
        mimeExtensions.push(extension);
      }
    }
  } catch (e) {
    console.error(e);
  }
  try {
    if (isDeferred('')) {
      deferred.matches.push('');
      ignorePlugins.push('');
    }
    if (isDisabled('@jupyterlab/pdf-extension')) {
      disabled.matches.push('@jupyterlab/pdf-extension');
    } else {
      var module = require('@jupyterlab/pdf-extension/');
      var extension = module.default;

      // Handle CommonJS exports.
      if (!module.hasOwnProperty('__esModule')) {
        extension = module;
      }

      if (Array.isArray(extension)) {
        extension.forEach(function(plugin) {
          if (isDeferred(plugin.id)) {
            deferred.matches.push(plugin.id);
            ignorePlugins.push(plugin.id);
          }
          if (isDisabled(plugin.id)) {
            disabled.matches.push(plugin.id);
            return;
          }
          mimeExtensions.push(plugin);
        });
      } else {
        mimeExtensions.push(extension);
      }
    }
  } catch (e) {
    console.error(e);
  }
  try {
    if (isDeferred('')) {
      deferred.matches.push('');
      ignorePlugins.push('');
    }
    if (isDisabled('@jupyterlab/vdom-extension')) {
      disabled.matches.push('@jupyterlab/vdom-extension');
    } else {
      var module = require('@jupyterlab/vdom-extension/');
      var extension = module.default;

      // Handle CommonJS exports.
      if (!module.hasOwnProperty('__esModule')) {
        extension = module;
      }

      if (Array.isArray(extension)) {
        extension.forEach(function(plugin) {
          if (isDeferred(plugin.id)) {
            deferred.matches.push(plugin.id);
            ignorePlugins.push(plugin.id);
          }
          if (isDisabled(plugin.id)) {
            disabled.matches.push(plugin.id);
            return;
          }
          mimeExtensions.push(plugin);
        });
      } else {
        mimeExtensions.push(extension);
      }
    }
  } catch (e) {
    console.error(e);
  }
  try {
    if (isDeferred('')) {
      deferred.matches.push('');
      ignorePlugins.push('');
    }
    if (isDisabled('@jupyterlab/vega4-extension')) {
      disabled.matches.push('@jupyterlab/vega4-extension');
    } else {
      var module = require('@jupyterlab/vega4-extension/');
      var extension = module.default;

      // Handle CommonJS exports.
      if (!module.hasOwnProperty('__esModule')) {
        extension = module;
      }

      if (Array.isArray(extension)) {
        extension.forEach(function(plugin) {
          if (isDeferred(plugin.id)) {
            deferred.matches.push(plugin.id);
            ignorePlugins.push(plugin.id);
          }
          if (isDisabled(plugin.id)) {
            disabled.matches.push(plugin.id);
            return;
          }
          mimeExtensions.push(plugin);
        });
      } else {
        mimeExtensions.push(extension);
      }
    }
  } catch (e) {
    console.error(e);
  }
  try {
    if (isDeferred('')) {
      deferred.matches.push('');
      ignorePlugins.push('');
    }
    if (isDisabled('jupyterlab-chart-editor')) {
      disabled.matches.push('jupyterlab-chart-editor');
    } else {
      var module = require('jupyterlab-chart-editor/');
      var extension = module.default;

      // Handle CommonJS exports.
      if (!module.hasOwnProperty('__esModule')) {
        extension = module;
      }

      if (Array.isArray(extension)) {
        extension.forEach(function(plugin) {
          if (isDeferred(plugin.id)) {
            deferred.matches.push(plugin.id);
            ignorePlugins.push(plugin.id);
          }
          if (isDisabled(plugin.id)) {
            disabled.matches.push(plugin.id);
            return;
          }
          mimeExtensions.push(plugin);
        });
      } else {
        mimeExtensions.push(extension);
      }
    }
  } catch (e) {
    console.error(e);
  }
  try {
    if (isDeferred('')) {
      deferred.matches.push('');
      ignorePlugins.push('');
    }
    if (isDisabled('jupyterlab_bokeh')) {
      disabled.matches.push('jupyterlab_bokeh');
    } else {
      var module = require('jupyterlab_bokeh/');
      var extension = module.default;

      // Handle CommonJS exports.
      if (!module.hasOwnProperty('__esModule')) {
        extension = module;
      }

      if (Array.isArray(extension)) {
        extension.forEach(function(plugin) {
          if (isDeferred(plugin.id)) {
            deferred.matches.push(plugin.id);
            ignorePlugins.push(plugin.id);
          }
          if (isDisabled(plugin.id)) {
            disabled.matches.push(plugin.id);
            return;
          }
          mimeExtensions.push(plugin);
        });
      } else {
        mimeExtensions.push(extension);
      }
    }
  } catch (e) {
    console.error(e);
  }
  try {
    if (isDeferred('')) {
      deferred.matches.push('');
      ignorePlugins.push('');
    }
    if (isDisabled('@jupyterlab/plotly-extension')) {
      disabled.matches.push('@jupyterlab/plotly-extension');
    } else {
      var module = require('@jupyterlab/plotly-extension/');
      var extension = module.default;

      // Handle CommonJS exports.
      if (!module.hasOwnProperty('__esModule')) {
        extension = module;
      }

      if (Array.isArray(extension)) {
        extension.forEach(function(plugin) {
          if (isDeferred(plugin.id)) {
            deferred.matches.push(plugin.id);
            ignorePlugins.push(plugin.id);
          }
          if (isDisabled(plugin.id)) {
            disabled.matches.push(plugin.id);
            return;
          }
          mimeExtensions.push(plugin);
        });
      } else {
        mimeExtensions.push(extension);
      }
    }
  } catch (e) {
    console.error(e);
  }

  // Handled the registered standard extensions.
  try {
    if (isDeferred('')) {
      deferred.matches.push('');
      ignorePlugins.push('');
    }
    if (isDisabled('@jupyterlab/application-extension')) {
      disabled.matches.push('@jupyterlab/application-extension');
    } else {
      module = require('@jupyterlab/application-extension/');
      extension = module.default;

      // Handle CommonJS exports.
      if (!module.hasOwnProperty('__esModule')) {
        extension = module;
      }

      if (Array.isArray(extension)) {
        extension.forEach(function(plugin) {
          if (isDeferred(plugin.id)) {
            deferred.matches.push(plugin.id);
            ignorePlugins.push(plugin.id);
          }
          if (isDisabled(plugin.id)) {
            disabled.matches.push(plugin.id);
            return;
          }
          register.push(plugin);
        });
      } else {
        register.push(extension);
      }
    }
  } catch (e) {
    console.error(e);
  }
  try {
    if (isDeferred('')) {
      deferred.matches.push('');
      ignorePlugins.push('');
    }
    if (isDisabled('@jupyterlab/apputils-extension')) {
      disabled.matches.push('@jupyterlab/apputils-extension');
    } else {
      module = require('@jupyterlab/apputils-extension/');
      extension = module.default;

      // Handle CommonJS exports.
      if (!module.hasOwnProperty('__esModule')) {
        extension = module;
      }

      if (Array.isArray(extension)) {
        extension.forEach(function(plugin) {
          if (isDeferred(plugin.id)) {
            deferred.matches.push(plugin.id);
            ignorePlugins.push(plugin.id);
          }
          if (isDisabled(plugin.id)) {
            disabled.matches.push(plugin.id);
            return;
          }
          register.push(plugin);
        });
      } else {
        register.push(extension);
      }
    }
  } catch (e) {
    console.error(e);
  }
  try {
    if (isDeferred('')) {
      deferred.matches.push('');
      ignorePlugins.push('');
    }
    if (isDisabled('@jupyterlab/codemirror-extension')) {
      disabled.matches.push('@jupyterlab/codemirror-extension');
    } else {
      module = require('@jupyterlab/codemirror-extension/');
      extension = module.default;

      // Handle CommonJS exports.
      if (!module.hasOwnProperty('__esModule')) {
        extension = module;
      }

      if (Array.isArray(extension)) {
        extension.forEach(function(plugin) {
          if (isDeferred(plugin.id)) {
            deferred.matches.push(plugin.id);
            ignorePlugins.push(plugin.id);
          }
          if (isDisabled(plugin.id)) {
            disabled.matches.push(plugin.id);
            return;
          }
          register.push(plugin);
        });
      } else {
        register.push(extension);
      }
    }
  } catch (e) {
    console.error(e);
  }
  try {
    if (isDeferred('')) {
      deferred.matches.push('');
      ignorePlugins.push('');
    }
    if (isDisabled('@jupyterlab/completer-extension')) {
      disabled.matches.push('@jupyterlab/completer-extension');
    } else {
      module = require('@jupyterlab/completer-extension/');
      extension = module.default;

      // Handle CommonJS exports.
      if (!module.hasOwnProperty('__esModule')) {
        extension = module;
      }

      if (Array.isArray(extension)) {
        extension.forEach(function(plugin) {
          if (isDeferred(plugin.id)) {
            deferred.matches.push(plugin.id);
            ignorePlugins.push(plugin.id);
          }
          if (isDisabled(plugin.id)) {
            disabled.matches.push(plugin.id);
            return;
          }
          register.push(plugin);
        });
      } else {
        register.push(extension);
      }
    }
  } catch (e) {
    console.error(e);
  }
  try {
    if (isDeferred('')) {
      deferred.matches.push('');
      ignorePlugins.push('');
    }
    if (isDisabled('@jupyterlab/console-extension')) {
      disabled.matches.push('@jupyterlab/console-extension');
    } else {
      module = require('@jupyterlab/console-extension/');
      extension = module.default;

      // Handle CommonJS exports.
      if (!module.hasOwnProperty('__esModule')) {
        extension = module;
      }

      if (Array.isArray(extension)) {
        extension.forEach(function(plugin) {
          if (isDeferred(plugin.id)) {
            deferred.matches.push(plugin.id);
            ignorePlugins.push(plugin.id);
          }
          if (isDisabled(plugin.id)) {
            disabled.matches.push(plugin.id);
            return;
          }
          register.push(plugin);
        });
      } else {
        register.push(extension);
      }
    }
  } catch (e) {
    console.error(e);
  }
  try {
    if (isDeferred('')) {
      deferred.matches.push('');
      ignorePlugins.push('');
    }
    if (isDisabled('@jupyterlab/csvviewer-extension')) {
      disabled.matches.push('@jupyterlab/csvviewer-extension');
    } else {
      module = require('@jupyterlab/csvviewer-extension/');
      extension = module.default;

      // Handle CommonJS exports.
      if (!module.hasOwnProperty('__esModule')) {
        extension = module;
      }

      if (Array.isArray(extension)) {
        extension.forEach(function(plugin) {
          if (isDeferred(plugin.id)) {
            deferred.matches.push(plugin.id);
            ignorePlugins.push(plugin.id);
          }
          if (isDisabled(plugin.id)) {
            disabled.matches.push(plugin.id);
            return;
          }
          register.push(plugin);
        });
      } else {
        register.push(extension);
      }
    }
  } catch (e) {
    console.error(e);
  }
  try {
    if (isDeferred('')) {
      deferred.matches.push('');
      ignorePlugins.push('');
    }
    if (isDisabled('@jupyterlab/docmanager-extension')) {
      disabled.matches.push('@jupyterlab/docmanager-extension');
    } else {
      module = require('@jupyterlab/docmanager-extension/');
      extension = module.default;

      // Handle CommonJS exports.
      if (!module.hasOwnProperty('__esModule')) {
        extension = module;
      }

      if (Array.isArray(extension)) {
        extension.forEach(function(plugin) {
          if (isDeferred(plugin.id)) {
            deferred.matches.push(plugin.id);
            ignorePlugins.push(plugin.id);
          }
          if (isDisabled(plugin.id)) {
            disabled.matches.push(plugin.id);
            return;
          }
          register.push(plugin);
        });
      } else {
        register.push(extension);
      }
    }
  } catch (e) {
    console.error(e);
  }
  try {
    if (isDeferred('')) {
      deferred.matches.push('');
      ignorePlugins.push('');
    }
    if (isDisabled('@jupyterlab/extensionmanager-extension')) {
      disabled.matches.push('@jupyterlab/extensionmanager-extension');
    } else {
      module = require('@jupyterlab/extensionmanager-extension/');
      extension = module.default;

      // Handle CommonJS exports.
      if (!module.hasOwnProperty('__esModule')) {
        extension = module;
      }

      if (Array.isArray(extension)) {
        extension.forEach(function(plugin) {
          if (isDeferred(plugin.id)) {
            deferred.matches.push(plugin.id);
            ignorePlugins.push(plugin.id);
          }
          if (isDisabled(plugin.id)) {
            disabled.matches.push(plugin.id);
            return;
          }
          register.push(plugin);
        });
      } else {
        register.push(extension);
      }
    }
  } catch (e) {
    console.error(e);
  }
  try {
    if (isDeferred('')) {
      deferred.matches.push('');
      ignorePlugins.push('');
    }
    if (isDisabled('@jupyterlab/faq-extension')) {
      disabled.matches.push('@jupyterlab/faq-extension');
    } else {
      module = require('@jupyterlab/faq-extension/');
      extension = module.default;

      // Handle CommonJS exports.
      if (!module.hasOwnProperty('__esModule')) {
        extension = module;
      }

      if (Array.isArray(extension)) {
        extension.forEach(function(plugin) {
          if (isDeferred(plugin.id)) {
            deferred.matches.push(plugin.id);
            ignorePlugins.push(plugin.id);
          }
          if (isDisabled(plugin.id)) {
            disabled.matches.push(plugin.id);
            return;
          }
          register.push(plugin);
        });
      } else {
        register.push(extension);
      }
    }
  } catch (e) {
    console.error(e);
  }
  try {
    if (isDeferred('')) {
      deferred.matches.push('');
      ignorePlugins.push('');
    }
    if (isDisabled('@jupyterlab/filebrowser-extension')) {
      disabled.matches.push('@jupyterlab/filebrowser-extension');
    } else {
      module = require('@jupyterlab/filebrowser-extension/');
      extension = module.default;

      // Handle CommonJS exports.
      if (!module.hasOwnProperty('__esModule')) {
        extension = module;
      }

      if (Array.isArray(extension)) {
        extension.forEach(function(plugin) {
          if (isDeferred(plugin.id)) {
            deferred.matches.push(plugin.id);
            ignorePlugins.push(plugin.id);
          }
          if (isDisabled(plugin.id)) {
            disabled.matches.push(plugin.id);
            return;
          }
          register.push(plugin);
        });
      } else {
        register.push(extension);
      }
    }
  } catch (e) {
    console.error(e);
  }
  try {
    if (isDeferred('')) {
      deferred.matches.push('');
      ignorePlugins.push('');
    }
    if (isDisabled('@jupyterlab/fileeditor-extension')) {
      disabled.matches.push('@jupyterlab/fileeditor-extension');
    } else {
      module = require('@jupyterlab/fileeditor-extension/');
      extension = module.default;

      // Handle CommonJS exports.
      if (!module.hasOwnProperty('__esModule')) {
        extension = module;
      }

      if (Array.isArray(extension)) {
        extension.forEach(function(plugin) {
          if (isDeferred(plugin.id)) {
            deferred.matches.push(plugin.id);
            ignorePlugins.push(plugin.id);
          }
          if (isDisabled(plugin.id)) {
            disabled.matches.push(plugin.id);
            return;
          }
          register.push(plugin);
        });
      } else {
        register.push(extension);
      }
    }
  } catch (e) {
    console.error(e);
  }
  try {
    if (isDeferred('')) {
      deferred.matches.push('');
      ignorePlugins.push('');
    }
    if (isDisabled('@jupyterlab/help-extension')) {
      disabled.matches.push('@jupyterlab/help-extension');
    } else {
      module = require('@jupyterlab/help-extension/');
      extension = module.default;

      // Handle CommonJS exports.
      if (!module.hasOwnProperty('__esModule')) {
        extension = module;
      }

      if (Array.isArray(extension)) {
        extension.forEach(function(plugin) {
          if (isDeferred(plugin.id)) {
            deferred.matches.push(plugin.id);
            ignorePlugins.push(plugin.id);
          }
          if (isDisabled(plugin.id)) {
            disabled.matches.push(plugin.id);
            return;
          }
          register.push(plugin);
        });
      } else {
        register.push(extension);
      }
    }
  } catch (e) {
    console.error(e);
  }
  try {
    if (isDeferred('')) {
      deferred.matches.push('');
      ignorePlugins.push('');
    }
    if (isDisabled('@jupyterlab/imageviewer-extension')) {
      disabled.matches.push('@jupyterlab/imageviewer-extension');
    } else {
      module = require('@jupyterlab/imageviewer-extension/');
      extension = module.default;

      // Handle CommonJS exports.
      if (!module.hasOwnProperty('__esModule')) {
        extension = module;
      }

      if (Array.isArray(extension)) {
        extension.forEach(function(plugin) {
          if (isDeferred(plugin.id)) {
            deferred.matches.push(plugin.id);
            ignorePlugins.push(plugin.id);
          }
          if (isDisabled(plugin.id)) {
            disabled.matches.push(plugin.id);
            return;
          }
          register.push(plugin);
        });
      } else {
        register.push(extension);
      }
    }
  } catch (e) {
    console.error(e);
  }
  try {
    if (isDeferred('')) {
      deferred.matches.push('');
      ignorePlugins.push('');
    }
    if (isDisabled('@jupyterlab/inspector-extension')) {
      disabled.matches.push('@jupyterlab/inspector-extension');
    } else {
      module = require('@jupyterlab/inspector-extension/');
      extension = module.default;

      // Handle CommonJS exports.
      if (!module.hasOwnProperty('__esModule')) {
        extension = module;
      }

      if (Array.isArray(extension)) {
        extension.forEach(function(plugin) {
          if (isDeferred(plugin.id)) {
            deferred.matches.push(plugin.id);
            ignorePlugins.push(plugin.id);
          }
          if (isDisabled(plugin.id)) {
            disabled.matches.push(plugin.id);
            return;
          }
          register.push(plugin);
        });
      } else {
        register.push(extension);
      }
    }
  } catch (e) {
    console.error(e);
  }
  try {
    if (isDeferred('')) {
      deferred.matches.push('');
      ignorePlugins.push('');
    }
    if (isDisabled('@jupyterlab/launcher-extension')) {
      disabled.matches.push('@jupyterlab/launcher-extension');
    } else {
      module = require('@jupyterlab/launcher-extension/');
      extension = module.default;

      // Handle CommonJS exports.
      if (!module.hasOwnProperty('__esModule')) {
        extension = module;
      }

      if (Array.isArray(extension)) {
        extension.forEach(function(plugin) {
          if (isDeferred(plugin.id)) {
            deferred.matches.push(plugin.id);
            ignorePlugins.push(plugin.id);
          }
          if (isDisabled(plugin.id)) {
            disabled.matches.push(plugin.id);
            return;
          }
          register.push(plugin);
        });
      } else {
        register.push(extension);
      }
    }
  } catch (e) {
    console.error(e);
  }
  try {
    if (isDeferred('')) {
      deferred.matches.push('');
      ignorePlugins.push('');
    }
    if (isDisabled('@jupyterlab/mainmenu-extension')) {
      disabled.matches.push('@jupyterlab/mainmenu-extension');
    } else {
      module = require('@jupyterlab/mainmenu-extension/');
      extension = module.default;

      // Handle CommonJS exports.
      if (!module.hasOwnProperty('__esModule')) {
        extension = module;
      }

      if (Array.isArray(extension)) {
        extension.forEach(function(plugin) {
          if (isDeferred(plugin.id)) {
            deferred.matches.push(plugin.id);
            ignorePlugins.push(plugin.id);
          }
          if (isDisabled(plugin.id)) {
            disabled.matches.push(plugin.id);
            return;
          }
          register.push(plugin);
        });
      } else {
        register.push(extension);
      }
    }
  } catch (e) {
    console.error(e);
  }
  try {
    if (isDeferred('')) {
      deferred.matches.push('');
      ignorePlugins.push('');
    }
    if (isDisabled('@jupyterlab/mathjax2-extension')) {
      disabled.matches.push('@jupyterlab/mathjax2-extension');
    } else {
      module = require('@jupyterlab/mathjax2-extension/');
      extension = module.default;

      // Handle CommonJS exports.
      if (!module.hasOwnProperty('__esModule')) {
        extension = module;
      }

      if (Array.isArray(extension)) {
        extension.forEach(function(plugin) {
          if (isDeferred(plugin.id)) {
            deferred.matches.push(plugin.id);
            ignorePlugins.push(plugin.id);
          }
          if (isDisabled(plugin.id)) {
            disabled.matches.push(plugin.id);
            return;
          }
          register.push(plugin);
        });
      } else {
        register.push(extension);
      }
    }
  } catch (e) {
    console.error(e);
  }
  try {
    if (isDeferred('')) {
      deferred.matches.push('');
      ignorePlugins.push('');
    }
    if (isDisabled('@jupyterlab/notebook-extension')) {
      disabled.matches.push('@jupyterlab/notebook-extension');
    } else {
      module = require('@jupyterlab/notebook-extension/');
      extension = module.default;

      // Handle CommonJS exports.
      if (!module.hasOwnProperty('__esModule')) {
        extension = module;
      }

      if (Array.isArray(extension)) {
        extension.forEach(function(plugin) {
          if (isDeferred(plugin.id)) {
            deferred.matches.push(plugin.id);
            ignorePlugins.push(plugin.id);
          }
          if (isDisabled(plugin.id)) {
            disabled.matches.push(plugin.id);
            return;
          }
          register.push(plugin);
        });
      } else {
        register.push(extension);
      }
    }
  } catch (e) {
    console.error(e);
  }
  try {
    if (isDeferred('')) {
      deferred.matches.push('');
      ignorePlugins.push('');
    }
    if (isDisabled('@jupyterlab/rendermime-extension')) {
      disabled.matches.push('@jupyterlab/rendermime-extension');
    } else {
      module = require('@jupyterlab/rendermime-extension/');
      extension = module.default;

      // Handle CommonJS exports.
      if (!module.hasOwnProperty('__esModule')) {
        extension = module;
      }

      if (Array.isArray(extension)) {
        extension.forEach(function(plugin) {
          if (isDeferred(plugin.id)) {
            deferred.matches.push(plugin.id);
            ignorePlugins.push(plugin.id);
          }
          if (isDisabled(plugin.id)) {
            disabled.matches.push(plugin.id);
            return;
          }
          register.push(plugin);
        });
      } else {
        register.push(extension);
      }
    }
  } catch (e) {
    console.error(e);
  }
  try {
    if (isDeferred('')) {
      deferred.matches.push('');
      ignorePlugins.push('');
    }
    if (isDisabled('@jupyterlab/running-extension')) {
      disabled.matches.push('@jupyterlab/running-extension');
    } else {
      module = require('@jupyterlab/running-extension/');
      extension = module.default;

      // Handle CommonJS exports.
      if (!module.hasOwnProperty('__esModule')) {
        extension = module;
      }

      if (Array.isArray(extension)) {
        extension.forEach(function(plugin) {
          if (isDeferred(plugin.id)) {
            deferred.matches.push(plugin.id);
            ignorePlugins.push(plugin.id);
          }
          if (isDisabled(plugin.id)) {
            disabled.matches.push(plugin.id);
            return;
          }
          register.push(plugin);
        });
      } else {
        register.push(extension);
      }
    }
  } catch (e) {
    console.error(e);
  }
  try {
    if (isDeferred('')) {
      deferred.matches.push('');
      ignorePlugins.push('');
    }
    if (isDisabled('@jupyterlab/settingeditor-extension')) {
      disabled.matches.push('@jupyterlab/settingeditor-extension');
    } else {
      module = require('@jupyterlab/settingeditor-extension/');
      extension = module.default;

      // Handle CommonJS exports.
      if (!module.hasOwnProperty('__esModule')) {
        extension = module;
      }

      if (Array.isArray(extension)) {
        extension.forEach(function(plugin) {
          if (isDeferred(plugin.id)) {
            deferred.matches.push(plugin.id);
            ignorePlugins.push(plugin.id);
          }
          if (isDisabled(plugin.id)) {
            disabled.matches.push(plugin.id);
            return;
          }
          register.push(plugin);
        });
      } else {
        register.push(extension);
      }
    }
  } catch (e) {
    console.error(e);
  }
  try {
    if (isDeferred('')) {
      deferred.matches.push('');
      ignorePlugins.push('');
    }
    if (isDisabled('@jupyterlab/shortcuts-extension')) {
      disabled.matches.push('@jupyterlab/shortcuts-extension');
    } else {
      module = require('@jupyterlab/shortcuts-extension/');
      extension = module.default;

      // Handle CommonJS exports.
      if (!module.hasOwnProperty('__esModule')) {
        extension = module;
      }

      if (Array.isArray(extension)) {
        extension.forEach(function(plugin) {
          if (isDeferred(plugin.id)) {
            deferred.matches.push(plugin.id);
            ignorePlugins.push(plugin.id);
          }
          if (isDisabled(plugin.id)) {
            disabled.matches.push(plugin.id);
            return;
          }
          register.push(plugin);
        });
      } else {
        register.push(extension);
      }
    }
  } catch (e) {
    console.error(e);
  }
  try {
    if (isDeferred('')) {
      deferred.matches.push('');
      ignorePlugins.push('');
    }
    if (isDisabled('@jupyterlab/tabmanager-extension')) {
      disabled.matches.push('@jupyterlab/tabmanager-extension');
    } else {
      module = require('@jupyterlab/tabmanager-extension/');
      extension = module.default;

      // Handle CommonJS exports.
      if (!module.hasOwnProperty('__esModule')) {
        extension = module;
      }

      if (Array.isArray(extension)) {
        extension.forEach(function(plugin) {
          if (isDeferred(plugin.id)) {
            deferred.matches.push(plugin.id);
            ignorePlugins.push(plugin.id);
          }
          if (isDisabled(plugin.id)) {
            disabled.matches.push(plugin.id);
            return;
          }
          register.push(plugin);
        });
      } else {
        register.push(extension);
      }
    }
  } catch (e) {
    console.error(e);
  }
  try {
    if (isDeferred('')) {
      deferred.matches.push('');
      ignorePlugins.push('');
    }
    if (isDisabled('@jupyterlab/terminal-extension')) {
      disabled.matches.push('@jupyterlab/terminal-extension');
    } else {
      module = require('@jupyterlab/terminal-extension/');
      extension = module.default;

      // Handle CommonJS exports.
      if (!module.hasOwnProperty('__esModule')) {
        extension = module;
      }

      if (Array.isArray(extension)) {
        extension.forEach(function(plugin) {
          if (isDeferred(plugin.id)) {
            deferred.matches.push(plugin.id);
            ignorePlugins.push(plugin.id);
          }
          if (isDisabled(plugin.id)) {
            disabled.matches.push(plugin.id);
            return;
          }
          register.push(plugin);
        });
      } else {
        register.push(extension);
      }
    }
  } catch (e) {
    console.error(e);
  }
  try {
    if (isDeferred('')) {
      deferred.matches.push('');
      ignorePlugins.push('');
    }
    if (isDisabled('@jupyterlab/theme-dark-extension')) {
      disabled.matches.push('@jupyterlab/theme-dark-extension');
    } else {
      module = require('@jupyterlab/theme-dark-extension/');
      extension = module.default;

      // Handle CommonJS exports.
      if (!module.hasOwnProperty('__esModule')) {
        extension = module;
      }

      if (Array.isArray(extension)) {
        extension.forEach(function(plugin) {
          if (isDeferred(plugin.id)) {
            deferred.matches.push(plugin.id);
            ignorePlugins.push(plugin.id);
          }
          if (isDisabled(plugin.id)) {
            disabled.matches.push(plugin.id);
            return;
          }
          register.push(plugin);
        });
      } else {
        register.push(extension);
      }
    }
  } catch (e) {
    console.error(e);
  }
  try {
    if (isDeferred('')) {
      deferred.matches.push('');
      ignorePlugins.push('');
    }
    if (isDisabled('@jupyterlab/theme-light-extension')) {
      disabled.matches.push('@jupyterlab/theme-light-extension');
    } else {
      module = require('@jupyterlab/theme-light-extension/');
      extension = module.default;

      // Handle CommonJS exports.
      if (!module.hasOwnProperty('__esModule')) {
        extension = module;
      }

      if (Array.isArray(extension)) {
        extension.forEach(function(plugin) {
          if (isDeferred(plugin.id)) {
            deferred.matches.push(plugin.id);
            ignorePlugins.push(plugin.id);
          }
          if (isDisabled(plugin.id)) {
            disabled.matches.push(plugin.id);
            return;
          }
          register.push(plugin);
        });
      } else {
        register.push(extension);
      }
    }
  } catch (e) {
    console.error(e);
  }
  try {
    if (isDeferred('')) {
      deferred.matches.push('');
      ignorePlugins.push('');
    }
    if (isDisabled('@jupyterlab/tooltip-extension')) {
      disabled.matches.push('@jupyterlab/tooltip-extension');
    } else {
      module = require('@jupyterlab/tooltip-extension/');
      extension = module.default;

      // Handle CommonJS exports.
      if (!module.hasOwnProperty('__esModule')) {
        extension = module;
      }

      if (Array.isArray(extension)) {
        extension.forEach(function(plugin) {
          if (isDeferred(plugin.id)) {
            deferred.matches.push(plugin.id);
            ignorePlugins.push(plugin.id);
          }
          if (isDisabled(plugin.id)) {
            disabled.matches.push(plugin.id);
            return;
          }
          register.push(plugin);
        });
      } else {
        register.push(extension);
      }
    }
  } catch (e) {
    console.error(e);
  }
  try {
    if (isDeferred('')) {
      deferred.matches.push('');
      ignorePlugins.push('');
    }
    if (isDisabled('@jupyterlab/celltags')) {
      disabled.matches.push('@jupyterlab/celltags');
    } else {
      module = require('@jupyterlab/celltags/');
      extension = module.default;

      // Handle CommonJS exports.
      if (!module.hasOwnProperty('__esModule')) {
        extension = module;
      }

      if (Array.isArray(extension)) {
        extension.forEach(function(plugin) {
          if (isDeferred(plugin.id)) {
            deferred.matches.push(plugin.id);
            ignorePlugins.push(plugin.id);
          }
          if (isDisabled(plugin.id)) {
            disabled.matches.push(plugin.id);
            return;
          }
          register.push(plugin);
        });
      } else {
        register.push(extension);
      }
    }
  } catch (e) {
    console.error(e);
  }
  try {
    if (isDeferred('')) {
      deferred.matches.push('');
      ignorePlugins.push('');
    }
    if (isDisabled('jupyterlab_dash')) {
      disabled.matches.push('jupyterlab_dash');
    } else {
      module = require('jupyterlab_dash/');
      extension = module.default;

      // Handle CommonJS exports.
      if (!module.hasOwnProperty('__esModule')) {
        extension = module;
      }

      if (Array.isArray(extension)) {
        extension.forEach(function(plugin) {
          if (isDeferred(plugin.id)) {
            deferred.matches.push(plugin.id);
            ignorePlugins.push(plugin.id);
          }
          if (isDisabled(plugin.id)) {
            disabled.matches.push(plugin.id);
            return;
          }
          register.push(plugin);
        });
      } else {
        register.push(extension);
      }
    }
  } catch (e) {
    console.error(e);
  }
  try {
    if (isDeferred('')) {
      deferred.matches.push('');
      ignorePlugins.push('');
    }
    if (isDisabled('@jupyterlab/toc')) {
      disabled.matches.push('@jupyterlab/toc');
    } else {
      module = require('@jupyterlab/toc/lib/extension.js');
      extension = module.default;

      // Handle CommonJS exports.
      if (!module.hasOwnProperty('__esModule')) {
        extension = module;
      }

      if (Array.isArray(extension)) {
        extension.forEach(function(plugin) {
          if (isDeferred(plugin.id)) {
            deferred.matches.push(plugin.id);
            ignorePlugins.push(plugin.id);
          }
          if (isDisabled(plugin.id)) {
            disabled.matches.push(plugin.id);
            return;
          }
          register.push(plugin);
        });
      } else {
        register.push(extension);
      }
    }
  } catch (e) {
    console.error(e);
  }
  try {
    if (isDeferred('')) {
      deferred.matches.push('');
      ignorePlugins.push('');
    }
    if (isDisabled('jupyterlab_email')) {
      disabled.matches.push('jupyterlab_email');
    } else {
      module = require('jupyterlab_email/');
      extension = module.default;

      // Handle CommonJS exports.
      if (!module.hasOwnProperty('__esModule')) {
        extension = module;
      }

      if (Array.isArray(extension)) {
        extension.forEach(function(plugin) {
          if (isDeferred(plugin.id)) {
            deferred.matches.push(plugin.id);
            ignorePlugins.push(plugin.id);
          }
          if (isDisabled(plugin.id)) {
            disabled.matches.push(plugin.id);
            return;
          }
          register.push(plugin);
        });
      } else {
        register.push(extension);
      }
    }
  } catch (e) {
    console.error(e);
  }
  try {
    if (isDeferred('')) {
      deferred.matches.push('');
      ignorePlugins.push('');
    }
    if (isDisabled('ipyannotate')) {
      disabled.matches.push('ipyannotate');
    } else {
      module = require('ipyannotate/lib/labplugin');
      extension = module.default;

      // Handle CommonJS exports.
      if (!module.hasOwnProperty('__esModule')) {
        extension = module;
      }

      if (Array.isArray(extension)) {
        extension.forEach(function(plugin) {
          if (isDeferred(plugin.id)) {
            deferred.matches.push(plugin.id);
            ignorePlugins.push(plugin.id);
          }
          if (isDisabled(plugin.id)) {
            disabled.matches.push(plugin.id);
            return;
          }
          register.push(plugin);
        });
      } else {
        register.push(extension);
      }
    }
  } catch (e) {
    console.error(e);
  }
  try {
    if (isDeferred('')) {
      deferred.matches.push('');
      ignorePlugins.push('');
    }
    if (isDisabled('bqplot')) {
      disabled.matches.push('bqplot');
    } else {
      module = require('bqplot/src/jupyterlab-plugin');
      extension = module.default;

      // Handle CommonJS exports.
      if (!module.hasOwnProperty('__esModule')) {
        extension = module;
      }

      if (Array.isArray(extension)) {
        extension.forEach(function(plugin) {
          if (isDeferred(plugin.id)) {
            deferred.matches.push(plugin.id);
            ignorePlugins.push(plugin.id);
          }
          if (isDisabled(plugin.id)) {
            disabled.matches.push(plugin.id);
            return;
          }
          register.push(plugin);
        });
      } else {
        register.push(extension);
      }
    }
  } catch (e) {
    console.error(e);
  }
  try {
    if (isDeferred('')) {
      deferred.matches.push('');
      ignorePlugins.push('');
    }
    if (isDisabled('@jpmorganchase/perspective-jupyterlab')) {
      disabled.matches.push('@jpmorganchase/perspective-jupyterlab');
    } else {
      module = require('@jpmorganchase/perspective-jupyterlab/dist/index.js');
      extension = module.default;

      // Handle CommonJS exports.
      if (!module.hasOwnProperty('__esModule')) {
        extension = module;
      }

      if (Array.isArray(extension)) {
        extension.forEach(function(plugin) {
          if (isDeferred(plugin.id)) {
            deferred.matches.push(plugin.id);
            ignorePlugins.push(plugin.id);
          }
          if (isDisabled(plugin.id)) {
            disabled.matches.push(plugin.id);
            return;
          }
          register.push(plugin);
        });
      } else {
        register.push(extension);
      }
    }
  } catch (e) {
    console.error(e);
  }
  try {
    if (isDeferred('')) {
      deferred.matches.push('');
      ignorePlugins.push('');
    }
    if (isDisabled('nbdime-jupyterlab')) {
      disabled.matches.push('nbdime-jupyterlab');
    } else {
      module = require('nbdime-jupyterlab/');
      extension = module.default;

      // Handle CommonJS exports.
      if (!module.hasOwnProperty('__esModule')) {
        extension = module;
      }

      if (Array.isArray(extension)) {
        extension.forEach(function(plugin) {
          if (isDeferred(plugin.id)) {
            deferred.matches.push(plugin.id);
            ignorePlugins.push(plugin.id);
          }
          if (isDisabled(plugin.id)) {
            disabled.matches.push(plugin.id);
            return;
          }
          register.push(plugin);
        });
      } else {
        register.push(extension);
      }
    }
  } catch (e) {
    console.error(e);
  }
  try {
    if (isDeferred('')) {
      deferred.matches.push('');
      ignorePlugins.push('');
    }
    if (isDisabled('qgrid')) {
      disabled.matches.push('qgrid');
    } else {
      module = require('qgrid/src/jupyterlab-plugin');
      extension = module.default;

      // Handle CommonJS exports.
      if (!module.hasOwnProperty('__esModule')) {
        extension = module;
      }

      if (Array.isArray(extension)) {
        extension.forEach(function(plugin) {
          if (isDeferred(plugin.id)) {
            deferred.matches.push(plugin.id);
            ignorePlugins.push(plugin.id);
          }
          if (isDisabled(plugin.id)) {
            disabled.matches.push(plugin.id);
            return;
          }
          register.push(plugin);
        });
      } else {
        register.push(extension);
      }
    }
  } catch (e) {
    console.error(e);
  }
  try {
    if (isDeferred('')) {
      deferred.matches.push('');
      ignorePlugins.push('');
    }
    if (isDisabled('jupyterlab-drawio')) {
      disabled.matches.push('jupyterlab-drawio');
    } else {
      module = require('jupyterlab-drawio/');
      extension = module.default;

      // Handle CommonJS exports.
      if (!module.hasOwnProperty('__esModule')) {
        extension = module;
      }

      if (Array.isArray(extension)) {
        extension.forEach(function(plugin) {
          if (isDeferred(plugin.id)) {
            deferred.matches.push(plugin.id);
            ignorePlugins.push(plugin.id);
          }
          if (isDisabled(plugin.id)) {
            disabled.matches.push(plugin.id);
            return;
          }
          register.push(plugin);
        });
      } else {
        register.push(extension);
      }
    }
  } catch (e) {
    console.error(e);
  }
  try {
    if (isDeferred('')) {
      deferred.matches.push('');
      ignorePlugins.push('');
    }
    if (isDisabled('plotlywidget')) {
      disabled.matches.push('plotlywidget');
    } else {
      module = require('plotlywidget/src/jupyterlab-plugin');
      extension = module.default;

      // Handle CommonJS exports.
      if (!module.hasOwnProperty('__esModule')) {
        extension = module;
      }

      if (Array.isArray(extension)) {
        extension.forEach(function(plugin) {
          if (isDeferred(plugin.id)) {
            deferred.matches.push(plugin.id);
            ignorePlugins.push(plugin.id);
          }
          if (isDisabled(plugin.id)) {
            disabled.matches.push(plugin.id);
            return;
          }
          register.push(plugin);
        });
      } else {
        register.push(extension);
      }
    }
  } catch (e) {
    console.error(e);
  }
  try {
    if (isDeferred('')) {
      deferred.matches.push('');
      ignorePlugins.push('');
    }
    if (isDisabled('jupyterlab_autoversion')) {
      disabled.matches.push('jupyterlab_autoversion');
    } else {
      module = require('jupyterlab_autoversion/');
      extension = module.default;

      // Handle CommonJS exports.
      if (!module.hasOwnProperty('__esModule')) {
        extension = module;
      }

      if (Array.isArray(extension)) {
        extension.forEach(function(plugin) {
          if (isDeferred(plugin.id)) {
            deferred.matches.push(plugin.id);
            ignorePlugins.push(plugin.id);
          }
          if (isDisabled(plugin.id)) {
            disabled.matches.push(plugin.id);
            return;
          }
          register.push(plugin);
        });
      } else {
        register.push(extension);
      }
    }
  } catch (e) {
    console.error(e);
  }
  try {
    if (isDeferred('')) {
      deferred.matches.push('');
      ignorePlugins.push('');
    }
    if (isDisabled('jupyterlab_commands')) {
      disabled.matches.push('jupyterlab_commands');
    } else {
      module = require('jupyterlab_commands/');
      extension = module.default;

      // Handle CommonJS exports.
      if (!module.hasOwnProperty('__esModule')) {
        extension = module;
      }

      if (Array.isArray(extension)) {
        extension.forEach(function(plugin) {
          if (isDeferred(plugin.id)) {
            deferred.matches.push(plugin.id);
            ignorePlugins.push(plugin.id);
          }
          if (isDisabled(plugin.id)) {
            disabled.matches.push(plugin.id);
            return;
          }
          register.push(plugin);
        });
      } else {
        register.push(extension);
      }
    }
  } catch (e) {
    console.error(e);
  }
  try {
    if (isDeferred('')) {
      deferred.matches.push('');
      ignorePlugins.push('');
    }
    if (isDisabled('ipyvolume')) {
      disabled.matches.push('ipyvolume');
    } else {
      module = require('ipyvolume/lib/labplugin');
      extension = module.default;

      // Handle CommonJS exports.
      if (!module.hasOwnProperty('__esModule')) {
        extension = module;
      }

      if (Array.isArray(extension)) {
        extension.forEach(function(plugin) {
          if (isDeferred(plugin.id)) {
            deferred.matches.push(plugin.id);
            ignorePlugins.push(plugin.id);
          }
          if (isDisabled(plugin.id)) {
            disabled.matches.push(plugin.id);
            return;
          }
          register.push(plugin);
        });
      } else {
        register.push(extension);
      }
    }
  } catch (e) {
    console.error(e);
  }
  try {
    if (isDeferred('')) {
      deferred.matches.push('');
      ignorePlugins.push('');
    }
    if (isDisabled('@jupyterlab/runall-extension')) {
      disabled.matches.push('@jupyterlab/runall-extension');
    } else {
      module = require('@jupyterlab/runall-extension/');
      extension = module.default;

      // Handle CommonJS exports.
      if (!module.hasOwnProperty('__esModule')) {
        extension = module;
      }

      if (Array.isArray(extension)) {
        extension.forEach(function(plugin) {
          if (isDeferred(plugin.id)) {
            deferred.matches.push(plugin.id);
            ignorePlugins.push(plugin.id);
          }
          if (isDisabled(plugin.id)) {
            disabled.matches.push(plugin.id);
            return;
          }
          register.push(plugin);
        });
      } else {
        register.push(extension);
      }
    }
  } catch (e) {
    console.error(e);
  }
  try {
    if (isDeferred('')) {
      deferred.matches.push('');
      ignorePlugins.push('');
    }
    if (isDisabled('jupyterlab_celltests')) {
      disabled.matches.push('jupyterlab_celltests');
    } else {
      module = require('jupyterlab_celltests/');
      extension = module.default;

      // Handle CommonJS exports.
      if (!module.hasOwnProperty('__esModule')) {
        extension = module;
      }

      if (Array.isArray(extension)) {
        extension.forEach(function(plugin) {
          if (isDeferred(plugin.id)) {
            deferred.matches.push(plugin.id);
            ignorePlugins.push(plugin.id);
          }
          if (isDisabled(plugin.id)) {
            disabled.matches.push(plugin.id);
            return;
          }
          register.push(plugin);
        });
      } else {
        register.push(extension);
      }
    }
  } catch (e) {
    console.error(e);
  }
  try {
    if (isDeferred('')) {
      deferred.matches.push('');
      ignorePlugins.push('');
    }
    if (isDisabled('pylantern')) {
      disabled.matches.push('pylantern');
    } else {
      module = require('pylantern/');
      extension = module.default;

      // Handle CommonJS exports.
      if (!module.hasOwnProperty('__esModule')) {
        extension = module;
      }

      if (Array.isArray(extension)) {
        extension.forEach(function(plugin) {
          if (isDeferred(plugin.id)) {
            deferred.matches.push(plugin.id);
            ignorePlugins.push(plugin.id);
          }
          if (isDisabled(plugin.id)) {
            disabled.matches.push(plugin.id);
            return;
          }
          register.push(plugin);
        });
      } else {
        register.push(extension);
      }
    }
  } catch (e) {
    console.error(e);
  }
  try {
    if (isDeferred('')) {
      deferred.matches.push('');
      ignorePlugins.push('');
    }
    if (isDisabled('@quentinandre/jupyterlab_snippets')) {
      disabled.matches.push('@quentinandre/jupyterlab_snippets');
    } else {
      module = require('@quentinandre/jupyterlab_snippets/');
      extension = module.default;

      // Handle CommonJS exports.
      if (!module.hasOwnProperty('__esModule')) {
        extension = module;
      }

      if (Array.isArray(extension)) {
        extension.forEach(function(plugin) {
          if (isDeferred(plugin.id)) {
            deferred.matches.push(plugin.id);
            ignorePlugins.push(plugin.id);
          }
          if (isDisabled(plugin.id)) {
            disabled.matches.push(plugin.id);
            return;
          }
          register.push(plugin);
        });
      } else {
        register.push(extension);
      }
    }
  } catch (e) {
    console.error(e);
  }
  try {
    if (isDeferred('')) {
      deferred.matches.push('');
      ignorePlugins.push('');
    }
    if (isDisabled('jupyterlab-datawidgets')) {
      disabled.matches.push('jupyterlab-datawidgets');
    } else {
      module = require('jupyterlab-datawidgets/');
      extension = module.default;

      // Handle CommonJS exports.
      if (!module.hasOwnProperty('__esModule')) {
        extension = module;
      }

      if (Array.isArray(extension)) {
        extension.forEach(function(plugin) {
          if (isDeferred(plugin.id)) {
            deferred.matches.push(plugin.id);
            ignorePlugins.push(plugin.id);
          }
          if (isDisabled(plugin.id)) {
            disabled.matches.push(plugin.id);
            return;
          }
          register.push(plugin);
        });
      } else {
        register.push(extension);
      }
    }
  } catch (e) {
    console.error(e);
  }
  try {
    if (isDeferred('')) {
      deferred.matches.push('');
      ignorePlugins.push('');
    }
    if (isDisabled('@jupyterlab/git')) {
      disabled.matches.push('@jupyterlab/git');
    } else {
      module = require('@jupyterlab/git/');
      extension = module.default;

      // Handle CommonJS exports.
      if (!module.hasOwnProperty('__esModule')) {
        extension = module;
      }

      if (Array.isArray(extension)) {
        extension.forEach(function(plugin) {
          if (isDeferred(plugin.id)) {
            deferred.matches.push(plugin.id);
            ignorePlugins.push(plugin.id);
          }
          if (isDisabled(plugin.id)) {
            disabled.matches.push(plugin.id);
            return;
          }
          register.push(plugin);
        });
      } else {
        register.push(extension);
      }
    }
  } catch (e) {
    console.error(e);
  }
  try {
    if (isDeferred('')) {
      deferred.matches.push('');
      ignorePlugins.push('');
    }
    if (isDisabled('jupyterlab_templates')) {
      disabled.matches.push('jupyterlab_templates');
    } else {
      module = require('jupyterlab_templates/');
      extension = module.default;

      // Handle CommonJS exports.
      if (!module.hasOwnProperty('__esModule')) {
        extension = module;
      }

      if (Array.isArray(extension)) {
        extension.forEach(function(plugin) {
          if (isDeferred(plugin.id)) {
            deferred.matches.push(plugin.id);
            ignorePlugins.push(plugin.id);
          }
          if (isDisabled(plugin.id)) {
            disabled.matches.push(plugin.id);
            return;
          }
          register.push(plugin);
        });
      } else {
        register.push(extension);
      }
    }
  } catch (e) {
    console.error(e);
  }
  try {
    if (isDeferred('')) {
      deferred.matches.push('');
      ignorePlugins.push('');
    }
    if (isDisabled('@oriolmirosa/jupyterlab_materialdarker')) {
      disabled.matches.push('@oriolmirosa/jupyterlab_materialdarker');
    } else {
      module = require('@oriolmirosa/jupyterlab_materialdarker/');
      extension = module.default;

      // Handle CommonJS exports.
      if (!module.hasOwnProperty('__esModule')) {
        extension = module;
      }

      if (Array.isArray(extension)) {
        extension.forEach(function(plugin) {
          if (isDeferred(plugin.id)) {
            deferred.matches.push(plugin.id);
            ignorePlugins.push(plugin.id);
          }
          if (isDisabled(plugin.id)) {
            disabled.matches.push(plugin.id);
            return;
          }
          register.push(plugin);
        });
      } else {
        register.push(extension);
      }
    }
  } catch (e) {
    console.error(e);
  }
  try {
    if (isDeferred('')) {
      deferred.matches.push('');
      ignorePlugins.push('');
    }
    if (isDisabled('@pyviz/jupyterlab_pyviz')) {
      disabled.matches.push('@pyviz/jupyterlab_pyviz');
    } else {
      module = require('@pyviz/jupyterlab_pyviz/');
      extension = module.default;

      // Handle CommonJS exports.
      if (!module.hasOwnProperty('__esModule')) {
        extension = module;
      }

      if (Array.isArray(extension)) {
        extension.forEach(function(plugin) {
          if (isDeferred(plugin.id)) {
            deferred.matches.push(plugin.id);
            ignorePlugins.push(plugin.id);
          }
          if (isDisabled(plugin.id)) {
            disabled.matches.push(plugin.id);
            return;
          }
          register.push(plugin);
        });
      } else {
        register.push(extension);
      }
    }
  } catch (e) {
    console.error(e);
  }
  try {
    if (isDeferred('')) {
      deferred.matches.push('');
      ignorePlugins.push('');
    }
    if (isDisabled('ipyevents')) {
      disabled.matches.push('ipyevents');
    } else {
      module = require('ipyevents/lib/plugin');
      extension = module.default;

      // Handle CommonJS exports.
      if (!module.hasOwnProperty('__esModule')) {
        extension = module;
      }

      if (Array.isArray(extension)) {
        extension.forEach(function(plugin) {
          if (isDeferred(plugin.id)) {
            deferred.matches.push(plugin.id);
            ignorePlugins.push(plugin.id);
          }
          if (isDisabled(plugin.id)) {
            disabled.matches.push(plugin.id);
            return;
          }
          register.push(plugin);
        });
      } else {
        register.push(extension);
      }
    }
  } catch (e) {
    console.error(e);
  }
  try {
    if (isDeferred('')) {
      deferred.matches.push('');
      ignorePlugins.push('');
    }
    if (isDisabled('jupyter-matplotlib')) {
      disabled.matches.push('jupyter-matplotlib');
    } else {
      module = require('jupyter-matplotlib/src/lab_extension');
      extension = module.default;

      // Handle CommonJS exports.
      if (!module.hasOwnProperty('__esModule')) {
        extension = module;
      }

      if (Array.isArray(extension)) {
        extension.forEach(function(plugin) {
          if (isDeferred(plugin.id)) {
            deferred.matches.push(plugin.id);
            ignorePlugins.push(plugin.id);
          }
          if (isDisabled(plugin.id)) {
            disabled.matches.push(plugin.id);
            return;
          }
          register.push(plugin);
        });
      } else {
        register.push(extension);
      }
    }
  } catch (e) {
    console.error(e);
  }
  try {
    if (isDeferred('')) {
      deferred.matches.push('');
      ignorePlugins.push('');
    }
    if (isDisabled('beakerx_table-jupyterlab')) {
      disabled.matches.push('beakerx_table-jupyterlab');
    } else {
      module = require('beakerx_table-jupyterlab/dist/index.js');
      extension = module.default;

      // Handle CommonJS exports.
      if (!module.hasOwnProperty('__esModule')) {
        extension = module;
      }

      if (Array.isArray(extension)) {
        extension.forEach(function(plugin) {
          if (isDeferred(plugin.id)) {
            deferred.matches.push(plugin.id);
            ignorePlugins.push(plugin.id);
          }
          if (isDisabled(plugin.id)) {
            disabled.matches.push(plugin.id);
            return;
          }
          register.push(plugin);
        });
      } else {
        register.push(extension);
      }
    }
  } catch (e) {
    console.error(e);
  }
  try {
    if (isDeferred('')) {
      deferred.matches.push('');
      ignorePlugins.push('');
    }
    if (isDisabled('ipysheet')) {
      disabled.matches.push('ipysheet');
    } else {
      module = require('ipysheet/src/labplugin');
      extension = module.default;

      // Handle CommonJS exports.
      if (!module.hasOwnProperty('__esModule')) {
        extension = module;
      }

      if (Array.isArray(extension)) {
        extension.forEach(function(plugin) {
          if (isDeferred(plugin.id)) {
            deferred.matches.push(plugin.id);
            ignorePlugins.push(plugin.id);
          }
          if (isDisabled(plugin.id)) {
            disabled.matches.push(plugin.id);
            return;
          }
          register.push(plugin);
        });
      } else {
        register.push(extension);
      }
    }
  } catch (e) {
    console.error(e);
  }
  try {
    if (isDeferred('')) {
      deferred.matches.push('');
      ignorePlugins.push('');
    }
    if (isDisabled('@jupyter-widgets/jupyterlab-manager')) {
      disabled.matches.push('@jupyter-widgets/jupyterlab-manager');
    } else {
      module = require('@jupyter-widgets/jupyterlab-manager/');
      extension = module.default;

      // Handle CommonJS exports.
      if (!module.hasOwnProperty('__esModule')) {
        extension = module;
      }

      if (Array.isArray(extension)) {
        extension.forEach(function(plugin) {
          if (isDeferred(plugin.id)) {
            deferred.matches.push(plugin.id);
            ignorePlugins.push(plugin.id);
          }
          if (isDisabled(plugin.id)) {
            disabled.matches.push(plugin.id);
            return;
          }
          register.push(plugin);
        });
      } else {
        register.push(extension);
      }
    }
  } catch (e) {
    console.error(e);
  }
  try {
    if (isDeferred('')) {
      deferred.matches.push('');
      ignorePlugins.push('');
    }
    if (isDisabled('jupyter-leaflet')) {
      disabled.matches.push('jupyter-leaflet');
    } else {
      module = require('jupyter-leaflet/src/jupyterlab-plugin');
      extension = module.default;

      // Handle CommonJS exports.
      if (!module.hasOwnProperty('__esModule')) {
        extension = module;
      }

      if (Array.isArray(extension)) {
        extension.forEach(function(plugin) {
          if (isDeferred(plugin.id)) {
            deferred.matches.push(plugin.id);
            ignorePlugins.push(plugin.id);
          }
          if (isDisabled(plugin.id)) {
            disabled.matches.push(plugin.id);
            return;
          }
          register.push(plugin);
        });
      } else {
        register.push(extension);
      }
    }
  } catch (e) {
    console.error(e);
  }
  try {
    if (isDeferred('')) {
      deferred.matches.push('');
      ignorePlugins.push('');
    }
    if (isDisabled('jupyter-threejs')) {
      disabled.matches.push('jupyter-threejs');
    } else {
      module = require('jupyter-threejs/src/jupyterlab-plugin');
      extension = module.default;

      // Handle CommonJS exports.
      if (!module.hasOwnProperty('__esModule')) {
        extension = module;
      }

      if (Array.isArray(extension)) {
        extension.forEach(function(plugin) {
          if (isDeferred(plugin.id)) {
            deferred.matches.push(plugin.id);
            ignorePlugins.push(plugin.id);
          }
          if (isDisabled(plugin.id)) {
            disabled.matches.push(plugin.id);
            return;
          }
          register.push(plugin);
        });
      } else {
        register.push(extension);
      }
    }
  } catch (e) {
    console.error(e);
  }
  try {
    if (isDeferred('')) {
      deferred.matches.push('');
      ignorePlugins.push('');
    }
    if (isDisabled('@jupyter-widgets/jupyterlab-sidecar')) {
      disabled.matches.push('@jupyter-widgets/jupyterlab-sidecar');
    } else {
      module = require('@jupyter-widgets/jupyterlab-sidecar/lib/plugin');
      extension = module.default;

      // Handle CommonJS exports.
      if (!module.hasOwnProperty('__esModule')) {
        extension = module;
      }

      if (Array.isArray(extension)) {
        extension.forEach(function(plugin) {
          if (isDeferred(plugin.id)) {
            deferred.matches.push(plugin.id);
            ignorePlugins.push(plugin.id);
          }
          if (isDisabled(plugin.id)) {
            disabled.matches.push(plugin.id);
            return;
          }
          register.push(plugin);
        });
      } else {
        register.push(extension);
      }
    }
  } catch (e) {
    console.error(e);
  }
  try {
    if (isDeferred('')) {
      deferred.matches.push('');
      ignorePlugins.push('');
    }
    if (isDisabled('knowledgelab')) {
      disabled.matches.push('knowledgelab');
    } else {
      module = require('knowledgelab/');
      extension = module.default;

      // Handle CommonJS exports.
      if (!module.hasOwnProperty('__esModule')) {
        extension = module;
      }

      if (Array.isArray(extension)) {
        extension.forEach(function(plugin) {
          if (isDeferred(plugin.id)) {
            deferred.matches.push(plugin.id);
            ignorePlugins.push(plugin.id);
          }
          if (isDisabled(plugin.id)) {
            disabled.matches.push(plugin.id);
            return;
          }
          register.push(plugin);
        });
      } else {
        register.push(extension);
      }
    }
  } catch (e) {
    console.error(e);
  }
  try {
    if (isDeferred('')) {
      deferred.matches.push('');
      ignorePlugins.push('');
    }
    if (isDisabled('jupyterlab_iframe')) {
      disabled.matches.push('jupyterlab_iframe');
    } else {
      module = require('jupyterlab_iframe/');
      extension = module.default;

      // Handle CommonJS exports.
      if (!module.hasOwnProperty('__esModule')) {
        extension = module;
      }

      if (Array.isArray(extension)) {
        extension.forEach(function(plugin) {
          if (isDeferred(plugin.id)) {
            deferred.matches.push(plugin.id);
            ignorePlugins.push(plugin.id);
          }
          if (isDisabled(plugin.id)) {
            disabled.matches.push(plugin.id);
            return;
          }
          register.push(plugin);
        });
      } else {
        register.push(extension);
      }
    }
  } catch (e) {
    console.error(e);
  }
  try {
    if (isDeferred('')) {
      deferred.matches.push('');
      ignorePlugins.push('');
    }
    if (isDisabled('jupyterlab_filetree')) {
      disabled.matches.push('jupyterlab_filetree');
    } else {
      module = require('jupyterlab_filetree/');
      extension = module.default;

      // Handle CommonJS exports.
      if (!module.hasOwnProperty('__esModule')) {
        extension = module;
      }

      if (Array.isArray(extension)) {
        extension.forEach(function(plugin) {
          if (isDeferred(plugin.id)) {
            deferred.matches.push(plugin.id);
            ignorePlugins.push(plugin.id);
          }
          if (isDisabled(plugin.id)) {
            disabled.matches.push(plugin.id);
            return;
          }
          register.push(plugin);
        });
      } else {
        register.push(extension);
      }
    }
  } catch (e) {
    console.error(e);
  }
  try {
    if (isDeferred('')) {
      deferred.matches.push('');
      ignorePlugins.push('');
    }
    if (isDisabled('lineup_widget')) {
      disabled.matches.push('lineup_widget');
    } else {
      module = require('lineup_widget/lib/labplugin');
      extension = module.default;

      // Handle CommonJS exports.
      if (!module.hasOwnProperty('__esModule')) {
        extension = module;
      }

      if (Array.isArray(extension)) {
        extension.forEach(function(plugin) {
          if (isDeferred(plugin.id)) {
            deferred.matches.push(plugin.id);
            ignorePlugins.push(plugin.id);
          }
          if (isDisabled(plugin.id)) {
            disabled.matches.push(plugin.id);
            return;
          }
          register.push(plugin);
        });
      } else {
        register.push(extension);
      }
    }
  } catch (e) {
    console.error(e);
  }
  try {
    if (isDeferred('')) {
      deferred.matches.push('');
      ignorePlugins.push('');
    }
    if (isDisabled('jupyterlab-kernelspy')) {
      disabled.matches.push('jupyterlab-kernelspy');
    } else {
      module = require('jupyterlab-kernelspy/lib/plugin');
      extension = module.default;

      // Handle CommonJS exports.
      if (!module.hasOwnProperty('__esModule')) {
        extension = module;
      }

      if (Array.isArray(extension)) {
        extension.forEach(function(plugin) {
          if (isDeferred(plugin.id)) {
            deferred.matches.push(plugin.id);
            ignorePlugins.push(plugin.id);
          }
          if (isDisabled(plugin.id)) {
            disabled.matches.push(plugin.id);
            return;
          }
          register.push(plugin);
        });
      } else {
        register.push(extension);
      }
    }
  } catch (e) {
    console.error(e);
  }

  var lab = new JupyterLab({
    mimeExtensions: mimeExtensions,
    disabled: disabled,
    deferred: deferred
  });
  register.forEach(function(item) { lab.registerPluginModule(item); });
  lab.start({ ignorePlugins: ignorePlugins });

  // Expose global lab instance when in dev mode.
  if ((PageConfig.getOption('devMode') || '').toLowerCase() === 'true') {
    window.lab = lab;
  }

  // Handle a browser test.
  var browserTest = PageConfig.getOption('browserTest');
  if (browserTest.toLowerCase() === 'true') {
    var el = document.createElement('div');
    el.id = 'browserTest';
    document.body.appendChild(el);
    el.textContent = '[]';
    el.style.display = 'none';
    var errors = [];
    var reported = false;
    var timeout = 25000;

    var report = function(errors) {
      if (reported) {
        return;
      }
      reported = true;
      el.className = 'completed';
    }

    window.onerror = function(msg, url, line, col, error) {
      errors.push(String(error));
      el.textContent = JSON.stringify(errors)
    };
    console.error = function(message) {
      errors.push(String(message));
      el.textContent = JSON.stringify(errors)
    };

    lab.restored
      .then(function() { report(errors); })
      .catch(function(reason) { report([`RestoreError: ${reason.message}`]); });

    // Handle failures to restore after the timeout has elapsed.
    window.setTimeout(function() { report(errors); }, timeout);
  }

}

window.addEventListener('load', main);
