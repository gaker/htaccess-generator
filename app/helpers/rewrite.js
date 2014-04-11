
var rewrite = Ember.Handlebars.makeBoundHelper(function(obj) {
  var out = '';
  if (obj.id === 1) {
    out = 'RewriteRule ^index\\.php$ - [L]\n';
    out = out + '    RewriteCond %{REQUEST_FILENAME} !-f\n';
    out = out + '    RewriteCond %{REQUEST_FILENAME} !-d\n';
    out = out + '    RewriteRule . ./index.php [L]';
  } else if (obj.id === 2) {
    out = 'RewriteCond %{REQUEST_FILENAME} -s [OR]\n';
    out = out + '    RewriteCond %{REQUEST_FILENAME} -l [OR]\n';
    out = out + '    RewriteCond %{REQUEST_FILENAME} -d\n';
    out = out + '    RewriteRule ^ - [L]\n';
    out = out + '    RewriteRule ^(.+)$ index.php/$1 [L]';
  } else if (obj.id === 3) {
    out = 'RewriteCond %{REQUEST_FILENAME} !-f\n';
    out = out + '    RewriteCond %{REQUEST_FILENAME} !-d\n';
    out = out + '    RewriteRule ^(.*)$ index.php?q=$1 [L,QSA]';
  } else if (obj.id === 4) {
    out = 'RewriteCond %{REQUEST_FILENAME} !-d\n';
    out = out + '    RewriteCond %{REQUEST_FILENAME} !-f\n';
    out = out + '    RewriteRule ^ index.php [L]';
  } else if (obj.id === 5) {
    out = 'RewriteCond %{REQUEST_FILENAME} !-f\n';
    out = out + '    RewriteCond %{REQUEST_FILENAME} !-d\n';
    out = out + '    RewriteCond %{REQUEST_URI} !^/(favicon\\.ico|apple-touch-icon.*\\.png)$ [NC]\n';
    out = out + '    RewriteRule (.+) index.php?p=$1 [QSA,L]';
  } else if (obj.id === 6) {
    out = 'RewriteCond %{REQUEST_FILENAME} !-f\n';
    out = out + '    RewriteCond %{REQUEST_FILENAME} !-d\n';
    out = out + '    RewriteRule ^(.*)$ /index.php/$1 [L]';
  }

  return out;

});

export default rewrite;
