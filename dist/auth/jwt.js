const a1_0x3ee8e4=a1_0x5b9f;(function(_0x4a3141,_0x77f34b){const _0x2e60cd=a1_0x5b9f,_0x3e82b6=_0x4a3141();while(!![]){try{const _0x1acd76=-parseInt(_0x2e60cd(0x1c2))/0x1*(-parseInt(_0x2e60cd(0x1b8))/0x2)+parseInt(_0x2e60cd(0x1b7))/0x3+parseInt(_0x2e60cd(0x1ad))/0x4+parseInt(_0x2e60cd(0x1c6))/0x5*(parseInt(_0x2e60cd(0x1b2))/0x6)+-parseInt(_0x2e60cd(0x1c1))/0x7*(parseInt(_0x2e60cd(0x1b9))/0x8)+parseInt(_0x2e60cd(0x1b1))/0x9+parseInt(_0x2e60cd(0x1b6))/0xa*(-parseInt(_0x2e60cd(0x1af))/0xb);if(_0x1acd76===_0x77f34b)break;else _0x3e82b6['push'](_0x3e82b6['shift']());}catch(_0x1e902a){_0x3e82b6['push'](_0x3e82b6['shift']());}}}(a1_0x14f4,0x1c439));import{randomUUID}from'crypto';import a1_0x21e643 from'../entities/RevokedRefreshToken.js';import a1_0x1b4996 from'jsonwebtoken';const {sign:signJwt,verify:verifyJwt}=a1_0x1b4996,accessTokenOptions=Object[a1_0x3ee8e4(0x1bf)]({'algorithm':a1_0x3ee8e4(0x1ae),'expiresIn':'1h'}),refreshTokenOptions=Object[a1_0x3ee8e4(0x1bf)]({'algorithm':a1_0x3ee8e4(0x1ae),'expiresIn':a1_0x3ee8e4(0x1c3)}),verifyTokenOptions=Object[a1_0x3ee8e4(0x1bf)]({'algorithms':[a1_0x3ee8e4(0x1ae)]});export function generateTokens(_0x46a2c1){const _0xd6e952=a1_0x3ee8e4;let _0x413769={'sub':_0x46a2c1['id'],'userRole':_0x46a2c1[_0xd6e952(0x1bd)]},_0x5dd4fe={..._0x413769,'jti':randomUUID()};return{'accessToken':signJwt(_0x413769,process['env']['ACCESS_TOKEN_SECRET'],accessTokenOptions),'refreshToken':signJwt(_0x5dd4fe,process[_0xd6e952(0x1b3)][_0xd6e952(0x1bb)],refreshTokenOptions)};}function a1_0x5b9f(_0x381363,_0x426a46){const _0x14f436=a1_0x14f4();return a1_0x5b9f=function(_0x5b9f60,_0x642852){_0x5b9f60=_0x5b9f60-0x1ad;let _0x21f7f=_0x14f436[_0x5b9f60];return _0x21f7f;},a1_0x5b9f(_0x381363,_0x426a46);}function a1_0x14f4(){const _0x28aa93=['headers','seal','insert','21KzxDRU','20455iWhSUy','30d','exp','jti','55FkXQmp','312448KLelBo','HS256','6639743AfhJCM','getRepository','2069964JwkYMq','116286zaXpDh','env','authorization','expiryDate','10yTkWYP','620922hgoGDu','8LIFKwJ','241896NaNmCe','split','REFRESH_TOKEN_SECRET','refresh-token','role'];a1_0x14f4=function(){return _0x28aa93;};return a1_0x14f4();}export function verifyAccessToken(_0x3ec9f8){const _0x3628d5=a1_0x3ee8e4;return verifyJwt(_0x3ec9f8,process[_0x3628d5(0x1b3)]['ACCESS_TOKEN_SECRET'],verifyTokenOptions);}export function verifyRefreshToken(_0x19f1fd){const _0x381a6f=a1_0x3ee8e4;return verifyJwt(_0x19f1fd,process[_0x381a6f(0x1b3)][_0x381a6f(0x1bb)],verifyTokenOptions);}export async function revokeRefreshToken(_0x48ccc0){const _0x563fc0=a1_0x3ee8e4;let _0x50fb0c=new a1_0x21e643();_0x50fb0c[_0x563fc0(0x1c5)]=_0x48ccc0[_0x563fc0(0x1c5)],_0x50fb0c[_0x563fc0(0x1b5)]=new Date(_0x48ccc0[_0x563fc0(0x1c4)]*0x3e8),await a1_0x21e643[_0x563fc0(0x1b0)]()[_0x563fc0(0x1c0)](_0x50fb0c);}export function getAndVerifyAccessToken(_0x40684b){const _0x1a5a76=a1_0x3ee8e4;let _0x3e28b7=_0x40684b[_0x1a5a76(0x1be)][_0x1a5a76(0x1b4)],_0x262111=_0x3e28b7?.[_0x1a5a76(0x1ba)]('\x20')[0x1];return verifyAccessToken(_0x262111??'');}export function getandVerifyRefreshToken(_0x4b08af){const _0x2565f9=a1_0x3ee8e4;let _0x42b0af=_0x4b08af[_0x2565f9(0x1be)][_0x2565f9(0x1bc)];return verifyRefreshToken(_0x42b0af??'');}