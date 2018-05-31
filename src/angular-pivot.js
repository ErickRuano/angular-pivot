module.directive('ngPivot', function(){
    return {
        restrict: 'A',
        link: function(scope, element, attrs) {

            // Get data
            var initialData = scope.$eval(attrs.ngPivot)
            // Get options
            var initialOptions = scope.$eval(attrs.ngPivotOptions);

            // Pivot renderer
            var render = function(input){
                var data = input.data || initialData || [];
                var options = input.options || initialOptions || {};
                element.pivotUI(data, options, true);
            };

            //Attempt to load google charts
            if(typeof google != 'undefined') {
                google.load('visualization', '1.0', {
                    packages: ['corechart','charteditor'],
                    callback: function() {
                        var derivers = $.pivotUtilities.derivers;
                        var renderers = $.extend($.pivotUtilities.renderers, $.pivotUtilities.gchart_renderers);
                        config.renderers = renderers;
                        // First render
                        render({ data : initialData, options : initialOptions });
                    }
                });
            }else{
                // First render
                render({ data : initialData, options : initialOptions });
            }

            // Data binding
            scope.$watch(attrs.ngPivot, function(value){
                // Reload pivot
                render({ data : value });
            }, true)
            scope.$watch(attrs.ngPivotOptions, function(value){
                // Reload pivot
                render({ options : value });
            }, true)

        }
    }
});