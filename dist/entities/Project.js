var a17_0x3646c0=a17_0x2a60;(function(_0x3f738c,_0x38b308){var _0x40fa41=a17_0x2a60,_0x294ae7=_0x3f738c();while(!![]){try{var _0x233467=-parseInt(_0x40fa41(0x140))/0x1*(parseInt(_0x40fa41(0x14f))/0x2)+-parseInt(_0x40fa41(0x151))/0x3+-parseInt(_0x40fa41(0x154))/0x4*(parseInt(_0x40fa41(0x13f))/0x5)+parseInt(_0x40fa41(0x143))/0x6+-parseInt(_0x40fa41(0x139))/0x7*(parseInt(_0x40fa41(0x144))/0x8)+-parseInt(_0x40fa41(0x13a))/0x9+parseInt(_0x40fa41(0x14b))/0xa;if(_0x233467===_0x38b308)break;else _0x294ae7['push'](_0x294ae7['shift']());}catch(_0x4a7655){_0x294ae7['push'](_0x294ae7['shift']());}}}(a17_0x3429,0xabb0a));var __decorate=this&&this['__decorate']||function(_0xac474c,_0x3f3043,_0x4634b5,_0x55f16e){var _0xd230dd=a17_0x2a60,_0x1b7704=arguments[_0xd230dd(0x146)],_0x110699=_0x1b7704<0x3?_0x3f3043:_0x55f16e===null?_0x55f16e=Object[_0xd230dd(0x152)](_0x3f3043,_0x4634b5):_0x55f16e,_0x19c03f;if(typeof Reflect===_0xd230dd(0x13c)&&typeof Reflect[_0xd230dd(0x13b)]===_0xd230dd(0x150))_0x110699=Reflect[_0xd230dd(0x13b)](_0xac474c,_0x3f3043,_0x4634b5,_0x55f16e);else{for(var _0x269f0f=_0xac474c[_0xd230dd(0x146)]-0x1;_0x269f0f>=0x0;_0x269f0f--)if(_0x19c03f=_0xac474c[_0x269f0f])_0x110699=(_0x1b7704<0x3?_0x19c03f(_0x110699):_0x1b7704>0x3?_0x19c03f(_0x3f3043,_0x4634b5,_0x110699):_0x19c03f(_0x3f3043,_0x4634b5))||_0x110699;}return _0x1b7704>0x3&&_0x110699&&Object[_0xd230dd(0x153)](_0x3f3043,_0x4634b5,_0x110699),_0x110699;},__metadata=this&&this['__metadata']||function(_0x3f9207,_0x374ec7){var _0x540a01=a17_0x2a60;if(typeof Reflect===_0x540a01(0x13c)&&typeof Reflect[_0x540a01(0x147)]==='function')return Reflect[_0x540a01(0x147)](_0x3f9207,_0x374ec7);};import{BaseEntity,Column,CreateDateColumn,Entity,JoinTable,ManyToMany,OneToMany,PrimaryGeneratedColumn}from'typeorm';import a17_0x4df423 from'./Measurement.js';import a17_0x27c82a from'./User.js';function a17_0x2a60(_0x3aa6e2,_0x583590){var _0x3429c0=a17_0x3429();return a17_0x2a60=function(_0x2a605e,_0x4d0909){_0x2a605e=_0x2a605e-0x139;var _0x44ef71=_0x3429c0[_0x2a605e];return _0x44ef71;},a17_0x2a60(_0x3aa6e2,_0x583590);}import{Expose}from'class-transformer';function a17_0x3429(){var _0x3981f6=['uuid','design:type','2brbwdp','function','296814hXrhKU','getOwnPropertyDescriptor','defineProperty','349012ZKFtNu','1939dclQPY','7218009ARSQmv','decorate','object','prototype','detailedDescription','5bqsVpd','1017314MYyaMV','users','date','4508970hPxsgz','29896fRRumc','measurements','length','metadata','projects','timestamp\x20with\x20time\x20zone','description','29924020kVChOZ','name'];a17_0x3429=function(){return _0x3981f6;};return a17_0x3429();}let Project=class Project extends BaseEntity{['id'];[a17_0x3646c0(0x142)];['name'];[a17_0x3646c0(0x14a)];[a17_0x3646c0(0x13e)];[a17_0x3646c0(0x141)];[a17_0x3646c0(0x145)];};__decorate([Expose(),PrimaryGeneratedColumn(a17_0x3646c0(0x14d)),__metadata(a17_0x3646c0(0x14e),String)],Project[a17_0x3646c0(0x13d)],'id',void 0x0),__decorate([Expose(),CreateDateColumn({'type':a17_0x3646c0(0x149)}),__metadata('design:type',Date)],Project[a17_0x3646c0(0x13d)],'date',void 0x0),__decorate([Expose(),Column({'length':0x64,'unique':!![]}),__metadata(a17_0x3646c0(0x14e),String)],Project['prototype'],a17_0x3646c0(0x14c),void 0x0),__decorate([Expose(),Column({'length':0xc8}),__metadata(a17_0x3646c0(0x14e),String)],Project[a17_0x3646c0(0x13d)],a17_0x3646c0(0x14a),void 0x0),__decorate([Expose(),Column({'length':0x3e8}),__metadata(a17_0x3646c0(0x14e),String)],Project['prototype'],a17_0x3646c0(0x13e),void 0x0),__decorate([ManyToMany(()=>a17_0x27c82a,_0x5b7157=>_0x5b7157[a17_0x3646c0(0x148)]),JoinTable(),__metadata(a17_0x3646c0(0x14e),Object)],Project[a17_0x3646c0(0x13d)],a17_0x3646c0(0x141),void 0x0),__decorate([OneToMany(()=>a17_0x4df423,_0x4765cd=>_0x4765cd['project']),__metadata(a17_0x3646c0(0x14e),Object)],Project[a17_0x3646c0(0x13d)],'measurements',void 0x0),Project=__decorate([Entity()],Project);export default Project;