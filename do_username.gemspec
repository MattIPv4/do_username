Gem::Specification.new do |s|
  s.name        = 'do_username'
  s.version     = '0.0.2'
  s.date        = '2020-10-22'
  s.summary     = 'DigitalOcean Username Generator'
  s.description = 'A DigitalOcean-community-themed username generator.'
  s.authors     = ['DigitalOcean', 'Matt Cowley']
  s.email       = 'me@mattcowley.co.uk'
  s.files       = ['lib/do_username.rb']
  s.homepage    = 'https://rubygems.org/gems/do_username'
  s.license     = 'Apache-2.0'

  s.add_development_dependency 'rspec', '~> 3.9.0'
end
