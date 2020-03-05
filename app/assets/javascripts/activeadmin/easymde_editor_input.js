$(document).ready(function () {
  $('.easymde-editor').each(function () {
    var options = { element: $(this).get(0) };
    options = $.extend({}, options, $(this).data('options'));
    if (options.toolbar) {
      var indexCite = options.toolbar.indexOf('cite');
      if (~indexCite) {
        options.toolbar[indexCite] = {
          name: 'cite',
          action: function(editor){
            var cm = editor.codemirror;
            var selection = cm.getSelection();
            cm.replaceSelection('<cite>' + selection + '</cite>');
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