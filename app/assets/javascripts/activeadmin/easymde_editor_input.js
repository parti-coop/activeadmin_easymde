$(document).ready(function () {
  $('.easymde-editor').each(function () {
    var options = { element: $(this).get(0) };
    options = $.extend({
      renderingConfig: {
        markedOptions: {
          renderer: new marked.Renderer(),
        }
      }
    }, options, $(this).data('options'));

    var renderer = options['renderingConfig']['markedOptions']['renderer'];
    var originalRendererImage = renderer.image.bind(renderer);
    renderer.image = function(href, title, text) {
      var result = originalRendererImage(href, title, text);
      if (text && options.imageCaption) {
        result = "<figure>" + result + "<figcaption>" + text + "</figcaption></figure>"
      }
      return result;
    };

    var editor = new EasyMDE(options);
    $(this).data({editor: editor});
  });
});