$(document).ready(function () {
  $('.easymde-editor').each(function () {
    var options = { element: $(this).get(0) };
    options = $.extend({}, options, $(this).data('options'));
    if (options.toolbar) {
      var indexCite = options.toolbar.indexOf('image-caption');
      if (~indexCite) {
        options.toolbar[indexCite] = {
          name: 'image-caption',
          action: function(editor){
            var cm = editor.codemirror;
            var selection = cm.getSelection();
            cm.replaceSelection('<i class="image-caption">' + selection + '</i>');
            if (!selection) {
              var cursorPos = cm.getCursor();
              cm.setCursor(cursorPos.line, cursorPos.ch - 2);
            }
          },
          className: 'fa fa-subscript',
          title: '이미지 설명',
        }
      }
    }
    var editor = new EasyMDE(options);
    $(this).data({editor: editor});
  });
});