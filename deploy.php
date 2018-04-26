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

task('build', function () {
    run('cd {{release_path}} && build');
});

// [Optional] if deploy fails automatically unlock.
after('deploy:failed', 'deploy:unlock');

// Migrate database before symlink new release.

before('deploy:symlink', 'artisan:migrate');

