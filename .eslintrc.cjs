module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
  },
}

// venlink example

// server {
//   listen      [::]:80;
//   listen      80;
//   server_name development.venlink.fetchlydev.com;
//   access_log  /var/log/nginx/frontend-access.log;
//   error_log   /var/log/nginx/frontend-error.log;

//   include /home/dokku/frontend/nginx.conf.d/*.conf;
//   location / {
//     return 301 https://$host:443$request_uri;
//   }

// }

// server {
//   listen      [::]:443 ssl http2;
//   listen      443 ssl http2;

//   server_name development.venlink.fetchlydev.com;
//   access_log  /var/log/nginx/frontend-access.log;
//   error_log   /var/log/nginx/frontend-error.log;

//   ssl_certificate           /home/dokku/frontend/tls/server.crt;
//   ssl_certificate_key       /home/dokku/frontend/tls/server.key;
//   ssl_protocols             TLSv1.2 TLSv1.3;
//   ssl_prefer_server_ciphers off;

//   keepalive_timeout   70;

//   location    / {

//     gzip on;
//     gzip_min_length  1100;
//     gzip_buffers  4 32k;
//     gzip_types    text/css text/javascript text/xml text/plain text/x-component application/javascript application/x-javascript application/json application/xml  application/rss+xml font/truetype application/x-font-ttf font/opentype application/vnd.ms-fontobject image/svg+xml;
//     gzip_vary on;
//     gzip_comp_level  6;

//     proxy_pass  http://frontend-5000;
//     http2_push_preload on;
//     proxy_http_version 1.1;
//     proxy_read_timeout 60s;
//     proxy_buffer_size 4096;
//     proxy_buffering on;
//     proxy_buffers 8 4096;
//     proxy_busy_buffers_size 8192;
//     proxy_set_header Upgrade $http_upgrade;
//     proxy_set_header Connection $http_connection;
//     proxy_set_header Host $http_host;
//     proxy_set_header X-Forwarded-For $remote_addr;
//     proxy_set_header X-Forwarded-Port $server_port;
//     proxy_set_header X-Forwarded-Proto $scheme;
//     proxy_set_header X-Request-Start $msec;

//   }



//   error_page 400 401 402 403 405 406 407 408 409 410 411 412 413 414 415 416 417 418 420 422 423 424 426 428 429 431 444 449 450 451 /400-error.html;
//   location /400-error.html {
//     root /var/lib/dokku/data/nginx-vhosts/dokku-errors;
//     internal;
//   }

//   error_page 404 /404-error.html;
//   location /404-error.html {
//     root /var/lib/dokku/data/nginx-vhosts/dokku-errors;
//     internal;
//   }

//   error_page 500 501 503 504 505 506 507 508 509 510 511 /500-error.html;
//   location /500-error.html {
//     root /var/lib/dokku/data/nginx-vhosts/dokku-errors;
//     internal;
//   }

//   error_page 502 /502-error.html;
//   location /502-error.html {
//     root /var/lib/dokku/data/nginx-vhosts/dokku-errors;
//     internal;
//   }
//   include /home/dokku/frontend/nginx.conf.d/*.conf;
// }

// upstream frontend-5000 {

//   server 172.17.0.9:5000;
// }
