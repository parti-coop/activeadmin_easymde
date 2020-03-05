
lib = File.expand_path("../lib", __FILE__)
$LOAD_PATH.unshift(lib) unless $LOAD_PATH.include?(lib)
require 'activeadmin/easymde_editor/version'

Gem::Specification.new do |spec|
  spec.name          = 'activeadmin_easymde'
  spec.version       = ActiveAdmin::EasymdeEditor::VERSION
  spec.authors       = ['yevhenii.pylypenko']
  spec.email         = ['yevhenii.pylypenko@gmail.com']

  spec.summary       = 'EasyMde editor for ActiveAdmin'
  spec.description   = 'An Active Admin plugin to use EasyMde Editor'
  spec.homepage      = 'https://github.com/YevheniiPylypenko/activeadmin_easymde'
  spec.license       = 'MIT'

  spec.files         = `git ls-files -z`.split("\x0").reject do |f|
    f.match(%r{^(test|spec|features)/})
  end
  spec.bindir        = "exe"
  spec.executables   = spec.files.grep(%r{^exe/}) { |f| File.basename(f) }
  spec.require_paths = ["lib"]

  spec.add_runtime_dependency 'activeadmin', '~> 2.0'

  spec.add_development_dependency "bundler", "~> 1.16"
  spec.add_development_dependency "rake", "~> 10.0"
  spec.add_development_dependency "rspec", "~> 3.0"
end
