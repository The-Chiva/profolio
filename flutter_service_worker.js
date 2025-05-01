'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "a8297d555dd34879e8e48e1cf12acefa",
".git/config": "8d7d668a84fe2758879c18cb5608261e",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "64db4e69add507b6b6dbd017369aa7b2",
".git/HEAD": "2c609487d6e591c65b46999c628cb009",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "d002151ed1e01aa8646b27a0e1ea0bbe",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "60d8f1bbd893d07f9a931cd12503397a",
".git/logs/refs/heads/profolio": "adebc474f378b1e74463ade6a94d2bb5",
".git/logs/refs/remotes/origin/profolio": "960962f9a66a7590ccb88d46a39890b2",
".git/objects/01/383beb7c74d073ec7859b364960ac1ed84e43f": "91e198a4796f2ecc0635330c06b5ccc0",
".git/objects/03/2fe904174b32b7135766696dd37e9a95c1b4fd": "80ba3eb567ab1b2327a13096a62dd17e",
".git/objects/03/b6a92eadb01ccc69a839964295b9d7ee3f81d5": "920aaa49e48c46d1cd008d864f7545cb",
".git/objects/03/e300719f588b9a83cbae43fa135768ef7d7250": "914a8830d23e54995778c3b25298360a",
".git/objects/06/7315e76377dfd4025df0266cee1b09cd483146": "8f46522f6072aa7f9c78f5f07e433057",
".git/objects/09/97810f9b2e13085f186fe2d5e709f2ecf6c3c6": "f35f025b5ecbe67a68d5f635e203fa21",
".git/objects/0a/083c877c482df8b9729f9c7a66b408630d94f1": "7f599ce381feeb8136a979ad0ed51e00",
".git/objects/0a/2305548baa5a069ade7a4fea57ae3d1d5ca51d": "304579acca57ea5e4016e154fe400a4b",
".git/objects/0a/5d5fe830bc2604bf1d8f31ec1a52a5839517f2": "2d98040ff5f2368255d87dd25a859f68",
".git/objects/0b/aecf05c6ac0decf45efdf92c2e51c7d8c557f5": "131654f087cf6cb9787edd549dd1c656",
".git/objects/0f/0b1e3d5f23450873a506d26f05c265322cd841": "c6a4da38828f549e1b9947b77c5b7ba1",
".git/objects/0f/1979596b903653e065b971270459ab2c5d73b0": "5e021e0b3c2ea40b428d65df6aa85ddf",
".git/objects/18/81c19a24ac95af91abded02e8e470b81415cb9": "c7ac117357e623c7abd81bede2138291",
".git/objects/19/d416dc3671fd7e97499d9ad38a3c403b50c703": "321292d06bab4264e94334b0037da2e1",
".git/objects/1e/c5cbd4c65252af16f18d39b00dfecb1d4114fd": "ca46a5e561f74d0e4696dc58faf4a384",
".git/objects/2a/75ce29c367132ecc047f66281a0c02c9ca789a": "9277df5c1e1aa6cca633ece3f0a016fa",
".git/objects/2c/0a5f81e6524f7f0874d0dd83cd62af86040eb8": "4335bfe01b608b4b7f8b5608495911f6",
".git/objects/2c/b525bcabae06fa00e1b613f94c5e76451234de": "4f6167a4c89fd924fa909880ac9dd589",
".git/objects/2e/467e18aad993965bdcb181444351e4025ecdbb": "e50ecb270f8421cf3b88bd01df8b37ff",
".git/objects/33/31d9290f04df89cea3fb794306a371fcca1cd9": "e54527b2478950463abbc6b22442144e",
".git/objects/33/34ff0e98f3263232848d559e619e0b7b8cf113": "c009c487a9f7b0ea652d929bf92bb824",
".git/objects/33/5423de0a378cb790a60ab3638d8233b7c60041": "406c5fe4afed6f6c810552d8969a22da",
".git/objects/33/eecf30b01a1fbf2d1c6c400df83e62ecc6b29c": "2de37dcfb11a9cd976b93c77585d2667",
".git/objects/35/96d08a5b8c249a9ff1eb36682aee2a23e61bac": "e931dda039902c600d4ba7d954ff090f",
".git/objects/38/0522aaac071f82be475a18e5f77ab11ed69c04": "21ca170079db2758a661b05f4df5305f",
".git/objects/40/1184f2840fcfb39ffde5f2f82fe5957c37d6fa": "1ea653b99fd29cd15fcc068857a1dbb2",
".git/objects/45/16d3ed2a9f38b4ea7ea9b42005321e6f85f595": "5c72323f030dbd360e559bc555ea7a3f",
".git/objects/48/6fef272dbe85398cce44454a89f8d0471aff46": "78b4e310d9ade60f9624a26563855577",
".git/objects/4a/0d8649b3d7a33178c7cb5b77322b624678303c": "ec4cad7dd63d9742dc8334669e138d43",
".git/objects/4e/62b9f8abaea2917435a995d6e2668bcaf056f5": "b99cfa1dbbf0240a2da9064d6294776a",
".git/objects/4f/02e9875cb698379e68a23ba5d25625e0e2e4bc": "254bc336602c9480c293f5f1c64bb4c7",
".git/objects/51/bba425c02ad9795298b2f015373719b8c4e8b1": "68098f7246f9778b1f56bc463d53f6e4",
".git/objects/55/6a1b2f6b06ee7dae3e98782c46ba064187f98a": "9b3ea5590eca656430035477d570e6db",
".git/objects/57/0c4d55d445335f309d1d1cb5b9511aaeba90c1": "8fdfec7d77ab31e8bc1276999840d6ed",
".git/objects/57/7946daf6467a3f0a883583abfb8f1e57c86b54": "846aff8094feabe0db132052fd10f62a",
".git/objects/59/62efb2dffef4c259bda261b128fcab4b659c34": "11e1a7683fedc73b6a0da57ee3c6a112",
".git/objects/5a/13bd5a18e506d22647433b1980295ce67bcebe": "50b077c2b68b737800ac0d99a322b746",
".git/objects/5c/0f45cf38c5796581376b6be03b5fe9409d1903": "0be60df2d2a28ca7597cb7dad65ee970",
".git/objects/5e/2d26c4a2642408a70ee586dcf43bd9d689f5c4": "4093731c279fb14a646c5ab83bb0446d",
".git/objects/5f/2ae9dc70f24dce6292a7598cd3136b35c89547": "f0848b2d109ffedb329e21cac1d6503c",
".git/objects/5f/bf1f5ee49ba64ffa8e24e19c0231e22add1631": "f19d414bb2afb15ab9eb762fd11311d6",
".git/objects/5f/c62538ea331db5fc5de170bae01a06671417c4": "d457e9f47ebfd9a53f8508ba2380d1d2",
".git/objects/62/6a303ac742020e423382b72360e8d88626298a": "b8be089027afaa3240fd3ce19952e12c",
".git/objects/64/1ac50b8054cb299a7b08ac183239b626214851": "27b4157a1fc5b1ec2186d3b5ecdf753a",
".git/objects/64/5116c20530a7bd227658a3c51e004a3f0aefab": "f10b5403684ce7848d8165b3d1d5bbbe",
".git/objects/65/f550e7d7e34f5d9df7b268838256187e2fe6d9": "83d1925e062528fd70d5727da7021214",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/6b/b40422170586fe84460c9dbd8a7e1bb2fbcdbd": "6fb3ddc8813c2a3b8d5d27fd7b79aa25",
".git/objects/71/40732c5aebcaa29fe5afe1ebdce3cd4561a060": "6229e3107d938fa574a5c31b2bd7f2e1",
".git/objects/72/32fb767f9c2cfdd759e3a1a187fd445d4c1404": "1a4edce5c5736b11880c207b3a81d543",
".git/objects/7e/be1fb77aaab4867c7bae134f4c2e7d5bb9f1d4": "af07dd101fc03ce0d43ad0e9303b7fba",
".git/objects/7f/1ea9321995ee11b827e18572bac90dd51944ee": "ae4b59071f1e6247a069aebc33064f76",
".git/objects/81/0c7ef1f756a62a447ec2ffb5a6f3c34b422612": "f0805e1fee26e2ed3c0ec48ab10f0241",
".git/objects/84/a9c8140e635e8a500c9b0e83233002e9346813": "62ad835a9f49dc4e46d7161c96d72434",
".git/objects/87/8dbfdb459165bd6deb483307d54a4a90ab417c": "3ea183080333f3d84895084dd9d32517",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/51a9b155d31c44b148d7e287fc2872e0cafd42": "9f785032380d7569e69b3d17172f64e8",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8d/d5dabbe71f97ce8b8982966fd67285a8fbfea6": "885cfce60e4795238c4e66464dfdd1b1",
".git/objects/90/aa14b99bfea6c1dfcf62f3d75128c43d462a3b": "d0b99b2ef4f6dfcd1b43fcecd2db327e",
".git/objects/91/4a40ccb508c126fa995820d01ea15c69bb95f7": "8963a99a625c47f6cd41ba314ebd2488",
".git/objects/91/5a8747b3de8bb8ae060c1e3a1e7dda84da48ea": "3455904339f635d158ce44a0c3b5f4d6",
".git/objects/92/516c14904631ce5c32a105c134dee5c56acca3": "28dee2171697542c4593d31833173322",
".git/objects/92/70ce0aaf9a0056d412528d751db2277278dd46": "8e09160ef1f93ca4349c795036091e2d",
".git/objects/93/2fde48f37b383e133b3c79c12cb615e96eb027": "b097d7ad2f7d770c06c228f670400c81",
".git/objects/99/6978591c0001a2ab99b2bf1db3d5c75500e9ad": "ebf26ebcd2a370d4548a8334650a155f",
".git/objects/9a/66ca851195f92583c54b41cca9d51a4cee525a": "74bbb4c7fbf022c8775b422a8740dddf",
".git/objects/9b/3e93007a2ba60462b694e4e70233b49f2e1f49": "1b6b41165a66658ddc60ffc895971e8b",
".git/objects/9d/e78dafe965252c172f42720dafb1158f703c7e": "bf7ad18bffaa9e401fd46411bd298660",
".git/objects/9d/eda8766fc3e55b979e256bbf74ba32a204e0b6": "b07d305454f7193e3504a1d0b45f6a88",
".git/objects/9f/449ddbbbfd63db69e5077907b9424d0bed40b8": "88df1e17cfcfcf46ba1b79a374d2f451",
".git/objects/9f/b52446f8f9cc467171ea00b148a7ee5b373ebf": "7f254373ed8dad7ed408ecd908d800b9",
".git/objects/a5/de584f4d25ef8aace1c5a0c190c3b31639895b": "9fbbb0db1824af504c56e5d959e1cdff",
".git/objects/a6/e1963958e7fd98f63e39e6ad7b8bb41f399f74": "5590bd7abfd2b9f3add9937a763389ec",
".git/objects/a8/8c9340e408fca6e68e2d6cd8363dccc2bd8642": "11e9d76ebfeb0c92c8dff256819c0796",
".git/objects/a9/c874634380ab475bed9fb70a9dd08db52d43fe": "4a2489284510582e8592daba1297884a",
".git/objects/aa/eae9835ebbd72287b750afaf1ab61294b585c5": "ae9c5b77b8922b473d7ecb88c3b88a30",
".git/objects/b3/c77026d482043bfc8e601fce86e8cd698c1c35": "2743aa821f7f61fac144527fc508e499",
".git/objects/b5/f8b9a64fb6c2c55bd687d5f7b750e3b3350634": "2fcf1a728abea35edbca1dca4db38c36",
".git/objects/b6/7f8f6e44bdce01db45b9927370bb21a53c963d": "ba085bc933728676af630da30a2061de",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/7106f61cecd460ad1cda99daa77120c1d566fa": "c003d184071f42530b62088417f25ad1",
".git/objects/bb/5db311017b33d25136ca1baeee8cabe3f7a0d3": "97aaa3f5bd002c385f88a98e61eb7152",
".git/objects/bc/41b7ac1a48ae9baf761360e31c2f404a501291": "02d3d4edd92cdacc13fec28be3b50215",
".git/objects/bd/1c8e06a82d5bd0b94914ae5540dc7c3b53d998": "d4e4c64ed8344a4dab90922b4b7c5514",
".git/objects/c3/d5bc15947e6c85b9d5ff72cd1a9ce67bc8be1d": "de747ea1fdf3a3c6359b57940446e350",
".git/objects/c9/a6c54bb47d2d4e32dc0694a4ed8defde40d8ba": "b17533b8ef7ab5d4dd498a3bbf106910",
".git/objects/cb/22baeaa263fb3519ef60cf715b987dd98563f7": "7ea539638f9302517ca9f1e11c061398",
".git/objects/cc/916506b4ca6b4c1c2e3e32d0be93e2374f4eb5": "ed3f4952db9e5bef38b5ed50b0208b7a",
".git/objects/d1/2e524953dd5a0577359a451fef9b6c9c56d675": "89dfc657137f695cbeecc03a2ff5fe25",
".git/objects/d1/33f3fbf36a80e27c7780d9f9bd0dad832f66d8": "ae05099b80ae9f4e88944957768901c9",
".git/objects/d1/56010ea64ba03a97601b0955243f3ac1028151": "1f3f9b5743f3a8c905b9f61ebb716e24",
".git/objects/d2/8813395ff031004589003ed99325aaea12ac70": "bef4199b96bcced068d09e19c8faec37",
".git/objects/d3/a0d0049dcadd5d7115187cb6f8f6871d50e0e3": "62c3c79622a44c9682bdd1b504c8bfbf",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d6/a421c8a5387655d198335936a5e3b7cca8ffba": "7462820b4c7b2799eab2d70ea3dd0aab",
".git/objects/d8/6073f7a3051c6b22ba11edd87f6d0ff664bda2": "fc8210f6cac7d41c5b65193ec78fac6b",
".git/objects/d9/3952e90f26e65356f31c60fc394efb26313167": "1401847c6f090e48e83740a00be1c303",
".git/objects/dd/24b61c10685747b7c0b4a71812b2751cd973da": "c59ed830a6e26dbc4ef41cf9d7af4768",
".git/objects/dd/4b446a4944d15f2a22b055cf3df9a08089d8ac": "cad6b538a560989464b4d79b1c81ff80",
".git/objects/dd/599ede9e0e7c1188f8b8b65e1e65fc9370d09a": "e9208a5100e4050b10bab898556fcb00",
".git/objects/df/ee325e47642d61e4f3469e8ef0b97dd5f7073b": "b6bea4644e377d91344569072ff5b67e",
".git/objects/e1/c322878b789a1b9a2f5167de07f5c479fcd79b": "d1d03a41244e13dbacfba6b38fa581a2",
".git/objects/e2/4a45e3969e7b788bee14c5cdaa790eec9f70ef": "d4ff0bc0d6ead4e16ebbc0a48dc85f8e",
".git/objects/e3/281689616173893bf35c10df90af7856661b06": "e25c8e5db9ff6eeaf303ec93903f428b",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/ea/b8b56cae9d0bff369876c0105002cf402ea80e": "5714b14909939dd9f56fb67a9ada65fa",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ef/4b24f677695c96e1cc9603c01a710d8ef1f775": "2252a21e2a2a3e8f585386f24ca0c036",
".git/objects/ef/b875788e4094f6091d9caa43e35c77640aaf21": "27e32738aea45acd66b98d36fc9fc9e0",
".git/objects/f0/3c8bc0bff9bbafd3ca66b1957ebc8486bf9722": "f2f9edbd7a4eea990e03396a892f6ec8",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f2/566c066c7359882af75596ea4c6a3628250f33": "1247f71559786de7ea390c8d75d1a9f4",
".git/objects/f3/709a83aedf1f03d6e04459831b12355a9b9ef1": "538d2edfa707ca92ed0b867d6c3903d1",
".git/objects/f3/bcb3193dc1a69c0195dfeb6597f19264e68341": "2c4dd286ef3911239b8554d25116765a",
".git/objects/f5/5ceb722b9fe7b9ee66537880610bd3358a94cc": "2324a80ce9f9a3d56be886a74dc4f9ec",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/f7/689897531eb1a18ed3d98eef0f68c82a422482": "58225462fb829b50e049627c74ea516b",
".git/objects/f9/729c3115464558c96e03d6f216a2b5f9c0ebff": "8852a7ecf876edafcefd6f37f8f1327f",
".git/objects/fc/1802e23d62f35e889cbe232fd01f7513461a96": "8d1af72664488b7ea07ef60277fd5293",
".git/objects/fc/5cca1088fcd9ce7e2de52c0f03af1238ef2b44": "c59bd8c4d7f33f421d3289c38ceb8ee7",
".git/objects/fe/3914bcf3baf9d87a873a444cac8aaf9dcd54c1": "372add7dd6cdabc32b9333e8d66bff72",
".git/ORIG_HEAD": "a8c247ef4c99db8a83ef787ca79a9de8",
".git/refs/heads/profolio": "c3d4946e20269ada29ec0c594ff21339",
".git/refs/remotes/origin/profolio": "c3d4946e20269ada29ec0c594ff21339",
"assets/AssetManifest.bin": "b4f62563ec47cfc572804993930e23ce",
"assets/AssetManifest.bin.json": "09e246a256aaab01af2c3face684def9",
"assets/AssetManifest.json": "aec5958d3d11d6195e6fc9ce27e5b2d3",
"assets/assets/android_icon.png": "038ea15b40a395099451862327ebcfc1",
"assets/assets/chiva.png": "1490da5f8be217e2ced047627bf804e5",
"assets/assets/css3.png": "b1bd0673d70ccee89e1457bd71554759",
"assets/assets/dart.png": "1a089616e2be1ac7c5188c00225772c8",
"assets/assets/desktop_icon.png": "e0e90a080a776fd1da23f5a249b5ce3c",
"assets/assets/docker.png": "722cafb6c71b44bba6292a603b2e198c",
"assets/assets/facebook.png": "fa74fe1619d75d68df1f0db7c654e39a",
"assets/assets/flutter.png": "abe34b0551ded954f6759cada7807e3e",
"assets/assets/github.png": "7aed3646cbea181a3da85620809e992c",
"assets/assets/html5.png": "9d5b22bfe74ac513d5cd33563908ae71",
"assets/assets/hugo.png": "6c341d7823570ab705c940f1dea993ef",
"assets/assets/icons/emiail.svg": "5ea3ad3212c779d66e53e862872691db",
"assets/assets/icons/facebook.png": "f721c7054498bc548219344ad509666d",
"assets/assets/icons/facebook.svg": "81bf79e7b83ffd4ee3a50b0274db61ca",
"assets/assets/icons/instragram.png": "2a08aa6c62b4e6b679377575d898e011",
"assets/assets/icons/instragram.svg": "c6ec7ea81d5b081282a8bb8b912c166b",
"assets/assets/icons/linkin.png": "0d724ab4cf060722a7a38a90f16bbb9f",
"assets/assets/icons/linkin.svg": "2413cad0d92cf85be124b46ede9477de",
"assets/assets/instagram.png": "02c7721e097a6bb001d00fa61750bc81",
"assets/assets/ios_icon.png": "4b8039e8a442657c7b9b379322eb2793",
"assets/assets/javascript.png": "ab8e2beca091db2345ff66a5cc432985",
"assets/assets/linkedin.png": "e4d142586676a80b3927d899d3584148",
"assets/assets/my_flutter_avatar.png": "a6fc0bb5fb8f7c50d06b283332eaa57c",
"assets/assets/projects/02.png": "cf8468132005ef5442c5857705e39c40",
"assets/assets/projects/03.png": "9dd85f5710c01486dc5937733a22d9eb",
"assets/assets/projects/04.png": "8e2a233d5e7b9930407e3cccf54b6799",
"assets/assets/projects/05.png": "e2cc840dbaaf91e6acba1d9d44ae502f",
"assets/assets/projects/06.png": "11a36375edc4b5ba6956bdeed286f733",
"assets/assets/projects/1.png": "1f59be4af5fe374b4e3f5f6afdb3a24c",
"assets/assets/projects/w01.png": "b1256ae160f9170ab36ce78ee7a4dc2d",
"assets/assets/projects/w02.png": "f3168876c62cbf02cb9ff94640383f96",
"assets/assets/projects/w03.jpeg": "81f24b685fd3f214e409fd29217c1235",
"assets/assets/python.png": "e04382338533c6bb0dcfc7a48bf86502",
"assets/assets/telegram.png": "d940cd7b5e7b66510b59785177c6414f",
"assets/assets/web_icon.png": "8867144689b70d099377ee3c4ab1baa0",
"assets/file/THE%2520CHIVA.pdf": "0a750cced1dec2fd9467176f36a9d039",
"assets/file/THE_CHIVA.pdf": "0a750cced1dec2fd9467176f36a9d039",
"assets/FontManifest.json": "d8392c03026ca6f703afef0d406e8fc9",
"assets/fonts/MaterialIcons-Regular.otf": "aa0e2be2fa1d45209ec525a9ebfc8f57",
"assets/NOTICES": "add1eaa479b0c786a7558e425bedf376",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/hugeicons/lib/fonts/hugeicons-stroke-rounded.ttf": "7046f3bbcb22e13bf7409e78329fda1f",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "86e461cf471c1640fd2b461ece4589df",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/chromium/canvaskit.js": "34beda9f39eb7d992d46125ca868dc61",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"flutter_bootstrap.js": "ebaf4fd465a2d75058257cbdfd2832e9",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "89adad6d132a7129871ac212cbee2f50",
"/": "89adad6d132a7129871ac212cbee2f50",
"main.dart.js": "d489212ad8152e9777b4aa6629868bbb",
"manifest.json": "e74af8957b5899dc6da961caee768ec9",
"version.json": "009c9e65172e010890f7f65fde438006"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
