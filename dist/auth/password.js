const a2_0x32bfb5=a2_0x24d5;function a2_0x24d5(_0x47a15d,_0x3d6c81){const _0xcc3be4=a2_0xcc3b();return a2_0x24d5=function(_0x24d5d7,_0x549239){_0x24d5d7=_0x24d5d7-0xc6;let _0xe32c05=_0xcc3be4[_0x24d5d7];return _0xe32c05;},a2_0x24d5(_0x47a15d,_0x3d6c81);}(function(_0x30c9cb,_0x14db50){const _0x46161c=a2_0x24d5,_0xa7a2e3=_0x30c9cb();while(!![]){try{const _0x3c2593=parseInt(_0x46161c(0xd1))/0x1*(parseInt(_0x46161c(0xc9))/0x2)+-parseInt(_0x46161c(0xc6))/0x3+-parseInt(_0x46161c(0xcb))/0x4*(parseInt(_0x46161c(0xca))/0x5)+-parseInt(_0x46161c(0xcd))/0x6+-parseInt(_0x46161c(0xd4))/0x7*(parseInt(_0x46161c(0xc7))/0x8)+parseInt(_0x46161c(0xd0))/0x9*(parseInt(_0x46161c(0xd2))/0xa)+-parseInt(_0x46161c(0xc8))/0xb*(-parseInt(_0x46161c(0xcc))/0xc);if(_0x3c2593===_0x14db50)break;else _0xa7a2e3['push'](_0xa7a2e3['shift']());}catch(_0x5e182a){_0xa7a2e3['push'](_0xa7a2e3['shift']());}}}(a2_0xcc3b,0xe2e4b));function a2_0xcc3b(){const _0x53a002=['71964jalfhQ','11045430JVWAyZ','toString','hash','9IegNsK','123DGIIOD','17757990aaSUnC','from','7gcAWKm','salt','2372229XVAIwR','2632264YgaogE','3652IwNplN','12130iDWYEG','10IYyoHO','1245524VvPPxV'];a2_0xcc3b=function(){return _0x53a002;};return a2_0xcc3b();}import{randomBytes,scrypt as a2_0x29ca62}from'crypto';import{promisify}from'util';const scrypt=promisify(a2_0x29ca62),saltSize=0x10,hashSize=0x40;export class SaltedHashedPassword{[a2_0x32bfb5(0xd5)];[a2_0x32bfb5(0xcf)];constructor(_0x1d0843,_0x4e347c){const _0x40360a=a2_0x32bfb5;this['salt']=_0x1d0843,this[_0x40360a(0xcf)]=_0x4e347c;}['toHexString'](){const _0x19fa98=a2_0x32bfb5;let _0x1b8406=this[_0x19fa98(0xd5)][_0x19fa98(0xce)]('hex'),_0x33e50a=this['hash'][_0x19fa98(0xce)]('hex');return _0x1b8406+':'+_0x33e50a;}}export async function hashPassword(_0x267a11,_0x30b476,_0xfcce35){const _0x908572=a2_0x32bfb5;_0x30b476=_0x30b476??randomBytes(saltSize);!(_0x30b476 instanceof Buffer)&&(_0x30b476=Buffer[_0x908572(0xd3)](_0x30b476,_0xfcce35));let _0xc38d8f=await scrypt(_0x267a11,_0x30b476,hashSize);return new SaltedHashedPassword(_0x30b476,_0xc38d8f);}