(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){

},{}],2:[function(require,module,exports){
module.exports={
  "O_RDONLY": 0,
  "O_WRONLY": 1,
  "O_RDWR": 2,
  "S_IFMT": 61440,
  "S_IFREG": 32768,
  "S_IFDIR": 16384,
  "S_IFCHR": 8192,
  "S_IFBLK": 24576,
  "S_IFIFO": 4096,
  "S_IFLNK": 40960,
  "S_IFSOCK": 49152,
  "O_CREAT": 512,
  "O_EXCL": 2048,
  "O_NOCTTY": 131072,
  "O_TRUNC": 1024,
  "O_APPEND": 8,
  "O_DIRECTORY": 1048576,
  "O_NOFOLLOW": 256,
  "O_SYNC": 128,
  "O_SYMLINK": 2097152,
  "O_NONBLOCK": 4,
  "S_IRWXU": 448,
  "S_IRUSR": 256,
  "S_IWUSR": 128,
  "S_IXUSR": 64,
  "S_IRWXG": 56,
  "S_IRGRP": 32,
  "S_IWGRP": 16,
  "S_IXGRP": 8,
  "S_IRWXO": 7,
  "S_IROTH": 4,
  "S_IWOTH": 2,
  "S_IXOTH": 1,
  "E2BIG": 7,
  "EACCES": 13,
  "EADDRINUSE": 48,
  "EADDRNOTAVAIL": 49,
  "EAFNOSUPPORT": 47,
  "EAGAIN": 35,
  "EALREADY": 37,
  "EBADF": 9,
  "EBADMSG": 94,
  "EBUSY": 16,
  "ECANCELED": 89,
  "ECHILD": 10,
  "ECONNABORTED": 53,
  "ECONNREFUSED": 61,
  "ECONNRESET": 54,
  "EDEADLK": 11,
  "EDESTADDRREQ": 39,
  "EDOM": 33,
  "EDQUOT": 69,
  "EEXIST": 17,
  "EFAULT": 14,
  "EFBIG": 27,
  "EHOSTUNREACH": 65,
  "EIDRM": 90,
  "EILSEQ": 92,
  "EINPROGRESS": 36,
  "EINTR": 4,
  "EINVAL": 22,
  "EIO": 5,
  "EISCONN": 56,
  "EISDIR": 21,
  "ELOOP": 62,
  "EMFILE": 24,
  "EMLINK": 31,
  "EMSGSIZE": 40,
  "EMULTIHOP": 95,
  "ENAMETOOLONG": 63,
  "ENETDOWN": 50,
  "ENETRESET": 52,
  "ENETUNREACH": 51,
  "ENFILE": 23,
  "ENOBUFS": 55,
  "ENODATA": 96,
  "ENODEV": 19,
  "ENOENT": 2,
  "ENOEXEC": 8,
  "ENOLCK": 77,
  "ENOLINK": 97,
  "ENOMEM": 12,
  "ENOMSG": 91,
  "ENOPROTOOPT": 42,
  "ENOSPC": 28,
  "ENOSR": 98,
  "ENOSTR": 99,
  "ENOSYS": 78,
  "ENOTCONN": 57,
  "ENOTDIR": 20,
  "ENOTEMPTY": 66,
  "ENOTSOCK": 38,
  "ENOTSUP": 45,
  "ENOTTY": 25,
  "ENXIO": 6,
  "EOPNOTSUPP": 102,
  "EOVERFLOW": 84,
  "EPERM": 1,
  "EPIPE": 32,
  "EPROTO": 100,
  "EPROTONOSUPPORT": 43,
  "EPROTOTYPE": 41,
  "ERANGE": 34,
  "EROFS": 30,
  "ESPIPE": 29,
  "ESRCH": 3,
  "ESTALE": 70,
  "ETIME": 101,
  "ETIMEDOUT": 60,
  "ETXTBSY": 26,
  "EWOULDBLOCK": 35,
  "EXDEV": 18,
  "SIGHUP": 1,
  "SIGINT": 2,
  "SIGQUIT": 3,
  "SIGILL": 4,
  "SIGTRAP": 5,
  "SIGABRT": 6,
  "SIGIOT": 6,
  "SIGBUS": 10,
  "SIGFPE": 8,
  "SIGKILL": 9,
  "SIGUSR1": 30,
  "SIGSEGV": 11,
  "SIGUSR2": 31,
  "SIGPIPE": 13,
  "SIGALRM": 14,
  "SIGTERM": 15,
  "SIGCHLD": 20,
  "SIGCONT": 19,
  "SIGSTOP": 17,
  "SIGTSTP": 18,
  "SIGTTIN": 21,
  "SIGTTOU": 22,
  "SIGURG": 16,
  "SIGXCPU": 24,
  "SIGXFSZ": 25,
  "SIGVTALRM": 26,
  "SIGPROF": 27,
  "SIGWINCH": 28,
  "SIGIO": 23,
  "SIGSYS": 12,
  "SSL_OP_ALL": 2147486719,
  "SSL_OP_ALLOW_UNSAFE_LEGACY_RENEGOTIATION": 262144,
  "SSL_OP_CIPHER_SERVER_PREFERENCE": 4194304,
  "SSL_OP_CISCO_ANYCONNECT": 32768,
  "SSL_OP_COOKIE_EXCHANGE": 8192,
  "SSL_OP_CRYPTOPRO_TLSEXT_BUG": 2147483648,
  "SSL_OP_DONT_INSERT_EMPTY_FRAGMENTS": 2048,
  "SSL_OP_EPHEMERAL_RSA": 0,
  "SSL_OP_LEGACY_SERVER_CONNECT": 4,
  "SSL_OP_MICROSOFT_BIG_SSLV3_BUFFER": 32,
  "SSL_OP_MICROSOFT_SESS_ID_BUG": 1,
  "SSL_OP_MSIE_SSLV2_RSA_PADDING": 0,
  "SSL_OP_NETSCAPE_CA_DN_BUG": 536870912,
  "SSL_OP_NETSCAPE_CHALLENGE_BUG": 2,
  "SSL_OP_NETSCAPE_DEMO_CIPHER_CHANGE_BUG": 1073741824,
  "SSL_OP_NETSCAPE_REUSE_CIPHER_CHANGE_BUG": 8,
  "SSL_OP_NO_COMPRESSION": 131072,
  "SSL_OP_NO_QUERY_MTU": 4096,
  "SSL_OP_NO_SESSION_RESUMPTION_ON_RENEGOTIATION": 65536,
  "SSL_OP_NO_SSLv2": 16777216,
  "SSL_OP_NO_SSLv3": 33554432,
  "SSL_OP_NO_TICKET": 16384,
  "SSL_OP_NO_TLSv1": 67108864,
  "SSL_OP_NO_TLSv1_1": 268435456,
  "SSL_OP_NO_TLSv1_2": 134217728,
  "SSL_OP_PKCS1_CHECK_1": 0,
  "SSL_OP_PKCS1_CHECK_2": 0,
  "SSL_OP_SINGLE_DH_USE": 1048576,
  "SSL_OP_SINGLE_ECDH_USE": 524288,
  "SSL_OP_SSLEAY_080_CLIENT_DH_BUG": 128,
  "SSL_OP_SSLREF2_REUSE_CERT_TYPE_BUG": 0,
  "SSL_OP_TLS_BLOCK_PADDING_BUG": 512,
  "SSL_OP_TLS_D5_BUG": 256,
  "SSL_OP_TLS_ROLLBACK_BUG": 8388608,
  "ENGINE_METHOD_DSA": 2,
  "ENGINE_METHOD_DH": 4,
  "ENGINE_METHOD_RAND": 8,
  "ENGINE_METHOD_ECDH": 16,
  "ENGINE_METHOD_ECDSA": 32,
  "ENGINE_METHOD_CIPHERS": 64,
  "ENGINE_METHOD_DIGESTS": 128,
  "ENGINE_METHOD_STORE": 256,
  "ENGINE_METHOD_PKEY_METHS": 512,
  "ENGINE_METHOD_PKEY_ASN1_METHS": 1024,
  "ENGINE_METHOD_ALL": 65535,
  "ENGINE_METHOD_NONE": 0,
  "DH_CHECK_P_NOT_SAFE_PRIME": 2,
  "DH_CHECK_P_NOT_PRIME": 1,
  "DH_UNABLE_TO_CHECK_GENERATOR": 4,
  "DH_NOT_SUITABLE_GENERATOR": 8,
  "NPN_ENABLED": 1,
  "RSA_PKCS1_PADDING": 1,
  "RSA_SSLV23_PADDING": 2,
  "RSA_NO_PADDING": 3,
  "RSA_PKCS1_OAEP_PADDING": 4,
  "RSA_X931_PADDING": 5,
  "RSA_PKCS1_PSS_PADDING": 6,
  "POINT_CONVERSION_COMPRESSED": 2,
  "POINT_CONVERSION_UNCOMPRESSED": 4,
  "POINT_CONVERSION_HYBRID": 6,
  "F_OK": 0,
  "R_OK": 4,
  "W_OK": 2,
  "X_OK": 1,
  "UV_UDP_REUSEADDR": 4
}

},{}],3:[function(require,module,exports){
(function (global){
let nebChecker = require('./typechecker/nebchecker')

module.exports = nebChecker

global.nebchecker = nebChecker

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./typechecker/nebchecker":6}],4:[function(require,module,exports){
(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
	typeof define === 'function' && define.amd ? define(['exports'], factory) :
	(factory((global.estreeWalker = {})));
}(this, (function (exports) { 'use strict';

function walk ( ast, ref) {
	var enter = ref.enter;
	var leave = ref.leave;

	visit( ast, null, enter, leave );
}

var shouldSkip = false;
var context = { skip: function () { return shouldSkip = true; } };

var childKeys = {};

var toString = Object.prototype.toString;

function isArray ( thing ) {
	return toString.call( thing ) === '[object Array]';
}

function visit ( node, parent, enter, leave, prop, index ) {
	if ( !node ) { return; }

	if ( enter ) {
		var _shouldSkip = shouldSkip;
		shouldSkip = false;
		enter.call( context, node, parent, prop, index );
		var skipped = shouldSkip;
		shouldSkip = _shouldSkip;

		if ( skipped ) { return; }
	}

	var keys = childKeys[ node.type ] || (
		childKeys[ node.type ] = Object.keys( node ).filter( function (key) { return typeof node[ key ] === 'object'; } )
	);

	for ( var i = 0; i < keys.length; i += 1 ) {
		var key = keys[i];
		var value = node[ key ];

		if ( isArray( value ) ) {
			for ( var j = 0; j < value.length; j += 1 ) {
				visit( value[j], node, enter, leave, key, j );
			}
		}

		else if ( value && value.type ) {
			visit( value, node, enter, leave, key, null );
		}
	}

	if ( leave ) {
		leave( node, parent, prop, index );
	}
}

exports.walk = walk;
exports.childKeys = childKeys;

Object.defineProperty(exports, '__esModule', { value: true });

})));


},{}],5:[function(require,module,exports){
// Generated by js_of_ocaml 3.1.0
(function(iJ){"use strict";var
pL=254,nH=43595,gA=42237,bH=43123,tM="??",uL="children",tL="Identifier",i3=16777215,ig=43347,gz=126467,j1=12287,mr="variance",hS=12335,bG=65370,td=">>>",j3=8202,uK=846,eP=65007,bE=119969,bF=43071,oh=115,uJ="!",pr="consequent",k3=512,de=64279,dd=8485,dc=66204,eO=120539,db=64297,lG="params",ir=128,da=8488,hR=68102,tK=235,bD=42999,np=-43,c$=12589,nZ="constructor",bC=126503,kE="yield",nG=68096,tb=-53,tc="fd ",c_=120744,eN=126560,uI="start",pq="target",tJ=1023,eM=177972,hQ=44015,no="var",c9=65855,gy=43776,mh="0o",hm=43215,c8=12592,nF=">",gx=12336,c7=42124,bB=120512,pK="decorators",gw=8489,eL=66334,bA=68115,eK=64324,gv=67592,bz=126529,by=43784,c5=119807,c6=8304,gu=120137,nE=69807,mm="method",nn=69926,qk="throw",bx=65595,gr=126578,gs=64322,gt=11735,ta="of",s$=">>",eJ=178205,eI=8487,t4="Popping lex mode from empty stack",og=43249,gq=120771,gp=67589,p3=-80,c4=119972,uH="<<=",qj="e",s_="%=",s9="([^/]*)",p2=247,p1="src/parser/statement_parser.ml",jV=8239,kW=109,c3=65598,nY=69687,eH=94031,gn=67669,go=43583,eG=8348,uG="Invalid binary/octal ",nm=43019,bw=42239,t3="Out_of_memory",gm=78894,bv=11687,pJ="do",eF=43798,jv=101,bu=40959,eD=42922,eE=8454,t2="index out of bounds",qi="package",gl=126589,bt=12438,of=12442,pp="this",t1="}",eC=120654,hP=119361,gk=67637,hO=69743,t0="@",kn="type",c2=11679,eB=119892,bs=42894,c1=11311,eA=126521,ms=1024,bq=119993,br=11710,bp=8543,gj=8484,uF="module",hN=43135,qh="try",bo=126634,tZ="typeArguments",nl=43334,hM=43263,c0=67593,p0=113,uE="infinity",bn=120144,po="switch",pI="private",hL=70105,ie=119364,gi=11359,gh=8516,gC=8254,bm=11559,ez=126551,hK=68151,tI="Property",gg=42888,qg=55296,lF="implements",bl=43255,hl=8399,ml="src/parser/type_parser.ml",iI=103,kC="raw",k$=-744106340,gf=8468,bk=65470,s8="alternate",ge=11686,nW=43712,nX=43009,ey=43470,pn="export",tH=223,kh=".",tY="===",M=65535,ex=8469,k_="kind",cZ=8521,hJ=69631,gd=120085,gZ=11743,ew=126559,ev=120655,oe=69890,uD="declare",hI=65023,bj=66256,cY=65479,tX=210,bi=42622,bh=11310,cX=11711,eu=8305,et=119967,hH=68159,tG="mixins",uC="expected *",qf="boolean",es=64433,uB=256,cW=42774,tW=118,er=11564,bg=68437,gc=67871,cU=126496,cV=120145,k1="expression",qe="column",gY=66045,iA="value",eq=12348,s7=56320,tV="%.12g",bf=119964,ep=126554,hG=119140,be=43792,cT=68405,gb=126557,uA="Assert_failure",gX=119162,bd=67861,mg=114,eo=43807,bc=19967,s6="&&",cS=65663,cR=65574,tF="opaque",lB="null",bb=64111,cQ=66378,lA=123,tE="filter",uz=239,s5="expressions",cP=11703,k0="get",od=69762,nV="<",tD="exported",f$=68447,ga=11630,uy=">=",cO=11519,ba=44031,cN=69839,pH="return",j0=8286,f_=64310,f9=120084,a_=120126,a$=8335,cM=126519,uw="src/parser/expression_parser.ml",ux="(global)",nk=11502,hk=69941,cL=42511,id=44025,a9=126534,kB=120,nU=94032,f8=126555,a7=67646,a8=65629,hF=65076,tU=">>=",f7=126535,hj=69881,nT="empty",uv=117,a5=120134,a6=12343,en=70084,f6=69864,cK=12703,gW=68107,a2=126520,a3=126468,a4=43519,hi=65342,cJ=43615,hh=120831,hE=42654,em=42899,a1=43359,s3=232,s4="Division_by_zero",cI=119981,el=43738,f5=65140,a0=67638,pG=112,ek=68351,cH=68119,pZ="if",pY="immediately within another function.",f4=43388,cG=126538,ic=70015,aZ=8449,f3=120779,aY=12686,f2=126504,qd="%d",f1=68191,oc=70018,s2=57343,ej=67591,nj="'",cF=55291,ei=11727,eh=11557,cE=119980,nS=43014,ia=8188,ib=43599,aX=67967,aW=8319,mq="from",f0=42785,qc=789,gV=11775,fZ=126502,uu="-=",jZ=65279,jj=-48,lE="set",fY=63743,pF=2048,ob=64286,km="right",aU=120093,aV=8486,iC="body",aT=43743,fX=12799,cD=119965,tC="Invalid number ",eg=126563,fW=64296,gU=43766,hg=8275,ut="Lookahead.peek failed",s1="*=",tT=" : flags Open_text and Open_binary are not compatible",us="*",s0=2147483647,ef=11670,ee=43815,qb="else",sZ=65536,pE="properties",sY="\\\\",aS=120004,jU=8238,h$=8417,cC=126591,nD="arguments",ed=11719,fV=66517,aR=126500,cB=126571,pD="line",tB=246,eb=65497,ec=120571,jx="static",qa="declaration",cA=12730,fU=120597,ea=64262,hD=8420,fT=77823,lz="init",h_=66044,cz=74751,cy=195101,d$=66207,pX="proto",iu=122,d_=126602,h9=69818,hf=8276,tA="Stack_overflow",d9=11742,fS=126539,h8=8432,cx=120132,cw=120687,fR=64311,ni=43713,gT=119148,fQ=126564,cv=120745,uq="+=",ur="Not_found",cu=126590,gS=44010,aQ=131071,kZ=-46,fP=8467,gR=43759,tz="CallExpression",d8=126583,fO=74850,he=43047,d5=126530,d6=40908,d7=12543,hC=69951,nh=42655,aP=65489,aN=66503,aO=11695,fN=13311,pC=106,ty="superClass",tS="f",aL=64321,aM=11567,d4=43638,nC="const",i2="typeParameters",nR="delete",oa=124,aK=65615,sX="blocks",kY="false",fM=11718,fL=126556,aJ=11623,ly="test",tx=133,d3=64847,pW="string",h7=43456,aI=110593,ct=12538,fK=8507,lx=":",J=-36,aH=55238,cs=12292,lI=192,fI=120487,fJ=64967,aG=173782,hd=65074,fH=43741,aF=120074,tR="minus",aE=12548,sW=245,jT=8191,h6=71359,hc=43643,nQ=42537,mk="computed",fF=126579,h5=43391,fG=11558,aD=126523,sV="<<",d2=64217,iB="id",k2="as",kV="true",cr=65381,sU=958,fE=194559,mf=104,lw=108,d1=119996,fD=66559,tw="Invalid_argument",fB=64913,fC=12448,cq=126552,pV="any",nP=70066,d0=55242,h4=120781,aC=12352,aB=12295,cp=43714,tv="%ni",pU="import",up="prototype",mp=-45,uo=-42,fA=65908,tu=119,p_="debugger",un="Internal Error: Found private field in object props",p$="&",ng=43560,aA=120485,fz=65575,um="++",p9="label",cn=65495,co=64466,gQ=43204,nB=64285,fy=67644,sT="shorthand",az=68147,cm=67897,ay=8526,cl=12539,ja="0",dY=120712,dZ=43641,ax=126522,iz=248,aw=8450,av=119974,hB=119170,tQ="Sys_blocked_io",fx=67643,ts=121,tt="superTypeParameters",n$=43187,h3=12440,au=8471,ck=65473,fw=68095,nf=43013,at=126553,pT="catch",lJ=107,gP=65305,nA=43754,dX=110591,fv=67640,cj=64284,as=64317,pm="protected",dW=126515,pl=1114111,tP=-97,nz=43018,dV=11631,nO=44002,sS="%u",lD=105,p8="object",pB="break",iq=110,ci=66499,dU=65312,cf=126633,cg=120003,ch=65786,hb=66719,ce=8511,jw=8233,ul=57344,cd=11492,dT=65487,hz=119145,hA=71351,sR=" : flags Open_rdonly and Open_wronly are not compatible",fu=11726,uk=253,ne="returnType",ar=126540,tr=-24,jY="-",k9="await",gB=8205,lv="async",ft=126543,aq=126550,sQ=" : file already exists",k8="left",ap=120596,ju=8231,ha=11646,uj="/=",ui="|=",cc=64325,pS="case",dS=66511,fs=120121,ny=43137,tq="Invalid legacy octal ",jX=12288,k7="typeof",nd=43697,ao=66175,dR=126628,k6=224,pk="public",g$=69702,g_=94078,pA="enum",cb=42895,n_="in",g9=8416,hy=917999,fr=42911,p7=250,ca=120770,mj="super",kk=127343600,b$=126463,h2=43309,an=42559,gO=119179,nN="interface",fq=66512,am=126588,fp=68415,jh=102,nM=43010,gN=69871,b9=55203,b_=11507,dQ=55215,al=120629,h1=44013,tp=870530776,pR="bool",lu="default",dP=119976,uh="{",o="",pj="exportKind",nx="instanceof",mo="^",nc=43586,jS=100,i_="argument",b7=126566,b8=126558,fo=119995,ug=-17,i$="src/parser/ast.ml",hx=68100,fn=126537,sP="Match_failure",dO=43790,nw=68111,dN=8505,b6=120686,kD="+",nb=42735,aj=120127,ak=65613,hw=65100,gM=69759,h0=43609,sO="!=",dM=65500,tO="%li",na=42527,dL=65548,nv=71338,g8=42611,dK=120713,to="^=",il=127,m$=111,ai=11694,hZ=69940,fm=64318,kX="void",dJ=8584,nu="let",fl=120538,b5=120070,pz="nan",fk=126601,hY=43597,sN="\r\n",b4=68220,g7=8412,dI=42191,fj=94020,dH=177983,ah=126547,b3=11565,sM="%",i1="/",dF=126619,dG=65019,hv=42621,b2=120092,pQ="property",sL="#",b1=67839,fh=120122,fi=42890,b0=43761,hu=8256,sK="Literal",py="number",ht=43231,hs=44011,fg=11498,sJ=";",gL=65103,g6=65039,ff=64274,nL=11647,n9=43273,gK=70095,pi="=",px="function",dE=43258,me=-82,ag=126562,sI="!==",mn=6158,sH="range",pP="jsError",af=71295,bZ=65344,m_=43642,nt=42606,dC=126544,dD=64109,E="unreachable",dB=64829,uf="|",tn="End_of_file",bY=11702,dA=73727,ae=68466,lC="new",tm="Failure",ns=43764,n8="local",pw="with",dz=12783,dy=11358,tl="789",fe=65141,sG="~",bX=65481,gJ=68154,bW=12341,j2=65278,fd=19893,gI=119172,dx=68031,hr=43574,bV=43259,pO="while",iH="camlinternalFormat.ml",tk="elements",n7=43711,sF=-34,ud="each",ue="Sys_error",m9=43301,nr=43442,g5=68158,dw=126584,fc=126570,hX=65295,m8=12329,bU=11263,kj="int_of_string",n6=43702,n5=43704,ad=43822,md="operator",ki="name",dv=119970,du=65547,fb=126514,fa=65276,ac=126498,pv="callee",dt=120076,m7=43395,ds=119893,hW=917759,e$=66431,uc="*-/",m6=43709,n3=94098,e_=126546,n4="predicate",ab=64911,ph="types",nK=11505,hq=43481,hV=119154,k5=240,gH=8203,hp=42737,e9=126624,aa=8525,kU="0x",dr=68116,k4="optional",g4=69887,bT=68029,m5=70080,pg="\n",bS=126499,dq=92728,pu="finally",tj="end",e8=43311,ub="&=",pN=125,ua="%Li",ji=255,pt="loc",e7=120069,$=126627,dp=8457,g3=68099,e6=119994,_=93951,nq=69634,dn=64319,lH="source",gG=65055,g2=65062,e5=65135,t$="||",Z=66303,e4=12447,e3=126536,gF=119209,pf="generator",pe="for",bR=120133,tN="--",jW=8287,e0=74606,e1=67583,e2=66351,Y=66717,ps="mixed",eZ=64255,X=8477,ti=-79,ho=119213,eY=8318,nJ=43587,bQ=65597,bP=68023,dm=68680,t_="**",W=65594,eX=43814,m4=43042,eW=120628,n2=43696,eV=12320,t9="<=",V=66463,th="static/",U=42783,nI=43700,hU=43225,dl=42508,T=64316,tg="prefix",eU=43967,bO=120570,hn=66729,eT=42539,sE="Internal Error: Found object private prop",dk=8483,eR=126548,hT=69733,eS=8455,p6="class",bN=68607,p5="continue",gE=65343,p4=252,bM=126495,kT="key",kl=" ",n1=43695,t7="RestElement",t8="Undefined_recursive_module",m3=43471,eQ=11734,S=68120,bL=43647,g1=94094,mi=116,sD="==",bK=92159,g0=42607,jI="typeAnnotation",R=66461,bJ=173823,dj=42647,bI=120513,pM="specifiers",n0="Set.bal",t6="**=",tf="%i",di=126651,sC=-61,gD=71369,te=">>>=",dg=94111,dh=43782,kF="extends",t5="importKind",df=65338;function
u1(b,a){throw[0,b,a]}var
ih=[0];function
acW(b,c){function
f(a){u1(ih.Undefined_recursive_module,b)}function
e(b,c,a){if(typeof
b==="number")switch(b){case
0:c[a]={fun:f};break;case
1:c[a]=[tB,f];break;default:c[a]=[]}else
switch(b[0]){case
0:c[a]=[0];for(var
d=1;d<b[1].length;d++)e(b[1][d],c[a],d);break;default:c[a]=b[1]}}var
a=[];e(c,a,0);return a[0]}function
h(c,a){if(typeof
a==="function"){c.fun=a;return 0}if(a.fun){c.fun=a.fun;return 0}var
b=a.length;while(b--)c[b]=a[b];return 0}function
uN(b,c,d){if(typeof
b==="number")switch(b){case
0:c.fun=d;break;case
1:default:h(c,d)}else
switch(b[0]){case
0:for(var
a=1;a<b[1].length;a++)uN(b[1][a],c[a],d[a]);break}return 0}function
acX(d,b,e,c,f){if(c<=b)for(var
a=1;a<=f;a++)e[c+a]=d[b+a];else
for(var
a=f;a>=1;a--)e[c+a]=d[b+a];return 0}function
acZ(e,f,d){var
a=new
Array(d+1);a[0]=0;for(var
b=1,c=f+1;b<=d;b++,c++)a[b]=e[c];return a}function
or(d,e,c){var
b=new
Array(c);for(var
a=0;a<c;a++)b[a]=d[e+a];return b}function
qu(b,c,a){var
d=String.fromCharCode;if(c==0&&a<=4096&&a==b.length)return d.apply(null,b);var
e=o;for(;0<a;c+=ms,a-=ms)e+=d.apply(null,or(b,c,Math.min(a,ms)));return e}function
mu(b){if(iJ.Uint8Array)var
c=new(iJ.Uint8Array)(b.l);else
var
c=new
Array(b.l);var
e=b.c,d=e.length,a=0;for(;a<d;a++)c[a]=e.charCodeAt(a);for(d=b.l;a<d;a++)c[a]=0;b.c=c;b.t=4;return c}function
jb(d,e,b,f,c){if(c==0)return 0;if(f==0&&(c>=b.l||b.t==2&&c>=b.c.length)){b.c=d.t==4?qu(d.c,e,c):e==0&&d.c.length==c?d.c:d.c.substr(e,c);b.t=b.c.length==b.l?0:2}else
if(b.t==2&&f==b.c.length){b.c+=d.t==4?qu(d.c,e,c):e==0&&d.c.length==c?d.c:d.c.substr(e,c);b.t=b.c.length==b.l?0:2}else{if(b.t!=4)mu(b);var
g=d.c,h=b.c;if(d.t==4)if(f<=e)for(var
a=0;a<c;a++)h[f+a]=g[e+a];else
for(var
a=c-1;a>=0;a--)h[f+a]=g[e+a];else{var
i=Math.min(c,g.length-e);for(var
a=0;a<i;a++)h[f+a]=g.charCodeAt(e+a);for(;a<c;a++)h[f+a]=0}}return 0}var
qm=jb;function
lO(b,a){if(a.repeat)return a.repeat(b);var
c=o,d=0;if(b==0)return c;for(;;){if(b&1)c+=a;b>>=1;if(b==0)return c;a+=a;d++;if(d==9)a.slice(0,1)}}function
lL(a){if(a.t==2)a.c+=lO(a.l-a.c.length,"\0");else
a.c=qu(a.c,0,a.c.length);a.t=0}function
uV(a){if(a.length<24){for(var
b=0;b<a.length;b++)if(a.charCodeAt(b)>il)return false;return true}else
return!/[^\x00-\x7f]/.test(a)}function
adA(e){for(var
j=o,c=o,g,f,h,a,b=0,i=e.length;b<i;b++){f=e.charCodeAt(b);if(f<ir){for(var
d=b+1;d<i&&(f=e.charCodeAt(d))<ir;d++);if(d-b>k3){c.substr(0,1);j+=c;c=o;j+=e.slice(b,d)}else
c+=e.slice(b,d);if(d==i)break;b=d}a=1;if(++b<i&&((h=e.charCodeAt(b))&-64)==ir){g=h+(f<<6);if(f<k6){a=g-12416;if(a<ir)a=1}else{a=2;if(++b<i&&((h=e.charCodeAt(b))&-64)==ir){g=h+(g<<6);if(f<k5){a=g-925824;if(a<pF||a>=55295&&a<ul)a=2}else{a=3;if(++b<i&&((h=e.charCodeAt(b))&-64)==ir&&f<sW){a=h-63447168+(g<<6);if(a<sZ||a>pl)a=3}}}}}if(a<4){b-=a;c+="\ufffd"}else
if(a>M)c+=String.fromCharCode(55232+(a>>10),s7+(a&tJ));else
c+=String.fromCharCode(a);if(c.length>ms){c.substr(0,1);j+=c;c=o}}return j+c}function
adz(a){switch(a.t){case
9:return a.c;default:lL(a);case
0:if(uV(a.c)){a.t=9;return a.c}a.t=8;case
8:return adA(a.c)}}function
jk(c,a,b){this.t=c;this.c=a;this.l=b}jk.prototype.toString=function(){return adz(this)};function
a(a){return new
jk(0,a,a.length)}function
qs(c,b){u1(c,a(b))}function
lb(a){qs(ih.Invalid_argument,a)}function
qt(){lb(t2)}function
ac0(a,c,b){b&=ji;if(a.t!=4){if(c==a.c.length){a.c+=String.fromCharCode(b);if(c+1==a.l)a.t=0;return 0}mu(a)}a.c[c]=b;return 0}function
mt(b,a,c){if(a>>>0>=b.l)qt();return ac0(b,a,c)}function
adE(c,e){var
d=c.length,b=new
Array(d+1),a=0;for(;a<d;a++)b[a]=c[a];b[a]=e;return b}function
kG(b,a){if(b.fun)return kG(b.fun,a);var
c=b.length,d=a.length,e=c-d;if(e==0)return b.apply(null,a);else
if(e<0)return kG(b.apply(null,or(a,0,c)),or(a,c,d-c));else
return function(c){return kG(b,adE(a,c))}}function
acY(){lb(t2)}function
iR(a,b){if(b>>>0>=a.length-1)acY();return a}function
ac1(a){if(isFinite(a)){if(Math.abs(a)>=2.22507385850720138e-308)return 0;if(a!=0)return 1;return 2}return isNaN(a)?4:3}function
ac8(a,b){var
c=a[3]<<16,d=b[3]<<16;if(c>d)return 1;if(c<d)return-1;if(a[2]>b[2])return 1;if(a[2]<b[2])return-1;if(a[1]>b[1])return 1;if(a[1]<b[1])return-1;return 0}function
ade(a,b){if(a<b)return-1;if(a==b)return 0;return 1}function
v(a,b){a.t&6&&lL(a);b.t&6&&lL(b);return a.c<b.c?-1:a.c>b.c?1:0}function
lK(a,b,h){var
d=[];for(;;){if(!(h&&a===b))if(a
instanceof
jk)if(b
instanceof
jk){if(a!==b){var
c=v(a,b);if(c!=0)return c}}else
return 1;else
if(a
instanceof
Array&&a[0]===(a[0]|0)){var
e=a[0];if(e===pL)e=0;if(e===p7){a=a[1];continue}else
if(b
instanceof
Array&&b[0]===(b[0]|0)){var
f=b[0];if(f===pL)f=0;if(f===p7){b=b[1];continue}else
if(e!=f)return e<f?-1:1;else
switch(e){case
248:var
c=ade(a[2],b[2]);if(c!=0)return c;break;case
251:lb("equal: abstract value");case
255:var
c=ac8(a,b);if(c!=0)return c;break;default:if(a.length!=b.length)return a.length<b.length?-1:1;if(a.length>1)d.push(a,b,1)}}else
return 1}else
if(b
instanceof
jk||b
instanceof
Array&&b[0]===(b[0]|0))return-1;else
if(typeof
a!="number"&&a&&a.compare)return a.compare(b,h);else
if(typeof
a=="function")lb("compare: functional value");else{if(a<b)return-1;if(a>b)return 1;if(a!=b){if(!h)return NaN;if(a==a)return 1;if(b==b)return-1}}if(d.length==0)return 0;var
g=d.pop();b=d.pop();a=d.pop();if(g+1<a.length)d.push(a,b,g+1);a=a[g];b=b[g]}}function
ac2(a,b){return lK(a,b,true)}function
jl(a){if(a<0)lb("Bytes.create");return new
jk(a?2:9,o,a)}function
oj(a,b){return+(lK(a,b,false)==0)}function
ac4(a,c,b,d){if(b>0)if(c==0&&(b>=a.l||a.t==2&&b>=a.c.length))if(d==0){a.c=o;a.t=2}else{a.c=lO(b,String.fromCharCode(d));a.t=b==a.l?0:2}else{if(a.t!=4)mu(a);for(b+=c;c<b;c++)a.c[c]=d}return 0}var
ac3=ac4;function
j6(a){qs(ih.Failure,a)}function
oi(a){if((a.t&6)!=0)lL(a);return a.c}function
ac5(a){var
b;a=oi(a);b=+a;if(a.length>0&&b===b)return b;a=a.replace(/_/g,o);b=+a;if(a.length>0&&b===b||/^[+-]?nan$/i.test(a))return b;var
c=/^ *([+-]?)0x([0-9a-f]+)\.?([0-9a-f]*)p([+-]?[0-9]+)/i.exec(a);if(c){var
d=c[3].replace(/0+$/,o),f=parseInt(c[1]+c[2]+d,16),e=(c[4]|0)-4*d.length;b=f*Math.pow(2,e);return b}if(/^\+?inf(inity)?$/i.test(a))return Infinity;if(/^-inf(inity)?$/i.test(a))return-Infinity;j6("float_of_string")}function
qr(d){d=oi(d);var
e=d.length;if(e>31)lb("format_int: format too long");var
a={justify:kD,signstyle:jY,filler:kl,alternate:false,base:0,signedconv:false,width:0,uppercase:false,sign:1,prec:-1,conv:tS};for(var
c=0;c<e;c++){var
b=d.charAt(c);switch(b){case"-":a.justify=jY;break;case"+":case" ":a.signstyle=b;break;case"0":a.filler=ja;break;case"#":a.alternate=true;break;case"1":case"2":case"3":case"4":case"5":case"6":case"7":case"8":case"9":a.width=0;while(b=d.charCodeAt(c)-48,b>=0&&b<=9){a.width=a.width*10+b;c++}c--;break;case".":a.prec=0;c++;while(b=d.charCodeAt(c)-48,b>=0&&b<=9){a.prec=a.prec*10+b;c++}c--;case"d":case"i":a.signedconv=true;case"u":a.base=10;break;case"x":a.base=16;break;case"X":a.base=16;a.uppercase=true;break;case"o":a.base=8;break;case"e":case"f":case"g":a.signedconv=true;a.conv=b;break;case"E":case"F":case"G":a.signedconv=true;a.uppercase=true;a.conv=b.toLowerCase();break}}return a}function
qn(b,f){if(b.uppercase)f=f.toUpperCase();var
e=f.length;if(b.signedconv&&(b.sign<0||b.signstyle!=jY))e++;if(b.alternate){if(b.base==8)e+=1;if(b.base==16)e+=2}var
c=o;if(b.justify==kD&&b.filler==kl)for(var
d=e;d<b.width;d++)c+=kl;if(b.signedconv)if(b.sign<0)c+=jY;else
if(b.signstyle!=jY)c+=b.signstyle;if(b.alternate&&b.base==8)c+=ja;if(b.alternate&&b.base==16)c+=kU;if(b.justify==kD&&b.filler==ja)for(var
d=e;d<b.width;d++)c+=ja;c+=f;if(b.justify==jY)for(var
d=e;d<b.width;d++)c+=kl;return a(c)}function
uP(i,c){var
a,e=qr(i),d=e.prec<0?6:e.prec;if(c<0||c==0&&1/c==-Infinity){e.sign=-1;c=-c}if(isNaN(c)){a=pz;e.filler=kl}else
if(!isFinite(c)){a="inf";e.filler=kl}else
switch(e.conv){case"e":var
a=c.toExponential(d),b=a.length;if(a.charAt(b-3)==qj)a=a.slice(0,b-1)+ja+a.slice(b-1);break;case"f":a=c.toFixed(d);break;case"g":d=d?d:1;a=c.toExponential(d-1);var
h=a.indexOf(qj),g=+a.slice(h+1);if(g<-4||c>=1e+21||c.toFixed(0).length>d){var
b=h-1;while(a.charAt(b)==ja)b--;if(a.charAt(b)==kh)b--;a=a.slice(0,b+1)+a.slice(h);b=a.length;if(a.charAt(b-3)==qj)a=a.slice(0,b-1)+ja+a.slice(b-1);break}else{var
f=d;if(g<0){f-=g+1;a=c.toFixed(f)}else
while(a=c.toFixed(f),a.length>d+1)f--;if(f){var
b=a.length-1;while(a.charAt(b)==ja)b--;if(a.charAt(b)==kh)b--;a=a.slice(0,b+1)}}break}return qn(e,a)}function
ok(e,c){if(oi(e)==qd)return a(o+c);var
b=qr(e);if(c<0)if(b.signedconv){b.sign=-1;c=-c}else
c>>>=0;var
d=c.toString(b.base);if(b.prec>=0){b.filler=kl;var
f=b.prec-d.length;if(f>0)d=lO(f,ja)+d}return qn(b,d)}var
adp=0;function
i4(){return adp++}function
uQ(a,b){return+(lK(a,b,false)>=0)}function
adB(e){for(var
f=o,b=f,a,h,c=0,g=e.length;c<g;c++){a=e.charCodeAt(c);if(a<ir){for(var
d=c+1;d<g&&(a=e.charCodeAt(d))<ir;d++);if(d-c>k3){b.substr(0,1);f+=b;b=o;f+=e.slice(c,d)}else
b+=e.slice(c,d);if(d==g)break;c=d}if(a<pF){b+=String.fromCharCode(lI|a>>6);b+=String.fromCharCode(ir|a&63)}else
if(a<qg||a>=s2)b+=String.fromCharCode(k6|a>>12,ir|a>>6&63,ir|a&63);else
if(a>=56319||c+1==g||(h=e.charCodeAt(c+1))<s7||h>s2)b+="\xef\xbf\xbd";else{c++;a=(a<<10)+h-56613888;b+=String.fromCharCode(k5|a>>18,ir|a>>12&63,ir|a>>6&63,ir|a&63)}if(b.length>ms){b.substr(0,1);f+=b;b=o}}return f+b}function
kH(a){var
b=9;if(!uV(a))b=8,a=adB(a);return new
jk(b,a,a.length)}function
ac6(a,c,k){if(!isFinite(a)){if(isNaN(a))return kH(pz);return kH(a>0?uE:"-infinity")}var
i=a==0&&1/a==-Infinity?1:a>=0?0:1;if(i)a=-a;var
d=0;if(a==0);else
if(a<1)while(a<1&&d>-1022){a*=2;d--}else
while(a>=2){a/=2;d++}var
j=d<0?o:kD,e=o;if(i)e=jY;else
switch(k){case
43:e=kD;break;case
32:e=kl;break;default:break}if(c>=0&&c<13){var
g=Math.pow(2,c*4);a=Math.round(a*g)/g}var
b=a.toString(16);if(c>=0){var
h=b.indexOf(kh);if(h<0)b+=kh+lO(c,ja);else{var
f=h+1+c;if(b.length<f)b+=lO(f-b.length,ja);else
b=b.substr(0,f)}}return kH(e+kU+b+"p"+j+d.toString(10))}function
ac$(a){return(a[3]|a[2]|a[1])==0}function
ol(a){return[ji,a&i3,a>>24&i3,a>>31&M]}function
uZ(d){var
c=d.length,b=new
Array(c);for(var
a=0;a<c;a++)b[a]=d[a];return b}function
adc(a,b){var
c=a[1]-b[1],d=a[2]-b[2]+(c>>24),e=a[3]-b[3]+(d>>24);return[ji,c&i3,d&i3,e&M]}function
qo(a,b){if(a[3]>b[3])return 1;if(a[3]<b[3])return-1;if(a[2]>b[2])return 1;if(a[2]<b[2])return-1;if(a[1]>b[1])return 1;if(a[1]<b[1])return-1;return 0}function
uR(a){a[3]=a[3]<<1|a[2]>>23;a[2]=(a[2]<<1|a[1]>>23)&i3;a[1]=a[1]<<1&i3}function
ada(a){a[1]=(a[1]>>>1|a[2]<<23)&i3;a[2]=(a[2]>>>1|a[3]<<23)&i3;a[3]=a[3]>>>1}function
uU(e,f){var
c=0,b=uZ(e),a=uZ(f),d=[ji,0,0,0];while(qo(b,a)>0){c++;uR(a)}while(c>=0){c--;uR(d);if(qo(b,a)>=0){d[1]++;b=adc(b,a)}ada(a)}return[0,d,b]}function
add(a){return a[1]|a[2]<<24}function
ac_(a){return a[3]<<16<0}function
uS(a){var
b=-a[1],c=-a[2]+(b>>24),d=-a[3]+(c>>24);return[ji,b&i3,c&i3,d&M]}function
ac9(g,c){var
a=qr(g);if(a.signedconv&&ac_(c)){a.sign=-1;c=uS(c)}var
b=o,h=ol(a.base),f="0123456789abcdef";do{var
e=uU(c,h);c=e[1];b=f.charAt(add(e[2]))+b}while(!ac$(c));if(a.prec>=0){a.filler=kl;var
d=a.prec-b.length;if(d>0)b=lO(d,ja)+b}return qn(a,b)}function
ij(a){return a.l}function
jm(a,b){switch(a.t&6){default:if(b>=a.c.length)return 0;case
0:return a.c.charCodeAt(b);case
4:return a.c[b]}}function
ac7(a,b){var
c=a[1]+b[1],d=a[2]+b[2]+(c>>24),e=a[3]+b[3]+(d>>24);return[ji,c&i3,d&i3,e&M]}var
uT=Math.pow(2,-24);function
adb(a,b){var
c=a[1]*b[1],d=(c*uT|0)+a[2]*b[1]+a[1]*b[2],e=(d*uT|0)+a[3]*b[1]+a[2]*b[2]+a[1]*b[3];return[ji,c&i3,d&i3,e&M]}function
qp(a,b){return qo(a,b)<0}function
u0(c){var
a=0,d=ij(c),b=10,e=d>0&&jm(c,0)==45?(a++,-1):1;if(a+1<d&&jm(c,a)==48)switch(jm(c,a+1)){case
120:case
88:b=16;a+=2;break;case
111:case
79:b=8;a+=2;break;case
98:case
66:b=2;a+=2;break}return[a,e,b]}function
op(a){if(a>=48&&a<=57)return a-48;if(a>=65&&a<=90)return a-55;if(a>=97&&a<=iu)return a-87;return-1}function
om(f){var
e=u0(f),d=e[0],i=e[1],g=e[2],h=ol(g),j=uU([ji,i3,268435455,M],h)[1],c=jm(f,d),a=op(c);if(a<0||a>=g)j6(kj);var
b=ol(a);for(;;){d++;c=jm(f,d);if(c==95)continue;a=op(c);if(a<0||a>=g)break;if(qp(j,b))j6(kj);a=ol(a);b=ac7(adb(h,b),a);if(qp(b,a))j6(kj)}if(d!=ij(f))j6(kj);if(e[2]==10&&qp([ji,0,0,32768],b))j6(kj);if(i<0)b=uS(b);return b}function
on(a){return(a[3]<<16)*Math.pow(2,32)+a[2]*Math.pow(2,24)+a[1]}function
jJ(f){var
h=u0(f),c=h[0],i=h[1],d=h[2],g=ij(f),j=-1>>>0,e=c<g?jm(f,c):0,b=op(e);if(b<0||b>=d)j6(kj);var
a=b;for(c++;c<g;c++){e=jm(f,c);if(e==95)continue;b=op(e);if(b<0||b>=d)break;a=d*a+b;if(a>j)j6(kj)}if(c!=g)j6(kj);a=i*a;if(d==10&&(a|0)!=a)j6(kj);return a|0}function
adf(a){return or(a,1,a.length-1)}function
adg(a){return!!a}function
adh(a){return a.toString()}function
adi(b){var
c={};for(var
a=1;a<b.length;a++){var
d=b[a];c[d[1].toString()]=d[2]}return c}function
adj(a,b){return+(lK(a,b,false)<=0)}function
adk(a,b){return+(lK(a,b,false)<0)}function
mw(a,d){var
a=a+1|0,b=new
Array(a);b[0]=0;for(var
c=1;c<a;c++)b[c]=d;return b}function
j7(a){return a.l}function
jz(a){qs(ih.Sys_error,a)}var
j8=new
Array();function
qq(c){var
a=j8[c];if(!a.opened)jz("Cannot flush a closed channel");if(!a.buffer||a.buffer==o)return 0;if(a.fd&&ih.fds[a.fd]&&ih.fds[a.fd].output){var
b=ih.fds[a.fd].output;switch(b.length){case
2:b(c,a.buffer);break;default:b(a.buffer)}}a.buffer=o;return 0}if(iJ.process&&iJ.process.cwd)var
mv=iJ.process.cwd().replace(/\\/g,i1);else
var
mv="/static";if(mv.slice(-1)!==i1)mv+=i1;function
adl(a){a=a
instanceof
jk?a.toString():a;if(a.charCodeAt(0)!=47)a=mv+a;var
d=a.split(i1),b=[];for(var
c=0;c<d.length;c++)switch(d[c]){case"..":if(b.length>1)b.pop();break;case".":break;case"":if(b.length==0)b.push(o);break;default:b.push(d[c]);break}b.orig=a;return b}function
adr(a){a=a
instanceof
jk?a.toString():a;jz(a+": No such file or directory")}function
adu(a){return new
jk(4,a,a.length)}function
G(b,a){if(a>>>0>=b.l)qt();return jm(b,a)}function
la(a){if(a<0)lb("String.create");return new
jk(a?2:9,o,a)}function
uM(){}function
iQ(a){this.data=a}iQ.prototype=new
uM();iQ.prototype.truncate=function(a){var
b=this.data;this.data=la(a|0);jb(b,0,this.data,0,a)};iQ.prototype.length=function(){return ij(this.data)};iQ.prototype.write=function(b,d,g,a){var
c=this.length();if(b+a>=c){var
e=la(b+a),f=this.data;this.data=e;jb(f,0,this.data,0,c)}jb(d,g,this.data,b,a);return 0};iQ.prototype.read=function(c,a,d,b){var
e=this.length();jb(this.data,c,a,d,b);return 0};iQ.prototype.read_one=function(a){return G(this.data,a)};iQ.prototype.close=function(){};iQ.prototype.constructor=iQ;function
jy(b,a){this.content={};this.root=b;this.lookupFun=a}jy.prototype.nm=function(a){return this.root+a};jy.prototype.lookup=function(b){if(!this.content[b]&&this.lookupFun){var
c=this.lookupFun(a(this.root),a(b));if(c!=0)this.content[b]=new
iQ(c[1])}};jy.prototype.exists=function(a){if(a==o)return 1;var
c=a+i1,d=new
RegExp(mo+c);for(var
b
in
this.content)if(b.match(d))return 1;this.lookup(a);return this.content[a]?1:0};jy.prototype.readdir=function(c){var
f=c==o?o:c+i1,g=new
RegExp(mo+f+s9),d={},b=[];for(var
e
in
this.content){var
a=e.match(g);if(a&&!d[a[1]]){d[a[1]]=true;b.push(a[1])}}return b};jy.prototype.is_dir=function(a){var
d=a==o?o:a+i1,e=new
RegExp(mo+d+s9),f=[];for(var
c
in
this.content){var
b=c.match(e);if(b)return 1}return 0};jy.prototype.unlink=function(a){var
b=this.content[a]?true:false;delete
this.content[a];return b};jy.prototype.open=function(a,b){if(b.rdonly&&b.wronly)jz(this.nm(a)+sR);if(b.text&&b.binary)jz(this.nm(a)+tT);this.lookup(a);if(this.content[a]){if(this.is_dir(a))jz(this.nm(a)+" : is a directory");if(b.create&&b.excl)jz(this.nm(a)+sQ);var
c=this.content[a];if(b.truncate)c.truncate();return c}else
if(b.create){this.content[a]=new
iQ(la(0));return this.content[a]}else
adr(this.nm(a))};jy.prototype.register=function(c,b){if(this.content[c])jz(this.nm(c)+sQ);if(b
instanceof
jk)this.content[c]=new
iQ(b);else
if(b
instanceof
Array)this.content[c]=new
iQ(adu(b));else
if(b.toString){var
d=a(b.toString());this.content[c]=new
iQ(d)}};jy.prototype.constructor=jy;function
uO(a){if(a.t!=4)mu(a);return a.c}function
it(a,c,b){b&=ji;if(a.t!=4){if(c==a.c.length){a.c+=String.fromCharCode(b);if(c+1==a.l)a.t=0;return 0}mu(a)}a.c[c]=b;return 0}function
adv(b,a,c){if(a>>>0>=b.l)qt();return it(b,a,c)}var
ql=iJ.Buffer;function
j5(a){this.fs=require("fs");this.fd=a}j5.prototype=new
uM();j5.prototype.truncate=function(a){this.fs.ftruncateSync(this.fd,a|0)};j5.prototype.length=function(){return this.fs.fstatSync(this.fd).size};j5.prototype.write=function(f,b,c,e){var
a=uO(b);if(!(a
instanceof
iJ.Uint8Array))a=new(iJ.Uint8Array)(a);var
d=new
ql(a);this.fs.writeSync(this.fd,d,c,e,f);return 0};j5.prototype.read=function(g,d,c,f){var
a=uO(d);if(!(a
instanceof
iJ.Uint8Array))a=new(iJ.Uint8Array)(a);var
e=new
ql(a);this.fs.readSync(this.fd,e,c,f,g);for(var
b=0;b<f;b++)adv(d,c+b,e[c+b]);return 0};j5.prototype.read_one=function(c){var
b=new(iJ.Uint8Array)(1),a=new
ql(b);this.fs.readSync(this.fd,a,0,1,c);return a[0]};j5.prototype.close=function(){this.fs.closeSync(this.fd)};j5.prototype.constructor=j5;function
j4(a){this.fs=require("fs");this.root=a}j4.prototype.nm=function(a){return this.root+a};j4.prototype.exists=function(a){return this.fs.existsSync(this.nm(a))?1:0};j4.prototype.readdir=function(a){return this.fs.readdirSync(this.nm(a))};j4.prototype.is_dir=function(a){return this.fs.statSync(this.nm(a)).isDirectory()?1:0};j4.prototype.unlink=function(a){var
b=this.fs.existsSync(this.nm(a))?1:0;this.fs.unlinkSync(this.nm(a));return b};j4.prototype.open=function(f,c){var
a=require("constants"),b=0;for(var
e
in
c)switch(e){case"rdonly":b|=a.O_RDONLY;break;case"wronly":b|=a.O_WRONLY;break;case"append":b|=a.O_WRONLY|a.O_APPEND;break;case"create":b|=a.O_CREAT;break;case"truncate":b|=a.O_TRUNC;break;case"excl":b|=a.O_EXCL;break;case"binary":b|=a.O_BINARY;break;case"text":b|=a.O_TEXT;break;case"nonblock":b|=a.O_NONBLOCK;break}var
d=this.fs.openSync(this.nm(f),b);return new
j5(d)};j4.prototype.rename=function(b,a){this.fs.renameSync(this.nm(b),this.nm(a))};j4.prototype.constructor=j4;var
lN=mv.match(/[^\/]*\//)[0],mx=[];if(typeof
module!=="undefined"&&module.exports&&typeof
require!=="undefined")mx.push({path:lN,device:new
j4(lN)});else
mx.push({path:lN,device:new
jy(lN)});mx.push({path:lN+th,device:new
jy(lN+th)});function
adF(b){var
f=adl(b),b=f.join(i1),e=b+i1,c;for(var
d=0;d<mx.length;d++){var
a=mx[d];if(e.search(a.path)==0&&(!c||c.path.length<a.path.length))c={path:a.path,device:a.device,rest:b.substring(a.path.length,b.length)}}return c}function
u3(e,f){var
b=j8[e],d=a(f),c=ij(d);b.file.write(b.offset,d,0,c);b.offset+=c;return 0}function
adC(a){var
b=iJ;if(b.process&&b.process.stdout&&b.process.stdout.write)b.process.stderr.write(a);else{if(a.charCodeAt(a.length-1)==10)a=a.substr(0,a.length-1);var
c=b.console;c&&c.error&&c.error(a)}}function
adD(a){var
b=iJ;if(b.process&&b.process.stdout&&b.process.stdout.write)b.process.stdout.write(a);else{if(a.charCodeAt(a.length-1)==10)a=a.substr(0,a.length-1);var
c=b.console;c&&c.log&&c.log(a)}}function
oq(c,e,d,a){if(ih.fds===undefined)ih.fds=new
Array();a=a?a:{};var
b={};b.file=d;b.offset=a.append?d.length():0;b.flags=a;b.output=e;ih.fds[c]=b;if(!ih.fd_last_idx||c>ih.fd_last_idx)ih.fd_last_idx=c;return c}function
adH(c,b,g){var
a={};while(b){switch(b[1]){case
0:a.rdonly=1;break;case
1:a.wronly=1;break;case
2:a.append=1;break;case
3:a.create=1;break;case
4:a.truncate=1;break;case
5:a.excl=1;break;case
6:a.binary=1;break;case
7:a.text=1;break;case
8:a.nonblock=1;break}b=b[2]}if(a.rdonly&&a.wronly)jz(c.toString()+sR);if(a.text&&a.binary)jz(c.toString()+tT);var
d=adF(c),e=d.device.open(d.rest,a),f=ih.fd_last_idx?ih.fd_last_idx:0;return oq(f+1,u3,e,a)}oq(0,u3,new
iQ(la(0)));oq(1,adD,new
iQ(la(0)));oq(2,adC,new
iQ(la(0)));function
adm(c){var
b=ih.fds[c];if(b.flags.wronly)jz(tc+c+" is writeonly");var
a={file:b.file,offset:b.offset,fd:c,opened:true,out:false,refill:null};j8[a.fd]=a;return a.fd}function
uW(c){var
b=ih.fds[c];if(b.flags.rdonly)jz(tc+c+" is readonly");var
a={file:b.file,offset:b.offset,fd:c,opened:true,out:true,buffer:o};j8[a.fd]=a;return a.fd}function
adn(){var
b=0;for(var
a=0;a<j8.length;a++)if(j8[a]&&j8[a].opened&&j8[a].out)b=[0,j8[a].fd,b];return b}function
ado(g,d,h,f){var
a=j8[g];if(!a.opened)jz("Cannot output to a closed channel");var
c;if(h==0&&ij(d)==f)c=d;else{c=la(f);jb(d,h,c,0,f)}var
b=c.toString(),e=b.lastIndexOf("\n");if(e<0)a.buffer+=b;else{a.buffer+=b.substr(0,e+1);qq(g);a.buffer+=b.substr(e+1)}return 0}function
lM(a,b){return+(lK(a,b,false)!=0)}function
oo(a){return a
instanceof
Array?a[0]:a
instanceof
jk?p4:1e3}function
jA(c,b,a){ih[c+1]=b;if(a)ih[a]=b}var
uY={};function
adt(a,b){uY[oi(a)]=b;return 0}function
i5(a,b){if(a===b)return 1;a.t&6&&lL(a);b.t&6&&lL(b);return a.c==b.c?1:0}function
C(a,b){return 1-i5(a,b)}function
adw(){return s0/4|0}function
adx(){return 0}function
ady(){return[0,a("Unix"),32,0]}function
adq(a){throw a}function
ads(){adq(ih.Not_found)}function
u4(c){var
a=iJ,b=c.toString();if(a.process&&a.process.env&&a.process.env[b]!=undefined)return kH(a.process.env[b]);ads()}function
ko(a){var
b=1;while(a&&a.joo_tramp){a=a.joo_tramp.apply(null,a.joo_args);b++}return a}function
is(b,a){return{joo_tramp:b,joo_args:a}}function
u2(a){return a}function
uX(a){return uY[a]}function
iO(a){if(a
instanceof
Array)return a;if(iJ.RangeError&&a
instanceof
iJ.RangeError&&a.message&&a.message.match(/maximum call stack/i))return u2(ih.Stack_overflow);if(iJ.InternalError&&a
instanceof
iJ.InternalError&&a.message&&a.message.match(/too much recursion/i))return u2(ih.Stack_overflow);if(a
instanceof
iJ.Error&&uX(pP))return[0,uX(pP),a];return[0,ih.Failure,kH(String(a))]}function
d(a,b){return a.length==1?a(b):kG(a,[b])}function
g(a,b,c){return a.length==2?a(b,c):kG(a,[b,c])}function
p(a,b,c,d){return a.length==3?a(b,c,d):kG(a,[b,c,d])}function
kg(a,b,c,d,e){return a.length==4?a(b,c,d,e):kG(a,[b,c,d,e])}function
iF(a,b,c,d,e,f){return a.length==5?a(b,c,d,e,f):kG(a,[b,c,d,e,f])}var
qO=[iz,a(t3),-1],j9=[iz,a(tm),-3],qv=[iz,a(tw),-4],jK=[iz,a(ur),-7],qQ=[iz,a(sP),-8],qP=[iz,a(tA),-9],w=[iz,a(uA),-11],qR=[iz,a(t8),-12],oA=[0,[11,a('File "'),[2,0,[11,a('", line '),[4,0,0,0,[11,a(", characters "),[4,0,0,0,[12,45,[4,0,0,0,[11,a(": "),[2,0,0]]]]]]]]]],a('File "%s", line %d, characters %d-%d: %s')],ro=[0,0,[0,0,0,0],[0,0,0,0]],oK=[0,0,0],oM=a("\x01\x02"),oN=a("\x01\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\x01"),ke=[0,0,0,0,0,0,0,1,0],sm=[0,0,0],sz=[0,0];jA(11,qR,t8);jA(10,w,uA);jA(9,[iz,a(tQ),-10],tQ);jA(8,qP,tA);jA(7,qQ,sP);jA(6,jK,ur);jA(5,[iz,a(s4),-6],s4);jA(4,[iz,a(tn),-5],tn);jA(3,qv,tw);jA(2,j9,tm);jA(1,[iz,a(ue),-2],ue);jA(0,qO,t3);var
Q(a){if(typeof
a==="number")return 0;else
switch(a[0]){case
0:return[0,Q(a[1])];case
1:return[1,Q(a[1])];case
2:return[2,Q(a[1])];case
3:return[3,Q(a[1])];case
4:return[4,Q(a[1])];case
5:return[5,Q(a[1])];case
6:return[6,Q(a[1])];case
7:return[7,Q(a[1])];case
8:var
c=a[1];return[8,c,Q(a[2])];case
9:var
b=a[1];return[9,b,b,Q(a[3])];case
10:return[10,Q(a[1])];case
11:return[11,Q(a[1])];case
12:return[12,Q(a[1])];case
13:return[13,Q(a[1])];default:return[14,Q(a[1])]}}function
iS(a,b){if(typeof
a==="number")return b;else
switch(a[0]){case
0:return[0,iS(a[1],b)];case
1:return[1,iS(a[1],b)];case
2:return[2,iS(a[1],b)];case
3:return[3,iS(a[1],b)];case
4:return[4,iS(a[1],b)];case
5:return[5,iS(a[1],b)];case
6:return[6,iS(a[1],b)];case
7:return[7,iS(a[1],b)];case
8:var
c=a[1];return[8,c,iS(a[2],b)];case
9:var
d=a[2],e=a[1];return[9,e,d,iS(a[3],b)];case
10:return[10,iS(a[1],b)];case
11:return[11,iS(a[1],b)];case
12:return[12,iS(a[1],b)];case
13:return[13,iS(a[1],b)];default:return[14,iS(a[1],b)]}}function
F(a,b){if(typeof
a==="number")return b;else
switch(a[0]){case
0:return[0,F(a[1],b)];case
1:return[1,F(a[1],b)];case
2:var
c=a[1];return[2,c,F(a[2],b)];case
3:var
d=a[1];return[3,d,F(a[2],b)];case
4:var
e=a[3],f=a[2],g=a[1];return[4,g,f,e,F(a[4],b)];case
5:var
h=a[3],i=a[2],j=a[1];return[5,j,i,h,F(a[4],b)];case
6:var
k=a[3],l=a[2],m=a[1];return[6,m,l,k,F(a[4],b)];case
7:var
n=a[3],o=a[2],p=a[1];return[7,p,o,n,F(a[4],b)];case
8:var
q=a[3],r=a[2],s=a[1];return[8,s,r,q,F(a[4],b)];case
9:return[9,F(a[1],b)];case
10:return[10,F(a[1],b)];case
11:var
t=a[1];return[11,t,F(a[2],b)];case
12:var
u=a[1];return[12,u,F(a[2],b)];case
13:var
v=a[2],w=a[1];return[13,w,v,F(a[3],b)];case
14:var
x=a[2],y=a[1];return[14,y,x,F(a[3],b)];case
15:return[15,F(a[1],b)];case
16:return[16,F(a[1],b)];case
17:var
z=a[1];return[17,z,F(a[2],b)];case
18:var
A=a[1];return[18,A,F(a[2],b)];case
19:return[19,F(a[1],b)];case
20:var
B=a[2],C=a[1];return[20,C,B,F(a[3],b)];case
21:var
D=a[1];return[21,D,F(a[2],b)];case
22:return[22,F(a[1],b)];case
23:var
E=a[1];return[23,E,F(a[2],b)];default:var
G=a[2],H=a[1];return[24,H,G,F(a[3],b)]}}function
N(a){throw[0,j9,a]}function
iT(a){throw[0,qv,a]}i4(0);function
os(a){return 0<=a?a:-a|0}var
u5=s0;function
m(d,c){var
a=ij(d),e=ij(c),b=jl(a+e|0);jb(d,0,b,0,a);jb(c,0,b,a,e);return b}function
kI(a,b){if(a){var
c=a[1];return[0,c,kI(a[2],b)]}return b}adm(0);var
u_=uW(1),u$=uW(2),ot=[0,function(b){function
a(b){var
a=b;for(;;){if(a){var
c=a[2],d=a[1];try{qq(d)}catch(a){}var
a=c;continue}return 0}}return a(adn(0))}];function
vb(a){var
b=ot[1];ot[1]=function(c){d(a,0);return d(b,0)};return 0}function
vc(a){return d(ot[1],0)}function
qw(c){var
b=0,a=c;for(;;){if(a){var
b=b+1|0,a=a[2];continue}return b}}function
lc(a){return a?a[1]:N(vd)}function
kp(d,c){var
a=d,b=c;for(;;){if(a){var
e=[0,a[1],b],a=a[2],b=e;continue}return b}}function
n(a){return kp(a,0)}function
lP(b,a){if(a){var
c=a[2],e=d(b,a[1]);return[0,e,lP(b,c)]}return 0}function
qx(e,c){var
b=0,a=c;for(;;){if(a){var
f=a[2],b=[0,d(e,a[1]),b],a=f;continue}return b}}function
jn(c,b){var
a=b;for(;;){if(a){var
e=a[2];d(c,a[1]);var
a=e;continue}return 0}}function
jo(e,d,c){var
b=d,a=c;for(;;){if(a){var
f=a[2],b=g(e,b,a[1]),a=f;continue}return b}}function
qy(d,c){var
b=d,a=c;for(;;){if(0===b)return a;if(a){var
b=b-1|0,a=a[2];continue}throw[0,w,vf]}}function
jL(a){if(0<=a)if(!(ji<a))return a;return iT(vg)}function
qz(a){if(40<=a){if(92===a)return vh;var
c=il<=a?0:1}else
if(32<=a){if(39<=a)return vi;var
c=1}else
if(14<=a)var
c=0;else
switch(a){case
8:return vj;case
9:return vk;case
10:return vl;case
13:return vm;default:var
c=0}if(c){var
d=jl(1);it(d,0,a);return d}var
b=jl(4);it(b,0,92);it(b,1,48+(a/jS|0)|0);it(b,2,48+((a/10|0)%10|0)|0);it(b,3,48+(a%10|0)|0);return b}function
kJ(a,c){var
b=jl(a);ac3(b,0,a,c);return b}function
qA(c,b,a){if(0<=b)if(0<=a)if(!((j7(c)-a|0)<b)){var
d=jl(a);qm(c,b,d,0,a);return d}return iT(vn)}function
qB(c,b,a){return qA(c,b,a)}function
qC(e,c,d,b,a){if(0<=a)if(0<=c)if(!((j7(e)-a|0)<c))if(0<=b)if(!((j7(d)-a|0)<b))return qm(e,c,d,b,a);return iT(vo)}function
jB(e,c,d,b,a){if(0<=a)if(0<=c)if(!((ij(e)-a|0)<c))if(0<=b)if(!((j7(d)-a|0)<b))return jb(e,c,d,b,a);return iT(vp)}function
qD(b,a){return kJ(b,a)}function
jC(c,b,a){return qA(c,b,a)}function
vr(m,g){if(g){var
h=ij(m),b=0,e=g,p=0;for(;;){if(e){var
i=e[2],j=e[1];if(i){var
k=(ij(j)+h|0)+b|0,o=b<=k?k:iT(vq),b=o,e=i;continue}var
n=ij(j)+b|0}else
var
n=b;var
d=jl(n),c=p,f=g;for(;;){if(f){var
l=f[2],a=f[1];if(l){jb(a,0,d,c,ij(a));jb(m,0,d,c+ij(a)|0,h);var
c=(c+ij(a)|0)+h|0,f=l;continue}jb(a,0,d,c,ij(a));return d}return d}}}return vs}function
qE(e,b){var
c=ij(b)-1|0,f=0;if(!(c<0)){var
a=f;for(;;){d(e,jm(b,a));var
g=a+1|0;if(c!==a){var
a=g;continue}break}}return 0}var
my=v,qF=ady(0)[1],mz=adx(0),lQ=(4*adw(0)|0)-1|0;i4(0);function
qG(b,c){if(0===b)return[0];if(0<=b){var
e=mw(b,d(c,0)),f=b-1|0,g=1;if(!(f<1)){var
a=g;for(;;){e[a+1]=d(c,a);var
h=a+1|0;if(f!==a){var
a=h;continue}break}}return e}return iT(vt)}function
ou(e,c,d,b,a){if(0<=a)if(0<=c)if(!((e.length-1-a|0)<c))if(0<=b)if(!((d.length-1-a|0)<b))return acX(e,c,d,b,a);return iT(vv)}function
qH(e,b){var
c=b.length-1-1|0,f=0;if(!(c<0)){var
a=f;for(;;){d(e,b[a+1]);var
g=a+1|0;if(c!==a){var
a=g;continue}break}}return 0}function
qI(a){if(a){var
d=0,c=a,g=a[2],h=a[1];for(;;){if(c){var
d=d+1|0,c=c[2];continue}var
f=mw(d,h),e=1,b=g;for(;;){if(b){var
i=b[2];f[e+1]=b[1];var
e=e+1|0,b=i;continue}return f}}}return[0]}i4(0);function
lR(e){function
o(a){return a?a[4]:0}function
c(b,e,a){var
c=b?b[4]:0,d=a?a[4]:0,f=d<=c?c+1|0:d+1|0;return[0,b,e,a,f]}function
f(b,f,a){var
g=b?b[4]:0,h=a?a[4]:0;if((h+2|0)<g){if(b){var
d=b[3],k=b[2],i=b[1],m=o(d);if(m<=o(i))return c(i,k,c(d,f,a));if(d){var
n=d[2],p=d[1],q=c(d[3],f,a);return c(c(i,k,p),n,q)}return iT(vw)}return iT(vx)}if((g+2|0)<h){if(a){var
j=a[3],l=a[2],e=a[1],r=o(e);if(r<=o(j))return c(c(b,f,e),l,j);if(e){var
s=e[2],t=e[1],u=c(e[3],l,j);return c(c(b,f,t),s,u)}return iT(vy)}return iT(vz)}var
v=h<=g?g+1|0:h+1|0;return[0,b,f,a,v]}function
a(c,b){if(b){var
d=b[3],h=b[2],i=b[1],j=g(e[1],c,h);if(0===j)return b;if(0<=j){var
k=a(c,d);return d===k?b:f(i,h,k)}var
l=a(c,i);return i===l?b:f(l,h,d)}return[0,0,c,0,1]}function
h(a){return[0,0,a,0,1]}function
y(b,a){if(a){var
c=a[3],d=a[2];return f(y(b,a[1]),d,c)}return h(b)}function
z(b,a){if(a){var
c=a[2],d=a[1];return f(d,c,z(b,a[3]))}return h(b)}function
b(d,e,a){if(d){if(a){var
g=a[4],h=d[4],i=a[3],j=a[2],k=a[1],l=d[3],m=d[2],n=d[1];return(g+2|0)<h?f(n,m,b(l,e,a)):(h+2|0)<g?f(b(d,e,k),j,i):c(d,e,a)}return z(e,d)}return y(e,a)}function
k(c){var
a=c;for(;;){if(a){var
b=a[1];if(b){var
a=b;continue}return a[2]}throw jK}}function
A(c){var
a=c;for(;;){if(a){var
b=a[1];if(b){var
a=b;continue}return[0,a[2]]}return 0}}function
B(c){var
a=c;for(;;){if(a){var
b=a[3],d=a[2];if(b){var
a=b;continue}return d}throw jK}}function
J(c){var
a=c;for(;;){if(a){var
b=a[3],d=a[2];if(b){var
a=b;continue}return[0,d]}return 0}}function
r(a){if(a){var
b=a[1];if(b){var
c=a[3],d=a[2];return f(r(b),d,c)}return a[3]}return iT(vA)}function
l(c,a){if(c){if(a){var
d=r(a);return b(c,k(a),d)}return c}return a}function
i(c,a){if(a){var
d=a[3],f=a[2],h=a[1],l=g(e[1],c,f);if(0===l)return[0,h,1,d];if(0<=l){var
j=i(c,d),m=j[3],n=j[2];return[0,b(h,f,j[1]),n,m]}var
k=i(c,h),o=k[2],p=k[1];return[0,p,o,b(k[3],f,d)]}return vB}var
C=0;function
K(a){return a?0:1}function
L(f,d){var
a=d;for(;;){if(a){var
h=a[3],i=a[1],b=g(e[1],f,a[2]),c=0===b?1:0;if(c)return c;var
j=0<=b?h:i,a=j;continue}return 0}}function
s(d,b){if(b){var
a=b[3],h=b[2],c=b[1],i=g(e[1],d,h);if(0===i){if(c){if(a){var
m=r(a);return f(c,k(a),m)}return c}return a}if(0<=i){var
j=s(d,a);return a===j?b:f(c,h,j)}var
l=s(d,c);return c===l?b:f(l,h,a)}return 0}function
j(d,c){if(d){if(c){var
g=c[4],e=c[2],h=d[4],f=d[2],m=c[3],n=c[1],o=d[3],p=d[1];if(g<=h){if(1===g)return a(e,d);var
k=i(f,c),q=k[1],r=j(o,k[3]);return b(j(p,q),f,r)}if(1===h)return a(f,c);var
l=i(e,d),s=l[1],t=j(l[3],m);return b(j(s,n),e,t)}return d}return c}function
m(a,d){if(a){if(d){var
e=a[3],f=a[2],g=a[1],c=i(f,d),h=c[1];if(0===c[2]){var
j=m(e,c[3]);return l(m(g,h),j)}var
k=m(e,c[3]);return b(m(g,h),f,k)}return 0}return 0}function
n(a,d){if(a){if(d){var
e=a[3],f=a[2],g=a[1],c=i(f,d),h=c[1];if(0===c[2]){var
j=n(e,c[3]);return b(n(g,h),f,j)}var
k=n(e,c[3]);return l(n(g,h),k)}return a}return 0}function
p(d,c){var
a=d,b=c;for(;;){if(a){var
e=[0,a[2],a[3],b],a=a[1],b=e;continue}return b}}function
D(l,k){var
m=p(k,0),b=p(l,0),a=m;for(;;){if(b){if(a){var
d=a[3],f=a[2],h=b[3],i=b[2],c=g(e[1],b[1],a[1]);if(0===c){var
j=p(f,d),b=p(i,h),a=j;continue}return c}return 1}return a?-1:0}}function
M(b,a){return 0===D(b,a)?1:0}function
q(o,n){var
a=o,b=n;for(;;){if(a){if(b){var
h=b[3],i=b[1],c=a[3],d=a[2],f=a[1],j=g(e[1],d,b[2]);if(0===j){var
k=q(f,i);if(k){var
a=c,b=h;continue}return k}if(0<=j){var
l=q([0,0,d,c,0],h);if(l){var
a=f;continue}return l}var
m=q([0,f,d,0,0],i);if(m){var
a=c;continue}return m}return 0}return 1}}function
E(b,c){var
a=c;for(;;){if(a){var
e=a[3],f=a[2];E(b,a[1]);d(b,f);var
a=e;continue}return 0}}function
F(c,e,d){var
a=e,b=d;for(;;){if(a){var
f=a[3],h=a[2],i=g(c,h,F(c,a[1],b)),a=f,b=i;continue}return b}}function
G(b,g){var
a=g;for(;;){if(a){var
h=a[3],i=a[1],c=d(b,a[2]);if(c){var
e=G(b,i);if(e){var
a=h;continue}var
f=e}else
var
f=c;return f}return 1}}function
H(b,g){var
a=g;for(;;){if(a){var
h=a[3],i=a[1],c=d(b,a[2]);if(c)var
e=c;else{var
f=H(b,i);if(!f){var
a=h;continue}var
e=f}return e}return 0}}function
t(c,a){if(a){var
g=a[3],h=a[2],i=a[1],e=t(c,i),j=d(c,h),f=t(c,g);if(j){if(i===e)if(g===f)return a;return b(e,h,f)}return l(e,f)}return 0}function
u(c,a){if(a){var
e=a[2],m=a[3],f=u(c,a[1]),g=f[2],h=f[1],n=d(c,e),i=u(c,m),j=i[2],k=i[1];if(n){var
o=l(g,j);return[0,b(h,e,k),o]}var
p=b(g,e,j);return[0,l(h,k),p]}return vC}function
v(a){if(a){var
b=a[1],c=v(a[3]);return(v(b)+1|0)+c|0}return 0}function
I(d,c){var
b=d,a=c;for(;;){if(a){var
e=a[2],f=a[1],b=[0,e,I(b,a[3])],a=f;continue}return b}}function
N(a){return I(0,a)}function
O(f,d){var
a=d;for(;;){if(a){var
b=a[2],h=a[3],i=a[1],c=g(e[1],f,b);if(0===c)return b;var
j=0<=c?h:i,a=j;continue}throw jK}}function
P(f,j){var
b=j;for(;;){if(b){var
g=b[2],k=b[3],l=b[1];if(d(f,g)){var
c=g,a=l;for(;;){if(a){var
e=a[2],h=a[3],i=a[1];if(d(f,e)){var
c=e,a=i;continue}var
a=h;continue}return c}}var
b=k;continue}throw jK}}function
Q(f,j){var
b=j;for(;;){if(b){var
g=b[2],k=b[3],l=b[1];if(d(f,g)){var
c=g,a=l;for(;;){if(a){var
e=a[2],h=a[3],i=a[1];if(d(f,e)){var
c=e,a=i;continue}var
a=h;continue}return[0,c]}}var
b=k;continue}return 0}}function
R(f,j){var
b=j;for(;;){if(b){var
g=b[2],k=b[3],l=b[1];if(d(f,g)){var
c=g,a=k;for(;;){if(a){var
e=a[2],h=a[3],i=a[1];if(d(f,e)){var
c=e,a=h;continue}var
a=i;continue}return c}}var
b=l;continue}throw jK}}function
S(f,j){var
b=j;for(;;){if(b){var
g=b[2],k=b[3],l=b[1];if(d(f,g)){var
c=g,a=k;for(;;){if(a){var
e=a[2],h=a[3],i=a[1];if(d(f,e)){var
c=e,a=h;continue}var
a=i;continue}return[0,c]}}var
b=l;continue}return 0}}function
T(f,d){var
a=d;for(;;){if(a){var
b=a[2],h=a[3],i=a[1],c=g(e[1],f,b);if(0===c)return[0,b];var
j=0<=c?h:i,a=j;continue}return 0}}function
x(l,c){if(c){var
m=c[3],n=c[2],o=c[1],f=x(l,o),h=d(l,n),i=x(l,m);if(o===f)if(n===h)if(m===i)return c;if(0===f)var
p=0;else
var
s=B(f),p=0<=g(e[1],s,h)?1:0;if(!p){if(0===i)var
q=0;else
var
r=k(i),q=0<=g(e[1],h,r)?1:0;if(!q)return b(f,h,i)}return j(f,a(h,i))}return 0}return[0,C,K,L,a,h,s,j,m,n,D,M,q,E,x,F,G,H,t,u,v,N,k,A,B,J,k,A,i,O,T,P,Q,R,S,function(d){if(d){var
k=d[2],f=d[1];if(k){var
l=k[2],i=k[1];if(l){var
n=l[2],o=l[1];if(n){var
p=n[2],r=n[1];if(p){if(p[2]){var
b=e[1],m=function(j,f){if(2===j){if(f){var
u=f[2];if(u){var
m=u[1],k=f[1],v=g(b,k,m);return 0===v?[0,k,0]:0<=v?[0,m,[0,k,0]]:[0,k,[0,m,0]]}}}else
if(3===j)if(f){var
o=f[2];if(o){var
w=o[2];if(w){var
c=w[1],a=o[1],d=f[1],x=g(b,d,a);if(0===x){var
y=g(b,a,c);return 0===y?[0,a,0]:0<=y?[0,c,[0,a,0]]:[0,a,[0,c,0]]}if(0<=x){var
z=g(b,d,c);if(0===z)return[0,a,[0,d,0]];if(0<=z){var
A=g(b,a,c);return 0===A?[0,a,[0,d,0]]:0<=A?[0,c,[0,a,[0,d,0]]]:[0,a,[0,c,[0,d,0]]]}return[0,a,[0,d,[0,c,0]]]}var
B=g(b,a,c);if(0===B)return[0,d,[0,a,0]];if(0<=B){var
C=g(b,d,c);return 0===C?[0,d,[0,a,0]]:0<=C?[0,c,[0,d,[0,a,0]]]:[0,d,[0,c,[0,a,0]]]}return[0,d,[0,a,[0,c,0]]]}}}var
n=j>>1,D=qy(n,f),E=t(n,f),i=E,h=t(j-n|0,D),e=0;for(;;){if(i){if(h){var
p=h[2],q=h[1],r=i[2],l=i[1],s=g(b,l,q);if(0===s){var
i=r,h=p,e=[0,l,e];continue}if(0<s){var
i=r,e=[0,l,e];continue}var
h=p,e=[0,q,e];continue}return kp(i,e)}return kp(h,e)}},t=function(j,f){if(2===j){if(f){var
u=f[2];if(u){var
n=u[1],k=f[1],v=g(b,k,n);return 0===v?[0,k,0]:0<v?[0,k,[0,n,0]]:[0,n,[0,k,0]]}}}else
if(3===j)if(f){var
p=f[2];if(p){var
w=p[2];if(w){var
c=w[1],a=p[1],d=f[1],x=g(b,d,a);if(0===x){var
y=g(b,a,c);return 0===y?[0,a,0]:0<y?[0,a,[0,c,0]]:[0,c,[0,a,0]]}if(0<x){var
z=g(b,a,c);if(0===z)return[0,d,[0,a,0]];if(0<z)return[0,d,[0,a,[0,c,0]]];var
A=g(b,d,c);return 0===A?[0,d,[0,a,0]]:0<A?[0,d,[0,c,[0,a,0]]]:[0,c,[0,d,[0,a,0]]]}var
B=g(b,d,c);if(0===B)return[0,a,[0,d,0]];if(0<B)return[0,a,[0,d,[0,c,0]]];var
C=g(b,a,c);return 0===C?[0,a,[0,d,0]]:0<C?[0,a,[0,c,[0,d,0]]]:[0,c,[0,a,[0,d,0]]]}}}var
o=j>>1,D=qy(o,f),E=m(o,f),i=E,h=m(j-o|0,D),e=0;for(;;){if(i){if(h){var
q=h[2],r=h[1],s=i[2],l=i[1],t=g(b,l,r);if(0===t){var
i=s,h=q,e=[0,l,e];continue}if(0<=t){var
h=q,e=[0,r,e];continue}var
i=s,e=[0,l,e];continue}return kp(i,e)}return kp(h,e)}},q=qw(d),s=2<=q?m(q,d):d,j=function(b,a){if(!(3<b>>>0))switch(b){case
0:return[0,0,a];case
1:if(a)return[0,[0,0,a[1],0,1],a[2]];break;case
2:if(a){var
e=a[2];if(e)return[0,[0,[0,0,a[1],0,1],e[1],0,2],e[2]]}break;default:if(a){var
f=a[2];if(f){var
g=f[2];if(g)return[0,[0,[0,0,a[1],0,1],f[1],[0,0,g[1],0,1],2],g[2]]}}}var
h=b/2|0,i=j(h,a),d=i[2],l=i[1];if(d){var
m=d[1],k=j((b-h|0)-1|0,d[2]),n=k[2];return[0,c(l,m,k[1]),n]}throw[0,w,vD]};return j(qw(s),s)[1]}var
u=p[1];return a(u,a(r,a(o,a(i,h(f)))))}return a(r,a(o,a(i,h(f))))}return a(o,a(i,h(f)))}return a(i,h(f))}return h(f)}return C}]}i4(0);i4(0);i4(0);i4(0);function
im(a){var
b=1<=a?a:1,c=lQ<b?lQ:b,d=jl(c);return[0,d,0,c,d]}function
iw(a){return qB(a[1],0,a[2])}function
ov(a,c){var
b=[0,a[3]];for(;;){if(b[1]<(a[2]+c|0)){b[1]=2*b[1]|0;continue}if(lQ<b[1])if((a[2]+c|0)<=lQ)b[1]=lQ;else
N(vE);var
d=jl(b[1]);qC(a[1],0,d,0,a[2]);a[1]=d;a[3]=b[1];return 0}}function
iD(a,c){var
b=a[2];if(a[3]<=b)ov(a,1);it(a[1],b,c);a[2]=b+1|0;return 0}function
P(a,c){var
b=ij(c),d=a[2]+b|0;if(a[3]<d)ov(a,b);jB(c,0,a[1],a[2],b);a[2]=d;return 0}var
ow=-6;function
qJ(a){return[0,0,jl(a)]}function
qK(a,h){var
b=j7(a[2]),c=a[1]+h|0,d=b<c?1:0;if(d){var
e=b*2|0,i=uQ(e,c)?e:c,f=jl(i);qC(a[2],0,f,0,b);a[2]=f;var
g=0}else
var
g=d;return g}function
lS(a,b){qK(a,1);mt(a[2],a[1],b);a[1]=a[1]+1|0;return 0}function
iK(a,c){var
b=ij(c);qK(a,b);jB(c,0,a[2],a[1],b);a[1]=a[1]+b|0;return 0}function
qL(a){return qB(a[2],0,a[1])}function
ox(b,c){var
a=c;for(;;)if(typeof
a==="number")return 0;else
switch(a[0]){case
0:var
d=a[1];iK(b,vO);var
a=d;continue;case
1:var
e=a[1];iK(b,vP);var
a=e;continue;case
2:var
f=a[1];iK(b,vQ);var
a=f;continue;case
3:var
g=a[1];iK(b,vR);var
a=g;continue;case
4:var
h=a[1];iK(b,vS);var
a=h;continue;case
5:var
i=a[1];iK(b,vT);var
a=i;continue;case
6:var
j=a[1];iK(b,vU);var
a=j;continue;case
7:var
k=a[1];iK(b,vV);var
a=k;continue;case
8:var
l=a[2],m=a[1];iK(b,vW);ox(b,m);iK(b,vX);var
a=l;continue;case
9:var
n=a[3],o=a[1];iK(b,vY);ox(b,o);iK(b,vZ);var
a=n;continue;case
10:var
p=a[1];iK(b,v0);var
a=p;continue;case
11:var
q=a[1];iK(b,v1);var
a=q;continue;case
12:var
r=a[1];iK(b,v2);var
a=r;continue;case
13:var
s=a[1];iK(b,v3);var
a=s;continue;default:var
t=a[1];iK(b,v4);var
a=t;continue}}function
iE(a){if(typeof
a==="number")return 0;else
switch(a[0]){case
0:return[0,iE(a[1])];case
1:return[1,iE(a[1])];case
2:return[2,iE(a[1])];case
3:return[3,iE(a[1])];case
4:return[4,iE(a[1])];case
5:return[5,iE(a[1])];case
6:return[6,iE(a[1])];case
7:return[7,iE(a[1])];case
8:var
b=a[1];return[8,b,iE(a[2])];case
9:var
c=a[2],d=a[1];return[9,c,d,iE(a[3])];case
10:return[10,iE(a[1])];case
11:return[11,iE(a[1])];case
12:return[12,iE(a[1])];case
13:return[13,iE(a[1])];default:return[14,iE(a[1])]}}function
iL(a){if(typeof
a==="number"){var
s=function(a){return 0},t=function(a){return 0},u=function(a){return 0};return[0,function(a){return 0},u,t,s]}else
switch(a[0]){case
0:var
b=iL(a[1]),v=b[4],w=b[3],x=b[2],y=b[1],z=function(a){d(x,0);return 0};return[0,function(a){d(y,0);return 0},z,w,v];case
1:var
c=iL(a[1]),A=c[4],B=c[3],C=c[2],D=c[1],E=function(a){d(C,0);return 0};return[0,function(a){d(D,0);return 0},E,B,A];case
2:var
e=iL(a[1]),F=e[4],G=e[3],H=e[2],I=e[1],J=function(a){d(H,0);return 0};return[0,function(a){d(I,0);return 0},J,G,F];case
3:var
f=iL(a[1]),K=f[4],L=f[3],M=f[2],N=f[1],O=function(a){d(M,0);return 0};return[0,function(a){d(N,0);return 0},O,L,K];case
4:var
g=iL(a[1]),P=g[4],Q=g[3],R=g[2],S=g[1],T=function(a){d(R,0);return 0};return[0,function(a){d(S,0);return 0},T,Q,P];case
5:var
h=iL(a[1]),U=h[4],V=h[3],W=h[2],X=h[1],Y=function(a){d(W,0);return 0};return[0,function(a){d(X,0);return 0},Y,V,U];case
6:var
i=iL(a[1]),Z=i[4],_=i[3],$=i[2],aa=i[1],ab=function(a){d($,0);return 0};return[0,function(a){d(aa,0);return 0},ab,_,Z];case
7:var
j=iL(a[1]),ac=j[4],ad=j[3],ae=j[2],af=j[1],ag=function(a){d(ae,0);return 0};return[0,function(a){d(af,0);return 0},ag,ad,ac];case
8:var
k=iL(a[2]),ah=k[4],ai=k[3],aj=k[2],ak=k[1],al=function(a){d(aj,0);return 0};return[0,function(a){d(ak,0);return 0},al,ai,ah];case
9:var
am=a[2],an=a[1],l=iL(a[3]),ao=l[4],ap=l[3],aq=l[2],ar=l[1],m=iL(iG(iE(an),am)),as=m[4],at=m[3],au=m[2],av=m[1],aw=function(a){d(as,0);d(ao,0);return 0},ax=function(a){d(ap,0);d(at,0);return 0},ay=function(a){d(au,0);d(aq,0);return 0};return[0,function(a){d(ar,0);d(av,0);return 0},ay,ax,aw];case
10:var
n=iL(a[1]),az=n[4],aA=n[3],aB=n[2],aC=n[1],aD=function(a){d(aB,0);return 0};return[0,function(a){d(aC,0);return 0},aD,aA,az];case
11:var
o=iL(a[1]),aE=o[4],aF=o[3],aG=o[2],aH=o[1],aI=function(a){d(aG,0);return 0};return[0,function(a){d(aH,0);return 0},aI,aF,aE];case
12:var
p=iL(a[1]),aJ=p[4],aK=p[3],aL=p[2],aM=p[1],aN=function(a){d(aL,0);return 0};return[0,function(a){d(aM,0);return 0},aN,aK,aJ];case
13:var
q=iL(a[1]),aO=q[4],aP=q[3],aQ=q[2],aR=q[1],aS=function(a){d(aO,0);return 0},aT=function(a){d(aP,0);return 0},aU=function(a){d(aQ,0);return 0};return[0,function(a){d(aR,0);return 0},aU,aT,aS];default:var
r=iL(a[1]),aV=r[4],aW=r[3],aX=r[2],aY=r[1],aZ=function(a){d(aV,0);return 0},a0=function(a){d(aW,0);return 0},a1=function(a){d(aX,0);return 0};return[0,function(a){d(aY,0);return 0},a1,a0,aZ]}}function
iG(c,b){if(typeof
c==="number")if(typeof
b==="number")return 0;else
switch(b[0]){case
10:var
a=0;break;case
11:var
a=1;break;case
12:var
a=2;break;case
13:var
a=3;break;case
14:var
a=4;break;case
8:var
a=5;break;case
9:var
a=6;break;default:throw[0,w,v5]}else
switch(c[0]){case
0:var
t=c[1];if(typeof
b==="number")var
e=1;else
switch(b[0]){case
0:return[0,iG(t,b[1])];case
8:var
a=5,e=0;break;case
9:var
a=6,e=0;break;case
10:var
a=0,e=0;break;case
11:var
a=1,e=0;break;case
12:var
a=2,e=0;break;case
13:var
a=3,e=0;break;case
14:var
a=4,e=0;break;default:var
e=1}if(e)var
a=7;break;case
1:var
u=c[1];if(typeof
b==="number")var
f=1;else
switch(b[0]){case
1:return[1,iG(u,b[1])];case
8:var
a=5,f=0;break;case
9:var
a=6,f=0;break;case
10:var
a=0,f=0;break;case
11:var
a=1,f=0;break;case
12:var
a=2,f=0;break;case
13:var
a=3,f=0;break;case
14:var
a=4,f=0;break;default:var
f=1}if(f)var
a=7;break;case
2:var
v=c[1];if(typeof
b==="number")var
g=1;else
switch(b[0]){case
2:return[2,iG(v,b[1])];case
8:var
a=5,g=0;break;case
9:var
a=6,g=0;break;case
10:var
a=0,g=0;break;case
11:var
a=1,g=0;break;case
12:var
a=2,g=0;break;case
13:var
a=3,g=0;break;case
14:var
a=4,g=0;break;default:var
g=1}if(g)var
a=7;break;case
3:var
x=c[1];if(typeof
b==="number")var
h=1;else
switch(b[0]){case
3:return[3,iG(x,b[1])];case
8:var
a=5,h=0;break;case
9:var
a=6,h=0;break;case
10:var
a=0,h=0;break;case
11:var
a=1,h=0;break;case
12:var
a=2,h=0;break;case
13:var
a=3,h=0;break;case
14:var
a=4,h=0;break;default:var
h=1}if(h)var
a=7;break;case
4:var
y=c[1];if(typeof
b==="number")var
i=1;else
switch(b[0]){case
4:return[4,iG(y,b[1])];case
8:var
a=5,i=0;break;case
9:var
a=6,i=0;break;case
10:var
a=0,i=0;break;case
11:var
a=1,i=0;break;case
12:var
a=2,i=0;break;case
13:var
a=3,i=0;break;case
14:var
a=4,i=0;break;default:var
i=1}if(i)var
a=7;break;case
5:var
z=c[1];if(typeof
b==="number")var
j=1;else
switch(b[0]){case
5:return[5,iG(z,b[1])];case
8:var
a=5,j=0;break;case
9:var
a=6,j=0;break;case
10:var
a=0,j=0;break;case
11:var
a=1,j=0;break;case
12:var
a=2,j=0;break;case
13:var
a=3,j=0;break;case
14:var
a=4,j=0;break;default:var
j=1}if(j)var
a=7;break;case
6:var
A=c[1];if(typeof
b==="number")var
k=1;else
switch(b[0]){case
6:return[6,iG(A,b[1])];case
8:var
a=5,k=0;break;case
9:var
a=6,k=0;break;case
10:var
a=0,k=0;break;case
11:var
a=1,k=0;break;case
12:var
a=2,k=0;break;case
13:var
a=3,k=0;break;case
14:var
a=4,k=0;break;default:var
k=1}if(k)var
a=7;break;case
7:var
B=c[1];if(typeof
b==="number")var
l=1;else
switch(b[0]){case
7:return[7,iG(B,b[1])];case
8:var
a=5,l=0;break;case
9:var
a=6,l=0;break;case
10:var
a=0,l=0;break;case
11:var
a=1,l=0;break;case
12:var
a=2,l=0;break;case
13:var
a=3,l=0;break;case
14:var
a=4,l=0;break;default:var
l=1}if(l)var
a=7;break;case
8:var
C=c[2],D=c[1];if(typeof
b==="number")var
n=1;else
switch(b[0]){case
8:var
E=b[1],F=iG(C,b[2]);return[8,iG(D,E),F];case
10:var
a=0,n=0;break;case
11:var
a=1,n=0;break;case
12:var
a=2,n=0;break;case
13:var
a=3,n=0;break;case
14:var
a=4,n=0;break;default:var
n=1}if(n)throw[0,w,wc];break;case
9:var
G=c[3],H=c[2],I=c[1];if(typeof
b==="number")var
m=1;else
switch(b[0]){case
8:var
a=5,m=0;break;case
9:var
J=b[3],K=b[2],L=b[1],s=iL(iG(iE(H),L)),M=s[4];d(s[2],0);d(M,0);return[9,I,K,iG(G,J)];case
10:var
a=0,m=0;break;case
11:var
a=1,m=0;break;case
12:var
a=2,m=0;break;case
13:var
a=3,m=0;break;case
14:var
a=4,m=0;break;default:var
m=1}if(m)throw[0,w,wd];break;case
10:var
N=c[1];if(typeof
b!=="number"&&10===b[0])return[10,iG(N,b[1])];throw[0,w,we];case
11:var
O=c[1];if(typeof
b==="number")var
r=1;else
switch(b[0]){case
10:var
a=0,r=0;break;case
11:return[11,iG(O,b[1])];default:var
r=1}if(r)throw[0,w,wf];break;case
12:var
P=c[1];if(typeof
b==="number")var
q=1;else
switch(b[0]){case
10:var
a=0,q=0;break;case
11:var
a=1,q=0;break;case
12:return[12,iG(P,b[1])];default:var
q=1}if(q)throw[0,w,wg];break;case
13:var
Q=c[1];if(typeof
b==="number")var
p=1;else
switch(b[0]){case
10:var
a=0,p=0;break;case
11:var
a=1,p=0;break;case
12:var
a=2,p=0;break;case
13:return[13,iG(Q,b[1])];default:var
p=1}if(p)throw[0,w,wh];break;default:var
R=c[1];if(typeof
b==="number")var
o=1;else
switch(b[0]){case
10:var
a=0,o=0;break;case
11:var
a=1,o=0;break;case
12:var
a=2,o=0;break;case
13:var
a=3,o=0;break;case
14:return[14,iG(R,b[1])];default:var
o=1}if(o)throw[0,w,wi]}switch(a){case
0:throw[0,w,v8];case
1:throw[0,w,v9];case
2:throw[0,w,v_];case
3:throw[0,w,v$];case
4:throw[0,w,wa];case
5:throw[0,w,v6];case
6:throw[0,w,v7];default:throw[0,w,wb]}}var
iM=[iz,wj,i4(0)];function
oy(b,a){if(typeof
b==="number")return[0,0,a];else{if(0===b[0])return[0,[0,b[1],b[2]],a];if(typeof
a!=="number"&&2===a[0])return[0,[1,b[1]],a[1]];throw iM}}function
lT(e,b,d){var
a=oy(e,d);if(typeof
b==="number"){if(0===b)return[0,a[1],0,a[2]];var
c=a[2];if(typeof
c!=="number"&&2===c[0])return[0,a[1],1,c[1]];throw iM}return[0,a[1],[0,b[1]],a[2]]}function
i6(d,c,b){var
a=A(c,b);return[0,[23,d,a[1]],a[2]]}function
A(b,a){if(typeof
b==="number")return[0,0,a];else
switch(b[0]){case
0:if(typeof
a!=="number"&&0===a[0]){var
r=A(b[1],a[1]);return[0,[0,r[1]],r[2]]}break;case
1:if(typeof
a!=="number"&&0===a[0]){var
s=A(b[1],a[1]);return[0,[1,s[1]],s[2]]}break;case
2:var
aa=b[2],t=oy(b[1],a),e=t[2],ab=t[1];if(typeof
e!=="number"&&1===e[0]){var
u=A(aa,e[1]);return[0,[2,ab,u[1]],u[2]]}throw iM;case
3:var
ac=b[2],v=oy(b[1],a),f=v[2],ad=v[1];if(typeof
f!=="number"&&1===f[0]){var
w=A(ac,f[1]);return[0,[3,ad,w[1]],w[2]]}throw iM;case
4:var
ae=b[4],af=b[1],g=lT(b[2],b[3],a),h=g[3],ag=g[2],ah=g[1];if(typeof
h!=="number"&&2===h[0]){var
x=A(ae,h[1]);return[0,[4,af,ah,ag,x[1]],x[2]]}throw iM;case
5:var
ai=b[4],aj=b[1],i=lT(b[2],b[3],a),j=i[3],ak=i[2],al=i[1];if(typeof
j!=="number"&&3===j[0]){var
y=A(ai,j[1]);return[0,[5,aj,al,ak,y[1]],y[2]]}throw iM;case
6:var
am=b[4],an=b[1],k=lT(b[2],b[3],a),l=k[3],ao=k[2],ap=k[1];if(typeof
l!=="number"&&4===l[0]){var
z=A(am,l[1]);return[0,[6,an,ap,ao,z[1]],z[2]]}throw iM;case
7:var
aq=b[4],ar=b[1],m=lT(b[2],b[3],a),n=m[3],as=m[2],at=m[1];if(typeof
n!=="number"&&5===n[0]){var
B=A(aq,n[1]);return[0,[7,ar,at,as,B[1]],B[2]]}throw iM;case
8:var
au=b[4],av=b[1],o=lT(b[2],b[3],a),p=o[3],aw=o[2],ax=o[1];if(typeof
p!=="number"&&6===p[0]){var
C=A(au,p[1]);return[0,[8,av,ax,aw,C[1]],C[2]]}throw iM;case
9:if(typeof
a!=="number"&&7===a[0]){var
D=A(b[1],a[1]);return[0,[9,D[1]],D[2]]}break;case
10:var
E=A(b[1],a);return[0,[10,E[1]],E[2]];case
11:var
ay=b[1],F=A(b[2],a);return[0,[11,ay,F[1]],F[2]];case
12:var
az=b[1],G=A(b[2],a);return[0,[12,az,G[1]],G[2]];case
13:if(typeof
a!=="number"&&8===a[0]){var
H=a[1],aA=a[2],aB=b[3],aC=b[1];if(lM([0,b[2]],[0,H]))throw iM;var
I=A(aB,aA);return[0,[13,aC,H,I[1]],I[2]]}break;case
14:if(typeof
a!=="number"&&9===a[0]){var
J=a[1],aD=a[3],aE=b[3],aF=b[2],aG=b[1],aH=[0,Q(J)];if(lM([0,Q(aF)],aH))throw iM;var
K=A(aE,Q(aD));return[0,[14,aG,J,K[1]],K[2]]}break;case
15:if(typeof
a!=="number"&&10===a[0]){var
L=A(b[1],a[1]);return[0,[15,L[1]],L[2]]}break;case
16:if(typeof
a!=="number"&&11===a[0]){var
M=A(b[1],a[1]);return[0,[16,M[1]],M[2]]}break;case
17:var
aI=b[1],N=A(b[2],a);return[0,[17,aI,N[1]],N[2]];case
18:var
O=b[2],q=b[1];if(0===q[0]){var
T=q[1],aM=T[2],U=A(T[1],a),aN=U[1],V=A(O,U[2]);return[0,[18,[0,[0,aN,aM]],V[1]],V[2]]}var
W=q[1],aO=W[2],X=A(W[1],a),aP=X[1],Y=A(O,X[2]);return[0,[18,[1,[0,aP,aO]],Y[1]],Y[2]];case
19:if(typeof
a!=="number"&&13===a[0]){var
P=A(b[1],a[1]);return[0,[19,P[1]],P[2]]}break;case
20:if(typeof
a!=="number"&&1===a[0]){var
aJ=b[2],aK=b[1],R=A(b[3],a[1]);return[0,[20,aK,aJ,R[1]],R[2]]}break;case
21:if(typeof
a!=="number"&&2===a[0]){var
aL=b[1],S=A(b[2],a[1]);return[0,[21,aL,S[1]],S[2]]}break;case
23:var
d=b[2],c=b[1];if(typeof
c==="number")switch(c){case
0:return i6(c,d,a);case
1:return i6(c,d,a);case
2:return i6(c,d,a);case
3:if(typeof
a!=="number"&&14===a[0]){var
Z=A(d,a[1]);return[0,[23,3,Z[1]],Z[2]]}throw iM;default:return i6(c,d,a)}else
switch(c[0]){case
0:return i6(c,d,a);case
1:return i6(c,d,a);case
2:return i6(c,d,a);case
3:return i6(c,d,a);case
4:return i6(c,d,a);case
5:return i6(c,d,a);case
6:return i6(c,d,a);case
7:return i6([7,c[1],c[2]],d,a);case
8:var
aQ=c[1],_=iU(c[2],d,a),$=_[2];return[0,[23,[8,aQ,_[1]],$[1]],$[2]];case
9:return i6(c,d,a);default:return i6(c,d,a)}}throw iM}function
iU(b,c,a){if(typeof
b==="number")return[0,0,A(c,a)];else
switch(b[0]){case
0:if(typeof
a!=="number"&&0===a[0]){var
g=iU(b[1],c,a[1]);return[0,[0,g[1]],g[2]]}break;case
1:if(typeof
a!=="number"&&1===a[0]){var
h=iU(b[1],c,a[1]);return[0,[1,h[1]],h[2]]}break;case
2:if(typeof
a!=="number"&&2===a[0]){var
i=iU(b[1],c,a[1]);return[0,[2,i[1]],i[2]]}break;case
3:if(typeof
a!=="number"&&3===a[0]){var
j=iU(b[1],c,a[1]);return[0,[3,j[1]],j[2]]}break;case
4:if(typeof
a!=="number"&&4===a[0]){var
k=iU(b[1],c,a[1]);return[0,[4,k[1]],k[2]]}break;case
5:if(typeof
a!=="number"&&5===a[0]){var
l=iU(b[1],c,a[1]);return[0,[5,l[1]],l[2]]}break;case
6:if(typeof
a!=="number"&&6===a[0]){var
m=iU(b[1],c,a[1]);return[0,[6,m[1]],m[2]]}break;case
7:if(typeof
a!=="number"&&7===a[0]){var
n=iU(b[1],c,a[1]);return[0,[7,n[1]],n[2]]}break;case
8:if(typeof
a!=="number"&&8===a[0]){var
o=a[1],w=a[2],x=b[2];if(lM([0,b[1]],[0,o]))throw iM;var
p=iU(x,c,w);return[0,[8,o,p[1]],p[2]]}break;case
9:if(typeof
a!=="number"&&9===a[0]){var
e=a[2],f=a[1],y=a[3],z=b[3],B=b[2],C=b[1],D=[0,Q(f)];if(lM([0,Q(C)],D))throw iM;var
E=[0,Q(e)];if(lM([0,Q(B)],E))throw iM;var
q=iL(iG(iE(f),e)),F=q[4];d(q[2],0);d(F,0);var
r=iU(Q(z),c,y),G=r[2];return[0,[9,f,e,iE(r[1])],G]}break;case
10:if(typeof
a!=="number"&&10===a[0]){var
s=iU(b[1],c,a[1]);return[0,[10,s[1]],s[2]]}break;case
11:if(typeof
a!=="number"&&11===a[0]){var
t=iU(b[1],c,a[1]);return[0,[11,t[1]],t[2]]}break;case
13:if(typeof
a!=="number"&&13===a[0]){var
u=iU(b[1],c,a[1]);return[0,[13,u[1]],u[2]]}break;case
14:if(typeof
a!=="number"&&14===a[0]){var
v=iU(b[1],c,a[1]);return[0,[14,v[1]],v[2]]}break}throw iM}function
i7(k,i,a){var
b=ij(a),j=0<=i?k:0,d=os(i);if(d<=b)return a;var
l=2===j?48:32,c=kJ(d,l);switch(j){case
0:jB(a,0,c,0,b);break;case
1:jB(a,0,c,d-b|0,b);break;default:if(0<b){if(43===G(a,0))var
e=1;else
if(45===G(a,0))var
e=1;else
if(32===G(a,0))var
e=1;else
var
g=0,e=0;if(e){mt(c,0,G(a,0));jB(a,1,c,(d-b|0)+1|0,b-1|0);var
g=1}}else
var
g=0;if(!g){if(1<b)if(48===G(a,0)){if(kB===G(a,1))var
h=1;else
if(88===G(a,1))var
h=1;else
var
f=0,h=0;if(h){mt(c,1,G(a,1));jB(a,2,c,(d-b|0)+2|0,b-2|0);var
f=1}}else
var
f=0;else
var
f=0;if(!f)jB(a,0,c,d-b|0,b)}}return c}function
ld(j,b){var
c=os(j),a=ij(b),d=G(b,0);if(58<=d)var
e=71<=d?5<(d+tP|0)>>>0?1:0:65<=d?0:1;else{if(32===d)var
f=1;else
if(43<=d)switch(d+np|0){case
5:if(a<(c+2|0))if(1<a){var
k=kB===G(b,1)?0:88===G(b,1)?0:1;if(!k){var
h=kJ(c+2|0,48);mt(h,1,G(b,1));jB(b,2,h,(c-a|0)+4|0,a-2|0);return h}}var
e=0,f=0;break;case
0:case
2:var
f=1;break;case
1:case
3:case
4:var
e=1,f=0;break;default:var
e=0,f=0}else
var
e=1,f=0;if(f){if(a<(c+1|0)){var
g=kJ(c+1|0,48);mt(g,0,d);jB(b,1,g,(c-a|0)+2|0,a-1|0);return g}var
e=1}}if(!e)if(a<c){var
i=kJ(c,48);jB(b,0,i,c-a|0,a);return i}return b}function
wk(d){var
j=0;for(;;){if(ij(d)<=j)var
w=0;else{var
g=jm(d,j);if(32<=g){var
q=g+sF|0;if(58<q>>>0)if(93<=q)var
r=0,l=0;else
var
l=1;else
if(56<(q-1|0)>>>0)var
r=1,l=0;else
var
l=1;if(l){var
j=j+1|0;continue}}else
var
r=11<=g?13===g?1:0:8<=g?1:0;var
w=r?1:1}if(w){var
a=[0,0],u=j7(d)-1|0,z=0;if(!(u<0)){var
i=z;for(;;){var
f=jm(d,i);if(32<=f){var
o=f+sF|0;if(58<o>>>0)if(93<=o)var
m=0,n=0;else
var
n=1;else
if(56<(o-1|0)>>>0)var
m=1,n=0;else
var
n=1;if(n)var
p=1,m=2}else
var
m=11<=f?13===f?1:0:8<=f?1:0;switch(m){case
0:var
p=4;break;case
1:var
p=2;break}a[1]=a[1]+p|0;var
C=i+1|0;if(u!==i){var
i=C;continue}break}}if(a[1]===j7(d)){var
s=j7(d),t=jl(s);qm(d,0,t,0,s);var
k=t}else{var
b=jl(a[1]);a[1]=0;var
v=j7(d)-1|0,A=0;if(!(v<0)){var
h=A;for(;;){var
c=jm(d,h);if(35<=c)var
e=92===c?1:il<=c?0:2;else
if(32<=c)var
e=34<=c?1:2;else
if(14<=c)var
e=0;else
switch(c){case
8:it(b,a[1],92);a[1]++;it(b,a[1],98);var
e=3;break;case
9:it(b,a[1],92);a[1]++;it(b,a[1],mi);var
e=3;break;case
10:it(b,a[1],92);a[1]++;it(b,a[1],iq);var
e=3;break;case
13:it(b,a[1],92);a[1]++;it(b,a[1],mg);var
e=3;break;default:var
e=0}switch(e){case
0:it(b,a[1],92);a[1]++;it(b,a[1],48+(c/jS|0)|0);a[1]++;it(b,a[1],48+((c/10|0)%10|0)|0);a[1]++;it(b,a[1],48+(c%10|0)|0);break;case
1:it(b,a[1],92);a[1]++;it(b,a[1],c);break;case
2:it(b,a[1],c);break}a[1]++;var
B=h+1|0;if(v!==h){var
h=B;continue}break}}var
k=b}}else
var
k=d;var
x=ij(k),y=kJ(x+2|0,34);jb(k,0,y,1,x);return y}}function
xa(c,b){switch(c){case
0:var
a=wl;break;case
1:var
a=wm;break;case
2:var
a=wn;break;case
3:var
a=wo;break;case
4:var
a=wp;break;case
5:var
a=wq;break;case
6:var
a=wr;break;case
7:var
a=ws;break;case
8:var
a=wt;break;case
9:var
a=wu;break;case
10:var
a=wv;break;case
11:var
a=ww;break;default:var
a=wx}return ok(a,b)}function
xb(c,b){switch(c){case
0:var
a=wL;break;case
1:var
a=wM;break;case
2:var
a=wN;break;case
3:var
a=wO;break;case
4:var
a=wP;break;case
5:var
a=wQ;break;case
6:var
a=wR;break;case
7:var
a=wS;break;case
8:var
a=wT;break;case
9:var
a=wU;break;case
10:var
a=wV;break;case
11:var
a=wW;break;default:var
a=wX}return ok(a,b)}function
xc(c,b){switch(c){case
0:var
a=wY;break;case
1:var
a=wZ;break;case
2:var
a=w0;break;case
3:var
a=w1;break;case
4:var
a=w2;break;case
5:var
a=w3;break;case
6:var
a=w4;break;case
7:var
a=w5;break;case
8:var
a=w6;break;case
9:var
a=w7;break;case
10:var
a=w8;break;case
11:var
a=w9;break;default:var
a=w_}return ok(a,b)}function
xd(c,b){switch(c){case
0:var
a=wy;break;case
1:var
a=wz;break;case
2:var
a=wA;break;case
3:var
a=wB;break;case
4:var
a=wC;break;case
5:var
a=wD;break;case
6:var
a=wE;break;case
7:var
a=wF;break;case
8:var
a=wG;break;case
9:var
a=wH;break;case
10:var
a=wI;break;case
11:var
a=wJ;break;default:var
a=wK}return ac9(a,b)}function
j_(c,u,h){if(16<=c){if(17<=c)switch(c+ug|0){case
2:var
k=0;break;case
0:case
3:var
n=43,k=1;break;default:var
n=32,k=1}else
var
k=0;if(!k)var
n=45;var
i=ac6(h,u,n);if(19<=c){var
l=j7(i);if(0===l)return i;var
r=jl(l),s=l-1|0,y=0;if(!(s<0)){var
e=y;for(;;){var
g=jm(i,e);if(97<=g)if(iu<g)var
q=0;else
var
t=g-32|0,q=1;else
var
q=0;if(!q)var
t=g;it(r,e,t);var
z=e+1|0;if(s!==e){var
e=z;continue}break}}return r}return i}if(15===c)var
v=w$;else{var
A=os(u);switch(c){case
15:var
b=70;break;case
0:case
1:case
2:var
b=jh;break;case
3:case
4:case
5:var
b=jv;break;case
6:case
7:case
8:var
b=69;break;case
9:case
10:case
11:var
b=iI;break;case
12:case
13:case
14:var
b=71;break;case
16:case
17:case
18:var
b=mf;break;default:var
b=72}var
d=qJ(16);lS(d,37);switch(c){case
1:case
4:case
7:case
10:case
13:case
17:case
20:lS(d,43);break;case
2:case
5:case
8:case
11:case
14:case
18:case
21:lS(d,32);break}lS(d,46);iK(d,a(o+A));lS(d,b);var
v=qL(d)}var
f=uP(v,h);if(15===c){var
w=ac1(h),B=ij(f);if(3===w)return h<0?xe:xf;if(4<=w)return xg;var
j=0;for(;;){if(j===B)var
x=0;else{var
p=G(f,j)+kZ|0,C=23<p>>>0?55===p?1:0:21<(p-1|0)>>>0?1:0;if(!C){var
j=j+1|0;continue}var
x=1}return x?f:m(f,xh)}}return f}function
mA(h,f,e,d,i,c,b,a){if(typeof
i==="number"){if(typeof
c==="number")return 0===c?function(c){return x(h,f,[4,e,g(b,a,c)],d)}:function(i,c){return x(h,f,[4,e,ld(i,g(b,a,c))],d)};var
m=c[1];return function(c){return x(h,f,[4,e,ld(m,g(b,a,c))],d)}}else{if(0===i[0]){var
j=i[2],k=i[1];if(typeof
c==="number")return 0===c?function(c){return x(h,f,[4,e,i7(k,j,g(b,a,c))],d)}:function(i,c){return x(h,f,[4,e,i7(k,j,ld(i,g(b,a,c)))],d)};var
n=c[1];return function(c){return x(h,f,[4,e,i7(k,j,ld(n,g(b,a,c)))],d)}}var
l=i[1];if(typeof
c==="number")return 0===c?function(i,c){return x(h,f,[4,e,i7(l,i,g(b,a,c))],d)}:function(j,i,c){return x(h,f,[4,e,i7(l,j,ld(i,g(b,a,c)))],d)};var
o=c[1];return function(i,c){return x(h,f,[4,e,i7(l,i,ld(o,g(b,a,c)))],d)}}}function
qM(g,f,e,c,a,b){if(typeof
a==="number")return function(a){return x(g,f,[4,e,d(b,a)],c)};else{if(0===a[0]){var
h=a[2],i=a[1];return function(a){return x(g,f,[4,e,i7(i,h,d(b,a))],c)}}var
j=a[1];return function(h,a){return x(g,f,[4,e,i7(j,h,d(b,a))],c)}}}function
mc(f,D,e,C,B){var
b=D,a=C,c=B;for(;;)if(typeof
c==="number")return g(b,e,a);else
switch(c[0]){case
0:var
E=c[1];return function(c){return x(b,e,[5,a,c],E)};case
1:var
G=c[1];return function(g){var
c=qz(g),d=ij(c),f=kJ(d+2|0,39);jb(c,0,f,1,d);return x(b,e,[4,a,f],G)};case
2:var
H=c[2],I=c[1];return qM(b,e,a,H,I,function(a){return a});case
3:return qM(b,e,a,c[2],c[1],wk);case
4:return mA(b,e,a,c[4],c[2],c[3],xa,c[1]);case
5:return mA(b,e,a,c[4],c[2],c[3],xb,c[1]);case
6:return mA(b,e,a,c[4],c[2],c[3],xc,c[1]);case
7:return mA(b,e,a,c[4],c[2],c[3],xd,c[1]);case
8:var
i=c[4],j=c[3],l=c[2],k=c[1];if(typeof
l==="number"){if(typeof
j==="number")return 0===j?function(c){return x(b,e,[4,a,j_(k,ow,c)],i)}:function(d,c){return x(b,e,[4,a,j_(k,d,c)],i)};var
$=j[1];return function(c){return x(b,e,[4,a,j_(k,$,c)],i)}}else{if(0===l[0]){var
o=l[2],p=l[1];if(typeof
j==="number")return 0===j?function(c){return x(b,e,[4,a,i7(p,o,j_(k,ow,c))],i)}:function(d,c){return x(b,e,[4,a,i7(p,o,j_(k,d,c))],i)};var
aa=j[1];return function(c){return x(b,e,[4,a,i7(p,o,j_(k,aa,c))],i)}}var
q=l[1];if(typeof
j==="number")return 0===j?function(d,c){return x(b,e,[4,a,i7(q,d,j_(k,ow,c))],i)}:function(f,d,c){return x(b,e,[4,a,i7(q,f,j_(k,d,c))],i)};var
ab=j[1];return function(d,c){return x(b,e,[4,a,i7(q,d,j_(k,ab,c))],i)}}case
9:var
J=c[1];return function(c){var
d=c?u6:u7;return x(b,e,[4,a,d],J)};case
10:var
a=[7,a],c=c[1];continue;case
11:var
a=[2,a,c[1]],c=c[2];continue;case
12:var
a=[3,a,c[1]],c=c[2];continue;case
13:var
K=c[3],L=c[2],r=qJ(16);ox(r,L);var
z=qL(r);return function(c){return x(b,e,[4,a,z],K)};case
14:var
M=c[3],N=c[2];return function(d){var
f=d[1],c=A(f,Q(iE(N)));if(typeof
c[2]==="number")return x(b,e,a,F(c[1],M));throw iM};case
15:var
O=c[1];return function(d,c){return x(b,e,[6,a,function(a){return g(d,a,c)}],O)};case
16:var
P=c[1];return function(c){return x(b,e,[6,a,c],P)};case
17:var
a=[0,a,c[1]],c=c[2];continue;case
18:var
n=c[1];if(0===n[0]){var
R=c[2],S=n[1][1],T=0,b=function(c,d,e){return function(b,a){return x(d,b,[1,c,[0,a]],e)}}(a,b,R),a=T,c=S;continue}var
U=c[2],V=n[1][1],W=0,b=function(c,d,e){return function(b,a){return x(d,b,[1,c,[1,a]],e)}}(a,b,U),a=W,c=V;continue;case
19:throw[0,w,xj];case
20:var
X=c[3],Y=[8,a,xk];return function(a){return x(b,e,Y,X)};case
21:var
Z=c[2];return function(c){return x(b,e,[4,a,ok(xl,c)],Z)};case
22:var
_=c[1];return function(c){return x(b,e,[5,a,c],_)};case
23:var
h=c[2],m=c[1];if(typeof
m==="number")switch(m){case
0:return f<50?y(f+1|0,b,e,a,h):is(y,[0,b,e,a,h]);case
1:return f<50?y(f+1|0,b,e,a,h):is(y,[0,b,e,a,h]);case
2:return f<50?y(f+1|0,b,e,a,h):is(y,[0,b,e,a,h]);case
3:throw[0,w,xm];default:return f<50?y(f+1|0,b,e,a,h):is(y,[0,b,e,a,h])}else
switch(m[0]){case
0:return f<50?y(f+1|0,b,e,a,h):is(y,[0,b,e,a,h]);case
1:return f<50?y(f+1|0,b,e,a,h):is(y,[0,b,e,a,h]);case
2:return f<50?y(f+1|0,b,e,a,h):is(y,[0,b,e,a,h]);case
3:return f<50?y(f+1|0,b,e,a,h):is(y,[0,b,e,a,h]);case
4:return f<50?y(f+1|0,b,e,a,h):is(y,[0,b,e,a,h]);case
5:return f<50?y(f+1|0,b,e,a,h):is(y,[0,b,e,a,h]);case
6:return f<50?y(f+1|0,b,e,a,h):is(y,[0,b,e,a,h]);case
7:return f<50?y(f+1|0,b,e,a,h):is(y,[0,b,e,a,h]);case
8:var
v=m[2];return f<50?pd(f+1|0,b,e,a,v,h):is(pd,[0,b,e,a,v,h]);case
9:return f<50?y(f+1|0,b,e,a,h):is(y,[0,b,e,a,h]);default:return f<50?y(f+1|0,b,e,a,h):is(y,[0,b,e,a,h])}default:var
s=c[3],t=c[1],u=d(c[2],0);return f<50?pc(f+1|0,b,e,a,s,t,u):is(pc,[0,b,e,a,s,t,u])}}function
pd(f,e,d,c,a,b){if(typeof
a==="number")return f<50?y(f+1|0,e,d,c,b):is(y,[0,e,d,c,b]);else
switch(a[0]){case
0:var
g=a[1];return function(a){return jc(e,d,c,g,b)};case
1:var
h=a[1];return function(a){return jc(e,d,c,h,b)};case
2:var
i=a[1];return function(a){return jc(e,d,c,i,b)};case
3:var
j=a[1];return function(a){return jc(e,d,c,j,b)};case
4:var
k=a[1];return function(a){return jc(e,d,c,k,b)};case
5:var
l=a[1];return function(a){return jc(e,d,c,l,b)};case
6:var
m=a[1];return function(a){return jc(e,d,c,m,b)};case
7:var
n=a[1];return function(a){return jc(e,d,c,n,b)};case
8:var
o=a[2];return function(a){return jc(e,d,c,o,b)};case
9:var
p=a[3],q=a[2],r=iG(iE(a[1]),q);return function(a){return jc(e,d,c,iS(r,p),b)};case
10:var
s=a[1];return function(f,a){return jc(e,d,c,s,b)};case
11:var
t=a[1];return function(a){return jc(e,d,c,t,b)};case
12:var
u=a[1];return function(a){return jc(e,d,c,u,b)};case
13:throw[0,w,xn];default:throw[0,w,xo]}}function
y(e,c,b,f,a){var
d=[8,f,xp];return e<50?mc(e+1|0,c,b,d,a):is(mc,[0,c,b,d,a])}function
pc(i,c,b,g,a,f,e){if(f){var
j=f[1];return function(f){return xi(c,b,g,a,j,d(e,f))}}var
h=[4,g,e];return i<50?mc(i+1|0,c,b,h,a):is(mc,[0,c,b,h,a])}function
x(a,b,c,d){return ko(mc(0,a,b,c,d))}function
jc(a,b,c,d,e){return ko(pd(0,a,b,c,d,e))}function
xi(a,b,c,d,e,f){return ko(pc(0,a,b,c,d,e,f))}function
kq(b,h){var
a=h;for(;;)if(typeof
a==="number")return 0;else
switch(a[0]){case
0:var
e=a[2],i=a[1];if(typeof
e==="number")switch(e){case
0:var
c=vG;break;case
1:var
c=vH;break;case
2:var
c=vI;break;case
3:var
c=vJ;break;case
4:var
c=vK;break;case
5:var
c=vL;break;default:var
c=vM}else
switch(e[0]){case
0:var
c=e[1];break;case
1:var
c=e[1];break;default:var
c=m(vN,qD(1,e[1]))}kq(b,i);return P(b,c);case
1:var
f=a[2],g=a[1];if(0===f[0]){var
j=f[1];kq(b,g);P(b,xq);var
a=j;continue}var
k=f[1];kq(b,g);P(b,xr);var
a=k;continue;case
6:var
o=a[2];kq(b,a[1]);return P(b,d(o,0));case
7:var
a=a[1];continue;case
8:var
p=a[2];kq(b,a[1]);return iT(p);case
2:case
4:var
l=a[2];kq(b,a[1]);return P(b,l);default:var
n=a[2];kq(b,a[1]);return iD(b,n)}}function
jM(b){var
a=b[1];return x(function(c,b){var
a=im(64);kq(a,b);return iw(a)},0,0,a)}var
oz=[0,0];function
oB(h,g){var
a=h[g+1];if(1-(typeof
a==="number")){if(oo(a)===p4)return d(jM(xs),a);if(oo(a)===uk){var
c=uP(u9,a),b=0,f=ij(c);for(;;){if(f<=b)return m(c,u8);var
e=G(c,b),i=48<=e?58<=e?0:1:45===e?1:0;if(i){var
b=b+1|0;continue}return c}}return xt}return d(jM(xu),a)}function
qN(b,a){if(b.length-1<=a)return xv;var
c=qN(b,a+1|0),d=oB(b,a);return g(jM(xw),d,c)}function
xx(a){var
b=a.length-1;if(2<b>>>0){var
c=qN(a,2),e=oB(a,1);return g(jM(xy),e,c)}switch(b){case
0:return xz;case
1:return xA;default:var
f=oB(a,1);return d(jM(xB),f)}}function
qS(a){oz[1]=[0,a,oz[1]];return 0}function
qT(d,a){var
b=[0,d,0],c=a[1];return c?(a[1]=b,c[2]=b,0):(a[1]=b,a[2]=b,0)}var
oC=[iz,xH,i4(0)];function
qU(a){var
b=a[2];if(b){var
c=b[2],d=b[1];a[2]=c;if(0===c)a[1]=0;return d}throw oC}function
oD(a,b){a[13]=a[13]+b[3]|0;return qT(b,a[27])}var
qV=1000000010;function
oE(b,a){return p(b[17],a,0,ij(a))}function
oF(a){return d(a[19],0)}function
qW(b,a){return d(b[20],a)}function
kK(a,e,d){oF(a);a[11]=1;var
b=(a[6]-d|0)+e|0,c=a[8],f=adj(c,b)?c:b;a[10]=f;a[9]=a[6]-a[10]|0;return qW(a,a[10])}function
qX(b,a){return kK(b,0,a)}function
le(a,b){a[9]=a[9]-b|0;return qW(a,b)}function
xI(a){var
b=a[2];if(b){var
c=b[1],d=c[2],e=c[1],f=a[9]<d?1:0;if(f){if(0!==e)return 5<=e?0:qX(a,d);var
g=0}else
var
g=f;return g}return oF(a)}function
xJ(a){var
b=qU(a[27]),c=b[1];a[12]=a[12]-b[3]|0;a[9]=a[9]+c|0;return 0}function
xK(a,g,b){if(typeof
b==="number")switch(b){case
0:var
k=a[3];if(k){var
l=k[1][1],m=function(b,a){if(a){var
c=a[1],d=a[2];return adk(b,c)?[0,b,a]:[0,c,m(b,d)]}return[0,b,0]};l[1]=m(a[6]-a[9]|0,l[1]);return 0}return 0;case
1:var
n=a[2];return n?(a[2]=n[2],0):0;case
2:var
o=a[3];return o?(a[3]=o[2],0):0;case
3:var
p=a[2];return p?qX(a,p[1][2]):oF(a);case
4:var
q=a[10]!==(a[6]-a[9]|0)?1:0;return q?xJ(a):q;default:var
h=a[5];if(h){var
A=h[2];oE(a,d(a[24],h[1]));a[5]=A;return 0}return 0}else
switch(b[0]){case
0:var
B=b[1];a[9]=a[9]-g|0;oE(a,B);a[11]=0;return 0;case
1:var
c=b[2],f=b[1],r=a[2];if(r){var
s=r[1],e=s[2];switch(s[1]){case
0:return le(a,f);case
1:return kK(a,c,e);case
2:return kK(a,c,e);case
3:return a[9]<g?kK(a,c,e):le(a,f);case
4:return a[11]?le(a,f):a[9]<g?kK(a,c,e):((a[6]-e|0)+c|0)<a[10]?kK(a,c,e):le(a,f);default:return le(a,f)}}return 0;case
2:var
i=a[6]-a[9]|0,t=a[3],C=b[2],D=b[1];if(t){var
u=t[1][1],E=function(d,c){var
a=c;for(;;){if(a){var
b=a[1],e=a[2];if(uQ(b,d))return b;var
a=e;continue}throw jK}},v=u[1];if(v){var
F=v[1];try{var
G=E(i,u[1]),w=G}catch(a){a=iO(a);if(a!==jK)throw a;var
w=F}var
j=w}else
var
j=i;var
x=j-i|0;return 0<=x?le(a,x+D|0):kK(a,j+C|0,a[6])}return 0;case
3:var
y=b[2],H=b[1];if(a[8]<(a[6]-a[9]|0))xI(a);var
I=a[9]-H|0,J=1===y?1:a[9]<g?y:5;a[2]=[0,[0,J,I],a[2]];return 0;case
4:a[3]=[0,b[1],a[3]];return 0;default:var
z=b[1];oE(a,d(a[23],z));a[5]=[0,z,a[5]];return 0}}function
xL(a){for(;;){var
d=a[27][2];if(d){var
b=d[1],c=b[1],e=c<0?1:0,g=b[3],h=b[2],i=e?(a[13]-a[12]|0)<a[9]?1:0:e,f=1-i;if(f){qU(a[27]);var
j=0<=c?c:qV;xK(a,j,h);a[12]=g+a[12]|0;continue}return f}throw oC}}function
qY(a){try{var
b=xL(a);return b}catch(a){a=iO(a);if(a===oC)return 0;throw a}}var
qZ=[0,[0,-1,[0,-1,xM,0]],0];function
q0(a){a[1]=qZ;return 0}function
q1(a,c){var
d=a[1];if(d){var
e=d[1],b=e[2],f=b[1],g=d[2],h=b[2];if(e[1]<a[12])return q0(a);if(typeof
h!=="number")switch(h[0]){case
3:var
i=1-c,k=i?(b[1]=a[13]+f|0,a[1]=g,0):i;return k;case
1:case
2:var
j=c?(b[1]=a[13]+f|0,a[1]=g,0):c;return j}return 0}return 0}var
q2=qD(80,32);function
xO(a){return m(xQ,m(a,xP))}function
xR(a){return m(xT,m(a,xS))}function
xU(a){return 0}function
xV(a){return 0}function
q3(e,d){function
f(a){return 0}var
b=[0,0,0],c=[0,-1,xW,0];function
g(a){return 0}qT(c,b);var
a=[0,[0,[0,1,c],qZ],0,0,0,0,78,10,68,78,0,1,1,1,1,u5,xX,e,d,g,f,0,0,xO,xR,xU,xV,b];a[19]=function(b){return p(a[17],xN,0,1)};a[20]=function(d){var
b=d;for(;;){var
c=0<b?1:0;if(c){if(80<b){p(a[17],q2,0,80);var
b=b+p3|0;continue}return p(a[17],q2,0,b)}return c}};return a}function
q4(c){function
a(a){return qq(c)}return q3(function(d,a,b){if(0<=a)if(0<=b)if(!((ij(d)-b|0)<a))return ado(c,d,a,b);return iT(va)},a)}function
xY(a){function
b(a){return 0}return q3(function(g,c,b){var
d=c<0?1:0;if(d)var
e=d;else
var
h=b<0?1:0,e=h||((ij(g)-b|0)<c?1:0);if(e)iT(vF);var
f=a[2]+b|0;if(a[3]<f)ov(a,b);jB(g,c,a[1],a[2],b);a[2]=f;return 0},b)}var
xZ=k3,x0=function(a){return im(xZ)}(0),u=q4(u_);q4(u$);xY(x0);vb(function(h){for(;;){if(1<u[14]){if(1<u[14]){if(u[14]<u[15]){oD(u,[0,0,1,0]);q1(u,1);q1(u,0)}u[14]=u[14]-1|0}continue}u[13]=qV;qY(u);u[12]=1;u[13]=1;var
a=u[27];a[1]=0;a[2]=0;q0(u);u[2]=0;u[3]=0;u[4]=0;u[5]=0;u[10]=0;u[14]=0;u[9]=u[6];u[14]=u[14]+1|0;var
f=3,g=0;if(u[14]<u[15]){var
c=[0,-u[13]|0,[3,g,f],0];oD(u,c);u[1]=[0,[0,u[13],c],u[1]]}else
if(u[14]===u[15]){var
e=u[16],b=ij(e);oD(u,[0,b,[0,e],b]);qY(u)}return d(u[18],0)}});var
iW=uN,iV=acW;function
x1(b,a){var
c=oo(a)===iz?a:a[1];return adt(b,c)}try{u4(acV)}catch(a){a=iO(a);if(a!==jK)throw a}try{u4(acU)}catch(a){a=iO(a);if(a!==jK)throw a}var
adG=C(qF,x2)?C(qF,x3)?1:0:0;i4(0);var
jN=[iz,x4,i4(0)],q5=-1,x5=k3,x6=0,x7=0,x8=0,x9=0,x_=0;function
x$(c,b,a){throw[0,w,ya]}function
q6(a){var
b=a.length-1,c=1;return[0,x$,qG(b,function(b){return iR(a,b)[b+1]}),b,x_,x9,x8,x7,x6,c]}function
b(a){if(a[5]===a[3])if(a[9])var
d=q5;else{if(a[2].length-1<(a[3]+k3|0)){var
b=a[6],c=a[3]-b|0;if((c+k3|0)<=a[2].length-1)ou(a[2],b,a[2],0,c);else{var
g=mw((a[2].length-1+k3|0)*2|0,0);ou(a[2],b,g,0,c);a[2]=g}a[3]=c;a[4]=a[4]+b|0;a[5]=a[5]-b|0;a[7]=a[7]-b|0;a[6]=0}var
e=p(a[1],a[2],a[5],x5);if(0===e){var
f=a[3];iR(a[2],f)[f+1]=q5;a[3]=a[3]+1|0}else
a[3]=a[3]+e|0;var
h=a[5],d=iR(a[2],h)[h+1]}else
var
i=a[5],d=iR(a[2],i)[i+1];if(d===-1)a[9]=1;else
a[5]=a[5]+1|0;return d}function
io(a){a[6]=a[5];a[7]=a[5];a[8]=-1;return 0}function
z(a,b){a[7]=a[5];a[8]=b;return 0}function
c(a){a[5]=a[7];return a[8]}function
lU(a){a[5]=a[6];return 0}function
mB(a){return a[6]+a[4]|0}function
mC(a){return a[5]+a[4]|0}function
oG(a){return a[5]-a[6]|0}function
q7(a){var
b=a[5]-a[6]|0,c=a[6],d=a[2];if(0<=c)if(0<=b)if(!((d.length-1-b|0)<c))return acZ(d,c,b);return iT(vu)}var
lf=mw(uB,-1),mb=0;for(;;){iR(lf,mb)[mb+1]=1;var
acT=mb+1|0;if(il!==mb){var
mb=acT;continue}var
ma=lI;for(;;){iR(lf,ma)[ma+1]=2;var
acS=ma+1|0;if(tH!==ma){var
ma=acS;continue}var
l$=k6;for(;;){iR(lf,l$)[l$+1]=3;var
acR=l$+1|0;if(uz!==l$){var
l$=acR;continue}var
l_=k5;for(;;){iR(lf,l_)[l_+1]=4;var
acQ=l_+1|0;if(p2!==l_){var
l_=acQ;continue}var
oH=function(b){var
x=ij(b),f=0,e=0,C=0;for(;;){if((x|0)<=e){if(e===(x|0)){var
w=mw(f,0),a=C,g=0,j=f;for(;;){if(0<j){var
c=G(b,a);if(lI<=c)if(k5<=c)if(iz<=c)var
d=0;else{var
k=G(b,a+1|0),l=G(b,a+2|0),m=G(b,a+3|0),n=2!==(k>>>6|0)?1:0;if(n)var
o=n;else
var
y=2!==(l>>>6|0)?1:0,o=y||(2!==(m>>>6|0)?1:0);if(o)throw jN;var
h=(c&7)<<18|(k&63)<<12|(l&63)<<6|m&63,d=1}else
if(k6<=c){var
p=G(b,a+1|0),q=G(b,a+2|0),z=2!==(p>>>6|0)?1:0,A=z||(2!==(q>>>6|0)?1:0);if(A)throw jN;var
i=(c&15)<<12|(p&63)<<6|q&63,r=qg<=i?1:0,B=r?i<=57088?1:0:r;if(B)throw jN;var
h=i,d=1}else{var
s=G(b,a+1|0);if(2!==(s>>>6|0))throw jN;var
h=(c&31)<<6|s&63,d=1}else
if(ir<=c)var
d=0;else
var
h=c,d=1;if(d){iR(w,g)[g+1]=h;var
v=G(b,a),a=a+iR(lf,v)[v+1]|0,g=g+1|0,j=j-1|0;continue}throw jN}return q6(w)}}throw jN}var
t=G(b,e),u=iR(lf,t)[t+1];if(0<u){var
f=f+1|0,e=e+u|0;continue}throw jN}},lV=function(g,i,f){var
j=g[6]+i|0,k=g[2],b=im(f*4|0),c=j,d=f;for(;;){if(0<d){var
a=iR(k,c)[c+1];if(il<a)if(2047<a)if(M<a){if(pl<a)throw jN;iD(b,jL(k5|a>>>18|0));iD(b,jL(ir|(a>>>12|0)&63));iD(b,jL(ir|(a>>>6|0)&63));iD(b,jL(ir|a&63))}else{var
e=qg<=a?1:0,h=e?a<ul?1:0:e;if(h)throw jN;iD(b,jL(k6|a>>>12|0));iD(b,jL(ir|(a>>>6|0)&63));iD(b,jL(ir|a&63))}else{iD(b,jL(lI|a>>>6|0));iD(b,jL(ir|a&63))}else
iD(b,jL(a));var
c=c+1|0,d=d-1|0;continue}return iw(b)}},L=function(a){return lV(a,0,a[5]-a[6]|0)},kL=function(c,a){function
b(a){return iD(c,a)}return sZ<=a?(b(k5|a>>>18|0),b(ir|(a>>>12|0)&63),b(ir|(a>>>6|0)&63),b(ir|a&63)):pF<=a?(b(k6|a>>>12|0),b(ir|(a>>>6|0)&63),b(ir|a&63)):ir<=a?(b(lI|a>>>6|0),b(ir|a&63)):b(a)},oI=iJ,kM=null,q8=undefined,kr=function(a){return a!==q8?1:0},yb=oI.Array,oJ=[iz,yc,i4(0)],yd=oI.Error;x1(ye,[0,oJ,{}]);var
q9=function(a){throw a};qS(function(a){return a[1]===oJ?[0,kH(a[2].toString())]:0});qS(function(a){return a
instanceof
yb?0:[0,kH(a.toString())]});var
q_=g(iV,yg,yf),q$=g(iV,yi,yh),ra=g(iV,yk,yj),rb=g(iV,ym,yl),rc=g(iV,yo,yn),rd=g(iV,yq,yp),re=g(iV,ys,yr),rf=g(iV,yu,yt),rg=g(iV,yw,yv),rh=g(iV,yy,yx),ri=g(iV,yA,yz),rj=g(iV,yC,yB),rk=g(iV,yE,yD),rl=g(iV,yG,yF);p(iW,yH,q_,q_);p(iW,yI,q$,q$);p(iW,yJ,ra,ra);p(iW,yK,rb,rb);p(iW,yL,rc,rc);p(iW,yM,rd,rd);p(iW,yN,re,re);p(iW,yO,rf,rf);p(iW,yP,rg,rg);p(iW,yQ,rh,rh);p(iW,yR,ri,ri);p(iW,yS,rj,rj);p(iW,yT,rk,rk);p(iW,yU,rl,rl);var
rm=function(a){return typeof
a==="number"?yV:a[1]},rn=function(a){if(typeof
a==="number")return 1;else
switch(a[0]){case
0:return 2;case
3:return 4;default:return 3}},I=function(a,b){return[0,a[1],a[2],b[3]]},rp=function(b,a){var
c=b[1]-a[1]|0;return 0===c?b[2]-a[2]|0:c},yX=[iz,yW,i4(0)],JY=function(c,b,a){return[0,c,b,JZ,0,a,oK]},rq=function(b,a){return[0,a[1],b,a[3],a[4],a[5],a[6]]},oL=function(a){return a[3][1]},rr=function(a){return a[3][2]},mD=function(b,a){return b!==a[4]?[0,a[1],a[2],a[3],b,a[5],a[6]]:a},rs=function(a){if(typeof
a==="number"){var
b=a;if(59<=b)switch(b){case
59:return KV;case
60:return KW;case
61:return KX;case
62:return KY;case
63:return KZ;case
64:return K0;case
65:return K1;case
66:return K2;case
67:return K3;case
68:return K4;case
69:return K5;case
70:return K6;case
71:return K7;case
72:return K8;case
73:return K9;case
74:return K_;case
75:return K$;case
76:return La;case
77:return Lb;case
78:return Lc;case
79:return Ld;case
80:return Le;case
81:return Lf;case
82:return Lg;case
83:return Lh;case
84:return Li;case
85:return Lj;case
86:return Lk;case
87:return Ll;case
88:return Lm;case
89:return Ln;case
90:return Lo;case
91:return Lp;case
92:return Lq;case
93:return Lr;case
94:return Ls;case
95:return Lt;case
96:return Lu;case
97:return Lv;case
98:return Lw;case
99:return Lx;case
100:return Ly;case
101:return Lz;case
102:return LA;case
103:return LB;case
104:return LC;case
105:return LD;case
106:return LE;case
107:return LF;case
108:return LG;case
109:return LH;case
110:return LI;case
111:return LJ;case
112:return LK;case
113:return LL;case
114:return LM;case
115:return LN;default:return LO}switch(b){case
0:return J0;case
1:return J1;case
2:return J2;case
3:return J3;case
4:return J4;case
5:return J5;case
6:return J6;case
7:return J7;case
8:return J8;case
9:return J9;case
10:return J_;case
11:return J$;case
12:return Ka;case
13:return Kb;case
14:return Kc;case
15:return Kd;case
16:return Ke;case
17:return Kf;case
18:return Kg;case
19:return Kh;case
20:return Ki;case
21:return Kj;case
22:return Kk;case
23:return Kl;case
24:return Km;case
25:return Kn;case
26:return Ko;case
27:return Kp;case
28:return Kq;case
29:return Kr;case
30:return Ks;case
31:return Kt;case
32:return Ku;case
33:return Kv;case
34:return Kw;case
35:return Kx;case
36:return Ky;case
37:return Kz;case
38:return KA;case
39:return KB;case
40:return KC;case
41:return KD;case
42:return KE;case
43:return KF;case
44:return KG;case
45:return KH;case
46:return KI;case
47:return KJ;case
48:return KK;case
49:return KL;case
50:return KM;case
51:return KN;case
52:return KO;case
53:return KP;case
54:return KQ;case
55:return KR;case
56:return KS;case
57:return KT;default:return KU}}else
switch(a[0]){case
0:return LP;case
1:return LQ;case
2:return LR;case
3:return LS;case
4:return LT;case
5:return LU;case
6:return LV;case
7:return LW;case
8:return LX;default:return LY}},rt=function(a){if(typeof
a==="number"){var
b=a;if(59<=b)switch(b){case
59:return MU;case
60:return MV;case
61:return MW;case
62:return MX;case
63:return MY;case
64:return MZ;case
65:return M0;case
66:return M1;case
67:return M2;case
68:return M3;case
69:return M4;case
70:return M5;case
71:return M6;case
72:return M7;case
73:return M8;case
74:return M9;case
75:return M_;case
76:return M$;case
77:return Na;case
78:return Nb;case
79:return Nc;case
80:return Nd;case
81:return Ne;case
82:return Nf;case
83:return Ng;case
84:return Nh;case
85:return Ni;case
86:return Nj;case
87:return Nk;case
88:return Nl;case
89:return Nm;case
90:return Nn;case
91:return No;case
92:return Np;case
93:return Nq;case
94:return Nr;case
95:return Ns;case
96:return Nt;case
97:return Nu;case
98:return Nv;case
99:return Nw;case
100:return Nx;case
101:return Ny;case
102:return Nz;case
103:return NA;case
104:return NB;case
105:return NC;case
106:return ND;case
107:return NE;case
108:return NF;case
109:return NG;case
110:return NH;case
111:return NI;case
112:return NJ;case
113:return NK;case
114:return NL;case
115:return NM;default:return NN}switch(b){case
0:return LZ;case
1:return L0;case
2:return L1;case
3:return L2;case
4:return L3;case
5:return L4;case
6:return L5;case
7:return L6;case
8:return L7;case
9:return L8;case
10:return L9;case
11:return L_;case
12:return L$;case
13:return Ma;case
14:return Mb;case
15:return Mc;case
16:return Md;case
17:return Me;case
18:return Mf;case
19:return Mg;case
20:return Mh;case
21:return Mi;case
22:return Mj;case
23:return Mk;case
24:return Ml;case
25:return Mm;case
26:return Mn;case
27:return Mo;case
28:return Mp;case
29:return Mq;case
30:return Mr;case
31:return Ms;case
32:return Mt;case
33:return Mu;case
34:return Mv;case
35:return Mw;case
36:return Mx;case
37:return My;case
38:return Mz;case
39:return MA;case
40:return MB;case
41:return MC;case
42:return MD;case
43:return ME;case
44:return MF;case
45:return MG;case
46:return MH;case
47:return MI;case
48:return MJ;case
49:return MK;case
50:return ML;case
51:return MM;case
52:return MN;case
53:return MO;case
54:return MP;case
55:return MQ;case
56:return MR;case
57:return MS;default:return MT}}else
switch(a[0]){case
0:return a[2];case
2:return a[1][2][3];case
4:var
c=a[1],d=m(NO,c[3]);return m(NP,m(c[2],d));case
8:return 0===a[1]?NQ:NR;case
1:case
7:return a[1][3];case
3:case
9:return a[3];default:return a[1]}},ru=function(a){return 35<a?ia<a?gH<a?hy<a?-1:dF<a?e9<a?aG<a?bJ<a?eJ<a?fE<a?cy<a?hW<a?0:-1:0:-1:eM<a?dH<a?0:-1:0:-1:cf<a?bo<a?di<a?aQ<a?0:-1:0:-1:$<a?dR<a?0:-1:0:-1:cn<a?eb<a?hB<a?gI<a?ca<a?gq<a?ft<a?dC<a?ag<a?eg<a?d8<a?dw<a?cu<a?cC<a?fk<a?d_<a?0:-1:0:-1:am<a?gl<a?0:-1:0:-1:fc<a?cB<a?gr<a?fF<a?0:-1:0:-1:fQ<a?b7<a?0:-1:0:-1:at<a?ep<a?gb<a?b8<a?ew<a?eN<a?0:-1:0:-1:f8<a?fL<a?0:-1:0:-1:eR<a?aq<a?ez<a?cq<a?0:-1:0:-1:e_<a?ah<a?0:-1:0:-1:fb<a?dW<a?d5<a?a9<a?fn<a?cG<a?fS<a?ar<a?0:-1:0:-1:f7<a?e3<a?0:-1:0:-1:eA<a?ax<a?aD<a?bz<a?0:-1:0:-1:cM<a?a2<a?0:-1:0:-1:bM<a?cU<a?aR<a?fZ<a?bC<a?f2<a?0:-1:0:-1:ac<a?bS<a?0:-1:0:-1:hh<a?b$<a?gz<a?a3<a?0:-1:0:-1:f3<a?h4<a?0:-1:0:-1:b2<a?aU<a?fl<a?eO<a?eC<a?ev<a?dY<a?dK<a?c_<a?cv<a?0:-1:0:-1:b6<a?cw<a?0:-1:0:-1:ap<a?fU<a?eW<a?al<a?0:-1:0:-1:bO<a?ec<a?0:-1:0:-1:a5<a?gu<a?aA<a?fI<a?bB<a?bI<a?0:-1:0:-1:bn<a?cV<a?0:-1:0:-1:a_<a?aj<a?cx<a?bR<a?0:-1:0:-1:fs<a?fh<a?0:-1:0:-1:av<a?dP<a?cg<a?aS<a?aF<a?dt<a?f9<a?gd<a?0:-1:0:-1:e7<a?b5<a?0:-1:0:-1:bq<a?e6<a?fo<a?d1<a?0:-1:0:-1:cE<a?cI<a?0:-1:0:-1:eB<a?ds<a?et<a?bE<a?dv<a?c4<a?0:-1:0:-1:bf<a?cD<a?0:-1:0:-1:ho<a?hP<a?ie<a?c5<a?0:-1:0:-1:gO<a?gF<a?0:-1:0:-1:hR<a?gW<a?hZ<a?hk<a?gm<a?bK<a?dg<a?dX<a?hz<a?gT<a?hV<a?gX<a?0:-1:0:-1:aI<a?hG<a?0:-1:0:-1:fj<a?eH<a?g_<a?g1<a?0:-1:0:-1:dq<a?_<a?0:-1:0:-1:hA<a?h6<a?e0<a?cz<a?fO<a?fT<a?0:-1:0:-1:gD<a?dA<a?0:-1:0:-1:en<a?gK<a?hL<a?af<a?0:-1:0:-1:hC<a?ic<a?0:-1:0:-1:bg<a?f$<a?hO<a?gM<a?f6<a?gN<a?hj<a?g4<a?0:-1:0:-1:h9<a?cN<a?0:-1:0:-1:dm<a?hJ<a?g$<a?hT<a?0:-1:0:-1:ae<a?bN<a?0:-1:0:-1:gJ<a?g5<a?b4<a?ek<a?cT<a?fp<a?0:-1:0:-1:hH<a?f1<a?0:-1:0:-1:cH<a?S<a?az<a?hK<a?0:-1:0:-1:bA<a?dr<a?0:-1:0:-1:ci<a?aN<a?fv<a?fx<a?cm<a?aX<a?dx<a?fw<a?g3<a?hx<a?0:-1:0:-1:bP<a?bT<a?0:-1:0:-1:gn<a?b1<a?bd<a?gc<a?0:-1:0:-1:fy<a?a7<a?0:-1:0:-1:hn<a?e1<a?gv<a?c0<a?gk<a?a0<a?0:-1:0:-1:gp<a?ej<a?0:-1:0:-1:fV<a?fD<a?Y<a?hb<a?0:-1:0:-1:dS<a?fq<a?0:-1:0:-1:ch<a?c9<a?bj<a?Z<a?cQ<a?e$<a?R<a?V<a?0:-1:0:-1:eL<a?e2<a?0:-1:0:-1:gY<a?ao<a?dc<a?d$<a?0:-1:0:-1:fA<a?h_<a?0:-1:0:-1:W<a?bx<a?ak<a?aK<a?a8<a?cS<a?0:-1:0:-1:bQ<a?c3<a?0:-1:0:-1:du<a?dL<a?cR<a?fz<a?0:-1:0:-1:dM<a?M<a?0:-1:0:-1:U<a?f0<a?id<a?ba<a?ab<a?fB<a?fa<a?hX<a?bG<a?cr<a?cY<a?bX<a?dT<a?aP<a?0:-1:0:-1:bk<a?ck<a?0:-1:0:-1:df<a?hi<a?gE<a?bZ<a?0:-1:0:-1:gP<a?dU<a?0:-1:0:-1:g2<a?hd<a?gL<a?e5<a?f5<a?fe<a?0:-1:0:-1:hF<a?hw<a?0:-1:0:-1:dG<a?hI<a?g6<a?gG<a?0:-1:0:-1:fJ<a?eP<a?0:-1:0:-1:fW<a?db<a?aL<a?gs<a?es<a?co<a?dB<a?d3<a?0:-1:0:-1:eK<a?cc<a?0:-1:0:-1:T<a?as<a?fm<a?dn<a?0:-1:0:-1:f_<a?fR<a?0:-1:0:-1:dD<a?bb<a?ea<a?ff<a?de<a?cj<a?0:-1:0:-1:d2<a?eZ<a?0:-1:0:-1:aH<a?d0<a?cF<a?fY<a?0:-1:0:-1:b9<a?dQ<a?0:-1:0:-1:hr<a?go<a?gU<a?gy<a?eX<a?ee<a?gS<a?hs<a?h1<a?hQ<a?0:-1:0:-1:ad<a?eU<a?0:-1:0:-1:dO<a?be<a?eF<a?eo<a?0:-1:0:-1:dh<a?by<a?0:-1:0:-1:hc<a?bL<a?fH<a?aT<a?gR<a?b0<a?0:-1:0:-1:cp<a?el<a?0:-1:0:-1:h0<a?cJ<a?d4<a?dZ<a?0:-1:0:-1:hY<a?ib<a?0:-1:0:-1:hU<a?ht<a?ig<a?a1<a?h7<a?ey<a?hq<a?a4<a?0:-1:0:-1:f4<a?h5<a?0:-1:0:-1:bV<a?hM<a?h2<a?e8<a?0:-1:0:-1:bl<a?dE<a?0:-1:0:-1:eD<a?bD<a?bH<a?hN<a?gQ<a?hm<a?0:-1:0:-1:he<a?bF<a?0:-1:0:-1:bs<a?cb<a?em<a?fr<a?0:-1:0:-1:gg<a?fi<a?0:-1:0:-1:ef<a?c2<a?ct<a?cl<a?c7<a?dI<a?g0<a?g8<a?dj<a?hE<a?hp<a?cW<a?0:-1:0:-1:hv<a?bi<a?0:-1:0:-1:dl<a?cL<a?eT<a?an<a?0:-1:0:-1:gA<a?bw<a?0:-1:0:-1:cA<a?dz<a?fd<a?bc<a?d6<a?bu<a?0:-1:0:-1:fX<a?fN<a?0:-1:0:-1:c$<a?c8<a?aY<a?cK<a?0:-1:0:-1:d7<a?aE<a?0:-1:0:-1:d9<a?gZ<a?bW<a?a6<a?bt<a?h3<a?e4<a?fC<a?0:-1:0:-1:eq<a?aC<a?0:-1:0:-1:aB<a?eV<a?hS<a?gx<a?0:-1:0:-1:gV<a?cs<a?0:-1:0:-1:br<a?cX<a?fu<a?ei<a?eQ<a?gt<a?0:-1:0:-1:fM<a?ed<a?0:-1:0:-1:ai<a?aO<a?bY<a?cP<a?0:-1:0:-1:ge<a?bv<a?0:-1:0:-1:aV<a?eI<a?dy<a?gi<a?bm<a?er<a?aJ<a?ga<a?dV<a?ha<a?0:-1:0:-1:b3<a?aM<a?0:-1:0:-1:b_<a?cO<a?eh<a?fG<a?0:-1:0:-1:cd<a?fg<a?0:-1:0:-1:cZ<a?aa<a?dJ<a?bU<a?bh<a?c1<a?0:-1:0:-1:ay<a?bp<a?0:-1:0:-1:dN<a?fK<a?ce<a?gh<a?0:-1:0:-1:da<a?gw<a?0:-1:0:-1:h$<a?hD<a?fP<a?gf<a?X<a?dk<a?gj<a?dd<a?0:-1:0:-1:ex<a?au<a?0:-1:0:-1:aw<a?eE<a?eS<a?dp<a?0:-1:0:-1:h8<a?aZ<a?0:-1:0:-1:eu<a?eY<a?eG<a?hl<a?g7<a?g9<a?0:-1:0:-1:aW<a?a$<a?0:-1:0:-1:hu<a?hg<a?hf<a?c6<a?0:-1:0:-1:gB<a?gC<a?0:-1:0:-1:G(OT,a+J|0)-1|0:-1},rv=function(a){return 45<a?46<a?-1:0:-1},ks=function(a){return 35<a?ia<a?gH<a?hy<a?-1:dF<a?e9<a?aG<a?bJ<a?eJ<a?fE<a?cy<a?hW<a?0:-1:0:-1:eM<a?dH<a?0:-1:0:-1:cf<a?bo<a?di<a?aQ<a?0:-1:0:-1:$<a?dR<a?0:-1:0:-1:cn<a?eb<a?hB<a?gI<a?ca<a?gq<a?ft<a?dC<a?ag<a?eg<a?d8<a?dw<a?cu<a?cC<a?fk<a?d_<a?0:-1:0:-1:am<a?gl<a?0:-1:0:-1:fc<a?cB<a?gr<a?fF<a?0:-1:0:-1:fQ<a?b7<a?0:-1:0:-1:at<a?ep<a?gb<a?b8<a?ew<a?eN<a?0:-1:0:-1:f8<a?fL<a?0:-1:0:-1:eR<a?aq<a?ez<a?cq<a?0:-1:0:-1:e_<a?ah<a?0:-1:0:-1:fb<a?dW<a?d5<a?a9<a?fn<a?cG<a?fS<a?ar<a?0:-1:0:-1:f7<a?e3<a?0:-1:0:-1:eA<a?ax<a?aD<a?bz<a?0:-1:0:-1:cM<a?a2<a?0:-1:0:-1:bM<a?cU<a?aR<a?fZ<a?bC<a?f2<a?0:-1:0:-1:ac<a?bS<a?0:-1:0:-1:hh<a?b$<a?gz<a?a3<a?0:-1:0:-1:f3<a?h4<a?0:-1:0:-1:b2<a?aU<a?fl<a?eO<a?eC<a?ev<a?dY<a?dK<a?c_<a?cv<a?0:-1:0:-1:b6<a?cw<a?0:-1:0:-1:ap<a?fU<a?eW<a?al<a?0:-1:0:-1:bO<a?ec<a?0:-1:0:-1:a5<a?gu<a?aA<a?fI<a?bB<a?bI<a?0:-1:0:-1:bn<a?cV<a?0:-1:0:-1:a_<a?aj<a?cx<a?bR<a?0:-1:0:-1:fs<a?fh<a?0:-1:0:-1:av<a?dP<a?cg<a?aS<a?aF<a?dt<a?f9<a?gd<a?0:-1:0:-1:e7<a?b5<a?0:-1:0:-1:bq<a?e6<a?fo<a?d1<a?0:-1:0:-1:cE<a?cI<a?0:-1:0:-1:eB<a?ds<a?et<a?bE<a?dv<a?c4<a?0:-1:0:-1:bf<a?cD<a?0:-1:0:-1:ho<a?hP<a?ie<a?c5<a?0:-1:0:-1:gO<a?gF<a?0:-1:0:-1:hR<a?gW<a?hZ<a?hk<a?gm<a?bK<a?dg<a?dX<a?hz<a?gT<a?hV<a?gX<a?0:-1:0:-1:aI<a?hG<a?0:-1:0:-1:fj<a?eH<a?g_<a?g1<a?0:-1:0:-1:dq<a?_<a?0:-1:0:-1:hA<a?h6<a?e0<a?cz<a?fO<a?fT<a?0:-1:0:-1:gD<a?dA<a?0:-1:0:-1:en<a?gK<a?hL<a?af<a?0:-1:0:-1:hC<a?ic<a?0:-1:0:-1:bg<a?f$<a?hO<a?gM<a?f6<a?gN<a?hj<a?g4<a?0:-1:0:-1:h9<a?cN<a?0:-1:0:-1:dm<a?hJ<a?g$<a?hT<a?0:-1:0:-1:ae<a?bN<a?0:-1:0:-1:gJ<a?g5<a?b4<a?ek<a?cT<a?fp<a?0:-1:0:-1:hH<a?f1<a?0:-1:0:-1:cH<a?S<a?az<a?hK<a?0:-1:0:-1:bA<a?dr<a?0:-1:0:-1:ci<a?aN<a?fv<a?fx<a?cm<a?aX<a?dx<a?fw<a?g3<a?hx<a?0:-1:0:-1:bP<a?bT<a?0:-1:0:-1:gn<a?b1<a?bd<a?gc<a?0:-1:0:-1:fy<a?a7<a?0:-1:0:-1:hn<a?e1<a?gv<a?c0<a?gk<a?a0<a?0:-1:0:-1:gp<a?ej<a?0:-1:0:-1:fV<a?fD<a?Y<a?hb<a?0:-1:0:-1:dS<a?fq<a?0:-1:0:-1:ch<a?c9<a?bj<a?Z<a?cQ<a?e$<a?R<a?V<a?0:-1:0:-1:eL<a?e2<a?0:-1:0:-1:gY<a?ao<a?dc<a?d$<a?0:-1:0:-1:fA<a?h_<a?0:-1:0:-1:W<a?bx<a?ak<a?aK<a?a8<a?cS<a?0:-1:0:-1:bQ<a?c3<a?0:-1:0:-1:du<a?dL<a?cR<a?fz<a?0:-1:0:-1:dM<a?M<a?0:-1:0:-1:U<a?f0<a?id<a?ba<a?ab<a?fB<a?fa<a?hX<a?bG<a?cr<a?cY<a?bX<a?dT<a?aP<a?0:-1:0:-1:bk<a?ck<a?0:-1:0:-1:df<a?hi<a?gE<a?bZ<a?0:-1:0:-1:gP<a?dU<a?0:-1:0:-1:g2<a?hd<a?gL<a?e5<a?f5<a?fe<a?0:-1:0:-1:hF<a?hw<a?0:-1:0:-1:dG<a?hI<a?g6<a?gG<a?0:-1:0:-1:fJ<a?eP<a?0:-1:0:-1:fW<a?db<a?aL<a?gs<a?es<a?co<a?dB<a?d3<a?0:-1:0:-1:eK<a?cc<a?0:-1:0:-1:T<a?as<a?fm<a?dn<a?0:-1:0:-1:f_<a?fR<a?0:-1:0:-1:dD<a?bb<a?ea<a?ff<a?de<a?cj<a?0:-1:0:-1:d2<a?eZ<a?0:-1:0:-1:aH<a?d0<a?cF<a?fY<a?0:-1:0:-1:b9<a?dQ<a?0:-1:0:-1:hr<a?go<a?gU<a?gy<a?eX<a?ee<a?gS<a?hs<a?h1<a?hQ<a?0:-1:0:-1:ad<a?eU<a?0:-1:0:-1:dO<a?be<a?eF<a?eo<a?0:-1:0:-1:dh<a?by<a?0:-1:0:-1:hc<a?bL<a?fH<a?aT<a?gR<a?b0<a?0:-1:0:-1:cp<a?el<a?0:-1:0:-1:h0<a?cJ<a?d4<a?dZ<a?0:-1:0:-1:hY<a?ib<a?0:-1:0:-1:hU<a?ht<a?ig<a?a1<a?h7<a?ey<a?hq<a?a4<a?0:-1:0:-1:f4<a?h5<a?0:-1:0:-1:bV<a?hM<a?h2<a?e8<a?0:-1:0:-1:bl<a?dE<a?0:-1:0:-1:eD<a?bD<a?bH<a?hN<a?gQ<a?hm<a?0:-1:0:-1:he<a?bF<a?0:-1:0:-1:bs<a?cb<a?em<a?fr<a?0:-1:0:-1:gg<a?fi<a?0:-1:0:-1:ef<a?c2<a?ct<a?cl<a?c7<a?dI<a?g0<a?g8<a?dj<a?hE<a?hp<a?cW<a?0:-1:0:-1:hv<a?bi<a?0:-1:0:-1:dl<a?cL<a?eT<a?an<a?0:-1:0:-1:gA<a?bw<a?0:-1:0:-1:cA<a?dz<a?fd<a?bc<a?d6<a?bu<a?0:-1:0:-1:fX<a?fN<a?0:-1:0:-1:c$<a?c8<a?aY<a?cK<a?0:-1:0:-1:d7<a?aE<a?0:-1:0:-1:d9<a?gZ<a?bW<a?a6<a?bt<a?h3<a?e4<a?fC<a?0:-1:0:-1:eq<a?aC<a?0:-1:0:-1:aB<a?eV<a?hS<a?gx<a?0:-1:0:-1:gV<a?cs<a?0:-1:0:-1:br<a?cX<a?fu<a?ei<a?eQ<a?gt<a?0:-1:0:-1:fM<a?ed<a?0:-1:0:-1:ai<a?aO<a?bY<a?cP<a?0:-1:0:-1:ge<a?bv<a?0:-1:0:-1:aV<a?eI<a?dy<a?gi<a?bm<a?er<a?aJ<a?ga<a?dV<a?ha<a?0:-1:0:-1:b3<a?aM<a?0:-1:0:-1:b_<a?cO<a?eh<a?fG<a?0:-1:0:-1:cd<a?fg<a?0:-1:0:-1:cZ<a?aa<a?dJ<a?bU<a?bh<a?c1<a?0:-1:0:-1:ay<a?bp<a?0:-1:0:-1:dN<a?fK<a?ce<a?gh<a?0:-1:0:-1:da<a?gw<a?0:-1:0:-1:h$<a?hD<a?fP<a?gf<a?X<a?dk<a?gj<a?dd<a?0:-1:0:-1:ex<a?au<a?0:-1:0:-1:aw<a?eE<a?eS<a?dp<a?0:-1:0:-1:h8<a?aZ<a?0:-1:0:-1:eu<a?eY<a?eG<a?hl<a?g7<a?g9<a?0:-1:0:-1:aW<a?a$<a?0:-1:0:-1:hu<a?hg<a?hf<a?c6<a?0:-1:0:-1:gB<a?gC<a?0:-1:0:-1:G(OV,a+J|0)-1|0:-1},jO=function(a){return 8<a?mn<a?jT<a?jZ<a?-1:jX<a?j2<a?0:-1:jV<a?j0<a?jW<a?j1<a?0:-1:0:-1:j3<a?jU<a?0:-1:0:-1:G(Ou,a-9|0)-1|0:-1},ik=function(a){return 35<a?ia<a?gH<a?hy<a?-1:dF<a?e9<a?aG<a?bJ<a?eJ<a?fE<a?cy<a?hW<a?0:-1:0:-1:eM<a?dH<a?0:-1:0:-1:cf<a?bo<a?di<a?aQ<a?0:-1:0:-1:$<a?dR<a?0:-1:0:-1:cn<a?eb<a?hB<a?gI<a?ca<a?gq<a?ft<a?dC<a?ag<a?eg<a?d8<a?dw<a?cu<a?cC<a?fk<a?d_<a?0:-1:0:-1:am<a?gl<a?0:-1:0:-1:fc<a?cB<a?gr<a?fF<a?0:-1:0:-1:fQ<a?b7<a?0:-1:0:-1:at<a?ep<a?gb<a?b8<a?ew<a?eN<a?0:-1:0:-1:f8<a?fL<a?0:-1:0:-1:eR<a?aq<a?ez<a?cq<a?0:-1:0:-1:e_<a?ah<a?0:-1:0:-1:fb<a?dW<a?d5<a?a9<a?fn<a?cG<a?fS<a?ar<a?0:-1:0:-1:f7<a?e3<a?0:-1:0:-1:eA<a?ax<a?aD<a?bz<a?0:-1:0:-1:cM<a?a2<a?0:-1:0:-1:bM<a?cU<a?aR<a?fZ<a?bC<a?f2<a?0:-1:0:-1:ac<a?bS<a?0:-1:0:-1:hh<a?b$<a?gz<a?a3<a?0:-1:0:-1:f3<a?h4<a?0:-1:0:-1:b2<a?aU<a?fl<a?eO<a?eC<a?ev<a?dY<a?dK<a?c_<a?cv<a?0:-1:0:-1:b6<a?cw<a?0:-1:0:-1:ap<a?fU<a?eW<a?al<a?0:-1:0:-1:bO<a?ec<a?0:-1:0:-1:a5<a?gu<a?aA<a?fI<a?bB<a?bI<a?0:-1:0:-1:bn<a?cV<a?0:-1:0:-1:a_<a?aj<a?cx<a?bR<a?0:-1:0:-1:fs<a?fh<a?0:-1:0:-1:av<a?dP<a?cg<a?aS<a?aF<a?dt<a?f9<a?gd<a?0:-1:0:-1:e7<a?b5<a?0:-1:0:-1:bq<a?e6<a?fo<a?d1<a?0:-1:0:-1:cE<a?cI<a?0:-1:0:-1:eB<a?ds<a?et<a?bE<a?dv<a?c4<a?0:-1:0:-1:bf<a?cD<a?0:-1:0:-1:ho<a?hP<a?ie<a?c5<a?0:-1:0:-1:gO<a?gF<a?0:-1:0:-1:hR<a?gW<a?hZ<a?hk<a?gm<a?bK<a?dg<a?dX<a?hz<a?gT<a?hV<a?gX<a?0:-1:0:-1:aI<a?hG<a?0:-1:0:-1:fj<a?eH<a?g_<a?g1<a?0:-1:0:-1:dq<a?_<a?0:-1:0:-1:hA<a?h6<a?e0<a?cz<a?fO<a?fT<a?0:-1:0:-1:gD<a?dA<a?0:-1:0:-1:en<a?gK<a?hL<a?af<a?0:-1:0:-1:hC<a?ic<a?0:-1:0:-1:bg<a?f$<a?hO<a?gM<a?f6<a?gN<a?hj<a?g4<a?0:-1:0:-1:h9<a?cN<a?0:-1:0:-1:dm<a?hJ<a?g$<a?hT<a?0:-1:0:-1:ae<a?bN<a?0:-1:0:-1:gJ<a?g5<a?b4<a?ek<a?cT<a?fp<a?0:-1:0:-1:hH<a?f1<a?0:-1:0:-1:cH<a?S<a?az<a?hK<a?0:-1:0:-1:bA<a?dr<a?0:-1:0:-1:ci<a?aN<a?fv<a?fx<a?cm<a?aX<a?dx<a?fw<a?g3<a?hx<a?0:-1:0:-1:bP<a?bT<a?0:-1:0:-1:gn<a?b1<a?bd<a?gc<a?0:-1:0:-1:fy<a?a7<a?0:-1:0:-1:hn<a?e1<a?gv<a?c0<a?gk<a?a0<a?0:-1:0:-1:gp<a?ej<a?0:-1:0:-1:fV<a?fD<a?Y<a?hb<a?0:-1:0:-1:dS<a?fq<a?0:-1:0:-1:ch<a?c9<a?bj<a?Z<a?cQ<a?e$<a?R<a?V<a?0:-1:0:-1:eL<a?e2<a?0:-1:0:-1:gY<a?ao<a?dc<a?d$<a?0:-1:0:-1:fA<a?h_<a?0:-1:0:-1:W<a?bx<a?ak<a?aK<a?a8<a?cS<a?0:-1:0:-1:bQ<a?c3<a?0:-1:0:-1:du<a?dL<a?cR<a?fz<a?0:-1:0:-1:dM<a?M<a?0:-1:0:-1:U<a?f0<a?id<a?ba<a?ab<a?fB<a?fa<a?hX<a?bG<a?cr<a?cY<a?bX<a?dT<a?aP<a?0:-1:0:-1:bk<a?ck<a?0:-1:0:-1:df<a?hi<a?gE<a?bZ<a?0:-1:0:-1:gP<a?dU<a?0:-1:0:-1:g2<a?hd<a?gL<a?e5<a?f5<a?fe<a?0:-1:0:-1:hF<a?hw<a?0:-1:0:-1:dG<a?hI<a?g6<a?gG<a?0:-1:0:-1:fJ<a?eP<a?0:-1:0:-1:fW<a?db<a?aL<a?gs<a?es<a?co<a?dB<a?d3<a?0:-1:0:-1:eK<a?cc<a?0:-1:0:-1:T<a?as<a?fm<a?dn<a?0:-1:0:-1:f_<a?fR<a?0:-1:0:-1:dD<a?bb<a?ea<a?ff<a?de<a?cj<a?0:-1:0:-1:d2<a?eZ<a?0:-1:0:-1:aH<a?d0<a?cF<a?fY<a?0:-1:0:-1:b9<a?dQ<a?0:-1:0:-1:hr<a?go<a?gU<a?gy<a?eX<a?ee<a?gS<a?hs<a?h1<a?hQ<a?0:-1:0:-1:ad<a?eU<a?0:-1:0:-1:dO<a?be<a?eF<a?eo<a?0:-1:0:-1:dh<a?by<a?0:-1:0:-1:hc<a?bL<a?fH<a?aT<a?gR<a?b0<a?0:-1:0:-1:cp<a?el<a?0:-1:0:-1:h0<a?cJ<a?d4<a?dZ<a?0:-1:0:-1:hY<a?ib<a?0:-1:0:-1:hU<a?ht<a?ig<a?a1<a?h7<a?ey<a?hq<a?a4<a?0:-1:0:-1:f4<a?h5<a?0:-1:0:-1:bV<a?hM<a?h2<a?e8<a?0:-1:0:-1:bl<a?dE<a?0:-1:0:-1:eD<a?bD<a?bH<a?hN<a?gQ<a?hm<a?0:-1:0:-1:he<a?bF<a?0:-1:0:-1:bs<a?cb<a?em<a?fr<a?0:-1:0:-1:gg<a?fi<a?0:-1:0:-1:ef<a?c2<a?ct<a?cl<a?c7<a?dI<a?g0<a?g8<a?dj<a?hE<a?hp<a?cW<a?0:-1:0:-1:hv<a?bi<a?0:-1:0:-1:dl<a?cL<a?eT<a?an<a?0:-1:0:-1:gA<a?bw<a?0:-1:0:-1:cA<a?dz<a?fd<a?bc<a?d6<a?bu<a?0:-1:0:-1:fX<a?fN<a?0:-1:0:-1:c$<a?c8<a?aY<a?cK<a?0:-1:0:-1:d7<a?aE<a?0:-1:0:-1:d9<a?gZ<a?bW<a?a6<a?bt<a?h3<a?e4<a?fC<a?0:-1:0:-1:eq<a?aC<a?0:-1:0:-1:aB<a?eV<a?hS<a?gx<a?0:-1:0:-1:gV<a?cs<a?0:-1:0:-1:br<a?cX<a?fu<a?ei<a?eQ<a?gt<a?0:-1:0:-1:fM<a?ed<a?0:-1:0:-1:ai<a?aO<a?bY<a?cP<a?0:-1:0:-1:ge<a?bv<a?0:-1:0:-1:aV<a?eI<a?dy<a?gi<a?bm<a?er<a?aJ<a?ga<a?dV<a?ha<a?0:-1:0:-1:b3<a?aM<a?0:-1:0:-1:b_<a?cO<a?eh<a?fG<a?0:-1:0:-1:cd<a?fg<a?0:-1:0:-1:cZ<a?aa<a?dJ<a?bU<a?bh<a?c1<a?0:-1:0:-1:ay<a?bp<a?0:-1:0:-1:dN<a?fK<a?ce<a?gh<a?0:-1:0:-1:da<a?gw<a?0:-1:0:-1:h$<a?hD<a?fP<a?gf<a?X<a?dk<a?gj<a?dd<a?0:-1:0:-1:ex<a?au<a?0:-1:0:-1:aw<a?eE<a?eS<a?dp<a?0:-1:0:-1:h8<a?aZ<a?0:-1:0:-1:eu<a?eY<a?eG<a?hl<a?g7<a?g9<a?0:-1:0:-1:aW<a?a$<a?0:-1:0:-1:hu<a?hg<a?hf<a?c6<a?0:-1:0:-1:gB<a?gC<a?0:-1:0:-1:G(OW,a+J|0)-1|0:-1},mE=function(a){return 35<a?iu<a?-1:G(N7,a+J|0)-1|0:-1},ip=function(a){return 47<a?57<a?-1:0:-1},kN=function(a){return 35<a?ia<a?gH<a?hy<a?-1:dF<a?e9<a?aG<a?bJ<a?eJ<a?fE<a?cy<a?hW<a?0:-1:0:-1:eM<a?dH<a?0:-1:0:-1:cf<a?bo<a?di<a?aQ<a?0:-1:0:-1:$<a?dR<a?0:-1:0:-1:cn<a?eb<a?hB<a?gI<a?ca<a?gq<a?ft<a?dC<a?ag<a?eg<a?d8<a?dw<a?cu<a?cC<a?fk<a?d_<a?0:-1:0:-1:am<a?gl<a?0:-1:0:-1:fc<a?cB<a?gr<a?fF<a?0:-1:0:-1:fQ<a?b7<a?0:-1:0:-1:at<a?ep<a?gb<a?b8<a?ew<a?eN<a?0:-1:0:-1:f8<a?fL<a?0:-1:0:-1:eR<a?aq<a?ez<a?cq<a?0:-1:0:-1:e_<a?ah<a?0:-1:0:-1:fb<a?dW<a?d5<a?a9<a?fn<a?cG<a?fS<a?ar<a?0:-1:0:-1:f7<a?e3<a?0:-1:0:-1:eA<a?ax<a?aD<a?bz<a?0:-1:0:-1:cM<a?a2<a?0:-1:0:-1:bM<a?cU<a?aR<a?fZ<a?bC<a?f2<a?0:-1:0:-1:ac<a?bS<a?0:-1:0:-1:hh<a?b$<a?gz<a?a3<a?0:-1:0:-1:f3<a?h4<a?0:-1:0:-1:b2<a?aU<a?fl<a?eO<a?eC<a?ev<a?dY<a?dK<a?c_<a?cv<a?0:-1:0:-1:b6<a?cw<a?0:-1:0:-1:ap<a?fU<a?eW<a?al<a?0:-1:0:-1:bO<a?ec<a?0:-1:0:-1:a5<a?gu<a?aA<a?fI<a?bB<a?bI<a?0:-1:0:-1:bn<a?cV<a?0:-1:0:-1:a_<a?aj<a?cx<a?bR<a?0:-1:0:-1:fs<a?fh<a?0:-1:0:-1:av<a?dP<a?cg<a?aS<a?aF<a?dt<a?f9<a?gd<a?0:-1:0:-1:e7<a?b5<a?0:-1:0:-1:bq<a?e6<a?fo<a?d1<a?0:-1:0:-1:cE<a?cI<a?0:-1:0:-1:eB<a?ds<a?et<a?bE<a?dv<a?c4<a?0:-1:0:-1:bf<a?cD<a?0:-1:0:-1:ho<a?hP<a?ie<a?c5<a?0:-1:0:-1:gO<a?gF<a?0:-1:0:-1:hR<a?gW<a?hZ<a?hk<a?gm<a?bK<a?dg<a?dX<a?hz<a?gT<a?hV<a?gX<a?0:-1:0:-1:aI<a?hG<a?0:-1:0:-1:fj<a?eH<a?g_<a?g1<a?0:-1:0:-1:dq<a?_<a?0:-1:0:-1:hA<a?h6<a?e0<a?cz<a?fO<a?fT<a?0:-1:0:-1:gD<a?dA<a?0:-1:0:-1:en<a?gK<a?hL<a?af<a?0:-1:0:-1:hC<a?ic<a?0:-1:0:-1:bg<a?f$<a?hO<a?gM<a?f6<a?gN<a?hj<a?g4<a?0:-1:0:-1:h9<a?cN<a?0:-1:0:-1:dm<a?hJ<a?g$<a?hT<a?0:-1:0:-1:ae<a?bN<a?0:-1:0:-1:gJ<a?g5<a?b4<a?ek<a?cT<a?fp<a?0:-1:0:-1:hH<a?f1<a?0:-1:0:-1:cH<a?S<a?az<a?hK<a?0:-1:0:-1:bA<a?dr<a?0:-1:0:-1:ci<a?aN<a?fv<a?fx<a?cm<a?aX<a?dx<a?fw<a?g3<a?hx<a?0:-1:0:-1:bP<a?bT<a?0:-1:0:-1:gn<a?b1<a?bd<a?gc<a?0:-1:0:-1:fy<a?a7<a?0:-1:0:-1:hn<a?e1<a?gv<a?c0<a?gk<a?a0<a?0:-1:0:-1:gp<a?ej<a?0:-1:0:-1:fV<a?fD<a?Y<a?hb<a?0:-1:0:-1:dS<a?fq<a?0:-1:0:-1:ch<a?c9<a?bj<a?Z<a?cQ<a?e$<a?R<a?V<a?0:-1:0:-1:eL<a?e2<a?0:-1:0:-1:gY<a?ao<a?dc<a?d$<a?0:-1:0:-1:fA<a?h_<a?0:-1:0:-1:W<a?bx<a?ak<a?aK<a?a8<a?cS<a?0:-1:0:-1:bQ<a?c3<a?0:-1:0:-1:du<a?dL<a?cR<a?fz<a?0:-1:0:-1:dM<a?M<a?0:-1:0:-1:U<a?f0<a?id<a?ba<a?ab<a?fB<a?fa<a?hX<a?bG<a?cr<a?cY<a?bX<a?dT<a?aP<a?0:-1:0:-1:bk<a?ck<a?0:-1:0:-1:df<a?hi<a?gE<a?bZ<a?0:-1:0:-1:gP<a?dU<a?0:-1:0:-1:g2<a?hd<a?gL<a?e5<a?f5<a?fe<a?0:-1:0:-1:hF<a?hw<a?0:-1:0:-1:dG<a?hI<a?g6<a?gG<a?0:-1:0:-1:fJ<a?eP<a?0:-1:0:-1:fW<a?db<a?aL<a?gs<a?es<a?co<a?dB<a?d3<a?0:-1:0:-1:eK<a?cc<a?0:-1:0:-1:T<a?as<a?fm<a?dn<a?0:-1:0:-1:f_<a?fR<a?0:-1:0:-1:dD<a?bb<a?ea<a?ff<a?de<a?cj<a?0:-1:0:-1:d2<a?eZ<a?0:-1:0:-1:aH<a?d0<a?cF<a?fY<a?0:-1:0:-1:b9<a?dQ<a?0:-1:0:-1:hr<a?go<a?gU<a?gy<a?eX<a?ee<a?gS<a?hs<a?h1<a?hQ<a?0:-1:0:-1:ad<a?eU<a?0:-1:0:-1:dO<a?be<a?eF<a?eo<a?0:-1:0:-1:dh<a?by<a?0:-1:0:-1:hc<a?bL<a?fH<a?aT<a?gR<a?b0<a?0:-1:0:-1:cp<a?el<a?0:-1:0:-1:h0<a?cJ<a?d4<a?dZ<a?0:-1:0:-1:hY<a?ib<a?0:-1:0:-1:hU<a?ht<a?ig<a?a1<a?h7<a?ey<a?hq<a?a4<a?0:-1:0:-1:f4<a?h5<a?0:-1:0:-1:bV<a?hM<a?h2<a?e8<a?0:-1:0:-1:bl<a?dE<a?0:-1:0:-1:eD<a?bD<a?bH<a?hN<a?gQ<a?hm<a?0:-1:0:-1:he<a?bF<a?0:-1:0:-1:bs<a?cb<a?em<a?fr<a?0:-1:0:-1:gg<a?fi<a?0:-1:0:-1:ef<a?c2<a?ct<a?cl<a?c7<a?dI<a?g0<a?g8<a?dj<a?hE<a?hp<a?cW<a?0:-1:0:-1:hv<a?bi<a?0:-1:0:-1:dl<a?cL<a?eT<a?an<a?0:-1:0:-1:gA<a?bw<a?0:-1:0:-1:cA<a?dz<a?fd<a?bc<a?d6<a?bu<a?0:-1:0:-1:fX<a?fN<a?0:-1:0:-1:c$<a?c8<a?aY<a?cK<a?0:-1:0:-1:d7<a?aE<a?0:-1:0:-1:d9<a?gZ<a?bW<a?a6<a?bt<a?h3<a?e4<a?fC<a?0:-1:0:-1:eq<a?aC<a?0:-1:0:-1:aB<a?eV<a?hS<a?gx<a?0:-1:0:-1:gV<a?cs<a?0:-1:0:-1:br<a?cX<a?fu<a?ei<a?eQ<a?gt<a?0:-1:0:-1:fM<a?ed<a?0:-1:0:-1:ai<a?aO<a?bY<a?cP<a?0:-1:0:-1:ge<a?bv<a?0:-1:0:-1:aV<a?eI<a?dy<a?gi<a?bm<a?er<a?aJ<a?ga<a?dV<a?ha<a?0:-1:0:-1:b3<a?aM<a?0:-1:0:-1:b_<a?cO<a?eh<a?fG<a?0:-1:0:-1:cd<a?fg<a?0:-1:0:-1:cZ<a?aa<a?dJ<a?bU<a?bh<a?c1<a?0:-1:0:-1:ay<a?bp<a?0:-1:0:-1:dN<a?fK<a?ce<a?gh<a?0:-1:0:-1:da<a?gw<a?0:-1:0:-1:h$<a?hD<a?fP<a?gf<a?X<a?dk<a?gj<a?dd<a?0:-1:0:-1:ex<a?au<a?0:-1:0:-1:aw<a?eE<a?eS<a?dp<a?0:-1:0:-1:h8<a?aZ<a?0:-1:0:-1:eu<a?eY<a?eG<a?hl<a?g7<a?g9<a?0:-1:0:-1:aW<a?a$<a?0:-1:0:-1:hu<a?hg<a?hf<a?c6<a?0:-1:0:-1:gB<a?gC<a?0:-1:0:-1:G(O0,a+J|0)-1|0:-1},ii=function(a){return 47<a?jh<a?-1:G(OK,a+jj|0)-1|0:-1},lg=function(a){return 35<a?iu<a?-1:G(N8,a+J|0)-1|0:-1},mF=function(a){return 35<a?ia<a?gH<a?hy<a?-1:dF<a?e9<a?aG<a?bJ<a?eJ<a?fE<a?cy<a?hW<a?0:-1:0:-1:eM<a?dH<a?0:-1:0:-1:cf<a?bo<a?di<a?aQ<a?0:-1:0:-1:$<a?dR<a?0:-1:0:-1:cn<a?eb<a?hB<a?gI<a?ca<a?gq<a?ft<a?dC<a?ag<a?eg<a?d8<a?dw<a?cu<a?cC<a?fk<a?d_<a?0:-1:0:-1:am<a?gl<a?0:-1:0:-1:fc<a?cB<a?gr<a?fF<a?0:-1:0:-1:fQ<a?b7<a?0:-1:0:-1:at<a?ep<a?gb<a?b8<a?ew<a?eN<a?0:-1:0:-1:f8<a?fL<a?0:-1:0:-1:eR<a?aq<a?ez<a?cq<a?0:-1:0:-1:e_<a?ah<a?0:-1:0:-1:fb<a?dW<a?d5<a?a9<a?fn<a?cG<a?fS<a?ar<a?0:-1:0:-1:f7<a?e3<a?0:-1:0:-1:eA<a?ax<a?aD<a?bz<a?0:-1:0:-1:cM<a?a2<a?0:-1:0:-1:bM<a?cU<a?aR<a?fZ<a?bC<a?f2<a?0:-1:0:-1:ac<a?bS<a?0:-1:0:-1:hh<a?b$<a?gz<a?a3<a?0:-1:0:-1:f3<a?h4<a?0:-1:0:-1:b2<a?aU<a?fl<a?eO<a?eC<a?ev<a?dY<a?dK<a?c_<a?cv<a?0:-1:0:-1:b6<a?cw<a?0:-1:0:-1:ap<a?fU<a?eW<a?al<a?0:-1:0:-1:bO<a?ec<a?0:-1:0:-1:a5<a?gu<a?aA<a?fI<a?bB<a?bI<a?0:-1:0:-1:bn<a?cV<a?0:-1:0:-1:a_<a?aj<a?cx<a?bR<a?0:-1:0:-1:fs<a?fh<a?0:-1:0:-1:av<a?dP<a?cg<a?aS<a?aF<a?dt<a?f9<a?gd<a?0:-1:0:-1:e7<a?b5<a?0:-1:0:-1:bq<a?e6<a?fo<a?d1<a?0:-1:0:-1:cE<a?cI<a?0:-1:0:-1:eB<a?ds<a?et<a?bE<a?dv<a?c4<a?0:-1:0:-1:bf<a?cD<a?0:-1:0:-1:ho<a?hP<a?ie<a?c5<a?0:-1:0:-1:gO<a?gF<a?0:-1:0:-1:hR<a?gW<a?hZ<a?hk<a?gm<a?bK<a?dg<a?dX<a?hz<a?gT<a?hV<a?gX<a?0:-1:0:-1:aI<a?hG<a?0:-1:0:-1:fj<a?eH<a?g_<a?g1<a?0:-1:0:-1:dq<a?_<a?0:-1:0:-1:hA<a?h6<a?e0<a?cz<a?fO<a?fT<a?0:-1:0:-1:gD<a?dA<a?0:-1:0:-1:en<a?gK<a?hL<a?af<a?0:-1:0:-1:hC<a?ic<a?0:-1:0:-1:bg<a?f$<a?hO<a?gM<a?f6<a?gN<a?hj<a?g4<a?0:-1:0:-1:h9<a?cN<a?0:-1:0:-1:dm<a?hJ<a?g$<a?hT<a?0:-1:0:-1:ae<a?bN<a?0:-1:0:-1:gJ<a?g5<a?b4<a?ek<a?cT<a?fp<a?0:-1:0:-1:hH<a?f1<a?0:-1:0:-1:cH<a?S<a?az<a?hK<a?0:-1:0:-1:bA<a?dr<a?0:-1:0:-1:ci<a?aN<a?fv<a?fx<a?cm<a?aX<a?dx<a?fw<a?g3<a?hx<a?0:-1:0:-1:bP<a?bT<a?0:-1:0:-1:gn<a?b1<a?bd<a?gc<a?0:-1:0:-1:fy<a?a7<a?0:-1:0:-1:hn<a?e1<a?gv<a?c0<a?gk<a?a0<a?0:-1:0:-1:gp<a?ej<a?0:-1:0:-1:fV<a?fD<a?Y<a?hb<a?0:-1:0:-1:dS<a?fq<a?0:-1:0:-1:ch<a?c9<a?bj<a?Z<a?cQ<a?e$<a?R<a?V<a?0:-1:0:-1:eL<a?e2<a?0:-1:0:-1:gY<a?ao<a?dc<a?d$<a?0:-1:0:-1:fA<a?h_<a?0:-1:0:-1:W<a?bx<a?ak<a?aK<a?a8<a?cS<a?0:-1:0:-1:bQ<a?c3<a?0:-1:0:-1:du<a?dL<a?cR<a?fz<a?0:-1:0:-1:dM<a?M<a?0:-1:0:-1:U<a?f0<a?id<a?ba<a?ab<a?fB<a?fa<a?hX<a?bG<a?cr<a?cY<a?bX<a?dT<a?aP<a?0:-1:0:-1:bk<a?ck<a?0:-1:0:-1:df<a?hi<a?gE<a?bZ<a?0:-1:0:-1:gP<a?dU<a?0:-1:0:-1:g2<a?hd<a?gL<a?e5<a?f5<a?fe<a?0:-1:0:-1:hF<a?hw<a?0:-1:0:-1:dG<a?hI<a?g6<a?gG<a?0:-1:0:-1:fJ<a?eP<a?0:-1:0:-1:fW<a?db<a?aL<a?gs<a?es<a?co<a?dB<a?d3<a?0:-1:0:-1:eK<a?cc<a?0:-1:0:-1:T<a?as<a?fm<a?dn<a?0:-1:0:-1:f_<a?fR<a?0:-1:0:-1:dD<a?bb<a?ea<a?ff<a?de<a?cj<a?0:-1:0:-1:d2<a?eZ<a?0:-1:0:-1:aH<a?d0<a?cF<a?fY<a?0:-1:0:-1:b9<a?dQ<a?0:-1:0:-1:hr<a?go<a?gU<a?gy<a?eX<a?ee<a?gS<a?hs<a?h1<a?hQ<a?0:-1:0:-1:ad<a?eU<a?0:-1:0:-1:dO<a?be<a?eF<a?eo<a?0:-1:0:-1:dh<a?by<a?0:-1:0:-1:hc<a?bL<a?fH<a?aT<a?gR<a?b0<a?0:-1:0:-1:cp<a?el<a?0:-1:0:-1:h0<a?cJ<a?d4<a?dZ<a?0:-1:0:-1:hY<a?ib<a?0:-1:0:-1:hU<a?ht<a?ig<a?a1<a?h7<a?ey<a?hq<a?a4<a?0:-1:0:-1:f4<a?h5<a?0:-1:0:-1:bV<a?hM<a?h2<a?e8<a?0:-1:0:-1:bl<a?dE<a?0:-1:0:-1:eD<a?bD<a?bH<a?hN<a?gQ<a?hm<a?0:-1:0:-1:he<a?bF<a?0:-1:0:-1:bs<a?cb<a?em<a?fr<a?0:-1:0:-1:gg<a?fi<a?0:-1:0:-1:ef<a?c2<a?ct<a?cl<a?c7<a?dI<a?g0<a?g8<a?dj<a?hE<a?hp<a?cW<a?0:-1:0:-1:hv<a?bi<a?0:-1:0:-1:dl<a?cL<a?eT<a?an<a?0:-1:0:-1:gA<a?bw<a?0:-1:0:-1:cA<a?dz<a?fd<a?bc<a?d6<a?bu<a?0:-1:0:-1:fX<a?fN<a?0:-1:0:-1:c$<a?c8<a?aY<a?cK<a?0:-1:0:-1:d7<a?aE<a?0:-1:0:-1:d9<a?gZ<a?bW<a?a6<a?bt<a?h3<a?e4<a?fC<a?0:-1:0:-1:eq<a?aC<a?0:-1:0:-1:aB<a?eV<a?hS<a?gx<a?0:-1:0:-1:gV<a?cs<a?0:-1:0:-1:br<a?cX<a?fu<a?ei<a?eQ<a?gt<a?0:-1:0:-1:fM<a?ed<a?0:-1:0:-1:ai<a?aO<a?bY<a?cP<a?0:-1:0:-1:ge<a?bv<a?0:-1:0:-1:aV<a?eI<a?dy<a?gi<a?bm<a?er<a?aJ<a?ga<a?dV<a?ha<a?0:-1:0:-1:b3<a?aM<a?0:-1:0:-1:b_<a?cO<a?eh<a?fG<a?0:-1:0:-1:cd<a?fg<a?0:-1:0:-1:cZ<a?aa<a?dJ<a?bU<a?bh<a?c1<a?0:-1:0:-1:ay<a?bp<a?0:-1:0:-1:dN<a?fK<a?ce<a?gh<a?0:-1:0:-1:da<a?gw<a?0:-1:0:-1:h$<a?hD<a?fP<a?gf<a?X<a?dk<a?gj<a?dd<a?0:-1:0:-1:ex<a?au<a?0:-1:0:-1:aw<a?eE<a?eS<a?dp<a?0:-1:0:-1:h8<a?aZ<a?0:-1:0:-1:eu<a?eY<a?eG<a?hl<a?g7<a?g9<a?0:-1:0:-1:aW<a?a$<a?0:-1:0:-1:hu<a?hg<a?hf<a?c6<a?0:-1:0:-1:gB<a?gC<a?0:-1:0:-1:G(O2,a+J|0)-1|0:-1},rw=function(a){return 87<a?kB<a?-1:G(oN,a-88|0)-1|0:-1},rx=function(a){return 45<a?57<a?-1:G(OL,a+kZ|0)-1|0:-1},lW=function(a){return 35<a?ia<a?gH<a?hy<a?-1:dF<a?e9<a?aG<a?bJ<a?eJ<a?fE<a?cy<a?hW<a?0:-1:0:-1:eM<a?dH<a?0:-1:0:-1:cf<a?bo<a?di<a?aQ<a?0:-1:0:-1:$<a?dR<a?0:-1:0:-1:cn<a?eb<a?hB<a?gI<a?ca<a?gq<a?ft<a?dC<a?ag<a?eg<a?d8<a?dw<a?cu<a?cC<a?fk<a?d_<a?0:-1:0:-1:am<a?gl<a?0:-1:0:-1:fc<a?cB<a?gr<a?fF<a?0:-1:0:-1:fQ<a?b7<a?0:-1:0:-1:at<a?ep<a?gb<a?b8<a?ew<a?eN<a?0:-1:0:-1:f8<a?fL<a?0:-1:0:-1:eR<a?aq<a?ez<a?cq<a?0:-1:0:-1:e_<a?ah<a?0:-1:0:-1:fb<a?dW<a?d5<a?a9<a?fn<a?cG<a?fS<a?ar<a?0:-1:0:-1:f7<a?e3<a?0:-1:0:-1:eA<a?ax<a?aD<a?bz<a?0:-1:0:-1:cM<a?a2<a?0:-1:0:-1:bM<a?cU<a?aR<a?fZ<a?bC<a?f2<a?0:-1:0:-1:ac<a?bS<a?0:-1:0:-1:hh<a?b$<a?gz<a?a3<a?0:-1:0:-1:f3<a?h4<a?0:-1:0:-1:b2<a?aU<a?fl<a?eO<a?eC<a?ev<a?dY<a?dK<a?c_<a?cv<a?0:-1:0:-1:b6<a?cw<a?0:-1:0:-1:ap<a?fU<a?eW<a?al<a?0:-1:0:-1:bO<a?ec<a?0:-1:0:-1:a5<a?gu<a?aA<a?fI<a?bB<a?bI<a?0:-1:0:-1:bn<a?cV<a?0:-1:0:-1:a_<a?aj<a?cx<a?bR<a?0:-1:0:-1:fs<a?fh<a?0:-1:0:-1:av<a?dP<a?cg<a?aS<a?aF<a?dt<a?f9<a?gd<a?0:-1:0:-1:e7<a?b5<a?0:-1:0:-1:bq<a?e6<a?fo<a?d1<a?0:-1:0:-1:cE<a?cI<a?0:-1:0:-1:eB<a?ds<a?et<a?bE<a?dv<a?c4<a?0:-1:0:-1:bf<a?cD<a?0:-1:0:-1:ho<a?hP<a?ie<a?c5<a?0:-1:0:-1:gO<a?gF<a?0:-1:0:-1:hR<a?gW<a?hZ<a?hk<a?gm<a?bK<a?dg<a?dX<a?hz<a?gT<a?hV<a?gX<a?0:-1:0:-1:aI<a?hG<a?0:-1:0:-1:fj<a?eH<a?g_<a?g1<a?0:-1:0:-1:dq<a?_<a?0:-1:0:-1:hA<a?h6<a?e0<a?cz<a?fO<a?fT<a?0:-1:0:-1:gD<a?dA<a?0:-1:0:-1:en<a?gK<a?hL<a?af<a?0:-1:0:-1:hC<a?ic<a?0:-1:0:-1:bg<a?f$<a?hO<a?gM<a?f6<a?gN<a?hj<a?g4<a?0:-1:0:-1:h9<a?cN<a?0:-1:0:-1:dm<a?hJ<a?g$<a?hT<a?0:-1:0:-1:ae<a?bN<a?0:-1:0:-1:gJ<a?g5<a?b4<a?ek<a?cT<a?fp<a?0:-1:0:-1:hH<a?f1<a?0:-1:0:-1:cH<a?S<a?az<a?hK<a?0:-1:0:-1:bA<a?dr<a?0:-1:0:-1:ci<a?aN<a?fv<a?fx<a?cm<a?aX<a?dx<a?fw<a?g3<a?hx<a?0:-1:0:-1:bP<a?bT<a?0:-1:0:-1:gn<a?b1<a?bd<a?gc<a?0:-1:0:-1:fy<a?a7<a?0:-1:0:-1:hn<a?e1<a?gv<a?c0<a?gk<a?a0<a?0:-1:0:-1:gp<a?ej<a?0:-1:0:-1:fV<a?fD<a?Y<a?hb<a?0:-1:0:-1:dS<a?fq<a?0:-1:0:-1:ch<a?c9<a?bj<a?Z<a?cQ<a?e$<a?R<a?V<a?0:-1:0:-1:eL<a?e2<a?0:-1:0:-1:gY<a?ao<a?dc<a?d$<a?0:-1:0:-1:fA<a?h_<a?0:-1:0:-1:W<a?bx<a?ak<a?aK<a?a8<a?cS<a?0:-1:0:-1:bQ<a?c3<a?0:-1:0:-1:du<a?dL<a?cR<a?fz<a?0:-1:0:-1:dM<a?M<a?0:-1:0:-1:U<a?f0<a?id<a?ba<a?ab<a?fB<a?fa<a?hX<a?bG<a?cr<a?cY<a?bX<a?dT<a?aP<a?0:-1:0:-1:bk<a?ck<a?0:-1:0:-1:df<a?hi<a?gE<a?bZ<a?0:-1:0:-1:gP<a?dU<a?0:-1:0:-1:g2<a?hd<a?gL<a?e5<a?f5<a?fe<a?0:-1:0:-1:hF<a?hw<a?0:-1:0:-1:dG<a?hI<a?g6<a?gG<a?0:-1:0:-1:fJ<a?eP<a?0:-1:0:-1:fW<a?db<a?aL<a?gs<a?es<a?co<a?dB<a?d3<a?0:-1:0:-1:eK<a?cc<a?0:-1:0:-1:T<a?as<a?fm<a?dn<a?0:-1:0:-1:f_<a?fR<a?0:-1:0:-1:dD<a?bb<a?ea<a?ff<a?de<a?cj<a?0:-1:0:-1:d2<a?eZ<a?0:-1:0:-1:aH<a?d0<a?cF<a?fY<a?0:-1:0:-1:b9<a?dQ<a?0:-1:0:-1:hr<a?go<a?gU<a?gy<a?eX<a?ee<a?gS<a?hs<a?h1<a?hQ<a?0:-1:0:-1:ad<a?eU<a?0:-1:0:-1:dO<a?be<a?eF<a?eo<a?0:-1:0:-1:dh<a?by<a?0:-1:0:-1:hc<a?bL<a?fH<a?aT<a?gR<a?b0<a?0:-1:0:-1:cp<a?el<a?0:-1:0:-1:h0<a?cJ<a?d4<a?dZ<a?0:-1:0:-1:hY<a?ib<a?0:-1:0:-1:hU<a?ht<a?ig<a?a1<a?h7<a?ey<a?hq<a?a4<a?0:-1:0:-1:f4<a?h5<a?0:-1:0:-1:bV<a?hM<a?h2<a?e8<a?0:-1:0:-1:bl<a?dE<a?0:-1:0:-1:eD<a?bD<a?bH<a?hN<a?gQ<a?hm<a?0:-1:0:-1:he<a?bF<a?0:-1:0:-1:bs<a?cb<a?em<a?fr<a?0:-1:0:-1:gg<a?fi<a?0:-1:0:-1:ef<a?c2<a?ct<a?cl<a?c7<a?dI<a?g0<a?g8<a?dj<a?hE<a?hp<a?cW<a?0:-1:0:-1:hv<a?bi<a?0:-1:0:-1:dl<a?cL<a?eT<a?an<a?0:-1:0:-1:gA<a?bw<a?0:-1:0:-1:cA<a?dz<a?fd<a?bc<a?d6<a?bu<a?0:-1:0:-1:fX<a?fN<a?0:-1:0:-1:c$<a?c8<a?aY<a?cK<a?0:-1:0:-1:d7<a?aE<a?0:-1:0:-1:d9<a?gZ<a?bW<a?a6<a?bt<a?h3<a?e4<a?fC<a?0:-1:0:-1:eq<a?aC<a?0:-1:0:-1:aB<a?eV<a?hS<a?gx<a?0:-1:0:-1:gV<a?cs<a?0:-1:0:-1:br<a?cX<a?fu<a?ei<a?eQ<a?gt<a?0:-1:0:-1:fM<a?ed<a?0:-1:0:-1:ai<a?aO<a?bY<a?cP<a?0:-1:0:-1:ge<a?bv<a?0:-1:0:-1:aV<a?eI<a?dy<a?gi<a?bm<a?er<a?aJ<a?ga<a?dV<a?ha<a?0:-1:0:-1:b3<a?aM<a?0:-1:0:-1:b_<a?cO<a?eh<a?fG<a?0:-1:0:-1:cd<a?fg<a?0:-1:0:-1:cZ<a?aa<a?dJ<a?bU<a?bh<a?c1<a?0:-1:0:-1:ay<a?bp<a?0:-1:0:-1:dN<a?fK<a?ce<a?gh<a?0:-1:0:-1:da<a?gw<a?0:-1:0:-1:h$<a?hD<a?fP<a?gf<a?X<a?dk<a?gj<a?dd<a?0:-1:0:-1:ex<a?au<a?0:-1:0:-1:aw<a?eE<a?eS<a?dp<a?0:-1:0:-1:h8<a?aZ<a?0:-1:0:-1:eu<a?eY<a?eG<a?hl<a?g7<a?g9<a?0:-1:0:-1:aW<a?a$<a?0:-1:0:-1:hu<a?hg<a?hf<a?c6<a?0:-1:0:-1:gB<a?gC<a?0:-1:0:-1:G(O3,a+J|0)-1|0:-1},ry=function(a){return 35<a?iu<a?-1:G(N9,a+J|0)-1|0:-1},K=function(a){return 35<a?ia<a?gH<a?hy<a?-1:dF<a?e9<a?aG<a?bJ<a?eJ<a?fE<a?cy<a?hW<a?0:-1:0:-1:eM<a?dH<a?0:-1:0:-1:cf<a?bo<a?di<a?aQ<a?0:-1:0:-1:$<a?dR<a?0:-1:0:-1:cn<a?eb<a?hB<a?gI<a?ca<a?gq<a?ft<a?dC<a?ag<a?eg<a?d8<a?dw<a?cu<a?cC<a?fk<a?d_<a?0:-1:0:-1:am<a?gl<a?0:-1:0:-1:fc<a?cB<a?gr<a?fF<a?0:-1:0:-1:fQ<a?b7<a?0:-1:0:-1:at<a?ep<a?gb<a?b8<a?ew<a?eN<a?0:-1:0:-1:f8<a?fL<a?0:-1:0:-1:eR<a?aq<a?ez<a?cq<a?0:-1:0:-1:e_<a?ah<a?0:-1:0:-1:fb<a?dW<a?d5<a?a9<a?fn<a?cG<a?fS<a?ar<a?0:-1:0:-1:f7<a?e3<a?0:-1:0:-1:eA<a?ax<a?aD<a?bz<a?0:-1:0:-1:cM<a?a2<a?0:-1:0:-1:bM<a?cU<a?aR<a?fZ<a?bC<a?f2<a?0:-1:0:-1:ac<a?bS<a?0:-1:0:-1:hh<a?b$<a?gz<a?a3<a?0:-1:0:-1:f3<a?h4<a?0:-1:0:-1:b2<a?aU<a?fl<a?eO<a?eC<a?ev<a?dY<a?dK<a?c_<a?cv<a?0:-1:0:-1:b6<a?cw<a?0:-1:0:-1:ap<a?fU<a?eW<a?al<a?0:-1:0:-1:bO<a?ec<a?0:-1:0:-1:a5<a?gu<a?aA<a?fI<a?bB<a?bI<a?0:-1:0:-1:bn<a?cV<a?0:-1:0:-1:a_<a?aj<a?cx<a?bR<a?0:-1:0:-1:fs<a?fh<a?0:-1:0:-1:av<a?dP<a?cg<a?aS<a?aF<a?dt<a?f9<a?gd<a?0:-1:0:-1:e7<a?b5<a?0:-1:0:-1:bq<a?e6<a?fo<a?d1<a?0:-1:0:-1:cE<a?cI<a?0:-1:0:-1:eB<a?ds<a?et<a?bE<a?dv<a?c4<a?0:-1:0:-1:bf<a?cD<a?0:-1:0:-1:ho<a?hP<a?ie<a?c5<a?0:-1:0:-1:gO<a?gF<a?0:-1:0:-1:hR<a?gW<a?hZ<a?hk<a?gm<a?bK<a?dg<a?dX<a?hz<a?gT<a?hV<a?gX<a?0:-1:0:-1:aI<a?hG<a?0:-1:0:-1:fj<a?eH<a?g_<a?g1<a?0:-1:0:-1:dq<a?_<a?0:-1:0:-1:hA<a?h6<a?e0<a?cz<a?fO<a?fT<a?0:-1:0:-1:gD<a?dA<a?0:-1:0:-1:en<a?gK<a?hL<a?af<a?0:-1:0:-1:hC<a?ic<a?0:-1:0:-1:bg<a?f$<a?hO<a?gM<a?f6<a?gN<a?hj<a?g4<a?0:-1:0:-1:h9<a?cN<a?0:-1:0:-1:dm<a?hJ<a?g$<a?hT<a?0:-1:0:-1:ae<a?bN<a?0:-1:0:-1:gJ<a?g5<a?b4<a?ek<a?cT<a?fp<a?0:-1:0:-1:hH<a?f1<a?0:-1:0:-1:cH<a?S<a?az<a?hK<a?0:-1:0:-1:bA<a?dr<a?0:-1:0:-1:ci<a?aN<a?fv<a?fx<a?cm<a?aX<a?dx<a?fw<a?g3<a?hx<a?0:-1:0:-1:bP<a?bT<a?0:-1:0:-1:gn<a?b1<a?bd<a?gc<a?0:-1:0:-1:fy<a?a7<a?0:-1:0:-1:hn<a?e1<a?gv<a?c0<a?gk<a?a0<a?0:-1:0:-1:gp<a?ej<a?0:-1:0:-1:fV<a?fD<a?Y<a?hb<a?0:-1:0:-1:dS<a?fq<a?0:-1:0:-1:ch<a?c9<a?bj<a?Z<a?cQ<a?e$<a?R<a?V<a?0:-1:0:-1:eL<a?e2<a?0:-1:0:-1:gY<a?ao<a?dc<a?d$<a?0:-1:0:-1:fA<a?h_<a?0:-1:0:-1:W<a?bx<a?ak<a?aK<a?a8<a?cS<a?0:-1:0:-1:bQ<a?c3<a?0:-1:0:-1:du<a?dL<a?cR<a?fz<a?0:-1:0:-1:dM<a?M<a?0:-1:0:-1:U<a?f0<a?id<a?ba<a?ab<a?fB<a?fa<a?hX<a?bG<a?cr<a?cY<a?bX<a?dT<a?aP<a?0:-1:0:-1:bk<a?ck<a?0:-1:0:-1:df<a?hi<a?gE<a?bZ<a?0:-1:0:-1:gP<a?dU<a?0:-1:0:-1:g2<a?hd<a?gL<a?e5<a?f5<a?fe<a?0:-1:0:-1:hF<a?hw<a?0:-1:0:-1:dG<a?hI<a?g6<a?gG<a?0:-1:0:-1:fJ<a?eP<a?0:-1:0:-1:fW<a?db<a?aL<a?gs<a?es<a?co<a?dB<a?d3<a?0:-1:0:-1:eK<a?cc<a?0:-1:0:-1:T<a?as<a?fm<a?dn<a?0:-1:0:-1:f_<a?fR<a?0:-1:0:-1:dD<a?bb<a?ea<a?ff<a?de<a?cj<a?0:-1:0:-1:d2<a?eZ<a?0:-1:0:-1:aH<a?d0<a?cF<a?fY<a?0:-1:0:-1:b9<a?dQ<a?0:-1:0:-1:hr<a?go<a?gU<a?gy<a?eX<a?ee<a?gS<a?hs<a?h1<a?hQ<a?0:-1:0:-1:ad<a?eU<a?0:-1:0:-1:dO<a?be<a?eF<a?eo<a?0:-1:0:-1:dh<a?by<a?0:-1:0:-1:hc<a?bL<a?fH<a?aT<a?gR<a?b0<a?0:-1:0:-1:cp<a?el<a?0:-1:0:-1:h0<a?cJ<a?d4<a?dZ<a?0:-1:0:-1:hY<a?ib<a?0:-1:0:-1:hU<a?ht<a?ig<a?a1<a?h7<a?ey<a?hq<a?a4<a?0:-1:0:-1:f4<a?h5<a?0:-1:0:-1:bV<a?hM<a?h2<a?e8<a?0:-1:0:-1:bl<a?dE<a?0:-1:0:-1:eD<a?bD<a?bH<a?hN<a?gQ<a?hm<a?0:-1:0:-1:he<a?bF<a?0:-1:0:-1:bs<a?cb<a?em<a?fr<a?0:-1:0:-1:gg<a?fi<a?0:-1:0:-1:ef<a?c2<a?ct<a?cl<a?c7<a?dI<a?g0<a?g8<a?dj<a?hE<a?hp<a?cW<a?0:-1:0:-1:hv<a?bi<a?0:-1:0:-1:dl<a?cL<a?eT<a?an<a?0:-1:0:-1:gA<a?bw<a?0:-1:0:-1:cA<a?dz<a?fd<a?bc<a?d6<a?bu<a?0:-1:0:-1:fX<a?fN<a?0:-1:0:-1:c$<a?c8<a?aY<a?cK<a?0:-1:0:-1:d7<a?aE<a?0:-1:0:-1:d9<a?gZ<a?bW<a?a6<a?bt<a?h3<a?e4<a?fC<a?0:-1:0:-1:eq<a?aC<a?0:-1:0:-1:aB<a?eV<a?hS<a?gx<a?0:-1:0:-1:gV<a?cs<a?0:-1:0:-1:br<a?cX<a?fu<a?ei<a?eQ<a?gt<a?0:-1:0:-1:fM<a?ed<a?0:-1:0:-1:ai<a?aO<a?bY<a?cP<a?0:-1:0:-1:ge<a?bv<a?0:-1:0:-1:aV<a?eI<a?dy<a?gi<a?bm<a?er<a?aJ<a?ga<a?dV<a?ha<a?0:-1:0:-1:b3<a?aM<a?0:-1:0:-1:b_<a?cO<a?eh<a?fG<a?0:-1:0:-1:cd<a?fg<a?0:-1:0:-1:cZ<a?aa<a?dJ<a?bU<a?bh<a?c1<a?0:-1:0:-1:ay<a?bp<a?0:-1:0:-1:dN<a?fK<a?ce<a?gh<a?0:-1:0:-1:da<a?gw<a?0:-1:0:-1:h$<a?hD<a?fP<a?gf<a?X<a?dk<a?gj<a?dd<a?0:-1:0:-1:ex<a?au<a?0:-1:0:-1:aw<a?eE<a?eS<a?dp<a?0:-1:0:-1:h8<a?aZ<a?0:-1:0:-1:eu<a?eY<a?eG<a?hl<a?g7<a?g9<a?0:-1:0:-1:aW<a?a$<a?0:-1:0:-1:hu<a?hg<a?hf<a?c6<a?0:-1:0:-1:gB<a?gC<a?0:-1:0:-1:G(O4,a+J|0)-1|0:-1},j$=function(a){return 47<a?pN<a?-1:G(OC,a+jj|0)-1|0:-1},mG=function(a){return 8<a?mn<a?jT<a?jZ<a?-1:jX<a?j2<a?0:-1:jV<a?j0<a?jW<a?j1<a?0:-1:0:-1:j3<a?jU<a?0:-1:0:-1:G(Ov,a-9|0)-1|0:-1},rz=function(a){return 45<a?jv<a?-1:G(NY,a+kZ|0)-1|0:-1},rA=function(a){return 35<a?iu<a?-1:G(N_,a+J|0)-1|0:-1},mH=function(a){return 47<a?95<a?-1:G(PF,a+jj|0)-1|0:-1},oO=function(a){return 35<a?iu<a?-1:G(N$,a+J|0)-1|0:-1},mI=function(a){return 8<a?mn<a?jT<a?jZ<a?-1:jX<a?j2<a?0:-1:jV<a?j0<a?jW<a?j1<a?0:-1:0:-1:j3<a?jU<a?0:-1:0:-1:G(Ow,a-9|0)-1|0:-1},rB=function(a){return 44<a?57<a?-1:G(NU,a+mp|0)-1|0:-1},kt=function(a){return 35<a?iu<a?-1:G(Oa,a+J|0)-1|0:-1},iX=function(a){return 35<a?ia<a?gH<a?hy<a?-1:dF<a?e9<a?aG<a?bJ<a?eJ<a?fE<a?cy<a?hW<a?0:-1:0:-1:eM<a?dH<a?0:-1:0:-1:cf<a?bo<a?di<a?aQ<a?0:-1:0:-1:$<a?dR<a?0:-1:0:-1:cn<a?eb<a?hB<a?gI<a?ca<a?gq<a?ft<a?dC<a?ag<a?eg<a?d8<a?dw<a?cu<a?cC<a?fk<a?d_<a?0:-1:0:-1:am<a?gl<a?0:-1:0:-1:fc<a?cB<a?gr<a?fF<a?0:-1:0:-1:fQ<a?b7<a?0:-1:0:-1:at<a?ep<a?gb<a?b8<a?ew<a?eN<a?0:-1:0:-1:f8<a?fL<a?0:-1:0:-1:eR<a?aq<a?ez<a?cq<a?0:-1:0:-1:e_<a?ah<a?0:-1:0:-1:fb<a?dW<a?d5<a?a9<a?fn<a?cG<a?fS<a?ar<a?0:-1:0:-1:f7<a?e3<a?0:-1:0:-1:eA<a?ax<a?aD<a?bz<a?0:-1:0:-1:cM<a?a2<a?0:-1:0:-1:bM<a?cU<a?aR<a?fZ<a?bC<a?f2<a?0:-1:0:-1:ac<a?bS<a?0:-1:0:-1:hh<a?b$<a?gz<a?a3<a?0:-1:0:-1:f3<a?h4<a?0:-1:0:-1:b2<a?aU<a?fl<a?eO<a?eC<a?ev<a?dY<a?dK<a?c_<a?cv<a?0:-1:0:-1:b6<a?cw<a?0:-1:0:-1:ap<a?fU<a?eW<a?al<a?0:-1:0:-1:bO<a?ec<a?0:-1:0:-1:a5<a?gu<a?aA<a?fI<a?bB<a?bI<a?0:-1:0:-1:bn<a?cV<a?0:-1:0:-1:a_<a?aj<a?cx<a?bR<a?0:-1:0:-1:fs<a?fh<a?0:-1:0:-1:av<a?dP<a?cg<a?aS<a?aF<a?dt<a?f9<a?gd<a?0:-1:0:-1:e7<a?b5<a?0:-1:0:-1:bq<a?e6<a?fo<a?d1<a?0:-1:0:-1:cE<a?cI<a?0:-1:0:-1:eB<a?ds<a?et<a?bE<a?dv<a?c4<a?0:-1:0:-1:bf<a?cD<a?0:-1:0:-1:ho<a?hP<a?ie<a?c5<a?0:-1:0:-1:gO<a?gF<a?0:-1:0:-1:hR<a?gW<a?hZ<a?hk<a?gm<a?bK<a?dg<a?dX<a?hz<a?gT<a?hV<a?gX<a?0:-1:0:-1:aI<a?hG<a?0:-1:0:-1:fj<a?eH<a?g_<a?g1<a?0:-1:0:-1:dq<a?_<a?0:-1:0:-1:hA<a?h6<a?e0<a?cz<a?fO<a?fT<a?0:-1:0:-1:gD<a?dA<a?0:-1:0:-1:en<a?gK<a?hL<a?af<a?0:-1:0:-1:hC<a?ic<a?0:-1:0:-1:bg<a?f$<a?hO<a?gM<a?f6<a?gN<a?hj<a?g4<a?0:-1:0:-1:h9<a?cN<a?0:-1:0:-1:dm<a?hJ<a?g$<a?hT<a?0:-1:0:-1:ae<a?bN<a?0:-1:0:-1:gJ<a?g5<a?b4<a?ek<a?cT<a?fp<a?0:-1:0:-1:hH<a?f1<a?0:-1:0:-1:cH<a?S<a?az<a?hK<a?0:-1:0:-1:bA<a?dr<a?0:-1:0:-1:ci<a?aN<a?fv<a?fx<a?cm<a?aX<a?dx<a?fw<a?g3<a?hx<a?0:-1:0:-1:bP<a?bT<a?0:-1:0:-1:gn<a?b1<a?bd<a?gc<a?0:-1:0:-1:fy<a?a7<a?0:-1:0:-1:hn<a?e1<a?gv<a?c0<a?gk<a?a0<a?0:-1:0:-1:gp<a?ej<a?0:-1:0:-1:fV<a?fD<a?Y<a?hb<a?0:-1:0:-1:dS<a?fq<a?0:-1:0:-1:ch<a?c9<a?bj<a?Z<a?cQ<a?e$<a?R<a?V<a?0:-1:0:-1:eL<a?e2<a?0:-1:0:-1:gY<a?ao<a?dc<a?d$<a?0:-1:0:-1:fA<a?h_<a?0:-1:0:-1:W<a?bx<a?ak<a?aK<a?a8<a?cS<a?0:-1:0:-1:bQ<a?c3<a?0:-1:0:-1:du<a?dL<a?cR<a?fz<a?0:-1:0:-1:dM<a?M<a?0:-1:0:-1:U<a?f0<a?id<a?ba<a?ab<a?fB<a?fa<a?hX<a?bG<a?cr<a?cY<a?bX<a?dT<a?aP<a?0:-1:0:-1:bk<a?ck<a?0:-1:0:-1:df<a?hi<a?gE<a?bZ<a?0:-1:0:-1:gP<a?dU<a?0:-1:0:-1:g2<a?hd<a?gL<a?e5<a?f5<a?fe<a?0:-1:0:-1:hF<a?hw<a?0:-1:0:-1:dG<a?hI<a?g6<a?gG<a?0:-1:0:-1:fJ<a?eP<a?0:-1:0:-1:fW<a?db<a?aL<a?gs<a?es<a?co<a?dB<a?d3<a?0:-1:0:-1:eK<a?cc<a?0:-1:0:-1:T<a?as<a?fm<a?dn<a?0:-1:0:-1:f_<a?fR<a?0:-1:0:-1:dD<a?bb<a?ea<a?ff<a?de<a?cj<a?0:-1:0:-1:d2<a?eZ<a?0:-1:0:-1:aH<a?d0<a?cF<a?fY<a?0:-1:0:-1:b9<a?dQ<a?0:-1:0:-1:hr<a?go<a?gU<a?gy<a?eX<a?ee<a?gS<a?hs<a?h1<a?hQ<a?0:-1:0:-1:ad<a?eU<a?0:-1:0:-1:dO<a?be<a?eF<a?eo<a?0:-1:0:-1:dh<a?by<a?0:-1:0:-1:hc<a?bL<a?fH<a?aT<a?gR<a?b0<a?0:-1:0:-1:cp<a?el<a?0:-1:0:-1:h0<a?cJ<a?d4<a?dZ<a?0:-1:0:-1:hY<a?ib<a?0:-1:0:-1:hU<a?ht<a?ig<a?a1<a?h7<a?ey<a?hq<a?a4<a?0:-1:0:-1:f4<a?h5<a?0:-1:0:-1:bV<a?hM<a?h2<a?e8<a?0:-1:0:-1:bl<a?dE<a?0:-1:0:-1:eD<a?bD<a?bH<a?hN<a?gQ<a?hm<a?0:-1:0:-1:he<a?bF<a?0:-1:0:-1:bs<a?cb<a?em<a?fr<a?0:-1:0:-1:gg<a?fi<a?0:-1:0:-1:ef<a?c2<a?ct<a?cl<a?c7<a?dI<a?g0<a?g8<a?dj<a?hE<a?hp<a?cW<a?0:-1:0:-1:hv<a?bi<a?0:-1:0:-1:dl<a?cL<a?eT<a?an<a?0:-1:0:-1:gA<a?bw<a?0:-1:0:-1:cA<a?dz<a?fd<a?bc<a?d6<a?bu<a?0:-1:0:-1:fX<a?fN<a?0:-1:0:-1:c$<a?c8<a?aY<a?cK<a?0:-1:0:-1:d7<a?aE<a?0:-1:0:-1:d9<a?gZ<a?bW<a?a6<a?bt<a?h3<a?e4<a?fC<a?0:-1:0:-1:eq<a?aC<a?0:-1:0:-1:aB<a?eV<a?hS<a?gx<a?0:-1:0:-1:gV<a?cs<a?0:-1:0:-1:br<a?cX<a?fu<a?ei<a?eQ<a?gt<a?0:-1:0:-1:fM<a?ed<a?0:-1:0:-1:ai<a?aO<a?bY<a?cP<a?0:-1:0:-1:ge<a?bv<a?0:-1:0:-1:aV<a?eI<a?dy<a?gi<a?bm<a?er<a?aJ<a?ga<a?dV<a?ha<a?0:-1:0:-1:b3<a?aM<a?0:-1:0:-1:b_<a?cO<a?eh<a?fG<a?0:-1:0:-1:cd<a?fg<a?0:-1:0:-1:cZ<a?aa<a?dJ<a?bU<a?bh<a?c1<a?0:-1:0:-1:ay<a?bp<a?0:-1:0:-1:dN<a?fK<a?ce<a?gh<a?0:-1:0:-1:da<a?gw<a?0:-1:0:-1:h$<a?hD<a?fP<a?gf<a?X<a?dk<a?gj<a?dd<a?0:-1:0:-1:ex<a?au<a?0:-1:0:-1:aw<a?eE<a?eS<a?dp<a?0:-1:0:-1:h8<a?aZ<a?0:-1:0:-1:eu<a?eY<a?eG<a?hl<a?g7<a?g9<a?0:-1:0:-1:aW<a?a$<a?0:-1:0:-1:hu<a?hg<a?hf<a?c6<a?0:-1:0:-1:gB<a?gC<a?0:-1:0:-1:G(O_,a+J|0)-1|0:-1},lh=function(a){return 47<a?49<a?-1:0:-1},ku=function(a){return 47<a?95<a?-1:G(NV,a+jj|0)-1|0:-1},mJ=function(a){return 47<a?57<a?-1:G(PG,a+jj|0)-1|0:-1},rC=function(a){return mg<a?oh<a?-1:0:-1},kv=function(a){return 60<a?61<a?-1:0:-1},iY=function(a){return 35<a?ia<a?gH<a?hy<a?-1:dF<a?e9<a?aG<a?bJ<a?eJ<a?fE<a?cy<a?hW<a?0:-1:0:-1:eM<a?dH<a?0:-1:0:-1:cf<a?bo<a?di<a?aQ<a?0:-1:0:-1:$<a?dR<a?0:-1:0:-1:cn<a?eb<a?hB<a?gI<a?ca<a?gq<a?ft<a?dC<a?ag<a?eg<a?d8<a?dw<a?cu<a?cC<a?fk<a?d_<a?0:-1:0:-1:am<a?gl<a?0:-1:0:-1:fc<a?cB<a?gr<a?fF<a?0:-1:0:-1:fQ<a?b7<a?0:-1:0:-1:at<a?ep<a?gb<a?b8<a?ew<a?eN<a?0:-1:0:-1:f8<a?fL<a?0:-1:0:-1:eR<a?aq<a?ez<a?cq<a?0:-1:0:-1:e_<a?ah<a?0:-1:0:-1:fb<a?dW<a?d5<a?a9<a?fn<a?cG<a?fS<a?ar<a?0:-1:0:-1:f7<a?e3<a?0:-1:0:-1:eA<a?ax<a?aD<a?bz<a?0:-1:0:-1:cM<a?a2<a?0:-1:0:-1:bM<a?cU<a?aR<a?fZ<a?bC<a?f2<a?0:-1:0:-1:ac<a?bS<a?0:-1:0:-1:hh<a?b$<a?gz<a?a3<a?0:-1:0:-1:f3<a?h4<a?0:-1:0:-1:b2<a?aU<a?fl<a?eO<a?eC<a?ev<a?dY<a?dK<a?c_<a?cv<a?0:-1:0:-1:b6<a?cw<a?0:-1:0:-1:ap<a?fU<a?eW<a?al<a?0:-1:0:-1:bO<a?ec<a?0:-1:0:-1:a5<a?gu<a?aA<a?fI<a?bB<a?bI<a?0:-1:0:-1:bn<a?cV<a?0:-1:0:-1:a_<a?aj<a?cx<a?bR<a?0:-1:0:-1:fs<a?fh<a?0:-1:0:-1:av<a?dP<a?cg<a?aS<a?aF<a?dt<a?f9<a?gd<a?0:-1:0:-1:e7<a?b5<a?0:-1:0:-1:bq<a?e6<a?fo<a?d1<a?0:-1:0:-1:cE<a?cI<a?0:-1:0:-1:eB<a?ds<a?et<a?bE<a?dv<a?c4<a?0:-1:0:-1:bf<a?cD<a?0:-1:0:-1:ho<a?hP<a?ie<a?c5<a?0:-1:0:-1:gO<a?gF<a?0:-1:0:-1:hR<a?gW<a?hZ<a?hk<a?gm<a?bK<a?dg<a?dX<a?hz<a?gT<a?hV<a?gX<a?0:-1:0:-1:aI<a?hG<a?0:-1:0:-1:fj<a?eH<a?g_<a?g1<a?0:-1:0:-1:dq<a?_<a?0:-1:0:-1:hA<a?h6<a?e0<a?cz<a?fO<a?fT<a?0:-1:0:-1:gD<a?dA<a?0:-1:0:-1:en<a?gK<a?hL<a?af<a?0:-1:0:-1:hC<a?ic<a?0:-1:0:-1:bg<a?f$<a?hO<a?gM<a?f6<a?gN<a?hj<a?g4<a?0:-1:0:-1:h9<a?cN<a?0:-1:0:-1:dm<a?hJ<a?g$<a?hT<a?0:-1:0:-1:ae<a?bN<a?0:-1:0:-1:gJ<a?g5<a?b4<a?ek<a?cT<a?fp<a?0:-1:0:-1:hH<a?f1<a?0:-1:0:-1:cH<a?S<a?az<a?hK<a?0:-1:0:-1:bA<a?dr<a?0:-1:0:-1:ci<a?aN<a?fv<a?fx<a?cm<a?aX<a?dx<a?fw<a?g3<a?hx<a?0:-1:0:-1:bP<a?bT<a?0:-1:0:-1:gn<a?b1<a?bd<a?gc<a?0:-1:0:-1:fy<a?a7<a?0:-1:0:-1:hn<a?e1<a?gv<a?c0<a?gk<a?a0<a?0:-1:0:-1:gp<a?ej<a?0:-1:0:-1:fV<a?fD<a?Y<a?hb<a?0:-1:0:-1:dS<a?fq<a?0:-1:0:-1:ch<a?c9<a?bj<a?Z<a?cQ<a?e$<a?R<a?V<a?0:-1:0:-1:eL<a?e2<a?0:-1:0:-1:gY<a?ao<a?dc<a?d$<a?0:-1:0:-1:fA<a?h_<a?0:-1:0:-1:W<a?bx<a?ak<a?aK<a?a8<a?cS<a?0:-1:0:-1:bQ<a?c3<a?0:-1:0:-1:du<a?dL<a?cR<a?fz<a?0:-1:0:-1:dM<a?M<a?0:-1:0:-1:U<a?f0<a?id<a?ba<a?ab<a?fB<a?fa<a?hX<a?bG<a?cr<a?cY<a?bX<a?dT<a?aP<a?0:-1:0:-1:bk<a?ck<a?0:-1:0:-1:df<a?hi<a?gE<a?bZ<a?0:-1:0:-1:gP<a?dU<a?0:-1:0:-1:g2<a?hd<a?gL<a?e5<a?f5<a?fe<a?0:-1:0:-1:hF<a?hw<a?0:-1:0:-1:dG<a?hI<a?g6<a?gG<a?0:-1:0:-1:fJ<a?eP<a?0:-1:0:-1:fW<a?db<a?aL<a?gs<a?es<a?co<a?dB<a?d3<a?0:-1:0:-1:eK<a?cc<a?0:-1:0:-1:T<a?as<a?fm<a?dn<a?0:-1:0:-1:f_<a?fR<a?0:-1:0:-1:dD<a?bb<a?ea<a?ff<a?de<a?cj<a?0:-1:0:-1:d2<a?eZ<a?0:-1:0:-1:aH<a?d0<a?cF<a?fY<a?0:-1:0:-1:b9<a?dQ<a?0:-1:0:-1:hr<a?go<a?gU<a?gy<a?eX<a?ee<a?gS<a?hs<a?h1<a?hQ<a?0:-1:0:-1:ad<a?eU<a?0:-1:0:-1:dO<a?be<a?eF<a?eo<a?0:-1:0:-1:dh<a?by<a?0:-1:0:-1:hc<a?bL<a?fH<a?aT<a?gR<a?b0<a?0:-1:0:-1:cp<a?el<a?0:-1:0:-1:h0<a?cJ<a?d4<a?dZ<a?0:-1:0:-1:hY<a?ib<a?0:-1:0:-1:hU<a?ht<a?ig<a?a1<a?h7<a?ey<a?hq<a?a4<a?0:-1:0:-1:f4<a?h5<a?0:-1:0:-1:bV<a?hM<a?h2<a?e8<a?0:-1:0:-1:bl<a?dE<a?0:-1:0:-1:eD<a?bD<a?bH<a?hN<a?gQ<a?hm<a?0:-1:0:-1:he<a?bF<a?0:-1:0:-1:bs<a?cb<a?em<a?fr<a?0:-1:0:-1:gg<a?fi<a?0:-1:0:-1:ef<a?c2<a?ct<a?cl<a?c7<a?dI<a?g0<a?g8<a?dj<a?hE<a?hp<a?cW<a?0:-1:0:-1:hv<a?bi<a?0:-1:0:-1:dl<a?cL<a?eT<a?an<a?0:-1:0:-1:gA<a?bw<a?0:-1:0:-1:cA<a?dz<a?fd<a?bc<a?d6<a?bu<a?0:-1:0:-1:fX<a?fN<a?0:-1:0:-1:c$<a?c8<a?aY<a?cK<a?0:-1:0:-1:d7<a?aE<a?0:-1:0:-1:d9<a?gZ<a?bW<a?a6<a?bt<a?h3<a?e4<a?fC<a?0:-1:0:-1:eq<a?aC<a?0:-1:0:-1:aB<a?eV<a?hS<a?gx<a?0:-1:0:-1:gV<a?cs<a?0:-1:0:-1:br<a?cX<a?fu<a?ei<a?eQ<a?gt<a?0:-1:0:-1:fM<a?ed<a?0:-1:0:-1:ai<a?aO<a?bY<a?cP<a?0:-1:0:-1:ge<a?bv<a?0:-1:0:-1:aV<a?eI<a?dy<a?gi<a?bm<a?er<a?aJ<a?ga<a?dV<a?ha<a?0:-1:0:-1:b3<a?aM<a?0:-1:0:-1:b_<a?cO<a?eh<a?fG<a?0:-1:0:-1:cd<a?fg<a?0:-1:0:-1:cZ<a?aa<a?dJ<a?bU<a?bh<a?c1<a?0:-1:0:-1:ay<a?bp<a?0:-1:0:-1:dN<a?fK<a?ce<a?gh<a?0:-1:0:-1:da<a?gw<a?0:-1:0:-1:h$<a?hD<a?fP<a?gf<a?X<a?dk<a?gj<a?dd<a?0:-1:0:-1:ex<a?au<a?0:-1:0:-1:aw<a?eE<a?eS<a?dp<a?0:-1:0:-1:h8<a?aZ<a?0:-1:0:-1:eu<a?eY<a?eG<a?hl<a?g7<a?g9<a?0:-1:0:-1:aW<a?a$<a?0:-1:0:-1:hu<a?hg<a?hf<a?c6<a?0:-1:0:-1:gB<a?gC<a?0:-1:0:-1:G(O$,a+J|0)-1|0:-1},oP=function(a){return 60<a?62<a?-1:G(oM,a+sC|0)-1|0:-1},jp=function(a){return 35<a?ia<a?gH<a?hy<a?-1:dF<a?e9<a?aG<a?bJ<a?eJ<a?fE<a?cy<a?hW<a?0:-1:0:-1:eM<a?dH<a?0:-1:0:-1:cf<a?bo<a?di<a?aQ<a?0:-1:0:-1:$<a?dR<a?0:-1:0:-1:cn<a?eb<a?hB<a?gI<a?ca<a?gq<a?ft<a?dC<a?ag<a?eg<a?d8<a?dw<a?cu<a?cC<a?fk<a?d_<a?0:-1:0:-1:am<a?gl<a?0:-1:0:-1:fc<a?cB<a?gr<a?fF<a?0:-1:0:-1:fQ<a?b7<a?0:-1:0:-1:at<a?ep<a?gb<a?b8<a?ew<a?eN<a?0:-1:0:-1:f8<a?fL<a?0:-1:0:-1:eR<a?aq<a?ez<a?cq<a?0:-1:0:-1:e_<a?ah<a?0:-1:0:-1:fb<a?dW<a?d5<a?a9<a?fn<a?cG<a?fS<a?ar<a?0:-1:0:-1:f7<a?e3<a?0:-1:0:-1:eA<a?ax<a?aD<a?bz<a?0:-1:0:-1:cM<a?a2<a?0:-1:0:-1:bM<a?cU<a?aR<a?fZ<a?bC<a?f2<a?0:-1:0:-1:ac<a?bS<a?0:-1:0:-1:hh<a?b$<a?gz<a?a3<a?0:-1:0:-1:f3<a?h4<a?0:-1:0:-1:b2<a?aU<a?fl<a?eO<a?eC<a?ev<a?dY<a?dK<a?c_<a?cv<a?0:-1:0:-1:b6<a?cw<a?0:-1:0:-1:ap<a?fU<a?eW<a?al<a?0:-1:0:-1:bO<a?ec<a?0:-1:0:-1:a5<a?gu<a?aA<a?fI<a?bB<a?bI<a?0:-1:0:-1:bn<a?cV<a?0:-1:0:-1:a_<a?aj<a?cx<a?bR<a?0:-1:0:-1:fs<a?fh<a?0:-1:0:-1:av<a?dP<a?cg<a?aS<a?aF<a?dt<a?f9<a?gd<a?0:-1:0:-1:e7<a?b5<a?0:-1:0:-1:bq<a?e6<a?fo<a?d1<a?0:-1:0:-1:cE<a?cI<a?0:-1:0:-1:eB<a?ds<a?et<a?bE<a?dv<a?c4<a?0:-1:0:-1:bf<a?cD<a?0:-1:0:-1:ho<a?hP<a?ie<a?c5<a?0:-1:0:-1:gO<a?gF<a?0:-1:0:-1:hR<a?gW<a?hZ<a?hk<a?gm<a?bK<a?dg<a?dX<a?hz<a?gT<a?hV<a?gX<a?0:-1:0:-1:aI<a?hG<a?0:-1:0:-1:fj<a?eH<a?g_<a?g1<a?0:-1:0:-1:dq<a?_<a?0:-1:0:-1:hA<a?h6<a?e0<a?cz<a?fO<a?fT<a?0:-1:0:-1:gD<a?dA<a?0:-1:0:-1:en<a?gK<a?hL<a?af<a?0:-1:0:-1:hC<a?ic<a?0:-1:0:-1:bg<a?f$<a?hO<a?gM<a?f6<a?gN<a?hj<a?g4<a?0:-1:0:-1:h9<a?cN<a?0:-1:0:-1:dm<a?hJ<a?g$<a?hT<a?0:-1:0:-1:ae<a?bN<a?0:-1:0:-1:gJ<a?g5<a?b4<a?ek<a?cT<a?fp<a?0:-1:0:-1:hH<a?f1<a?0:-1:0:-1:cH<a?S<a?az<a?hK<a?0:-1:0:-1:bA<a?dr<a?0:-1:0:-1:ci<a?aN<a?fv<a?fx<a?cm<a?aX<a?dx<a?fw<a?g3<a?hx<a?0:-1:0:-1:bP<a?bT<a?0:-1:0:-1:gn<a?b1<a?bd<a?gc<a?0:-1:0:-1:fy<a?a7<a?0:-1:0:-1:hn<a?e1<a?gv<a?c0<a?gk<a?a0<a?0:-1:0:-1:gp<a?ej<a?0:-1:0:-1:fV<a?fD<a?Y<a?hb<a?0:-1:0:-1:dS<a?fq<a?0:-1:0:-1:ch<a?c9<a?bj<a?Z<a?cQ<a?e$<a?R<a?V<a?0:-1:0:-1:eL<a?e2<a?0:-1:0:-1:gY<a?ao<a?dc<a?d$<a?0:-1:0:-1:fA<a?h_<a?0:-1:0:-1:W<a?bx<a?ak<a?aK<a?a8<a?cS<a?0:-1:0:-1:bQ<a?c3<a?0:-1:0:-1:du<a?dL<a?cR<a?fz<a?0:-1:0:-1:dM<a?M<a?0:-1:0:-1:U<a?f0<a?id<a?ba<a?ab<a?fB<a?fa<a?hX<a?bG<a?cr<a?cY<a?bX<a?dT<a?aP<a?0:-1:0:-1:bk<a?ck<a?0:-1:0:-1:df<a?hi<a?gE<a?bZ<a?0:-1:0:-1:gP<a?dU<a?0:-1:0:-1:g2<a?hd<a?gL<a?e5<a?f5<a?fe<a?0:-1:0:-1:hF<a?hw<a?0:-1:0:-1:dG<a?hI<a?g6<a?gG<a?0:-1:0:-1:fJ<a?eP<a?0:-1:0:-1:fW<a?db<a?aL<a?gs<a?es<a?co<a?dB<a?d3<a?0:-1:0:-1:eK<a?cc<a?0:-1:0:-1:T<a?as<a?fm<a?dn<a?0:-1:0:-1:f_<a?fR<a?0:-1:0:-1:dD<a?bb<a?ea<a?ff<a?de<a?cj<a?0:-1:0:-1:d2<a?eZ<a?0:-1:0:-1:aH<a?d0<a?cF<a?fY<a?0:-1:0:-1:b9<a?dQ<a?0:-1:0:-1:hr<a?go<a?gU<a?gy<a?eX<a?ee<a?gS<a?hs<a?h1<a?hQ<a?0:-1:0:-1:ad<a?eU<a?0:-1:0:-1:dO<a?be<a?eF<a?eo<a?0:-1:0:-1:dh<a?by<a?0:-1:0:-1:hc<a?bL<a?fH<a?aT<a?gR<a?b0<a?0:-1:0:-1:cp<a?el<a?0:-1:0:-1:h0<a?cJ<a?d4<a?dZ<a?0:-1:0:-1:hY<a?ib<a?0:-1:0:-1:hU<a?ht<a?ig<a?a1<a?h7<a?ey<a?hq<a?a4<a?0:-1:0:-1:f4<a?h5<a?0:-1:0:-1:bV<a?hM<a?h2<a?e8<a?0:-1:0:-1:bl<a?dE<a?0:-1:0:-1:eD<a?bD<a?bH<a?hN<a?gQ<a?hm<a?0:-1:0:-1:he<a?bF<a?0:-1:0:-1:bs<a?cb<a?em<a?fr<a?0:-1:0:-1:gg<a?fi<a?0:-1:0:-1:ef<a?c2<a?ct<a?cl<a?c7<a?dI<a?g0<a?g8<a?dj<a?hE<a?hp<a?cW<a?0:-1:0:-1:hv<a?bi<a?0:-1:0:-1:dl<a?cL<a?eT<a?an<a?0:-1:0:-1:gA<a?bw<a?0:-1:0:-1:cA<a?dz<a?fd<a?bc<a?d6<a?bu<a?0:-1:0:-1:fX<a?fN<a?0:-1:0:-1:c$<a?c8<a?aY<a?cK<a?0:-1:0:-1:d7<a?aE<a?0:-1:0:-1:d9<a?gZ<a?bW<a?a6<a?bt<a?h3<a?e4<a?fC<a?0:-1:0:-1:eq<a?aC<a?0:-1:0:-1:aB<a?eV<a?hS<a?gx<a?0:-1:0:-1:gV<a?cs<a?0:-1:0:-1:br<a?cX<a?fu<a?ei<a?eQ<a?gt<a?0:-1:0:-1:fM<a?ed<a?0:-1:0:-1:ai<a?aO<a?bY<a?cP<a?0:-1:0:-1:ge<a?bv<a?0:-1:0:-1:aV<a?eI<a?dy<a?gi<a?bm<a?er<a?aJ<a?ga<a?dV<a?ha<a?0:-1:0:-1:b3<a?aM<a?0:-1:0:-1:b_<a?cO<a?eh<a?fG<a?0:-1:0:-1:cd<a?fg<a?0:-1:0:-1:cZ<a?aa<a?dJ<a?bU<a?bh<a?c1<a?0:-1:0:-1:ay<a?bp<a?0:-1:0:-1:dN<a?fK<a?ce<a?gh<a?0:-1:0:-1:da<a?gw<a?0:-1:0:-1:h$<a?hD<a?fP<a?gf<a?X<a?dk<a?gj<a?dd<a?0:-1:0:-1:ex<a?au<a?0:-1:0:-1:aw<a?eE<a?eS<a?dp<a?0:-1:0:-1:h8<a?aZ<a?0:-1:0:-1:eu<a?eY<a?eG<a?hl<a?g7<a?g9<a?0:-1:0:-1:aW<a?a$<a?0:-1:0:-1:hu<a?hg<a?hf<a?c6<a?0:-1:0:-1:gB<a?gC<a?0:-1:0:-1:G(Pa,a+J|0)-1|0:-1},rD=function(a){return 65<a?98<a?-1:G(oN,a-66|0)-1|0:-1},li=function(a){return 35<a?iu<a?-1:G(Ob,a+J|0)-1|0:-1},mK=function(a){return oh<a?mi<a?-1:0:-1},rE=function(a){return 35<a?ia<a?gH<a?hy<a?-1:dF<a?e9<a?aG<a?bJ<a?eJ<a?fE<a?cy<a?hW<a?0:-1:0:-1:eM<a?dH<a?0:-1:0:-1:cf<a?bo<a?di<a?aQ<a?0:-1:0:-1:$<a?dR<a?0:-1:0:-1:cn<a?eb<a?hB<a?gI<a?ca<a?gq<a?ft<a?dC<a?ag<a?eg<a?d8<a?dw<a?cu<a?cC<a?fk<a?d_<a?0:-1:0:-1:am<a?gl<a?0:-1:0:-1:fc<a?cB<a?gr<a?fF<a?0:-1:0:-1:fQ<a?b7<a?0:-1:0:-1:at<a?ep<a?gb<a?b8<a?ew<a?eN<a?0:-1:0:-1:f8<a?fL<a?0:-1:0:-1:eR<a?aq<a?ez<a?cq<a?0:-1:0:-1:e_<a?ah<a?0:-1:0:-1:fb<a?dW<a?d5<a?a9<a?fn<a?cG<a?fS<a?ar<a?0:-1:0:-1:f7<a?e3<a?0:-1:0:-1:eA<a?ax<a?aD<a?bz<a?0:-1:0:-1:cM<a?a2<a?0:-1:0:-1:bM<a?cU<a?aR<a?fZ<a?bC<a?f2<a?0:-1:0:-1:ac<a?bS<a?0:-1:0:-1:hh<a?b$<a?gz<a?a3<a?0:-1:0:-1:f3<a?h4<a?0:-1:0:-1:b2<a?aU<a?fl<a?eO<a?eC<a?ev<a?dY<a?dK<a?c_<a?cv<a?0:-1:0:-1:b6<a?cw<a?0:-1:0:-1:ap<a?fU<a?eW<a?al<a?0:-1:0:-1:bO<a?ec<a?0:-1:0:-1:a5<a?gu<a?aA<a?fI<a?bB<a?bI<a?0:-1:0:-1:bn<a?cV<a?0:-1:0:-1:a_<a?aj<a?cx<a?bR<a?0:-1:0:-1:fs<a?fh<a?0:-1:0:-1:av<a?dP<a?cg<a?aS<a?aF<a?dt<a?f9<a?gd<a?0:-1:0:-1:e7<a?b5<a?0:-1:0:-1:bq<a?e6<a?fo<a?d1<a?0:-1:0:-1:cE<a?cI<a?0:-1:0:-1:eB<a?ds<a?et<a?bE<a?dv<a?c4<a?0:-1:0:-1:bf<a?cD<a?0:-1:0:-1:ho<a?hP<a?ie<a?c5<a?0:-1:0:-1:gO<a?gF<a?0:-1:0:-1:hR<a?gW<a?hZ<a?hk<a?gm<a?bK<a?dg<a?dX<a?hz<a?gT<a?hV<a?gX<a?0:-1:0:-1:aI<a?hG<a?0:-1:0:-1:fj<a?eH<a?g_<a?g1<a?0:-1:0:-1:dq<a?_<a?0:-1:0:-1:hA<a?h6<a?e0<a?cz<a?fO<a?fT<a?0:-1:0:-1:gD<a?dA<a?0:-1:0:-1:en<a?gK<a?hL<a?af<a?0:-1:0:-1:hC<a?ic<a?0:-1:0:-1:bg<a?f$<a?hO<a?gM<a?f6<a?gN<a?hj<a?g4<a?0:-1:0:-1:h9<a?cN<a?0:-1:0:-1:dm<a?hJ<a?g$<a?hT<a?0:-1:0:-1:ae<a?bN<a?0:-1:0:-1:gJ<a?g5<a?b4<a?ek<a?cT<a?fp<a?0:-1:0:-1:hH<a?f1<a?0:-1:0:-1:cH<a?S<a?az<a?hK<a?0:-1:0:-1:bA<a?dr<a?0:-1:0:-1:ci<a?aN<a?fv<a?fx<a?cm<a?aX<a?dx<a?fw<a?g3<a?hx<a?0:-1:0:-1:bP<a?bT<a?0:-1:0:-1:gn<a?b1<a?bd<a?gc<a?0:-1:0:-1:fy<a?a7<a?0:-1:0:-1:hn<a?e1<a?gv<a?c0<a?gk<a?a0<a?0:-1:0:-1:gp<a?ej<a?0:-1:0:-1:fV<a?fD<a?Y<a?hb<a?0:-1:0:-1:dS<a?fq<a?0:-1:0:-1:ch<a?c9<a?bj<a?Z<a?cQ<a?e$<a?R<a?V<a?0:-1:0:-1:eL<a?e2<a?0:-1:0:-1:gY<a?ao<a?dc<a?d$<a?0:-1:0:-1:fA<a?h_<a?0:-1:0:-1:W<a?bx<a?ak<a?aK<a?a8<a?cS<a?0:-1:0:-1:bQ<a?c3<a?0:-1:0:-1:du<a?dL<a?cR<a?fz<a?0:-1:0:-1:dM<a?M<a?0:-1:0:-1:U<a?f0<a?id<a?ba<a?ab<a?fB<a?fa<a?hX<a?bG<a?cr<a?cY<a?bX<a?dT<a?aP<a?0:-1:0:-1:bk<a?ck<a?0:-1:0:-1:df<a?hi<a?gE<a?bZ<a?0:-1:0:-1:gP<a?dU<a?0:-1:0:-1:g2<a?hd<a?gL<a?e5<a?f5<a?fe<a?0:-1:0:-1:hF<a?hw<a?0:-1:0:-1:dG<a?hI<a?g6<a?gG<a?0:-1:0:-1:fJ<a?eP<a?0:-1:0:-1:fW<a?db<a?aL<a?gs<a?es<a?co<a?dB<a?d3<a?0:-1:0:-1:eK<a?cc<a?0:-1:0:-1:T<a?as<a?fm<a?dn<a?0:-1:0:-1:f_<a?fR<a?0:-1:0:-1:dD<a?bb<a?ea<a?ff<a?de<a?cj<a?0:-1:0:-1:d2<a?eZ<a?0:-1:0:-1:aH<a?d0<a?cF<a?fY<a?0:-1:0:-1:b9<a?dQ<a?0:-1:0:-1:hr<a?go<a?gU<a?gy<a?eX<a?ee<a?gS<a?hs<a?h1<a?hQ<a?0:-1:0:-1:ad<a?eU<a?0:-1:0:-1:dO<a?be<a?eF<a?eo<a?0:-1:0:-1:dh<a?by<a?0:-1:0:-1:hc<a?bL<a?fH<a?aT<a?gR<a?b0<a?0:-1:0:-1:cp<a?el<a?0:-1:0:-1:h0<a?cJ<a?d4<a?dZ<a?0:-1:0:-1:hY<a?ib<a?0:-1:0:-1:hU<a?ht<a?ig<a?a1<a?h7<a?ey<a?hq<a?a4<a?0:-1:0:-1:f4<a?h5<a?0:-1:0:-1:bV<a?hM<a?h2<a?e8<a?0:-1:0:-1:bl<a?dE<a?0:-1:0:-1:eD<a?bD<a?bH<a?hN<a?gQ<a?hm<a?0:-1:0:-1:he<a?bF<a?0:-1:0:-1:bs<a?cb<a?em<a?fr<a?0:-1:0:-1:gg<a?fi<a?0:-1:0:-1:ef<a?c2<a?ct<a?cl<a?c7<a?dI<a?g0<a?g8<a?dj<a?hE<a?hp<a?cW<a?0:-1:0:-1:hv<a?bi<a?0:-1:0:-1:dl<a?cL<a?eT<a?an<a?0:-1:0:-1:gA<a?bw<a?0:-1:0:-1:cA<a?dz<a?fd<a?bc<a?d6<a?bu<a?0:-1:0:-1:fX<a?fN<a?0:-1:0:-1:c$<a?c8<a?aY<a?cK<a?0:-1:0:-1:d7<a?aE<a?0:-1:0:-1:d9<a?gZ<a?bW<a?a6<a?bt<a?h3<a?e4<a?fC<a?0:-1:0:-1:eq<a?aC<a?0:-1:0:-1:aB<a?eV<a?hS<a?gx<a?0:-1:0:-1:gV<a?cs<a?0:-1:0:-1:br<a?cX<a?fu<a?ei<a?eQ<a?gt<a?0:-1:0:-1:fM<a?ed<a?0:-1:0:-1:ai<a?aO<a?bY<a?cP<a?0:-1:0:-1:ge<a?bv<a?0:-1:0:-1:aV<a?eI<a?dy<a?gi<a?bm<a?er<a?aJ<a?ga<a?dV<a?ha<a?0:-1:0:-1:b3<a?aM<a?0:-1:0:-1:b_<a?cO<a?eh<a?fG<a?0:-1:0:-1:cd<a?fg<a?0:-1:0:-1:cZ<a?aa<a?dJ<a?bU<a?bh<a?c1<a?0:-1:0:-1:ay<a?bp<a?0:-1:0:-1:dN<a?fK<a?ce<a?gh<a?0:-1:0:-1:da<a?gw<a?0:-1:0:-1:h$<a?hD<a?fP<a?gf<a?X<a?dk<a?gj<a?dd<a?0:-1:0:-1:ex<a?au<a?0:-1:0:-1:aw<a?eE<a?eS<a?dp<a?0:-1:0:-1:h8<a?aZ<a?0:-1:0:-1:eu<a?eY<a?eG<a?hl<a?g7<a?g9<a?0:-1:0:-1:aW<a?a$<a?0:-1:0:-1:hu<a?hg<a?hf<a?c6<a?0:-1:0:-1:gB<a?gC<a?0:-1:0:-1:G(PH,a+J|0)-1|0:-1},iZ=function(a){return 47<a?55<a?-1:0:-1},oQ=function(a){return kW<a?iq<a?-1:0:-1},mL=function(a){return iq<a?m$<a?-1:0:-1},lX=function(a){return 98<a?99<a?-1:0:-1},mM=function(a){return 47<a?48<a?-1:0:-1},oR=function(a){return 8<a?mn<a?jT<a?jZ<a?-1:jX<a?j2<a?0:-1:jV<a?j0<a?jW<a?j1<a?0:-1:0:-1:j3<a?jU<a?0:-1:0:-1:G(Ox,a-9|0)-1|0:-1},mN=function(a){return 35<a?ia<a?gH<a?hy<a?-1:dF<a?e9<a?aG<a?bJ<a?eJ<a?fE<a?cy<a?hW<a?0:-1:0:-1:eM<a?dH<a?0:-1:0:-1:cf<a?bo<a?di<a?aQ<a?0:-1:0:-1:$<a?dR<a?0:-1:0:-1:cn<a?eb<a?hB<a?gI<a?ca<a?gq<a?ft<a?dC<a?ag<a?eg<a?d8<a?dw<a?cu<a?cC<a?fk<a?d_<a?0:-1:0:-1:am<a?gl<a?0:-1:0:-1:fc<a?cB<a?gr<a?fF<a?0:-1:0:-1:fQ<a?b7<a?0:-1:0:-1:at<a?ep<a?gb<a?b8<a?ew<a?eN<a?0:-1:0:-1:f8<a?fL<a?0:-1:0:-1:eR<a?aq<a?ez<a?cq<a?0:-1:0:-1:e_<a?ah<a?0:-1:0:-1:fb<a?dW<a?d5<a?a9<a?fn<a?cG<a?fS<a?ar<a?0:-1:0:-1:f7<a?e3<a?0:-1:0:-1:eA<a?ax<a?aD<a?bz<a?0:-1:0:-1:cM<a?a2<a?0:-1:0:-1:bM<a?cU<a?aR<a?fZ<a?bC<a?f2<a?0:-1:0:-1:ac<a?bS<a?0:-1:0:-1:hh<a?b$<a?gz<a?a3<a?0:-1:0:-1:f3<a?h4<a?0:-1:0:-1:b2<a?aU<a?fl<a?eO<a?eC<a?ev<a?dY<a?dK<a?c_<a?cv<a?0:-1:0:-1:b6<a?cw<a?0:-1:0:-1:ap<a?fU<a?eW<a?al<a?0:-1:0:-1:bO<a?ec<a?0:-1:0:-1:a5<a?gu<a?aA<a?fI<a?bB<a?bI<a?0:-1:0:-1:bn<a?cV<a?0:-1:0:-1:a_<a?aj<a?cx<a?bR<a?0:-1:0:-1:fs<a?fh<a?0:-1:0:-1:av<a?dP<a?cg<a?aS<a?aF<a?dt<a?f9<a?gd<a?0:-1:0:-1:e7<a?b5<a?0:-1:0:-1:bq<a?e6<a?fo<a?d1<a?0:-1:0:-1:cE<a?cI<a?0:-1:0:-1:eB<a?ds<a?et<a?bE<a?dv<a?c4<a?0:-1:0:-1:bf<a?cD<a?0:-1:0:-1:ho<a?hP<a?ie<a?c5<a?0:-1:0:-1:gO<a?gF<a?0:-1:0:-1:hR<a?gW<a?hZ<a?hk<a?gm<a?bK<a?dg<a?dX<a?hz<a?gT<a?hV<a?gX<a?0:-1:0:-1:aI<a?hG<a?0:-1:0:-1:fj<a?eH<a?g_<a?g1<a?0:-1:0:-1:dq<a?_<a?0:-1:0:-1:hA<a?h6<a?e0<a?cz<a?fO<a?fT<a?0:-1:0:-1:gD<a?dA<a?0:-1:0:-1:en<a?gK<a?hL<a?af<a?0:-1:0:-1:hC<a?ic<a?0:-1:0:-1:bg<a?f$<a?hO<a?gM<a?f6<a?gN<a?hj<a?g4<a?0:-1:0:-1:h9<a?cN<a?0:-1:0:-1:dm<a?hJ<a?g$<a?hT<a?0:-1:0:-1:ae<a?bN<a?0:-1:0:-1:gJ<a?g5<a?b4<a?ek<a?cT<a?fp<a?0:-1:0:-1:hH<a?f1<a?0:-1:0:-1:cH<a?S<a?az<a?hK<a?0:-1:0:-1:bA<a?dr<a?0:-1:0:-1:ci<a?aN<a?fv<a?fx<a?cm<a?aX<a?dx<a?fw<a?g3<a?hx<a?0:-1:0:-1:bP<a?bT<a?0:-1:0:-1:gn<a?b1<a?bd<a?gc<a?0:-1:0:-1:fy<a?a7<a?0:-1:0:-1:hn<a?e1<a?gv<a?c0<a?gk<a?a0<a?0:-1:0:-1:gp<a?ej<a?0:-1:0:-1:fV<a?fD<a?Y<a?hb<a?0:-1:0:-1:dS<a?fq<a?0:-1:0:-1:ch<a?c9<a?bj<a?Z<a?cQ<a?e$<a?R<a?V<a?0:-1:0:-1:eL<a?e2<a?0:-1:0:-1:gY<a?ao<a?dc<a?d$<a?0:-1:0:-1:fA<a?h_<a?0:-1:0:-1:W<a?bx<a?ak<a?aK<a?a8<a?cS<a?0:-1:0:-1:bQ<a?c3<a?0:-1:0:-1:du<a?dL<a?cR<a?fz<a?0:-1:0:-1:dM<a?M<a?0:-1:0:-1:U<a?f0<a?id<a?ba<a?ab<a?fB<a?fa<a?hX<a?bG<a?cr<a?cY<a?bX<a?dT<a?aP<a?0:-1:0:-1:bk<a?ck<a?0:-1:0:-1:df<a?hi<a?gE<a?bZ<a?0:-1:0:-1:gP<a?dU<a?0:-1:0:-1:g2<a?hd<a?gL<a?e5<a?f5<a?fe<a?0:-1:0:-1:hF<a?hw<a?0:-1:0:-1:dG<a?hI<a?g6<a?gG<a?0:-1:0:-1:fJ<a?eP<a?0:-1:0:-1:fW<a?db<a?aL<a?gs<a?es<a?co<a?dB<a?d3<a?0:-1:0:-1:eK<a?cc<a?0:-1:0:-1:T<a?as<a?fm<a?dn<a?0:-1:0:-1:f_<a?fR<a?0:-1:0:-1:dD<a?bb<a?ea<a?ff<a?de<a?cj<a?0:-1:0:-1:d2<a?eZ<a?0:-1:0:-1:aH<a?d0<a?cF<a?fY<a?0:-1:0:-1:b9<a?dQ<a?0:-1:0:-1:hr<a?go<a?gU<a?gy<a?eX<a?ee<a?gS<a?hs<a?h1<a?hQ<a?0:-1:0:-1:ad<a?eU<a?0:-1:0:-1:dO<a?be<a?eF<a?eo<a?0:-1:0:-1:dh<a?by<a?0:-1:0:-1:hc<a?bL<a?fH<a?aT<a?gR<a?b0<a?0:-1:0:-1:cp<a?el<a?0:-1:0:-1:h0<a?cJ<a?d4<a?dZ<a?0:-1:0:-1:hY<a?ib<a?0:-1:0:-1:hU<a?ht<a?ig<a?a1<a?h7<a?ey<a?hq<a?a4<a?0:-1:0:-1:f4<a?h5<a?0:-1:0:-1:bV<a?hM<a?h2<a?e8<a?0:-1:0:-1:bl<a?dE<a?0:-1:0:-1:eD<a?bD<a?bH<a?hN<a?gQ<a?hm<a?0:-1:0:-1:he<a?bF<a?0:-1:0:-1:bs<a?cb<a?em<a?fr<a?0:-1:0:-1:gg<a?fi<a?0:-1:0:-1:ef<a?c2<a?ct<a?cl<a?c7<a?dI<a?g0<a?g8<a?dj<a?hE<a?hp<a?cW<a?0:-1:0:-1:hv<a?bi<a?0:-1:0:-1:dl<a?cL<a?eT<a?an<a?0:-1:0:-1:gA<a?bw<a?0:-1:0:-1:cA<a?dz<a?fd<a?bc<a?d6<a?bu<a?0:-1:0:-1:fX<a?fN<a?0:-1:0:-1:c$<a?c8<a?aY<a?cK<a?0:-1:0:-1:d7<a?aE<a?0:-1:0:-1:d9<a?gZ<a?bW<a?a6<a?bt<a?h3<a?e4<a?fC<a?0:-1:0:-1:eq<a?aC<a?0:-1:0:-1:aB<a?eV<a?hS<a?gx<a?0:-1:0:-1:gV<a?cs<a?0:-1:0:-1:br<a?cX<a?fu<a?ei<a?eQ<a?gt<a?0:-1:0:-1:fM<a?ed<a?0:-1:0:-1:ai<a?aO<a?bY<a?cP<a?0:-1:0:-1:ge<a?bv<a?0:-1:0:-1:aV<a?eI<a?dy<a?gi<a?bm<a?er<a?aJ<a?ga<a?dV<a?ha<a?0:-1:0:-1:b3<a?aM<a?0:-1:0:-1:b_<a?cO<a?eh<a?fG<a?0:-1:0:-1:cd<a?fg<a?0:-1:0:-1:cZ<a?aa<a?dJ<a?bU<a?bh<a?c1<a?0:-1:0:-1:ay<a?bp<a?0:-1:0:-1:dN<a?fK<a?ce<a?gh<a?0:-1:0:-1:da<a?gw<a?0:-1:0:-1:h$<a?hD<a?fP<a?gf<a?X<a?dk<a?gj<a?dd<a?0:-1:0:-1:ex<a?au<a?0:-1:0:-1:aw<a?eE<a?eS<a?dp<a?0:-1:0:-1:h8<a?aZ<a?0:-1:0:-1:eu<a?eY<a?eG<a?hl<a?g7<a?g9<a?0:-1:0:-1:aW<a?a$<a?0:-1:0:-1:hu<a?hg<a?hf<a?c6<a?0:-1:0:-1:gB<a?gC<a?0:-1:0:-1:G(Pb,a+J|0)-1|0:-1},rF=function(a){return 45<a?jv<a?-1:G(NW,a+kZ|0)-1|0:-1},jd=function(a){return 35<a?ia<a?gH<a?hy<a?-1:dF<a?e9<a?aG<a?bJ<a?eJ<a?fE<a?cy<a?hW<a?0:-1:0:-1:eM<a?dH<a?0:-1:0:-1:cf<a?bo<a?di<a?aQ<a?0:-1:0:-1:$<a?dR<a?0:-1:0:-1:cn<a?eb<a?hB<a?gI<a?ca<a?gq<a?ft<a?dC<a?ag<a?eg<a?d8<a?dw<a?cu<a?cC<a?fk<a?d_<a?0:-1:0:-1:am<a?gl<a?0:-1:0:-1:fc<a?cB<a?gr<a?fF<a?0:-1:0:-1:fQ<a?b7<a?0:-1:0:-1:at<a?ep<a?gb<a?b8<a?ew<a?eN<a?0:-1:0:-1:f8<a?fL<a?0:-1:0:-1:eR<a?aq<a?ez<a?cq<a?0:-1:0:-1:e_<a?ah<a?0:-1:0:-1:fb<a?dW<a?d5<a?a9<a?fn<a?cG<a?fS<a?ar<a?0:-1:0:-1:f7<a?e3<a?0:-1:0:-1:eA<a?ax<a?aD<a?bz<a?0:-1:0:-1:cM<a?a2<a?0:-1:0:-1:bM<a?cU<a?aR<a?fZ<a?bC<a?f2<a?0:-1:0:-1:ac<a?bS<a?0:-1:0:-1:hh<a?b$<a?gz<a?a3<a?0:-1:0:-1:f3<a?h4<a?0:-1:0:-1:b2<a?aU<a?fl<a?eO<a?eC<a?ev<a?dY<a?dK<a?c_<a?cv<a?0:-1:0:-1:b6<a?cw<a?0:-1:0:-1:ap<a?fU<a?eW<a?al<a?0:-1:0:-1:bO<a?ec<a?0:-1:0:-1:a5<a?gu<a?aA<a?fI<a?bB<a?bI<a?0:-1:0:-1:bn<a?cV<a?0:-1:0:-1:a_<a?aj<a?cx<a?bR<a?0:-1:0:-1:fs<a?fh<a?0:-1:0:-1:av<a?dP<a?cg<a?aS<a?aF<a?dt<a?f9<a?gd<a?0:-1:0:-1:e7<a?b5<a?0:-1:0:-1:bq<a?e6<a?fo<a?d1<a?0:-1:0:-1:cE<a?cI<a?0:-1:0:-1:eB<a?ds<a?et<a?bE<a?dv<a?c4<a?0:-1:0:-1:bf<a?cD<a?0:-1:0:-1:ho<a?hP<a?ie<a?c5<a?0:-1:0:-1:gO<a?gF<a?0:-1:0:-1:hR<a?gW<a?hZ<a?hk<a?gm<a?bK<a?dg<a?dX<a?hz<a?gT<a?hV<a?gX<a?0:-1:0:-1:aI<a?hG<a?0:-1:0:-1:fj<a?eH<a?g_<a?g1<a?0:-1:0:-1:dq<a?_<a?0:-1:0:-1:hA<a?h6<a?e0<a?cz<a?fO<a?fT<a?0:-1:0:-1:gD<a?dA<a?0:-1:0:-1:en<a?gK<a?hL<a?af<a?0:-1:0:-1:hC<a?ic<a?0:-1:0:-1:bg<a?f$<a?hO<a?gM<a?f6<a?gN<a?hj<a?g4<a?0:-1:0:-1:h9<a?cN<a?0:-1:0:-1:dm<a?hJ<a?g$<a?hT<a?0:-1:0:-1:ae<a?bN<a?0:-1:0:-1:gJ<a?g5<a?b4<a?ek<a?cT<a?fp<a?0:-1:0:-1:hH<a?f1<a?0:-1:0:-1:cH<a?S<a?az<a?hK<a?0:-1:0:-1:bA<a?dr<a?0:-1:0:-1:ci<a?aN<a?fv<a?fx<a?cm<a?aX<a?dx<a?fw<a?g3<a?hx<a?0:-1:0:-1:bP<a?bT<a?0:-1:0:-1:gn<a?b1<a?bd<a?gc<a?0:-1:0:-1:fy<a?a7<a?0:-1:0:-1:hn<a?e1<a?gv<a?c0<a?gk<a?a0<a?0:-1:0:-1:gp<a?ej<a?0:-1:0:-1:fV<a?fD<a?Y<a?hb<a?0:-1:0:-1:dS<a?fq<a?0:-1:0:-1:ch<a?c9<a?bj<a?Z<a?cQ<a?e$<a?R<a?V<a?0:-1:0:-1:eL<a?e2<a?0:-1:0:-1:gY<a?ao<a?dc<a?d$<a?0:-1:0:-1:fA<a?h_<a?0:-1:0:-1:W<a?bx<a?ak<a?aK<a?a8<a?cS<a?0:-1:0:-1:bQ<a?c3<a?0:-1:0:-1:du<a?dL<a?cR<a?fz<a?0:-1:0:-1:dM<a?M<a?0:-1:0:-1:U<a?f0<a?id<a?ba<a?ab<a?fB<a?fa<a?hX<a?bG<a?cr<a?cY<a?bX<a?dT<a?aP<a?0:-1:0:-1:bk<a?ck<a?0:-1:0:-1:df<a?hi<a?gE<a?bZ<a?0:-1:0:-1:gP<a?dU<a?0:-1:0:-1:g2<a?hd<a?gL<a?e5<a?f5<a?fe<a?0:-1:0:-1:hF<a?hw<a?0:-1:0:-1:dG<a?hI<a?g6<a?gG<a?0:-1:0:-1:fJ<a?eP<a?0:-1:0:-1:fW<a?db<a?aL<a?gs<a?es<a?co<a?dB<a?d3<a?0:-1:0:-1:eK<a?cc<a?0:-1:0:-1:T<a?as<a?fm<a?dn<a?0:-1:0:-1:f_<a?fR<a?0:-1:0:-1:dD<a?bb<a?ea<a?ff<a?de<a?cj<a?0:-1:0:-1:d2<a?eZ<a?0:-1:0:-1:aH<a?d0<a?cF<a?fY<a?0:-1:0:-1:b9<a?dQ<a?0:-1:0:-1:hr<a?go<a?gU<a?gy<a?eX<a?ee<a?gS<a?hs<a?h1<a?hQ<a?0:-1:0:-1:ad<a?eU<a?0:-1:0:-1:dO<a?be<a?eF<a?eo<a?0:-1:0:-1:dh<a?by<a?0:-1:0:-1:hc<a?bL<a?fH<a?aT<a?gR<a?b0<a?0:-1:0:-1:cp<a?el<a?0:-1:0:-1:h0<a?cJ<a?d4<a?dZ<a?0:-1:0:-1:hY<a?ib<a?0:-1:0:-1:hU<a?ht<a?ig<a?a1<a?h7<a?ey<a?hq<a?a4<a?0:-1:0:-1:f4<a?h5<a?0:-1:0:-1:bV<a?hM<a?h2<a?e8<a?0:-1:0:-1:bl<a?dE<a?0:-1:0:-1:eD<a?bD<a?bH<a?hN<a?gQ<a?hm<a?0:-1:0:-1:he<a?bF<a?0:-1:0:-1:bs<a?cb<a?em<a?fr<a?0:-1:0:-1:gg<a?fi<a?0:-1:0:-1:ef<a?c2<a?ct<a?cl<a?c7<a?dI<a?g0<a?g8<a?dj<a?hE<a?hp<a?cW<a?0:-1:0:-1:hv<a?bi<a?0:-1:0:-1:dl<a?cL<a?eT<a?an<a?0:-1:0:-1:gA<a?bw<a?0:-1:0:-1:cA<a?dz<a?fd<a?bc<a?d6<a?bu<a?0:-1:0:-1:fX<a?fN<a?0:-1:0:-1:c$<a?c8<a?aY<a?cK<a?0:-1:0:-1:d7<a?aE<a?0:-1:0:-1:d9<a?gZ<a?bW<a?a6<a?bt<a?h3<a?e4<a?fC<a?0:-1:0:-1:eq<a?aC<a?0:-1:0:-1:aB<a?eV<a?hS<a?gx<a?0:-1:0:-1:gV<a?cs<a?0:-1:0:-1:br<a?cX<a?fu<a?ei<a?eQ<a?gt<a?0:-1:0:-1:fM<a?ed<a?0:-1:0:-1:ai<a?aO<a?bY<a?cP<a?0:-1:0:-1:ge<a?bv<a?0:-1:0:-1:aV<a?eI<a?dy<a?gi<a?bm<a?er<a?aJ<a?ga<a?dV<a?ha<a?0:-1:0:-1:b3<a?aM<a?0:-1:0:-1:b_<a?cO<a?eh<a?fG<a?0:-1:0:-1:cd<a?fg<a?0:-1:0:-1:cZ<a?aa<a?dJ<a?bU<a?bh<a?c1<a?0:-1:0:-1:ay<a?bp<a?0:-1:0:-1:dN<a?fK<a?ce<a?gh<a?0:-1:0:-1:da<a?gw<a?0:-1:0:-1:h$<a?hD<a?fP<a?gf<a?X<a?dk<a?gj<a?dd<a?0:-1:0:-1:ex<a?au<a?0:-1:0:-1:aw<a?eE<a?eS<a?dp<a?0:-1:0:-1:h8<a?aZ<a?0:-1:0:-1:eu<a?eY<a?eG<a?hl<a?g7<a?g9<a?0:-1:0:-1:aW<a?a$<a?0:-1:0:-1:hu<a?hg<a?hf<a?c6<a?0:-1:0:-1:gB<a?gC<a?0:-1:0:-1:G(Pc,a+J|0)-1|0:-1},rG=function(a){return 78<a?m$<a?-1:G(oN,a+ti|0)-1|0:-1},rH=function(a){return 41<a?42<a?-1:0:-1},mO=function(a){return 35<a?iu<a?-1:G(Oc,a+J|0)-1|0:-1},mP=function(a){return 35<a?iu<a?-1:G(Od,a+J|0)-1|0:-1},rI=function(a){return 35<a?iu<a?-1:G(Oe,a+J|0)-1|0:-1},rJ=function(a){return 47<a?jv<a?-1:G(OD,a+jj|0)-1|0:-1},rK=function(a){return 41<a?61<a?-1:G(OI,a+uo|0)-1|0:-1},mQ=function(a){return 44<a?48<a?-1:G(Ot,a+mp|0)-1|0:-1},rL=function(a){return 44<a?45<a?-1:0:-1},rM=function(a){return mf<a?lD<a?-1:0:-1},mR=function(a){return lJ<a?lw<a?-1:0:-1},rN=function(a){return 99<a?jS<a?-1:0:-1},jq=function(a){return 35<a?ia<a?gH<a?hy<a?-1:dF<a?e9<a?aG<a?bJ<a?eJ<a?fE<a?cy<a?hW<a?0:-1:0:-1:eM<a?dH<a?0:-1:0:-1:cf<a?bo<a?di<a?aQ<a?0:-1:0:-1:$<a?dR<a?0:-1:0:-1:cn<a?eb<a?hB<a?gI<a?ca<a?gq<a?ft<a?dC<a?ag<a?eg<a?d8<a?dw<a?cu<a?cC<a?fk<a?d_<a?0:-1:0:-1:am<a?gl<a?0:-1:0:-1:fc<a?cB<a?gr<a?fF<a?0:-1:0:-1:fQ<a?b7<a?0:-1:0:-1:at<a?ep<a?gb<a?b8<a?ew<a?eN<a?0:-1:0:-1:f8<a?fL<a?0:-1:0:-1:eR<a?aq<a?ez<a?cq<a?0:-1:0:-1:e_<a?ah<a?0:-1:0:-1:fb<a?dW<a?d5<a?a9<a?fn<a?cG<a?fS<a?ar<a?0:-1:0:-1:f7<a?e3<a?0:-1:0:-1:eA<a?ax<a?aD<a?bz<a?0:-1:0:-1:cM<a?a2<a?0:-1:0:-1:bM<a?cU<a?aR<a?fZ<a?bC<a?f2<a?0:-1:0:-1:ac<a?bS<a?0:-1:0:-1:hh<a?b$<a?gz<a?a3<a?0:-1:0:-1:f3<a?h4<a?0:-1:0:-1:b2<a?aU<a?fl<a?eO<a?eC<a?ev<a?dY<a?dK<a?c_<a?cv<a?0:-1:0:-1:b6<a?cw<a?0:-1:0:-1:ap<a?fU<a?eW<a?al<a?0:-1:0:-1:bO<a?ec<a?0:-1:0:-1:a5<a?gu<a?aA<a?fI<a?bB<a?bI<a?0:-1:0:-1:bn<a?cV<a?0:-1:0:-1:a_<a?aj<a?cx<a?bR<a?0:-1:0:-1:fs<a?fh<a?0:-1:0:-1:av<a?dP<a?cg<a?aS<a?aF<a?dt<a?f9<a?gd<a?0:-1:0:-1:e7<a?b5<a?0:-1:0:-1:bq<a?e6<a?fo<a?d1<a?0:-1:0:-1:cE<a?cI<a?0:-1:0:-1:eB<a?ds<a?et<a?bE<a?dv<a?c4<a?0:-1:0:-1:bf<a?cD<a?0:-1:0:-1:ho<a?hP<a?ie<a?c5<a?0:-1:0:-1:gO<a?gF<a?0:-1:0:-1:hR<a?gW<a?hZ<a?hk<a?gm<a?bK<a?dg<a?dX<a?hz<a?gT<a?hV<a?gX<a?0:-1:0:-1:aI<a?hG<a?0:-1:0:-1:fj<a?eH<a?g_<a?g1<a?0:-1:0:-1:dq<a?_<a?0:-1:0:-1:hA<a?h6<a?e0<a?cz<a?fO<a?fT<a?0:-1:0:-1:gD<a?dA<a?0:-1:0:-1:en<a?gK<a?hL<a?af<a?0:-1:0:-1:hC<a?ic<a?0:-1:0:-1:bg<a?f$<a?hO<a?gM<a?f6<a?gN<a?hj<a?g4<a?0:-1:0:-1:h9<a?cN<a?0:-1:0:-1:dm<a?hJ<a?g$<a?hT<a?0:-1:0:-1:ae<a?bN<a?0:-1:0:-1:gJ<a?g5<a?b4<a?ek<a?cT<a?fp<a?0:-1:0:-1:hH<a?f1<a?0:-1:0:-1:cH<a?S<a?az<a?hK<a?0:-1:0:-1:bA<a?dr<a?0:-1:0:-1:ci<a?aN<a?fv<a?fx<a?cm<a?aX<a?dx<a?fw<a?g3<a?hx<a?0:-1:0:-1:bP<a?bT<a?0:-1:0:-1:gn<a?b1<a?bd<a?gc<a?0:-1:0:-1:fy<a?a7<a?0:-1:0:-1:hn<a?e1<a?gv<a?c0<a?gk<a?a0<a?0:-1:0:-1:gp<a?ej<a?0:-1:0:-1:fV<a?fD<a?Y<a?hb<a?0:-1:0:-1:dS<a?fq<a?0:-1:0:-1:ch<a?c9<a?bj<a?Z<a?cQ<a?e$<a?R<a?V<a?0:-1:0:-1:eL<a?e2<a?0:-1:0:-1:gY<a?ao<a?dc<a?d$<a?0:-1:0:-1:fA<a?h_<a?0:-1:0:-1:W<a?bx<a?ak<a?aK<a?a8<a?cS<a?0:-1:0:-1:bQ<a?c3<a?0:-1:0:-1:du<a?dL<a?cR<a?fz<a?0:-1:0:-1:dM<a?M<a?0:-1:0:-1:U<a?f0<a?id<a?ba<a?ab<a?fB<a?fa<a?hX<a?bG<a?cr<a?cY<a?bX<a?dT<a?aP<a?0:-1:0:-1:bk<a?ck<a?0:-1:0:-1:df<a?hi<a?gE<a?bZ<a?0:-1:0:-1:gP<a?dU<a?0:-1:0:-1:g2<a?hd<a?gL<a?e5<a?f5<a?fe<a?0:-1:0:-1:hF<a?hw<a?0:-1:0:-1:dG<a?hI<a?g6<a?gG<a?0:-1:0:-1:fJ<a?eP<a?0:-1:0:-1:fW<a?db<a?aL<a?gs<a?es<a?co<a?dB<a?d3<a?0:-1:0:-1:eK<a?cc<a?0:-1:0:-1:T<a?as<a?fm<a?dn<a?0:-1:0:-1:f_<a?fR<a?0:-1:0:-1:dD<a?bb<a?ea<a?ff<a?de<a?cj<a?0:-1:0:-1:d2<a?eZ<a?0:-1:0:-1:aH<a?d0<a?cF<a?fY<a?0:-1:0:-1:b9<a?dQ<a?0:-1:0:-1:hr<a?go<a?gU<a?gy<a?eX<a?ee<a?gS<a?hs<a?h1<a?hQ<a?0:-1:0:-1:ad<a?eU<a?0:-1:0:-1:dO<a?be<a?eF<a?eo<a?0:-1:0:-1:dh<a?by<a?0:-1:0:-1:hc<a?bL<a?fH<a?aT<a?gR<a?b0<a?0:-1:0:-1:cp<a?el<a?0:-1:0:-1:h0<a?cJ<a?d4<a?dZ<a?0:-1:0:-1:hY<a?ib<a?0:-1:0:-1:hU<a?ht<a?ig<a?a1<a?h7<a?ey<a?hq<a?a4<a?0:-1:0:-1:f4<a?h5<a?0:-1:0:-1:bV<a?hM<a?h2<a?e8<a?0:-1:0:-1:bl<a?dE<a?0:-1:0:-1:eD<a?bD<a?bH<a?hN<a?gQ<a?hm<a?0:-1:0:-1:he<a?bF<a?0:-1:0:-1:bs<a?cb<a?em<a?fr<a?0:-1:0:-1:gg<a?fi<a?0:-1:0:-1:ef<a?c2<a?ct<a?cl<a?c7<a?dI<a?g0<a?g8<a?dj<a?hE<a?hp<a?cW<a?0:-1:0:-1:hv<a?bi<a?0:-1:0:-1:dl<a?cL<a?eT<a?an<a?0:-1:0:-1:gA<a?bw<a?0:-1:0:-1:cA<a?dz<a?fd<a?bc<a?d6<a?bu<a?0:-1:0:-1:fX<a?fN<a?0:-1:0:-1:c$<a?c8<a?aY<a?cK<a?0:-1:0:-1:d7<a?aE<a?0:-1:0:-1:d9<a?gZ<a?bW<a?a6<a?bt<a?h3<a?e4<a?fC<a?0:-1:0:-1:eq<a?aC<a?0:-1:0:-1:aB<a?eV<a?hS<a?gx<a?0:-1:0:-1:gV<a?cs<a?0:-1:0:-1:br<a?cX<a?fu<a?ei<a?eQ<a?gt<a?0:-1:0:-1:fM<a?ed<a?0:-1:0:-1:ai<a?aO<a?bY<a?cP<a?0:-1:0:-1:ge<a?bv<a?0:-1:0:-1:aV<a?eI<a?dy<a?gi<a?bm<a?er<a?aJ<a?ga<a?dV<a?ha<a?0:-1:0:-1:b3<a?aM<a?0:-1:0:-1:b_<a?cO<a?eh<a?fG<a?0:-1:0:-1:cd<a?fg<a?0:-1:0:-1:cZ<a?aa<a?dJ<a?bU<a?bh<a?c1<a?0:-1:0:-1:ay<a?bp<a?0:-1:0:-1:dN<a?fK<a?ce<a?gh<a?0:-1:0:-1:da<a?gw<a?0:-1:0:-1:h$<a?hD<a?fP<a?gf<a?X<a?dk<a?gj<a?dd<a?0:-1:0:-1:ex<a?au<a?0:-1:0:-1:aw<a?eE<a?eS<a?dp<a?0:-1:0:-1:h8<a?aZ<a?0:-1:0:-1:eu<a?eY<a?eG<a?hl<a?g7<a?g9<a?0:-1:0:-1:aW<a?a$<a?0:-1:0:-1:hu<a?hg<a?hf<a?c6<a?0:-1:0:-1:gB<a?gC<a?0:-1:0:-1:G(Pe,a+J|0)-1|0:-1},mS=function(a){return 47<a?jh<a?-1:G(OM,a+jj|0)-1|0:-1},mT=function(a){return p0<a?mg<a?-1:0:-1},lY=function(a){return 45<a?57<a?-1:G(OO,a+kZ|0)-1|0:-1},rO=function(a){return 35<a?iu<a?-1:G(Of,a+J|0)-1|0:-1},ka=function(a){return 47<a?lA<a?-1:G(PI,a+jj|0)-1|0:-1},jP=function(a){return 35<a?iu<a?-1:G(Og,a+J|0)-1|0:-1},je=function(a){return 9<a?10<a?-1:0:-1},rP=function(a){return 35<a?iu<a?-1:G(Oh,a+J|0)-1|0:-1},rQ=function(a){return 96<a?97<a?-1:0:-1},rR=function(a){return 35<a?ia<a?gH<a?hy<a?-1:dF<a?e9<a?aG<a?bJ<a?eJ<a?fE<a?cy<a?hW<a?0:-1:0:-1:eM<a?dH<a?0:-1:0:-1:cf<a?bo<a?di<a?aQ<a?0:-1:0:-1:$<a?dR<a?0:-1:0:-1:cn<a?eb<a?hB<a?gI<a?ca<a?gq<a?ft<a?dC<a?ag<a?eg<a?d8<a?dw<a?cu<a?cC<a?fk<a?d_<a?0:-1:0:-1:am<a?gl<a?0:-1:0:-1:fc<a?cB<a?gr<a?fF<a?0:-1:0:-1:fQ<a?b7<a?0:-1:0:-1:at<a?ep<a?gb<a?b8<a?ew<a?eN<a?0:-1:0:-1:f8<a?fL<a?0:-1:0:-1:eR<a?aq<a?ez<a?cq<a?0:-1:0:-1:e_<a?ah<a?0:-1:0:-1:fb<a?dW<a?d5<a?a9<a?fn<a?cG<a?fS<a?ar<a?0:-1:0:-1:f7<a?e3<a?0:-1:0:-1:eA<a?ax<a?aD<a?bz<a?0:-1:0:-1:cM<a?a2<a?0:-1:0:-1:bM<a?cU<a?aR<a?fZ<a?bC<a?f2<a?0:-1:0:-1:ac<a?bS<a?0:-1:0:-1:hh<a?b$<a?gz<a?a3<a?0:-1:0:-1:f3<a?h4<a?0:-1:0:-1:b2<a?aU<a?fl<a?eO<a?eC<a?ev<a?dY<a?dK<a?c_<a?cv<a?0:-1:0:-1:b6<a?cw<a?0:-1:0:-1:ap<a?fU<a?eW<a?al<a?0:-1:0:-1:bO<a?ec<a?0:-1:0:-1:a5<a?gu<a?aA<a?fI<a?bB<a?bI<a?0:-1:0:-1:bn<a?cV<a?0:-1:0:-1:a_<a?aj<a?cx<a?bR<a?0:-1:0:-1:fs<a?fh<a?0:-1:0:-1:av<a?dP<a?cg<a?aS<a?aF<a?dt<a?f9<a?gd<a?0:-1:0:-1:e7<a?b5<a?0:-1:0:-1:bq<a?e6<a?fo<a?d1<a?0:-1:0:-1:cE<a?cI<a?0:-1:0:-1:eB<a?ds<a?et<a?bE<a?dv<a?c4<a?0:-1:0:-1:bf<a?cD<a?0:-1:0:-1:ho<a?hP<a?ie<a?c5<a?0:-1:0:-1:gO<a?gF<a?0:-1:0:-1:hR<a?gW<a?hZ<a?hk<a?gm<a?bK<a?dg<a?dX<a?hz<a?gT<a?hV<a?gX<a?0:-1:0:-1:aI<a?hG<a?0:-1:0:-1:fj<a?eH<a?g_<a?g1<a?0:-1:0:-1:dq<a?_<a?0:-1:0:-1:hA<a?h6<a?e0<a?cz<a?fO<a?fT<a?0:-1:0:-1:gD<a?dA<a?0:-1:0:-1:en<a?gK<a?hL<a?af<a?0:-1:0:-1:hC<a?ic<a?0:-1:0:-1:bg<a?f$<a?hO<a?gM<a?f6<a?gN<a?hj<a?g4<a?0:-1:0:-1:h9<a?cN<a?0:-1:0:-1:dm<a?hJ<a?g$<a?hT<a?0:-1:0:-1:ae<a?bN<a?0:-1:0:-1:gJ<a?g5<a?b4<a?ek<a?cT<a?fp<a?0:-1:0:-1:hH<a?f1<a?0:-1:0:-1:cH<a?S<a?az<a?hK<a?0:-1:0:-1:bA<a?dr<a?0:-1:0:-1:ci<a?aN<a?fv<a?fx<a?cm<a?aX<a?dx<a?fw<a?g3<a?hx<a?0:-1:0:-1:bP<a?bT<a?0:-1:0:-1:gn<a?b1<a?bd<a?gc<a?0:-1:0:-1:fy<a?a7<a?0:-1:0:-1:hn<a?e1<a?gv<a?c0<a?gk<a?a0<a?0:-1:0:-1:gp<a?ej<a?0:-1:0:-1:fV<a?fD<a?Y<a?hb<a?0:-1:0:-1:dS<a?fq<a?0:-1:0:-1:ch<a?c9<a?bj<a?Z<a?cQ<a?e$<a?R<a?V<a?0:-1:0:-1:eL<a?e2<a?0:-1:0:-1:gY<a?ao<a?dc<a?d$<a?0:-1:0:-1:fA<a?h_<a?0:-1:0:-1:W<a?bx<a?ak<a?aK<a?a8<a?cS<a?0:-1:0:-1:bQ<a?c3<a?0:-1:0:-1:du<a?dL<a?cR<a?fz<a?0:-1:0:-1:dM<a?M<a?0:-1:0:-1:U<a?f0<a?id<a?ba<a?ab<a?fB<a?fa<a?hX<a?bG<a?cr<a?cY<a?bX<a?dT<a?aP<a?0:-1:0:-1:bk<a?ck<a?0:-1:0:-1:df<a?hi<a?gE<a?bZ<a?0:-1:0:-1:gP<a?dU<a?0:-1:0:-1:g2<a?hd<a?gL<a?e5<a?f5<a?fe<a?0:-1:0:-1:hF<a?hw<a?0:-1:0:-1:dG<a?hI<a?g6<a?gG<a?0:-1:0:-1:fJ<a?eP<a?0:-1:0:-1:fW<a?db<a?aL<a?gs<a?es<a?co<a?dB<a?d3<a?0:-1:0:-1:eK<a?cc<a?0:-1:0:-1:T<a?as<a?fm<a?dn<a?0:-1:0:-1:f_<a?fR<a?0:-1:0:-1:dD<a?bb<a?ea<a?ff<a?de<a?cj<a?0:-1:0:-1:d2<a?eZ<a?0:-1:0:-1:aH<a?d0<a?cF<a?fY<a?0:-1:0:-1:b9<a?dQ<a?0:-1:0:-1:hr<a?go<a?gU<a?gy<a?eX<a?ee<a?gS<a?hs<a?h1<a?hQ<a?0:-1:0:-1:ad<a?eU<a?0:-1:0:-1:dO<a?be<a?eF<a?eo<a?0:-1:0:-1:dh<a?by<a?0:-1:0:-1:hc<a?bL<a?fH<a?aT<a?gR<a?b0<a?0:-1:0:-1:cp<a?el<a?0:-1:0:-1:h0<a?cJ<a?d4<a?dZ<a?0:-1:0:-1:hY<a?ib<a?0:-1:0:-1:hU<a?ht<a?ig<a?a1<a?h7<a?ey<a?hq<a?a4<a?0:-1:0:-1:f4<a?h5<a?0:-1:0:-1:bV<a?hM<a?h2<a?e8<a?0:-1:0:-1:bl<a?dE<a?0:-1:0:-1:eD<a?bD<a?bH<a?hN<a?gQ<a?hm<a?0:-1:0:-1:he<a?bF<a?0:-1:0:-1:bs<a?cb<a?em<a?fr<a?0:-1:0:-1:gg<a?fi<a?0:-1:0:-1:ef<a?c2<a?ct<a?cl<a?c7<a?dI<a?g0<a?g8<a?dj<a?hE<a?hp<a?cW<a?0:-1:0:-1:hv<a?bi<a?0:-1:0:-1:dl<a?cL<a?eT<a?an<a?0:-1:0:-1:gA<a?bw<a?0:-1:0:-1:cA<a?dz<a?fd<a?bc<a?d6<a?bu<a?0:-1:0:-1:fX<a?fN<a?0:-1:0:-1:c$<a?c8<a?aY<a?cK<a?0:-1:0:-1:d7<a?aE<a?0:-1:0:-1:d9<a?gZ<a?bW<a?a6<a?bt<a?h3<a?e4<a?fC<a?0:-1:0:-1:eq<a?aC<a?0:-1:0:-1:aB<a?eV<a?hS<a?gx<a?0:-1:0:-1:gV<a?cs<a?0:-1:0:-1:br<a?cX<a?fu<a?ei<a?eQ<a?gt<a?0:-1:0:-1:fM<a?ed<a?0:-1:0:-1:ai<a?aO<a?bY<a?cP<a?0:-1:0:-1:ge<a?bv<a?0:-1:0:-1:aV<a?eI<a?dy<a?gi<a?bm<a?er<a?aJ<a?ga<a?dV<a?ha<a?0:-1:0:-1:b3<a?aM<a?0:-1:0:-1:b_<a?cO<a?eh<a?fG<a?0:-1:0:-1:cd<a?fg<a?0:-1:0:-1:cZ<a?aa<a?dJ<a?bU<a?bh<a?c1<a?0:-1:0:-1:ay<a?bp<a?0:-1:0:-1:dN<a?fK<a?ce<a?gh<a?0:-1:0:-1:da<a?gw<a?0:-1:0:-1:h$<a?hD<a?fP<a?gf<a?X<a?dk<a?gj<a?dd<a?0:-1:0:-1:ex<a?au<a?0:-1:0:-1:aw<a?eE<a?eS<a?dp<a?0:-1:0:-1:h8<a?aZ<a?0:-1:0:-1:eu<a?eY<a?eG<a?hl<a?g7<a?g9<a?0:-1:0:-1:aW<a?a$<a?0:-1:0:-1:hu<a?hg<a?hf<a?c6<a?0:-1:0:-1:gB<a?gC<a?0:-1:0:-1:G(Ph,a+J|0)-1|0:-1},ix=function(a){return 35<a?ia<a?gH<a?hy<a?-1:dF<a?e9<a?aG<a?bJ<a?eJ<a?fE<a?cy<a?hW<a?0:-1:0:-1:eM<a?dH<a?0:-1:0:-1:cf<a?bo<a?di<a?aQ<a?0:-1:0:-1:$<a?dR<a?0:-1:0:-1:cn<a?eb<a?hB<a?gI<a?ca<a?gq<a?ft<a?dC<a?ag<a?eg<a?d8<a?dw<a?cu<a?cC<a?fk<a?d_<a?0:-1:0:-1:am<a?gl<a?0:-1:0:-1:fc<a?cB<a?gr<a?fF<a?0:-1:0:-1:fQ<a?b7<a?0:-1:0:-1:at<a?ep<a?gb<a?b8<a?ew<a?eN<a?0:-1:0:-1:f8<a?fL<a?0:-1:0:-1:eR<a?aq<a?ez<a?cq<a?0:-1:0:-1:e_<a?ah<a?0:-1:0:-1:fb<a?dW<a?d5<a?a9<a?fn<a?cG<a?fS<a?ar<a?0:-1:0:-1:f7<a?e3<a?0:-1:0:-1:eA<a?ax<a?aD<a?bz<a?0:-1:0:-1:cM<a?a2<a?0:-1:0:-1:bM<a?cU<a?aR<a?fZ<a?bC<a?f2<a?0:-1:0:-1:ac<a?bS<a?0:-1:0:-1:hh<a?b$<a?gz<a?a3<a?0:-1:0:-1:f3<a?h4<a?0:-1:0:-1:b2<a?aU<a?fl<a?eO<a?eC<a?ev<a?dY<a?dK<a?c_<a?cv<a?0:-1:0:-1:b6<a?cw<a?0:-1:0:-1:ap<a?fU<a?eW<a?al<a?0:-1:0:-1:bO<a?ec<a?0:-1:0:-1:a5<a?gu<a?aA<a?fI<a?bB<a?bI<a?0:-1:0:-1:bn<a?cV<a?0:-1:0:-1:a_<a?aj<a?cx<a?bR<a?0:-1:0:-1:fs<a?fh<a?0:-1:0:-1:av<a?dP<a?cg<a?aS<a?aF<a?dt<a?f9<a?gd<a?0:-1:0:-1:e7<a?b5<a?0:-1:0:-1:bq<a?e6<a?fo<a?d1<a?0:-1:0:-1:cE<a?cI<a?0:-1:0:-1:eB<a?ds<a?et<a?bE<a?dv<a?c4<a?0:-1:0:-1:bf<a?cD<a?0:-1:0:-1:ho<a?hP<a?ie<a?c5<a?0:-1:0:-1:gO<a?gF<a?0:-1:0:-1:hR<a?gW<a?hZ<a?hk<a?gm<a?bK<a?dg<a?dX<a?hz<a?gT<a?hV<a?gX<a?0:-1:0:-1:aI<a?hG<a?0:-1:0:-1:fj<a?eH<a?g_<a?g1<a?0:-1:0:-1:dq<a?_<a?0:-1:0:-1:hA<a?h6<a?e0<a?cz<a?fO<a?fT<a?0:-1:0:-1:gD<a?dA<a?0:-1:0:-1:en<a?gK<a?hL<a?af<a?0:-1:0:-1:hC<a?ic<a?0:-1:0:-1:bg<a?f$<a?hO<a?gM<a?f6<a?gN<a?hj<a?g4<a?0:-1:0:-1:h9<a?cN<a?0:-1:0:-1:dm<a?hJ<a?g$<a?hT<a?0:-1:0:-1:ae<a?bN<a?0:-1:0:-1:gJ<a?g5<a?b4<a?ek<a?cT<a?fp<a?0:-1:0:-1:hH<a?f1<a?0:-1:0:-1:cH<a?S<a?az<a?hK<a?0:-1:0:-1:bA<a?dr<a?0:-1:0:-1:ci<a?aN<a?fv<a?fx<a?cm<a?aX<a?dx<a?fw<a?g3<a?hx<a?0:-1:0:-1:bP<a?bT<a?0:-1:0:-1:gn<a?b1<a?bd<a?gc<a?0:-1:0:-1:fy<a?a7<a?0:-1:0:-1:hn<a?e1<a?gv<a?c0<a?gk<a?a0<a?0:-1:0:-1:gp<a?ej<a?0:-1:0:-1:fV<a?fD<a?Y<a?hb<a?0:-1:0:-1:dS<a?fq<a?0:-1:0:-1:ch<a?c9<a?bj<a?Z<a?cQ<a?e$<a?R<a?V<a?0:-1:0:-1:eL<a?e2<a?0:-1:0:-1:gY<a?ao<a?dc<a?d$<a?0:-1:0:-1:fA<a?h_<a?0:-1:0:-1:W<a?bx<a?ak<a?aK<a?a8<a?cS<a?0:-1:0:-1:bQ<a?c3<a?0:-1:0:-1:du<a?dL<a?cR<a?fz<a?0:-1:0:-1:dM<a?M<a?0:-1:0:-1:U<a?f0<a?id<a?ba<a?ab<a?fB<a?fa<a?hX<a?bG<a?cr<a?cY<a?bX<a?dT<a?aP<a?0:-1:0:-1:bk<a?ck<a?0:-1:0:-1:df<a?hi<a?gE<a?bZ<a?0:-1:0:-1:gP<a?dU<a?0:-1:0:-1:g2<a?hd<a?gL<a?e5<a?f5<a?fe<a?0:-1:0:-1:hF<a?hw<a?0:-1:0:-1:dG<a?hI<a?g6<a?gG<a?0:-1:0:-1:fJ<a?eP<a?0:-1:0:-1:fW<a?db<a?aL<a?gs<a?es<a?co<a?dB<a?d3<a?0:-1:0:-1:eK<a?cc<a?0:-1:0:-1:T<a?as<a?fm<a?dn<a?0:-1:0:-1:f_<a?fR<a?0:-1:0:-1:dD<a?bb<a?ea<a?ff<a?de<a?cj<a?0:-1:0:-1:d2<a?eZ<a?0:-1:0:-1:aH<a?d0<a?cF<a?fY<a?0:-1:0:-1:b9<a?dQ<a?0:-1:0:-1:hr<a?go<a?gU<a?gy<a?eX<a?ee<a?gS<a?hs<a?h1<a?hQ<a?0:-1:0:-1:ad<a?eU<a?0:-1:0:-1:dO<a?be<a?eF<a?eo<a?0:-1:0:-1:dh<a?by<a?0:-1:0:-1:hc<a?bL<a?fH<a?aT<a?gR<a?b0<a?0:-1:0:-1:cp<a?el<a?0:-1:0:-1:h0<a?cJ<a?d4<a?dZ<a?0:-1:0:-1:hY<a?ib<a?0:-1:0:-1:hU<a?ht<a?ig<a?a1<a?h7<a?ey<a?hq<a?a4<a?0:-1:0:-1:f4<a?h5<a?0:-1:0:-1:bV<a?hM<a?h2<a?e8<a?0:-1:0:-1:bl<a?dE<a?0:-1:0:-1:eD<a?bD<a?bH<a?hN<a?gQ<a?hm<a?0:-1:0:-1:he<a?bF<a?0:-1:0:-1:bs<a?cb<a?em<a?fr<a?0:-1:0:-1:gg<a?fi<a?0:-1:0:-1:ef<a?c2<a?ct<a?cl<a?c7<a?dI<a?g0<a?g8<a?dj<a?hE<a?hp<a?cW<a?0:-1:0:-1:hv<a?bi<a?0:-1:0:-1:dl<a?cL<a?eT<a?an<a?0:-1:0:-1:gA<a?bw<a?0:-1:0:-1:cA<a?dz<a?fd<a?bc<a?d6<a?bu<a?0:-1:0:-1:fX<a?fN<a?0:-1:0:-1:c$<a?c8<a?aY<a?cK<a?0:-1:0:-1:d7<a?aE<a?0:-1:0:-1:d9<a?gZ<a?bW<a?a6<a?bt<a?h3<a?e4<a?fC<a?0:-1:0:-1:eq<a?aC<a?0:-1:0:-1:aB<a?eV<a?hS<a?gx<a?0:-1:0:-1:gV<a?cs<a?0:-1:0:-1:br<a?cX<a?fu<a?ei<a?eQ<a?gt<a?0:-1:0:-1:fM<a?ed<a?0:-1:0:-1:ai<a?aO<a?bY<a?cP<a?0:-1:0:-1:ge<a?bv<a?0:-1:0:-1:aV<a?eI<a?dy<a?gi<a?bm<a?er<a?aJ<a?ga<a?dV<a?ha<a?0:-1:0:-1:b3<a?aM<a?0:-1:0:-1:b_<a?cO<a?eh<a?fG<a?0:-1:0:-1:cd<a?fg<a?0:-1:0:-1:cZ<a?aa<a?dJ<a?bU<a?bh<a?c1<a?0:-1:0:-1:ay<a?bp<a?0:-1:0:-1:dN<a?fK<a?ce<a?gh<a?0:-1:0:-1:da<a?gw<a?0:-1:0:-1:h$<a?hD<a?fP<a?gf<a?X<a?dk<a?gj<a?dd<a?0:-1:0:-1:ex<a?au<a?0:-1:0:-1:aw<a?eE<a?eS<a?dp<a?0:-1:0:-1:h8<a?aZ<a?0:-1:0:-1:eu<a?eY<a?eG<a?hl<a?g7<a?g9<a?0:-1:0:-1:aW<a?a$<a?0:-1:0:-1:hu<a?hg<a?hf<a?c6<a?0:-1:0:-1:gB<a?gC<a?0:-1:0:-1:G(Pi,a+J|0)-1|0:-1},rS=function(a){return 35<a?iu<a?-1:G(Oi,a+J|0)-1|0:-1},kw=function(a){return 47<a?95<a?-1:G(OF,a+jj|0)-1|0:-1},rT=function(a){return 35<a?ia<a?gH<a?hy<a?-1:dF<a?e9<a?aG<a?bJ<a?eJ<a?fE<a?cy<a?hW<a?0:-1:0:-1:eM<a?dH<a?0:-1:0:-1:cf<a?bo<a?di<a?aQ<a?0:-1:0:-1:$<a?dR<a?0:-1:0:-1:cn<a?eb<a?hB<a?gI<a?ca<a?gq<a?ft<a?dC<a?ag<a?eg<a?d8<a?dw<a?cu<a?cC<a?fk<a?d_<a?0:-1:0:-1:am<a?gl<a?0:-1:0:-1:fc<a?cB<a?gr<a?fF<a?0:-1:0:-1:fQ<a?b7<a?0:-1:0:-1:at<a?ep<a?gb<a?b8<a?ew<a?eN<a?0:-1:0:-1:f8<a?fL<a?0:-1:0:-1:eR<a?aq<a?ez<a?cq<a?0:-1:0:-1:e_<a?ah<a?0:-1:0:-1:fb<a?dW<a?d5<a?a9<a?fn<a?cG<a?fS<a?ar<a?0:-1:0:-1:f7<a?e3<a?0:-1:0:-1:eA<a?ax<a?aD<a?bz<a?0:-1:0:-1:cM<a?a2<a?0:-1:0:-1:bM<a?cU<a?aR<a?fZ<a?bC<a?f2<a?0:-1:0:-1:ac<a?bS<a?0:-1:0:-1:hh<a?b$<a?gz<a?a3<a?0:-1:0:-1:f3<a?h4<a?0:-1:0:-1:b2<a?aU<a?fl<a?eO<a?eC<a?ev<a?dY<a?dK<a?c_<a?cv<a?0:-1:0:-1:b6<a?cw<a?0:-1:0:-1:ap<a?fU<a?eW<a?al<a?0:-1:0:-1:bO<a?ec<a?0:-1:0:-1:a5<a?gu<a?aA<a?fI<a?bB<a?bI<a?0:-1:0:-1:bn<a?cV<a?0:-1:0:-1:a_<a?aj<a?cx<a?bR<a?0:-1:0:-1:fs<a?fh<a?0:-1:0:-1:av<a?dP<a?cg<a?aS<a?aF<a?dt<a?f9<a?gd<a?0:-1:0:-1:e7<a?b5<a?0:-1:0:-1:bq<a?e6<a?fo<a?d1<a?0:-1:0:-1:cE<a?cI<a?0:-1:0:-1:eB<a?ds<a?et<a?bE<a?dv<a?c4<a?0:-1:0:-1:bf<a?cD<a?0:-1:0:-1:ho<a?hP<a?ie<a?c5<a?0:-1:0:-1:gO<a?gF<a?0:-1:0:-1:hR<a?gW<a?hZ<a?hk<a?gm<a?bK<a?dg<a?dX<a?hz<a?gT<a?hV<a?gX<a?0:-1:0:-1:aI<a?hG<a?0:-1:0:-1:fj<a?eH<a?g_<a?g1<a?0:-1:0:-1:dq<a?_<a?0:-1:0:-1:hA<a?h6<a?e0<a?cz<a?fO<a?fT<a?0:-1:0:-1:gD<a?dA<a?0:-1:0:-1:en<a?gK<a?hL<a?af<a?0:-1:0:-1:hC<a?ic<a?0:-1:0:-1:bg<a?f$<a?hO<a?gM<a?f6<a?gN<a?hj<a?g4<a?0:-1:0:-1:h9<a?cN<a?0:-1:0:-1:dm<a?hJ<a?g$<a?hT<a?0:-1:0:-1:ae<a?bN<a?0:-1:0:-1:gJ<a?g5<a?b4<a?ek<a?cT<a?fp<a?0:-1:0:-1:hH<a?f1<a?0:-1:0:-1:cH<a?S<a?az<a?hK<a?0:-1:0:-1:bA<a?dr<a?0:-1:0:-1:ci<a?aN<a?fv<a?fx<a?cm<a?aX<a?dx<a?fw<a?g3<a?hx<a?0:-1:0:-1:bP<a?bT<a?0:-1:0:-1:gn<a?b1<a?bd<a?gc<a?0:-1:0:-1:fy<a?a7<a?0:-1:0:-1:hn<a?e1<a?gv<a?c0<a?gk<a?a0<a?0:-1:0:-1:gp<a?ej<a?0:-1:0:-1:fV<a?fD<a?Y<a?hb<a?0:-1:0:-1:dS<a?fq<a?0:-1:0:-1:ch<a?c9<a?bj<a?Z<a?cQ<a?e$<a?R<a?V<a?0:-1:0:-1:eL<a?e2<a?0:-1:0:-1:gY<a?ao<a?dc<a?d$<a?0:-1:0:-1:fA<a?h_<a?0:-1:0:-1:W<a?bx<a?ak<a?aK<a?a8<a?cS<a?0:-1:0:-1:bQ<a?c3<a?0:-1:0:-1:du<a?dL<a?cR<a?fz<a?0:-1:0:-1:dM<a?M<a?0:-1:0:-1:U<a?f0<a?id<a?ba<a?ab<a?fB<a?fa<a?hX<a?bG<a?cr<a?cY<a?bX<a?dT<a?aP<a?0:-1:0:-1:bk<a?ck<a?0:-1:0:-1:df<a?hi<a?gE<a?bZ<a?0:-1:0:-1:gP<a?dU<a?0:-1:0:-1:g2<a?hd<a?gL<a?e5<a?f5<a?fe<a?0:-1:0:-1:hF<a?hw<a?0:-1:0:-1:dG<a?hI<a?g6<a?gG<a?0:-1:0:-1:fJ<a?eP<a?0:-1:0:-1:fW<a?db<a?aL<a?gs<a?es<a?co<a?dB<a?d3<a?0:-1:0:-1:eK<a?cc<a?0:-1:0:-1:T<a?as<a?fm<a?dn<a?0:-1:0:-1:f_<a?fR<a?0:-1:0:-1:dD<a?bb<a?ea<a?ff<a?de<a?cj<a?0:-1:0:-1:d2<a?eZ<a?0:-1:0:-1:aH<a?d0<a?cF<a?fY<a?0:-1:0:-1:b9<a?dQ<a?0:-1:0:-1:hr<a?go<a?gU<a?gy<a?eX<a?ee<a?gS<a?hs<a?h1<a?hQ<a?0:-1:0:-1:ad<a?eU<a?0:-1:0:-1:dO<a?be<a?eF<a?eo<a?0:-1:0:-1:dh<a?by<a?0:-1:0:-1:hc<a?bL<a?fH<a?aT<a?gR<a?b0<a?0:-1:0:-1:cp<a?el<a?0:-1:0:-1:h0<a?cJ<a?d4<a?dZ<a?0:-1:0:-1:hY<a?ib<a?0:-1:0:-1:hU<a?ht<a?ig<a?a1<a?h7<a?ey<a?hq<a?a4<a?0:-1:0:-1:f4<a?h5<a?0:-1:0:-1:bV<a?hM<a?h2<a?e8<a?0:-1:0:-1:bl<a?dE<a?0:-1:0:-1:eD<a?bD<a?bH<a?hN<a?gQ<a?hm<a?0:-1:0:-1:he<a?bF<a?0:-1:0:-1:bs<a?cb<a?em<a?fr<a?0:-1:0:-1:gg<a?fi<a?0:-1:0:-1:ef<a?c2<a?ct<a?cl<a?c7<a?dI<a?g0<a?g8<a?dj<a?hE<a?hp<a?cW<a?0:-1:0:-1:hv<a?bi<a?0:-1:0:-1:dl<a?cL<a?eT<a?an<a?0:-1:0:-1:gA<a?bw<a?0:-1:0:-1:cA<a?dz<a?fd<a?bc<a?d6<a?bu<a?0:-1:0:-1:fX<a?fN<a?0:-1:0:-1:c$<a?c8<a?aY<a?cK<a?0:-1:0:-1:d7<a?aE<a?0:-1:0:-1:d9<a?gZ<a?bW<a?a6<a?bt<a?h3<a?e4<a?fC<a?0:-1:0:-1:eq<a?aC<a?0:-1:0:-1:aB<a?eV<a?hS<a?gx<a?0:-1:0:-1:gV<a?cs<a?0:-1:0:-1:br<a?cX<a?fu<a?ei<a?eQ<a?gt<a?0:-1:0:-1:fM<a?ed<a?0:-1:0:-1:ai<a?aO<a?bY<a?cP<a?0:-1:0:-1:ge<a?bv<a?0:-1:0:-1:aV<a?eI<a?dy<a?gi<a?bm<a?er<a?aJ<a?ga<a?dV<a?ha<a?0:-1:0:-1:b3<a?aM<a?0:-1:0:-1:b_<a?cO<a?eh<a?fG<a?0:-1:0:-1:cd<a?fg<a?0:-1:0:-1:cZ<a?aa<a?dJ<a?bU<a?bh<a?c1<a?0:-1:0:-1:ay<a?bp<a?0:-1:0:-1:dN<a?fK<a?ce<a?gh<a?0:-1:0:-1:da<a?gw<a?0:-1:0:-1:h$<a?hD<a?fP<a?gf<a?X<a?dk<a?gj<a?dd<a?0:-1:0:-1:ex<a?au<a?0:-1:0:-1:aw<a?eE<a?eS<a?dp<a?0:-1:0:-1:h8<a?aZ<a?0:-1:0:-1:eu<a?eY<a?eG<a?hl<a?g7<a?g9<a?0:-1:0:-1:aW<a?a$<a?0:-1:0:-1:hu<a?hg<a?hf<a?c6<a?0:-1:0:-1:gB<a?gC<a?0:-1:0:-1:G(Pn,a+J|0)-1|0:-1},oS=function(a){return 35<a?ia<a?gH<a?hy<a?-1:dF<a?e9<a?aG<a?bJ<a?eJ<a?fE<a?cy<a?hW<a?0:-1:0:-1:eM<a?dH<a?0:-1:0:-1:cf<a?bo<a?di<a?aQ<a?0:-1:0:-1:$<a?dR<a?0:-1:0:-1:cn<a?eb<a?hB<a?gI<a?ca<a?gq<a?ft<a?dC<a?ag<a?eg<a?d8<a?dw<a?cu<a?cC<a?fk<a?d_<a?0:-1:0:-1:am<a?gl<a?0:-1:0:-1:fc<a?cB<a?gr<a?fF<a?0:-1:0:-1:fQ<a?b7<a?0:-1:0:-1:at<a?ep<a?gb<a?b8<a?ew<a?eN<a?0:-1:0:-1:f8<a?fL<a?0:-1:0:-1:eR<a?aq<a?ez<a?cq<a?0:-1:0:-1:e_<a?ah<a?0:-1:0:-1:fb<a?dW<a?d5<a?a9<a?fn<a?cG<a?fS<a?ar<a?0:-1:0:-1:f7<a?e3<a?0:-1:0:-1:eA<a?ax<a?aD<a?bz<a?0:-1:0:-1:cM<a?a2<a?0:-1:0:-1:bM<a?cU<a?aR<a?fZ<a?bC<a?f2<a?0:-1:0:-1:ac<a?bS<a?0:-1:0:-1:hh<a?b$<a?gz<a?a3<a?0:-1:0:-1:f3<a?h4<a?0:-1:0:-1:b2<a?aU<a?fl<a?eO<a?eC<a?ev<a?dY<a?dK<a?c_<a?cv<a?0:-1:0:-1:b6<a?cw<a?0:-1:0:-1:ap<a?fU<a?eW<a?al<a?0:-1:0:-1:bO<a?ec<a?0:-1:0:-1:a5<a?gu<a?aA<a?fI<a?bB<a?bI<a?0:-1:0:-1:bn<a?cV<a?0:-1:0:-1:a_<a?aj<a?cx<a?bR<a?0:-1:0:-1:fs<a?fh<a?0:-1:0:-1:av<a?dP<a?cg<a?aS<a?aF<a?dt<a?f9<a?gd<a?0:-1:0:-1:e7<a?b5<a?0:-1:0:-1:bq<a?e6<a?fo<a?d1<a?0:-1:0:-1:cE<a?cI<a?0:-1:0:-1:eB<a?ds<a?et<a?bE<a?dv<a?c4<a?0:-1:0:-1:bf<a?cD<a?0:-1:0:-1:ho<a?hP<a?ie<a?c5<a?0:-1:0:-1:gO<a?gF<a?0:-1:0:-1:hR<a?gW<a?hZ<a?hk<a?gm<a?bK<a?dg<a?dX<a?hz<a?gT<a?hV<a?gX<a?0:-1:0:-1:aI<a?hG<a?0:-1:0:-1:fj<a?eH<a?g_<a?g1<a?0:-1:0:-1:dq<a?_<a?0:-1:0:-1:hA<a?h6<a?e0<a?cz<a?fO<a?fT<a?0:-1:0:-1:gD<a?dA<a?0:-1:0:-1:en<a?gK<a?hL<a?af<a?0:-1:0:-1:hC<a?ic<a?0:-1:0:-1:bg<a?f$<a?hO<a?gM<a?f6<a?gN<a?hj<a?g4<a?0:-1:0:-1:h9<a?cN<a?0:-1:0:-1:dm<a?hJ<a?g$<a?hT<a?0:-1:0:-1:ae<a?bN<a?0:-1:0:-1:gJ<a?g5<a?b4<a?ek<a?cT<a?fp<a?0:-1:0:-1:hH<a?f1<a?0:-1:0:-1:cH<a?S<a?az<a?hK<a?0:-1:0:-1:bA<a?dr<a?0:-1:0:-1:ci<a?aN<a?fv<a?fx<a?cm<a?aX<a?dx<a?fw<a?g3<a?hx<a?0:-1:0:-1:bP<a?bT<a?0:-1:0:-1:gn<a?b1<a?bd<a?gc<a?0:-1:0:-1:fy<a?a7<a?0:-1:0:-1:hn<a?e1<a?gv<a?c0<a?gk<a?a0<a?0:-1:0:-1:gp<a?ej<a?0:-1:0:-1:fV<a?fD<a?Y<a?hb<a?0:-1:0:-1:dS<a?fq<a?0:-1:0:-1:ch<a?c9<a?bj<a?Z<a?cQ<a?e$<a?R<a?V<a?0:-1:0:-1:eL<a?e2<a?0:-1:0:-1:gY<a?ao<a?dc<a?d$<a?0:-1:0:-1:fA<a?h_<a?0:-1:0:-1:W<a?bx<a?ak<a?aK<a?a8<a?cS<a?0:-1:0:-1:bQ<a?c3<a?0:-1:0:-1:du<a?dL<a?cR<a?fz<a?0:-1:0:-1:dM<a?M<a?0:-1:0:-1:U<a?f0<a?id<a?ba<a?ab<a?fB<a?fa<a?hX<a?bG<a?cr<a?cY<a?bX<a?dT<a?aP<a?0:-1:0:-1:bk<a?ck<a?0:-1:0:-1:df<a?hi<a?gE<a?bZ<a?0:-1:0:-1:gP<a?dU<a?0:-1:0:-1:g2<a?hd<a?gL<a?e5<a?f5<a?fe<a?0:-1:0:-1:hF<a?hw<a?0:-1:0:-1:dG<a?hI<a?g6<a?gG<a?0:-1:0:-1:fJ<a?eP<a?0:-1:0:-1:fW<a?db<a?aL<a?gs<a?es<a?co<a?dB<a?d3<a?0:-1:0:-1:eK<a?cc<a?0:-1:0:-1:T<a?as<a?fm<a?dn<a?0:-1:0:-1:f_<a?fR<a?0:-1:0:-1:dD<a?bb<a?ea<a?ff<a?de<a?cj<a?0:-1:0:-1:d2<a?eZ<a?0:-1:0:-1:aH<a?d0<a?cF<a?fY<a?0:-1:0:-1:b9<a?dQ<a?0:-1:0:-1:hr<a?go<a?gU<a?gy<a?eX<a?ee<a?gS<a?hs<a?h1<a?hQ<a?0:-1:0:-1:ad<a?eU<a?0:-1:0:-1:dO<a?be<a?eF<a?eo<a?0:-1:0:-1:dh<a?by<a?0:-1:0:-1:hc<a?bL<a?fH<a?aT<a?gR<a?b0<a?0:-1:0:-1:cp<a?el<a?0:-1:0:-1:h0<a?cJ<a?d4<a?dZ<a?0:-1:0:-1:hY<a?ib<a?0:-1:0:-1:hU<a?ht<a?ig<a?a1<a?h7<a?ey<a?hq<a?a4<a?0:-1:0:-1:f4<a?h5<a?0:-1:0:-1:bV<a?hM<a?h2<a?e8<a?0:-1:0:-1:bl<a?dE<a?0:-1:0:-1:eD<a?bD<a?bH<a?hN<a?gQ<a?hm<a?0:-1:0:-1:he<a?bF<a?0:-1:0:-1:bs<a?cb<a?em<a?fr<a?0:-1:0:-1:gg<a?fi<a?0:-1:0:-1:ef<a?c2<a?ct<a?cl<a?c7<a?dI<a?g0<a?g8<a?dj<a?hE<a?hp<a?cW<a?0:-1:0:-1:hv<a?bi<a?0:-1:0:-1:dl<a?cL<a?eT<a?an<a?0:-1:0:-1:gA<a?bw<a?0:-1:0:-1:cA<a?dz<a?fd<a?bc<a?d6<a?bu<a?0:-1:0:-1:fX<a?fN<a?0:-1:0:-1:c$<a?c8<a?aY<a?cK<a?0:-1:0:-1:d7<a?aE<a?0:-1:0:-1:d9<a?gZ<a?bW<a?a6<a?bt<a?h3<a?e4<a?fC<a?0:-1:0:-1:eq<a?aC<a?0:-1:0:-1:aB<a?eV<a?hS<a?gx<a?0:-1:0:-1:gV<a?cs<a?0:-1:0:-1:br<a?cX<a?fu<a?ei<a?eQ<a?gt<a?0:-1:0:-1:fM<a?ed<a?0:-1:0:-1:ai<a?aO<a?bY<a?cP<a?0:-1:0:-1:ge<a?bv<a?0:-1:0:-1:aV<a?eI<a?dy<a?gi<a?bm<a?er<a?aJ<a?ga<a?dV<a?ha<a?0:-1:0:-1:b3<a?aM<a?0:-1:0:-1:b_<a?cO<a?eh<a?fG<a?0:-1:0:-1:cd<a?fg<a?0:-1:0:-1:cZ<a?aa<a?dJ<a?bU<a?bh<a?c1<a?0:-1:0:-1:ay<a?bp<a?0:-1:0:-1:dN<a?fK<a?ce<a?gh<a?0:-1:0:-1:da<a?gw<a?0:-1:0:-1:h$<a?hD<a?fP<a?gf<a?X<a?dk<a?gj<a?dd<a?0:-1:0:-1:ex<a?au<a?0:-1:0:-1:aw<a?eE<a?eS<a?dp<a?0:-1:0:-1:h8<a?aZ<a?0:-1:0:-1:eu<a?eY<a?eG<a?hl<a?g7<a?g9<a?0:-1:0:-1:aW<a?a$<a?0:-1:0:-1:hu<a?hg<a?hf<a?c6<a?0:-1:0:-1:gB<a?gC<a?0:-1:0:-1:G(Po,a+J|0)-1|0:-1},lZ=function(a){return jS<a?jv<a?-1:0:-1},rU=function(a){return 35<a?iu<a?-1:G(OP,a+J|0)-1|0:-1},lj=function(a){return 35<a?iu<a?-1:G(Oj,a+J|0)-1|0:-1},mU=function(a){return 41<a?47<a?-1:G(Or,a+uo|0)-1|0:-1},rV=function(a){return 35<a?iu<a?-1:G(Ok,a+J|0)-1|0:-1},rW=function(a){return tW<a?tu<a?-1:0:-1},mV=function(a){return 35<a?iu<a?-1:G(Ol,a+J|0)-1|0:-1},kb=function(a){return 35<a?ia<a?gH<a?hy<a?-1:dF<a?e9<a?aG<a?bJ<a?eJ<a?fE<a?cy<a?hW<a?0:-1:0:-1:eM<a?dH<a?0:-1:0:-1:cf<a?bo<a?di<a?aQ<a?0:-1:0:-1:$<a?dR<a?0:-1:0:-1:cn<a?eb<a?hB<a?gI<a?ca<a?gq<a?ft<a?dC<a?ag<a?eg<a?d8<a?dw<a?cu<a?cC<a?fk<a?d_<a?0:-1:0:-1:am<a?gl<a?0:-1:0:-1:fc<a?cB<a?gr<a?fF<a?0:-1:0:-1:fQ<a?b7<a?0:-1:0:-1:at<a?ep<a?gb<a?b8<a?ew<a?eN<a?0:-1:0:-1:f8<a?fL<a?0:-1:0:-1:eR<a?aq<a?ez<a?cq<a?0:-1:0:-1:e_<a?ah<a?0:-1:0:-1:fb<a?dW<a?d5<a?a9<a?fn<a?cG<a?fS<a?ar<a?0:-1:0:-1:f7<a?e3<a?0:-1:0:-1:eA<a?ax<a?aD<a?bz<a?0:-1:0:-1:cM<a?a2<a?0:-1:0:-1:bM<a?cU<a?aR<a?fZ<a?bC<a?f2<a?0:-1:0:-1:ac<a?bS<a?0:-1:0:-1:hh<a?b$<a?gz<a?a3<a?0:-1:0:-1:f3<a?h4<a?0:-1:0:-1:b2<a?aU<a?fl<a?eO<a?eC<a?ev<a?dY<a?dK<a?c_<a?cv<a?0:-1:0:-1:b6<a?cw<a?0:-1:0:-1:ap<a?fU<a?eW<a?al<a?0:-1:0:-1:bO<a?ec<a?0:-1:0:-1:a5<a?gu<a?aA<a?fI<a?bB<a?bI<a?0:-1:0:-1:bn<a?cV<a?0:-1:0:-1:a_<a?aj<a?cx<a?bR<a?0:-1:0:-1:fs<a?fh<a?0:-1:0:-1:av<a?dP<a?cg<a?aS<a?aF<a?dt<a?f9<a?gd<a?0:-1:0:-1:e7<a?b5<a?0:-1:0:-1:bq<a?e6<a?fo<a?d1<a?0:-1:0:-1:cE<a?cI<a?0:-1:0:-1:eB<a?ds<a?et<a?bE<a?dv<a?c4<a?0:-1:0:-1:bf<a?cD<a?0:-1:0:-1:ho<a?hP<a?ie<a?c5<a?0:-1:0:-1:gO<a?gF<a?0:-1:0:-1:hR<a?gW<a?hZ<a?hk<a?gm<a?bK<a?dg<a?dX<a?hz<a?gT<a?hV<a?gX<a?0:-1:0:-1:aI<a?hG<a?0:-1:0:-1:fj<a?eH<a?g_<a?g1<a?0:-1:0:-1:dq<a?_<a?0:-1:0:-1:hA<a?h6<a?e0<a?cz<a?fO<a?fT<a?0:-1:0:-1:gD<a?dA<a?0:-1:0:-1:en<a?gK<a?hL<a?af<a?0:-1:0:-1:hC<a?ic<a?0:-1:0:-1:bg<a?f$<a?hO<a?gM<a?f6<a?gN<a?hj<a?g4<a?0:-1:0:-1:h9<a?cN<a?0:-1:0:-1:dm<a?hJ<a?g$<a?hT<a?0:-1:0:-1:ae<a?bN<a?0:-1:0:-1:gJ<a?g5<a?b4<a?ek<a?cT<a?fp<a?0:-1:0:-1:hH<a?f1<a?0:-1:0:-1:cH<a?S<a?az<a?hK<a?0:-1:0:-1:bA<a?dr<a?0:-1:0:-1:ci<a?aN<a?fv<a?fx<a?cm<a?aX<a?dx<a?fw<a?g3<a?hx<a?0:-1:0:-1:bP<a?bT<a?0:-1:0:-1:gn<a?b1<a?bd<a?gc<a?0:-1:0:-1:fy<a?a7<a?0:-1:0:-1:hn<a?e1<a?gv<a?c0<a?gk<a?a0<a?0:-1:0:-1:gp<a?ej<a?0:-1:0:-1:fV<a?fD<a?Y<a?hb<a?0:-1:0:-1:dS<a?fq<a?0:-1:0:-1:ch<a?c9<a?bj<a?Z<a?cQ<a?e$<a?R<a?V<a?0:-1:0:-1:eL<a?e2<a?0:-1:0:-1:gY<a?ao<a?dc<a?d$<a?0:-1:0:-1:fA<a?h_<a?0:-1:0:-1:W<a?bx<a?ak<a?aK<a?a8<a?cS<a?0:-1:0:-1:bQ<a?c3<a?0:-1:0:-1:du<a?dL<a?cR<a?fz<a?0:-1:0:-1:dM<a?M<a?0:-1:0:-1:U<a?f0<a?id<a?ba<a?ab<a?fB<a?fa<a?hX<a?bG<a?cr<a?cY<a?bX<a?dT<a?aP<a?0:-1:0:-1:bk<a?ck<a?0:-1:0:-1:df<a?hi<a?gE<a?bZ<a?0:-1:0:-1:gP<a?dU<a?0:-1:0:-1:g2<a?hd<a?gL<a?e5<a?f5<a?fe<a?0:-1:0:-1:hF<a?hw<a?0:-1:0:-1:dG<a?hI<a?g6<a?gG<a?0:-1:0:-1:fJ<a?eP<a?0:-1:0:-1:fW<a?db<a?aL<a?gs<a?es<a?co<a?dB<a?d3<a?0:-1:0:-1:eK<a?cc<a?0:-1:0:-1:T<a?as<a?fm<a?dn<a?0:-1:0:-1:f_<a?fR<a?0:-1:0:-1:dD<a?bb<a?ea<a?ff<a?de<a?cj<a?0:-1:0:-1:d2<a?eZ<a?0:-1:0:-1:aH<a?d0<a?cF<a?fY<a?0:-1:0:-1:b9<a?dQ<a?0:-1:0:-1:hr<a?go<a?gU<a?gy<a?eX<a?ee<a?gS<a?hs<a?h1<a?hQ<a?0:-1:0:-1:ad<a?eU<a?0:-1:0:-1:dO<a?be<a?eF<a?eo<a?0:-1:0:-1:dh<a?by<a?0:-1:0:-1:hc<a?bL<a?fH<a?aT<a?gR<a?b0<a?0:-1:0:-1:cp<a?el<a?0:-1:0:-1:h0<a?cJ<a?d4<a?dZ<a?0:-1:0:-1:hY<a?ib<a?0:-1:0:-1:hU<a?ht<a?ig<a?a1<a?h7<a?ey<a?hq<a?a4<a?0:-1:0:-1:f4<a?h5<a?0:-1:0:-1:bV<a?hM<a?h2<a?e8<a?0:-1:0:-1:bl<a?dE<a?0:-1:0:-1:eD<a?bD<a?bH<a?hN<a?gQ<a?hm<a?0:-1:0:-1:he<a?bF<a?0:-1:0:-1:bs<a?cb<a?em<a?fr<a?0:-1:0:-1:gg<a?fi<a?0:-1:0:-1:ef<a?c2<a?ct<a?cl<a?c7<a?dI<a?g0<a?g8<a?dj<a?hE<a?hp<a?cW<a?0:-1:0:-1:hv<a?bi<a?0:-1:0:-1:dl<a?cL<a?eT<a?an<a?0:-1:0:-1:gA<a?bw<a?0:-1:0:-1:cA<a?dz<a?fd<a?bc<a?d6<a?bu<a?0:-1:0:-1:fX<a?fN<a?0:-1:0:-1:c$<a?c8<a?aY<a?cK<a?0:-1:0:-1:d7<a?aE<a?0:-1:0:-1:d9<a?gZ<a?bW<a?a6<a?bt<a?h3<a?e4<a?fC<a?0:-1:0:-1:eq<a?aC<a?0:-1:0:-1:aB<a?eV<a?hS<a?gx<a?0:-1:0:-1:gV<a?cs<a?0:-1:0:-1:br<a?cX<a?fu<a?ei<a?eQ<a?gt<a?0:-1:0:-1:fM<a?ed<a?0:-1:0:-1:ai<a?aO<a?bY<a?cP<a?0:-1:0:-1:ge<a?bv<a?0:-1:0:-1:aV<a?eI<a?dy<a?gi<a?bm<a?er<a?aJ<a?ga<a?dV<a?ha<a?0:-1:0:-1:b3<a?aM<a?0:-1:0:-1:b_<a?cO<a?eh<a?fG<a?0:-1:0:-1:cd<a?fg<a?0:-1:0:-1:cZ<a?aa<a?dJ<a?bU<a?bh<a?c1<a?0:-1:0:-1:ay<a?bp<a?0:-1:0:-1:dN<a?fK<a?ce<a?gh<a?0:-1:0:-1:da<a?gw<a?0:-1:0:-1:h$<a?hD<a?fP<a?gf<a?X<a?dk<a?gj<a?dd<a?0:-1:0:-1:ex<a?au<a?0:-1:0:-1:aw<a?eE<a?eS<a?dp<a?0:-1:0:-1:h8<a?aZ<a?0:-1:0:-1:eu<a?eY<a?eG<a?hl<a?g7<a?g9<a?0:-1:0:-1:aW<a?a$<a?0:-1:0:-1:hu<a?hg<a?hf<a?c6<a?0:-1:0:-1:gB<a?gC<a?0:-1:0:-1:G(Pt,a+J|0)-1|0:-1},l0=function(a){return 35<a?ia<a?gH<a?hy<a?-1:dF<a?e9<a?aG<a?bJ<a?eJ<a?fE<a?cy<a?hW<a?0:-1:0:-1:eM<a?dH<a?0:-1:0:-1:cf<a?bo<a?di<a?aQ<a?0:-1:0:-1:$<a?dR<a?0:-1:0:-1:cn<a?eb<a?hB<a?gI<a?ca<a?gq<a?ft<a?dC<a?ag<a?eg<a?d8<a?dw<a?cu<a?cC<a?fk<a?d_<a?0:-1:0:-1:am<a?gl<a?0:-1:0:-1:fc<a?cB<a?gr<a?fF<a?0:-1:0:-1:fQ<a?b7<a?0:-1:0:-1:at<a?ep<a?gb<a?b8<a?ew<a?eN<a?0:-1:0:-1:f8<a?fL<a?0:-1:0:-1:eR<a?aq<a?ez<a?cq<a?0:-1:0:-1:e_<a?ah<a?0:-1:0:-1:fb<a?dW<a?d5<a?a9<a?fn<a?cG<a?fS<a?ar<a?0:-1:0:-1:f7<a?e3<a?0:-1:0:-1:eA<a?ax<a?aD<a?bz<a?0:-1:0:-1:cM<a?a2<a?0:-1:0:-1:bM<a?cU<a?aR<a?fZ<a?bC<a?f2<a?0:-1:0:-1:ac<a?bS<a?0:-1:0:-1:hh<a?b$<a?gz<a?a3<a?0:-1:0:-1:f3<a?h4<a?0:-1:0:-1:b2<a?aU<a?fl<a?eO<a?eC<a?ev<a?dY<a?dK<a?c_<a?cv<a?0:-1:0:-1:b6<a?cw<a?0:-1:0:-1:ap<a?fU<a?eW<a?al<a?0:-1:0:-1:bO<a?ec<a?0:-1:0:-1:a5<a?gu<a?aA<a?fI<a?bB<a?bI<a?0:-1:0:-1:bn<a?cV<a?0:-1:0:-1:a_<a?aj<a?cx<a?bR<a?0:-1:0:-1:fs<a?fh<a?0:-1:0:-1:av<a?dP<a?cg<a?aS<a?aF<a?dt<a?f9<a?gd<a?0:-1:0:-1:e7<a?b5<a?0:-1:0:-1:bq<a?e6<a?fo<a?d1<a?0:-1:0:-1:cE<a?cI<a?0:-1:0:-1:eB<a?ds<a?et<a?bE<a?dv<a?c4<a?0:-1:0:-1:bf<a?cD<a?0:-1:0:-1:ho<a?hP<a?ie<a?c5<a?0:-1:0:-1:gO<a?gF<a?0:-1:0:-1:hR<a?gW<a?hZ<a?hk<a?gm<a?bK<a?dg<a?dX<a?hz<a?gT<a?hV<a?gX<a?0:-1:0:-1:aI<a?hG<a?0:-1:0:-1:fj<a?eH<a?g_<a?g1<a?0:-1:0:-1:dq<a?_<a?0:-1:0:-1:hA<a?h6<a?e0<a?cz<a?fO<a?fT<a?0:-1:0:-1:gD<a?dA<a?0:-1:0:-1:en<a?gK<a?hL<a?af<a?0:-1:0:-1:hC<a?ic<a?0:-1:0:-1:bg<a?f$<a?hO<a?gM<a?f6<a?gN<a?hj<a?g4<a?0:-1:0:-1:h9<a?cN<a?0:-1:0:-1:dm<a?hJ<a?g$<a?hT<a?0:-1:0:-1:ae<a?bN<a?0:-1:0:-1:gJ<a?g5<a?b4<a?ek<a?cT<a?fp<a?0:-1:0:-1:hH<a?f1<a?0:-1:0:-1:cH<a?S<a?az<a?hK<a?0:-1:0:-1:bA<a?dr<a?0:-1:0:-1:ci<a?aN<a?fv<a?fx<a?cm<a?aX<a?dx<a?fw<a?g3<a?hx<a?0:-1:0:-1:bP<a?bT<a?0:-1:0:-1:gn<a?b1<a?bd<a?gc<a?0:-1:0:-1:fy<a?a7<a?0:-1:0:-1:hn<a?e1<a?gv<a?c0<a?gk<a?a0<a?0:-1:0:-1:gp<a?ej<a?0:-1:0:-1:fV<a?fD<a?Y<a?hb<a?0:-1:0:-1:dS<a?fq<a?0:-1:0:-1:ch<a?c9<a?bj<a?Z<a?cQ<a?e$<a?R<a?V<a?0:-1:0:-1:eL<a?e2<a?0:-1:0:-1:gY<a?ao<a?dc<a?d$<a?0:-1:0:-1:fA<a?h_<a?0:-1:0:-1:W<a?bx<a?ak<a?aK<a?a8<a?cS<a?0:-1:0:-1:bQ<a?c3<a?0:-1:0:-1:du<a?dL<a?cR<a?fz<a?0:-1:0:-1:dM<a?M<a?0:-1:0:-1:U<a?f0<a?id<a?ba<a?ab<a?fB<a?fa<a?hX<a?bG<a?cr<a?cY<a?bX<a?dT<a?aP<a?0:-1:0:-1:bk<a?ck<a?0:-1:0:-1:df<a?hi<a?gE<a?bZ<a?0:-1:0:-1:gP<a?dU<a?0:-1:0:-1:g2<a?hd<a?gL<a?e5<a?f5<a?fe<a?0:-1:0:-1:hF<a?hw<a?0:-1:0:-1:dG<a?hI<a?g6<a?gG<a?0:-1:0:-1:fJ<a?eP<a?0:-1:0:-1:fW<a?db<a?aL<a?gs<a?es<a?co<a?dB<a?d3<a?0:-1:0:-1:eK<a?cc<a?0:-1:0:-1:T<a?as<a?fm<a?dn<a?0:-1:0:-1:f_<a?fR<a?0:-1:0:-1:dD<a?bb<a?ea<a?ff<a?de<a?cj<a?0:-1:0:-1:d2<a?eZ<a?0:-1:0:-1:aH<a?d0<a?cF<a?fY<a?0:-1:0:-1:b9<a?dQ<a?0:-1:0:-1:hr<a?go<a?gU<a?gy<a?eX<a?ee<a?gS<a?hs<a?h1<a?hQ<a?0:-1:0:-1:ad<a?eU<a?0:-1:0:-1:dO<a?be<a?eF<a?eo<a?0:-1:0:-1:dh<a?by<a?0:-1:0:-1:hc<a?bL<a?fH<a?aT<a?gR<a?b0<a?0:-1:0:-1:cp<a?el<a?0:-1:0:-1:h0<a?cJ<a?d4<a?dZ<a?0:-1:0:-1:hY<a?ib<a?0:-1:0:-1:hU<a?ht<a?ig<a?a1<a?h7<a?ey<a?hq<a?a4<a?0:-1:0:-1:f4<a?h5<a?0:-1:0:-1:bV<a?hM<a?h2<a?e8<a?0:-1:0:-1:bl<a?dE<a?0:-1:0:-1:eD<a?bD<a?bH<a?hN<a?gQ<a?hm<a?0:-1:0:-1:he<a?bF<a?0:-1:0:-1:bs<a?cb<a?em<a?fr<a?0:-1:0:-1:gg<a?fi<a?0:-1:0:-1:ef<a?c2<a?ct<a?cl<a?c7<a?dI<a?g0<a?g8<a?dj<a?hE<a?hp<a?cW<a?0:-1:0:-1:hv<a?bi<a?0:-1:0:-1:dl<a?cL<a?eT<a?an<a?0:-1:0:-1:gA<a?bw<a?0:-1:0:-1:cA<a?dz<a?fd<a?bc<a?d6<a?bu<a?0:-1:0:-1:fX<a?fN<a?0:-1:0:-1:c$<a?c8<a?aY<a?cK<a?0:-1:0:-1:d7<a?aE<a?0:-1:0:-1:d9<a?gZ<a?bW<a?a6<a?bt<a?h3<a?e4<a?fC<a?0:-1:0:-1:eq<a?aC<a?0:-1:0:-1:aB<a?eV<a?hS<a?gx<a?0:-1:0:-1:gV<a?cs<a?0:-1:0:-1:br<a?cX<a?fu<a?ei<a?eQ<a?gt<a?0:-1:0:-1:fM<a?ed<a?0:-1:0:-1:ai<a?aO<a?bY<a?cP<a?0:-1:0:-1:ge<a?bv<a?0:-1:0:-1:aV<a?eI<a?dy<a?gi<a?bm<a?er<a?aJ<a?ga<a?dV<a?ha<a?0:-1:0:-1:b3<a?aM<a?0:-1:0:-1:b_<a?cO<a?eh<a?fG<a?0:-1:0:-1:cd<a?fg<a?0:-1:0:-1:cZ<a?aa<a?dJ<a?bU<a?bh<a?c1<a?0:-1:0:-1:ay<a?bp<a?0:-1:0:-1:dN<a?fK<a?ce<a?gh<a?0:-1:0:-1:da<a?gw<a?0:-1:0:-1:h$<a?hD<a?fP<a?gf<a?X<a?dk<a?gj<a?dd<a?0:-1:0:-1:ex<a?au<a?0:-1:0:-1:aw<a?eE<a?eS<a?dp<a?0:-1:0:-1:h8<a?aZ<a?0:-1:0:-1:eu<a?eY<a?eG<a?hl<a?g7<a?g9<a?0:-1:0:-1:aW<a?a$<a?0:-1:0:-1:hu<a?hg<a?hf<a?c6<a?0:-1:0:-1:gB<a?gC<a?0:-1:0:-1:G(Pu,a+J|0)-1|0:-1},kc=function(a){return 35<a?ia<a?gH<a?hy<a?-1:dF<a?e9<a?aG<a?bJ<a?eJ<a?fE<a?cy<a?hW<a?0:-1:0:-1:eM<a?dH<a?0:-1:0:-1:cf<a?bo<a?di<a?aQ<a?0:-1:0:-1:$<a?dR<a?0:-1:0:-1:cn<a?eb<a?hB<a?gI<a?ca<a?gq<a?ft<a?dC<a?ag<a?eg<a?d8<a?dw<a?cu<a?cC<a?fk<a?d_<a?0:-1:0:-1:am<a?gl<a?0:-1:0:-1:fc<a?cB<a?gr<a?fF<a?0:-1:0:-1:fQ<a?b7<a?0:-1:0:-1:at<a?ep<a?gb<a?b8<a?ew<a?eN<a?0:-1:0:-1:f8<a?fL<a?0:-1:0:-1:eR<a?aq<a?ez<a?cq<a?0:-1:0:-1:e_<a?ah<a?0:-1:0:-1:fb<a?dW<a?d5<a?a9<a?fn<a?cG<a?fS<a?ar<a?0:-1:0:-1:f7<a?e3<a?0:-1:0:-1:eA<a?ax<a?aD<a?bz<a?0:-1:0:-1:cM<a?a2<a?0:-1:0:-1:bM<a?cU<a?aR<a?fZ<a?bC<a?f2<a?0:-1:0:-1:ac<a?bS<a?0:-1:0:-1:hh<a?b$<a?gz<a?a3<a?0:-1:0:-1:f3<a?h4<a?0:-1:0:-1:b2<a?aU<a?fl<a?eO<a?eC<a?ev<a?dY<a?dK<a?c_<a?cv<a?0:-1:0:-1:b6<a?cw<a?0:-1:0:-1:ap<a?fU<a?eW<a?al<a?0:-1:0:-1:bO<a?ec<a?0:-1:0:-1:a5<a?gu<a?aA<a?fI<a?bB<a?bI<a?0:-1:0:-1:bn<a?cV<a?0:-1:0:-1:a_<a?aj<a?cx<a?bR<a?0:-1:0:-1:fs<a?fh<a?0:-1:0:-1:av<a?dP<a?cg<a?aS<a?aF<a?dt<a?f9<a?gd<a?0:-1:0:-1:e7<a?b5<a?0:-1:0:-1:bq<a?e6<a?fo<a?d1<a?0:-1:0:-1:cE<a?cI<a?0:-1:0:-1:eB<a?ds<a?et<a?bE<a?dv<a?c4<a?0:-1:0:-1:bf<a?cD<a?0:-1:0:-1:ho<a?hP<a?ie<a?c5<a?0:-1:0:-1:gO<a?gF<a?0:-1:0:-1:hR<a?gW<a?hZ<a?hk<a?gm<a?bK<a?dg<a?dX<a?hz<a?gT<a?hV<a?gX<a?0:-1:0:-1:aI<a?hG<a?0:-1:0:-1:fj<a?eH<a?g_<a?g1<a?0:-1:0:-1:dq<a?_<a?0:-1:0:-1:hA<a?h6<a?e0<a?cz<a?fO<a?fT<a?0:-1:0:-1:gD<a?dA<a?0:-1:0:-1:en<a?gK<a?hL<a?af<a?0:-1:0:-1:hC<a?ic<a?0:-1:0:-1:bg<a?f$<a?hO<a?gM<a?f6<a?gN<a?hj<a?g4<a?0:-1:0:-1:h9<a?cN<a?0:-1:0:-1:dm<a?hJ<a?g$<a?hT<a?0:-1:0:-1:ae<a?bN<a?0:-1:0:-1:gJ<a?g5<a?b4<a?ek<a?cT<a?fp<a?0:-1:0:-1:hH<a?f1<a?0:-1:0:-1:cH<a?S<a?az<a?hK<a?0:-1:0:-1:bA<a?dr<a?0:-1:0:-1:ci<a?aN<a?fv<a?fx<a?cm<a?aX<a?dx<a?fw<a?g3<a?hx<a?0:-1:0:-1:bP<a?bT<a?0:-1:0:-1:gn<a?b1<a?bd<a?gc<a?0:-1:0:-1:fy<a?a7<a?0:-1:0:-1:hn<a?e1<a?gv<a?c0<a?gk<a?a0<a?0:-1:0:-1:gp<a?ej<a?0:-1:0:-1:fV<a?fD<a?Y<a?hb<a?0:-1:0:-1:dS<a?fq<a?0:-1:0:-1:ch<a?c9<a?bj<a?Z<a?cQ<a?e$<a?R<a?V<a?0:-1:0:-1:eL<a?e2<a?0:-1:0:-1:gY<a?ao<a?dc<a?d$<a?0:-1:0:-1:fA<a?h_<a?0:-1:0:-1:W<a?bx<a?ak<a?aK<a?a8<a?cS<a?0:-1:0:-1:bQ<a?c3<a?0:-1:0:-1:du<a?dL<a?cR<a?fz<a?0:-1:0:-1:dM<a?M<a?0:-1:0:-1:U<a?f0<a?id<a?ba<a?ab<a?fB<a?fa<a?hX<a?bG<a?cr<a?cY<a?bX<a?dT<a?aP<a?0:-1:0:-1:bk<a?ck<a?0:-1:0:-1:df<a?hi<a?gE<a?bZ<a?0:-1:0:-1:gP<a?dU<a?0:-1:0:-1:g2<a?hd<a?gL<a?e5<a?f5<a?fe<a?0:-1:0:-1:hF<a?hw<a?0:-1:0:-1:dG<a?hI<a?g6<a?gG<a?0:-1:0:-1:fJ<a?eP<a?0:-1:0:-1:fW<a?db<a?aL<a?gs<a?es<a?co<a?dB<a?d3<a?0:-1:0:-1:eK<a?cc<a?0:-1:0:-1:T<a?as<a?fm<a?dn<a?0:-1:0:-1:f_<a?fR<a?0:-1:0:-1:dD<a?bb<a?ea<a?ff<a?de<a?cj<a?0:-1:0:-1:d2<a?eZ<a?0:-1:0:-1:aH<a?d0<a?cF<a?fY<a?0:-1:0:-1:b9<a?dQ<a?0:-1:0:-1:hr<a?go<a?gU<a?gy<a?eX<a?ee<a?gS<a?hs<a?h1<a?hQ<a?0:-1:0:-1:ad<a?eU<a?0:-1:0:-1:dO<a?be<a?eF<a?eo<a?0:-1:0:-1:dh<a?by<a?0:-1:0:-1:hc<a?bL<a?fH<a?aT<a?gR<a?b0<a?0:-1:0:-1:cp<a?el<a?0:-1:0:-1:h0<a?cJ<a?d4<a?dZ<a?0:-1:0:-1:hY<a?ib<a?0:-1:0:-1:hU<a?ht<a?ig<a?a1<a?h7<a?ey<a?hq<a?a4<a?0:-1:0:-1:f4<a?h5<a?0:-1:0:-1:bV<a?hM<a?h2<a?e8<a?0:-1:0:-1:bl<a?dE<a?0:-1:0:-1:eD<a?bD<a?bH<a?hN<a?gQ<a?hm<a?0:-1:0:-1:he<a?bF<a?0:-1:0:-1:bs<a?cb<a?em<a?fr<a?0:-1:0:-1:gg<a?fi<a?0:-1:0:-1:ef<a?c2<a?ct<a?cl<a?c7<a?dI<a?g0<a?g8<a?dj<a?hE<a?hp<a?cW<a?0:-1:0:-1:hv<a?bi<a?0:-1:0:-1:dl<a?cL<a?eT<a?an<a?0:-1:0:-1:gA<a?bw<a?0:-1:0:-1:cA<a?dz<a?fd<a?bc<a?d6<a?bu<a?0:-1:0:-1:fX<a?fN<a?0:-1:0:-1:c$<a?c8<a?aY<a?cK<a?0:-1:0:-1:d7<a?aE<a?0:-1:0:-1:d9<a?gZ<a?bW<a?a6<a?bt<a?h3<a?e4<a?fC<a?0:-1:0:-1:eq<a?aC<a?0:-1:0:-1:aB<a?eV<a?hS<a?gx<a?0:-1:0:-1:gV<a?cs<a?0:-1:0:-1:br<a?cX<a?fu<a?ei<a?eQ<a?gt<a?0:-1:0:-1:fM<a?ed<a?0:-1:0:-1:ai<a?aO<a?bY<a?cP<a?0:-1:0:-1:ge<a?bv<a?0:-1:0:-1:aV<a?eI<a?dy<a?gi<a?bm<a?er<a?aJ<a?ga<a?dV<a?ha<a?0:-1:0:-1:b3<a?aM<a?0:-1:0:-1:b_<a?cO<a?eh<a?fG<a?0:-1:0:-1:cd<a?fg<a?0:-1:0:-1:cZ<a?aa<a?dJ<a?bU<a?bh<a?c1<a?0:-1:0:-1:ay<a?bp<a?0:-1:0:-1:dN<a?fK<a?ce<a?gh<a?0:-1:0:-1:da<a?gw<a?0:-1:0:-1:h$<a?hD<a?fP<a?gf<a?X<a?dk<a?gj<a?dd<a?0:-1:0:-1:ex<a?au<a?0:-1:0:-1:aw<a?eE<a?eS<a?dp<a?0:-1:0:-1:h8<a?aZ<a?0:-1:0:-1:eu<a?eY<a?eG<a?hl<a?g7<a?g9<a?0:-1:0:-1:aW<a?a$<a?0:-1:0:-1:hu<a?hg<a?hf<a?c6<a?0:-1:0:-1:gB<a?gC<a?0:-1:0:-1:G(Pw,a+J|0)-1|0:-1},kx=function(a){return 47<a?jv<a?-1:G(OE,a+jj|0)-1|0:-1},rX=function(a){return 42<a?57<a?-1:G(N2,a+np|0)-1|0:-1},jf=function(a){return 35<a?ia<a?gH<a?hy<a?-1:dF<a?e9<a?aG<a?bJ<a?eJ<a?fE<a?cy<a?hW<a?0:-1:0:-1:eM<a?dH<a?0:-1:0:-1:cf<a?bo<a?di<a?aQ<a?0:-1:0:-1:$<a?dR<a?0:-1:0:-1:cn<a?eb<a?hB<a?gI<a?ca<a?gq<a?ft<a?dC<a?ag<a?eg<a?d8<a?dw<a?cu<a?cC<a?fk<a?d_<a?0:-1:0:-1:am<a?gl<a?0:-1:0:-1:fc<a?cB<a?gr<a?fF<a?0:-1:0:-1:fQ<a?b7<a?0:-1:0:-1:at<a?ep<a?gb<a?b8<a?ew<a?eN<a?0:-1:0:-1:f8<a?fL<a?0:-1:0:-1:eR<a?aq<a?ez<a?cq<a?0:-1:0:-1:e_<a?ah<a?0:-1:0:-1:fb<a?dW<a?d5<a?a9<a?fn<a?cG<a?fS<a?ar<a?0:-1:0:-1:f7<a?e3<a?0:-1:0:-1:eA<a?ax<a?aD<a?bz<a?0:-1:0:-1:cM<a?a2<a?0:-1:0:-1:bM<a?cU<a?aR<a?fZ<a?bC<a?f2<a?0:-1:0:-1:ac<a?bS<a?0:-1:0:-1:hh<a?b$<a?gz<a?a3<a?0:-1:0:-1:f3<a?h4<a?0:-1:0:-1:b2<a?aU<a?fl<a?eO<a?eC<a?ev<a?dY<a?dK<a?c_<a?cv<a?0:-1:0:-1:b6<a?cw<a?0:-1:0:-1:ap<a?fU<a?eW<a?al<a?0:-1:0:-1:bO<a?ec<a?0:-1:0:-1:a5<a?gu<a?aA<a?fI<a?bB<a?bI<a?0:-1:0:-1:bn<a?cV<a?0:-1:0:-1:a_<a?aj<a?cx<a?bR<a?0:-1:0:-1:fs<a?fh<a?0:-1:0:-1:av<a?dP<a?cg<a?aS<a?aF<a?dt<a?f9<a?gd<a?0:-1:0:-1:e7<a?b5<a?0:-1:0:-1:bq<a?e6<a?fo<a?d1<a?0:-1:0:-1:cE<a?cI<a?0:-1:0:-1:eB<a?ds<a?et<a?bE<a?dv<a?c4<a?0:-1:0:-1:bf<a?cD<a?0:-1:0:-1:ho<a?hP<a?ie<a?c5<a?0:-1:0:-1:gO<a?gF<a?0:-1:0:-1:hR<a?gW<a?hZ<a?hk<a?gm<a?bK<a?dg<a?dX<a?hz<a?gT<a?hV<a?gX<a?0:-1:0:-1:aI<a?hG<a?0:-1:0:-1:fj<a?eH<a?g_<a?g1<a?0:-1:0:-1:dq<a?_<a?0:-1:0:-1:hA<a?h6<a?e0<a?cz<a?fO<a?fT<a?0:-1:0:-1:gD<a?dA<a?0:-1:0:-1:en<a?gK<a?hL<a?af<a?0:-1:0:-1:hC<a?ic<a?0:-1:0:-1:bg<a?f$<a?hO<a?gM<a?f6<a?gN<a?hj<a?g4<a?0:-1:0:-1:h9<a?cN<a?0:-1:0:-1:dm<a?hJ<a?g$<a?hT<a?0:-1:0:-1:ae<a?bN<a?0:-1:0:-1:gJ<a?g5<a?b4<a?ek<a?cT<a?fp<a?0:-1:0:-1:hH<a?f1<a?0:-1:0:-1:cH<a?S<a?az<a?hK<a?0:-1:0:-1:bA<a?dr<a?0:-1:0:-1:ci<a?aN<a?fv<a?fx<a?cm<a?aX<a?dx<a?fw<a?g3<a?hx<a?0:-1:0:-1:bP<a?bT<a?0:-1:0:-1:gn<a?b1<a?bd<a?gc<a?0:-1:0:-1:fy<a?a7<a?0:-1:0:-1:hn<a?e1<a?gv<a?c0<a?gk<a?a0<a?0:-1:0:-1:gp<a?ej<a?0:-1:0:-1:fV<a?fD<a?Y<a?hb<a?0:-1:0:-1:dS<a?fq<a?0:-1:0:-1:ch<a?c9<a?bj<a?Z<a?cQ<a?e$<a?R<a?V<a?0:-1:0:-1:eL<a?e2<a?0:-1:0:-1:gY<a?ao<a?dc<a?d$<a?0:-1:0:-1:fA<a?h_<a?0:-1:0:-1:W<a?bx<a?ak<a?aK<a?a8<a?cS<a?0:-1:0:-1:bQ<a?c3<a?0:-1:0:-1:du<a?dL<a?cR<a?fz<a?0:-1:0:-1:dM<a?M<a?0:-1:0:-1:U<a?f0<a?id<a?ba<a?ab<a?fB<a?fa<a?hX<a?bG<a?cr<a?cY<a?bX<a?dT<a?aP<a?0:-1:0:-1:bk<a?ck<a?0:-1:0:-1:df<a?hi<a?gE<a?bZ<a?0:-1:0:-1:gP<a?dU<a?0:-1:0:-1:g2<a?hd<a?gL<a?e5<a?f5<a?fe<a?0:-1:0:-1:hF<a?hw<a?0:-1:0:-1:dG<a?hI<a?g6<a?gG<a?0:-1:0:-1:fJ<a?eP<a?0:-1:0:-1:fW<a?db<a?aL<a?gs<a?es<a?co<a?dB<a?d3<a?0:-1:0:-1:eK<a?cc<a?0:-1:0:-1:T<a?as<a?fm<a?dn<a?0:-1:0:-1:f_<a?fR<a?0:-1:0:-1:dD<a?bb<a?ea<a?ff<a?de<a?cj<a?0:-1:0:-1:d2<a?eZ<a?0:-1:0:-1:aH<a?d0<a?cF<a?fY<a?0:-1:0:-1:b9<a?dQ<a?0:-1:0:-1:hr<a?go<a?gU<a?gy<a?eX<a?ee<a?gS<a?hs<a?h1<a?hQ<a?0:-1:0:-1:ad<a?eU<a?0:-1:0:-1:dO<a?be<a?eF<a?eo<a?0:-1:0:-1:dh<a?by<a?0:-1:0:-1:hc<a?bL<a?fH<a?aT<a?gR<a?b0<a?0:-1:0:-1:cp<a?el<a?0:-1:0:-1:h0<a?cJ<a?d4<a?dZ<a?0:-1:0:-1:hY<a?ib<a?0:-1:0:-1:hU<a?ht<a?ig<a?a1<a?h7<a?ey<a?hq<a?a4<a?0:-1:0:-1:f4<a?h5<a?0:-1:0:-1:bV<a?hM<a?h2<a?e8<a?0:-1:0:-1:bl<a?dE<a?0:-1:0:-1:eD<a?bD<a?bH<a?hN<a?gQ<a?hm<a?0:-1:0:-1:he<a?bF<a?0:-1:0:-1:bs<a?cb<a?em<a?fr<a?0:-1:0:-1:gg<a?fi<a?0:-1:0:-1:ef<a?c2<a?ct<a?cl<a?c7<a?dI<a?g0<a?g8<a?dj<a?hE<a?hp<a?cW<a?0:-1:0:-1:hv<a?bi<a?0:-1:0:-1:dl<a?cL<a?eT<a?an<a?0:-1:0:-1:gA<a?bw<a?0:-1:0:-1:cA<a?dz<a?fd<a?bc<a?d6<a?bu<a?0:-1:0:-1:fX<a?fN<a?0:-1:0:-1:c$<a?c8<a?aY<a?cK<a?0:-1:0:-1:d7<a?aE<a?0:-1:0:-1:d9<a?gZ<a?bW<a?a6<a?bt<a?h3<a?e4<a?fC<a?0:-1:0:-1:eq<a?aC<a?0:-1:0:-1:aB<a?eV<a?hS<a?gx<a?0:-1:0:-1:gV<a?cs<a?0:-1:0:-1:br<a?cX<a?fu<a?ei<a?eQ<a?gt<a?0:-1:0:-1:fM<a?ed<a?0:-1:0:-1:ai<a?aO<a?bY<a?cP<a?0:-1:0:-1:ge<a?bv<a?0:-1:0:-1:aV<a?eI<a?dy<a?gi<a?bm<a?er<a?aJ<a?ga<a?dV<a?ha<a?0:-1:0:-1:b3<a?aM<a?0:-1:0:-1:b_<a?cO<a?eh<a?fG<a?0:-1:0:-1:cd<a?fg<a?0:-1:0:-1:cZ<a?aa<a?dJ<a?bU<a?bh<a?c1<a?0:-1:0:-1:ay<a?bp<a?0:-1:0:-1:dN<a?fK<a?ce<a?gh<a?0:-1:0:-1:da<a?gw<a?0:-1:0:-1:h$<a?hD<a?fP<a?gf<a?X<a?dk<a?gj<a?dd<a?0:-1:0:-1:ex<a?au<a?0:-1:0:-1:aw<a?eE<a?eS<a?dp<a?0:-1:0:-1:h8<a?aZ<a?0:-1:0:-1:eu<a?eY<a?eG<a?hl<a?g7<a?g9<a?0:-1:0:-1:aW<a?a$<a?0:-1:0:-1:hu<a?hg<a?hf<a?c6<a?0:-1:0:-1:gB<a?gC<a?0:-1:0:-1:G(Pz,a+J|0)-1|0:-1},lk=function(a){return 45<a?95<a?-1:G(N6,a+kZ|0)-1|0:-1},oT=function(a){return 35<a?ia<a?gH<a?hy<a?-1:dF<a?e9<a?aG<a?bJ<a?eJ<a?fE<a?cy<a?hW<a?0:-1:0:-1:eM<a?dH<a?0:-1:0:-1:cf<a?bo<a?di<a?aQ<a?0:-1:0:-1:$<a?dR<a?0:-1:0:-1:cn<a?eb<a?hB<a?gI<a?ca<a?gq<a?ft<a?dC<a?ag<a?eg<a?d8<a?dw<a?cu<a?cC<a?fk<a?d_<a?0:-1:0:-1:am<a?gl<a?0:-1:0:-1:fc<a?cB<a?gr<a?fF<a?0:-1:0:-1:fQ<a?b7<a?0:-1:0:-1:at<a?ep<a?gb<a?b8<a?ew<a?eN<a?0:-1:0:-1:f8<a?fL<a?0:-1:0:-1:eR<a?aq<a?ez<a?cq<a?0:-1:0:-1:e_<a?ah<a?0:-1:0:-1:fb<a?dW<a?d5<a?a9<a?fn<a?cG<a?fS<a?ar<a?0:-1:0:-1:f7<a?e3<a?0:-1:0:-1:eA<a?ax<a?aD<a?bz<a?0:-1:0:-1:cM<a?a2<a?0:-1:0:-1:bM<a?cU<a?aR<a?fZ<a?bC<a?f2<a?0:-1:0:-1:ac<a?bS<a?0:-1:0:-1:hh<a?b$<a?gz<a?a3<a?0:-1:0:-1:f3<a?h4<a?0:-1:0:-1:b2<a?aU<a?fl<a?eO<a?eC<a?ev<a?dY<a?dK<a?c_<a?cv<a?0:-1:0:-1:b6<a?cw<a?0:-1:0:-1:ap<a?fU<a?eW<a?al<a?0:-1:0:-1:bO<a?ec<a?0:-1:0:-1:a5<a?gu<a?aA<a?fI<a?bB<a?bI<a?0:-1:0:-1:bn<a?cV<a?0:-1:0:-1:a_<a?aj<a?cx<a?bR<a?0:-1:0:-1:fs<a?fh<a?0:-1:0:-1:av<a?dP<a?cg<a?aS<a?aF<a?dt<a?f9<a?gd<a?0:-1:0:-1:e7<a?b5<a?0:-1:0:-1:bq<a?e6<a?fo<a?d1<a?0:-1:0:-1:cE<a?cI<a?0:-1:0:-1:eB<a?ds<a?et<a?bE<a?dv<a?c4<a?0:-1:0:-1:bf<a?cD<a?0:-1:0:-1:ho<a?hP<a?ie<a?c5<a?0:-1:0:-1:gO<a?gF<a?0:-1:0:-1:hR<a?gW<a?hZ<a?hk<a?gm<a?bK<a?dg<a?dX<a?hz<a?gT<a?hV<a?gX<a?0:-1:0:-1:aI<a?hG<a?0:-1:0:-1:fj<a?eH<a?g_<a?g1<a?0:-1:0:-1:dq<a?_<a?0:-1:0:-1:hA<a?h6<a?e0<a?cz<a?fO<a?fT<a?0:-1:0:-1:gD<a?dA<a?0:-1:0:-1:en<a?gK<a?hL<a?af<a?0:-1:0:-1:hC<a?ic<a?0:-1:0:-1:bg<a?f$<a?hO<a?gM<a?f6<a?gN<a?hj<a?g4<a?0:-1:0:-1:h9<a?cN<a?0:-1:0:-1:dm<a?hJ<a?g$<a?hT<a?0:-1:0:-1:ae<a?bN<a?0:-1:0:-1:gJ<a?g5<a?b4<a?ek<a?cT<a?fp<a?0:-1:0:-1:hH<a?f1<a?0:-1:0:-1:cH<a?S<a?az<a?hK<a?0:-1:0:-1:bA<a?dr<a?0:-1:0:-1:ci<a?aN<a?fv<a?fx<a?cm<a?aX<a?dx<a?fw<a?g3<a?hx<a?0:-1:0:-1:bP<a?bT<a?0:-1:0:-1:gn<a?b1<a?bd<a?gc<a?0:-1:0:-1:fy<a?a7<a?0:-1:0:-1:hn<a?e1<a?gv<a?c0<a?gk<a?a0<a?0:-1:0:-1:gp<a?ej<a?0:-1:0:-1:fV<a?fD<a?Y<a?hb<a?0:-1:0:-1:dS<a?fq<a?0:-1:0:-1:ch<a?c9<a?bj<a?Z<a?cQ<a?e$<a?R<a?V<a?0:-1:0:-1:eL<a?e2<a?0:-1:0:-1:gY<a?ao<a?dc<a?d$<a?0:-1:0:-1:fA<a?h_<a?0:-1:0:-1:W<a?bx<a?ak<a?aK<a?a8<a?cS<a?0:-1:0:-1:bQ<a?c3<a?0:-1:0:-1:du<a?dL<a?cR<a?fz<a?0:-1:0:-1:dM<a?M<a?0:-1:0:-1:U<a?f0<a?id<a?ba<a?ab<a?fB<a?fa<a?hX<a?bG<a?cr<a?cY<a?bX<a?dT<a?aP<a?0:-1:0:-1:bk<a?ck<a?0:-1:0:-1:df<a?hi<a?gE<a?bZ<a?0:-1:0:-1:gP<a?dU<a?0:-1:0:-1:g2<a?hd<a?gL<a?e5<a?f5<a?fe<a?0:-1:0:-1:hF<a?hw<a?0:-1:0:-1:dG<a?hI<a?g6<a?gG<a?0:-1:0:-1:fJ<a?eP<a?0:-1:0:-1:fW<a?db<a?aL<a?gs<a?es<a?co<a?dB<a?d3<a?0:-1:0:-1:eK<a?cc<a?0:-1:0:-1:T<a?as<a?fm<a?dn<a?0:-1:0:-1:f_<a?fR<a?0:-1:0:-1:dD<a?bb<a?ea<a?ff<a?de<a?cj<a?0:-1:0:-1:d2<a?eZ<a?0:-1:0:-1:aH<a?d0<a?cF<a?fY<a?0:-1:0:-1:b9<a?dQ<a?0:-1:0:-1:hr<a?go<a?gU<a?gy<a?eX<a?ee<a?gS<a?hs<a?h1<a?hQ<a?0:-1:0:-1:ad<a?eU<a?0:-1:0:-1:dO<a?be<a?eF<a?eo<a?0:-1:0:-1:dh<a?by<a?0:-1:0:-1:hc<a?bL<a?fH<a?aT<a?gR<a?b0<a?0:-1:0:-1:cp<a?el<a?0:-1:0:-1:h0<a?cJ<a?d4<a?dZ<a?0:-1:0:-1:hY<a?ib<a?0:-1:0:-1:hU<a?ht<a?ig<a?a1<a?h7<a?ey<a?hq<a?a4<a?0:-1:0:-1:f4<a?h5<a?0:-1:0:-1:bV<a?hM<a?h2<a?e8<a?0:-1:0:-1:bl<a?dE<a?0:-1:0:-1:eD<a?bD<a?bH<a?hN<a?gQ<a?hm<a?0:-1:0:-1:he<a?bF<a?0:-1:0:-1:bs<a?cb<a?em<a?fr<a?0:-1:0:-1:gg<a?fi<a?0:-1:0:-1:ef<a?c2<a?ct<a?cl<a?c7<a?dI<a?g0<a?g8<a?dj<a?hE<a?hp<a?cW<a?0:-1:0:-1:hv<a?bi<a?0:-1:0:-1:dl<a?cL<a?eT<a?an<a?0:-1:0:-1:gA<a?bw<a?0:-1:0:-1:cA<a?dz<a?fd<a?bc<a?d6<a?bu<a?0:-1:0:-1:fX<a?fN<a?0:-1:0:-1:c$<a?c8<a?aY<a?cK<a?0:-1:0:-1:d7<a?aE<a?0:-1:0:-1:d9<a?gZ<a?bW<a?a6<a?bt<a?h3<a?e4<a?fC<a?0:-1:0:-1:eq<a?aC<a?0:-1:0:-1:aB<a?eV<a?hS<a?gx<a?0:-1:0:-1:gV<a?cs<a?0:-1:0:-1:br<a?cX<a?fu<a?ei<a?eQ<a?gt<a?0:-1:0:-1:fM<a?ed<a?0:-1:0:-1:ai<a?aO<a?bY<a?cP<a?0:-1:0:-1:ge<a?bv<a?0:-1:0:-1:aV<a?eI<a?dy<a?gi<a?bm<a?er<a?aJ<a?ga<a?dV<a?ha<a?0:-1:0:-1:b3<a?aM<a?0:-1:0:-1:b_<a?cO<a?eh<a?fG<a?0:-1:0:-1:cd<a?fg<a?0:-1:0:-1:cZ<a?aa<a?dJ<a?bU<a?bh<a?c1<a?0:-1:0:-1:ay<a?bp<a?0:-1:0:-1:dN<a?fK<a?ce<a?gh<a?0:-1:0:-1:da<a?gw<a?0:-1:0:-1:h$<a?hD<a?fP<a?gf<a?X<a?dk<a?gj<a?dd<a?0:-1:0:-1:ex<a?au<a?0:-1:0:-1:aw<a?eE<a?eS<a?dp<a?0:-1:0:-1:h8<a?aZ<a?0:-1:0:-1:eu<a?eY<a?eG<a?hl<a?g7<a?g9<a?0:-1:0:-1:aW<a?a$<a?0:-1:0:-1:hu<a?hg<a?hf<a?c6<a?0:-1:0:-1:gB<a?gC<a?0:-1:0:-1:G(PC,a+J|0)-1|0:-1},jQ=function(a){return mi<a?uv<a?-1:0:-1},rY=function(a){return 35<a?ia<a?gH<a?hy<a?-1:dF<a?e9<a?aG<a?bJ<a?eJ<a?fE<a?cy<a?hW<a?0:-1:0:-1:eM<a?dH<a?0:-1:0:-1:cf<a?bo<a?di<a?aQ<a?0:-1:0:-1:$<a?dR<a?0:-1:0:-1:cn<a?eb<a?hB<a?gI<a?ca<a?gq<a?ft<a?dC<a?ag<a?eg<a?d8<a?dw<a?cu<a?cC<a?fk<a?d_<a?0:-1:0:-1:am<a?gl<a?0:-1:0:-1:fc<a?cB<a?gr<a?fF<a?0:-1:0:-1:fQ<a?b7<a?0:-1:0:-1:at<a?ep<a?gb<a?b8<a?ew<a?eN<a?0:-1:0:-1:f8<a?fL<a?0:-1:0:-1:eR<a?aq<a?ez<a?cq<a?0:-1:0:-1:e_<a?ah<a?0:-1:0:-1:fb<a?dW<a?d5<a?a9<a?fn<a?cG<a?fS<a?ar<a?0:-1:0:-1:f7<a?e3<a?0:-1:0:-1:eA<a?ax<a?aD<a?bz<a?0:-1:0:-1:cM<a?a2<a?0:-1:0:-1:bM<a?cU<a?aR<a?fZ<a?bC<a?f2<a?0:-1:0:-1:ac<a?bS<a?0:-1:0:-1:hh<a?b$<a?gz<a?a3<a?0:-1:0:-1:f3<a?h4<a?0:-1:0:-1:b2<a?aU<a?fl<a?eO<a?eC<a?ev<a?dY<a?dK<a?c_<a?cv<a?0:-1:0:-1:b6<a?cw<a?0:-1:0:-1:ap<a?fU<a?eW<a?al<a?0:-1:0:-1:bO<a?ec<a?0:-1:0:-1:a5<a?gu<a?aA<a?fI<a?bB<a?bI<a?0:-1:0:-1:bn<a?cV<a?0:-1:0:-1:a_<a?aj<a?cx<a?bR<a?0:-1:0:-1:fs<a?fh<a?0:-1:0:-1:av<a?dP<a?cg<a?aS<a?aF<a?dt<a?f9<a?gd<a?0:-1:0:-1:e7<a?b5<a?0:-1:0:-1:bq<a?e6<a?fo<a?d1<a?0:-1:0:-1:cE<a?cI<a?0:-1:0:-1:eB<a?ds<a?et<a?bE<a?dv<a?c4<a?0:-1:0:-1:bf<a?cD<a?0:-1:0:-1:ho<a?hP<a?ie<a?c5<a?0:-1:0:-1:gO<a?gF<a?0:-1:0:-1:hR<a?gW<a?hZ<a?hk<a?gm<a?bK<a?dg<a?dX<a?hz<a?gT<a?hV<a?gX<a?0:-1:0:-1:aI<a?hG<a?0:-1:0:-1:fj<a?eH<a?g_<a?g1<a?0:-1:0:-1:dq<a?_<a?0:-1:0:-1:hA<a?h6<a?e0<a?cz<a?fO<a?fT<a?0:-1:0:-1:gD<a?dA<a?0:-1:0:-1:en<a?gK<a?hL<a?af<a?0:-1:0:-1:hC<a?ic<a?0:-1:0:-1:bg<a?f$<a?hO<a?gM<a?f6<a?gN<a?hj<a?g4<a?0:-1:0:-1:h9<a?cN<a?0:-1:0:-1:dm<a?hJ<a?g$<a?hT<a?0:-1:0:-1:ae<a?bN<a?0:-1:0:-1:gJ<a?g5<a?b4<a?ek<a?cT<a?fp<a?0:-1:0:-1:hH<a?f1<a?0:-1:0:-1:cH<a?S<a?az<a?hK<a?0:-1:0:-1:bA<a?dr<a?0:-1:0:-1:ci<a?aN<a?fv<a?fx<a?cm<a?aX<a?dx<a?fw<a?g3<a?hx<a?0:-1:0:-1:bP<a?bT<a?0:-1:0:-1:gn<a?b1<a?bd<a?gc<a?0:-1:0:-1:fy<a?a7<a?0:-1:0:-1:hn<a?e1<a?gv<a?c0<a?gk<a?a0<a?0:-1:0:-1:gp<a?ej<a?0:-1:0:-1:fV<a?fD<a?Y<a?hb<a?0:-1:0:-1:dS<a?fq<a?0:-1:0:-1:ch<a?c9<a?bj<a?Z<a?cQ<a?e$<a?R<a?V<a?0:-1:0:-1:eL<a?e2<a?0:-1:0:-1:gY<a?ao<a?dc<a?d$<a?0:-1:0:-1:fA<a?h_<a?0:-1:0:-1:W<a?bx<a?ak<a?aK<a?a8<a?cS<a?0:-1:0:-1:bQ<a?c3<a?0:-1:0:-1:du<a?dL<a?cR<a?fz<a?0:-1:0:-1:dM<a?M<a?0:-1:0:-1:U<a?f0<a?id<a?ba<a?ab<a?fB<a?fa<a?hX<a?bG<a?cr<a?cY<a?bX<a?dT<a?aP<a?0:-1:0:-1:bk<a?ck<a?0:-1:0:-1:df<a?hi<a?gE<a?bZ<a?0:-1:0:-1:gP<a?dU<a?0:-1:0:-1:g2<a?hd<a?gL<a?e5<a?f5<a?fe<a?0:-1:0:-1:hF<a?hw<a?0:-1:0:-1:dG<a?hI<a?g6<a?gG<a?0:-1:0:-1:fJ<a?eP<a?0:-1:0:-1:fW<a?db<a?aL<a?gs<a?es<a?co<a?dB<a?d3<a?0:-1:0:-1:eK<a?cc<a?0:-1:0:-1:T<a?as<a?fm<a?dn<a?0:-1:0:-1:f_<a?fR<a?0:-1:0:-1:dD<a?bb<a?ea<a?ff<a?de<a?cj<a?0:-1:0:-1:d2<a?eZ<a?0:-1:0:-1:aH<a?d0<a?cF<a?fY<a?0:-1:0:-1:b9<a?dQ<a?0:-1:0:-1:hr<a?go<a?gU<a?gy<a?eX<a?ee<a?gS<a?hs<a?h1<a?hQ<a?0:-1:0:-1:ad<a?eU<a?0:-1:0:-1:dO<a?be<a?eF<a?eo<a?0:-1:0:-1:dh<a?by<a?0:-1:0:-1:hc<a?bL<a?fH<a?aT<a?gR<a?b0<a?0:-1:0:-1:cp<a?el<a?0:-1:0:-1:h0<a?cJ<a?d4<a?dZ<a?0:-1:0:-1:hY<a?ib<a?0:-1:0:-1:hU<a?ht<a?ig<a?a1<a?h7<a?ey<a?hq<a?a4<a?0:-1:0:-1:f4<a?h5<a?0:-1:0:-1:bV<a?hM<a?h2<a?e8<a?0:-1:0:-1:bl<a?dE<a?0:-1:0:-1:eD<a?bD<a?bH<a?hN<a?gQ<a?hm<a?0:-1:0:-1:he<a?bF<a?0:-1:0:-1:bs<a?cb<a?em<a?fr<a?0:-1:0:-1:gg<a?fi<a?0:-1:0:-1:ef<a?c2<a?ct<a?cl<a?c7<a?dI<a?g0<a?g8<a?dj<a?hE<a?hp<a?cW<a?0:-1:0:-1:hv<a?bi<a?0:-1:0:-1:dl<a?cL<a?eT<a?an<a?0:-1:0:-1:gA<a?bw<a?0:-1:0:-1:cA<a?dz<a?fd<a?bc<a?d6<a?bu<a?0:-1:0:-1:fX<a?fN<a?0:-1:0:-1:c$<a?c8<a?aY<a?cK<a?0:-1:0:-1:d7<a?aE<a?0:-1:0:-1:d9<a?gZ<a?bW<a?a6<a?bt<a?h3<a?e4<a?fC<a?0:-1:0:-1:eq<a?aC<a?0:-1:0:-1:aB<a?eV<a?hS<a?gx<a?0:-1:0:-1:gV<a?cs<a?0:-1:0:-1:br<a?cX<a?fu<a?ei<a?eQ<a?gt<a?0:-1:0:-1:fM<a?ed<a?0:-1:0:-1:ai<a?aO<a?bY<a?cP<a?0:-1:0:-1:ge<a?bv<a?0:-1:0:-1:aV<a?eI<a?dy<a?gi<a?bm<a?er<a?aJ<a?ga<a?dV<a?ha<a?0:-1:0:-1:b3<a?aM<a?0:-1:0:-1:b_<a?cO<a?eh<a?fG<a?0:-1:0:-1:cd<a?fg<a?0:-1:0:-1:cZ<a?aa<a?dJ<a?bU<a?bh<a?c1<a?0:-1:0:-1:ay<a?bp<a?0:-1:0:-1:dN<a?fK<a?ce<a?gh<a?0:-1:0:-1:da<a?gw<a?0:-1:0:-1:h$<a?hD<a?fP<a?gf<a?X<a?dk<a?gj<a?dd<a?0:-1:0:-1:ex<a?au<a?0:-1:0:-1:aw<a?eE<a?eS<a?dp<a?0:-1:0:-1:h8<a?aZ<a?0:-1:0:-1:eu<a?eY<a?eG<a?hl<a?g7<a?g9<a?0:-1:0:-1:aW<a?a$<a?0:-1:0:-1:hu<a?hg<a?hf<a?c6<a?0:-1:0:-1:gB<a?gC<a?0:-1:0:-1:G(PD,a+J|0)-1|0:-1},rZ=function(a){return 46<a?47<a?-1:0:-1},r0=function(a){return 57<a?58<a?-1:0:-1},iv=function(a){return 35<a?iu<a?-1:G(Om,a+J|0)-1|0:-1},oU=function(a,c,b){var
d=b-rr(a)|0,e=[0,oL(a),d,b],f=c-rr(a)|0,g=[0,oL(a),f,c];return[0,a[1],g,e]},O=function(b,a){var
c=mB(a);return oU(b,c,mC(a))},ll=function(f){var
b=f[2],a=f[1],c=a[6],d=c!==oK?[0,a[1],a[2],a[3],a[4],a[5],oK]:a;if(typeof
b==="number")var
e=0;else
switch(b[0]){case
1:case
2:case
4:case
7:var
g=b[1][1],e=1;break;default:var
e=0}if(!e)var
g=O(d,d[2]);var
h=n(c[2]);return[0,d,[0,b,g,n(c[1]),h]]},jD=function(a,c,b){return[0,a[1],a[2],a[3],a[4],a[5],[0,[0,[0,c,b],a[6][1]],a[6][2]]]},r1=function(c,b,a){return jD(c,b,[1,a])},jE=function(b,a){return jD(b,a,PM)},jr=function(a,b){var
c=mC(b),d=[0,oL(a)+1|0,c];return[0,a[1],a[2],d,a[4],a[5],a[6]]},lm=[iz,PN,i4(0)],ky=function(a){var
b=a[5];if(b)return[0,a[1],a[2],a[3],a[4],b[2]];throw lm},PO=function(b){var
a=[0,0];qE(function(b){a[1]=[0,b,a[1]];return 0},b);return[0,0,0,0,0,n(a[1])]},PP=function(a){var
c=a[5];if(c){var
d=c[1]+np|0;if(!(2<d>>>0))switch(d){case
0:return ky(a);case
1:break;default:var
b=ky(a);return[0,1,b[2],b[3],b[4],b[5]]}}return a},PQ=function(b){var
a=b[5];if(a)if(48===a[1]){var
c=a[2];if(c){var
d=c[1],e=88===d?0:kB===d?0:1;if(!e)return ky(ky(b))}}throw lm},PR=function(a){var
b=vr(PS,lP(qz,a[5]));try{var
c=jJ(b)}catch(a){a=iO(a);if(a[1]===j9)throw lm;throw a}return[0,a[1],a[2],c,a[4],0]},PT=function(l){var
a=l;for(;;){var
j=a[5];if(j){var
b=j[1];if(81<=b){if(95===b){var
a=ky(a);continue}var
k=pG===b?1:0}else{if(46===b){if(0===a[4]){var
c=ky(a),a=[0,c[1],c[2],c[3],PU,c[5]];continue}throw lm}var
k=80<=b?1:0}if(k)return PR(ky(a));if(48<=b)if(57<b)var
g=0;else
var
d=48,g=1;else
var
g=0;if(!g){if(65<=b)if(70<b)var
h=0;else
var
d=55,h=1;else
var
h=0;if(!h){if(97<=b)if(jh<b)var
i=0;else
var
d=87,i=1;else
var
i=0;if(!i)throw lm}}var
e=a[4],m=b-d|0,n=e?[0,e[1]-4|0]:e,o=(a[2]<<4)+m|0,f=ky(a),a=[0,f[1],o,f[3],n,f[5]];continue}return a}},PV=function(a){if(0===a[5]){var
b=a[2],c=a[4],d=c?a[3]+c[1]|0:a[3],e=0===d?b:Math.pow(b,d);return a[1]?-e:e}throw[0,w,PW]},r2=function(b){try{var
a=ac5(b);return a}catch(a){a=iO(a);if(mz)try{var
c=PV(PT(PQ(PP(PO(b)))));return c}catch(b){b=iO(b);if(b===lm)throw a;throw b}throw a}},js=function(a,f,e,d,c){var
g=I(f,e),b=iw(d),h=c?[0,b]:[1,b];return[0,a[1],a[2],a[3],a[4],a[5],[0,a[6][1],[0,[0,g,h],a[6][2]]]]},jF=function(e,d){if(45===G(d,0))var
f=1,a=jC(d,1,ij(d)-1|0);else
var
f=0,a=d;if(0===e)var
c=0;else
switch(e-1|0){case
0:try{var
k=on(om(m(PZ,a))),g=1}catch(d){d=iO(d);if(d[1]!==j9)throw d;var
b=N(m(PY,a)),c=1,g=0}if(g)var
b=k,c=1;break;case
2:try{var
l=r2(a),h=1}catch(d){d=iO(d);if(d[1]!==j9)throw d;var
b=N(m(P0,a)),c=1,h=0}if(h)var
b=l,c=1;break;default:var
c=0}if(!c)try{var
j=on(om(a)),b=j}catch(c){c=iO(c);if(c[1]!==j9)throw c;var
b=N(m(PX,a))}var
i=f?-b:b;return[9,e,i,d]},r3=function(f,k,j){var
d=q6([0,j]);io(d);var
a=b(d),g=ia<a?hh<a?cf<a?eJ<a?hy<a?0:cy<a?hW<a?2:0:fE<a?1:0:aG<a?eM<a?dH<a?1:0:bJ<a?1:0:di<a?aQ<a?1:0:bo<a?1:0:eR<a?fc<a?cu<a?dF<a?$<a?dR<a?1:0:e9<a?1:0:fk<a?d_<a?1:0:cC<a?1:0:d8<a?am<a?gl<a?1:0:dw<a?1:0:gr<a?fF<a?1:0:cB<a?1:0:gb<a?ag<a?fQ<a?b7<a?1:0:eg<a?1:0:ew<a?eN<a?1:0:b8<a?1:0:at<a?f8<a?fL<a?1:0:ep<a?1:0:ez<a?cq<a?1:0:aq<a?1:0:eA<a?fn<a?ft<a?e_<a?ah<a?1:0:dC<a?1:0:fS<a?ar<a?1:0:cG<a?1:0:d5<a?f7<a?e3<a?1:0:a9<a?1:0:aD<a?bz<a?1:0:ax<a?1:0:aR<a?fb<a?cM<a?a2<a?1:0:dW<a?1:0:bC<a?f2<a?1:0:fZ<a?1:0:bM<a?ac<a?bS<a?1:0:cU<a?1:0:gz<a?a3<a?1:0:b$<a?1:0:f_<a?bg<a?ho<a?a_<a?ap<a?dY<a?ca<a?f3<a?h4<a?2:0:gq<a?1:0:c_<a?cv<a?1:0:dK<a?1:0:eC<a?b6<a?cw<a?1:0:ev<a?1:0:eW<a?al<a?1:0:fU<a?1:0:aA<a?fl<a?bO<a?ec<a?1:0:eO<a?1:0:bB<a?bI<a?1:0:fI<a?1:0:a5<a?bn<a?cV<a?1:0:gu<a?1:0:cx<a?bR<a?1:0:aj<a?1:0:bq<a?aF<a?b2<a?fs<a?fh<a?1:0:aU<a?1:0:f9<a?gd<a?1:0:dt<a?1:0:cg<a?e7<a?b5<a?1:0:aS<a?1:0:fo<a?d1<a?1:0:e6<a?1:0:et<a?av<a?cE<a?cI<a?1:0:dP<a?1:0:dv<a?c4<a?1:0:bE<a?1:0:eB<a?bf<a?cD<a?1:0:ds<a?1:0:ie<a?c5<a?1:0:hP<a?2:0:af<a?nU<a?hz<a?hB<a?gO<a?gF<a?2:0:gI<a?2:0:hV<a?gX<a?2:0:gT<a?2:0:dg<a?aI<a?hG<a?2:0:dX<a?1:0:g1<a?n3<a?1:2:g_<a?0:2:fO<a?dq<a?fj<a?eH<a?1:0:_<a?1:0:gm<a?bK<a?1:0:fT<a?1:0:gD<a?e0<a?cz<a?1:0:dA<a?1:0:hA<a?h6<a?2:0:nv<a?2:1:f6<a?hC<a?m5<a?gK<a?hL<a?0:2:en<a?0:1:oc<a?nP<a?2:1:ic<a?2:0:oe<a?hZ<a?hk<a?2:0:nn<a?2:1:hj<a?g4<a?2:0:gN<a?2:0:g$<a?od<a?h9<a?cN<a?1:0:nE<a?2:1:hO<a?gM<a?2:0:hT<a?2:0:dm<a?nq<a?nY<a?2:1:hJ<a?2:0:ae<a?bN<a?1:0:f$<a?1:0:fA<a?fy<a?gW<a?gJ<a?b4<a?cT<a?fp<a?1:0:ek<a?1:0:hH<a?f1<a?1:0:g5<a?2:0:cH<a?az<a?hK<a?2:0:S<a?1:0:bA<a?dr<a?1:0:nw<a?1:2:bP<a?nG<a?hx<a?hR<a?0:2:g3<a?0:2:dx<a?fw<a?1:0:bT<a?1:0:bd<a?cm<a?aX<a?1:0:gc<a?1:0:gn<a?b1<a?1:0:a7<a?1:0:dS<a?gp<a?gk<a?fv<a?fx<a?1:0:a0<a?1:0:gv<a?c0<a?1:0:ej<a?1:0:Y<a?hn<a?e1<a?1:0:hb<a?2:0:fV<a?fD<a?1:0:fq<a?1:0:eL<a?R<a?ci<a?aN<a?1:0:V<a?1:0:cQ<a?e$<a?1:0:e2<a?1:0:dc<a?bj<a?Z<a?1:0:d$<a?1:0:gY<a?ao<a?1:0:h_<a?2:0:gP<a?dM<a?bQ<a?a8<a?ch<a?c9<a?1:0:cS<a?1:0:ak<a?aK<a?1:0:c3<a?1:0:cR<a?W<a?bx<a?1:0:fz<a?1:0:du<a?dL<a?1:0:M<a?1:0:bk<a?dT<a?cn<a?eb<a?1:0:aP<a?1:0:cY<a?bX<a?1:0:ck<a?1:0:gE<a?bG<a?cr<a?1:0:bZ<a?1:0:df<a?hi<a?2:0:dU<a?1:0:fJ<a?hF<a?f5<a?fa<a?hX<a?2:0:fe<a?1:0:gL<a?e5<a?1:0:hw<a?2:0:g6<a?g2<a?hd<a?2:0:gG<a?2:0:dG<a?hI<a?2:0:eP<a?1:0:eK<a?dB<a?ab<a?fB<a?1:0:d3<a?1:0:es<a?co<a?1:0:cc<a?1:0:fm<a?aL<a?gs<a?1:0:dn<a?1:0:T<a?as<a?1:0:fR<a?1:0:g0<a?hY<a?be<a?aH<a?ea<a?nB<a?fW<a?db<a?1:0:ob<a?1:2:de<a?cj<a?1:0:ff<a?1:0:dD<a?d2<a?eZ<a?1:0:bb<a?1:0:cF<a?fY<a?1:0:d0<a?1:0:gS<a?id<a?b9<a?dQ<a?1:0:ba<a?1:0:h1<a?hQ<a?2:0:hs<a?2:0:ee<a?eU<a?nO<a?2:1:ad<a?0:1:eo<a?eX<a?0:1:eF<a?0:1:n7<a?gR<a?gy<a?by<a?dO<a?0:1:dh<a?0:1:ns<a?gU<a?0:2:b0<a?1:0:el<a?aT<a?nA<a?2:1:fH<a?0:1:ni<a?cp<a?0:1:nW<a?2:1:bL<a?nI<a?n5<a?m6<a?2:1:n6<a?2:1:n2<a?nd<a?2:1:n1<a?2:1:d4<a?m_<a?hc<a?0:2:dZ<a?1:0:h0<a?cJ<a?1:0:ib<a?2:0:n$<a?a1<a?hq<a?go<a?nJ<a?nH<a?2:1:nc<a?2:1:ng<a?hr<a?0:2:a4<a?1:0:nr<a?ey<a?m3<a?2:1:h7<a?0:2:h5<a?m7<a?1:2:f4<a?0:1:bV<a?h2<a?nl<a?ig<a?0:2:e8<a?1:0:n9<a?m9<a?2:1:hM<a?2:0:ht<a?bl<a?dE<a?1:0:og<a?1:2:hm<a?hU<a?0:2:gQ<a?0:2:em<a?nz<a?bF<a?hN<a?ny<a?1:2:bH<a?0:1:m4<a?he<a?0:2:nm<a?1:2:nX<a?nf<a?nS<a?1:2:nM<a?1:2:eD<a?bD<a?1:0:fr<a?1:0:hp<a?gg<a?bs<a?cb<a?1:0:fi<a?1:0:U<a?f0<a?1:0:cW<a?1:0:dj<a?nh<a?nb<a?2:1:hE<a?2:0:hv<a?bi<a?1:0:g8<a?2:0:dV<a?bt<a?fN<a?bw<a?nQ<a?an<a?nt<a?2:1:eT<a?0:1:cL<a?na<a?2:1:dl<a?0:1:bu<a?dI<a?gA<a?0:1:c7<a?0:1:bc<a?d6<a?0:1:fd<a?0:1:aE<a?cK<a?dz<a?fX<a?0:1:cA<a?0:1:c8<a?aY<a?0:1:c$<a?0:1:fC<a?cl<a?d7<a?0:1:ct<a?0:1:of<a?e4<a?0:1:h3<a?2:0:ei<a?eV<a?bW<a?eq<a?aC<a?1:0:a6<a?1:0:hS<a?gx<a?1:0:m8<a?2:1:gZ<a?cs<a?aB<a?0:1:gV<a?0:2:gt<a?d9<a?0:1:eQ<a?0:1:aO<a?cX<a?ed<a?fu<a?0:1:fM<a?0:1:cP<a?br<a?0:1:bY<a?0:1:c2<a?bv<a?ai<a?0:1:ge<a?0:1:nL<a?ef<a?0:1:ha<a?2:0:aV<a?dy<a?eh<a?b3<a?aJ<a?ga<a?1:0:aM<a?1:0:bm<a?er<a?1:0:fG<a?1:0:nk<a?b_<a?cO<a?1:0:nK<a?1:2:cd<a?fg<a?1:0:gi<a?1:0:cZ<a?dJ<a?bh<a?c1<a?1:0:bU<a?1:0:ay<a?bp<a?1:0:aa<a?1:0:dN<a?ce<a?gh<a?1:0:fK<a?1:0:da<a?gw<a?1:0:eI<a?1:0:h$<a?fP<a?X<a?gj<a?dd<a?1:0:dk<a?1:0:ex<a?au<a?1:0:gf<a?1:0:aw<a?eS<a?dp<a?1:0:eE<a?1:0:h8<a?aZ<a?1:0:hD<a?2:0:eu<a?eG<a?g7<a?g9<a?2:0:hl<a?2:0:aW<a?a$<a?1:0:eY<a?1:0:hu<a?hf<a?c6<a?1:0:hg<a?2:0:gB<a?gC<a?2:0:gH<a?2:0:G(NX,a+1|0)-1|0;if(3<g>>>0)var
e=c(d);else
switch(g){case
0:var
e=2;break;case
1:var
e=0;break;case
2:var
e=1;break;default:z(d,2);if(0===jQ(b(d))){var
h=ka(b(d));if(0===h)var
e=0===ii(b(d))?0===ii(b(d))?0===ii(b(d))?0:c(d):c(d):c(d);else
if(1===h)if(0===ii(b(d)))for(;;){var
i=j$(b(d));if(0===i)continue;var
e=1===i?0:c(d);break}else
var
e=c(d);else
var
e=c(d)}else
var
e=c(d)}if(2<=e){if(!(3<=e))return jD(f,k,31)}else
if(0<=e)return f;return N(P1)},r4=function(c,b,a){var
d=b+mB(a)|0,e=oU(c,d,b+mC(a)|0);return[0,e,L(a)]},r5=function(s,r){var
t=mB(s[2]),a=oH(r),f=im(ij(r)),e=s;for(;;){io(a);var
g=b(a),h=92<g?1:G(OA,g+1|0)-1|0;if(2<h>>>0)var
d=c(a);else
switch(h){case
0:var
d=2;break;case
1:var
d=3;break;default:z(a,3);if(0===jQ(b(a))){var
i=ka(b(a));if(0===i)var
d=0===ii(b(a))?0===ii(b(a))?0===ii(b(a))?0:c(a):c(a):c(a);else
if(1===i)if(0===ii(b(a)))for(;;){var
j=j$(b(a));if(0===j)continue;var
d=1===j?1:c(a);break}else
var
d=c(a);else
var
d=c(a)}else
var
d=c(a)}if(3<d>>>0)return N(P2);switch(d){case
0:var
k=r4(e,t,a),l=k[2],n=jJ(m(P3,jC(l,2,ij(l)-2|0))),u=r3(e,k[1],n);kL(f,n);var
e=u;continue;case
1:var
o=r4(e,t,a),p=o[2],q=jJ(m(P4,jC(p,3,ij(p)-4|0))),v=r3(e,o[1],q);kL(f,q);var
e=v;continue;case
2:return[0,e,iw(f)];default:P(f,L(a));continue}}},jt=function(b,a,c){var
d=jE(b,O(b,a));lU(a);return g(c,d,a)},kO=function(m,g,a){var
d=m;for(;;){io(a);var
f=b(a),i=-1<f?42<f?jw<f?0:ju<f?1:0:G(NS,f)-1|0:-1;if(3<i>>>0)var
e=c(a);else
switch(i){case
0:var
e=3;break;case
1:var
e=0;break;case
2:z(a,0);var
e=0===je(b(a))?0:c(a);break;default:z(a,3);var
h=b(a),j=44<h?47<h?-1:G(Py,h+mp|0)-1|0:-1,e=0===j?0===rZ(b(a))?2:c(a):1===j?1:c(a)}if(3<e>>>0){var
k=jE(d,O(d,a));return[0,k,O(k,a)]}switch(e){case
0:var
n=jr(d,a);P(g,L(a));var
d=n;continue;case
1:var
l=O(d,a),o=d[4]?jD(d,l,[2,P6,P5]):d;return[0,o,l];case
2:if(d[4])return[0,d,O(d,a)];P(g,P7);continue;default:P(g,L(a));continue}}},ln=function(e,k,a){for(;;){io(a);var
f=b(a),i=13<f?jw<f?1:ju<f?2:1:G(Oq,f+1|0)-1|0;if(3<i>>>0)var
d=c(a);else
switch(i){case
0:var
d=0;break;case
1:var
d=2;break;case
2:var
d=1;break;default:z(a,1);var
d=0===je(b(a))?1:c(a)}if(2<d>>>0)return N(P8);switch(d){case
0:return[0,e,O(e,a)];case
1:var
g=O(e,a),h=g[3],l=jr(e,a),j=oG(a);return[0,l,[0,g[1],g[2],[0,h[1],h[2]-j|0,h[3]-j|0]]];default:P(k,L(a));continue}}},r6=function(d,a){function
k(a){z(a,3);return 0===iZ(b(a))?2:c(a)}io(a);var
f=b(a),l=kB<f?jw<f?1:ju<f?2:1:G(N0,f+1|0)-1|0;if(14<l>>>0)var
e=c(a);else
switch(l){case
1:var
e=16;break;case
2:var
e=15;break;case
3:z(a,15);var
e=0===je(b(a))?15:c(a);break;case
4:z(a,4);var
e=0===iZ(b(a))?k(a):c(a);break;case
5:z(a,11);var
e=0===iZ(b(a))?k(a):c(a);break;case
7:var
e=5;break;case
8:var
e=6;break;case
9:var
e=7;break;case
10:var
e=8;break;case
11:var
e=9;break;case
12:z(a,14);var
n=ka(b(a));if(0===n)var
e=0===ii(b(a))?0===ii(b(a))?0===ii(b(a))?12:c(a):c(a):c(a);else
if(1===n)if(0===ii(b(a)))for(;;){var
o=j$(b(a));if(0===o)continue;var
e=1===o?13:c(a);break}else
var
e=c(a);else
var
e=c(a);break;case
13:var
e=10;break;case
14:z(a,14);var
e=0===ii(b(a))?0===ii(b(a))?1:c(a):c(a);break;default:var
e=0}if(16<e>>>0)return N(P9);switch(e){case
1:var
p=L(a);return[0,d,p,[0,jJ(m(P_,p))],0];case
2:var
h=L(a),g=jJ(m(P$,h));return uB<=g?[0,d,h,[0,g>>>3|0,48+(g&7)|0],1]:[0,d,h,[0,g],1];case
3:var
q=L(a);return[0,d,q,[0,jJ(m(Qa,q))],1];case
4:return[0,d,Qb,[0,0],0];case
5:return[0,d,Qc,[0,8],0];case
6:return[0,d,Qd,[0,12],0];case
7:return[0,d,Qe,[0,10],0];case
8:return[0,d,Qf,[0,13],0];case
9:return[0,d,Qg,[0,9],0];case
10:return[0,d,Qh,[0,11],0];case
11:var
r=L(a);return[0,d,r,[0,jJ(m(Qi,r))],1];case
12:var
i=L(a);return[0,d,i,[0,jJ(m(Qj,jC(i,1,ij(i)-1|0)))],0];case
13:var
j=L(a),s=jJ(m(Qk,jC(j,2,ij(j)-3|0))),u=pl<s?jE(d,O(d,a)):d;return[0,u,j,[0,s],0];case
14:var
v=L(a),w=q7(a);return[0,jE(d,O(d,a)),v,w,0];case
15:var
x=L(a);return[0,jr(d,a),x,[0],0];default:var
t=L(a);return[0,d,t,q7(a),0]}},r7=function(r,q,g,f,p,a){var
d=r,h=p;for(;;){io(a);var
k=b(a),l=92<k?1:G(Oz,k+1|0)-1|0;if(4<l>>>0)var
e=c(a);else
switch(l){case
1:var
e=3;break;case
3:var
e=0;break;case
4:var
e=1;break;default:var
e=2}if(3<e>>>0)return N(Ql);switch(e){case
0:var
j=L(a);P(f,j);if(i5(q,j))return[0,d,O(d,a),h];P(g,j);continue;case
1:P(f,Qm);var
i=r6(d,a),s=i[4],t=s||h;P(f,i[2]);var
u=i[3];qH(function(a){return kL(g,a)},u);var
d=i[1],h=t;continue;case
2:var
m=L(a);P(f,m);var
n=jE(d,O(d,a));P(g,m);return[0,n,O(n,a),h];default:var
o=L(a);P(f,o);P(g,o);continue}}},r8=function(r,i,h,g,f,a){var
d=r;for(;;){io(a);var
l=b(a),m=96<l?1:G(OH,l+1|0)-1|0;if(6<m>>>0)var
e=c(a);else
switch(m){case
0:var
e=0;break;case
1:var
e=6;break;case
2:var
e=5;break;case
3:z(a,5);var
e=0===je(b(a))?4:c(a);break;case
4:z(a,6);var
n=b(a),s=iu<n?lA<n?-1:0:-1,e=0===s?2:c(a);break;case
5:var
e=3;break;default:var
e=1}if(6<e>>>0)return N(Qn);switch(e){case
0:var
o=jE(d,O(d,a));return[0,o,I(i,O(o,a)),1];case
1:iD(f,96);return[0,d,I(i,O(d,a)),1];case
2:P(f,Qo);return[0,d,I(i,O(d,a)),0];case
3:iD(g,92);iD(f,92);var
j=r6(d,a),p=j[2];P(g,p);P(f,p);var
t=j[3];qH(function(a){return kL(h,a)},t);var
d=j[1];continue;case
4:P(g,Qp);P(f,Qq);P(h,Qr);var
d=jr(d,a);continue;case
5:var
q=L(a);P(g,q);P(f,q);iD(h,10);var
d=jr(d,a);continue;default:var
k=L(a);P(g,k);P(f,k);P(h,k);continue}}},oV=function(bu,bt,aa,aj,d){var
$=bu;for(;;){io(d);var
al=b(d),aK=lA<al?jw<al?1:ju<al?2:1:G(OR,al+1|0)-1|0;if(5<aK>>>0)var
f=c(d);else
switch(aK){case
0:var
f=1;break;case
1:var
f=6;break;case
2:var
f=2;break;case
3:z(d,2);var
f=0===je(b(d))?2:c(d);break;case
4:var
f=0;break;default:z(d,6);var
am=b(d),aL=34<am?iu<am?-1:G(OJ,am-35|0)-1|0:-1;if(0===aL){var
an=b(d),aM=47<an?kB<an?-1:G(OQ,an+jj|0)-1|0:-1;if(0===aM)for(;;){var
ao=b(d),aN=47<ao?59<ao?-1:G(N3,ao+jj|0)-1|0:-1;if(0===aN)continue;var
f=1===aN?4:c(d);break}else
if(1===aM)if(0===ii(b(d)))for(;;){var
ap=b(d),aO=47<ap?jh<ap?-1:G(ON,ap+jj|0)-1|0:-1;if(0===aO)continue;var
f=1===aO?3:c(d);break}else
var
f=c(d);else
var
f=c(d)}else
if(1===aL)if(0===iv(b(d))){var
aP=lg(b(d));if(0===aP){var
aQ=lg(b(d));if(0===aQ){var
aR=lg(b(d));if(0===aR){var
aS=lg(b(d));if(0===aS){var
aT=lg(b(d));if(0===aT){var
aU=lg(b(d));if(0===aU)var
aV=b(d),bv=58<aV?59<aV?-1:0:-1,f=0===bv?5:c(d);else
var
f=1===aU?5:c(d)}else
var
f=1===aT?5:c(d)}else
var
f=1===aS?5:c(d)}else
var
f=1===aR?5:c(d)}else
var
f=1===aQ?5:c(d)}else
var
f=1===aP?5:c(d)}else
var
f=c(d);else
var
f=c(d)}if(6<f>>>0)return N(QM);switch(f){case
0:var
ak=L(d);switch(bt){case
0:var
aI=C(ak,QN)?0:1;break;case
1:var
aI=C(ak,QO)?0:1;break;default:if(C(ak,QP))if(C(ak,QQ))var
aI=0,aJ=0;else
var
aJ=1;else
var
aJ=1;if(aJ){lU(d);return[0,$,O($,d)]}}if(aI)return[0,$,O($,d)];P(aj,ak);P(aa,ak);continue;case
1:var
aW=jE($,O($,d));return[0,aW,O(aW,d)];case
2:var
aX=L(d);P(aj,aX);P(aa,aX);var
$=jr($,d);continue;case
3:var
aq=L(d),bw=jC(aq,3,ij(aq)-4|0);P(aj,aq);kL(aa,jJ(m(QR,bw)));continue;case
4:var
ar=L(d),bx=jC(ar,2,ij(ar)-3|0);P(aj,ar);kL(aa,jJ(bx));continue;case
5:var
as=L(d),a=jC(as,1,ij(as)-2|0);P(aj,as);var
aY=v(a,QS);if(0<=aY)if(0<aY){var
aZ=v(a,QT);if(0<=aZ)if(0<aZ){var
a0=v(a,QU);if(0<=a0)if(0<a0){var
a1=v(a,QV);if(0<=a1)if(0<a1){var
a2=v(a,QW);if(0<=a2)if(0<a2)if(C(a,QX))if(C(a,QY))if(C(a,QZ))if(C(a,Q0))if(C(a,Q1))if(C(a,Q2))var
e=1,g=0,X=0,ab=0,y=0;else
var
V=Q5,y=1;else
var
V=Q6,y=1;else
var
V=Q7,y=1;else
var
V=Q8,y=1;else
var
V=Q9,y=1;else
var
V=Q_,y=1;else
var
V=Q$,y=1;else
if(C(a,Ra))if(C(a,Rb))if(C(a,Rc))if(C(a,Rd))if(C(a,Re))if(C(a,Rf))if(C(a,Rg))var
e=1,g=0,X=0,ab=0,y=0;else
var
V=Rh,y=1;else
var
V=Ri,y=1;else
var
V=Rj,y=1;else
var
V=Rk,y=1;else
var
V=Rl,y=1;else
var
V=Rm,y=1;else
var
V=Rn,y=1;if(y)var
at=V,ab=1}else
var
at=Ro,ab=1;else{var
a4=v(a,Rp);if(0<=a4)if(0<a4)if(C(a,Rq))if(C(a,Rr))if(C(a,Rs))if(C(a,Rt))if(C(a,Ru))if(C(a,Rv))if(C(a,Rw))var
e=1,g=0,X=0,ab=0,i=0;else
var
B=Rx,i=1;else
var
B=Ry,i=1;else
var
B=Rz,i=1;else
var
B=RA,i=1;else
var
B=RB,i=1;else
var
B=RC,i=1;else
var
B=RD,i=1;else
var
B=RE,i=1;else
if(C(a,RF))if(C(a,RG))if(C(a,RH))if(C(a,RI))if(C(a,RJ))if(C(a,RK))if(C(a,RL))var
e=1,g=0,X=0,ab=0,i=0;else
var
B=RM,i=1;else
var
B=RN,i=1;else
var
B=RO,i=1;else
var
B=RP,i=1;else
var
B=RQ,i=1;else
var
B=RR,i=1;else
var
B=RS,i=1;if(i)var
at=B,ab=1}if(ab)var
au=at,X=1}else
var
au=RT,X=1;else{var
a5=v(a,RU);if(0<=a5)if(0<a5){var
a6=v(a,RV);if(0<=a6)if(0<a6)if(C(a,RW))if(C(a,RX))if(C(a,RY))if(C(a,RZ))if(C(a,R0))if(C(a,R1))if(C(a,R2))var
e=1,g=0,X=0,ac=0,j=0;else
var
D=R3,j=1;else
var
D=R4,j=1;else
var
D=R5,j=1;else
var
D=R6,j=1;else
var
D=R7,j=1;else
var
D=R8,j=1;else
var
D=R9,j=1;else
var
D=R_,j=1;else
if(C(a,R$))if(C(a,Sa))if(C(a,Sb))if(C(a,Sc))if(C(a,Sd))if(C(a,Se))if(C(a,Sf))var
e=1,g=0,X=0,ac=0,j=0;else
var
D=Sg,j=1;else
var
D=Sh,j=1;else
var
D=Si,j=1;else
var
D=Sj,j=1;else
var
D=Sk,j=1;else
var
D=Sl,j=1;else
var
D=Sm,j=1;if(j)var
ax=D,ac=1}else
var
ax=Sn,ac=1;else{var
a7=v(a,So);if(0<=a7)if(0<a7)if(C(a,Sp))if(C(a,Sq))if(C(a,Sr))if(C(a,Ss))if(C(a,St))if(C(a,Su))if(C(a,Sv))var
e=1,g=0,X=0,ac=0,k=0;else
var
E=Sw,k=1;else
var
E=Sx,k=1;else
var
E=Sy,k=1;else
var
E=Sz,k=1;else
var
E=SA,k=1;else
var
E=SB,k=1;else
var
E=SC,k=1;else
var
E=SD,k=1;else
if(C(a,SE))if(C(a,SF))if(C(a,SG))if(C(a,SH))if(C(a,SI))if(C(a,SJ))if(C(a,SK))var
e=1,g=0,X=0,ac=0,k=0;else
var
E=SL,k=1;else
var
E=SM,k=1;else
var
E=SN,k=1;else
var
E=SO,k=1;else
var
E=SP,k=1;else
var
E=SQ,k=1;else
var
E=SR,k=1;if(k)var
ax=E,ac=1}if(ac)var
au=ax,X=1}if(X)var
av=au,g=1}else
var
av=SS,g=1;else{var
a8=v(a,ST);if(0<=a8)if(0<a8){var
a9=v(a,SU);if(0<=a9)if(0<a9){var
a_=v(a,SV);if(0<=a_)if(0<a_)if(C(a,SW))if(C(a,SX))if(C(a,SY))if(C(a,SZ))if(C(a,S0))if(C(a,S1))if(C(a,S2))var
e=1,g=0,Y=0,ad=0,l=0;else
var
F=S3,l=1;else
var
F=S4,l=1;else
var
F=S5,l=1;else
var
F=S6,l=1;else
var
F=S7,l=1;else
var
F=S8,l=1;else
var
F=S9,l=1;else
var
F=S_,l=1;else
if(C(a,S$))if(C(a,Ta))if(C(a,Tb))if(C(a,Tc))if(C(a,Td))if(C(a,Te))if(C(a,Tf))var
e=1,g=0,Y=0,ad=0,l=0;else
var
F=Tg,l=1;else
var
F=Th,l=1;else
var
F=Ti,l=1;else
var
F=Tj,l=1;else
var
F=Tk,l=1;else
var
F=Tl,l=1;else
var
F=Tm,l=1;if(l)var
ay=F,ad=1}else
var
ay=Tn,ad=1;else{var
a$=v(a,To);if(0<=a$)if(0<a$)if(C(a,Tp))if(C(a,Tq))if(C(a,Tr))if(C(a,Ts))if(C(a,Tt))if(C(a,Tu))if(C(a,Tv))var
e=1,g=0,Y=0,ad=0,n=0;else
var
H=Tw,n=1;else
var
H=Tx,n=1;else
var
H=Ty,n=1;else
var
H=Tz,n=1;else
var
H=TA,n=1;else
var
H=TB,n=1;else
var
H=TC,n=1;else
var
H=TD,n=1;else
if(C(a,TE))if(C(a,TF))if(C(a,TG))if(C(a,TH))if(C(a,TI))if(C(a,TJ))if(C(a,TK))var
e=1,g=0,Y=0,ad=0,n=0;else
var
H=TL,n=1;else
var
H=TM,n=1;else
var
H=TN,n=1;else
var
H=TO,n=1;else
var
H=TP,n=1;else
var
H=TQ,n=1;else
var
H=TR,n=1;if(n)var
ay=H,ad=1}if(ad)var
az=ay,Y=1}else
var
az=TS,Y=1;else{var
ba=v(a,TT);if(0<=ba)if(0<ba){var
bb=v(a,TU);if(0<=bb)if(0<bb)if(C(a,TV))if(C(a,TW))if(C(a,TX))if(C(a,TY))if(C(a,TZ))if(C(a,T0))if(C(a,T1))var
e=1,g=0,Y=0,ae=0,o=0;else
var
I=T2,o=1;else
var
I=T3,o=1;else
var
I=T4,o=1;else
var
I=T5,o=1;else
var
I=T6,o=1;else
var
I=T7,o=1;else
var
I=T8,o=1;else
var
I=T9,o=1;else
if(C(a,T_))if(C(a,T$))if(C(a,Ua))if(C(a,Ub))if(C(a,Uc))if(C(a,Ud))if(C(a,Ue))var
e=1,g=0,Y=0,ae=0,o=0;else
var
I=Uf,o=1;else
var
I=Ug,o=1;else
var
I=Uh,o=1;else
var
I=Ui,o=1;else
var
I=Uj,o=1;else
var
I=Uk,o=1;else
var
I=Ul,o=1;if(o)var
aA=I,ae=1}else
var
aA=Um,ae=1;else{var
bc=v(a,Un);if(0<=bc)if(0<bc)if(C(a,Uo))if(C(a,Up))if(C(a,Uq))if(C(a,Ur))if(C(a,Us))if(C(a,Ut))if(C(a,Uu))var
e=1,g=0,Y=0,ae=0,p=0;else
var
J=Uv,p=1;else
var
J=Uw,p=1;else
var
J=Ux,p=1;else
var
J=Uy,p=1;else
var
J=Uz,p=1;else
var
J=UA,p=1;else
var
J=UB,p=1;else
var
J=UC,p=1;else
if(C(a,UD))if(C(a,UE))if(C(a,UF))if(C(a,UG))if(C(a,UH))if(C(a,UI))if(C(a,UJ))var
e=1,g=0,Y=0,ae=0,p=0;else
var
J=UK,p=1;else
var
J=UL,p=1;else
var
J=UM,p=1;else
var
J=UN,p=1;else
var
J=UO,p=1;else
var
J=UP,p=1;else
var
J=UQ,p=1;if(p)var
aA=J,ae=1}if(ae)var
az=aA,Y=1}if(Y)var
av=az,g=1}if(g)var
aw=av,e=0}else
var
aw=UR,e=0;else{var
bd=v(a,US);if(0<=bd)if(0<bd){var
be=v(a,UT);if(0<=be)if(0<be){var
bf=v(a,UU);if(0<=bf)if(0<bf){var
bg=v(a,UV);if(0<=bg)if(0<bg)if(C(a,UW))if(C(a,UX))if(C(a,UY))if(C(a,UZ))if(C(a,U0))if(C(a,U1))var
e=1,h=0,Z=0,af=0,A=0;else
var
W=U2,A=1;else
var
W=U3,A=1;else
var
W=U4,A=1;else
var
W=U5,A=1;else
var
W=U6,A=1;else
var
W=U7,A=1;else
var
W=U8,A=1;else
if(C(a,U9))if(C(a,U_))if(C(a,U$))if(C(a,Va))if(C(a,Vb))if(C(a,Vc))if(C(a,Vd))var
e=1,h=0,Z=0,af=0,A=0;else
var
W=Ve,A=1;else
var
W=Vf,A=1;else
var
W=Vg,A=1;else
var
W=Vh,A=1;else
var
W=Vi,A=1;else
var
W=Vj,A=1;else
var
W=Vk,A=1;if(A)var
aB=W,af=1}else
var
aB=Vl,af=1;else{var
bh=v(a,Vm);if(0<=bh)if(0<bh)if(C(a,Vn))if(C(a,Vo))if(C(a,Vp))if(C(a,Vq))if(C(a,Vr))if(C(a,Vs))if(C(a,Vt))var
e=1,h=0,Z=0,af=0,q=0;else
var
K=Vu,q=1;else
var
K=Vv,q=1;else
var
K=Vw,q=1;else
var
K=Vx,q=1;else
var
K=Vy,q=1;else
var
K=Vz,q=1;else
var
K=VA,q=1;else
var
K=VB,q=1;else
if(C(a,VC))if(C(a,VD))if(C(a,VE))if(C(a,VF))if(C(a,VG))if(C(a,VH))if(C(a,VI))var
e=1,h=0,Z=0,af=0,q=0;else
var
K=VJ,q=1;else
var
K=VK,q=1;else
var
K=VL,q=1;else
var
K=VM,q=1;else
var
K=VN,q=1;else
var
K=VO,q=1;else
var
K=VP,q=1;if(q)var
aB=K,af=1}if(af)var
aC=aB,Z=1}else
var
aC=VQ,Z=1;else{var
bi=v(a,VR);if(0<=bi)if(0<bi){var
bj=v(a,VS);if(0<=bj)if(0<bj)if(C(a,VT))if(C(a,VU))if(C(a,VV))if(C(a,VW))if(C(a,VX))if(C(a,VY))if(C(a,VZ))var
e=1,h=0,Z=0,ag=0,r=0;else
var
M=V0,r=1;else
var
M=V1,r=1;else
var
M=V2,r=1;else
var
M=V3,r=1;else
var
M=V4,r=1;else
var
M=V5,r=1;else
var
M=V6,r=1;else
var
M=V7,r=1;else
if(C(a,V8))if(C(a,V9))if(C(a,V_))if(C(a,V$))if(C(a,Wa))if(C(a,Wb))if(C(a,Wc))var
e=1,h=0,Z=0,ag=0,r=0;else
var
M=Wd,r=1;else
var
M=We,r=1;else
var
M=Wf,r=1;else
var
M=Wg,r=1;else
var
M=Wh,r=1;else
var
M=Wi,r=1;else
var
M=Wj,r=1;if(r)var
aE=M,ag=1}else
var
aE=Wk,ag=1;else{var
bk=v(a,Wl);if(0<=bk)if(0<bk)if(C(a,Wm))if(C(a,Wn))if(C(a,Wo))if(C(a,Wp))if(C(a,Wq))if(C(a,Wr))if(C(a,Ws))var
e=1,h=0,Z=0,ag=0,s=0;else
var
Q=Wt,s=1;else
var
Q=Wu,s=1;else
var
Q=Wv,s=1;else
var
Q=Ww,s=1;else
var
Q=Wx,s=1;else
var
Q=Wy,s=1;else
var
Q=Wz,s=1;else
var
Q=WA,s=1;else
if(C(a,WB))if(C(a,WC))if(C(a,WD))if(C(a,WE))if(C(a,WF))if(C(a,WG))if(C(a,WH))var
e=1,h=0,Z=0,ag=0,s=0;else
var
Q=WI,s=1;else
var
Q=WJ,s=1;else
var
Q=WK,s=1;else
var
Q=WL,s=1;else
var
Q=WM,s=1;else
var
Q=WN,s=1;else
var
Q=WO,s=1;if(s)var
aE=Q,ag=1}if(ag)var
aC=aE,Z=1}if(Z)var
aD=aC,h=1}else
var
aD=WP,h=1;else{var
bl=v(a,WQ);if(0<=bl)if(0<bl){var
bm=v(a,WR);if(0<=bm)if(0<bm){var
bn=v(a,WS);if(0<=bn)if(0<bn)if(C(a,WT))if(C(a,WU))if(C(a,WV))if(C(a,WW))if(C(a,WX))if(C(a,WY))if(C(a,WZ))var
e=1,h=0,_=0,ah=0,t=0;else
var
R=W0,t=1;else
var
R=W1,t=1;else
var
R=W2,t=1;else
var
R=W3,t=1;else
var
R=W4,t=1;else
var
R=W5,t=1;else
var
R=W6,t=1;else
var
R=W7,t=1;else
if(C(a,W8))if(C(a,W9))if(C(a,W_))if(C(a,W$))if(C(a,Xa))if(C(a,Xb))if(C(a,Xc))var
e=1,h=0,_=0,ah=0,t=0;else
var
R=Xd,t=1;else
var
R=Xe,t=1;else
var
R=Xf,t=1;else
var
R=Xg,t=1;else
var
R=Xh,t=1;else
var
R=Xi,t=1;else
var
R=Xj,t=1;if(t)var
aF=R,ah=1}else
var
aF=Xk,ah=1;else{var
bo=v(a,Xl);if(0<=bo)if(0<bo)if(C(a,Xm))if(C(a,Xn))if(C(a,Xo))if(C(a,Xp))if(C(a,Xq))if(C(a,Xr))if(C(a,Xs))var
e=1,h=0,_=0,ah=0,u=0;else
var
S=Xt,u=1;else
var
S=Xu,u=1;else
var
S=Xv,u=1;else
var
S=Xw,u=1;else
var
S=Xx,u=1;else
var
S=Xy,u=1;else
var
S=Xz,u=1;else
var
S=XA,u=1;else
if(C(a,XB))if(C(a,XC))if(C(a,XD))if(C(a,XE))if(C(a,XF))if(C(a,XG))if(C(a,XH))var
e=1,h=0,_=0,ah=0,u=0;else
var
S=XI,u=1;else
var
S=XJ,u=1;else
var
S=XK,u=1;else
var
S=XL,u=1;else
var
S=XM,u=1;else
var
S=XN,u=1;else
var
S=XO,u=1;if(u)var
aF=S,ah=1}if(ah)var
aG=aF,_=1}else
var
aG=XP,_=1;else{var
bp=v(a,XQ);if(0<=bp)if(0<bp){var
bq=v(a,XR);if(0<=bq)if(0<bq)if(C(a,XS))if(C(a,XT))if(C(a,XU))if(C(a,XV))if(C(a,XW))if(C(a,XX))if(C(a,XY))var
e=1,h=0,_=0,ai=0,w=0;else
var
T=XZ,w=1;else
var
T=X0,w=1;else
var
T=X1,w=1;else
var
T=X2,w=1;else
var
T=X3,w=1;else
var
T=X4,w=1;else
var
T=X5,w=1;else
var
T=X6,w=1;else
if(C(a,X7))if(C(a,X8))if(C(a,X9))if(C(a,X_))if(C(a,X$))if(C(a,Ya))if(C(a,Yb))var
e=1,h=0,_=0,ai=0,w=0;else
var
T=Yc,w=1;else
var
T=Yd,w=1;else
var
T=Ye,w=1;else
var
T=Yf,w=1;else
var
T=Yg,w=1;else
var
T=Yh,w=1;else
var
T=Yi,w=1;if(w)var
aH=T,ai=1}else
var
aH=Yj,ai=1;else{var
br=v(a,Yk);if(0<=br)if(0<br)if(C(a,Yl))if(C(a,Ym))if(C(a,Yn))if(C(a,Yo))if(C(a,Yp))if(C(a,Yq))if(C(a,Yr))var
e=1,h=0,_=0,ai=0,x=0;else
var
U=Ys,x=1;else
var
U=Yt,x=1;else
var
U=Yu,x=1;else
var
U=Yv,x=1;else
var
U=Yw,x=1;else
var
U=Yx,x=1;else
var
U=Yy,x=1;else
var
U=Yz,x=1;else
if(C(a,YA))if(C(a,YB))if(C(a,YC))if(C(a,YD))if(C(a,YE))if(C(a,YF))if(C(a,YG))var
e=1,h=0,_=0,ai=0,x=0;else
var
U=YH,x=1;else
var
U=YI,x=1;else
var
U=YJ,x=1;else
var
U=YK,x=1;else
var
U=YL,x=1;else
var
U=YM,x=1;else
var
U=YN,x=1;if(x)var
aH=U,ai=1}if(ai)var
aG=aH,_=1}if(_)var
aD=aG,h=1}if(h)var
aw=aD,e=0}var
a3=e?0:aw;if(a3)kL(aa,a3[1]);else
P(aa,m(Q4,m(a,Q3)));continue;default:var
bs=L(d);P(aj,bs);P(aa,bs);continue}}},YU=function(a,d){function
Q(a){return 0===mR(b(a))?0===mL(b(a))?0===rW(b(a))?0===rL(b(a))?0===rM(b(a))?0===oQ(b(a))?0===lX(b(a))?0===mR(b(a))?0===jQ(b(a))?0===rN(b(a))?0===lZ(b(a))?3:c(a):c(a):c(a):c(a):c(a):c(a):c(a):c(a):c(a):c(a):c(a)}function
H(a){z(a,3);return 0===r0(b(a))?3:c(a)}function
l(a){for(;;){z(a,17);if(0===iv(b(a)))continue;return c(a)}}function
f(a){z(a,18);var
d=li(b(a));if(0===d)return l(a);if(1===d)for(;;){z(a,18);var
e=jP(b(a));if(2<e>>>0)return c(a);switch(e){case
0:return l(a);case
1:continue;default:a:for(;;){if(0===ip(b(a)))for(;;){z(a,18);var
f=jP(b(a));if(2<f>>>0)return c(a);switch(f){case
0:return l(a);case
1:continue;default:continue a}}return c(a)}}}return c(a)}function
F(a){b:for(;;){if(0===ip(b(a)))for(;;){z(a,18);var
d=rS(b(a));if(3<d>>>0)return c(a);switch(d){case
0:return l(a);case
1:return f(a);case
2:continue;default:continue b}}return c(a)}}function
v(a){for(;;){z(a,15);if(0===iv(b(a)))continue;return c(a)}}function
g(a){for(;;){z(a,15);if(0===iv(b(a)))continue;return c(a)}}function
u(a){b:for(;;){if(0===ip(b(a)))for(;;){z(a,16);var
d=jP(b(a));if(2<d>>>0)return c(a);switch(d){case
0:return g(a);case
1:continue;default:continue b}}return c(a)}}function
m(a){z(a,17);var
d=rU(b(a));if(3<d>>>0)return c(a);switch(d){case
0:return l(a);case
1:var
e=mJ(b(a));if(0===e)for(;;){z(a,16);var
f=li(b(a));if(0===f)return g(a);if(1===f)continue;return c(a)}if(1===e)for(;;){z(a,16);var
h=jP(b(a));if(2<h>>>0)return c(a);switch(h){case
0:return g(a);case
1:continue;default:return u(a)}}return c(a);case
2:for(;;){z(a,16);var
i=li(b(a));if(0===i)return v(a);if(1===i)continue;return c(a)}default:for(;;){z(a,16);var
j=jP(b(a));if(2<j>>>0)return c(a);switch(j){case
0:return v(a);case
1:continue;default:return u(a)}}}}function
n(a){z(a,18);var
d=rI(b(a));if(2<d>>>0)return c(a);switch(d){case
0:return l(a);case
1:for(;;){z(a,18);var
e=kt(b(a));if(3<e>>>0)return c(a);switch(e){case
0:return l(a);case
1:continue;case
2:return m(a);default:a:for(;;){if(0===ip(b(a)))for(;;){z(a,18);var
f=kt(b(a));if(3<f>>>0)return c(a);switch(f){case
0:return l(a);case
1:continue;case
2:return m(a);default:continue a}}return c(a)}}}default:return m(a)}}function
o(a){for(;;){z(a,18);var
d=mO(b(a));if(4<d>>>0)return c(a);switch(d){case
0:return l(a);case
1:return n(a);case
2:continue;case
3:return m(a);default:return F(a)}}}function
E(a){z(a,17);var
d=ry(b(a));if(0===d)return l(a);if(1===d)for(;;){z(a,14);var
e=mP(b(a));if(2<e>>>0)return c(a);switch(e){case
0:for(;;){z(a,13);if(0===iv(b(a)))continue;return c(a)}case
1:continue;default:a:for(;;){if(0===ii(b(a)))for(;;){z(a,14);var
f=mP(b(a));if(2<f>>>0)return c(a);switch(f){case
0:for(;;){z(a,13);if(0===iv(b(a)))continue;return c(a)}case
1:continue;default:continue a}}return c(a)}}}return c(a)}function
D(a){z(a,17);var
d=rP(b(a));if(0===d)return l(a);if(1===d)for(;;){z(a,10);var
e=lj(b(a));if(2<e>>>0)return c(a);switch(e){case
0:for(;;){z(a,9);if(0===iv(b(a)))continue;return c(a)}case
1:continue;default:a:for(;;){if(0===iZ(b(a)))for(;;){z(a,10);var
f=lj(b(a));if(2<f>>>0)return c(a);switch(f){case
0:for(;;){z(a,9);if(0===iv(b(a)))continue;return c(a)}case
1:continue;default:continue a}}return c(a)}}}return c(a)}function
B(a){z(a,17);var
d=rO(b(a));if(0===d)return l(a);if(1===d)for(;;){z(a,8);var
e=mE(b(a));if(2<e>>>0)return c(a);switch(e){case
0:for(;;){z(a,7);if(0===iv(b(a)))continue;return c(a)}case
1:continue;default:a:for(;;){if(0===lh(b(a)))for(;;){z(a,8);var
f=mE(b(a));if(2<f>>>0)return c(a);switch(f){case
0:for(;;){z(a,7);if(0===iv(b(a)))continue;return c(a)}case
1:continue;default:continue a}}return c(a)}}}return c(a)}function
A(a){for(;;){z(a,18);var
d=mV(b(a));if(2<d>>>0)return c(a);switch(d){case
0:return l(a);case
1:return f(a);default:continue}}}function
y(a){for(;;){z(a,11);if(0===iv(b(a)))continue;return c(a)}}function
x(a){for(;;){z(a,12);var
d=rV(b(a));if(4<d>>>0)return c(a);switch(d){case
0:return y(a);case
1:return f(a);case
2:continue;case
3:for(;;){z(a,11);var
e=mV(b(a));if(2<e>>>0)return c(a);switch(e){case
0:return y(a);case
1:return f(a);default:continue}}default:a:for(;;){if(0===iZ(b(a)))for(;;){z(a,12);var
g=lj(b(a));if(2<g>>>0)return c(a);switch(g){case
0:for(;;){z(a,11);if(0===iv(b(a)))continue;return c(a)}case
1:continue;default:continue a}}return c(a)}}}}function
w(a){z(a,18);var
d=oO(b(a));if(7<d>>>0)return c(a);switch(d){case
0:return l(a);case
1:return n(a);case
2:return x(a);case
3:return A(a);case
4:return B(a);case
5:return m(a);case
6:return D(a);default:return E(a)}}function
t(a){for(;;){z(a,18);var
d=kt(b(a));if(3<d>>>0)return c(a);switch(d){case
0:return l(a);case
1:continue;case
2:return m(a);default:a:for(;;){if(0===ip(b(a)))for(;;){z(a,18);var
e=kt(b(a));if(3<e>>>0)return c(a);switch(e){case
0:return l(a);case
1:continue;case
2:return m(a);default:continue a}}return c(a)}}}}function
s(a){return 0===ip(b(a))?t(a):c(a)}function
e(e,a){for(;;){z(a,34);var
d=K(b(a));if(0===d)continue;return 1===d?e<50?q(e+1|0,a):is(q,[0,a]):c(a)}}function
q(d,a){if(0===jQ(b(a))){var
f=ka(b(a));if(0===f)return 0===ii(b(a))?0===ii(b(a))?0===ii(b(a))?d<50?e(d+1|0,a):is(e,[0,a]):c(a):c(a):c(a);if(1===f){if(0===ii(b(a)))for(;;){var
g=j$(b(a));if(0===g)continue;return 1===g?d<50?e(d+1|0,a):is(e,[0,a]):c(a)}return c(a)}return c(a)}return c(a)}function
j(a){return ko(e(0,a))}function
k(a){return ko(q(0,a))}function
iG(i){var
h=b(i),p=jT<h?eb<h?gd<h?dC<h?e9<h?bJ<h?fE<h?cy<h?1:6:dH<h?eJ<h?1:6:eM<h?1:6:bo<h?aQ<h?aG<h?1:6:di<h?1:6:dR<h?cf<h?1:6:$<h?1:6:eg<h?dw<h?cC<h?d_<h?dF<h?1:6:fk<h?1:6:gl<h?cu<h?1:6:am<h?1:6:cB<h?fF<h?d8<h?1:6:gr<h?1:6:b7<h?fc<h?1:6:fQ<h?1:6:ep<h?b8<h?eN<h?ag<h?1:6:ew<h?1:6:fL<h?gb<h?1:6:f8<h?1:6:aq<h?cq<h?at<h?1:6:ez<h?1:6:ah<h?eR<h?1:6:e_<h?1:6:cv<h?dW<h?a9<h?cG<h?ar<h?ft<h?1:6:fS<h?1:6:e3<h?fn<h?1:6:f7<h?1:6:ax<h?bz<h?d5<h?1:6:aD<h?1:6:a2<h?eA<h?1:6:cM<h?1:6:cU<h?fZ<h?f2<h?fb<h?1:6:bC<h?1:6:bS<h?aR<h?1:6:ac<h?1:6:b$<h?a3<h?bM<h?1:6:gz<h?1:6:gq<h?f3<h?1:6:ca<h?1:6:bI<h?al<h?cw<h?dK<h?c_<h?1:6:dY<h?1:6:ev<h?b6<h?1:6:eC<h?1:6:ec<h?fU<h?eW<h?1:6:ap<h?1:6:eO<h?bO<h?1:6:fl<h?1:6:bR<h?cV<h?fI<h?bB<h?1:6:aA<h?1:6:gu<h?bn<h?1:6:a5<h?1:6:fh<h?aj<h?cx<h?1:6:a_<h?1:6:aU<h?fs<h?1:6:b2<h?1:6:f1<h?_<h?c4<h?d1<h?b5<h?dt<h?f9<h?1:6:aF<h?1:6:aS<h?e7<h?1:6:cg<h?1:6:cI<h?e6<h?fo<h?1:6:bq<h?1:6:dP<h?cE<h?1:6:av<h?1:6:c5<h?cD<h?bE<h?dv<h?1:6:et<h?1:6:ds<h?bf<h?1:6:eB<h?1:6:n3<h?dX<h?aI<h?1:6:dg<h?1:6:eH<h?nU<h?1:6:fj<h?1:6:oe<h?dA<h?fT<h?bK<h?dq<h?1:6:gm<h?1:6:cz<h?fO<h?1:6:e0<h?1:6:m5<h?af<h?nv<h?1:6:en<h?1:6:oc<h?nP<h?1:6:nn<h?1:6:bN<h?od<h?cN<h?f6<h?1:6:nE<h?1:6:nq<h?nY<h?1:6:dm<h?1:6:fp<h?f$<h?ae<h?1:6:bg<h?1:6:ek<h?cT<h?1:6:b4<h?1:6:fq<h?b1<h?fw<h?dr<h?S<h?az<h?1:6:cH<h?1:6:nw<h?bA<h?1:6:nG<h?1:6:aX<h?bT<h?dx<h?1:6:bP<h?1:6:gc<h?cm<h?1:6:bd<h?1:6:c0<h?fx<h?a7<h?gn<h?1:6:fy<h?1:6:a0<h?fv<h?1:6:gk<h?1:6:e1<h?ej<h?gv<h?1:6:gp<h?1:6:fD<h?Y<h?1:6:fV<h?1:6:c9<h?e2<h?V<h?aN<h?dS<h?1:6:ci<h?1:6:e$<h?R<h?1:6:cQ<h?1:6:d$<h?Z<h?eL<h?1:6:bj<h?1:6:ao<h?dc<h?1:6:fA<h?1:6:bx<h?aK<h?cS<h?ch<h?1:6:a8<h?1:6:c3<h?ak<h?1:6:bQ<h?1:6:dL<h?fz<h?W<h?1:6:cR<h?1:6:M<h?du<h?1:6:dM<h?1:6:fi<h?be<h?dn<h?fe<h?cr<h?bX<h?aP<h?cn<h?1:6:dT<h?1:6:ck<h?cY<h?1:6:bk<h?1:6:dU<h?bZ<h?bG<h?1:6:df<h?1:6:j2<h?jZ<h?1:2:fa<h?1:6:d3<h?eP<h?e5<h?f5<h?1:6:dG<h?1:6:fB<h?fJ<h?1:6:ab<h?1:6:cc<h?co<h?dB<h?1:6:es<h?1:6:gs<h?eK<h?1:6:aL<h?1:6:bb<h?ob<h?fR<h?as<h?fm<h?1:6:T<h?1:6:db<h?f_<h?1:6:fW<h?1:6:ff<h?cj<h?nB<h?1:6:de<h?1:6:eZ<h?ea<h?1:6:d2<h?1:6:ba<h?d0<h?fY<h?dD<h?1:6:cF<h?1:6:dQ<h?aH<h?1:6:b9<h?1:6:ee<h?eU<h?nO<h?1:6:ad<h?1:6:eo<h?eX<h?1:6:eF<h?1:6:a4<h?n5<h?aT<h?gy<h?by<h?dO<h?1:6:dh<h?1:6:b0<h?ns<h?1:6:nA<h?1:6:ni<h?el<h?fH<h?1:6:cp<h?1:6:n7<h?nW<h?1:6:m6<h?1:6:dZ<h?n2<h?nI<h?n6<h?1:6:nd<h?1:6:bL<h?n1<h?1:6:m_<h?1:6:nJ<h?cJ<h?d4<h?1:6:nH<h?1:6:go<h?nc<h?1:6:ng<h?1:6:ny<h?e8<h?m7<h?ey<h?m3<h?1:6:nr<h?1:6:a1<h?f4<h?1:6:nl<h?1:6:dE<h?n9<h?m9<h?1:6:bV<h?1:6:og<h?bl<h?1:6:n$<h?1:6:nM<h?nm<h?bF<h?bH<h?1:6:m4<h?1:6:nS<h?nz<h?1:6:nf<h?1:6:fr<h?bD<h?nX<h?1:6:eD<h?1:6:cb<h?em<h?1:6:bs<h?1:6:bv<h?aE<h?bw<h?bi<h?cW<h?f0<h?gg<h?1:6:U<h?1:6:nh<h?nb<h?1:6:dj<h?1:6:nQ<h?an<h?nt<h?1:6:eT<h?1:6:cL<h?na<h?1:6:dl<h?1:6:fN<h?bu<h?dI<h?gA<h?1:6:c7<h?1:6:bc<h?d6<h?1:6:fd<h?1:6:cK<h?dz<h?fX<h?1:6:cA<h?1:6:c8<h?aY<h?1:6:c$<h?1:6:cs<h?aC<h?fC<h?cl<h?d7<h?1:6:ct<h?1:6:of<h?e4<h?1:6:bt<h?1:6:gx<h?a6<h?eq<h?1:6:bW<h?1:6:eV<h?m8<h?1:6:aB<h?1:6:ed<h?gt<h?j1<h?jX<h?1:2:d9<h?1:6:ei<h?eQ<h?1:6:fu<h?1:6:cP<h?cX<h?fM<h?1:6:br<h?1:6:aO<h?bY<h?1:6:ai<h?1:6:fK<h?nK<h?aM<h?nL<h?c2<h?ge<h?1:6:ef<h?1:6:ga<h?dV<h?1:6:aJ<h?1:6:fG<h?er<h?b3<h?1:6:bm<h?1:6:cO<h?eh<h?1:6:b_<h?1:6:bU<h?gi<h?fg<h?nk<h?1:6:cd<h?1:6:c1<h?dy<h?1:6:bh<h?1:6:aa<h?bp<h?dJ<h?1:6:ay<h?1:6:gh<h?cZ<h?1:6:ce<h?1:6:eE<h?dk<h?eI<h?gw<h?dN<h?1:6:da<h?1:6:dd<h?aV<h?1:6:gj<h?1:6:gf<h?au<h?X<h?1:6:ex<h?1:6:dp<h?fP<h?1:6:eS<h?1:6:c6<h?a$<h?aZ<h?aw<h?1:6:eG<h?1:6:eY<h?aW<h?1:6:eu<h?1:6:jU<h?j0<h?jW<h?1:2:jV<h?1:2:ju<h?jw<h?1:3:j3<h?1:2:G(On,h+1|0)-1|0;if(40<p>>>0)return c(i);switch(p){case
0:return 65;case
1:return 66;case
2:z(i,1);if(0===jO(b(i)))for(;;){z(i,1);if(0===jO(b(i)))continue;return c(i)}return c(i);case
3:return 0;case
4:z(i,0);return 0===je(b(i))?0:c(i);case
5:return 6;case
6:z(i,34);var
q=K(b(i));return 0===q?j(i):1===q?k(i):c(i);case
7:z(i,66);if(0===lX(b(i))){var
r=b(i),jH=iI<r?mf<r?-1:0:-1;if(0===jH){if(0===lZ(b(i))){if(0===lX(b(i))){var
u=b(i),jI=pC<u?lJ<u?-1:0:-1;return 0===jI?0===rC(b(i))?35:c(i):c(i)}return c(i)}return c(i)}return c(i)}return c(i);case
8:return 59;case
9:return 42;case
10:return 43;case
11:z(i,56);return 0===rZ(b(i))?4:c(i);case
12:return 63;case
13:return 47;case
14:z(i,64);var
v=oR(b(i));if(3<v>>>0)return c(i);switch(v){case
0:for(;;){var
y=oR(b(i));if(3<y>>>0)return c(i);switch(y){case
0:continue;case
1:return s(i);case
2:return w(i);default:return o(i)}}case
1:return s(i);case
2:return w(i);default:return o(i)}case
15:z(i,45);var
C=lY(b(i));return 0===C?0===rv(b(i))?44:c(i):1===C?t(i):c(i);case
16:z(i,66);var
I=mU(b(i));if(0===I){z(i,2);var
L=mI(b(i));if(2<L>>>0)return c(i);switch(L){case
0:for(;;){var
N=mI(b(i));if(2<N>>>0)return c(i);switch(N){case
0:continue;case
1:return H(i);default:return Q(i)}}case
1:return H(i);default:return Q(i)}}return 1===I?5:c(i);case
17:z(i,18);var
O=oO(b(i));if(7<O>>>0)return c(i);switch(O){case
0:return l(i);case
1:return n(i);case
2:return x(i);case
3:return A(i);case
4:return B(i);case
5:return m(i);case
6:return D(i);default:return E(i)}case
18:z(i,18);var
P=mO(b(i));if(4<P>>>0)return c(i);switch(P){case
0:return l(i);case
1:return n(i);case
2:return o(i);case
3:return m(i);default:return F(i)}case
19:return 48;case
20:return 46;case
21:return 52;case
22:z(i,54);var
ih=b(i),jJ=61<ih?62<ih?-1:0:-1;return 0===jJ?61:c(i);case
23:return 53;case
24:return 49;case
25:return 36;case
26:z(i,66);if(0===jQ(b(i))){var
ij=ka(b(i));if(0===ij)return 0===ii(b(i))?0===ii(b(i))?0===ii(b(i))?j(i):c(i):c(i):c(i);if(1===ij){if(0===ii(b(i)))for(;;){var
il=j$(b(i));if(0===il)continue;return 1===il?j(i):c(i)}return c(i)}return c(i)}return c(i);case
27:return 37;case
28:z(i,34);var
im=iX(b(i));if(2<im>>>0)return c(i);switch(im){case
0:return j(i);case
1:return k(i);default:z(i,34);var
io=mN(b(i));if(2<io>>>0)return c(i);switch(io){case
0:return j(i);case
1:return k(i);default:z(i,19);var
ip=K(b(i));return 0===ip?j(i):1===ip?k(i):c(i)}}case
29:z(i,34);var
iq=kc(b(i));if(2<iq>>>0)return c(i);switch(iq){case
0:return j(i);case
1:return k(i);default:z(i,34);var
ir=kc(b(i));if(2<ir>>>0)return c(i);switch(ir){case
0:return j(i);case
1:return k(i);default:z(i,34);var
is=jd(b(i));if(2<is>>>0)return c(i);switch(is){case
0:return j(i);case
1:return k(i);default:z(i,20);var
it=ik(b(i));if(2<it>>>0)return c(i);switch(it){case
0:return j(i);case
1:return k(i);default:z(i,34);var
iu=iY(b(i));if(2<iu>>>0)return c(i);switch(iu){case
0:return j(i);case
1:return k(i);default:z(i,34);var
iv=iX(b(i));if(2<iv>>>0)return c(i);switch(iv){case
0:return j(i);case
1:return k(i);default:z(i,21);var
iw=K(b(i));return 0===iw?j(i):1===iw?k(i):c(i)}}}}}}case
30:z(i,34);var
a=b(i),iy=35<a?ia<a?gH<a?hy<a?-1:dF<a?e9<a?aG<a?bJ<a?eJ<a?fE<a?cy<a?hW<a?0:-1:0:-1:eM<a?dH<a?0:-1:0:-1:cf<a?bo<a?di<a?aQ<a?0:-1:0:-1:$<a?dR<a?0:-1:0:-1:cn<a?eb<a?hB<a?gI<a?ca<a?gq<a?ft<a?dC<a?ag<a?eg<a?d8<a?dw<a?cu<a?cC<a?fk<a?d_<a?0:-1:0:-1:am<a?gl<a?0:-1:0:-1:fc<a?cB<a?gr<a?fF<a?0:-1:0:-1:fQ<a?b7<a?0:-1:0:-1:at<a?ep<a?gb<a?b8<a?ew<a?eN<a?0:-1:0:-1:f8<a?fL<a?0:-1:0:-1:eR<a?aq<a?ez<a?cq<a?0:-1:0:-1:e_<a?ah<a?0:-1:0:-1:fb<a?dW<a?d5<a?a9<a?fn<a?cG<a?fS<a?ar<a?0:-1:0:-1:f7<a?e3<a?0:-1:0:-1:eA<a?ax<a?aD<a?bz<a?0:-1:0:-1:cM<a?a2<a?0:-1:0:-1:bM<a?cU<a?aR<a?fZ<a?bC<a?f2<a?0:-1:0:-1:ac<a?bS<a?0:-1:0:-1:hh<a?b$<a?gz<a?a3<a?0:-1:0:-1:f3<a?h4<a?0:-1:0:-1:b2<a?aU<a?fl<a?eO<a?eC<a?ev<a?dY<a?dK<a?c_<a?cv<a?0:-1:0:-1:b6<a?cw<a?0:-1:0:-1:ap<a?fU<a?eW<a?al<a?0:-1:0:-1:bO<a?ec<a?0:-1:0:-1:a5<a?gu<a?aA<a?fI<a?bB<a?bI<a?0:-1:0:-1:bn<a?cV<a?0:-1:0:-1:a_<a?aj<a?cx<a?bR<a?0:-1:0:-1:fs<a?fh<a?0:-1:0:-1:av<a?dP<a?cg<a?aS<a?aF<a?dt<a?f9<a?gd<a?0:-1:0:-1:e7<a?b5<a?0:-1:0:-1:bq<a?e6<a?fo<a?d1<a?0:-1:0:-1:cE<a?cI<a?0:-1:0:-1:eB<a?ds<a?et<a?bE<a?dv<a?c4<a?0:-1:0:-1:bf<a?cD<a?0:-1:0:-1:ho<a?hP<a?ie<a?c5<a?0:-1:0:-1:gO<a?gF<a?0:-1:0:-1:hR<a?gW<a?hZ<a?hk<a?gm<a?bK<a?dg<a?dX<a?hz<a?gT<a?hV<a?gX<a?0:-1:0:-1:aI<a?hG<a?0:-1:0:-1:fj<a?eH<a?g_<a?g1<a?0:-1:0:-1:dq<a?_<a?0:-1:0:-1:hA<a?h6<a?e0<a?cz<a?fO<a?fT<a?0:-1:0:-1:gD<a?dA<a?0:-1:0:-1:en<a?gK<a?hL<a?af<a?0:-1:0:-1:hC<a?ic<a?0:-1:0:-1:bg<a?f$<a?hO<a?gM<a?f6<a?gN<a?hj<a?g4<a?0:-1:0:-1:h9<a?cN<a?0:-1:0:-1:dm<a?hJ<a?g$<a?hT<a?0:-1:0:-1:ae<a?bN<a?0:-1:0:-1:gJ<a?g5<a?b4<a?ek<a?cT<a?fp<a?0:-1:0:-1:hH<a?f1<a?0:-1:0:-1:cH<a?S<a?az<a?hK<a?0:-1:0:-1:bA<a?dr<a?0:-1:0:-1:ci<a?aN<a?fv<a?fx<a?cm<a?aX<a?dx<a?fw<a?g3<a?hx<a?0:-1:0:-1:bP<a?bT<a?0:-1:0:-1:gn<a?b1<a?bd<a?gc<a?0:-1:0:-1:fy<a?a7<a?0:-1:0:-1:hn<a?e1<a?gv<a?c0<a?gk<a?a0<a?0:-1:0:-1:gp<a?ej<a?0:-1:0:-1:fV<a?fD<a?Y<a?hb<a?0:-1:0:-1:dS<a?fq<a?0:-1:0:-1:ch<a?c9<a?bj<a?Z<a?cQ<a?e$<a?R<a?V<a?0:-1:0:-1:eL<a?e2<a?0:-1:0:-1:gY<a?ao<a?dc<a?d$<a?0:-1:0:-1:fA<a?h_<a?0:-1:0:-1:W<a?bx<a?ak<a?aK<a?a8<a?cS<a?0:-1:0:-1:bQ<a?c3<a?0:-1:0:-1:du<a?dL<a?cR<a?fz<a?0:-1:0:-1:dM<a?M<a?0:-1:0:-1:U<a?f0<a?id<a?ba<a?ab<a?fB<a?fa<a?hX<a?bG<a?cr<a?cY<a?bX<a?dT<a?aP<a?0:-1:0:-1:bk<a?ck<a?0:-1:0:-1:df<a?hi<a?gE<a?bZ<a?0:-1:0:-1:gP<a?dU<a?0:-1:0:-1:g2<a?hd<a?gL<a?e5<a?f5<a?fe<a?0:-1:0:-1:hF<a?hw<a?0:-1:0:-1:dG<a?hI<a?g6<a?gG<a?0:-1:0:-1:fJ<a?eP<a?0:-1:0:-1:fW<a?db<a?aL<a?gs<a?es<a?co<a?dB<a?d3<a?0:-1:0:-1:eK<a?cc<a?0:-1:0:-1:T<a?as<a?fm<a?dn<a?0:-1:0:-1:f_<a?fR<a?0:-1:0:-1:dD<a?bb<a?ea<a?ff<a?de<a?cj<a?0:-1:0:-1:d2<a?eZ<a?0:-1:0:-1:aH<a?d0<a?cF<a?fY<a?0:-1:0:-1:b9<a?dQ<a?0:-1:0:-1:hr<a?go<a?gU<a?gy<a?eX<a?ee<a?gS<a?hs<a?h1<a?hQ<a?0:-1:0:-1:ad<a?eU<a?0:-1:0:-1:dO<a?be<a?eF<a?eo<a?0:-1:0:-1:dh<a?by<a?0:-1:0:-1:hc<a?bL<a?fH<a?aT<a?gR<a?b0<a?0:-1:0:-1:cp<a?el<a?0:-1:0:-1:h0<a?cJ<a?d4<a?dZ<a?0:-1:0:-1:hY<a?ib<a?0:-1:0:-1:hU<a?ht<a?ig<a?a1<a?h7<a?ey<a?hq<a?a4<a?0:-1:0:-1:f4<a?h5<a?0:-1:0:-1:bV<a?hM<a?h2<a?e8<a?0:-1:0:-1:bl<a?dE<a?0:-1:0:-1:eD<a?bD<a?bH<a?hN<a?gQ<a?hm<a?0:-1:0:-1:he<a?bF<a?0:-1:0:-1:bs<a?cb<a?em<a?fr<a?0:-1:0:-1:gg<a?fi<a?0:-1:0:-1:ef<a?c2<a?ct<a?cl<a?c7<a?dI<a?g0<a?g8<a?dj<a?hE<a?hp<a?cW<a?0:-1:0:-1:hv<a?bi<a?0:-1:0:-1:dl<a?cL<a?eT<a?an<a?0:-1:0:-1:gA<a?bw<a?0:-1:0:-1:cA<a?dz<a?fd<a?bc<a?d6<a?bu<a?0:-1:0:-1:fX<a?fN<a?0:-1:0:-1:c$<a?c8<a?aY<a?cK<a?0:-1:0:-1:d7<a?aE<a?0:-1:0:-1:d9<a?gZ<a?bW<a?a6<a?bt<a?h3<a?e4<a?fC<a?0:-1:0:-1:eq<a?aC<a?0:-1:0:-1:aB<a?eV<a?hS<a?gx<a?0:-1:0:-1:gV<a?cs<a?0:-1:0:-1:br<a?cX<a?fu<a?ei<a?eQ<a?gt<a?0:-1:0:-1:fM<a?ed<a?0:-1:0:-1:ai<a?aO<a?bY<a?cP<a?0:-1:0:-1:ge<a?bv<a?0:-1:0:-1:aV<a?eI<a?dy<a?gi<a?bm<a?er<a?aJ<a?ga<a?dV<a?ha<a?0:-1:0:-1:b3<a?aM<a?0:-1:0:-1:b_<a?cO<a?eh<a?fG<a?0:-1:0:-1:cd<a?fg<a?0:-1:0:-1:cZ<a?aa<a?dJ<a?bU<a?bh<a?c1<a?0:-1:0:-1:ay<a?bp<a?0:-1:0:-1:dN<a?fK<a?ce<a?gh<a?0:-1:0:-1:da<a?gw<a?0:-1:0:-1:h$<a?hD<a?fP<a?gf<a?X<a?dk<a?gj<a?dd<a?0:-1:0:-1:ex<a?au<a?0:-1:0:-1:aw<a?eE<a?eS<a?dp<a?0:-1:0:-1:h8<a?aZ<a?0:-1:0:-1:eu<a?eY<a?eG<a?hl<a?g7<a?g9<a?0:-1:0:-1:aW<a?a$<a?0:-1:0:-1:hu<a?hg<a?hf<a?c6<a?0:-1:0:-1:gB<a?gC<a?0:-1:0:-1:G(Pd,a+J|0)-1|0:-1;if(3<iy>>>0)return c(i);switch(iy){case
0:return j(i);case
1:return k(i);case
2:z(i,34);var
iz=lW(b(i));if(2<iz>>>0)return c(i);switch(iz){case
0:return j(i);case
1:return k(i);default:z(i,34);var
iA=ix(b(i));if(2<iA>>>0)return c(i);switch(iA){case
0:return j(i);case
1:return k(i);default:z(i,34);var
iB=mN(b(i));if(2<iB>>>0)return c(i);switch(iB){case
0:return j(i);case
1:return k(i);default:z(i,22);var
iC=K(b(i));return 0===iC?j(i):1===iC?k(i):c(i)}}}default:z(i,34);var
iD=ix(b(i));if(2<iD>>>0)return c(i);switch(iD){case
0:return j(i);case
1:return k(i);default:z(i,34);var
iE=ik(b(i));if(2<iE>>>0)return c(i);switch(iE){case
0:return j(i);case
1:return k(i);default:z(i,34);var
iF=iX(b(i));if(2<iF>>>0)return c(i);switch(iF){case
0:return j(i);case
1:return k(i);default:z(i,34);var
iG=kN(b(i));if(2<iG>>>0)return c(i);switch(iG){case
0:return j(i);case
1:return k(i);default:z(i,34);var
iH=kb(b(i));if(2<iH>>>0)return c(i);switch(iH){case
0:return j(i);case
1:return k(i);default:z(i,23);var
iJ=K(b(i));return 0===iJ?j(i):1===iJ?k(i):c(i)}}}}}}case
31:z(i,34);var
iK=iY(b(i));if(2<iK>>>0)return c(i);switch(iK){case
0:return j(i);case
1:return k(i);default:z(i,34);var
iL=jd(b(i));if(2<iL>>>0)return c(i);switch(iL){case
0:return j(i);case
1:return k(i);default:z(i,34);var
iM=kb(b(i));if(2<iM>>>0)return c(i);switch(iM){case
0:return j(i);case
1:return k(i);default:z(i,34);var
iN=ik(b(i));if(2<iN>>>0)return c(i);switch(iN){case
0:return j(i);case
1:return k(i);default:z(i,24);var
iO=K(b(i));return 0===iO?j(i):1===iO?k(i):c(i)}}}}case
32:z(i,34);var
iP=iX(b(i));if(2<iP>>>0)return c(i);switch(iP){case
0:return j(i);case
1:return k(i);default:z(i,34);var
iQ=ix(b(i));if(2<iQ>>>0)return c(i);switch(iQ){case
0:return j(i);case
1:return k(i);default:z(i,34);var
iR=ik(b(i));if(2<iR>>>0)return c(i);switch(iR){case
0:return j(i);case
1:return k(i);default:z(i,34);var
iS=jp(b(i));if(2<iS>>>0)return c(i);switch(iS){case
0:return j(i);case
1:return k(i);default:z(i,34);var
iT=l0(b(i));if(2<iT>>>0)return c(i);switch(iT){case
0:return j(i);case
1:return k(i);default:z(i,34);var
iU=iY(b(i));if(2<iU>>>0)return c(i);switch(iU){case
0:return j(i);case
1:return k(i);default:z(i,34);var
iV=jq(b(i));if(2<iV>>>0)return c(i);switch(iV){case
0:return j(i);case
1:return k(i);default:z(i,34);var
iW=ik(b(i));if(2<iW>>>0)return c(i);switch(iW){case
0:return j(i);case
1:return k(i);default:z(i,25);var
iZ=K(b(i));return 0===iZ?j(i):1===iZ?k(i):c(i)}}}}}}}}case
33:z(i,34);var
i0=jf(b(i));if(2<i0>>>0)return c(i);switch(i0){case
0:return j(i);case
1:return k(i);default:z(i,34);var
d=b(i),i1=35<d?ia<d?gH<d?hy<d?-1:dF<d?e9<d?aG<d?bJ<d?eJ<d?fE<d?cy<d?hW<d?0:-1:0:-1:eM<d?dH<d?0:-1:0:-1:cf<d?bo<d?di<d?aQ<d?0:-1:0:-1:$<d?dR<d?0:-1:0:-1:cn<d?eb<d?hB<d?gI<d?ca<d?gq<d?ft<d?dC<d?ag<d?eg<d?d8<d?dw<d?cu<d?cC<d?fk<d?d_<d?0:-1:0:-1:am<d?gl<d?0:-1:0:-1:fc<d?cB<d?gr<d?fF<d?0:-1:0:-1:fQ<d?b7<d?0:-1:0:-1:at<d?ep<d?gb<d?b8<d?ew<d?eN<d?0:-1:0:-1:f8<d?fL<d?0:-1:0:-1:eR<d?aq<d?ez<d?cq<d?0:-1:0:-1:e_<d?ah<d?0:-1:0:-1:fb<d?dW<d?d5<d?a9<d?fn<d?cG<d?fS<d?ar<d?0:-1:0:-1:f7<d?e3<d?0:-1:0:-1:eA<d?ax<d?aD<d?bz<d?0:-1:0:-1:cM<d?a2<d?0:-1:0:-1:bM<d?cU<d?aR<d?fZ<d?bC<d?f2<d?0:-1:0:-1:ac<d?bS<d?0:-1:0:-1:hh<d?b$<d?gz<d?a3<d?0:-1:0:-1:f3<d?h4<d?0:-1:0:-1:b2<d?aU<d?fl<d?eO<d?eC<d?ev<d?dY<d?dK<d?c_<d?cv<d?0:-1:0:-1:b6<d?cw<d?0:-1:0:-1:ap<d?fU<d?eW<d?al<d?0:-1:0:-1:bO<d?ec<d?0:-1:0:-1:a5<d?gu<d?aA<d?fI<d?bB<d?bI<d?0:-1:0:-1:bn<d?cV<d?0:-1:0:-1:a_<d?aj<d?cx<d?bR<d?0:-1:0:-1:fs<d?fh<d?0:-1:0:-1:av<d?dP<d?cg<d?aS<d?aF<d?dt<d?f9<d?gd<d?0:-1:0:-1:e7<d?b5<d?0:-1:0:-1:bq<d?e6<d?fo<d?d1<d?0:-1:0:-1:cE<d?cI<d?0:-1:0:-1:eB<d?ds<d?et<d?bE<d?dv<d?c4<d?0:-1:0:-1:bf<d?cD<d?0:-1:0:-1:ho<d?hP<d?ie<d?c5<d?0:-1:0:-1:gO<d?gF<d?0:-1:0:-1:hR<d?gW<d?hZ<d?hk<d?gm<d?bK<d?dg<d?dX<d?hz<d?gT<d?hV<d?gX<d?0:-1:0:-1:aI<d?hG<d?0:-1:0:-1:fj<d?eH<d?g_<d?g1<d?0:-1:0:-1:dq<d?_<d?0:-1:0:-1:hA<d?h6<d?e0<d?cz<d?fO<d?fT<d?0:-1:0:-1:gD<d?dA<d?0:-1:0:-1:en<d?gK<d?hL<d?af<d?0:-1:0:-1:hC<d?ic<d?0:-1:0:-1:bg<d?f$<d?hO<d?gM<d?f6<d?gN<d?hj<d?g4<d?0:-1:0:-1:h9<d?cN<d?0:-1:0:-1:dm<d?hJ<d?g$<d?hT<d?0:-1:0:-1:ae<d?bN<d?0:-1:0:-1:gJ<d?g5<d?b4<d?ek<d?cT<d?fp<d?0:-1:0:-1:hH<d?f1<d?0:-1:0:-1:cH<d?S<d?az<d?hK<d?0:-1:0:-1:bA<d?dr<d?0:-1:0:-1:ci<d?aN<d?fv<d?fx<d?cm<d?aX<d?dx<d?fw<d?g3<d?hx<d?0:-1:0:-1:bP<d?bT<d?0:-1:0:-1:gn<d?b1<d?bd<d?gc<d?0:-1:0:-1:fy<d?a7<d?0:-1:0:-1:hn<d?e1<d?gv<d?c0<d?gk<d?a0<d?0:-1:0:-1:gp<d?ej<d?0:-1:0:-1:fV<d?fD<d?Y<d?hb<d?0:-1:0:-1:dS<d?fq<d?0:-1:0:-1:ch<d?c9<d?bj<d?Z<d?cQ<d?e$<d?R<d?V<d?0:-1:0:-1:eL<d?e2<d?0:-1:0:-1:gY<d?ao<d?dc<d?d$<d?0:-1:0:-1:fA<d?h_<d?0:-1:0:-1:W<d?bx<d?ak<d?aK<d?a8<d?cS<d?0:-1:0:-1:bQ<d?c3<d?0:-1:0:-1:du<d?dL<d?cR<d?fz<d?0:-1:0:-1:dM<d?M<d?0:-1:0:-1:U<d?f0<d?id<d?ba<d?ab<d?fB<d?fa<d?hX<d?bG<d?cr<d?cY<d?bX<d?dT<d?aP<d?0:-1:0:-1:bk<d?ck<d?0:-1:0:-1:df<d?hi<d?gE<d?bZ<d?0:-1:0:-1:gP<d?dU<d?0:-1:0:-1:g2<d?hd<d?gL<d?e5<d?f5<d?fe<d?0:-1:0:-1:hF<d?hw<d?0:-1:0:-1:dG<d?hI<d?g6<d?gG<d?0:-1:0:-1:fJ<d?eP<d?0:-1:0:-1:fW<d?db<d?aL<d?gs<d?es<d?co<d?dB<d?d3<d?0:-1:0:-1:eK<d?cc<d?0:-1:0:-1:T<d?as<d?fm<d?dn<d?0:-1:0:-1:f_<d?fR<d?0:-1:0:-1:dD<d?bb<d?ea<d?ff<d?de<d?cj<d?0:-1:0:-1:d2<d?eZ<d?0:-1:0:-1:aH<d?d0<d?cF<d?fY<d?0:-1:0:-1:b9<d?dQ<d?0:-1:0:-1:hr<d?go<d?gU<d?gy<d?eX<d?ee<d?gS<d?hs<d?h1<d?hQ<d?0:-1:0:-1:ad<d?eU<d?0:-1:0:-1:dO<d?be<d?eF<d?eo<d?0:-1:0:-1:dh<d?by<d?0:-1:0:-1:hc<d?bL<d?fH<d?aT<d?gR<d?b0<d?0:-1:0:-1:cp<d?el<d?0:-1:0:-1:h0<d?cJ<d?d4<d?dZ<d?0:-1:0:-1:hY<d?ib<d?0:-1:0:-1:hU<d?ht<d?ig<d?a1<d?h7<d?ey<d?hq<d?a4<d?0:-1:0:-1:f4<d?h5<d?0:-1:0:-1:bV<d?hM<d?h2<d?e8<d?0:-1:0:-1:bl<d?dE<d?0:-1:0:-1:eD<d?bD<d?bH<d?hN<d?gQ<d?hm<d?0:-1:0:-1:he<d?bF<d?0:-1:0:-1:bs<d?cb<d?em<d?fr<d?0:-1:0:-1:gg<d?fi<d?0:-1:0:-1:ef<d?c2<d?ct<d?cl<d?c7<d?dI<d?g0<d?g8<d?dj<d?hE<d?hp<d?cW<d?0:-1:0:-1:hv<d?bi<d?0:-1:0:-1:dl<d?cL<d?eT<d?an<d?0:-1:0:-1:gA<d?bw<d?0:-1:0:-1:cA<d?dz<d?fd<d?bc<d?d6<d?bu<d?0:-1:0:-1:fX<d?fN<d?0:-1:0:-1:c$<d?c8<d?aY<d?cK<d?0:-1:0:-1:d7<d?aE<d?0:-1:0:-1:d9<d?gZ<d?bW<d?a6<d?bt<d?h3<d?e4<d?fC<d?0:-1:0:-1:eq<d?aC<d?0:-1:0:-1:aB<d?eV<d?hS<d?gx<d?0:-1:0:-1:gV<d?cs<d?0:-1:0:-1:br<d?cX<d?fu<d?ei<d?eQ<d?gt<d?0:-1:0:-1:fM<d?ed<d?0:-1:0:-1:ai<d?aO<d?bY<d?cP<d?0:-1:0:-1:ge<d?bv<d?0:-1:0:-1:aV<d?eI<d?dy<d?gi<d?bm<d?er<d?aJ<d?ga<d?dV<d?ha<d?0:-1:0:-1:b3<d?aM<d?0:-1:0:-1:b_<d?cO<d?eh<d?fG<d?0:-1:0:-1:cd<d?fg<d?0:-1:0:-1:cZ<d?aa<d?dJ<d?bU<d?bh<d?c1<d?0:-1:0:-1:ay<d?bp<d?0:-1:0:-1:dN<d?fK<d?ce<d?gh<d?0:-1:0:-1:da<d?gw<d?0:-1:0:-1:h$<d?hD<d?fP<d?gf<d?X<d?dk<d?gj<d?dd<d?0:-1:0:-1:ex<d?au<d?0:-1:0:-1:aw<d?eE<d?eS<d?dp<d?0:-1:0:-1:h8<d?aZ<d?0:-1:0:-1:eu<d?eY<d?eG<d?hl<d?g7<d?g9<d?0:-1:0:-1:aW<d?a$<d?0:-1:0:-1:hu<d?hg<d?hf<d?c6<d?0:-1:0:-1:gB<d?gC<d?0:-1:0:-1:G(O5,d+J|0)-1|0:-1;if(2<i1>>>0)return c(i);switch(i1){case
0:return j(i);case
1:return k(i);default:z(i,34);var
i2=ik(b(i));if(2<i2>>>0)return c(i);switch(i2){case
0:return j(i);case
1:return k(i);default:z(i,34);var
i3=kN(b(i));if(2<i3>>>0)return c(i);switch(i3){case
0:return j(i);case
1:return k(i);default:z(i,26);var
i4=K(b(i));return 0===i4?j(i):1===i4?k(i):c(i)}}}}case
34:z(i,34);var
i5=ks(b(i));if(2<i5>>>0)return c(i);switch(i5){case
0:return j(i);case
1:return k(i);default:z(i,34);var
e=b(i),i6=35<e?ia<e?gH<e?hy<e?-1:dF<e?e9<e?aG<e?bJ<e?eJ<e?fE<e?cy<e?hW<e?0:-1:0:-1:eM<e?dH<e?0:-1:0:-1:cf<e?bo<e?di<e?aQ<e?0:-1:0:-1:$<e?dR<e?0:-1:0:-1:cn<e?eb<e?hB<e?gI<e?ca<e?gq<e?ft<e?dC<e?ag<e?eg<e?d8<e?dw<e?cu<e?cC<e?fk<e?d_<e?0:-1:0:-1:am<e?gl<e?0:-1:0:-1:fc<e?cB<e?gr<e?fF<e?0:-1:0:-1:fQ<e?b7<e?0:-1:0:-1:at<e?ep<e?gb<e?b8<e?ew<e?eN<e?0:-1:0:-1:f8<e?fL<e?0:-1:0:-1:eR<e?aq<e?ez<e?cq<e?0:-1:0:-1:e_<e?ah<e?0:-1:0:-1:fb<e?dW<e?d5<e?a9<e?fn<e?cG<e?fS<e?ar<e?0:-1:0:-1:f7<e?e3<e?0:-1:0:-1:eA<e?ax<e?aD<e?bz<e?0:-1:0:-1:cM<e?a2<e?0:-1:0:-1:bM<e?cU<e?aR<e?fZ<e?bC<e?f2<e?0:-1:0:-1:ac<e?bS<e?0:-1:0:-1:hh<e?b$<e?gz<e?a3<e?0:-1:0:-1:f3<e?h4<e?0:-1:0:-1:b2<e?aU<e?fl<e?eO<e?eC<e?ev<e?dY<e?dK<e?c_<e?cv<e?0:-1:0:-1:b6<e?cw<e?0:-1:0:-1:ap<e?fU<e?eW<e?al<e?0:-1:0:-1:bO<e?ec<e?0:-1:0:-1:a5<e?gu<e?aA<e?fI<e?bB<e?bI<e?0:-1:0:-1:bn<e?cV<e?0:-1:0:-1:a_<e?aj<e?cx<e?bR<e?0:-1:0:-1:fs<e?fh<e?0:-1:0:-1:av<e?dP<e?cg<e?aS<e?aF<e?dt<e?f9<e?gd<e?0:-1:0:-1:e7<e?b5<e?0:-1:0:-1:bq<e?e6<e?fo<e?d1<e?0:-1:0:-1:cE<e?cI<e?0:-1:0:-1:eB<e?ds<e?et<e?bE<e?dv<e?c4<e?0:-1:0:-1:bf<e?cD<e?0:-1:0:-1:ho<e?hP<e?ie<e?c5<e?0:-1:0:-1:gO<e?gF<e?0:-1:0:-1:hR<e?gW<e?hZ<e?hk<e?gm<e?bK<e?dg<e?dX<e?hz<e?gT<e?hV<e?gX<e?0:-1:0:-1:aI<e?hG<e?0:-1:0:-1:fj<e?eH<e?g_<e?g1<e?0:-1:0:-1:dq<e?_<e?0:-1:0:-1:hA<e?h6<e?e0<e?cz<e?fO<e?fT<e?0:-1:0:-1:gD<e?dA<e?0:-1:0:-1:en<e?gK<e?hL<e?af<e?0:-1:0:-1:hC<e?ic<e?0:-1:0:-1:bg<e?f$<e?hO<e?gM<e?f6<e?gN<e?hj<e?g4<e?0:-1:0:-1:h9<e?cN<e?0:-1:0:-1:dm<e?hJ<e?g$<e?hT<e?0:-1:0:-1:ae<e?bN<e?0:-1:0:-1:gJ<e?g5<e?b4<e?ek<e?cT<e?fp<e?0:-1:0:-1:hH<e?f1<e?0:-1:0:-1:cH<e?S<e?az<e?hK<e?0:-1:0:-1:bA<e?dr<e?0:-1:0:-1:ci<e?aN<e?fv<e?fx<e?cm<e?aX<e?dx<e?fw<e?g3<e?hx<e?0:-1:0:-1:bP<e?bT<e?0:-1:0:-1:gn<e?b1<e?bd<e?gc<e?0:-1:0:-1:fy<e?a7<e?0:-1:0:-1:hn<e?e1<e?gv<e?c0<e?gk<e?a0<e?0:-1:0:-1:gp<e?ej<e?0:-1:0:-1:fV<e?fD<e?Y<e?hb<e?0:-1:0:-1:dS<e?fq<e?0:-1:0:-1:ch<e?c9<e?bj<e?Z<e?cQ<e?e$<e?R<e?V<e?0:-1:0:-1:eL<e?e2<e?0:-1:0:-1:gY<e?ao<e?dc<e?d$<e?0:-1:0:-1:fA<e?h_<e?0:-1:0:-1:W<e?bx<e?ak<e?aK<e?a8<e?cS<e?0:-1:0:-1:bQ<e?c3<e?0:-1:0:-1:du<e?dL<e?cR<e?fz<e?0:-1:0:-1:dM<e?M<e?0:-1:0:-1:U<e?f0<e?id<e?ba<e?ab<e?fB<e?fa<e?hX<e?bG<e?cr<e?cY<e?bX<e?dT<e?aP<e?0:-1:0:-1:bk<e?ck<e?0:-1:0:-1:df<e?hi<e?gE<e?bZ<e?0:-1:0:-1:gP<e?dU<e?0:-1:0:-1:g2<e?hd<e?gL<e?e5<e?f5<e?fe<e?0:-1:0:-1:hF<e?hw<e?0:-1:0:-1:dG<e?hI<e?g6<e?gG<e?0:-1:0:-1:fJ<e?eP<e?0:-1:0:-1:fW<e?db<e?aL<e?gs<e?es<e?co<e?dB<e?d3<e?0:-1:0:-1:eK<e?cc<e?0:-1:0:-1:T<e?as<e?fm<e?dn<e?0:-1:0:-1:f_<e?fR<e?0:-1:0:-1:dD<e?bb<e?ea<e?ff<e?de<e?cj<e?0:-1:0:-1:d2<e?eZ<e?0:-1:0:-1:aH<e?d0<e?cF<e?fY<e?0:-1:0:-1:b9<e?dQ<e?0:-1:0:-1:hr<e?go<e?gU<e?gy<e?eX<e?ee<e?gS<e?hs<e?h1<e?hQ<e?0:-1:0:-1:ad<e?eU<e?0:-1:0:-1:dO<e?be<e?eF<e?eo<e?0:-1:0:-1:dh<e?by<e?0:-1:0:-1:hc<e?bL<e?fH<e?aT<e?gR<e?b0<e?0:-1:0:-1:cp<e?el<e?0:-1:0:-1:h0<e?cJ<e?d4<e?dZ<e?0:-1:0:-1:hY<e?ib<e?0:-1:0:-1:hU<e?ht<e?ig<e?a1<e?h7<e?ey<e?hq<e?a4<e?0:-1:0:-1:f4<e?h5<e?0:-1:0:-1:bV<e?hM<e?h2<e?e8<e?0:-1:0:-1:bl<e?dE<e?0:-1:0:-1:eD<e?bD<e?bH<e?hN<e?gQ<e?hm<e?0:-1:0:-1:he<e?bF<e?0:-1:0:-1:bs<e?cb<e?em<e?fr<e?0:-1:0:-1:gg<e?fi<e?0:-1:0:-1:ef<e?c2<e?ct<e?cl<e?c7<e?dI<e?g0<e?g8<e?dj<e?hE<e?hp<e?cW<e?0:-1:0:-1:hv<e?bi<e?0:-1:0:-1:dl<e?cL<e?eT<e?an<e?0:-1:0:-1:gA<e?bw<e?0:-1:0:-1:cA<e?dz<e?fd<e?bc<e?d6<e?bu<e?0:-1:0:-1:fX<e?fN<e?0:-1:0:-1:c$<e?c8<e?aY<e?cK<e?0:-1:0:-1:d7<e?aE<e?0:-1:0:-1:d9<e?gZ<e?bW<e?a6<e?bt<e?h3<e?e4<e?fC<e?0:-1:0:-1:eq<e?aC<e?0:-1:0:-1:aB<e?eV<e?hS<e?gx<e?0:-1:0:-1:gV<e?cs<e?0:-1:0:-1:br<e?cX<e?fu<e?ei<e?eQ<e?gt<e?0:-1:0:-1:fM<e?ed<e?0:-1:0:-1:ai<e?aO<e?bY<e?cP<e?0:-1:0:-1:ge<e?bv<e?0:-1:0:-1:aV<e?eI<e?dy<e?gi<e?bm<e?er<e?aJ<e?ga<e?dV<e?ha<e?0:-1:0:-1:b3<e?aM<e?0:-1:0:-1:b_<e?cO<e?eh<e?fG<e?0:-1:0:-1:cd<e?fg<e?0:-1:0:-1:cZ<e?aa<e?dJ<e?bU<e?bh<e?c1<e?0:-1:0:-1:ay<e?bp<e?0:-1:0:-1:dN<e?fK<e?ce<e?gh<e?0:-1:0:-1:da<e?gw<e?0:-1:0:-1:h$<e?hD<e?fP<e?gf<e?X<e?dk<e?gj<e?dd<e?0:-1:0:-1:ex<e?au<e?0:-1:0:-1:aw<e?eE<e?eS<e?dp<e?0:-1:0:-1:h8<e?aZ<e?0:-1:0:-1:eu<e?eY<e?eG<e?hl<e?g7<e?g9<e?0:-1:0:-1:aW<e?a$<e?0:-1:0:-1:hu<e?hg<e?hf<e?c6<e?0:-1:0:-1:gB<e?gC<e?0:-1:0:-1:G(Ps,e+J|0)-1|0:-1;if(3<i6>>>0)return c(i);switch(i6){case
0:return j(i);case
1:return k(i);case
2:z(i,34);var
i7=jd(b(i));if(2<i7>>>0)return c(i);switch(i7){case
0:return j(i);case
1:return k(i);default:z(i,27);var
i8=K(b(i));return 0===i8?j(i):1===i8?k(i):c(i)}default:z(i,34);var
i9=rT(b(i));if(2<i9>>>0)return c(i);switch(i9){case
0:return j(i);case
1:return k(i);default:z(i,34);var
i_=ik(b(i));if(2<i_>>>0)return c(i);switch(i_){case
0:return j(i);case
1:return k(i);default:z(i,34);var
i$=jp(b(i));if(2<i$>>>0)return c(i);switch(i$){case
0:return j(i);case
1:return k(i);default:z(i,28);var
ja=K(b(i));return 0===ja?j(i):1===ja?k(i):c(i)}}}}}case
35:z(i,34);var
jb=ix(b(i));if(2<jb>>>0)return c(i);switch(jb){case
0:return j(i);case
1:return k(i);default:z(i,34);var
f=b(i),jc=35<f?ia<f?gH<f?hy<f?-1:dF<f?e9<f?aG<f?bJ<f?eJ<f?fE<f?cy<f?hW<f?0:-1:0:-1:eM<f?dH<f?0:-1:0:-1:cf<f?bo<f?di<f?aQ<f?0:-1:0:-1:$<f?dR<f?0:-1:0:-1:cn<f?eb<f?hB<f?gI<f?ca<f?gq<f?ft<f?dC<f?ag<f?eg<f?d8<f?dw<f?cu<f?cC<f?fk<f?d_<f?0:-1:0:-1:am<f?gl<f?0:-1:0:-1:fc<f?cB<f?gr<f?fF<f?0:-1:0:-1:fQ<f?b7<f?0:-1:0:-1:at<f?ep<f?gb<f?b8<f?ew<f?eN<f?0:-1:0:-1:f8<f?fL<f?0:-1:0:-1:eR<f?aq<f?ez<f?cq<f?0:-1:0:-1:e_<f?ah<f?0:-1:0:-1:fb<f?dW<f?d5<f?a9<f?fn<f?cG<f?fS<f?ar<f?0:-1:0:-1:f7<f?e3<f?0:-1:0:-1:eA<f?ax<f?aD<f?bz<f?0:-1:0:-1:cM<f?a2<f?0:-1:0:-1:bM<f?cU<f?aR<f?fZ<f?bC<f?f2<f?0:-1:0:-1:ac<f?bS<f?0:-1:0:-1:hh<f?b$<f?gz<f?a3<f?0:-1:0:-1:f3<f?h4<f?0:-1:0:-1:b2<f?aU<f?fl<f?eO<f?eC<f?ev<f?dY<f?dK<f?c_<f?cv<f?0:-1:0:-1:b6<f?cw<f?0:-1:0:-1:ap<f?fU<f?eW<f?al<f?0:-1:0:-1:bO<f?ec<f?0:-1:0:-1:a5<f?gu<f?aA<f?fI<f?bB<f?bI<f?0:-1:0:-1:bn<f?cV<f?0:-1:0:-1:a_<f?aj<f?cx<f?bR<f?0:-1:0:-1:fs<f?fh<f?0:-1:0:-1:av<f?dP<f?cg<f?aS<f?aF<f?dt<f?f9<f?gd<f?0:-1:0:-1:e7<f?b5<f?0:-1:0:-1:bq<f?e6<f?fo<f?d1<f?0:-1:0:-1:cE<f?cI<f?0:-1:0:-1:eB<f?ds<f?et<f?bE<f?dv<f?c4<f?0:-1:0:-1:bf<f?cD<f?0:-1:0:-1:ho<f?hP<f?ie<f?c5<f?0:-1:0:-1:gO<f?gF<f?0:-1:0:-1:hR<f?gW<f?hZ<f?hk<f?gm<f?bK<f?dg<f?dX<f?hz<f?gT<f?hV<f?gX<f?0:-1:0:-1:aI<f?hG<f?0:-1:0:-1:fj<f?eH<f?g_<f?g1<f?0:-1:0:-1:dq<f?_<f?0:-1:0:-1:hA<f?h6<f?e0<f?cz<f?fO<f?fT<f?0:-1:0:-1:gD<f?dA<f?0:-1:0:-1:en<f?gK<f?hL<f?af<f?0:-1:0:-1:hC<f?ic<f?0:-1:0:-1:bg<f?f$<f?hO<f?gM<f?f6<f?gN<f?hj<f?g4<f?0:-1:0:-1:h9<f?cN<f?0:-1:0:-1:dm<f?hJ<f?g$<f?hT<f?0:-1:0:-1:ae<f?bN<f?0:-1:0:-1:gJ<f?g5<f?b4<f?ek<f?cT<f?fp<f?0:-1:0:-1:hH<f?f1<f?0:-1:0:-1:cH<f?S<f?az<f?hK<f?0:-1:0:-1:bA<f?dr<f?0:-1:0:-1:ci<f?aN<f?fv<f?fx<f?cm<f?aX<f?dx<f?fw<f?g3<f?hx<f?0:-1:0:-1:bP<f?bT<f?0:-1:0:-1:gn<f?b1<f?bd<f?gc<f?0:-1:0:-1:fy<f?a7<f?0:-1:0:-1:hn<f?e1<f?gv<f?c0<f?gk<f?a0<f?0:-1:0:-1:gp<f?ej<f?0:-1:0:-1:fV<f?fD<f?Y<f?hb<f?0:-1:0:-1:dS<f?fq<f?0:-1:0:-1:ch<f?c9<f?bj<f?Z<f?cQ<f?e$<f?R<f?V<f?0:-1:0:-1:eL<f?e2<f?0:-1:0:-1:gY<f?ao<f?dc<f?d$<f?0:-1:0:-1:fA<f?h_<f?0:-1:0:-1:W<f?bx<f?ak<f?aK<f?a8<f?cS<f?0:-1:0:-1:bQ<f?c3<f?0:-1:0:-1:du<f?dL<f?cR<f?fz<f?0:-1:0:-1:dM<f?M<f?0:-1:0:-1:U<f?f0<f?id<f?ba<f?ab<f?fB<f?fa<f?hX<f?bG<f?cr<f?cY<f?bX<f?dT<f?aP<f?0:-1:0:-1:bk<f?ck<f?0:-1:0:-1:df<f?hi<f?gE<f?bZ<f?0:-1:0:-1:gP<f?dU<f?0:-1:0:-1:g2<f?hd<f?gL<f?e5<f?f5<f?fe<f?0:-1:0:-1:hF<f?hw<f?0:-1:0:-1:dG<f?hI<f?g6<f?gG<f?0:-1:0:-1:fJ<f?eP<f?0:-1:0:-1:fW<f?db<f?aL<f?gs<f?es<f?co<f?dB<f?d3<f?0:-1:0:-1:eK<f?cc<f?0:-1:0:-1:T<f?as<f?fm<f?dn<f?0:-1:0:-1:f_<f?fR<f?0:-1:0:-1:dD<f?bb<f?ea<f?ff<f?de<f?cj<f?0:-1:0:-1:d2<f?eZ<f?0:-1:0:-1:aH<f?d0<f?cF<f?fY<f?0:-1:0:-1:b9<f?dQ<f?0:-1:0:-1:hr<f?go<f?gU<f?gy<f?eX<f?ee<f?gS<f?hs<f?h1<f?hQ<f?0:-1:0:-1:ad<f?eU<f?0:-1:0:-1:dO<f?be<f?eF<f?eo<f?0:-1:0:-1:dh<f?by<f?0:-1:0:-1:hc<f?bL<f?fH<f?aT<f?gR<f?b0<f?0:-1:0:-1:cp<f?el<f?0:-1:0:-1:h0<f?cJ<f?d4<f?dZ<f?0:-1:0:-1:hY<f?ib<f?0:-1:0:-1:hU<f?ht<f?ig<f?a1<f?h7<f?ey<f?hq<f?a4<f?0:-1:0:-1:f4<f?h5<f?0:-1:0:-1:bV<f?hM<f?h2<f?e8<f?0:-1:0:-1:bl<f?dE<f?0:-1:0:-1:eD<f?bD<f?bH<f?hN<f?gQ<f?hm<f?0:-1:0:-1:he<f?bF<f?0:-1:0:-1:bs<f?cb<f?em<f?fr<f?0:-1:0:-1:gg<f?fi<f?0:-1:0:-1:ef<f?c2<f?ct<f?cl<f?c7<f?dI<f?g0<f?g8<f?dj<f?hE<f?hp<f?cW<f?0:-1:0:-1:hv<f?bi<f?0:-1:0:-1:dl<f?cL<f?eT<f?an<f?0:-1:0:-1:gA<f?bw<f?0:-1:0:-1:cA<f?dz<f?fd<f?bc<f?d6<f?bu<f?0:-1:0:-1:fX<f?fN<f?0:-1:0:-1:c$<f?c8<f?aY<f?cK<f?0:-1:0:-1:d7<f?aE<f?0:-1:0:-1:d9<f?gZ<f?bW<f?a6<f?bt<f?h3<f?e4<f?fC<f?0:-1:0:-1:eq<f?aC<f?0:-1:0:-1:aB<f?eV<f?hS<f?gx<f?0:-1:0:-1:gV<f?cs<f?0:-1:0:-1:br<f?cX<f?fu<f?ei<f?eQ<f?gt<f?0:-1:0:-1:fM<f?ed<f?0:-1:0:-1:ai<f?aO<f?bY<f?cP<f?0:-1:0:-1:ge<f?bv<f?0:-1:0:-1:aV<f?eI<f?dy<f?gi<f?bm<f?er<f?aJ<f?ga<f?dV<f?ha<f?0:-1:0:-1:b3<f?aM<f?0:-1:0:-1:b_<f?cO<f?eh<f?fG<f?0:-1:0:-1:cd<f?fg<f?0:-1:0:-1:cZ<f?aa<f?dJ<f?bU<f?bh<f?c1<f?0:-1:0:-1:ay<f?bp<f?0:-1:0:-1:dN<f?fK<f?ce<f?gh<f?0:-1:0:-1:da<f?gw<f?0:-1:0:-1:h$<f?hD<f?fP<f?gf<f?X<f?dk<f?gj<f?dd<f?0:-1:0:-1:ex<f?au<f?0:-1:0:-1:aw<f?eE<f?eS<f?dp<f?0:-1:0:-1:h8<f?aZ<f?0:-1:0:-1:eu<f?eY<f?eG<f?hl<f?g7<f?g9<f?0:-1:0:-1:aW<f?a$<f?0:-1:0:-1:hu<f?hg<f?hf<f?c6<f?0:-1:0:-1:gB<f?gC<f?0:-1:0:-1:G(O7,f+J|0)-1|0:-1;if(3<jc>>>0)return c(i);switch(jc){case
0:return j(i);case
1:return k(i);case
2:z(i,34);var
jg=ix(b(i));if(2<jg>>>0)return c(i);switch(jg){case
0:return j(i);case
1:return k(i);default:z(i,34);var
jh=jf(b(i));if(2<jh>>>0)return c(i);switch(jh){case
0:return j(i);case
1:return k(i);default:z(i,34);var
ji=jq(b(i));if(2<ji>>>0)return c(i);switch(ji){case
0:return j(i);case
1:return k(i);default:z(i,29);var
jj=K(b(i));return 0===jj?j(i):1===jj?k(i):c(i)}}}default:z(i,34);var
jk=jf(b(i));if(2<jk>>>0)return c(i);switch(jk){case
0:return j(i);case
1:return k(i);default:z(i,34);var
jl=iX(b(i));if(2<jl>>>0)return c(i);switch(jl){case
0:return j(i);case
1:return k(i);default:z(i,34);var
jm=mF(b(i));if(2<jm>>>0)return c(i);switch(jm){case
0:return j(i);case
1:return k(i);default:z(i,30);var
jn=K(b(i));return 0===jn?j(i):1===jn?k(i):c(i)}}}}}case
36:z(i,34);var
g=b(i),jo=35<g?ia<g?gH<g?hy<g?-1:dF<g?e9<g?aG<g?bJ<g?eJ<g?fE<g?cy<g?hW<g?0:-1:0:-1:eM<g?dH<g?0:-1:0:-1:cf<g?bo<g?di<g?aQ<g?0:-1:0:-1:$<g?dR<g?0:-1:0:-1:cn<g?eb<g?hB<g?gI<g?ca<g?gq<g?ft<g?dC<g?ag<g?eg<g?d8<g?dw<g?cu<g?cC<g?fk<g?d_<g?0:-1:0:-1:am<g?gl<g?0:-1:0:-1:fc<g?cB<g?gr<g?fF<g?0:-1:0:-1:fQ<g?b7<g?0:-1:0:-1:at<g?ep<g?gb<g?b8<g?ew<g?eN<g?0:-1:0:-1:f8<g?fL<g?0:-1:0:-1:eR<g?aq<g?ez<g?cq<g?0:-1:0:-1:e_<g?ah<g?0:-1:0:-1:fb<g?dW<g?d5<g?a9<g?fn<g?cG<g?fS<g?ar<g?0:-1:0:-1:f7<g?e3<g?0:-1:0:-1:eA<g?ax<g?aD<g?bz<g?0:-1:0:-1:cM<g?a2<g?0:-1:0:-1:bM<g?cU<g?aR<g?fZ<g?bC<g?f2<g?0:-1:0:-1:ac<g?bS<g?0:-1:0:-1:hh<g?b$<g?gz<g?a3<g?0:-1:0:-1:f3<g?h4<g?0:-1:0:-1:b2<g?aU<g?fl<g?eO<g?eC<g?ev<g?dY<g?dK<g?c_<g?cv<g?0:-1:0:-1:b6<g?cw<g?0:-1:0:-1:ap<g?fU<g?eW<g?al<g?0:-1:0:-1:bO<g?ec<g?0:-1:0:-1:a5<g?gu<g?aA<g?fI<g?bB<g?bI<g?0:-1:0:-1:bn<g?cV<g?0:-1:0:-1:a_<g?aj<g?cx<g?bR<g?0:-1:0:-1:fs<g?fh<g?0:-1:0:-1:av<g?dP<g?cg<g?aS<g?aF<g?dt<g?f9<g?gd<g?0:-1:0:-1:e7<g?b5<g?0:-1:0:-1:bq<g?e6<g?fo<g?d1<g?0:-1:0:-1:cE<g?cI<g?0:-1:0:-1:eB<g?ds<g?et<g?bE<g?dv<g?c4<g?0:-1:0:-1:bf<g?cD<g?0:-1:0:-1:ho<g?hP<g?ie<g?c5<g?0:-1:0:-1:gO<g?gF<g?0:-1:0:-1:hR<g?gW<g?hZ<g?hk<g?gm<g?bK<g?dg<g?dX<g?hz<g?gT<g?hV<g?gX<g?0:-1:0:-1:aI<g?hG<g?0:-1:0:-1:fj<g?eH<g?g_<g?g1<g?0:-1:0:-1:dq<g?_<g?0:-1:0:-1:hA<g?h6<g?e0<g?cz<g?fO<g?fT<g?0:-1:0:-1:gD<g?dA<g?0:-1:0:-1:en<g?gK<g?hL<g?af<g?0:-1:0:-1:hC<g?ic<g?0:-1:0:-1:bg<g?f$<g?hO<g?gM<g?f6<g?gN<g?hj<g?g4<g?0:-1:0:-1:h9<g?cN<g?0:-1:0:-1:dm<g?hJ<g?g$<g?hT<g?0:-1:0:-1:ae<g?bN<g?0:-1:0:-1:gJ<g?g5<g?b4<g?ek<g?cT<g?fp<g?0:-1:0:-1:hH<g?f1<g?0:-1:0:-1:cH<g?S<g?az<g?hK<g?0:-1:0:-1:bA<g?dr<g?0:-1:0:-1:ci<g?aN<g?fv<g?fx<g?cm<g?aX<g?dx<g?fw<g?g3<g?hx<g?0:-1:0:-1:bP<g?bT<g?0:-1:0:-1:gn<g?b1<g?bd<g?gc<g?0:-1:0:-1:fy<g?a7<g?0:-1:0:-1:hn<g?e1<g?gv<g?c0<g?gk<g?a0<g?0:-1:0:-1:gp<g?ej<g?0:-1:0:-1:fV<g?fD<g?Y<g?hb<g?0:-1:0:-1:dS<g?fq<g?0:-1:0:-1:ch<g?c9<g?bj<g?Z<g?cQ<g?e$<g?R<g?V<g?0:-1:0:-1:eL<g?e2<g?0:-1:0:-1:gY<g?ao<g?dc<g?d$<g?0:-1:0:-1:fA<g?h_<g?0:-1:0:-1:W<g?bx<g?ak<g?aK<g?a8<g?cS<g?0:-1:0:-1:bQ<g?c3<g?0:-1:0:-1:du<g?dL<g?cR<g?fz<g?0:-1:0:-1:dM<g?M<g?0:-1:0:-1:U<g?f0<g?id<g?ba<g?ab<g?fB<g?fa<g?hX<g?bG<g?cr<g?cY<g?bX<g?dT<g?aP<g?0:-1:0:-1:bk<g?ck<g?0:-1:0:-1:df<g?hi<g?gE<g?bZ<g?0:-1:0:-1:gP<g?dU<g?0:-1:0:-1:g2<g?hd<g?gL<g?e5<g?f5<g?fe<g?0:-1:0:-1:hF<g?hw<g?0:-1:0:-1:dG<g?hI<g?g6<g?gG<g?0:-1:0:-1:fJ<g?eP<g?0:-1:0:-1:fW<g?db<g?aL<g?gs<g?es<g?co<g?dB<g?d3<g?0:-1:0:-1:eK<g?cc<g?0:-1:0:-1:T<g?as<g?fm<g?dn<g?0:-1:0:-1:f_<g?fR<g?0:-1:0:-1:dD<g?bb<g?ea<g?ff<g?de<g?cj<g?0:-1:0:-1:d2<g?eZ<g?0:-1:0:-1:aH<g?d0<g?cF<g?fY<g?0:-1:0:-1:b9<g?dQ<g?0:-1:0:-1:hr<g?go<g?gU<g?gy<g?eX<g?ee<g?gS<g?hs<g?h1<g?hQ<g?0:-1:0:-1:ad<g?eU<g?0:-1:0:-1:dO<g?be<g?eF<g?eo<g?0:-1:0:-1:dh<g?by<g?0:-1:0:-1:hc<g?bL<g?fH<g?aT<g?gR<g?b0<g?0:-1:0:-1:cp<g?el<g?0:-1:0:-1:h0<g?cJ<g?d4<g?dZ<g?0:-1:0:-1:hY<g?ib<g?0:-1:0:-1:hU<g?ht<g?ig<g?a1<g?h7<g?ey<g?hq<g?a4<g?0:-1:0:-1:f4<g?h5<g?0:-1:0:-1:bV<g?hM<g?h2<g?e8<g?0:-1:0:-1:bl<g?dE<g?0:-1:0:-1:eD<g?bD<g?bH<g?hN<g?gQ<g?hm<g?0:-1:0:-1:he<g?bF<g?0:-1:0:-1:bs<g?cb<g?em<g?fr<g?0:-1:0:-1:gg<g?fi<g?0:-1:0:-1:ef<g?c2<g?ct<g?cl<g?c7<g?dI<g?g0<g?g8<g?dj<g?hE<g?hp<g?cW<g?0:-1:0:-1:hv<g?bi<g?0:-1:0:-1:dl<g?cL<g?eT<g?an<g?0:-1:0:-1:gA<g?bw<g?0:-1:0:-1:cA<g?dz<g?fd<g?bc<g?d6<g?bu<g?0:-1:0:-1:fX<g?fN<g?0:-1:0:-1:c$<g?c8<g?aY<g?cK<g?0:-1:0:-1:d7<g?aE<g?0:-1:0:-1:d9<g?gZ<g?bW<g?a6<g?bt<g?h3<g?e4<g?fC<g?0:-1:0:-1:eq<g?aC<g?0:-1:0:-1:aB<g?eV<g?hS<g?gx<g?0:-1:0:-1:gV<g?cs<g?0:-1:0:-1:br<g?cX<g?fu<g?ei<g?eQ<g?gt<g?0:-1:0:-1:fM<g?ed<g?0:-1:0:-1:ai<g?aO<g?bY<g?cP<g?0:-1:0:-1:ge<g?bv<g?0:-1:0:-1:aV<g?eI<g?dy<g?gi<g?bm<g?er<g?aJ<g?ga<g?dV<g?ha<g?0:-1:0:-1:b3<g?aM<g?0:-1:0:-1:b_<g?cO<g?eh<g?fG<g?0:-1:0:-1:cd<g?fg<g?0:-1:0:-1:cZ<g?aa<g?dJ<g?bU<g?bh<g?c1<g?0:-1:0:-1:ay<g?bp<g?0:-1:0:-1:dN<g?fK<g?ce<g?gh<g?0:-1:0:-1:da<g?gw<g?0:-1:0:-1:h$<g?hD<g?fP<g?gf<g?X<g?dk<g?gj<g?dd<g?0:-1:0:-1:ex<g?au<g?0:-1:0:-1:aw<g?eE<g?eS<g?dp<g?0:-1:0:-1:h8<g?aZ<g?0:-1:0:-1:eu<g?eY<g?eG<g?hl<g?g7<g?g9<g?0:-1:0:-1:aW<g?a$<g?0:-1:0:-1:hu<g?hg<g?hf<g?c6<g?0:-1:0:-1:gB<g?gC<g?0:-1:0:-1:G(PE,g+J|0)-1|0:-1;if(3<jo>>>0)return c(i);switch(jo){case
0:return j(i);case
1:return k(i);case
2:z(i,34);var
jr=ks(b(i));if(2<jr>>>0)return c(i);switch(jr){case
0:return j(i);case
1:return k(i);default:z(i,34);var
js=ik(b(i));if(2<js>>>0)return c(i);switch(js){case
0:return j(i);case
1:return k(i);default:z(i,31);var
jt=K(b(i));return 0===jt?j(i):1===jt?k(i):c(i)}}default:z(i,34);var
jv=lW(b(i));if(2<jv>>>0)return c(i);switch(jv){case
0:return j(i);case
1:return k(i);default:z(i,34);var
jx=ik(b(i));if(2<jx>>>0)return c(i);switch(jx){case
0:return j(i);case
1:return k(i);default:z(i,34);var
jy=kc(b(i));if(2<jy>>>0)return c(i);switch(jy){case
0:return j(i);case
1:return k(i);default:z(i,34);var
jz=l0(b(i));if(2<jz>>>0)return c(i);switch(jz){case
0:return j(i);case
1:return k(i);default:z(i,32);var
jA=K(b(i));return 0===jA?j(i):1===jA?k(i):c(i)}}}}}case
37:z(i,34);var
jB=kc(b(i));if(2<jB>>>0)return c(i);switch(jB){case
0:return j(i);case
1:return k(i);default:z(i,34);var
jC=jf(b(i));if(2<jC>>>0)return c(i);switch(jC){case
0:return j(i);case
1:return k(i);default:z(i,34);var
jD=kN(b(i));if(2<jD>>>0)return c(i);switch(jD){case
0:return j(i);case
1:return k(i);default:z(i,33);var
jE=K(b(i));return 0===jE?j(i):1===jE?k(i):c(i)}}}case
38:z(i,38);var
jF=b(i),jK=lA<jF?oa<jF?-1:0:-1;return 0===jK?40:c(i);case
39:z(i,58);var
jG=b(i),jL=oa<jG?pN<jG?-1:0:-1;return 0===jL?41:c(i);default:return 39}}io(d);var
ih=iG(d);if(66<ih>>>0)return N(YV);var
r=ih;if(34<=r)switch(r){case
34:var
iV=O(a,d),iE=L(d),iF=r5(a,iE);return[0,iF[1],[3,iV,iF[2],iE]];case
35:return[0,a,66];case
38:return[0,a,0];case
39:return[0,a,1];case
40:return[0,a,2];case
41:return[0,a,3];case
42:return[0,a,4];case
43:return[0,a,5];case
44:return[0,a,12];case
45:return[0,a,10];case
46:return[0,a,8];case
47:return[0,a,9];case
52:return[0,a,95];case
53:return[0,a,96];case
56:return[0,a,iI];case
58:return[0,a,86];case
59:return[0,a,88];case
61:return[0,a,11];case
63:return[0,a,jS];case
64:return[0,a,jv];case
65:var
iW=a[4]?jD(a,O(a,d),7):a;return[0,iW,iq];case
66:return[0,a,[5,L(d)]];case
60:break;case
36:case
50:return[0,a,6];case
37:case
51:return[0,a,7];case
48:case
57:return[0,a,83];case
49:case
55:return[0,a,82];default:return[0,a,79]}else
switch(r){case
0:return[1,jr(a,d)];case
1:return[1,a];case
2:var
iH=O(a,d),ij=im(il),ir=kO(a,ij,d);return[1,js(ir[1],iH,ir[2],ij,1)];case
3:var
it=L(d);if(a[5]){var
iJ=a[4]?r1(a,O(a,d),it):a,iu=mD(1,iJ),iy=oG(d);if(i5(lV(d,iy-1|0,1),YW))if(C(lV(d,iy-2|0,1),YX))return[0,iu,83];return[1,iu]}var
iK=O(a,d),h=im(il);P(h,it);var
iz=kO(a,h,d);return[1,js(iz[1],iK,iz[2],h,1)];case
4:if(a[4])return[1,mD(0,a)];lU(d);var
iL=function(a){return 0===rH(b(a))?0:c(a)};io(d);return 0===iL(d)?[0,a,iI]:N(YY);case
5:var
iM=O(a,d),iA=im(il),iB=ln(a,iA,d);return[1,js(iB[1],iM,iB[2],iA,0)];case
6:var
iC=L(d),iN=O(a,d),iD=im(il),i=im(il);P(i,iC);var
p=r7(a,iC,iD,i,0,d),iP=I(iN,p[2]),iQ=p[3],iR=iw(i),iS=[1,[0,iP,iw(iD),iR,iQ]];return[0,p[1],iS];case
7:return jt(a,d,function(h,a){function
d(a){if(0===rD(b(a))){if(0===lh(b(a)))for(;;){z(a,0);var
d=mH(b(a));if(0===d)continue;if(1===d)a:for(;;){if(0===lh(b(a)))for(;;){z(a,0);var
e=mH(b(a));if(0===e)continue;if(1===e)continue a;return c(a)}return c(a)}return c(a)}return c(a)}return c(a)}io(a);var
e=mQ(b(a));if(0===e)for(;;){var
f=mG(b(a));if(0===f)continue;var
g=1===f?d(a):c(a);break}else
var
g=1===e?d(a):c(a);return 0===g?[0,h,jF(0,L(a))]:N(YZ)});case
8:return[0,a,jF(0,L(d))];case
9:return jt(a,d,function(h,a){function
d(a){if(0===rG(b(a))){if(0===iZ(b(a)))for(;;){z(a,0);var
d=ku(b(a));if(0===d)continue;if(1===d)a:for(;;){if(0===iZ(b(a)))for(;;){z(a,0);var
e=ku(b(a));if(0===e)continue;if(1===e)continue a;return c(a)}return c(a)}return c(a)}return c(a)}return c(a)}io(a);var
e=mQ(b(a));if(0===e)for(;;){var
f=mG(b(a));if(0===f)continue;var
g=1===f?d(a):c(a);break}else
var
g=1===e?d(a):c(a);return 0===g?[0,h,jF(2,L(a))]:N(Y0)});case
10:return[0,a,jF(2,L(d))];case
11:return jt(a,d,function(h,a){function
d(a){if(0===iZ(b(a)))for(;;){z(a,0);var
d=ku(b(a));if(0===d)continue;if(1===d)a:for(;;){if(0===iZ(b(a)))for(;;){z(a,0);var
e=ku(b(a));if(0===e)continue;if(1===e)continue a;return c(a)}return c(a)}return c(a)}return c(a)}io(a);var
e=mQ(b(a));if(0===e)for(;;){var
f=mG(b(a));if(0===f)continue;var
g=1===f?d(a):c(a);break}else
var
g=1===e?d(a):c(a);return 0===g?[0,h,jF(1,L(a))]:N(Y1)});case
12:return[0,a,jF(1,L(d))];case
13:return jt(a,d,function(d,a){function
e(a){if(0===rw(b(a))){if(0===ii(b(a)))for(;;){z(a,0);var
d=mS(b(a));if(0===d)continue;if(1===d)a:for(;;){if(0===ii(b(a)))for(;;){z(a,0);var
e=mS(b(a));if(0===e)continue;if(1===e)continue a;return c(a)}return c(a)}return c(a)}return c(a)}return c(a)}function
f(a){var
d=mQ(b(a));if(0===d)for(;;){var
f=mG(b(a));if(0===f)continue;return 1===f?e(a):c(a)}return 1===d?e(a):c(a)}io(a);if(0===f(a)){var
g=L(a);try{var
h=[0,d,jF(3,g)];return h}catch(b){b=iO(b);if(mz)return[0,jD(d,O(d,a),68),Y2];throw b}}return N(Y3)});case
14:var
iT=L(d);try{var
iU=[0,a,jF(3,iT)];return iU}catch(b){b=iO(b);if(mz)return[0,jD(a,O(a,d),68),Y4];throw b}case
15:return jt(a,d,function(n,a){function
h(a){for(;;){z(a,0);var
d=kw(b(a));if(0===d)continue;if(1===d)a:for(;;){if(0===ip(b(a)))for(;;){z(a,0);var
e=kw(b(a));if(0===e)continue;if(1===e)continue a;return c(a)}return c(a)}return c(a)}}function
g(a){for(;;){z(a,0);if(0===ip(b(a)))continue;return c(a)}}function
e(a){var
d=rX(b(a));if(2<d>>>0)return c(a);switch(d){case
0:var
e=mJ(b(a));return 0===e?g(a):1===e?h(a):c(a);case
1:return g(a);default:return h(a)}}function
f(a){if(0===ip(b(a)))for(;;){var
d=kx(b(a));if(2<d>>>0)return c(a);switch(d){case
0:continue;case
1:return e(a);default:a:for(;;){if(0===ip(b(a)))for(;;){var
f=kx(b(a));if(2<f>>>0)return c(a);switch(f){case
0:continue;case
1:return e(a);default:continue a}}return c(a)}}}return c(a)}function
j(a){var
d=rJ(b(a));if(0===d)for(;;){var
f=kx(b(a));if(2<f>>>0)return c(a);switch(f){case
0:continue;case
1:return e(a);default:a:for(;;){if(0===ip(b(a)))for(;;){var
g=kx(b(a));if(2<g>>>0)return c(a);switch(g){case
0:continue;case
1:return e(a);default:continue a}}return c(a)}}}return 1===d?e(a):c(a)}function
i(a){var
d=rz(b(a));return 0===d?j(a):1===d?e(a):c(a)}function
k(a){for(;;){var
d=rF(b(a));if(2<d>>>0)return c(a);switch(d){case
0:return j(a);case
1:continue;default:return e(a)}}}io(a);var
l=rB(b(a));if(3<l>>>0)var
d=c(a);else
switch(l){case
0:for(;;){var
m=oR(b(a));if(3<m>>>0)var
d=c(a);else
switch(m){case
0:continue;case
1:var
d=f(a);break;case
2:var
d=i(a);break;default:var
d=k(a)}break}break;case
1:var
d=f(a);break;case
2:var
d=i(a);break;default:var
d=k(a)}return 0===d?[0,n,jF(3,L(a))]:N(Y5)});case
17:return jt(a,d,function(r,a){function
i(a){for(;;){z(a,0);var
d=kw(b(a));if(0===d)continue;if(1===d)a:for(;;){if(0===ip(b(a)))for(;;){z(a,0);var
e=kw(b(a));if(0===e)continue;if(1===e)continue a;return c(a)}return c(a)}return c(a)}}function
f(a){z(a,0);return 0===ip(b(a))?i(a):c(a)}io(a);var
j=rB(b(a));if(3<j>>>0)var
e=c(a);else
switch(j){case
0:for(;;){var
d=b(a),k=8<d?mn<d?jT<d?jZ<d?-1:jX<d?j2<d?0:-1:jV<d?j0<d?jW<d?j1<d?0:-1:0:-1:j3<d?jU<d?0:-1:0:-1:G(Oy,d-9|0)-1|0:-1;if(2<k>>>0)var
e=c(a);else
switch(k){case
0:continue;case
1:for(;;){z(a,0);var
l=lY(b(a));if(0===l)var
e=0;else{if(1===l)continue;var
e=c(a)}break}break;default:for(;;){z(a,0);var
m=lk(b(a));if(2<m>>>0)var
e=c(a);else
switch(m){case
0:var
e=0;break;case
1:continue;default:c:for(;;){if(0===ip(b(a)))for(;;){z(a,0);var
n=lk(b(a));if(2<n>>>0)var
g=c(a);else
switch(n){case
0:var
g=0;break;case
1:continue;default:continue c}break}else
var
g=c(a);var
e=g;break}}break}}break}break;case
1:var
e=0===ip(b(a))?i(a):c(a);break;case
2:for(;;){z(a,0);var
o=lY(b(a));if(0===o)var
e=f(a);else{if(1===o)continue;var
e=c(a)}break}break;default:for(;;){z(a,0);var
p=lk(b(a));if(2<p>>>0)var
e=c(a);else
switch(p){case
0:var
e=f(a);break;case
1:continue;default:a:for(;;){if(0===ip(b(a)))for(;;){z(a,0);var
q=lk(b(a));if(2<q>>>0)var
h=c(a);else
switch(q){case
0:var
h=f(a);break;case
1:continue;default:continue a}break}else
var
h=c(a);var
e=h;break}}break}}return 0===e?[0,r,jF(3,L(a))]:N(Y6)});case
19:return[0,a,m$];case
20:return[0,a,Y7];case
21:return[0,a,Y8];case
22:return[0,a,p0];case
23:return[0,a,41];case
24:return[0,a,30];case
25:return[0,a,53];case
26:return[0,a,pG];case
27:return[0,a,29];case
28:return[0,a,mg];case
29:return[0,a,42];case
30:return[0,a,oh];case
31:return[0,a,31];case
33:return[0,a,mi];case
32:break;default:return[0,a,jF(3,L(d))]}return[0,a,46]},kd=lR([0,my]),l1=function(a,b){return[0,[0],0,b,rq(a[2].slice(),a)]},oW=function(iK,rh){var
ri=rh+1|0;if(iK[1].length-1<ri){var
jc=1;for(;;){if(!(ri<=jc)){var
jc=jc*2|0;continue}iK[1]=qG(jc,function(a){var
b=a<iK[1].length-1?1:0,c=b?iR(iK[1],a)[a+1]:b;return c});break}}for(;;){if(iK[2]<=rh){var
iB=iK[4];switch(iK[3]){case
0:var
F=iB;for(;;){var
a=F[2],i6=function(e,a){for(;;){z(a,73);var
d=K(b(a));if(0===d)continue;return 1===d?e<50?j8(e+1|0,a):is(j8,[0,a]):c(a)}},j8=function(d,a){if(0===jQ(b(a))){var
e=ka(b(a));if(0===e)return 0===ii(b(a))?0===ii(b(a))?0===ii(b(a))?d<50?i6(d+1|0,a):is(i6,[0,a]):c(a):c(a):c(a);if(1===e){if(0===ii(b(a)))for(;;){var
f=j$(b(a));if(0===f)continue;return 1===f?d<50?i6(d+1|0,a):is(i6,[0,a]):c(a)}return c(a)}return c(a)}return c(a)},D=function(a){return ko(i6(0,a))},E=function(a){return ko(j8(0,a))},iE=function(a){for(;;){z(a,20);if(0===iv(b(a)))continue;return c(a)}},rk=function(a){for(;;){z(a,18);if(0===iv(b(a)))continue;return c(a)}},ke=function(a){for(;;){z(a,18);if(0===iv(b(a)))continue;return c(a)}},rj=function(e){return function(a){b:for(;;){if(0===ip(b(a)))for(;;){z(a,19);var
d=jP(b(a));if(2<d>>>0)return c(a);switch(d){case
0:return e(a);case
1:continue;default:continue b}}return c(a)}}}(ke),iW=function(m,j,k,l){return function(a){z(a,20);var
d=rU(b(a));if(3<d>>>0)return c(a);switch(d){case
0:return m(a);case
1:var
e=mJ(b(a));if(0===e)for(;;){z(a,19);var
f=li(b(a));if(0===f)return j(a);if(1===f)continue;return c(a)}if(1===e)for(;;){z(a,19);var
g=jP(b(a));if(2<g>>>0)return c(a);switch(g){case
0:return j(a);case
1:continue;default:return k(a)}}return c(a);case
2:for(;;){z(a,19);var
h=li(b(a));if(0===h)return l(a);if(1===h)continue;return c(a)}default:for(;;){z(a,19);var
i=jP(b(a));if(2<i>>>0)return c(a);switch(i){case
0:return l(a);case
1:continue;default:return k(a)}}}}}(iE,ke,rj,rk),kf=function(a){z(a,4);return 0===r0(b(a))?4:c(a)},kg=function(a){return 0===mR(b(a))?0===mL(b(a))?0===rW(b(a))?0===rL(b(a))?0===rM(b(a))?0===oQ(b(a))?0===lX(b(a))?0===mR(b(a))?0===jQ(b(a))?0===rN(b(a))?0===lZ(b(a))?4:c(a):c(a):c(a):c(a):c(a):c(a):c(a):c(a):c(a):c(a):c(a)},jg=function(d,e){return function(a){z(a,21);var
f=rI(b(a));if(2<f>>>0)return c(a);switch(f){case
0:return d(a);case
1:for(;;){z(a,21);var
g=kt(b(a));if(3<g>>>0)return c(a);switch(g){case
0:return d(a);case
1:continue;case
2:return e(a);default:a:for(;;){if(0===ip(b(a)))for(;;){z(a,21);var
h=kt(b(a));if(3<h>>>0)return c(a);switch(h){case
0:return d(a);case
1:continue;case
2:return e(a);default:continue a}}return c(a)}}}default:return e(a)}}}(iE,iW),kh=function(a){for(;;){z(a,14);if(0===iv(b(a)))continue;return c(a)}},i7=function(d){return function(a){z(a,21);var
e=li(b(a));if(0===e)return d(a);if(1===e)for(;;){z(a,21);var
f=jP(b(a));if(2<f>>>0)return c(a);switch(f){case
0:return d(a);case
1:continue;default:a:for(;;){if(0===ip(b(a)))for(;;){z(a,21);var
g=jP(b(a));if(2<g>>>0)return c(a);switch(g){case
0:return d(a);case
1:continue;default:continue a}}return c(a)}}}return c(a)}}(iE),ki=function(e,f){return function(a){b:for(;;){if(0===ip(b(a)))for(;;){z(a,21);var
d=rS(b(a));if(3<d>>>0)return c(a);switch(d){case
0:return e(a);case
1:return f(a);case
2:continue;default:continue b}}return c(a)}}}(iE,i7);io(a);var
A=b(a),kj=jT<A?eb<A?gd<A?dC<A?e9<A?bJ<A?fE<A?cy<A?1:8:dH<A?eJ<A?1:8:eM<A?1:8:bo<A?aQ<A?aG<A?1:8:di<A?1:8:dR<A?cf<A?1:8:$<A?1:8:eg<A?dw<A?cC<A?d_<A?dF<A?1:8:fk<A?1:8:gl<A?cu<A?1:8:am<A?1:8:cB<A?fF<A?d8<A?1:8:gr<A?1:8:b7<A?fc<A?1:8:fQ<A?1:8:ep<A?b8<A?eN<A?ag<A?1:8:ew<A?1:8:fL<A?gb<A?1:8:f8<A?1:8:aq<A?cq<A?at<A?1:8:ez<A?1:8:ah<A?eR<A?1:8:e_<A?1:8:cv<A?dW<A?a9<A?cG<A?ar<A?ft<A?1:8:fS<A?1:8:e3<A?fn<A?1:8:f7<A?1:8:ax<A?bz<A?d5<A?1:8:aD<A?1:8:a2<A?eA<A?1:8:cM<A?1:8:cU<A?fZ<A?f2<A?fb<A?1:8:bC<A?1:8:bS<A?aR<A?1:8:ac<A?1:8:b$<A?a3<A?bM<A?1:8:gz<A?1:8:gq<A?f3<A?1:8:ca<A?1:8:bI<A?al<A?cw<A?dK<A?c_<A?1:8:dY<A?1:8:ev<A?b6<A?1:8:eC<A?1:8:ec<A?fU<A?eW<A?1:8:ap<A?1:8:eO<A?bO<A?1:8:fl<A?1:8:bR<A?cV<A?fI<A?bB<A?1:8:aA<A?1:8:gu<A?bn<A?1:8:a5<A?1:8:fh<A?aj<A?cx<A?1:8:a_<A?1:8:aU<A?fs<A?1:8:b2<A?1:8:f1<A?_<A?c4<A?d1<A?b5<A?dt<A?f9<A?1:8:aF<A?1:8:aS<A?e7<A?1:8:cg<A?1:8:cI<A?e6<A?fo<A?1:8:bq<A?1:8:dP<A?cE<A?1:8:av<A?1:8:c5<A?cD<A?bE<A?dv<A?1:8:et<A?1:8:ds<A?bf<A?1:8:eB<A?1:8:n3<A?dX<A?aI<A?1:8:dg<A?1:8:eH<A?nU<A?1:8:fj<A?1:8:oe<A?dA<A?fT<A?bK<A?dq<A?1:8:gm<A?1:8:cz<A?fO<A?1:8:e0<A?1:8:m5<A?af<A?nv<A?1:8:en<A?1:8:oc<A?nP<A?1:8:nn<A?1:8:bN<A?od<A?cN<A?f6<A?1:8:nE<A?1:8:nq<A?nY<A?1:8:dm<A?1:8:fp<A?f$<A?ae<A?1:8:bg<A?1:8:ek<A?cT<A?1:8:b4<A?1:8:fq<A?b1<A?fw<A?dr<A?S<A?az<A?1:8:cH<A?1:8:nw<A?bA<A?1:8:nG<A?1:8:aX<A?bT<A?dx<A?1:8:bP<A?1:8:gc<A?cm<A?1:8:bd<A?1:8:c0<A?fx<A?a7<A?gn<A?1:8:fy<A?1:8:a0<A?fv<A?1:8:gk<A?1:8:e1<A?ej<A?gv<A?1:8:gp<A?1:8:fD<A?Y<A?1:8:fV<A?1:8:c9<A?e2<A?V<A?aN<A?dS<A?1:8:ci<A?1:8:e$<A?R<A?1:8:cQ<A?1:8:d$<A?Z<A?eL<A?1:8:bj<A?1:8:ao<A?dc<A?1:8:fA<A?1:8:bx<A?aK<A?cS<A?ch<A?1:8:a8<A?1:8:c3<A?ak<A?1:8:bQ<A?1:8:dL<A?fz<A?W<A?1:8:cR<A?1:8:M<A?du<A?1:8:dM<A?1:8:fi<A?be<A?dn<A?fe<A?cr<A?bX<A?aP<A?cn<A?1:8:dT<A?1:8:ck<A?cY<A?1:8:bk<A?1:8:dU<A?bZ<A?bG<A?1:8:df<A?1:8:j2<A?jZ<A?1:2:fa<A?1:8:d3<A?eP<A?e5<A?f5<A?1:8:dG<A?1:8:fB<A?fJ<A?1:8:ab<A?1:8:cc<A?co<A?dB<A?1:8:es<A?1:8:gs<A?eK<A?1:8:aL<A?1:8:bb<A?ob<A?fR<A?as<A?fm<A?1:8:T<A?1:8:db<A?f_<A?1:8:fW<A?1:8:ff<A?cj<A?nB<A?1:8:de<A?1:8:eZ<A?ea<A?1:8:d2<A?1:8:ba<A?d0<A?fY<A?dD<A?1:8:cF<A?1:8:dQ<A?aH<A?1:8:b9<A?1:8:ee<A?eU<A?nO<A?1:8:ad<A?1:8:eo<A?eX<A?1:8:eF<A?1:8:a4<A?n5<A?aT<A?gy<A?by<A?dO<A?1:8:dh<A?1:8:b0<A?ns<A?1:8:nA<A?1:8:ni<A?el<A?fH<A?1:8:cp<A?1:8:n7<A?nW<A?1:8:m6<A?1:8:dZ<A?n2<A?nI<A?n6<A?1:8:nd<A?1:8:bL<A?n1<A?1:8:m_<A?1:8:nJ<A?cJ<A?d4<A?1:8:nH<A?1:8:go<A?nc<A?1:8:ng<A?1:8:ny<A?e8<A?m7<A?ey<A?m3<A?1:8:nr<A?1:8:a1<A?f4<A?1:8:nl<A?1:8:dE<A?n9<A?m9<A?1:8:bV<A?1:8:og<A?bl<A?1:8:n$<A?1:8:nM<A?nm<A?bF<A?bH<A?1:8:m4<A?1:8:nS<A?nz<A?1:8:nf<A?1:8:fr<A?bD<A?nX<A?1:8:eD<A?1:8:cb<A?em<A?1:8:bs<A?1:8:bv<A?aE<A?bw<A?bi<A?cW<A?f0<A?gg<A?1:8:U<A?1:8:nh<A?nb<A?1:8:dj<A?1:8:nQ<A?an<A?nt<A?1:8:eT<A?1:8:cL<A?na<A?1:8:dl<A?1:8:fN<A?bu<A?dI<A?gA<A?1:8:c7<A?1:8:bc<A?d6<A?1:8:fd<A?1:8:cK<A?dz<A?fX<A?1:8:cA<A?1:8:c8<A?aY<A?1:8:c$<A?1:8:cs<A?aC<A?fC<A?cl<A?d7<A?1:8:ct<A?1:8:of<A?e4<A?1:8:bt<A?1:8:gx<A?a6<A?eq<A?1:8:bW<A?1:8:eV<A?m8<A?1:8:aB<A?1:8:ed<A?gt<A?j1<A?jX<A?1:2:d9<A?1:8:ei<A?eQ<A?1:8:fu<A?1:8:cP<A?cX<A?fM<A?1:8:br<A?1:8:aO<A?bY<A?1:8:ai<A?1:8:fK<A?nK<A?aM<A?nL<A?c2<A?ge<A?1:8:ef<A?1:8:ga<A?dV<A?1:8:aJ<A?1:8:fG<A?er<A?b3<A?1:8:bm<A?1:8:cO<A?eh<A?1:8:b_<A?1:8:bU<A?gi<A?fg<A?nk<A?1:8:cd<A?1:8:c1<A?dy<A?1:8:bh<A?1:8:aa<A?bp<A?dJ<A?1:8:ay<A?1:8:gh<A?cZ<A?1:8:ce<A?1:8:eE<A?dk<A?eI<A?gw<A?dN<A?1:8:da<A?1:8:dd<A?aV<A?1:8:gj<A?1:8:gf<A?au<A?X<A?1:8:ex<A?1:8:dp<A?fP<A?1:8:eS<A?1:8:c6<A?a$<A?aZ<A?aw<A?1:8:eG<A?1:8:eY<A?aW<A?1:8:eu<A?1:8:jU<A?j0<A?jW<A?1:2:jV<A?1:2:ju<A?jw<A?1:3:j3<A?1:2:G(Oo,A+1|0)-1|0;if(53<kj>>>0)var
d=c(a);else
switch(kj){case
0:var
d=132;break;case
1:var
d=tx;break;case
2:z(a,2);if(0===jO(b(a)))for(;;){z(a,2);if(0===jO(b(a)))continue;var
d=c(a);break}else
var
d=c(a);break;case
3:var
d=0;break;case
4:z(a,0);var
d=0===je(b(a))?0:c(a);break;case
5:z(a,oa);var
d=0===kv(b(a))?(z(a,97),0===kv(b(a))?93:c(a)):c(a);break;case
6:var
d=8;break;case
7:z(a,131);var
kk=b(a),rl=32<kk?33<kk?-1:0:-1,d=0===rl?7:c(a);break;case
8:z(a,73);var
kl=K(b(a)),d=0===kl?D(a):1===kl?E(a):c(a);break;case
9:z(a,kB);var
d=0===kv(b(a))?iq:c(a);break;case
10:z(a,iu);var
ji=b(a),km=37<ji?61<ji?-1:G(PJ,ji-38|0)-1|0:-1,d=0===km?90:1===km?m$:c(a);break;case
11:var
d=77;break;case
12:var
d=78;break;case
13:z(a,tW);var
kn=rK(b(a));if(2<kn>>>0)var
d=c(a);else
switch(kn){case
0:z(a,tu);var
d=0===kv(b(a))?kW:c(a);break;case
1:var
d=5;break;default:var
d=lw}break;case
14:z(a,mi);var
jj=b(a),kp=42<jj?61<jj?-1:G(PK,jj+np|0)-1|0:-1,d=0===kp?98:1===kp?pC:c(a);break;case
15:var
d=84;break;case
16:z(a,uv);var
jk=b(a),kq=44<jk?61<jk?-1:G(NZ,jk+mp|0)-1|0:-1,d=0===kq?99:1===kq?lJ:c(a);break;case
17:z(a,82);var
kr=lY(b(a));if(0===kr)var
d=0===rv(b(a))?81:c(a);else
if(1===kr)for(;;){z(a,21);var
ky=kt(b(a));if(3<ky>>>0)var
d=c(a);else
switch(ky){case
0:var
d=iE(a);break;case
1:continue;case
2:var
d=iW(a);break;default:d:for(;;){if(0===ip(b(a)))for(;;){z(a,21);var
kz=kt(b(a));if(3<kz>>>0)var
i8=c(a);else
switch(kz){case
0:var
i8=iE(a);break;case
1:continue;case
2:var
i8=iW(a);break;default:continue d}break}else
var
i8=c(a);var
d=i8;break}}break}else
var
d=c(a);break;case
18:z(a,129);var
kA=rK(b(a));if(2<kA>>>0)var
d=c(a);else
switch(kA){case
0:z(a,3);var
kC=mI(b(a));if(2<kC>>>0)var
d=c(a);else
switch(kC){case
0:for(;;){var
kD=mI(b(a));if(2<kD>>>0)var
d=c(a);else
switch(kD){case
0:continue;case
1:var
d=kf(a);break;default:var
d=kg(a)}break}break;case
1:var
d=kf(a);break;default:var
d=kg(a)}break;case
1:var
d=6;break;default:var
d=ir}break;case
19:z(a,21);var
kE=oO(b(a));if(7<kE>>>0)var
d=c(a);else
switch(kE){case
0:var
d=iE(a);break;case
1:var
d=jg(a);break;case
2:for(;;){z(a,15);var
kF=rV(b(a));if(4<kF>>>0)var
d=c(a);else
switch(kF){case
0:var
d=kh(a);break;case
1:var
d=i7(a);break;case
2:continue;case
3:for(;;){z(a,14);var
kG=mV(b(a));if(2<kG>>>0)var
d=c(a);else
switch(kG){case
0:var
d=kh(a);break;case
1:var
d=i7(a);break;default:continue}break}break;default:d:for(;;){if(0===iZ(b(a)))for(;;){z(a,15);var
kH=lj(b(a));if(2<kH>>>0)var
jl=c(a);else
switch(kH){case
0:for(;;){z(a,14);if(0===iv(b(a)))continue;var
jl=c(a);break}break;case
1:continue;default:continue d}break}else
var
jl=c(a);var
d=jl;break}}break}break;case
3:for(;;){z(a,21);var
kI=mV(b(a));if(2<kI>>>0)var
d=c(a);else
switch(kI){case
0:var
d=iE(a);break;case
1:var
d=i7(a);break;default:continue}break}break;case
4:z(a,20);var
kJ=rO(b(a));if(0===kJ)var
d=iE(a);else
if(1===kJ)for(;;){z(a,11);var
kK=mE(b(a));if(2<kK>>>0)var
d=c(a);else
switch(kK){case
0:for(;;){z(a,10);if(0===iv(b(a)))continue;var
d=c(a);break}break;case
1:continue;default:d:for(;;){if(0===lh(b(a)))for(;;){z(a,11);var
kL=mE(b(a));if(2<kL>>>0)var
jm=c(a);else
switch(kL){case
0:for(;;){z(a,10);if(0===iv(b(a)))continue;var
jm=c(a);break}break;case
1:continue;default:continue d}break}else
var
jm=c(a);var
d=jm;break}}break}else
var
d=c(a);break;case
5:var
d=iW(a);break;case
6:z(a,20);var
kM=rP(b(a));if(0===kM)var
d=iE(a);else
if(1===kM)for(;;){z(a,13);var
kP=lj(b(a));if(2<kP>>>0)var
d=c(a);else
switch(kP){case
0:for(;;){z(a,12);if(0===iv(b(a)))continue;var
d=c(a);break}break;case
1:continue;default:d:for(;;){if(0===iZ(b(a)))for(;;){z(a,13);var
kQ=lj(b(a));if(2<kQ>>>0)var
jn=c(a);else
switch(kQ){case
0:for(;;){z(a,12);if(0===iv(b(a)))continue;var
jn=c(a);break}break;case
1:continue;default:continue d}break}else
var
jn=c(a);var
d=jn;break}}break}else
var
d=c(a);break;default:z(a,20);var
kR=ry(b(a));if(0===kR)var
d=iE(a);else
if(1===kR)for(;;){z(a,17);var
kS=mP(b(a));if(2<kS>>>0)var
d=c(a);else
switch(kS){case
0:for(;;){z(a,16);if(0===iv(b(a)))continue;var
d=c(a);break}break;case
1:continue;default:d:for(;;){if(0===ii(b(a)))for(;;){z(a,17);var
kT=mP(b(a));if(2<kT>>>0)var
jo=c(a);else
switch(kT){case
0:for(;;){z(a,16);if(0===iv(b(a)))continue;var
jo=c(a);break}break;case
1:continue;default:continue d}break}else
var
jo=c(a);var
d=jo;break}}break}else
var
d=c(a)}break;case
20:z(a,21);var
kU=mO(b(a));if(4<kU>>>0)var
d=c(a);else
switch(kU){case
0:var
d=iE(a);break;case
1:var
d=jg(a);break;case
2:for(;;){z(a,21);var
kV=mO(b(a));if(4<kV>>>0)var
d=c(a);else
switch(kV){case
0:var
d=iE(a);break;case
1:var
d=jg(a);break;case
2:continue;case
3:var
d=iW(a);break;default:var
d=ki(a)}break}break;case
3:var
d=iW(a);break;default:var
d=ki(a)}break;case
21:var
d=85;break;case
22:var
d=83;break;case
23:z(a,mg);var
jx=b(a),kX=59<jx?61<jx?-1:G(oM,jx-60|0)-1|0:-1,d=0===kX?(z(a,jv),0===kv(b(a))?jS:c(a)):1===kX?94:c(a);break;case
24:z(a,126);var
kY=oP(b(a)),d=0===kY?(z(a,96),0===kv(b(a))?92:c(a)):1===kY?il:c(a);break;case
25:z(a,oh);var
k0=oP(b(a));if(0===k0)var
d=95;else
if(1===k0){z(a,lD);var
k1=oP(b(a)),d=0===k1?jh:1===k1?(z(a,mf),0===kv(b(a))?iI:c(a)):c(a)}else
var
d=c(a);break;case
26:z(a,89);var
jy=b(a),k2=45<jy?63<jy?-1:G(NT,jy+kZ|0)-1|0:-1,d=0===k2?(z(a,87),0===ip(b(a))?86:c(a)):1===k2?88:c(a);break;case
27:z(a,130);var
k3=b(a),rm=63<k3?64<k3?-1:0:-1;if(0===rm){var
jz=b(a),k4=96<jz?lD<jz?-1:G(OG,jz+tP|0)-1|0:-1;if(0===k4)if(0===rC(b(a))){var
k5=b(a),rn=kB<k5?ts<k5?-1:0:-1;if(0===rn)if(0===oQ(b(a)))if(0===lX(b(a)))var
k6=b(a),ro=72<k6?73<k6?-1:0:-1,d=0===ro?0===mK(b(a))?0===lZ(b(a))?0===mT(b(a))?0===rQ(b(a))?0===mK(b(a))?0===mL(b(a))?0===mT(b(a))?74:c(a):c(a):c(a):c(a):c(a):c(a):c(a):c(a);else
var
d=c(a);else
var
d=c(a);else
var
d=c(a)}else
var
d=c(a);else
var
d=1===k4?0===mK(b(a))?0===lZ(b(a))?0===mT(b(a))?0===rQ(b(a))?0===mK(b(a))?0===mL(b(a))?0===mT(b(a))?74:c(a):c(a):c(a):c(a):c(a):c(a):c(a):c(a)}else
var
d=c(a);break;case
28:var
d=79;break;case
29:z(a,1);if(0===jQ(b(a))){var
k7=ka(b(a));if(0===k7)var
d=0===ii(b(a))?0===ii(b(a))?0===ii(b(a))?D(a):c(a):c(a):c(a);else
if(1===k7)if(0===ii(b(a)))for(;;){var
k8=j$(b(a));if(0===k8)continue;var
d=1===k8?D(a):c(a);break}else
var
d=c(a);else
var
d=c(a)}else
var
d=c(a);break;case
30:var
d=80;break;case
31:z(a,lA);var
d=0===kv(b(a))?p0:c(a);break;case
32:var
d=9;break;case
33:z(a,73);var
e=b(a),k9=35<e?ia<e?gH<e?hy<e?-1:dF<e?e9<e?aG<e?bJ<e?eJ<e?fE<e?cy<e?hW<e?0:-1:0:-1:eM<e?dH<e?0:-1:0:-1:cf<e?bo<e?di<e?aQ<e?0:-1:0:-1:$<e?dR<e?0:-1:0:-1:cn<e?eb<e?hB<e?gI<e?ca<e?gq<e?ft<e?dC<e?ag<e?eg<e?d8<e?dw<e?cu<e?cC<e?fk<e?d_<e?0:-1:0:-1:am<e?gl<e?0:-1:0:-1:fc<e?cB<e?gr<e?fF<e?0:-1:0:-1:fQ<e?b7<e?0:-1:0:-1:at<e?ep<e?gb<e?b8<e?ew<e?eN<e?0:-1:0:-1:f8<e?fL<e?0:-1:0:-1:eR<e?aq<e?ez<e?cq<e?0:-1:0:-1:e_<e?ah<e?0:-1:0:-1:fb<e?dW<e?d5<e?a9<e?fn<e?cG<e?fS<e?ar<e?0:-1:0:-1:f7<e?e3<e?0:-1:0:-1:eA<e?ax<e?aD<e?bz<e?0:-1:0:-1:cM<e?a2<e?0:-1:0:-1:bM<e?cU<e?aR<e?fZ<e?bC<e?f2<e?0:-1:0:-1:ac<e?bS<e?0:-1:0:-1:hh<e?b$<e?gz<e?a3<e?0:-1:0:-1:f3<e?h4<e?0:-1:0:-1:b2<e?aU<e?fl<e?eO<e?eC<e?ev<e?dY<e?dK<e?c_<e?cv<e?0:-1:0:-1:b6<e?cw<e?0:-1:0:-1:ap<e?fU<e?eW<e?al<e?0:-1:0:-1:bO<e?ec<e?0:-1:0:-1:a5<e?gu<e?aA<e?fI<e?bB<e?bI<e?0:-1:0:-1:bn<e?cV<e?0:-1:0:-1:a_<e?aj<e?cx<e?bR<e?0:-1:0:-1:fs<e?fh<e?0:-1:0:-1:av<e?dP<e?cg<e?aS<e?aF<e?dt<e?f9<e?gd<e?0:-1:0:-1:e7<e?b5<e?0:-1:0:-1:bq<e?e6<e?fo<e?d1<e?0:-1:0:-1:cE<e?cI<e?0:-1:0:-1:eB<e?ds<e?et<e?bE<e?dv<e?c4<e?0:-1:0:-1:bf<e?cD<e?0:-1:0:-1:ho<e?hP<e?ie<e?c5<e?0:-1:0:-1:gO<e?gF<e?0:-1:0:-1:hR<e?gW<e?hZ<e?hk<e?gm<e?bK<e?dg<e?dX<e?hz<e?gT<e?hV<e?gX<e?0:-1:0:-1:aI<e?hG<e?0:-1:0:-1:fj<e?eH<e?g_<e?g1<e?0:-1:0:-1:dq<e?_<e?0:-1:0:-1:hA<e?h6<e?e0<e?cz<e?fO<e?fT<e?0:-1:0:-1:gD<e?dA<e?0:-1:0:-1:en<e?gK<e?hL<e?af<e?0:-1:0:-1:hC<e?ic<e?0:-1:0:-1:bg<e?f$<e?hO<e?gM<e?f6<e?gN<e?hj<e?g4<e?0:-1:0:-1:h9<e?cN<e?0:-1:0:-1:dm<e?hJ<e?g$<e?hT<e?0:-1:0:-1:ae<e?bN<e?0:-1:0:-1:gJ<e?g5<e?b4<e?ek<e?cT<e?fp<e?0:-1:0:-1:hH<e?f1<e?0:-1:0:-1:cH<e?S<e?az<e?hK<e?0:-1:0:-1:bA<e?dr<e?0:-1:0:-1:ci<e?aN<e?fv<e?fx<e?cm<e?aX<e?dx<e?fw<e?g3<e?hx<e?0:-1:0:-1:bP<e?bT<e?0:-1:0:-1:gn<e?b1<e?bd<e?gc<e?0:-1:0:-1:fy<e?a7<e?0:-1:0:-1:hn<e?e1<e?gv<e?c0<e?gk<e?a0<e?0:-1:0:-1:gp<e?ej<e?0:-1:0:-1:fV<e?fD<e?Y<e?hb<e?0:-1:0:-1:dS<e?fq<e?0:-1:0:-1:ch<e?c9<e?bj<e?Z<e?cQ<e?e$<e?R<e?V<e?0:-1:0:-1:eL<e?e2<e?0:-1:0:-1:gY<e?ao<e?dc<e?d$<e?0:-1:0:-1:fA<e?h_<e?0:-1:0:-1:W<e?bx<e?ak<e?aK<e?a8<e?cS<e?0:-1:0:-1:bQ<e?c3<e?0:-1:0:-1:du<e?dL<e?cR<e?fz<e?0:-1:0:-1:dM<e?M<e?0:-1:0:-1:U<e?f0<e?id<e?ba<e?ab<e?fB<e?fa<e?hX<e?bG<e?cr<e?cY<e?bX<e?dT<e?aP<e?0:-1:0:-1:bk<e?ck<e?0:-1:0:-1:df<e?hi<e?gE<e?bZ<e?0:-1:0:-1:gP<e?dU<e?0:-1:0:-1:g2<e?hd<e?gL<e?e5<e?f5<e?fe<e?0:-1:0:-1:hF<e?hw<e?0:-1:0:-1:dG<e?hI<e?g6<e?gG<e?0:-1:0:-1:fJ<e?eP<e?0:-1:0:-1:fW<e?db<e?aL<e?gs<e?es<e?co<e?dB<e?d3<e?0:-1:0:-1:eK<e?cc<e?0:-1:0:-1:T<e?as<e?fm<e?dn<e?0:-1:0:-1:f_<e?fR<e?0:-1:0:-1:dD<e?bb<e?ea<e?ff<e?de<e?cj<e?0:-1:0:-1:d2<e?eZ<e?0:-1:0:-1:aH<e?d0<e?cF<e?fY<e?0:-1:0:-1:b9<e?dQ<e?0:-1:0:-1:hr<e?go<e?gU<e?gy<e?eX<e?ee<e?gS<e?hs<e?h1<e?hQ<e?0:-1:0:-1:ad<e?eU<e?0:-1:0:-1:dO<e?be<e?eF<e?eo<e?0:-1:0:-1:dh<e?by<e?0:-1:0:-1:hc<e?bL<e?fH<e?aT<e?gR<e?b0<e?0:-1:0:-1:cp<e?el<e?0:-1:0:-1:h0<e?cJ<e?d4<e?dZ<e?0:-1:0:-1:hY<e?ib<e?0:-1:0:-1:hU<e?ht<e?ig<e?a1<e?h7<e?ey<e?hq<e?a4<e?0:-1:0:-1:f4<e?h5<e?0:-1:0:-1:bV<e?hM<e?h2<e?e8<e?0:-1:0:-1:bl<e?dE<e?0:-1:0:-1:eD<e?bD<e?bH<e?hN<e?gQ<e?hm<e?0:-1:0:-1:he<e?bF<e?0:-1:0:-1:bs<e?cb<e?em<e?fr<e?0:-1:0:-1:gg<e?fi<e?0:-1:0:-1:ef<e?c2<e?ct<e?cl<e?c7<e?dI<e?g0<e?g8<e?dj<e?hE<e?hp<e?cW<e?0:-1:0:-1:hv<e?bi<e?0:-1:0:-1:dl<e?cL<e?eT<e?an<e?0:-1:0:-1:gA<e?bw<e?0:-1:0:-1:cA<e?dz<e?fd<e?bc<e?d6<e?bu<e?0:-1:0:-1:fX<e?fN<e?0:-1:0:-1:c$<e?c8<e?aY<e?cK<e?0:-1:0:-1:d7<e?aE<e?0:-1:0:-1:d9<e?gZ<e?bW<e?a6<e?bt<e?h3<e?e4<e?fC<e?0:-1:0:-1:eq<e?aC<e?0:-1:0:-1:aB<e?eV<e?hS<e?gx<e?0:-1:0:-1:gV<e?cs<e?0:-1:0:-1:br<e?cX<e?fu<e?ei<e?eQ<e?gt<e?0:-1:0:-1:fM<e?ed<e?0:-1:0:-1:ai<e?aO<e?bY<e?cP<e?0:-1:0:-1:ge<e?bv<e?0:-1:0:-1:aV<e?eI<e?dy<e?gi<e?bm<e?er<e?aJ<e?ga<e?dV<e?ha<e?0:-1:0:-1:b3<e?aM<e?0:-1:0:-1:b_<e?cO<e?eh<e?fG<e?0:-1:0:-1:cd<e?fg<e?0:-1:0:-1:cZ<e?aa<e?dJ<e?bU<e?bh<e?c1<e?0:-1:0:-1:ay<e?bp<e?0:-1:0:-1:dN<e?fK<e?ce<e?gh<e?0:-1:0:-1:da<e?gw<e?0:-1:0:-1:h$<e?hD<e?fP<e?gf<e?X<e?dk<e?gj<e?dd<e?0:-1:0:-1:ex<e?au<e?0:-1:0:-1:aw<e?eE<e?eS<e?dp<e?0:-1:0:-1:h8<e?aZ<e?0:-1:0:-1:eu<e?eY<e?eG<e?hl<e?g7<e?g9<e?0:-1:0:-1:aW<e?a$<e?0:-1:0:-1:hu<e?hg<e?hf<e?c6<e?0:-1:0:-1:gB<e?gC<e?0:-1:0:-1:G(OU,e+J|0)-1|0:-1;if(3<k9>>>0)var
d=c(a);else
switch(k9){case
0:var
d=D(a);break;case
1:var
d=E(a);break;case
2:z(a,73);var
k_=mN(b(a));if(2<k_>>>0)var
d=c(a);else
switch(k_){case
0:var
d=D(a);break;case
1:var
d=E(a);break;default:z(a,73);var
k$=iX(b(a));if(2<k$>>>0)var
d=c(a);else
switch(k$){case
0:var
d=D(a);break;case
1:var
d=E(a);break;default:z(a,73);var
la=jq(b(a));if(2<la>>>0)var
d=c(a);else
switch(la){case
0:var
d=D(a);break;case
1:var
d=E(a);break;default:z(a,22);var
lb=K(b(a)),d=0===lb?D(a):1===lb?E(a):c(a)}}}break;default:z(a,73);var
lc=iY(b(a));if(2<lc>>>0)var
d=c(a);else
switch(lc){case
0:var
d=D(a);break;case
1:var
d=E(a);break;default:z(a,73);var
ld=jf(b(a));if(2<ld>>>0)var
d=c(a);else
switch(ld){case
0:var
d=D(a);break;case
1:var
d=E(a);break;default:z(a,73);var
le=ix(b(a));if(2<le>>>0)var
d=c(a);else
switch(le){case
0:var
d=D(a);break;case
1:var
d=E(a);break;default:z(a,23);var
lf=K(b(a)),d=0===lf?D(a):1===lf?E(a):c(a)}}}}break;case
34:z(a,73);var
lg=jp(b(a));if(2<lg>>>0)var
d=c(a);else
switch(lg){case
0:var
d=D(a);break;case
1:var
d=E(a);break;default:z(a,73);var
lm=ik(b(a));if(2<lm>>>0)var
d=c(a);else
switch(lm){case
0:var
d=D(a);break;case
1:var
d=E(a);break;default:z(a,73);var
lo=iY(b(a));if(2<lo>>>0)var
d=c(a);else
switch(lo){case
0:var
d=D(a);break;case
1:var
d=E(a);break;default:z(a,73);var
lp=ru(b(a));if(2<lp>>>0)var
d=c(a);else
switch(lp){case
0:var
d=D(a);break;case
1:var
d=E(a);break;default:z(a,24);var
lq=K(b(a)),d=0===lq?D(a):1===lq?E(a):c(a)}}}}break;case
35:z(a,73);var
f=b(a),lr=35<f?ia<f?gH<f?hy<f?-1:dF<f?e9<f?aG<f?bJ<f?eJ<f?fE<f?cy<f?hW<f?0:-1:0:-1:eM<f?dH<f?0:-1:0:-1:cf<f?bo<f?di<f?aQ<f?0:-1:0:-1:$<f?dR<f?0:-1:0:-1:cn<f?eb<f?hB<f?gI<f?ca<f?gq<f?ft<f?dC<f?ag<f?eg<f?d8<f?dw<f?cu<f?cC<f?fk<f?d_<f?0:-1:0:-1:am<f?gl<f?0:-1:0:-1:fc<f?cB<f?gr<f?fF<f?0:-1:0:-1:fQ<f?b7<f?0:-1:0:-1:at<f?ep<f?gb<f?b8<f?ew<f?eN<f?0:-1:0:-1:f8<f?fL<f?0:-1:0:-1:eR<f?aq<f?ez<f?cq<f?0:-1:0:-1:e_<f?ah<f?0:-1:0:-1:fb<f?dW<f?d5<f?a9<f?fn<f?cG<f?fS<f?ar<f?0:-1:0:-1:f7<f?e3<f?0:-1:0:-1:eA<f?ax<f?aD<f?bz<f?0:-1:0:-1:cM<f?a2<f?0:-1:0:-1:bM<f?cU<f?aR<f?fZ<f?bC<f?f2<f?0:-1:0:-1:ac<f?bS<f?0:-1:0:-1:hh<f?b$<f?gz<f?a3<f?0:-1:0:-1:f3<f?h4<f?0:-1:0:-1:b2<f?aU<f?fl<f?eO<f?eC<f?ev<f?dY<f?dK<f?c_<f?cv<f?0:-1:0:-1:b6<f?cw<f?0:-1:0:-1:ap<f?fU<f?eW<f?al<f?0:-1:0:-1:bO<f?ec<f?0:-1:0:-1:a5<f?gu<f?aA<f?fI<f?bB<f?bI<f?0:-1:0:-1:bn<f?cV<f?0:-1:0:-1:a_<f?aj<f?cx<f?bR<f?0:-1:0:-1:fs<f?fh<f?0:-1:0:-1:av<f?dP<f?cg<f?aS<f?aF<f?dt<f?f9<f?gd<f?0:-1:0:-1:e7<f?b5<f?0:-1:0:-1:bq<f?e6<f?fo<f?d1<f?0:-1:0:-1:cE<f?cI<f?0:-1:0:-1:eB<f?ds<f?et<f?bE<f?dv<f?c4<f?0:-1:0:-1:bf<f?cD<f?0:-1:0:-1:ho<f?hP<f?ie<f?c5<f?0:-1:0:-1:gO<f?gF<f?0:-1:0:-1:hR<f?gW<f?hZ<f?hk<f?gm<f?bK<f?dg<f?dX<f?hz<f?gT<f?hV<f?gX<f?0:-1:0:-1:aI<f?hG<f?0:-1:0:-1:fj<f?eH<f?g_<f?g1<f?0:-1:0:-1:dq<f?_<f?0:-1:0:-1:hA<f?h6<f?e0<f?cz<f?fO<f?fT<f?0:-1:0:-1:gD<f?dA<f?0:-1:0:-1:en<f?gK<f?hL<f?af<f?0:-1:0:-1:hC<f?ic<f?0:-1:0:-1:bg<f?f$<f?hO<f?gM<f?f6<f?gN<f?hj<f?g4<f?0:-1:0:-1:h9<f?cN<f?0:-1:0:-1:dm<f?hJ<f?g$<f?hT<f?0:-1:0:-1:ae<f?bN<f?0:-1:0:-1:gJ<f?g5<f?b4<f?ek<f?cT<f?fp<f?0:-1:0:-1:hH<f?f1<f?0:-1:0:-1:cH<f?S<f?az<f?hK<f?0:-1:0:-1:bA<f?dr<f?0:-1:0:-1:ci<f?aN<f?fv<f?fx<f?cm<f?aX<f?dx<f?fw<f?g3<f?hx<f?0:-1:0:-1:bP<f?bT<f?0:-1:0:-1:gn<f?b1<f?bd<f?gc<f?0:-1:0:-1:fy<f?a7<f?0:-1:0:-1:hn<f?e1<f?gv<f?c0<f?gk<f?a0<f?0:-1:0:-1:gp<f?ej<f?0:-1:0:-1:fV<f?fD<f?Y<f?hb<f?0:-1:0:-1:dS<f?fq<f?0:-1:0:-1:ch<f?c9<f?bj<f?Z<f?cQ<f?e$<f?R<f?V<f?0:-1:0:-1:eL<f?e2<f?0:-1:0:-1:gY<f?ao<f?dc<f?d$<f?0:-1:0:-1:fA<f?h_<f?0:-1:0:-1:W<f?bx<f?ak<f?aK<f?a8<f?cS<f?0:-1:0:-1:bQ<f?c3<f?0:-1:0:-1:du<f?dL<f?cR<f?fz<f?0:-1:0:-1:dM<f?M<f?0:-1:0:-1:U<f?f0<f?id<f?ba<f?ab<f?fB<f?fa<f?hX<f?bG<f?cr<f?cY<f?bX<f?dT<f?aP<f?0:-1:0:-1:bk<f?ck<f?0:-1:0:-1:df<f?hi<f?gE<f?bZ<f?0:-1:0:-1:gP<f?dU<f?0:-1:0:-1:g2<f?hd<f?gL<f?e5<f?f5<f?fe<f?0:-1:0:-1:hF<f?hw<f?0:-1:0:-1:dG<f?hI<f?g6<f?gG<f?0:-1:0:-1:fJ<f?eP<f?0:-1:0:-1:fW<f?db<f?aL<f?gs<f?es<f?co<f?dB<f?d3<f?0:-1:0:-1:eK<f?cc<f?0:-1:0:-1:T<f?as<f?fm<f?dn<f?0:-1:0:-1:f_<f?fR<f?0:-1:0:-1:dD<f?bb<f?ea<f?ff<f?de<f?cj<f?0:-1:0:-1:d2<f?eZ<f?0:-1:0:-1:aH<f?d0<f?cF<f?fY<f?0:-1:0:-1:b9<f?dQ<f?0:-1:0:-1:hr<f?go<f?gU<f?gy<f?eX<f?ee<f?gS<f?hs<f?h1<f?hQ<f?0:-1:0:-1:ad<f?eU<f?0:-1:0:-1:dO<f?be<f?eF<f?eo<f?0:-1:0:-1:dh<f?by<f?0:-1:0:-1:hc<f?bL<f?fH<f?aT<f?gR<f?b0<f?0:-1:0:-1:cp<f?el<f?0:-1:0:-1:h0<f?cJ<f?d4<f?dZ<f?0:-1:0:-1:hY<f?ib<f?0:-1:0:-1:hU<f?ht<f?ig<f?a1<f?h7<f?ey<f?hq<f?a4<f?0:-1:0:-1:f4<f?h5<f?0:-1:0:-1:bV<f?hM<f?h2<f?e8<f?0:-1:0:-1:bl<f?dE<f?0:-1:0:-1:eD<f?bD<f?bH<f?hN<f?gQ<f?hm<f?0:-1:0:-1:he<f?bF<f?0:-1:0:-1:bs<f?cb<f?em<f?fr<f?0:-1:0:-1:gg<f?fi<f?0:-1:0:-1:ef<f?c2<f?ct<f?cl<f?c7<f?dI<f?g0<f?g8<f?dj<f?hE<f?hp<f?cW<f?0:-1:0:-1:hv<f?bi<f?0:-1:0:-1:dl<f?cL<f?eT<f?an<f?0:-1:0:-1:gA<f?bw<f?0:-1:0:-1:cA<f?dz<f?fd<f?bc<f?d6<f?bu<f?0:-1:0:-1:fX<f?fN<f?0:-1:0:-1:c$<f?c8<f?aY<f?cK<f?0:-1:0:-1:d7<f?aE<f?0:-1:0:-1:d9<f?gZ<f?bW<f?a6<f?bt<f?h3<f?e4<f?fC<f?0:-1:0:-1:eq<f?aC<f?0:-1:0:-1:aB<f?eV<f?hS<f?gx<f?0:-1:0:-1:gV<f?cs<f?0:-1:0:-1:br<f?cX<f?fu<f?ei<f?eQ<f?gt<f?0:-1:0:-1:fM<f?ed<f?0:-1:0:-1:ai<f?aO<f?bY<f?cP<f?0:-1:0:-1:ge<f?bv<f?0:-1:0:-1:aV<f?eI<f?dy<f?gi<f?bm<f?er<f?aJ<f?ga<f?dV<f?ha<f?0:-1:0:-1:b3<f?aM<f?0:-1:0:-1:b_<f?cO<f?eh<f?fG<f?0:-1:0:-1:cd<f?fg<f?0:-1:0:-1:cZ<f?aa<f?dJ<f?bU<f?bh<f?c1<f?0:-1:0:-1:ay<f?bp<f?0:-1:0:-1:dN<f?fK<f?ce<f?gh<f?0:-1:0:-1:da<f?gw<f?0:-1:0:-1:h$<f?hD<f?fP<f?gf<f?X<f?dk<f?gj<f?dd<f?0:-1:0:-1:ex<f?au<f?0:-1:0:-1:aw<f?eE<f?eS<f?dp<f?0:-1:0:-1:h8<f?aZ<f?0:-1:0:-1:eu<f?eY<f?eG<f?hl<f?g7<f?g9<f?0:-1:0:-1:aW<f?a$<f?0:-1:0:-1:hu<f?hg<f?hf<f?c6<f?0:-1:0:-1:gB<f?gC<f?0:-1:0:-1:G(Pv,f+J|0)-1|0:-1;if(4<lr>>>0)var
d=c(a);else
switch(lr){case
0:var
d=D(a);break;case
1:var
d=E(a);break;case
2:z(a,73);var
ls=oS(b(a));if(3<ls>>>0)var
d=c(a);else
switch(ls){case
0:var
d=D(a);break;case
1:var
d=E(a);break;case
2:z(a,73);var
lt=ik(b(a));if(2<lt>>>0)var
d=c(a);else
switch(lt){case
0:var
d=D(a);break;case
1:var
d=E(a);break;default:z(a,25);var
lu=K(b(a)),d=0===lu?D(a):1===lu?E(a):c(a)}break;default:z(a,73);var
lv=jq(b(a));if(2<lv>>>0)var
d=c(a);else
switch(lv){case
0:var
d=D(a);break;case
1:var
d=E(a);break;default:z(a,73);var
lx=oT(b(a));if(2<lx>>>0)var
d=c(a);else
switch(lx){case
0:var
d=D(a);break;case
1:var
d=E(a);break;default:z(a,26);var
ly=K(b(a)),d=0===ly?D(a):1===ly?E(a):c(a)}}}break;case
3:z(a,73);var
lz=iY(b(a));if(2<lz>>>0)var
d=c(a);else
switch(lz){case
0:var
d=D(a);break;case
1:var
d=E(a);break;default:z(a,73);var
lB=kb(b(a));if(2<lB>>>0)var
d=c(a);else
switch(lB){case
0:var
d=D(a);break;case
1:var
d=E(a);break;default:z(a,73);var
lC=kb(b(a));if(2<lC>>>0)var
d=c(a);else
switch(lC){case
0:var
d=D(a);break;case
1:var
d=E(a);break;default:z(a,27);var
lE=K(b(a)),d=0===lE?D(a):1===lE?E(a):c(a)}}}break;default:z(a,73);var
lF=iX(b(a));if(2<lF>>>0)var
d=c(a);else
switch(lF){case
0:var
d=D(a);break;case
1:var
d=E(a);break;default:z(a,73);var
lG=oS(b(a));if(3<lG>>>0)var
d=c(a);else
switch(lG){case
0:var
d=D(a);break;case
1:var
d=E(a);break;case
2:z(a,73);var
lH=ix(b(a));if(2<lH>>>0)var
d=c(a);else
switch(lH){case
0:var
d=D(a);break;case
1:var
d=E(a);break;default:z(a,28);var
lI=K(b(a)),d=0===lI?D(a):1===lI?E(a):c(a)}break;default:z(a,73);var
lK=jf(b(a));if(2<lK>>>0)var
d=c(a);else
switch(lK){case
0:var
d=D(a);break;case
1:var
d=E(a);break;default:z(a,73);var
lL=iX(b(a));if(2<lL>>>0)var
d=c(a);else
switch(lL){case
0:var
d=D(a);break;case
1:var
d=E(a);break;default:z(a,73);var
lM=ks(b(a));if(2<lM>>>0)var
d=c(a);else
switch(lM){case
0:var
d=D(a);break;case
1:var
d=E(a);break;default:z(a,73);var
lN=ik(b(a));if(2<lN>>>0)var
d=c(a);else
switch(lN){case
0:var
d=D(a);break;case
1:var
d=E(a);break;default:z(a,29);var
lO=K(b(a)),d=0===lO?D(a):1===lO?E(a):c(a)}}}}}}}break;case
36:z(a,73);var
g=b(a),lP=35<g?ia<g?gH<g?hy<g?-1:dF<g?e9<g?aG<g?bJ<g?eJ<g?fE<g?cy<g?hW<g?0:-1:0:-1:eM<g?dH<g?0:-1:0:-1:cf<g?bo<g?di<g?aQ<g?0:-1:0:-1:$<g?dR<g?0:-1:0:-1:cn<g?eb<g?hB<g?gI<g?ca<g?gq<g?ft<g?dC<g?ag<g?eg<g?d8<g?dw<g?cu<g?cC<g?fk<g?d_<g?0:-1:0:-1:am<g?gl<g?0:-1:0:-1:fc<g?cB<g?gr<g?fF<g?0:-1:0:-1:fQ<g?b7<g?0:-1:0:-1:at<g?ep<g?gb<g?b8<g?ew<g?eN<g?0:-1:0:-1:f8<g?fL<g?0:-1:0:-1:eR<g?aq<g?ez<g?cq<g?0:-1:0:-1:e_<g?ah<g?0:-1:0:-1:fb<g?dW<g?d5<g?a9<g?fn<g?cG<g?fS<g?ar<g?0:-1:0:-1:f7<g?e3<g?0:-1:0:-1:eA<g?ax<g?aD<g?bz<g?0:-1:0:-1:cM<g?a2<g?0:-1:0:-1:bM<g?cU<g?aR<g?fZ<g?bC<g?f2<g?0:-1:0:-1:ac<g?bS<g?0:-1:0:-1:hh<g?b$<g?gz<g?a3<g?0:-1:0:-1:f3<g?h4<g?0:-1:0:-1:b2<g?aU<g?fl<g?eO<g?eC<g?ev<g?dY<g?dK<g?c_<g?cv<g?0:-1:0:-1:b6<g?cw<g?0:-1:0:-1:ap<g?fU<g?eW<g?al<g?0:-1:0:-1:bO<g?ec<g?0:-1:0:-1:a5<g?gu<g?aA<g?fI<g?bB<g?bI<g?0:-1:0:-1:bn<g?cV<g?0:-1:0:-1:a_<g?aj<g?cx<g?bR<g?0:-1:0:-1:fs<g?fh<g?0:-1:0:-1:av<g?dP<g?cg<g?aS<g?aF<g?dt<g?f9<g?gd<g?0:-1:0:-1:e7<g?b5<g?0:-1:0:-1:bq<g?e6<g?fo<g?d1<g?0:-1:0:-1:cE<g?cI<g?0:-1:0:-1:eB<g?ds<g?et<g?bE<g?dv<g?c4<g?0:-1:0:-1:bf<g?cD<g?0:-1:0:-1:ho<g?hP<g?ie<g?c5<g?0:-1:0:-1:gO<g?gF<g?0:-1:0:-1:hR<g?gW<g?hZ<g?hk<g?gm<g?bK<g?dg<g?dX<g?hz<g?gT<g?hV<g?gX<g?0:-1:0:-1:aI<g?hG<g?0:-1:0:-1:fj<g?eH<g?g_<g?g1<g?0:-1:0:-1:dq<g?_<g?0:-1:0:-1:hA<g?h6<g?e0<g?cz<g?fO<g?fT<g?0:-1:0:-1:gD<g?dA<g?0:-1:0:-1:en<g?gK<g?hL<g?af<g?0:-1:0:-1:hC<g?ic<g?0:-1:0:-1:bg<g?f$<g?hO<g?gM<g?f6<g?gN<g?hj<g?g4<g?0:-1:0:-1:h9<g?cN<g?0:-1:0:-1:dm<g?hJ<g?g$<g?hT<g?0:-1:0:-1:ae<g?bN<g?0:-1:0:-1:gJ<g?g5<g?b4<g?ek<g?cT<g?fp<g?0:-1:0:-1:hH<g?f1<g?0:-1:0:-1:cH<g?S<g?az<g?hK<g?0:-1:0:-1:bA<g?dr<g?0:-1:0:-1:ci<g?aN<g?fv<g?fx<g?cm<g?aX<g?dx<g?fw<g?g3<g?hx<g?0:-1:0:-1:bP<g?bT<g?0:-1:0:-1:gn<g?b1<g?bd<g?gc<g?0:-1:0:-1:fy<g?a7<g?0:-1:0:-1:hn<g?e1<g?gv<g?c0<g?gk<g?a0<g?0:-1:0:-1:gp<g?ej<g?0:-1:0:-1:fV<g?fD<g?Y<g?hb<g?0:-1:0:-1:dS<g?fq<g?0:-1:0:-1:ch<g?c9<g?bj<g?Z<g?cQ<g?e$<g?R<g?V<g?0:-1:0:-1:eL<g?e2<g?0:-1:0:-1:gY<g?ao<g?dc<g?d$<g?0:-1:0:-1:fA<g?h_<g?0:-1:0:-1:W<g?bx<g?ak<g?aK<g?a8<g?cS<g?0:-1:0:-1:bQ<g?c3<g?0:-1:0:-1:du<g?dL<g?cR<g?fz<g?0:-1:0:-1:dM<g?M<g?0:-1:0:-1:U<g?f0<g?id<g?ba<g?ab<g?fB<g?fa<g?hX<g?bG<g?cr<g?cY<g?bX<g?dT<g?aP<g?0:-1:0:-1:bk<g?ck<g?0:-1:0:-1:df<g?hi<g?gE<g?bZ<g?0:-1:0:-1:gP<g?dU<g?0:-1:0:-1:g2<g?hd<g?gL<g?e5<g?f5<g?fe<g?0:-1:0:-1:hF<g?hw<g?0:-1:0:-1:dG<g?hI<g?g6<g?gG<g?0:-1:0:-1:fJ<g?eP<g?0:-1:0:-1:fW<g?db<g?aL<g?gs<g?es<g?co<g?dB<g?d3<g?0:-1:0:-1:eK<g?cc<g?0:-1:0:-1:T<g?as<g?fm<g?dn<g?0:-1:0:-1:f_<g?fR<g?0:-1:0:-1:dD<g?bb<g?ea<g?ff<g?de<g?cj<g?0:-1:0:-1:d2<g?eZ<g?0:-1:0:-1:aH<g?d0<g?cF<g?fY<g?0:-1:0:-1:b9<g?dQ<g?0:-1:0:-1:hr<g?go<g?gU<g?gy<g?eX<g?ee<g?gS<g?hs<g?h1<g?hQ<g?0:-1:0:-1:ad<g?eU<g?0:-1:0:-1:dO<g?be<g?eF<g?eo<g?0:-1:0:-1:dh<g?by<g?0:-1:0:-1:hc<g?bL<g?fH<g?aT<g?gR<g?b0<g?0:-1:0:-1:cp<g?el<g?0:-1:0:-1:h0<g?cJ<g?d4<g?dZ<g?0:-1:0:-1:hY<g?ib<g?0:-1:0:-1:hU<g?ht<g?ig<g?a1<g?h7<g?ey<g?hq<g?a4<g?0:-1:0:-1:f4<g?h5<g?0:-1:0:-1:bV<g?hM<g?h2<g?e8<g?0:-1:0:-1:bl<g?dE<g?0:-1:0:-1:eD<g?bD<g?bH<g?hN<g?gQ<g?hm<g?0:-1:0:-1:he<g?bF<g?0:-1:0:-1:bs<g?cb<g?em<g?fr<g?0:-1:0:-1:gg<g?fi<g?0:-1:0:-1:ef<g?c2<g?ct<g?cl<g?c7<g?dI<g?g0<g?g8<g?dj<g?hE<g?hp<g?cW<g?0:-1:0:-1:hv<g?bi<g?0:-1:0:-1:dl<g?cL<g?eT<g?an<g?0:-1:0:-1:gA<g?bw<g?0:-1:0:-1:cA<g?dz<g?fd<g?bc<g?d6<g?bu<g?0:-1:0:-1:fX<g?fN<g?0:-1:0:-1:c$<g?c8<g?aY<g?cK<g?0:-1:0:-1:d7<g?aE<g?0:-1:0:-1:d9<g?gZ<g?bW<g?a6<g?bt<g?h3<g?e4<g?fC<g?0:-1:0:-1:eq<g?aC<g?0:-1:0:-1:aB<g?eV<g?hS<g?gx<g?0:-1:0:-1:gV<g?cs<g?0:-1:0:-1:br<g?cX<g?fu<g?ei<g?eQ<g?gt<g?0:-1:0:-1:fM<g?ed<g?0:-1:0:-1:ai<g?aO<g?bY<g?cP<g?0:-1:0:-1:ge<g?bv<g?0:-1:0:-1:aV<g?eI<g?dy<g?gi<g?bm<g?er<g?aJ<g?ga<g?dV<g?ha<g?0:-1:0:-1:b3<g?aM<g?0:-1:0:-1:b_<g?cO<g?eh<g?fG<g?0:-1:0:-1:cd<g?fg<g?0:-1:0:-1:cZ<g?aa<g?dJ<g?bU<g?bh<g?c1<g?0:-1:0:-1:ay<g?bp<g?0:-1:0:-1:dN<g?fK<g?ce<g?gh<g?0:-1:0:-1:da<g?gw<g?0:-1:0:-1:h$<g?hD<g?fP<g?gf<g?X<g?dk<g?gj<g?dd<g?0:-1:0:-1:ex<g?au<g?0:-1:0:-1:aw<g?eE<g?eS<g?dp<g?0:-1:0:-1:h8<g?aZ<g?0:-1:0:-1:eu<g?eY<g?eG<g?hl<g?g7<g?g9<g?0:-1:0:-1:aW<g?a$<g?0:-1:0:-1:hu<g?hg<g?hf<g?c6<g?0:-1:0:-1:gB<g?gC<g?0:-1:0:-1:G(Pq,g+J|0)-1|0:-1;if(3<lP>>>0)var
d=c(a);else
switch(lP){case
0:var
d=D(a);break;case
1:var
d=E(a);break;case
2:z(a,73);var
h=b(a),lQ=35<h?ia<h?gH<h?hy<h?-1:dF<h?e9<h?aG<h?bJ<h?eJ<h?fE<h?cy<h?hW<h?0:-1:0:-1:eM<h?dH<h?0:-1:0:-1:cf<h?bo<h?di<h?aQ<h?0:-1:0:-1:$<h?dR<h?0:-1:0:-1:cn<h?eb<h?hB<h?gI<h?ca<h?gq<h?ft<h?dC<h?ag<h?eg<h?d8<h?dw<h?cu<h?cC<h?fk<h?d_<h?0:-1:0:-1:am<h?gl<h?0:-1:0:-1:fc<h?cB<h?gr<h?fF<h?0:-1:0:-1:fQ<h?b7<h?0:-1:0:-1:at<h?ep<h?gb<h?b8<h?ew<h?eN<h?0:-1:0:-1:f8<h?fL<h?0:-1:0:-1:eR<h?aq<h?ez<h?cq<h?0:-1:0:-1:e_<h?ah<h?0:-1:0:-1:fb<h?dW<h?d5<h?a9<h?fn<h?cG<h?fS<h?ar<h?0:-1:0:-1:f7<h?e3<h?0:-1:0:-1:eA<h?ax<h?aD<h?bz<h?0:-1:0:-1:cM<h?a2<h?0:-1:0:-1:bM<h?cU<h?aR<h?fZ<h?bC<h?f2<h?0:-1:0:-1:ac<h?bS<h?0:-1:0:-1:hh<h?b$<h?gz<h?a3<h?0:-1:0:-1:f3<h?h4<h?0:-1:0:-1:b2<h?aU<h?fl<h?eO<h?eC<h?ev<h?dY<h?dK<h?c_<h?cv<h?0:-1:0:-1:b6<h?cw<h?0:-1:0:-1:ap<h?fU<h?eW<h?al<h?0:-1:0:-1:bO<h?ec<h?0:-1:0:-1:a5<h?gu<h?aA<h?fI<h?bB<h?bI<h?0:-1:0:-1:bn<h?cV<h?0:-1:0:-1:a_<h?aj<h?cx<h?bR<h?0:-1:0:-1:fs<h?fh<h?0:-1:0:-1:av<h?dP<h?cg<h?aS<h?aF<h?dt<h?f9<h?gd<h?0:-1:0:-1:e7<h?b5<h?0:-1:0:-1:bq<h?e6<h?fo<h?d1<h?0:-1:0:-1:cE<h?cI<h?0:-1:0:-1:eB<h?ds<h?et<h?bE<h?dv<h?c4<h?0:-1:0:-1:bf<h?cD<h?0:-1:0:-1:ho<h?hP<h?ie<h?c5<h?0:-1:0:-1:gO<h?gF<h?0:-1:0:-1:hR<h?gW<h?hZ<h?hk<h?gm<h?bK<h?dg<h?dX<h?hz<h?gT<h?hV<h?gX<h?0:-1:0:-1:aI<h?hG<h?0:-1:0:-1:fj<h?eH<h?g_<h?g1<h?0:-1:0:-1:dq<h?_<h?0:-1:0:-1:hA<h?h6<h?e0<h?cz<h?fO<h?fT<h?0:-1:0:-1:gD<h?dA<h?0:-1:0:-1:en<h?gK<h?hL<h?af<h?0:-1:0:-1:hC<h?ic<h?0:-1:0:-1:bg<h?f$<h?hO<h?gM<h?f6<h?gN<h?hj<h?g4<h?0:-1:0:-1:h9<h?cN<h?0:-1:0:-1:dm<h?hJ<h?g$<h?hT<h?0:-1:0:-1:ae<h?bN<h?0:-1:0:-1:gJ<h?g5<h?b4<h?ek<h?cT<h?fp<h?0:-1:0:-1:hH<h?f1<h?0:-1:0:-1:cH<h?S<h?az<h?hK<h?0:-1:0:-1:bA<h?dr<h?0:-1:0:-1:ci<h?aN<h?fv<h?fx<h?cm<h?aX<h?dx<h?fw<h?g3<h?hx<h?0:-1:0:-1:bP<h?bT<h?0:-1:0:-1:gn<h?b1<h?bd<h?gc<h?0:-1:0:-1:fy<h?a7<h?0:-1:0:-1:hn<h?e1<h?gv<h?c0<h?gk<h?a0<h?0:-1:0:-1:gp<h?ej<h?0:-1:0:-1:fV<h?fD<h?Y<h?hb<h?0:-1:0:-1:dS<h?fq<h?0:-1:0:-1:ch<h?c9<h?bj<h?Z<h?cQ<h?e$<h?R<h?V<h?0:-1:0:-1:eL<h?e2<h?0:-1:0:-1:gY<h?ao<h?dc<h?d$<h?0:-1:0:-1:fA<h?h_<h?0:-1:0:-1:W<h?bx<h?ak<h?aK<h?a8<h?cS<h?0:-1:0:-1:bQ<h?c3<h?0:-1:0:-1:du<h?dL<h?cR<h?fz<h?0:-1:0:-1:dM<h?M<h?0:-1:0:-1:U<h?f0<h?id<h?ba<h?ab<h?fB<h?fa<h?hX<h?bG<h?cr<h?cY<h?bX<h?dT<h?aP<h?0:-1:0:-1:bk<h?ck<h?0:-1:0:-1:df<h?hi<h?gE<h?bZ<h?0:-1:0:-1:gP<h?dU<h?0:-1:0:-1:g2<h?hd<h?gL<h?e5<h?f5<h?fe<h?0:-1:0:-1:hF<h?hw<h?0:-1:0:-1:dG<h?hI<h?g6<h?gG<h?0:-1:0:-1:fJ<h?eP<h?0:-1:0:-1:fW<h?db<h?aL<h?gs<h?es<h?co<h?dB<h?d3<h?0:-1:0:-1:eK<h?cc<h?0:-1:0:-1:T<h?as<h?fm<h?dn<h?0:-1:0:-1:f_<h?fR<h?0:-1:0:-1:dD<h?bb<h?ea<h?ff<h?de<h?cj<h?0:-1:0:-1:d2<h?eZ<h?0:-1:0:-1:aH<h?d0<h?cF<h?fY<h?0:-1:0:-1:b9<h?dQ<h?0:-1:0:-1:hr<h?go<h?gU<h?gy<h?eX<h?ee<h?gS<h?hs<h?h1<h?hQ<h?0:-1:0:-1:ad<h?eU<h?0:-1:0:-1:dO<h?be<h?eF<h?eo<h?0:-1:0:-1:dh<h?by<h?0:-1:0:-1:hc<h?bL<h?fH<h?aT<h?gR<h?b0<h?0:-1:0:-1:cp<h?el<h?0:-1:0:-1:h0<h?cJ<h?d4<h?dZ<h?0:-1:0:-1:hY<h?ib<h?0:-1:0:-1:hU<h?ht<h?ig<h?a1<h?h7<h?ey<h?hq<h?a4<h?0:-1:0:-1:f4<h?h5<h?0:-1:0:-1:bV<h?hM<h?h2<h?e8<h?0:-1:0:-1:bl<h?dE<h?0:-1:0:-1:eD<h?bD<h?bH<h?hN<h?gQ<h?hm<h?0:-1:0:-1:he<h?bF<h?0:-1:0:-1:bs<h?cb<h?em<h?fr<h?0:-1:0:-1:gg<h?fi<h?0:-1:0:-1:ef<h?c2<h?ct<h?cl<h?c7<h?dI<h?g0<h?g8<h?dj<h?hE<h?hp<h?cW<h?0:-1:0:-1:hv<h?bi<h?0:-1:0:-1:dl<h?cL<h?eT<h?an<h?0:-1:0:-1:gA<h?bw<h?0:-1:0:-1:cA<h?dz<h?fd<h?bc<h?d6<h?bu<h?0:-1:0:-1:fX<h?fN<h?0:-1:0:-1:c$<h?c8<h?aY<h?cK<h?0:-1:0:-1:d7<h?aE<h?0:-1:0:-1:d9<h?gZ<h?bW<h?a6<h?bt<h?h3<h?e4<h?fC<h?0:-1:0:-1:eq<h?aC<h?0:-1:0:-1:aB<h?eV<h?hS<h?gx<h?0:-1:0:-1:gV<h?cs<h?0:-1:0:-1:br<h?cX<h?fu<h?ei<h?eQ<h?gt<h?0:-1:0:-1:fM<h?ed<h?0:-1:0:-1:ai<h?aO<h?bY<h?cP<h?0:-1:0:-1:ge<h?bv<h?0:-1:0:-1:aV<h?eI<h?dy<h?gi<h?bm<h?er<h?aJ<h?ga<h?dV<h?ha<h?0:-1:0:-1:b3<h?aM<h?0:-1:0:-1:b_<h?cO<h?eh<h?fG<h?0:-1:0:-1:cd<h?fg<h?0:-1:0:-1:cZ<h?aa<h?dJ<h?bU<h?bh<h?c1<h?0:-1:0:-1:ay<h?bp<h?0:-1:0:-1:dN<h?fK<h?ce<h?gh<h?0:-1:0:-1:da<h?gw<h?0:-1:0:-1:h$<h?hD<h?fP<h?gf<h?X<h?dk<h?gj<h?dd<h?0:-1:0:-1:ex<h?au<h?0:-1:0:-1:aw<h?eE<h?eS<h?dp<h?0:-1:0:-1:h8<h?aZ<h?0:-1:0:-1:eu<h?eY<h?eG<h?hl<h?g7<h?g9<h?0:-1:0:-1:aW<h?a$<h?0:-1:0:-1:hu<h?hg<h?hf<h?c6<h?0:-1:0:-1:gB<h?gC<h?0:-1:0:-1:G(Pk,h+J|0)-1|0:-1;if(5<lQ>>>0)var
d=c(a);else
switch(lQ){case
0:var
d=D(a);break;case
1:var
d=E(a);break;case
2:z(a,73);var
lR=ks(b(a));if(2<lR>>>0)var
d=c(a);else
switch(lR){case
0:var
d=D(a);break;case
1:var
d=E(a);break;default:z(a,73);var
lS=mF(b(a));if(2<lS>>>0)var
d=c(a);else
switch(lS){case
0:var
d=D(a);break;case
1:var
d=E(a);break;default:z(a,73);var
lT=mF(b(a));if(2<lT>>>0)var
d=c(a);else
switch(lT){case
0:var
d=D(a);break;case
1:var
d=E(a);break;default:z(a,73);var
l1=ik(b(a));if(2<l1>>>0)var
d=c(a);else
switch(l1){case
0:var
d=D(a);break;case
1:var
d=E(a);break;default:z(a,73);var
l2=jp(b(a));if(2<l2>>>0)var
d=c(a);else
switch(l2){case
0:var
d=D(a);break;case
1:var
d=E(a);break;default:z(a,30);var
l3=K(b(a)),d=0===l3?D(a):1===l3?E(a):c(a)}}}}}break;case
3:z(a,73);var
l4=jd(b(a));if(2<l4>>>0)var
d=c(a);else
switch(l4){case
0:var
d=D(a);break;case
1:var
d=E(a);break;default:z(a,73);var
l5=iY(b(a));if(2<l5>>>0)var
d=c(a);else
switch(l5){case
0:var
d=D(a);break;case
1:var
d=E(a);break;default:z(a,73);var
l6=jp(b(a));if(2<l6>>>0)var
d=c(a);else
switch(l6){case
0:var
d=D(a);break;case
1:var
d=E(a);break;default:z(a,73);var
l7=ik(b(a));if(2<l7>>>0)var
d=c(a);else
switch(l7){case
0:var
d=D(a);break;case
1:var
d=E(a);break;default:z(a,31);var
l8=K(b(a)),d=0===l8?D(a):1===l8?E(a):c(a)}}}}break;case
4:z(a,73);var
l9=iY(b(a));if(2<l9>>>0)var
d=c(a);else
switch(l9){case
0:var
d=D(a);break;case
1:var
d=E(a);break;default:z(a,73);var
l_=ks(b(a));if(2<l_>>>0)var
d=c(a);else
switch(l_){case
0:var
d=D(a);break;case
1:var
d=E(a);break;default:z(a,73);var
l$=jd(b(a));if(2<l$>>>0)var
d=c(a);else
switch(l$){case
0:var
d=D(a);break;case
1:var
d=E(a);break;default:z(a,73);var
ma=ix(b(a));if(2<ma>>>0)var
d=c(a);else
switch(ma){case
0:var
d=D(a);break;case
1:var
d=E(a);break;default:z(a,32);var
mb=K(b(a)),d=0===mb?D(a):1===mb?E(a):c(a)}}}}break;default:z(a,73);var
mc=ik(b(a));if(2<mc>>>0)var
d=c(a);else
switch(mc){case
0:var
d=D(a);break;case
1:var
d=E(a);break;default:z(a,73);var
md=ix(b(a));if(2<md>>>0)var
d=c(a);else
switch(md){case
0:var
d=D(a);break;case
1:var
d=E(a);break;default:z(a,73);var
me=ik(b(a));if(2<me>>>0)var
d=c(a);else
switch(me){case
0:var
d=D(a);break;case
1:var
d=E(a);break;default:z(a,33);var
mh=K(b(a)),d=0===mh?D(a):1===mh?E(a):c(a)}}}}break;default:z(a,34);var
mj=K(b(a)),d=0===mj?D(a):1===mj?E(a):c(a)}break;case
37:z(a,73);var
i=b(a),mk=35<i?ia<i?gH<i?hy<i?-1:dF<i?e9<i?aG<i?bJ<i?eJ<i?fE<i?cy<i?hW<i?0:-1:0:-1:eM<i?dH<i?0:-1:0:-1:cf<i?bo<i?di<i?aQ<i?0:-1:0:-1:$<i?dR<i?0:-1:0:-1:cn<i?eb<i?hB<i?gI<i?ca<i?gq<i?ft<i?dC<i?ag<i?eg<i?d8<i?dw<i?cu<i?cC<i?fk<i?d_<i?0:-1:0:-1:am<i?gl<i?0:-1:0:-1:fc<i?cB<i?gr<i?fF<i?0:-1:0:-1:fQ<i?b7<i?0:-1:0:-1:at<i?ep<i?gb<i?b8<i?ew<i?eN<i?0:-1:0:-1:f8<i?fL<i?0:-1:0:-1:eR<i?aq<i?ez<i?cq<i?0:-1:0:-1:e_<i?ah<i?0:-1:0:-1:fb<i?dW<i?d5<i?a9<i?fn<i?cG<i?fS<i?ar<i?0:-1:0:-1:f7<i?e3<i?0:-1:0:-1:eA<i?ax<i?aD<i?bz<i?0:-1:0:-1:cM<i?a2<i?0:-1:0:-1:bM<i?cU<i?aR<i?fZ<i?bC<i?f2<i?0:-1:0:-1:ac<i?bS<i?0:-1:0:-1:hh<i?b$<i?gz<i?a3<i?0:-1:0:-1:f3<i?h4<i?0:-1:0:-1:b2<i?aU<i?fl<i?eO<i?eC<i?ev<i?dY<i?dK<i?c_<i?cv<i?0:-1:0:-1:b6<i?cw<i?0:-1:0:-1:ap<i?fU<i?eW<i?al<i?0:-1:0:-1:bO<i?ec<i?0:-1:0:-1:a5<i?gu<i?aA<i?fI<i?bB<i?bI<i?0:-1:0:-1:bn<i?cV<i?0:-1:0:-1:a_<i?aj<i?cx<i?bR<i?0:-1:0:-1:fs<i?fh<i?0:-1:0:-1:av<i?dP<i?cg<i?aS<i?aF<i?dt<i?f9<i?gd<i?0:-1:0:-1:e7<i?b5<i?0:-1:0:-1:bq<i?e6<i?fo<i?d1<i?0:-1:0:-1:cE<i?cI<i?0:-1:0:-1:eB<i?ds<i?et<i?bE<i?dv<i?c4<i?0:-1:0:-1:bf<i?cD<i?0:-1:0:-1:ho<i?hP<i?ie<i?c5<i?0:-1:0:-1:gO<i?gF<i?0:-1:0:-1:hR<i?gW<i?hZ<i?hk<i?gm<i?bK<i?dg<i?dX<i?hz<i?gT<i?hV<i?gX<i?0:-1:0:-1:aI<i?hG<i?0:-1:0:-1:fj<i?eH<i?g_<i?g1<i?0:-1:0:-1:dq<i?_<i?0:-1:0:-1:hA<i?h6<i?e0<i?cz<i?fO<i?fT<i?0:-1:0:-1:gD<i?dA<i?0:-1:0:-1:en<i?gK<i?hL<i?af<i?0:-1:0:-1:hC<i?ic<i?0:-1:0:-1:bg<i?f$<i?hO<i?gM<i?f6<i?gN<i?hj<i?g4<i?0:-1:0:-1:h9<i?cN<i?0:-1:0:-1:dm<i?hJ<i?g$<i?hT<i?0:-1:0:-1:ae<i?bN<i?0:-1:0:-1:gJ<i?g5<i?b4<i?ek<i?cT<i?fp<i?0:-1:0:-1:hH<i?f1<i?0:-1:0:-1:cH<i?S<i?az<i?hK<i?0:-1:0:-1:bA<i?dr<i?0:-1:0:-1:ci<i?aN<i?fv<i?fx<i?cm<i?aX<i?dx<i?fw<i?g3<i?hx<i?0:-1:0:-1:bP<i?bT<i?0:-1:0:-1:gn<i?b1<i?bd<i?gc<i?0:-1:0:-1:fy<i?a7<i?0:-1:0:-1:hn<i?e1<i?gv<i?c0<i?gk<i?a0<i?0:-1:0:-1:gp<i?ej<i?0:-1:0:-1:fV<i?fD<i?Y<i?hb<i?0:-1:0:-1:dS<i?fq<i?0:-1:0:-1:ch<i?c9<i?bj<i?Z<i?cQ<i?e$<i?R<i?V<i?0:-1:0:-1:eL<i?e2<i?0:-1:0:-1:gY<i?ao<i?dc<i?d$<i?0:-1:0:-1:fA<i?h_<i?0:-1:0:-1:W<i?bx<i?ak<i?aK<i?a8<i?cS<i?0:-1:0:-1:bQ<i?c3<i?0:-1:0:-1:du<i?dL<i?cR<i?fz<i?0:-1:0:-1:dM<i?M<i?0:-1:0:-1:U<i?f0<i?id<i?ba<i?ab<i?fB<i?fa<i?hX<i?bG<i?cr<i?cY<i?bX<i?dT<i?aP<i?0:-1:0:-1:bk<i?ck<i?0:-1:0:-1:df<i?hi<i?gE<i?bZ<i?0:-1:0:-1:gP<i?dU<i?0:-1:0:-1:g2<i?hd<i?gL<i?e5<i?f5<i?fe<i?0:-1:0:-1:hF<i?hw<i?0:-1:0:-1:dG<i?hI<i?g6<i?gG<i?0:-1:0:-1:fJ<i?eP<i?0:-1:0:-1:fW<i?db<i?aL<i?gs<i?es<i?co<i?dB<i?d3<i?0:-1:0:-1:eK<i?cc<i?0:-1:0:-1:T<i?as<i?fm<i?dn<i?0:-1:0:-1:f_<i?fR<i?0:-1:0:-1:dD<i?bb<i?ea<i?ff<i?de<i?cj<i?0:-1:0:-1:d2<i?eZ<i?0:-1:0:-1:aH<i?d0<i?cF<i?fY<i?0:-1:0:-1:b9<i?dQ<i?0:-1:0:-1:hr<i?go<i?gU<i?gy<i?eX<i?ee<i?gS<i?hs<i?h1<i?hQ<i?0:-1:0:-1:ad<i?eU<i?0:-1:0:-1:dO<i?be<i?eF<i?eo<i?0:-1:0:-1:dh<i?by<i?0:-1:0:-1:hc<i?bL<i?fH<i?aT<i?gR<i?b0<i?0:-1:0:-1:cp<i?el<i?0:-1:0:-1:h0<i?cJ<i?d4<i?dZ<i?0:-1:0:-1:hY<i?ib<i?0:-1:0:-1:hU<i?ht<i?ig<i?a1<i?h7<i?ey<i?hq<i?a4<i?0:-1:0:-1:f4<i?h5<i?0:-1:0:-1:bV<i?hM<i?h2<i?e8<i?0:-1:0:-1:bl<i?dE<i?0:-1:0:-1:eD<i?bD<i?bH<i?hN<i?gQ<i?hm<i?0:-1:0:-1:he<i?bF<i?0:-1:0:-1:bs<i?cb<i?em<i?fr<i?0:-1:0:-1:gg<i?fi<i?0:-1:0:-1:ef<i?c2<i?ct<i?cl<i?c7<i?dI<i?g0<i?g8<i?dj<i?hE<i?hp<i?cW<i?0:-1:0:-1:hv<i?bi<i?0:-1:0:-1:dl<i?cL<i?eT<i?an<i?0:-1:0:-1:gA<i?bw<i?0:-1:0:-1:cA<i?dz<i?fd<i?bc<i?d6<i?bu<i?0:-1:0:-1:fX<i?fN<i?0:-1:0:-1:c$<i?c8<i?aY<i?cK<i?0:-1:0:-1:d7<i?aE<i?0:-1:0:-1:d9<i?gZ<i?bW<i?a6<i?bt<i?h3<i?e4<i?fC<i?0:-1:0:-1:eq<i?aC<i?0:-1:0:-1:aB<i?eV<i?hS<i?gx<i?0:-1:0:-1:gV<i?cs<i?0:-1:0:-1:br<i?cX<i?fu<i?ei<i?eQ<i?gt<i?0:-1:0:-1:fM<i?ed<i?0:-1:0:-1:ai<i?aO<i?bY<i?cP<i?0:-1:0:-1:ge<i?bv<i?0:-1:0:-1:aV<i?eI<i?dy<i?gi<i?bm<i?er<i?aJ<i?ga<i?dV<i?ha<i?0:-1:0:-1:b3<i?aM<i?0:-1:0:-1:b_<i?cO<i?eh<i?fG<i?0:-1:0:-1:cd<i?fg<i?0:-1:0:-1:cZ<i?aa<i?dJ<i?bU<i?bh<i?c1<i?0:-1:0:-1:ay<i?bp<i?0:-1:0:-1:dN<i?fK<i?ce<i?gh<i?0:-1:0:-1:da<i?gw<i?0:-1:0:-1:h$<i?hD<i?fP<i?gf<i?X<i?dk<i?gj<i?dd<i?0:-1:0:-1:ex<i?au<i?0:-1:0:-1:aw<i?eE<i?eS<i?dp<i?0:-1:0:-1:h8<i?aZ<i?0:-1:0:-1:eu<i?eY<i?eG<i?hl<i?g7<i?g9<i?0:-1:0:-1:aW<i?a$<i?0:-1:0:-1:hu<i?hg<i?hf<i?c6<i?0:-1:0:-1:gB<i?gC<i?0:-1:0:-1:G(PB,i+J|0)-1|0:-1;if(4<mk>>>0)var
d=c(a);else
switch(mk){case
0:var
d=D(a);break;case
1:var
d=E(a);break;case
2:z(a,73);var
ml=kb(b(a));if(2<ml>>>0)var
d=c(a);else
switch(ml){case
0:var
d=D(a);break;case
1:var
d=E(a);break;default:z(a,73);var
mm=ik(b(a));if(2<mm>>>0)var
d=c(a);else
switch(mm){case
0:var
d=D(a);break;case
1:var
d=E(a);break;default:z(a,35);var
mn=K(b(a)),d=0===mn?D(a):1===mn?E(a):c(a)}}break;case
3:z(a,73);var
mo=ks(b(a));if(2<mo>>>0)var
d=c(a);else
switch(mo){case
0:var
d=D(a);break;case
1:var
d=E(a);break;default:z(a,73);var
mq=rR(b(a));if(2<mq>>>0)var
d=c(a);else
switch(mq){case
0:var
d=D(a);break;case
1:var
d=E(a);break;default:z(a,36);var
mr=K(b(a)),d=0===mr?D(a):1===mr?E(a):c(a)}}break;default:z(a,73);var
j=b(a),ms=35<j?ia<j?gH<j?hy<j?-1:dF<j?e9<j?aG<j?bJ<j?eJ<j?fE<j?cy<j?hW<j?0:-1:0:-1:eM<j?dH<j?0:-1:0:-1:cf<j?bo<j?di<j?aQ<j?0:-1:0:-1:$<j?dR<j?0:-1:0:-1:cn<j?eb<j?hB<j?gI<j?ca<j?gq<j?ft<j?dC<j?ag<j?eg<j?d8<j?dw<j?cu<j?cC<j?fk<j?d_<j?0:-1:0:-1:am<j?gl<j?0:-1:0:-1:fc<j?cB<j?gr<j?fF<j?0:-1:0:-1:fQ<j?b7<j?0:-1:0:-1:at<j?ep<j?gb<j?b8<j?ew<j?eN<j?0:-1:0:-1:f8<j?fL<j?0:-1:0:-1:eR<j?aq<j?ez<j?cq<j?0:-1:0:-1:e_<j?ah<j?0:-1:0:-1:fb<j?dW<j?d5<j?a9<j?fn<j?cG<j?fS<j?ar<j?0:-1:0:-1:f7<j?e3<j?0:-1:0:-1:eA<j?ax<j?aD<j?bz<j?0:-1:0:-1:cM<j?a2<j?0:-1:0:-1:bM<j?cU<j?aR<j?fZ<j?bC<j?f2<j?0:-1:0:-1:ac<j?bS<j?0:-1:0:-1:hh<j?b$<j?gz<j?a3<j?0:-1:0:-1:f3<j?h4<j?0:-1:0:-1:b2<j?aU<j?fl<j?eO<j?eC<j?ev<j?dY<j?dK<j?c_<j?cv<j?0:-1:0:-1:b6<j?cw<j?0:-1:0:-1:ap<j?fU<j?eW<j?al<j?0:-1:0:-1:bO<j?ec<j?0:-1:0:-1:a5<j?gu<j?aA<j?fI<j?bB<j?bI<j?0:-1:0:-1:bn<j?cV<j?0:-1:0:-1:a_<j?aj<j?cx<j?bR<j?0:-1:0:-1:fs<j?fh<j?0:-1:0:-1:av<j?dP<j?cg<j?aS<j?aF<j?dt<j?f9<j?gd<j?0:-1:0:-1:e7<j?b5<j?0:-1:0:-1:bq<j?e6<j?fo<j?d1<j?0:-1:0:-1:cE<j?cI<j?0:-1:0:-1:eB<j?ds<j?et<j?bE<j?dv<j?c4<j?0:-1:0:-1:bf<j?cD<j?0:-1:0:-1:ho<j?hP<j?ie<j?c5<j?0:-1:0:-1:gO<j?gF<j?0:-1:0:-1:hR<j?gW<j?hZ<j?hk<j?gm<j?bK<j?dg<j?dX<j?hz<j?gT<j?hV<j?gX<j?0:-1:0:-1:aI<j?hG<j?0:-1:0:-1:fj<j?eH<j?g_<j?g1<j?0:-1:0:-1:dq<j?_<j?0:-1:0:-1:hA<j?h6<j?e0<j?cz<j?fO<j?fT<j?0:-1:0:-1:gD<j?dA<j?0:-1:0:-1:en<j?gK<j?hL<j?af<j?0:-1:0:-1:hC<j?ic<j?0:-1:0:-1:bg<j?f$<j?hO<j?gM<j?f6<j?gN<j?hj<j?g4<j?0:-1:0:-1:h9<j?cN<j?0:-1:0:-1:dm<j?hJ<j?g$<j?hT<j?0:-1:0:-1:ae<j?bN<j?0:-1:0:-1:gJ<j?g5<j?b4<j?ek<j?cT<j?fp<j?0:-1:0:-1:hH<j?f1<j?0:-1:0:-1:cH<j?S<j?az<j?hK<j?0:-1:0:-1:bA<j?dr<j?0:-1:0:-1:ci<j?aN<j?fv<j?fx<j?cm<j?aX<j?dx<j?fw<j?g3<j?hx<j?0:-1:0:-1:bP<j?bT<j?0:-1:0:-1:gn<j?b1<j?bd<j?gc<j?0:-1:0:-1:fy<j?a7<j?0:-1:0:-1:hn<j?e1<j?gv<j?c0<j?gk<j?a0<j?0:-1:0:-1:gp<j?ej<j?0:-1:0:-1:fV<j?fD<j?Y<j?hb<j?0:-1:0:-1:dS<j?fq<j?0:-1:0:-1:ch<j?c9<j?bj<j?Z<j?cQ<j?e$<j?R<j?V<j?0:-1:0:-1:eL<j?e2<j?0:-1:0:-1:gY<j?ao<j?dc<j?d$<j?0:-1:0:-1:fA<j?h_<j?0:-1:0:-1:W<j?bx<j?ak<j?aK<j?a8<j?cS<j?0:-1:0:-1:bQ<j?c3<j?0:-1:0:-1:du<j?dL<j?cR<j?fz<j?0:-1:0:-1:dM<j?M<j?0:-1:0:-1:U<j?f0<j?id<j?ba<j?ab<j?fB<j?fa<j?hX<j?bG<j?cr<j?cY<j?bX<j?dT<j?aP<j?0:-1:0:-1:bk<j?ck<j?0:-1:0:-1:df<j?hi<j?gE<j?bZ<j?0:-1:0:-1:gP<j?dU<j?0:-1:0:-1:g2<j?hd<j?gL<j?e5<j?f5<j?fe<j?0:-1:0:-1:hF<j?hw<j?0:-1:0:-1:dG<j?hI<j?g6<j?gG<j?0:-1:0:-1:fJ<j?eP<j?0:-1:0:-1:fW<j?db<j?aL<j?gs<j?es<j?co<j?dB<j?d3<j?0:-1:0:-1:eK<j?cc<j?0:-1:0:-1:T<j?as<j?fm<j?dn<j?0:-1:0:-1:f_<j?fR<j?0:-1:0:-1:dD<j?bb<j?ea<j?ff<j?de<j?cj<j?0:-1:0:-1:d2<j?eZ<j?0:-1:0:-1:aH<j?d0<j?cF<j?fY<j?0:-1:0:-1:b9<j?dQ<j?0:-1:0:-1:hr<j?go<j?gU<j?gy<j?eX<j?ee<j?gS<j?hs<j?h1<j?hQ<j?0:-1:0:-1:ad<j?eU<j?0:-1:0:-1:dO<j?be<j?eF<j?eo<j?0:-1:0:-1:dh<j?by<j?0:-1:0:-1:hc<j?bL<j?fH<j?aT<j?gR<j?b0<j?0:-1:0:-1:cp<j?el<j?0:-1:0:-1:h0<j?cJ<j?d4<j?dZ<j?0:-1:0:-1:hY<j?ib<j?0:-1:0:-1:hU<j?ht<j?ig<j?a1<j?h7<j?ey<j?hq<j?a4<j?0:-1:0:-1:f4<j?h5<j?0:-1:0:-1:bV<j?hM<j?h2<j?e8<j?0:-1:0:-1:bl<j?dE<j?0:-1:0:-1:eD<j?bD<j?bH<j?hN<j?gQ<j?hm<j?0:-1:0:-1:he<j?bF<j?0:-1:0:-1:bs<j?cb<j?em<j?fr<j?0:-1:0:-1:gg<j?fi<j?0:-1:0:-1:ef<j?c2<j?ct<j?cl<j?c7<j?dI<j?g0<j?g8<j?dj<j?hE<j?hp<j?cW<j?0:-1:0:-1:hv<j?bi<j?0:-1:0:-1:dl<j?cL<j?eT<j?an<j?0:-1:0:-1:gA<j?bw<j?0:-1:0:-1:cA<j?dz<j?fd<j?bc<j?d6<j?bu<j?0:-1:0:-1:fX<j?fN<j?0:-1:0:-1:c$<j?c8<j?aY<j?cK<j?0:-1:0:-1:d7<j?aE<j?0:-1:0:-1:d9<j?gZ<j?bW<j?a6<j?bt<j?h3<j?e4<j?fC<j?0:-1:0:-1:eq<j?aC<j?0:-1:0:-1:aB<j?eV<j?hS<j?gx<j?0:-1:0:-1:gV<j?cs<j?0:-1:0:-1:br<j?cX<j?fu<j?ei<j?eQ<j?gt<j?0:-1:0:-1:fM<j?ed<j?0:-1:0:-1:ai<j?aO<j?bY<j?cP<j?0:-1:0:-1:ge<j?bv<j?0:-1:0:-1:aV<j?eI<j?dy<j?gi<j?bm<j?er<j?aJ<j?ga<j?dV<j?ha<j?0:-1:0:-1:b3<j?aM<j?0:-1:0:-1:b_<j?cO<j?eh<j?fG<j?0:-1:0:-1:cd<j?fg<j?0:-1:0:-1:cZ<j?aa<j?dJ<j?bU<j?bh<j?c1<j?0:-1:0:-1:ay<j?bp<j?0:-1:0:-1:dN<j?fK<j?ce<j?gh<j?0:-1:0:-1:da<j?gw<j?0:-1:0:-1:h$<j?hD<j?fP<j?gf<j?X<j?dk<j?gj<j?dd<j?0:-1:0:-1:ex<j?au<j?0:-1:0:-1:aw<j?eE<j?eS<j?dp<j?0:-1:0:-1:h8<j?aZ<j?0:-1:0:-1:eu<j?eY<j?eG<j?hl<j?g7<j?g9<j?0:-1:0:-1:aW<j?a$<j?0:-1:0:-1:hu<j?hg<j?hf<j?c6<j?0:-1:0:-1:gB<j?gC<j?0:-1:0:-1:G(Pp,j+J|0)-1|0:-1;if(3<ms>>>0)var
d=c(a);else
switch(ms){case
0:var
d=D(a);break;case
1:var
d=E(a);break;case
2:z(a,73);var
mt=kc(b(a));if(2<mt>>>0)var
d=c(a);else
switch(mt){case
0:var
d=D(a);break;case
1:var
d=E(a);break;default:z(a,73);var
mu=jp(b(a));if(2<mu>>>0)var
d=c(a);else
switch(mu){case
0:var
d=D(a);break;case
1:var
d=E(a);break;default:z(a,73);var
mv=ix(b(a));if(2<mv>>>0)var
d=c(a);else
switch(mv){case
0:var
d=D(a);break;case
1:var
d=E(a);break;default:z(a,37);var
mw=K(b(a)),d=0===mw?D(a):1===mw?E(a):c(a)}}}break;default:z(a,73);var
mx=ik(b(a));if(2<mx>>>0)var
d=c(a);else
switch(mx){case
0:var
d=D(a);break;case
1:var
d=E(a);break;default:z(a,73);var
my=iX(b(a));if(2<my>>>0)var
d=c(a);else
switch(my){case
0:var
d=D(a);break;case
1:var
d=E(a);break;default:z(a,73);var
mz=kN(b(a));if(2<mz>>>0)var
d=c(a);else
switch(mz){case
0:var
d=D(a);break;case
1:var
d=E(a);break;default:z(a,73);var
mA=kb(b(a));if(2<mA>>>0)var
d=c(a);else
switch(mA){case
0:var
d=D(a);break;case
1:var
d=E(a);break;default:z(a,38);var
mG=K(b(a)),d=0===mG?D(a):1===mG?E(a):c(a)}}}}}}break;case
38:z(a,73);var
k=b(a),mQ=35<k?ia<k?gH<k?hy<k?-1:dF<k?e9<k?aG<k?bJ<k?eJ<k?fE<k?cy<k?hW<k?0:-1:0:-1:eM<k?dH<k?0:-1:0:-1:cf<k?bo<k?di<k?aQ<k?0:-1:0:-1:$<k?dR<k?0:-1:0:-1:cn<k?eb<k?hB<k?gI<k?ca<k?gq<k?ft<k?dC<k?ag<k?eg<k?d8<k?dw<k?cu<k?cC<k?fk<k?d_<k?0:-1:0:-1:am<k?gl<k?0:-1:0:-1:fc<k?cB<k?gr<k?fF<k?0:-1:0:-1:fQ<k?b7<k?0:-1:0:-1:at<k?ep<k?gb<k?b8<k?ew<k?eN<k?0:-1:0:-1:f8<k?fL<k?0:-1:0:-1:eR<k?aq<k?ez<k?cq<k?0:-1:0:-1:e_<k?ah<k?0:-1:0:-1:fb<k?dW<k?d5<k?a9<k?fn<k?cG<k?fS<k?ar<k?0:-1:0:-1:f7<k?e3<k?0:-1:0:-1:eA<k?ax<k?aD<k?bz<k?0:-1:0:-1:cM<k?a2<k?0:-1:0:-1:bM<k?cU<k?aR<k?fZ<k?bC<k?f2<k?0:-1:0:-1:ac<k?bS<k?0:-1:0:-1:hh<k?b$<k?gz<k?a3<k?0:-1:0:-1:f3<k?h4<k?0:-1:0:-1:b2<k?aU<k?fl<k?eO<k?eC<k?ev<k?dY<k?dK<k?c_<k?cv<k?0:-1:0:-1:b6<k?cw<k?0:-1:0:-1:ap<k?fU<k?eW<k?al<k?0:-1:0:-1:bO<k?ec<k?0:-1:0:-1:a5<k?gu<k?aA<k?fI<k?bB<k?bI<k?0:-1:0:-1:bn<k?cV<k?0:-1:0:-1:a_<k?aj<k?cx<k?bR<k?0:-1:0:-1:fs<k?fh<k?0:-1:0:-1:av<k?dP<k?cg<k?aS<k?aF<k?dt<k?f9<k?gd<k?0:-1:0:-1:e7<k?b5<k?0:-1:0:-1:bq<k?e6<k?fo<k?d1<k?0:-1:0:-1:cE<k?cI<k?0:-1:0:-1:eB<k?ds<k?et<k?bE<k?dv<k?c4<k?0:-1:0:-1:bf<k?cD<k?0:-1:0:-1:ho<k?hP<k?ie<k?c5<k?0:-1:0:-1:gO<k?gF<k?0:-1:0:-1:hR<k?gW<k?hZ<k?hk<k?gm<k?bK<k?dg<k?dX<k?hz<k?gT<k?hV<k?gX<k?0:-1:0:-1:aI<k?hG<k?0:-1:0:-1:fj<k?eH<k?g_<k?g1<k?0:-1:0:-1:dq<k?_<k?0:-1:0:-1:hA<k?h6<k?e0<k?cz<k?fO<k?fT<k?0:-1:0:-1:gD<k?dA<k?0:-1:0:-1:en<k?gK<k?hL<k?af<k?0:-1:0:-1:hC<k?ic<k?0:-1:0:-1:bg<k?f$<k?hO<k?gM<k?f6<k?gN<k?hj<k?g4<k?0:-1:0:-1:h9<k?cN<k?0:-1:0:-1:dm<k?hJ<k?g$<k?hT<k?0:-1:0:-1:ae<k?bN<k?0:-1:0:-1:gJ<k?g5<k?b4<k?ek<k?cT<k?fp<k?0:-1:0:-1:hH<k?f1<k?0:-1:0:-1:cH<k?S<k?az<k?hK<k?0:-1:0:-1:bA<k?dr<k?0:-1:0:-1:ci<k?aN<k?fv<k?fx<k?cm<k?aX<k?dx<k?fw<k?g3<k?hx<k?0:-1:0:-1:bP<k?bT<k?0:-1:0:-1:gn<k?b1<k?bd<k?gc<k?0:-1:0:-1:fy<k?a7<k?0:-1:0:-1:hn<k?e1<k?gv<k?c0<k?gk<k?a0<k?0:-1:0:-1:gp<k?ej<k?0:-1:0:-1:fV<k?fD<k?Y<k?hb<k?0:-1:0:-1:dS<k?fq<k?0:-1:0:-1:ch<k?c9<k?bj<k?Z<k?cQ<k?e$<k?R<k?V<k?0:-1:0:-1:eL<k?e2<k?0:-1:0:-1:gY<k?ao<k?dc<k?d$<k?0:-1:0:-1:fA<k?h_<k?0:-1:0:-1:W<k?bx<k?ak<k?aK<k?a8<k?cS<k?0:-1:0:-1:bQ<k?c3<k?0:-1:0:-1:du<k?dL<k?cR<k?fz<k?0:-1:0:-1:dM<k?M<k?0:-1:0:-1:U<k?f0<k?id<k?ba<k?ab<k?fB<k?fa<k?hX<k?bG<k?cr<k?cY<k?bX<k?dT<k?aP<k?0:-1:0:-1:bk<k?ck<k?0:-1:0:-1:df<k?hi<k?gE<k?bZ<k?0:-1:0:-1:gP<k?dU<k?0:-1:0:-1:g2<k?hd<k?gL<k?e5<k?f5<k?fe<k?0:-1:0:-1:hF<k?hw<k?0:-1:0:-1:dG<k?hI<k?g6<k?gG<k?0:-1:0:-1:fJ<k?eP<k?0:-1:0:-1:fW<k?db<k?aL<k?gs<k?es<k?co<k?dB<k?d3<k?0:-1:0:-1:eK<k?cc<k?0:-1:0:-1:T<k?as<k?fm<k?dn<k?0:-1:0:-1:f_<k?fR<k?0:-1:0:-1:dD<k?bb<k?ea<k?ff<k?de<k?cj<k?0:-1:0:-1:d2<k?eZ<k?0:-1:0:-1:aH<k?d0<k?cF<k?fY<k?0:-1:0:-1:b9<k?dQ<k?0:-1:0:-1:hr<k?go<k?gU<k?gy<k?eX<k?ee<k?gS<k?hs<k?h1<k?hQ<k?0:-1:0:-1:ad<k?eU<k?0:-1:0:-1:dO<k?be<k?eF<k?eo<k?0:-1:0:-1:dh<k?by<k?0:-1:0:-1:hc<k?bL<k?fH<k?aT<k?gR<k?b0<k?0:-1:0:-1:cp<k?el<k?0:-1:0:-1:h0<k?cJ<k?d4<k?dZ<k?0:-1:0:-1:hY<k?ib<k?0:-1:0:-1:hU<k?ht<k?ig<k?a1<k?h7<k?ey<k?hq<k?a4<k?0:-1:0:-1:f4<k?h5<k?0:-1:0:-1:bV<k?hM<k?h2<k?e8<k?0:-1:0:-1:bl<k?dE<k?0:-1:0:-1:eD<k?bD<k?bH<k?hN<k?gQ<k?hm<k?0:-1:0:-1:he<k?bF<k?0:-1:0:-1:bs<k?cb<k?em<k?fr<k?0:-1:0:-1:gg<k?fi<k?0:-1:0:-1:ef<k?c2<k?ct<k?cl<k?c7<k?dI<k?g0<k?g8<k?dj<k?hE<k?hp<k?cW<k?0:-1:0:-1:hv<k?bi<k?0:-1:0:-1:dl<k?cL<k?eT<k?an<k?0:-1:0:-1:gA<k?bw<k?0:-1:0:-1:cA<k?dz<k?fd<k?bc<k?d6<k?bu<k?0:-1:0:-1:fX<k?fN<k?0:-1:0:-1:c$<k?c8<k?aY<k?cK<k?0:-1:0:-1:d7<k?aE<k?0:-1:0:-1:d9<k?gZ<k?bW<k?a6<k?bt<k?h3<k?e4<k?fC<k?0:-1:0:-1:eq<k?aC<k?0:-1:0:-1:aB<k?eV<k?hS<k?gx<k?0:-1:0:-1:gV<k?cs<k?0:-1:0:-1:br<k?cX<k?fu<k?ei<k?eQ<k?gt<k?0:-1:0:-1:fM<k?ed<k?0:-1:0:-1:ai<k?aO<k?bY<k?cP<k?0:-1:0:-1:ge<k?bv<k?0:-1:0:-1:aV<k?eI<k?dy<k?gi<k?bm<k?er<k?aJ<k?ga<k?dV<k?ha<k?0:-1:0:-1:b3<k?aM<k?0:-1:0:-1:b_<k?cO<k?eh<k?fG<k?0:-1:0:-1:cd<k?fg<k?0:-1:0:-1:cZ<k?aa<k?dJ<k?bU<k?bh<k?c1<k?0:-1:0:-1:ay<k?bp<k?0:-1:0:-1:dN<k?fK<k?ce<k?gh<k?0:-1:0:-1:da<k?gw<k?0:-1:0:-1:h$<k?hD<k?fP<k?gf<k?X<k?dk<k?gj<k?dd<k?0:-1:0:-1:ex<k?au<k?0:-1:0:-1:aw<k?eE<k?eS<k?dp<k?0:-1:0:-1:h8<k?aZ<k?0:-1:0:-1:eu<k?eY<k?eG<k?hl<k?g7<k?g9<k?0:-1:0:-1:aW<k?a$<k?0:-1:0:-1:hu<k?hg<k?hf<k?c6<k?0:-1:0:-1:gB<k?gC<k?0:-1:0:-1:G(Pg,k+J|0)-1|0:-1;if(5<mQ>>>0)var
d=c(a);else
switch(mQ){case
0:var
d=D(a);break;case
1:var
d=E(a);break;case
2:z(a,73);var
mW=jd(b(a));if(2<mW>>>0)var
d=c(a);else
switch(mW){case
0:var
d=D(a);break;case
1:var
d=E(a);break;default:z(a,73);var
mX=kb(b(a));if(2<mX>>>0)var
d=c(a);else
switch(mX){case
0:var
d=D(a);break;case
1:var
d=E(a);break;default:z(a,73);var
mY=ik(b(a));if(2<mY>>>0)var
d=c(a);else
switch(mY){case
0:var
d=D(a);break;case
1:var
d=E(a);break;default:z(a,39);var
mZ=K(b(a)),d=0===mZ?D(a):1===mZ?E(a):c(a)}}}break;case
3:z(a,73);var
m0=iX(b(a));if(2<m0>>>0)var
d=c(a);else
switch(m0){case
0:var
d=D(a);break;case
1:var
d=E(a);break;default:z(a,73);var
m1=iY(b(a));if(2<m1>>>0)var
d=c(a);else
switch(m1){case
0:var
d=D(a);break;case
1:var
d=E(a);break;default:z(a,73);var
m2=jd(b(a));if(2<m2>>>0)var
d=c(a);else
switch(m2){case
0:var
d=D(a);break;case
1:var
d=E(a);break;default:z(a,73);var
ne=jd(b(a));if(2<ne>>>0)var
d=c(a);else
switch(ne){case
0:var
d=D(a);break;case
1:var
d=E(a);break;default:z(a,73);var
nj=mN(b(a));if(2<nj>>>0)var
d=c(a);else
switch(nj){case
0:var
d=D(a);break;case
1:var
d=E(a);break;default:z(a,40);var
no=K(b(a)),d=0===no?D(a):1===no?E(a):c(a)}}}}}break;case
4:z(a,73);var
nu=jp(b(a));if(2<nu>>>0)var
d=c(a);else
switch(nu){case
0:var
d=D(a);break;case
1:var
d=E(a);break;default:z(a,41);var
nx=K(b(a)),d=0===nx?D(a):1===nx?E(a):c(a)}break;default:z(a,73);var
nC=iX(b(a));if(2<nC>>>0)var
d=c(a);else
switch(nC){case
0:var
d=D(a);break;case
1:var
d=E(a);break;default:z(a,73);var
nD=jq(b(a));if(2<nD>>>0)var
d=c(a);else
switch(nD){case
0:var
d=D(a);break;case
1:var
d=E(a);break;default:z(a,73);var
nF=ix(b(a));if(2<nF>>>0)var
d=c(a);else
switch(nF){case
0:var
d=D(a);break;case
1:var
d=E(a);break;default:z(a,73);var
nN=jf(b(a));if(2<nN>>>0)var
d=c(a);else
switch(nN){case
0:var
d=D(a);break;case
1:var
d=E(a);break;default:z(a,73);var
nR=kc(b(a));if(2<nR>>>0)var
d=c(a);else
switch(nR){case
0:var
d=D(a);break;case
1:var
d=E(a);break;default:z(a,73);var
nT=iX(b(a));if(2<nT>>>0)var
d=c(a);else
switch(nT){case
0:var
d=D(a);break;case
1:var
d=E(a);break;default:z(a,42);var
nV=K(b(a)),d=0===nV?D(a):1===nV?E(a):c(a)}}}}}}}break;case
39:z(a,73);var
l=b(a),nZ=35<l?ia<l?gH<l?hy<l?-1:dF<l?e9<l?aG<l?bJ<l?eJ<l?fE<l?cy<l?hW<l?0:-1:0:-1:eM<l?dH<l?0:-1:0:-1:cf<l?bo<l?di<l?aQ<l?0:-1:0:-1:$<l?dR<l?0:-1:0:-1:cn<l?eb<l?hB<l?gI<l?ca<l?gq<l?ft<l?dC<l?ag<l?eg<l?d8<l?dw<l?cu<l?cC<l?fk<l?d_<l?0:-1:0:-1:am<l?gl<l?0:-1:0:-1:fc<l?cB<l?gr<l?fF<l?0:-1:0:-1:fQ<l?b7<l?0:-1:0:-1:at<l?ep<l?gb<l?b8<l?ew<l?eN<l?0:-1:0:-1:f8<l?fL<l?0:-1:0:-1:eR<l?aq<l?ez<l?cq<l?0:-1:0:-1:e_<l?ah<l?0:-1:0:-1:fb<l?dW<l?d5<l?a9<l?fn<l?cG<l?fS<l?ar<l?0:-1:0:-1:f7<l?e3<l?0:-1:0:-1:eA<l?ax<l?aD<l?bz<l?0:-1:0:-1:cM<l?a2<l?0:-1:0:-1:bM<l?cU<l?aR<l?fZ<l?bC<l?f2<l?0:-1:0:-1:ac<l?bS<l?0:-1:0:-1:hh<l?b$<l?gz<l?a3<l?0:-1:0:-1:f3<l?h4<l?0:-1:0:-1:b2<l?aU<l?fl<l?eO<l?eC<l?ev<l?dY<l?dK<l?c_<l?cv<l?0:-1:0:-1:b6<l?cw<l?0:-1:0:-1:ap<l?fU<l?eW<l?al<l?0:-1:0:-1:bO<l?ec<l?0:-1:0:-1:a5<l?gu<l?aA<l?fI<l?bB<l?bI<l?0:-1:0:-1:bn<l?cV<l?0:-1:0:-1:a_<l?aj<l?cx<l?bR<l?0:-1:0:-1:fs<l?fh<l?0:-1:0:-1:av<l?dP<l?cg<l?aS<l?aF<l?dt<l?f9<l?gd<l?0:-1:0:-1:e7<l?b5<l?0:-1:0:-1:bq<l?e6<l?fo<l?d1<l?0:-1:0:-1:cE<l?cI<l?0:-1:0:-1:eB<l?ds<l?et<l?bE<l?dv<l?c4<l?0:-1:0:-1:bf<l?cD<l?0:-1:0:-1:ho<l?hP<l?ie<l?c5<l?0:-1:0:-1:gO<l?gF<l?0:-1:0:-1:hR<l?gW<l?hZ<l?hk<l?gm<l?bK<l?dg<l?dX<l?hz<l?gT<l?hV<l?gX<l?0:-1:0:-1:aI<l?hG<l?0:-1:0:-1:fj<l?eH<l?g_<l?g1<l?0:-1:0:-1:dq<l?_<l?0:-1:0:-1:hA<l?h6<l?e0<l?cz<l?fO<l?fT<l?0:-1:0:-1:gD<l?dA<l?0:-1:0:-1:en<l?gK<l?hL<l?af<l?0:-1:0:-1:hC<l?ic<l?0:-1:0:-1:bg<l?f$<l?hO<l?gM<l?f6<l?gN<l?hj<l?g4<l?0:-1:0:-1:h9<l?cN<l?0:-1:0:-1:dm<l?hJ<l?g$<l?hT<l?0:-1:0:-1:ae<l?bN<l?0:-1:0:-1:gJ<l?g5<l?b4<l?ek<l?cT<l?fp<l?0:-1:0:-1:hH<l?f1<l?0:-1:0:-1:cH<l?S<l?az<l?hK<l?0:-1:0:-1:bA<l?dr<l?0:-1:0:-1:ci<l?aN<l?fv<l?fx<l?cm<l?aX<l?dx<l?fw<l?g3<l?hx<l?0:-1:0:-1:bP<l?bT<l?0:-1:0:-1:gn<l?b1<l?bd<l?gc<l?0:-1:0:-1:fy<l?a7<l?0:-1:0:-1:hn<l?e1<l?gv<l?c0<l?gk<l?a0<l?0:-1:0:-1:gp<l?ej<l?0:-1:0:-1:fV<l?fD<l?Y<l?hb<l?0:-1:0:-1:dS<l?fq<l?0:-1:0:-1:ch<l?c9<l?bj<l?Z<l?cQ<l?e$<l?R<l?V<l?0:-1:0:-1:eL<l?e2<l?0:-1:0:-1:gY<l?ao<l?dc<l?d$<l?0:-1:0:-1:fA<l?h_<l?0:-1:0:-1:W<l?bx<l?ak<l?aK<l?a8<l?cS<l?0:-1:0:-1:bQ<l?c3<l?0:-1:0:-1:du<l?dL<l?cR<l?fz<l?0:-1:0:-1:dM<l?M<l?0:-1:0:-1:U<l?f0<l?id<l?ba<l?ab<l?fB<l?fa<l?hX<l?bG<l?cr<l?cY<l?bX<l?dT<l?aP<l?0:-1:0:-1:bk<l?ck<l?0:-1:0:-1:df<l?hi<l?gE<l?bZ<l?0:-1:0:-1:gP<l?dU<l?0:-1:0:-1:g2<l?hd<l?gL<l?e5<l?f5<l?fe<l?0:-1:0:-1:hF<l?hw<l?0:-1:0:-1:dG<l?hI<l?g6<l?gG<l?0:-1:0:-1:fJ<l?eP<l?0:-1:0:-1:fW<l?db<l?aL<l?gs<l?es<l?co<l?dB<l?d3<l?0:-1:0:-1:eK<l?cc<l?0:-1:0:-1:T<l?as<l?fm<l?dn<l?0:-1:0:-1:f_<l?fR<l?0:-1:0:-1:dD<l?bb<l?ea<l?ff<l?de<l?cj<l?0:-1:0:-1:d2<l?eZ<l?0:-1:0:-1:aH<l?d0<l?cF<l?fY<l?0:-1:0:-1:b9<l?dQ<l?0:-1:0:-1:hr<l?go<l?gU<l?gy<l?eX<l?ee<l?gS<l?hs<l?h1<l?hQ<l?0:-1:0:-1:ad<l?eU<l?0:-1:0:-1:dO<l?be<l?eF<l?eo<l?0:-1:0:-1:dh<l?by<l?0:-1:0:-1:hc<l?bL<l?fH<l?aT<l?gR<l?b0<l?0:-1:0:-1:cp<l?el<l?0:-1:0:-1:h0<l?cJ<l?d4<l?dZ<l?0:-1:0:-1:hY<l?ib<l?0:-1:0:-1:hU<l?ht<l?ig<l?a1<l?h7<l?ey<l?hq<l?a4<l?0:-1:0:-1:f4<l?h5<l?0:-1:0:-1:bV<l?hM<l?h2<l?e8<l?0:-1:0:-1:bl<l?dE<l?0:-1:0:-1:eD<l?bD<l?bH<l?hN<l?gQ<l?hm<l?0:-1:0:-1:he<l?bF<l?0:-1:0:-1:bs<l?cb<l?em<l?fr<l?0:-1:0:-1:gg<l?fi<l?0:-1:0:-1:ef<l?c2<l?ct<l?cl<l?c7<l?dI<l?g0<l?g8<l?dj<l?hE<l?hp<l?cW<l?0:-1:0:-1:hv<l?bi<l?0:-1:0:-1:dl<l?cL<l?eT<l?an<l?0:-1:0:-1:gA<l?bw<l?0:-1:0:-1:cA<l?dz<l?fd<l?bc<l?d6<l?bu<l?0:-1:0:-1:fX<l?fN<l?0:-1:0:-1:c$<l?c8<l?aY<l?cK<l?0:-1:0:-1:d7<l?aE<l?0:-1:0:-1:d9<l?gZ<l?bW<l?a6<l?bt<l?h3<l?e4<l?fC<l?0:-1:0:-1:eq<l?aC<l?0:-1:0:-1:aB<l?eV<l?hS<l?gx<l?0:-1:0:-1:gV<l?cs<l?0:-1:0:-1:br<l?cX<l?fu<l?ei<l?eQ<l?gt<l?0:-1:0:-1:fM<l?ed<l?0:-1:0:-1:ai<l?aO<l?bY<l?cP<l?0:-1:0:-1:ge<l?bv<l?0:-1:0:-1:aV<l?eI<l?dy<l?gi<l?bm<l?er<l?aJ<l?ga<l?dV<l?ha<l?0:-1:0:-1:b3<l?aM<l?0:-1:0:-1:b_<l?cO<l?eh<l?fG<l?0:-1:0:-1:cd<l?fg<l?0:-1:0:-1:cZ<l?aa<l?dJ<l?bU<l?bh<l?c1<l?0:-1:0:-1:ay<l?bp<l?0:-1:0:-1:dN<l?fK<l?ce<l?gh<l?0:-1:0:-1:da<l?gw<l?0:-1:0:-1:h$<l?hD<l?fP<l?gf<l?X<l?dk<l?gj<l?dd<l?0:-1:0:-1:ex<l?au<l?0:-1:0:-1:aw<l?eE<l?eS<l?dp<l?0:-1:0:-1:h8<l?aZ<l?0:-1:0:-1:eu<l?eY<l?eG<l?hl<l?g7<l?g9<l?0:-1:0:-1:aW<l?a$<l?0:-1:0:-1:hu<l?hg<l?hf<l?c6<l?0:-1:0:-1:gB<l?gC<l?0:-1:0:-1:G(Pf,l+J|0)-1|0:-1;if(4<nZ>>>0)var
d=c(a);else
switch(nZ){case
0:var
d=D(a);break;case
1:var
d=E(a);break;case
2:z(a,43);var
n0=K(b(a)),d=0===n0?D(a):1===n0?E(a):c(a);break;case
3:z(a,73);var
n4=lW(b(a));if(2<n4>>>0)var
d=c(a);else
switch(n4){case
0:var
d=D(a);break;case
1:var
d=E(a);break;default:z(a,73);var
m=b(a),n8=35<m?ia<m?gH<m?hy<m?-1:dF<m?e9<m?aG<m?bJ<m?eJ<m?fE<m?cy<m?hW<m?0:-1:0:-1:eM<m?dH<m?0:-1:0:-1:cf<m?bo<m?di<m?aQ<m?0:-1:0:-1:$<m?dR<m?0:-1:0:-1:cn<m?eb<m?hB<m?gI<m?ca<m?gq<m?ft<m?dC<m?ag<m?eg<m?d8<m?dw<m?cu<m?cC<m?fk<m?d_<m?0:-1:0:-1:am<m?gl<m?0:-1:0:-1:fc<m?cB<m?gr<m?fF<m?0:-1:0:-1:fQ<m?b7<m?0:-1:0:-1:at<m?ep<m?gb<m?b8<m?ew<m?eN<m?0:-1:0:-1:f8<m?fL<m?0:-1:0:-1:eR<m?aq<m?ez<m?cq<m?0:-1:0:-1:e_<m?ah<m?0:-1:0:-1:fb<m?dW<m?d5<m?a9<m?fn<m?cG<m?fS<m?ar<m?0:-1:0:-1:f7<m?e3<m?0:-1:0:-1:eA<m?ax<m?aD<m?bz<m?0:-1:0:-1:cM<m?a2<m?0:-1:0:-1:bM<m?cU<m?aR<m?fZ<m?bC<m?f2<m?0:-1:0:-1:ac<m?bS<m?0:-1:0:-1:hh<m?b$<m?gz<m?a3<m?0:-1:0:-1:f3<m?h4<m?0:-1:0:-1:b2<m?aU<m?fl<m?eO<m?eC<m?ev<m?dY<m?dK<m?c_<m?cv<m?0:-1:0:-1:b6<m?cw<m?0:-1:0:-1:ap<m?fU<m?eW<m?al<m?0:-1:0:-1:bO<m?ec<m?0:-1:0:-1:a5<m?gu<m?aA<m?fI<m?bB<m?bI<m?0:-1:0:-1:bn<m?cV<m?0:-1:0:-1:a_<m?aj<m?cx<m?bR<m?0:-1:0:-1:fs<m?fh<m?0:-1:0:-1:av<m?dP<m?cg<m?aS<m?aF<m?dt<m?f9<m?gd<m?0:-1:0:-1:e7<m?b5<m?0:-1:0:-1:bq<m?e6<m?fo<m?d1<m?0:-1:0:-1:cE<m?cI<m?0:-1:0:-1:eB<m?ds<m?et<m?bE<m?dv<m?c4<m?0:-1:0:-1:bf<m?cD<m?0:-1:0:-1:ho<m?hP<m?ie<m?c5<m?0:-1:0:-1:gO<m?gF<m?0:-1:0:-1:hR<m?gW<m?hZ<m?hk<m?gm<m?bK<m?dg<m?dX<m?hz<m?gT<m?hV<m?gX<m?0:-1:0:-1:aI<m?hG<m?0:-1:0:-1:fj<m?eH<m?g_<m?g1<m?0:-1:0:-1:dq<m?_<m?0:-1:0:-1:hA<m?h6<m?e0<m?cz<m?fO<m?fT<m?0:-1:0:-1:gD<m?dA<m?0:-1:0:-1:en<m?gK<m?hL<m?af<m?0:-1:0:-1:hC<m?ic<m?0:-1:0:-1:bg<m?f$<m?hO<m?gM<m?f6<m?gN<m?hj<m?g4<m?0:-1:0:-1:h9<m?cN<m?0:-1:0:-1:dm<m?hJ<m?g$<m?hT<m?0:-1:0:-1:ae<m?bN<m?0:-1:0:-1:gJ<m?g5<m?b4<m?ek<m?cT<m?fp<m?0:-1:0:-1:hH<m?f1<m?0:-1:0:-1:cH<m?S<m?az<m?hK<m?0:-1:0:-1:bA<m?dr<m?0:-1:0:-1:ci<m?aN<m?fv<m?fx<m?cm<m?aX<m?dx<m?fw<m?g3<m?hx<m?0:-1:0:-1:bP<m?bT<m?0:-1:0:-1:gn<m?b1<m?bd<m?gc<m?0:-1:0:-1:fy<m?a7<m?0:-1:0:-1:hn<m?e1<m?gv<m?c0<m?gk<m?a0<m?0:-1:0:-1:gp<m?ej<m?0:-1:0:-1:fV<m?fD<m?Y<m?hb<m?0:-1:0:-1:dS<m?fq<m?0:-1:0:-1:ch<m?c9<m?bj<m?Z<m?cQ<m?e$<m?R<m?V<m?0:-1:0:-1:eL<m?e2<m?0:-1:0:-1:gY<m?ao<m?dc<m?d$<m?0:-1:0:-1:fA<m?h_<m?0:-1:0:-1:W<m?bx<m?ak<m?aK<m?a8<m?cS<m?0:-1:0:-1:bQ<m?c3<m?0:-1:0:-1:du<m?dL<m?cR<m?fz<m?0:-1:0:-1:dM<m?M<m?0:-1:0:-1:U<m?f0<m?id<m?ba<m?ab<m?fB<m?fa<m?hX<m?bG<m?cr<m?cY<m?bX<m?dT<m?aP<m?0:-1:0:-1:bk<m?ck<m?0:-1:0:-1:df<m?hi<m?gE<m?bZ<m?0:-1:0:-1:gP<m?dU<m?0:-1:0:-1:g2<m?hd<m?gL<m?e5<m?f5<m?fe<m?0:-1:0:-1:hF<m?hw<m?0:-1:0:-1:dG<m?hI<m?g6<m?gG<m?0:-1:0:-1:fJ<m?eP<m?0:-1:0:-1:fW<m?db<m?aL<m?gs<m?es<m?co<m?dB<m?d3<m?0:-1:0:-1:eK<m?cc<m?0:-1:0:-1:T<m?as<m?fm<m?dn<m?0:-1:0:-1:f_<m?fR<m?0:-1:0:-1:dD<m?bb<m?ea<m?ff<m?de<m?cj<m?0:-1:0:-1:d2<m?eZ<m?0:-1:0:-1:aH<m?d0<m?cF<m?fY<m?0:-1:0:-1:b9<m?dQ<m?0:-1:0:-1:hr<m?go<m?gU<m?gy<m?eX<m?ee<m?gS<m?hs<m?h1<m?hQ<m?0:-1:0:-1:ad<m?eU<m?0:-1:0:-1:dO<m?be<m?eF<m?eo<m?0:-1:0:-1:dh<m?by<m?0:-1:0:-1:hc<m?bL<m?fH<m?aT<m?gR<m?b0<m?0:-1:0:-1:cp<m?el<m?0:-1:0:-1:h0<m?cJ<m?d4<m?dZ<m?0:-1:0:-1:hY<m?ib<m?0:-1:0:-1:hU<m?ht<m?ig<m?a1<m?h7<m?ey<m?hq<m?a4<m?0:-1:0:-1:f4<m?h5<m?0:-1:0:-1:bV<m?hM<m?h2<m?e8<m?0:-1:0:-1:bl<m?dE<m?0:-1:0:-1:eD<m?bD<m?bH<m?hN<m?gQ<m?hm<m?0:-1:0:-1:he<m?bF<m?0:-1:0:-1:bs<m?cb<m?em<m?fr<m?0:-1:0:-1:gg<m?fi<m?0:-1:0:-1:ef<m?c2<m?ct<m?cl<m?c7<m?dI<m?g0<m?g8<m?dj<m?hE<m?hp<m?cW<m?0:-1:0:-1:hv<m?bi<m?0:-1:0:-1:dl<m?cL<m?eT<m?an<m?0:-1:0:-1:gA<m?bw<m?0:-1:0:-1:cA<m?dz<m?fd<m?bc<m?d6<m?bu<m?0:-1:0:-1:fX<m?fN<m?0:-1:0:-1:c$<m?c8<m?aY<m?cK<m?0:-1:0:-1:d7<m?aE<m?0:-1:0:-1:d9<m?gZ<m?bW<m?a6<m?bt<m?h3<m?e4<m?fC<m?0:-1:0:-1:eq<m?aC<m?0:-1:0:-1:aB<m?eV<m?hS<m?gx<m?0:-1:0:-1:gV<m?cs<m?0:-1:0:-1:br<m?cX<m?fu<m?ei<m?eQ<m?gt<m?0:-1:0:-1:fM<m?ed<m?0:-1:0:-1:ai<m?aO<m?bY<m?cP<m?0:-1:0:-1:ge<m?bv<m?0:-1:0:-1:aV<m?eI<m?dy<m?gi<m?bm<m?er<m?aJ<m?ga<m?dV<m?ha<m?0:-1:0:-1:b3<m?aM<m?0:-1:0:-1:b_<m?cO<m?eh<m?fG<m?0:-1:0:-1:cd<m?fg<m?0:-1:0:-1:cZ<m?aa<m?dJ<m?bU<m?bh<m?c1<m?0:-1:0:-1:ay<m?bp<m?0:-1:0:-1:dN<m?fK<m?ce<m?gh<m?0:-1:0:-1:da<m?gw<m?0:-1:0:-1:h$<m?hD<m?fP<m?gf<m?X<m?dk<m?gj<m?dd<m?0:-1:0:-1:ex<m?au<m?0:-1:0:-1:aw<m?eE<m?eS<m?dp<m?0:-1:0:-1:h8<m?aZ<m?0:-1:0:-1:eu<m?eY<m?eG<m?hl<m?g7<m?g9<m?0:-1:0:-1:aW<m?a$<m?0:-1:0:-1:hu<m?hg<m?hf<m?c6<m?0:-1:0:-1:gB<m?gC<m?0:-1:0:-1:G(O1,m+J|0)-1|0:-1;if(3<n8>>>0)var
d=c(a);else
switch(n8){case
0:var
d=D(a);break;case
1:var
d=E(a);break;case
2:z(a,73);var
n_=ik(b(a));if(2<n_>>>0)var
d=c(a);else
switch(n_){case
0:var
d=D(a);break;case
1:var
d=E(a);break;default:z(a,73);var
oi=rR(b(a));if(2<oi>>>0)var
d=c(a);else
switch(oi){case
0:var
d=D(a);break;case
1:var
d=E(a);break;default:z(a,73);var
oj=ik(b(a));if(2<oj>>>0)var
d=c(a);else
switch(oj){case
0:var
d=D(a);break;case
1:var
d=E(a);break;default:z(a,73);var
ok=iX(b(a));if(2<ok>>>0)var
d=c(a);else
switch(ok){case
0:var
d=D(a);break;case
1:var
d=E(a);break;default:z(a,73);var
ol=ix(b(a));if(2<ol>>>0)var
d=c(a);else
switch(ol){case
0:var
d=D(a);break;case
1:var
d=E(a);break;default:z(a,73);var
om=kb(b(a));if(2<om>>>0)var
d=c(a);else
switch(om){case
0:var
d=D(a);break;case
1:var
d=E(a);break;default:z(a,44);var
on=K(b(a)),d=0===on?D(a):1===on?E(a):c(a)}}}}}}break;default:z(a,73);var
oo=jp(b(a));if(2<oo>>>0)var
d=c(a);else
switch(oo){case
0:var
d=D(a);break;case
1:var
d=E(a);break;default:z(a,73);var
op=ix(b(a));if(2<op>>>0)var
d=c(a);else
switch(op){case
0:var
d=D(a);break;case
1:var
d=E(a);break;default:z(a,45);var
oq=K(b(a)),d=0===oq?D(a):1===oq?E(a):c(a)}}}}break;default:z(a,46);var
or=oS(b(a));if(3<or>>>0)var
d=c(a);else
switch(or){case
0:var
d=D(a);break;case
1:var
d=E(a);break;case
2:z(a,73);var
os=ix(b(a));if(2<os>>>0)var
d=c(a);else
switch(os){case
0:var
d=D(a);break;case
1:var
d=E(a);break;default:z(a,73);var
ot=iY(b(a));if(2<ot>>>0)var
d=c(a);else
switch(ot){case
0:var
d=D(a);break;case
1:var
d=E(a);break;default:z(a,73);var
ou=iX(b(a));if(2<ou>>>0)var
d=c(a);else
switch(ou){case
0:var
d=D(a);break;case
1:var
d=E(a);break;default:z(a,73);var
ov=jq(b(a));if(2<ov>>>0)var
d=c(a);else
switch(ov){case
0:var
d=D(a);break;case
1:var
d=E(a);break;default:z(a,73);var
ow=ik(b(a));if(2<ow>>>0)var
d=c(a);else
switch(ow){case
0:var
d=D(a);break;case
1:var
d=E(a);break;default:z(a,73);var
ox=kc(b(a));if(2<ox>>>0)var
d=c(a);else
switch(ox){case
0:var
d=D(a);break;case
1:var
d=E(a);break;default:z(a,73);var
oy=l0(b(a));if(2<oy>>>0)var
d=c(a);else
switch(oy){case
0:var
d=D(a);break;case
1:var
d=E(a);break;default:z(a,47);var
oz=K(b(a)),d=0===oz?D(a):1===oz?E(a):c(a)}}}}}}}break;default:z(a,73);var
oA=ik(b(a));if(2<oA>>>0)var
d=c(a);else
switch(oA){case
0:var
d=D(a);break;case
1:var
d=E(a);break;default:z(a,73);var
oB=jp(b(a));if(2<oB>>>0)var
d=c(a);else
switch(oB){case
0:var
d=D(a);break;case
1:var
d=E(a);break;default:z(a,73);var
oC=l0(b(a));if(2<oC>>>0)var
d=c(a);else
switch(oC){case
0:var
d=D(a);break;case
1:var
d=E(a);break;default:z(a,73);var
oD=iY(b(a));if(2<oD>>>0)var
d=c(a);else
switch(oD){case
0:var
d=D(a);break;case
1:var
d=E(a);break;default:z(a,73);var
oE=jq(b(a));if(2<oE>>>0)var
d=c(a);else
switch(oE){case
0:var
d=D(a);break;case
1:var
d=E(a);break;default:z(a,73);var
oF=ik(b(a));if(2<oF>>>0)var
d=c(a);else
switch(oF){case
0:var
d=D(a);break;case
1:var
d=E(a);break;default:z(a,48);var
oH=K(b(a)),d=0===oH?D(a):1===oH?E(a):c(a)}}}}}}}}break;case
40:z(a,73);var
oI=ik(b(a));if(2<oI>>>0)var
d=c(a);else
switch(oI){case
0:var
d=D(a);break;case
1:var
d=E(a);break;default:z(a,73);var
oJ=ix(b(a));if(2<oJ>>>0)var
d=c(a);else
switch(oJ){case
0:var
d=D(a);break;case
1:var
d=E(a);break;default:z(a,49);var
oK=K(b(a)),d=0===oK?D(a):1===oK?E(a):c(a)}}break;case
41:z(a,73);var
n=b(a),oL=35<n?ia<n?gH<n?hy<n?-1:dF<n?e9<n?aG<n?bJ<n?eJ<n?fE<n?cy<n?hW<n?0:-1:0:-1:eM<n?dH<n?0:-1:0:-1:cf<n?bo<n?di<n?aQ<n?0:-1:0:-1:$<n?dR<n?0:-1:0:-1:cn<n?eb<n?hB<n?gI<n?ca<n?gq<n?ft<n?dC<n?ag<n?eg<n?d8<n?dw<n?cu<n?cC<n?fk<n?d_<n?0:-1:0:-1:am<n?gl<n?0:-1:0:-1:fc<n?cB<n?gr<n?fF<n?0:-1:0:-1:fQ<n?b7<n?0:-1:0:-1:at<n?ep<n?gb<n?b8<n?ew<n?eN<n?0:-1:0:-1:f8<n?fL<n?0:-1:0:-1:eR<n?aq<n?ez<n?cq<n?0:-1:0:-1:e_<n?ah<n?0:-1:0:-1:fb<n?dW<n?d5<n?a9<n?fn<n?cG<n?fS<n?ar<n?0:-1:0:-1:f7<n?e3<n?0:-1:0:-1:eA<n?ax<n?aD<n?bz<n?0:-1:0:-1:cM<n?a2<n?0:-1:0:-1:bM<n?cU<n?aR<n?fZ<n?bC<n?f2<n?0:-1:0:-1:ac<n?bS<n?0:-1:0:-1:hh<n?b$<n?gz<n?a3<n?0:-1:0:-1:f3<n?h4<n?0:-1:0:-1:b2<n?aU<n?fl<n?eO<n?eC<n?ev<n?dY<n?dK<n?c_<n?cv<n?0:-1:0:-1:b6<n?cw<n?0:-1:0:-1:ap<n?fU<n?eW<n?al<n?0:-1:0:-1:bO<n?ec<n?0:-1:0:-1:a5<n?gu<n?aA<n?fI<n?bB<n?bI<n?0:-1:0:-1:bn<n?cV<n?0:-1:0:-1:a_<n?aj<n?cx<n?bR<n?0:-1:0:-1:fs<n?fh<n?0:-1:0:-1:av<n?dP<n?cg<n?aS<n?aF<n?dt<n?f9<n?gd<n?0:-1:0:-1:e7<n?b5<n?0:-1:0:-1:bq<n?e6<n?fo<n?d1<n?0:-1:0:-1:cE<n?cI<n?0:-1:0:-1:eB<n?ds<n?et<n?bE<n?dv<n?c4<n?0:-1:0:-1:bf<n?cD<n?0:-1:0:-1:ho<n?hP<n?ie<n?c5<n?0:-1:0:-1:gO<n?gF<n?0:-1:0:-1:hR<n?gW<n?hZ<n?hk<n?gm<n?bK<n?dg<n?dX<n?hz<n?gT<n?hV<n?gX<n?0:-1:0:-1:aI<n?hG<n?0:-1:0:-1:fj<n?eH<n?g_<n?g1<n?0:-1:0:-1:dq<n?_<n?0:-1:0:-1:hA<n?h6<n?e0<n?cz<n?fO<n?fT<n?0:-1:0:-1:gD<n?dA<n?0:-1:0:-1:en<n?gK<n?hL<n?af<n?0:-1:0:-1:hC<n?ic<n?0:-1:0:-1:bg<n?f$<n?hO<n?gM<n?f6<n?gN<n?hj<n?g4<n?0:-1:0:-1:h9<n?cN<n?0:-1:0:-1:dm<n?hJ<n?g$<n?hT<n?0:-1:0:-1:ae<n?bN<n?0:-1:0:-1:gJ<n?g5<n?b4<n?ek<n?cT<n?fp<n?0:-1:0:-1:hH<n?f1<n?0:-1:0:-1:cH<n?S<n?az<n?hK<n?0:-1:0:-1:bA<n?dr<n?0:-1:0:-1:ci<n?aN<n?fv<n?fx<n?cm<n?aX<n?dx<n?fw<n?g3<n?hx<n?0:-1:0:-1:bP<n?bT<n?0:-1:0:-1:gn<n?b1<n?bd<n?gc<n?0:-1:0:-1:fy<n?a7<n?0:-1:0:-1:hn<n?e1<n?gv<n?c0<n?gk<n?a0<n?0:-1:0:-1:gp<n?ej<n?0:-1:0:-1:fV<n?fD<n?Y<n?hb<n?0:-1:0:-1:dS<n?fq<n?0:-1:0:-1:ch<n?c9<n?bj<n?Z<n?cQ<n?e$<n?R<n?V<n?0:-1:0:-1:eL<n?e2<n?0:-1:0:-1:gY<n?ao<n?dc<n?d$<n?0:-1:0:-1:fA<n?h_<n?0:-1:0:-1:W<n?bx<n?ak<n?aK<n?a8<n?cS<n?0:-1:0:-1:bQ<n?c3<n?0:-1:0:-1:du<n?dL<n?cR<n?fz<n?0:-1:0:-1:dM<n?M<n?0:-1:0:-1:U<n?f0<n?id<n?ba<n?ab<n?fB<n?fa<n?hX<n?bG<n?cr<n?cY<n?bX<n?dT<n?aP<n?0:-1:0:-1:bk<n?ck<n?0:-1:0:-1:df<n?hi<n?gE<n?bZ<n?0:-1:0:-1:gP<n?dU<n?0:-1:0:-1:g2<n?hd<n?gL<n?e5<n?f5<n?fe<n?0:-1:0:-1:hF<n?hw<n?0:-1:0:-1:dG<n?hI<n?g6<n?gG<n?0:-1:0:-1:fJ<n?eP<n?0:-1:0:-1:fW<n?db<n?aL<n?gs<n?es<n?co<n?dB<n?d3<n?0:-1:0:-1:eK<n?cc<n?0:-1:0:-1:T<n?as<n?fm<n?dn<n?0:-1:0:-1:f_<n?fR<n?0:-1:0:-1:dD<n?bb<n?ea<n?ff<n?de<n?cj<n?0:-1:0:-1:d2<n?eZ<n?0:-1:0:-1:aH<n?d0<n?cF<n?fY<n?0:-1:0:-1:b9<n?dQ<n?0:-1:0:-1:hr<n?go<n?gU<n?gy<n?eX<n?ee<n?gS<n?hs<n?h1<n?hQ<n?0:-1:0:-1:ad<n?eU<n?0:-1:0:-1:dO<n?be<n?eF<n?eo<n?0:-1:0:-1:dh<n?by<n?0:-1:0:-1:hc<n?bL<n?fH<n?aT<n?gR<n?b0<n?0:-1:0:-1:cp<n?el<n?0:-1:0:-1:h0<n?cJ<n?d4<n?dZ<n?0:-1:0:-1:hY<n?ib<n?0:-1:0:-1:hU<n?ht<n?ig<n?a1<n?h7<n?ey<n?hq<n?a4<n?0:-1:0:-1:f4<n?h5<n?0:-1:0:-1:bV<n?hM<n?h2<n?e8<n?0:-1:0:-1:bl<n?dE<n?0:-1:0:-1:eD<n?bD<n?bH<n?hN<n?gQ<n?hm<n?0:-1:0:-1:he<n?bF<n?0:-1:0:-1:bs<n?cb<n?em<n?fr<n?0:-1:0:-1:gg<n?fi<n?0:-1:0:-1:ef<n?c2<n?ct<n?cl<n?c7<n?dI<n?g0<n?g8<n?dj<n?hE<n?hp<n?cW<n?0:-1:0:-1:hv<n?bi<n?0:-1:0:-1:dl<n?cL<n?eT<n?an<n?0:-1:0:-1:gA<n?bw<n?0:-1:0:-1:cA<n?dz<n?fd<n?bc<n?d6<n?bu<n?0:-1:0:-1:fX<n?fN<n?0:-1:0:-1:c$<n?c8<n?aY<n?cK<n?0:-1:0:-1:d7<n?aE<n?0:-1:0:-1:d9<n?gZ<n?bW<n?a6<n?bt<n?h3<n?e4<n?fC<n?0:-1:0:-1:eq<n?aC<n?0:-1:0:-1:aB<n?eV<n?hS<n?gx<n?0:-1:0:-1:gV<n?cs<n?0:-1:0:-1:br<n?cX<n?fu<n?ei<n?eQ<n?gt<n?0:-1:0:-1:fM<n?ed<n?0:-1:0:-1:ai<n?aO<n?bY<n?cP<n?0:-1:0:-1:ge<n?bv<n?0:-1:0:-1:aV<n?eI<n?dy<n?gi<n?bm<n?er<n?aJ<n?ga<n?dV<n?ha<n?0:-1:0:-1:b3<n?aM<n?0:-1:0:-1:b_<n?cO<n?eh<n?fG<n?0:-1:0:-1:cd<n?fg<n?0:-1:0:-1:cZ<n?aa<n?dJ<n?bU<n?bh<n?c1<n?0:-1:0:-1:ay<n?bp<n?0:-1:0:-1:dN<n?fK<n?ce<n?gh<n?0:-1:0:-1:da<n?gw<n?0:-1:0:-1:h$<n?hD<n?fP<n?gf<n?X<n?dk<n?gj<n?dd<n?0:-1:0:-1:ex<n?au<n?0:-1:0:-1:aw<n?eE<n?eS<n?dp<n?0:-1:0:-1:h8<n?aZ<n?0:-1:0:-1:eu<n?eY<n?eG<n?hl<n?g7<n?g9<n?0:-1:0:-1:aW<n?a$<n?0:-1:0:-1:hu<n?hg<n?hf<n?c6<n?0:-1:0:-1:gB<n?gC<n?0:-1:0:-1:G(Pj,n+J|0)-1|0:-1;if(3<oL>>>0)var
d=c(a);else
switch(oL){case
0:var
d=D(a);break;case
1:var
d=E(a);break;case
2:z(a,73);var
oN=rY(b(a));if(2<oN>>>0)var
d=c(a);else
switch(oN){case
0:var
d=D(a);break;case
1:var
d=E(a);break;default:z(a,50);var
oR=K(b(a)),d=0===oR?D(a):1===oR?E(a):c(a)}break;default:z(a,73);var
oW=jd(b(a));if(2<oW>>>0)var
d=c(a);else
switch(oW){case
0:var
d=D(a);break;case
1:var
d=E(a);break;default:z(a,73);var
oX=jd(b(a));if(2<oX>>>0)var
d=c(a);else
switch(oX){case
0:var
d=D(a);break;case
1:var
d=E(a);break;default:z(a,51);var
oY=K(b(a)),d=0===oY?D(a):1===oY?E(a):c(a)}}}break;case
42:z(a,73);var
o=b(a),oZ=35<o?ia<o?gH<o?hy<o?-1:dF<o?e9<o?aG<o?bJ<o?eJ<o?fE<o?cy<o?hW<o?0:-1:0:-1:eM<o?dH<o?0:-1:0:-1:cf<o?bo<o?di<o?aQ<o?0:-1:0:-1:$<o?dR<o?0:-1:0:-1:cn<o?eb<o?hB<o?gI<o?ca<o?gq<o?ft<o?dC<o?ag<o?eg<o?d8<o?dw<o?cu<o?cC<o?fk<o?d_<o?0:-1:0:-1:am<o?gl<o?0:-1:0:-1:fc<o?cB<o?gr<o?fF<o?0:-1:0:-1:fQ<o?b7<o?0:-1:0:-1:at<o?ep<o?gb<o?b8<o?ew<o?eN<o?0:-1:0:-1:f8<o?fL<o?0:-1:0:-1:eR<o?aq<o?ez<o?cq<o?0:-1:0:-1:e_<o?ah<o?0:-1:0:-1:fb<o?dW<o?d5<o?a9<o?fn<o?cG<o?fS<o?ar<o?0:-1:0:-1:f7<o?e3<o?0:-1:0:-1:eA<o?ax<o?aD<o?bz<o?0:-1:0:-1:cM<o?a2<o?0:-1:0:-1:bM<o?cU<o?aR<o?fZ<o?bC<o?f2<o?0:-1:0:-1:ac<o?bS<o?0:-1:0:-1:hh<o?b$<o?gz<o?a3<o?0:-1:0:-1:f3<o?h4<o?0:-1:0:-1:b2<o?aU<o?fl<o?eO<o?eC<o?ev<o?dY<o?dK<o?c_<o?cv<o?0:-1:0:-1:b6<o?cw<o?0:-1:0:-1:ap<o?fU<o?eW<o?al<o?0:-1:0:-1:bO<o?ec<o?0:-1:0:-1:a5<o?gu<o?aA<o?fI<o?bB<o?bI<o?0:-1:0:-1:bn<o?cV<o?0:-1:0:-1:a_<o?aj<o?cx<o?bR<o?0:-1:0:-1:fs<o?fh<o?0:-1:0:-1:av<o?dP<o?cg<o?aS<o?aF<o?dt<o?f9<o?gd<o?0:-1:0:-1:e7<o?b5<o?0:-1:0:-1:bq<o?e6<o?fo<o?d1<o?0:-1:0:-1:cE<o?cI<o?0:-1:0:-1:eB<o?ds<o?et<o?bE<o?dv<o?c4<o?0:-1:0:-1:bf<o?cD<o?0:-1:0:-1:ho<o?hP<o?ie<o?c5<o?0:-1:0:-1:gO<o?gF<o?0:-1:0:-1:hR<o?gW<o?hZ<o?hk<o?gm<o?bK<o?dg<o?dX<o?hz<o?gT<o?hV<o?gX<o?0:-1:0:-1:aI<o?hG<o?0:-1:0:-1:fj<o?eH<o?g_<o?g1<o?0:-1:0:-1:dq<o?_<o?0:-1:0:-1:hA<o?h6<o?e0<o?cz<o?fO<o?fT<o?0:-1:0:-1:gD<o?dA<o?0:-1:0:-1:en<o?gK<o?hL<o?af<o?0:-1:0:-1:hC<o?ic<o?0:-1:0:-1:bg<o?f$<o?hO<o?gM<o?f6<o?gN<o?hj<o?g4<o?0:-1:0:-1:h9<o?cN<o?0:-1:0:-1:dm<o?hJ<o?g$<o?hT<o?0:-1:0:-1:ae<o?bN<o?0:-1:0:-1:gJ<o?g5<o?b4<o?ek<o?cT<o?fp<o?0:-1:0:-1:hH<o?f1<o?0:-1:0:-1:cH<o?S<o?az<o?hK<o?0:-1:0:-1:bA<o?dr<o?0:-1:0:-1:ci<o?aN<o?fv<o?fx<o?cm<o?aX<o?dx<o?fw<o?g3<o?hx<o?0:-1:0:-1:bP<o?bT<o?0:-1:0:-1:gn<o?b1<o?bd<o?gc<o?0:-1:0:-1:fy<o?a7<o?0:-1:0:-1:hn<o?e1<o?gv<o?c0<o?gk<o?a0<o?0:-1:0:-1:gp<o?ej<o?0:-1:0:-1:fV<o?fD<o?Y<o?hb<o?0:-1:0:-1:dS<o?fq<o?0:-1:0:-1:ch<o?c9<o?bj<o?Z<o?cQ<o?e$<o?R<o?V<o?0:-1:0:-1:eL<o?e2<o?0:-1:0:-1:gY<o?ao<o?dc<o?d$<o?0:-1:0:-1:fA<o?h_<o?0:-1:0:-1:W<o?bx<o?ak<o?aK<o?a8<o?cS<o?0:-1:0:-1:bQ<o?c3<o?0:-1:0:-1:du<o?dL<o?cR<o?fz<o?0:-1:0:-1:dM<o?M<o?0:-1:0:-1:U<o?f0<o?id<o?ba<o?ab<o?fB<o?fa<o?hX<o?bG<o?cr<o?cY<o?bX<o?dT<o?aP<o?0:-1:0:-1:bk<o?ck<o?0:-1:0:-1:df<o?hi<o?gE<o?bZ<o?0:-1:0:-1:gP<o?dU<o?0:-1:0:-1:g2<o?hd<o?gL<o?e5<o?f5<o?fe<o?0:-1:0:-1:hF<o?hw<o?0:-1:0:-1:dG<o?hI<o?g6<o?gG<o?0:-1:0:-1:fJ<o?eP<o?0:-1:0:-1:fW<o?db<o?aL<o?gs<o?es<o?co<o?dB<o?d3<o?0:-1:0:-1:eK<o?cc<o?0:-1:0:-1:T<o?as<o?fm<o?dn<o?0:-1:0:-1:f_<o?fR<o?0:-1:0:-1:dD<o?bb<o?ea<o?ff<o?de<o?cj<o?0:-1:0:-1:d2<o?eZ<o?0:-1:0:-1:aH<o?d0<o?cF<o?fY<o?0:-1:0:-1:b9<o?dQ<o?0:-1:0:-1:hr<o?go<o?gU<o?gy<o?eX<o?ee<o?gS<o?hs<o?h1<o?hQ<o?0:-1:0:-1:ad<o?eU<o?0:-1:0:-1:dO<o?be<o?eF<o?eo<o?0:-1:0:-1:dh<o?by<o?0:-1:0:-1:hc<o?bL<o?fH<o?aT<o?gR<o?b0<o?0:-1:0:-1:cp<o?el<o?0:-1:0:-1:h0<o?cJ<o?d4<o?dZ<o?0:-1:0:-1:hY<o?ib<o?0:-1:0:-1:hU<o?ht<o?ig<o?a1<o?h7<o?ey<o?hq<o?a4<o?0:-1:0:-1:f4<o?h5<o?0:-1:0:-1:bV<o?hM<o?h2<o?e8<o?0:-1:0:-1:bl<o?dE<o?0:-1:0:-1:eD<o?bD<o?bH<o?hN<o?gQ<o?hm<o?0:-1:0:-1:he<o?bF<o?0:-1:0:-1:bs<o?cb<o?em<o?fr<o?0:-1:0:-1:gg<o?fi<o?0:-1:0:-1:ef<o?c2<o?ct<o?cl<o?c7<o?dI<o?g0<o?g8<o?dj<o?hE<o?hp<o?cW<o?0:-1:0:-1:hv<o?bi<o?0:-1:0:-1:dl<o?cL<o?eT<o?an<o?0:-1:0:-1:gA<o?bw<o?0:-1:0:-1:cA<o?dz<o?fd<o?bc<o?d6<o?bu<o?0:-1:0:-1:fX<o?fN<o?0:-1:0:-1:c$<o?c8<o?aY<o?cK<o?0:-1:0:-1:d7<o?aE<o?0:-1:0:-1:d9<o?gZ<o?bW<o?a6<o?bt<o?h3<o?e4<o?fC<o?0:-1:0:-1:eq<o?aC<o?0:-1:0:-1:aB<o?eV<o?hS<o?gx<o?0:-1:0:-1:gV<o?cs<o?0:-1:0:-1:br<o?cX<o?fu<o?ei<o?eQ<o?gt<o?0:-1:0:-1:fM<o?ed<o?0:-1:0:-1:ai<o?aO<o?bY<o?cP<o?0:-1:0:-1:ge<o?bv<o?0:-1:0:-1:aV<o?eI<o?dy<o?gi<o?bm<o?er<o?aJ<o?ga<o?dV<o?ha<o?0:-1:0:-1:b3<o?aM<o?0:-1:0:-1:b_<o?cO<o?eh<o?fG<o?0:-1:0:-1:cd<o?fg<o?0:-1:0:-1:cZ<o?aa<o?dJ<o?bU<o?bh<o?c1<o?0:-1:0:-1:ay<o?bp<o?0:-1:0:-1:dN<o?fK<o?ce<o?gh<o?0:-1:0:-1:da<o?gw<o?0:-1:0:-1:h$<o?hD<o?fP<o?gf<o?X<o?dk<o?gj<o?dd<o?0:-1:0:-1:ex<o?au<o?0:-1:0:-1:aw<o?eE<o?eS<o?dp<o?0:-1:0:-1:h8<o?aZ<o?0:-1:0:-1:eu<o?eY<o?eG<o?hl<o?g7<o?g9<o?0:-1:0:-1:aW<o?a$<o?0:-1:0:-1:hu<o?hg<o?hf<o?c6<o?0:-1:0:-1:gB<o?gC<o?0:-1:0:-1:G(Pm,o+J|0)-1|0:-1;if(3<oZ>>>0)var
d=c(a);else
switch(oZ){case
0:var
d=D(a);break;case
1:var
d=E(a);break;case
2:z(a,52);var
o0=K(b(a)),d=0===o0?D(a):1===o0?E(a):c(a);break;default:z(a,73);var
o1=iY(b(a));if(2<o1>>>0)var
d=c(a);else
switch(o1){case
0:var
d=D(a);break;case
1:var
d=E(a);break;default:z(a,73);var
d=c(a);else
switch(o2){case
0:var
d=D(a);break;case
1:var
d=E(a);break;default:z(a,73);var
o3=ks(b(a));if(2<o3>>>0)var
d=c(a);else
switch(o3){case
0:var
d=D(a);break;case
1:var
d=E(a);break;default:z(a,73);var
o4=ik(b(a));if(2<o4>>>0)var
d=c(a);else
switch(o4){case
0:var
d=D(a);break;case
1:var
d=E(a);break;default:z(a,53);var
o5=K(b(a)),d=0===o5?D(a):1===o5?E(a):c(a)}}}}}break;case
43:z(a,73);var
d=c(a);else
switch(o6){case
0:var
d=D(a);break;case
1:var
d=E(a);break;case
2:z(a,73);var
o7=jq(b(a));if(2<o7>>>0)var
d=c(a);else
switch(o7){case
0:var
d=D(a);break;case
1:var
d=E(a);break;default:z(a,73);var
o8=ru(b(a));if(2<o8>>>0)var
d=c(a);else
switch(o8){case
0:var
d=D(a);break;case
1:var
d=E(a);break;default:z(a,73);var
o9=iY(b(a));if(2<o9>>>0)var
d=c(a);else
switch(o9){case
0:var
d=D(a);break;case
1:var
d=E(a);break;default:z(a,73);var
o_=mF(b(a));if(2<o_>>>0)var
d=c(a);else
switch(o_){case
0:var
d=D(a);break;case
1:var
d=E(a);break;default:z(a,73);var
o$=ik(b(a));if(2<o$>>>0)var
d=c(a);else
switch(o$){case
0:var
d=D(a);break;case
1:var
d=E(a);break;default:z(a,54);var
pa=K(b(a)),d=0===pa?D(a):1===pa?E(a):c(a)}}}}}break;case
3:z(a,73);var
d=c(a);else
switch(pb){case
0:var
d=D(a);break;case
1:var
d=E(a);break;case
2:z(a,73);var
d=c(a);else
switch(pc){case
0:var
d=D(a);break;case
1:var
d=E(a);break;default:z(a,73);var
pd=iY(b(a));if(2<pd>>>0)var
d=c(a);else
switch(pd){case
0:var
d=D(a);break;case
1:var
d=E(a);break;default:z(a,73);var
pe=ix(b(a));if(2<pe>>>0)var
d=c(a);else
switch(pe){case
0:var
d=D(a);break;case
1:var