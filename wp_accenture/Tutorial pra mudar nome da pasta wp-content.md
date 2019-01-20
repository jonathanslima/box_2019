Tutorial pra mudar nome da pasta wp-content

Ir para wp-config.php, procurar a linha 

require_once(ABSPATH . 'wp-settings.php');

e escrever acima dela:

define ('WP_CONTENT_FOLDERNAME', 'wp-project');
define ('WP_CONTENT_DIR', ABSPATH . WP_CONTENT_FOLDERNAME);
$protocol = ($_SERVER['HTTPS'] && $_SERVER['HTTPS'] != "off") ? "https" : "http";
define ('WP_CONTENT_URL', $protocol . '://' . $_SERVER['SERVER_NAME'] . '/'.WP_CONTENT_FOLDERNAME);

Depois cria um .htaccess

# BEGIN WordPress
<IfModule mod_rewrite.c>
	RewriteEngine On
	RewriteBase /
	RewriteRule ^index\.php$ - [L]
	RewriteCond %{REQUEST_FILENAME} !-f
	RewriteCond %{REQUEST_FILENAME} !-d
	RewriteRule . /index.php [L]
</IfModule>
# END WordPress

Depois vai em /etc/apache2/sites-available/000-default.conf e cria um vhost

<VirtualHost *:80>
  DocumentRoot "/var/www/html/nomeDaPasta"
  ServerName nomeDaPasta.dev
  <Directory "/var/www/html/nomeDaPasta"> 
    Options Indexes FollowSymLinks
    AllowOverride All
    <IfVersion < 2.3 >
      Order allow,deny
      Allow from all
    </IfVersion>
    <IfVersion >= 2.3 >
      Require all granted
    </IfVersion>
  </Directory>

# Error Documents
  ErrorDocument 503 /503.html
</VirtualHost>

Depois vai em etc/hosts e coloca 

127.0.1.1	nomeDaPasta.dev


