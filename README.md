## Installation

Add this line to your application's Gemfile:
```ruby
gem 'activeadmin_easymde'
```

And then execute:

    $ bundle

Or install it yourself as:

    $ gem install activeadmin_easymde


- Add at the end of your ActiveAdmin styles (_app/assets/stylesheets/active_admin.scss_):
```css
@import 'activeadmin/easymde';
```
- Add at the end of your ActiveAdmin javascripts (_app/assets/javascripts/active_admin.js_):
```js
//= require activeadmin/easymde/easymde
//= require activeadmin/easymde_editor_input
```
- Use the input with `as: :easymde_editor` in Active Admin model conf



## Usage

```ruby
# ActiveAdmin article form conf:
  form do |f|
    f.inputs 'Article' do
      f.input :title
      f.input :description, as: :easymde_editor
      f.input :published
    end
    f.actions
  end
```

## Contributing

Bug reports and pull requests are welcome on GitHub at https://github.com/parti-coop/activeadmin_easymde.

## License

The gem is available as open source under the terms of the [MIT License](https://opensource.org/licenses/MIT).
