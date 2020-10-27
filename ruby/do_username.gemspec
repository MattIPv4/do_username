Gem::Specification.new do |s|
  s.name        = 'do_username'
  s.version     = '0.0.3'
  s.summary     = 'DigitalOcean Username Generator'
  s.description = 'A DigitalOcean-community-themed username generator.'
  s.authors     = ['DigitalOcean', 'Matt Cowley']
  s.email       = 'me@mattcowley.co.uk'
  s.files       = ['lib/do_username.rb']
  s.homepage    = 'https://github.com/MattIPv4/do_username/tree/master/ruby#readme'
  s.license     = 'Apache-2.0'
  s.executables = ['do_username']
  s.metadata    = {
    'bug_tracker_uri' => 'https://github.com/MattIPv4/do_username/issues',
    'homepage_uri' => 'https://github.com/MattIPv4/do_username/tree/master/ruby#readme',
    'source_code_uri' => 'https://github.com/MattIPv4/do_username'
  }

  s.required_ruby_version = Gem::Requirement.new('>= 2.5.0')

  s.add_development_dependency 'rspec', '~> 3.9'
  s.add_development_dependency 'rubocop', '~> 0.90.0'
  s.add_development_dependency 'rubocop-performance', '~> 1.8'
  s.add_development_dependency 'rubocop-rspec', '~> 1.43'
end
