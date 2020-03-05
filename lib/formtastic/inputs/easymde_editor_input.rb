module Formtastic
  module Inputs
    class EasymdeEditorInput < Formtastic::Inputs::TextInput
      def input_html_options
        super.merge( class: 'easymde-editor' )
      end
    end
  end
end