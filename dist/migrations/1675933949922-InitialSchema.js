function a25_0x4696(_0x2056b6,_0x16ba23){var _0x470138=a25_0x4701();return a25_0x4696=function(_0x4696ce,_0x5eeaff){_0x4696ce=_0x4696ce-0x1d2;var _0x44b05d=_0x470138[_0x4696ce];return _0x44b05d;},a25_0x4696(_0x2056b6,_0x16ba23);}function a25_0x4701(){var _0x52d061=['DROP\x20INDEX\x20\x22public\x22.\x22IDX_9666c6dcd769c698bed4aa4bf5\x22','CREATE\x20TABLE\x20\x22revoked_refresh_token\x22\x20(\x22jti\x22\x20character\x20varying(36)\x20NOT\x20NULL,\x20\x22expiryDate\x22\x20TIMESTAMP\x20NOT\x20NULL,\x20CONSTRAINT\x20\x22PK_87c95ca1a90040314afdd389efc\x22\x20PRIMARY\x20KEY\x20(\x22jti\x22))','DROP\x20TABLE\x20\x22user\x22','name','ALTER\x20TABLE\x20\x22project_users_user\x22\x20ADD\x20CONSTRAINT\x20\x22FK_f8300efd87679e1e21532be9808\x22\x20FOREIGN\x20KEY\x20(\x22userId\x22)\x20REFERENCES\x20\x22user\x22(\x22id\x22)\x20ON\x20DELETE\x20CASCADE\x20ON\x20UPDATE\x20CASCADE','DROP\x20TABLE\x20\x22project_users_user\x22','DROP\x20TABLE\x20\x22measurement\x22','6271530ZVZIsZ','3038000zJOdgy','DROP\x20INDEX\x20\x22public\x22.\x22IDX_f8300efd87679e1e21532be980\x22','363089yAvVkL','CREATE\x20INDEX\x20\x22IDX_9666c6dcd769c698bed4aa4bf5\x22\x20ON\x20\x22project_users_user\x22\x20(\x22projectId\x22)\x20','2739525lJHfPs','2bnPvfk','query','CREATE\x20INDEX\x20\x22IDX_f8300efd87679e1e21532be980\x22\x20ON\x20\x22project_users_user\x22\x20(\x22userId\x22)\x20','CREATE\x20TABLE\x20\x22measurement\x22\x20(\x22id\x22\x20uuid\x20NOT\x20NULL\x20DEFAULT\x20uuid_generate_v4(),\x20\x22date\x22\x20TIMESTAMP\x20WITH\x20TIME\x20ZONE\x20NOT\x20NULL,\x20\x22userId\x22\x20uuid\x20NOT\x20NULL,\x20\x22projectId\x22\x20uuid\x20NOT\x20NULL,\x20CONSTRAINT\x20\x22PK_742ff3cc0dcbbd34533a9071dfd\x22\x20PRIMARY\x20KEY\x20(\x22id\x22))','down','CREATE\x20TABLE\x20\x22project\x22\x20(\x22id\x22\x20uuid\x20NOT\x20NULL\x20DEFAULT\x20uuid_generate_v4(),\x20\x22name\x22\x20character\x20varying(100)\x20NOT\x20NULL,\x20\x22description\x22\x20character\x20varying(200)\x20NOT\x20NULL,\x20\x22detailedDescription\x22\x20character\x20varying(1000)\x20NOT\x20NULL,\x20CONSTRAINT\x20\x22UQ_dedfea394088ed136ddadeee89c\x22\x20UNIQUE\x20(\x22name\x22),\x20CONSTRAINT\x20\x22PK_4d68b1358bb5b766d3e78f32f57\x22\x20PRIMARY\x20KEY\x20(\x22id\x22))','6352143BYTCAQ','ALTER\x20TABLE\x20\x22measurement\x22\x20ADD\x20CONSTRAINT\x20\x22FK_e2c952d9d21c2899bfc69508300\x22\x20FOREIGN\x20KEY\x20(\x22userId\x22)\x20REFERENCES\x20\x22user\x22(\x22id\x22)\x20ON\x20DELETE\x20NO\x20ACTION\x20ON\x20UPDATE\x20NO\x20ACTION','CREATE\x20TABLE\x20\x22project_users_user\x22\x20(\x22projectId\x22\x20uuid\x20NOT\x20NULL,\x20\x22userId\x22\x20uuid\x20NOT\x20NULL,\x20CONSTRAINT\x20\x22PK_198c78e84c3bcdb0dc182e6d1e0\x22\x20PRIMARY\x20KEY\x20(\x22projectId\x22,\x20\x22userId\x22))','ALTER\x20TABLE\x20\x22measurement\x22\x20DROP\x20CONSTRAINT\x20\x22FK_e2c952d9d21c2899bfc69508300\x22','CREATE\x20TABLE\x20\x22user\x22\x20(\x22id\x22\x20uuid\x20NOT\x20NULL\x20DEFAULT\x20uuid_generate_v4(),\x20\x22username\x22\x20character\x20varying(200)\x20NOT\x20NULL,\x20\x22passwordHash\x22\x20character\x20varying(161)\x20NOT\x20NULL,\x20CONSTRAINT\x20\x22UQ_78a916df40e02a9deb1c4b75edb\x22\x20UNIQUE\x20(\x22username\x22),\x20CONSTRAINT\x20\x22PK_cace4a159ff9f2512dd42373760\x22\x20PRIMARY\x20KEY\x20(\x22id\x22))','ALTER\x20TABLE\x20\x22project_users_user\x22\x20DROP\x20CONSTRAINT\x20\x22FK_9666c6dcd769c698bed4aa4bf55\x22','ALTER\x20TABLE\x20\x22measurement\x22\x20ADD\x20CONSTRAINT\x20\x22FK_689da9cfabb989c19243894d7c3\x22\x20FOREIGN\x20KEY\x20(\x22projectId\x22)\x20REFERENCES\x20\x22project\x22(\x22id\x22)\x20ON\x20DELETE\x20NO\x20ACTION\x20ON\x20UPDATE\x20NO\x20ACTION','1488411LEpNaD','56gRkPNK','38203950sqjacK','12LHyvRE'];a25_0x4701=function(){return _0x52d061;};return a25_0x4701();}var a25_0x3ea4b3=a25_0x4696;(function(_0x414a23,_0x1c09a5){var _0x5340a1=a25_0x4696,_0x1131d3=_0x414a23();while(!![]){try{var _0x5e58e1=parseInt(_0x5340a1(0x1de))/0x1*(parseInt(_0x5340a1(0x1e1))/0x2)+parseInt(_0x5340a1(0x1e0))/0x3+-parseInt(_0x5340a1(0x1dc))/0x4+parseInt(_0x5340a1(0x1db))/0x5+-parseInt(_0x5340a1(0x1d3))/0x6*(-parseInt(_0x5340a1(0x1e7))/0x7)+parseInt(_0x5340a1(0x1ef))/0x8*(parseInt(_0x5340a1(0x1ee))/0x9)+-parseInt(_0x5340a1(0x1d2))/0xa;if(_0x5e58e1===_0x1c09a5)break;else _0x1131d3['push'](_0x1131d3['shift']());}catch(_0x3e3a0a){_0x1131d3['push'](_0x1131d3['shift']());}}}(a25_0x4701,0xe165a));export class InitialSchema1675933949922{[a25_0x3ea4b3(0x1d7)]='InitialSchema1675933949922';async['up'](_0x3ab52a){var _0x1038e6=a25_0x3ea4b3;await _0x3ab52a[_0x1038e6(0x1e2)](_0x1038e6(0x1e6)),await _0x3ab52a[_0x1038e6(0x1e2)](_0x1038e6(0x1e4)),await _0x3ab52a[_0x1038e6(0x1e2)](_0x1038e6(0x1eb)),await _0x3ab52a[_0x1038e6(0x1e2)](_0x1038e6(0x1d5)),await _0x3ab52a[_0x1038e6(0x1e2)](_0x1038e6(0x1e9)),await _0x3ab52a[_0x1038e6(0x1e2)](_0x1038e6(0x1df)),await _0x3ab52a[_0x1038e6(0x1e2)](_0x1038e6(0x1e3)),await _0x3ab52a[_0x1038e6(0x1e2)](_0x1038e6(0x1e8)),await _0x3ab52a[_0x1038e6(0x1e2)](_0x1038e6(0x1ed)),await _0x3ab52a[_0x1038e6(0x1e2)]('ALTER\x20TABLE\x20\x22project_users_user\x22\x20ADD\x20CONSTRAINT\x20\x22FK_9666c6dcd769c698bed4aa4bf55\x22\x20FOREIGN\x20KEY\x20(\x22projectId\x22)\x20REFERENCES\x20\x22project\x22(\x22id\x22)\x20ON\x20DELETE\x20CASCADE\x20ON\x20UPDATE\x20CASCADE'),await _0x3ab52a[_0x1038e6(0x1e2)](_0x1038e6(0x1d8));}async[a25_0x3ea4b3(0x1e5)](_0x1b0f59){var _0x850bae=a25_0x3ea4b3;await _0x1b0f59[_0x850bae(0x1e2)]('ALTER\x20TABLE\x20\x22project_users_user\x22\x20DROP\x20CONSTRAINT\x20\x22FK_f8300efd87679e1e21532be9808\x22'),await _0x1b0f59[_0x850bae(0x1e2)](_0x850bae(0x1ec)),await _0x1b0f59[_0x850bae(0x1e2)]('ALTER\x20TABLE\x20\x22measurement\x22\x20DROP\x20CONSTRAINT\x20\x22FK_689da9cfabb989c19243894d7c3\x22'),await _0x1b0f59['query'](_0x850bae(0x1ea)),await _0x1b0f59[_0x850bae(0x1e2)](_0x850bae(0x1dd)),await _0x1b0f59[_0x850bae(0x1e2)](_0x850bae(0x1d4)),await _0x1b0f59[_0x850bae(0x1e2)](_0x850bae(0x1d9)),await _0x1b0f59[_0x850bae(0x1e2)]('DROP\x20TABLE\x20\x22revoked_refresh_token\x22'),await _0x1b0f59[_0x850bae(0x1e2)](_0x850bae(0x1d6)),await _0x1b0f59[_0x850bae(0x1e2)](_0x850bae(0x1da)),await _0x1b0f59[_0x850bae(0x1e2)]('DROP\x20TABLE\x20\x22project\x22');}}