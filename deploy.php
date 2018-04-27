<?php
namespace Deployer;

require 'recipe/laravel.php';

// Project name
set('application', 'mega-mate');

// Project repository
set('repository', 'git@github.com:chas-academy/13-beta-product-release--Iron.git');

// [Optional] Allocate tty for git clone. Default value is false.
set('git_tty', true); 

// Shared files/dirs between deploys 
add('shared_files', []);
add('shared_dirs', []);

// Writable dirs by web server 
add('writable_dirs', []);
set('allow_anonymous_stats', false);

// Hosts

host('teamiron.me')
    ->user('web')
    ->identityFile('~/.ssh/id_rsa')
    ->stage('dev')
    ->set('branch', 'develop')
    ->set('deploy_path', '/var/www/teamiron.me');    
    
// Tasks

task('install-npm', function () {
    run('cd {{release_path}} && npm install');
});

task('build', function () {
    run('cd {{release_path}} && npm run production');
});

task('artisan:migrate:fresh', function () {
    run('{{bin/php}} {{release_path}}/artisan migrate:fresh --seed');
  });

desc('Dump autoload before seed');
task('dump-autoload', function () {
    $output = run('cd {{release_path}} && composer install');
    writeln('<info>' . $output . '</info>');
});

// [Optional] if deploy fails automatically unlock.
after('deploy:failed', 'deploy:unlock');
// Migrate database before symlink new release.
before('deploy:symlink', 'artisan:migrate:fresh');
after('artisan:migrate:fresh', 'dump-autoload');
after('dump-autoload', 'install-npm');
after('install-npm', 'build');
desc('Clear config cache');
task('artisan:config:clear', function() {
  run('{{bin/php}} {{release_path}}/artisan config:clear');
});
after('deploy:symlink', 'artisan:config:clear');

desc('Restart PHP-FPM service');
task('php-fpm:restart', function () {
    run('sudo service php7.2-fpm reload');
});
after('deploy:symlink', 'php-fpm:restart');

