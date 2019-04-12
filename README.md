Installation process

- Clone this project "git clone https://github.com/programarf/eru.git eru"
- cd eru
- clone vm "git clone https://github.com/geerlingguy/drupal-vm.git vm"
- cp config.yml vm
- cd vm
- type "vagrant up"
- type "vagrant ssh"
- type "composer install"/"composer update"
- drush config-set "system.site" uuid "4f882654-0e81-4c72-8114-c0f004c2feb3"
- type "drush cim"
- clear cache
