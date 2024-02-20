# Pin npm packages by running ./bin/importmap

pin "application"
pin "@hotwired/turbo-rails", to: "turbo.min.js"
pin "@hotwired/stimulus", to: "stimulus.min.js"
pin "@hotwired/stimulus-loading", to: "stimulus-loading.js"
pin_all_from "app/javascript/controllers", under: "controllers"
pin "jquery", to: "https://code.jquery.com/jquery-3.6.3.min.js"
pin "materialize", to: "materialize.js"
pin "materializecss" # @1.0.11
pin "angular2/core", to: "angular2--core.js" # @2.0.0
pin "angular2/src/core/application_tokens", to: "angular2--src--core--application_tokens.js" # @2.0.0
pin "angular2/src/core/change_detection", to: "angular2--src--core--change_detection.js" # @2.0.0
pin "angular2/src/core/change_detection/change_detection", to: "angular2--src--core--change_detection--change_detection.js" # @2.0.0
pin "angular2/src/core/change_detection/constants", to: "angular2--src--core--change_detection--constants.js" # @2.0.0
pin "angular2/src/core/console", to: "angular2--src--core--console.js" # @2.0.0
pin "angular2/src/core/di", to: "angular2--src--core--di.js" # @2.0.0
pin "angular2/src/core/di/metadata", to: "angular2--src--core--di--metadata.js" # @2.0.0
pin "angular2/src/core/linker/component_resolver", to: "angular2--src--core--linker--component_resolver.js" # @2.0.0
pin "angular2/src/core/reflection/reflection", to: "angular2--src--core--reflection--reflection.js" # @2.0.0
pin "angular2/src/core/render/api", to: "angular2--src--core--render--api.js" # @2.0.0
pin "angular2/src/core/testability/testability", to: "angular2--src--core--testability--testability.js" # @2.0.0
pin "angular2/src/core/zone/ng_zone", to: "angular2--src--core--zone--ng_zone.js" # @2.0.0
pin "angular2/src/facade/async", to: "angular2--src--facade--async.js" # @2.0.0
pin "angular2/src/facade/base_wrapped_exception", to: "angular2--src--facade--base_wrapped_exception.js" # @2.0.0
pin "angular2/src/facade/collection", to: "angular2--src--facade--collection.js" # @2.0.0
pin "angular2/src/facade/exceptions", to: "angular2--src--facade--exceptions.js" # @2.0.0
pin "angular2/src/facade/lang", to: "angular2--src--facade--lang.js" # @2.0.0
pin "angular2/src/facade/promise", to: "angular2--src--facade--promise.js" # @2.0.0
pin "rxjs/Observable", to: "rxjs--Observable.js" # @5.0.0
pin "rxjs/Subject", to: "rxjs--Subject.js" # @5.0.0
pin "rxjs/observable/PromiseObservable", to: "rxjs--observable--PromiseObservable.js" # @5.0.0
pin "rxjs/operator/toPromise", to: "rxjs--operator--toPromise.js" # @5.0.0
pin_all_from "app/javascript/custom", under: "custom"
pin "application", preload: true
pin "@hotwired/turbo-rails", to: "turbo.min.js", preload: true
pin "@hotwired/stimulus", to: "stimulus.min.js", preload: true
pin "@hotwired/stimulus-loading", to: "stimulus-loading.js", preload: true
pin_all_from "app/javascript/controllers", under: "controllers"
pin "bootstrap", to: "https://ga.jspm.io/npm:bootstrap@5.3.2/dist/js/bootstrap.esm.js"
pin "@popperjs/core", to: "https://ga.jspm.io/npm:@popperjs/core@2.11.8/lib/index.js"
