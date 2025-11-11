'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "dfd16a359e91c86c915b147738cce46a",
".git/config": "1b6996380176f79be82b8a9a256d4de7",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "0b69bcdbb232d169307888021ca95f4a",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "b6518423292b9fcc23bb5d8ccd311f87",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "bf1f9e79e68bde0d715cfcdd6619f16b",
".git/logs/refs/heads/main": "792fcf3871e5390cc88de488f13fc1cb",
".git/logs/refs/remotes/origin/main": "e004a4ea742e82441e8c8b3b0a663032",
".git/objects/02/1d4f3579879a4ac147edbbd8ac2d91e2bc7323": "9e9721befbee4797263ad5370cd904ff",
".git/objects/0f/96bb3ca5dfa339bd54112036a75d954d19613a": "097610a4d0f873e05e34ad5a9b07f53a",
".git/objects/10/5e42906140b2fa1d96f6f545f94f4320a9b65f": "d14a1c300d7fe4055e9cfe75d84fadad",
".git/objects/10/f5e24fe9e7a84d329afd9697380538e305a740": "6051752b69305c38ef12d2d9302c86d1",
".git/objects/20/3a3ff5cc524ede7e585dff54454bd63a1b0f36": "4b23a88a964550066839c18c1b5c461e",
".git/objects/29/5073b9caf60709d63e092fae680ff00a89d885": "91ebe1712768217bf588458c787ac9cd",
".git/objects/29/f22f56f0c9903bf90b2a78ef505b36d89a9725": "e85914d97d264694217ae7558d414e81",
".git/objects/2f/65db85654e5d9cc833330cb953fbe3afa2c0ec": "adea10ce0603176b2ecbf9323142da01",
".git/objects/33/c9743d639e7826b63ae1c3c2f5bb1e2622e6b6": "dae35eeb8b04e31071f2ae05b7844d86",
".git/objects/3d/ed6550e3df24813dc60e97f5cfbb561810fc57": "a17d1635d13dad4070bc62ac7bbb5532",
".git/objects/3e/cdb58dabd09e99b3dcbc97c79b09ed0f00cd72": "582d9fa21a6692d7e47a786dc1cde0ae",
".git/objects/3e/d0ddd7136a48520910e7e4bf665362facd60d4": "c8322669a78b5f07c75b1decdc05718d",
".git/objects/41/e09ee3ce517cf011662b7d4aa6318a9357c214": "a4e90720578e840e669fe2ac959e34d3",
".git/objects/44/03407b57ebeb01dc338b2a1c3689f6a43a9aa8": "645a589c1e61c990be7b4adcce82e5b0",
".git/objects/46/cefeb0b7bec2379532b720f39e669717951aa1": "99373ea1f8bc1daa50fe30d5c43c3206",
".git/objects/46/e7fa34e13fddb2db973c5b8a3d74c722d194a9": "f731e14338a59b789aff26d188f388f7",
".git/objects/48/f54c4d9c6c9a1436dadcab392ce3962bb882a8": "cf91df9c4e9779c9f0aade6679cd92f7",
".git/objects/4b/42cdb30bf8fc0ee298f115f23b02eba07e18c4": "c7c92debde209d60ebb552c111132199",
".git/objects/4d/b4044d37ca1d34ddc4aaaf478a6e8c1d5496df": "86faf9bd9727d78bd401dbc4dceea8dd",
".git/objects/4d/bf9da7bcce5387354fe394985b98ebae39df43": "534c022f4a0845274cbd61ff6c9c9c33",
".git/objects/4f/fbe6ec4693664cb4ff395edf3d949bd4607391": "2beb9ca6c799e0ff64e0ad79f9e55e69",
".git/objects/50/7fd2d5c03cba90372a38c56a5ed12f7ddc154f": "3336291f29a7455f017bbb095896e227",
".git/objects/5b/99f3463fb051ee2901eec4770213424e5ad5c9": "466ed4ab926964304ed4c89ef80a41a3",
".git/objects/61/c603cd9ca59e42cfcfb9b99d4f4a1eea0204ff": "3f1e376401f8fb8d46d94c6aeeca6f30",
".git/objects/65/27832fc5d46c2712c260b394553e29175f8284": "0bac439601c30ba1e9272f81847f8f9a",
".git/objects/65/bf0f181baf462daab28286080c5d88520b3a17": "14cf9e9cfed684c68e14cfe358eaf9b8",
".git/objects/6b/4c92d5889854e6f624330db462b41b81e03407": "aa8dddc4f42db6e2d935c61b1bb70d25",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/75/5d20f6421897ed4fb41b3519cffbdaff04028e": "219af1bb6a7f502dac55537a257ae784",
".git/objects/7a/6c1911dddaea52e2dbffc15e45e428ec9a9915": "f1dee6885dc6f71f357a8e825bda0286",
".git/objects/7c/62084aefd267fd5cc6b63cc318d179bdcca8b5": "56f876223c6ab9eab97ab8532a33b674",
".git/objects/7c/6da3c0d64e5dec07cee4b9419ea158b9f3e1c4": "3c73d44a18825061bfb4b1cc77591c0e",
".git/objects/83/4e079575334b242b6c82aca6484d4688fcf17e": "2df85dd617f7bcd69ac8641281eb014d",
".git/objects/86/898004137072a8dd7066ccdb099aacf0123fc3": "c9ab9f9541c4dd3fc8dbf242be8b4e7f",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/5db415e8f3db8f26c308ae820e8df21e2d8b69": "3d25b2ee1fe546dc12ffcb5d80e41c3c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8a/ae70ad3c2762edfdcecd2d97fe94af713d10ed": "0e48a1e3d46e3d9463823f83be532f6e",
".git/objects/8b/0f9b84b2456afc88319af1141acfa6bef90a47": "07723979f90f1fdd7de4f15fceaf243b",
".git/objects/8e/291d9e9cdd0fa9ca4d31c04ab03491edc83e18": "8a388d887ce372df85a2a0f8754d9a2c",
".git/objects/94/89af04e2c8a306c2d572e041f580bd97aff69d": "e8918f25e78c402f2dbcba9f3826f7a0",
".git/objects/95/cb60c316d324430559ba0277fa3de248f20419": "2dec0b9ec2d197b9ab5ed72dcf447818",
".git/objects/97/551ef316b5d9ac04027913d258aba2b66ce62f": "1ba9975202d3c2fbbdf2f2ff926b0c7a",
".git/objects/98/0d49437042d93ffa850a60d02cef584a35a85c": "8e18e4c1b6c83800103ff097cc222444",
".git/objects/9b/3ef5f169177a64f91eafe11e52b58c60db3df2": "91d370e4f73d42e0a622f3e44af9e7b1",
".git/objects/9e/3b4630b3b8461ff43c272714e00bb47942263e": "accf36d08c0545fa02199021e5902d52",
".git/objects/9f/71fb53874148aef47122f5c9d4f959af4d896a": "da22af598d357a87da18b93ad48d23c7",
".git/objects/9f/cd3cb744ffb9ae99b6ec55c53055bcf33bf38d": "0ecb1c6172f1f88b2af868f726869173",
".git/objects/a2/8c646662704023eddd387db8fc54826e4dbbf8": "eb94d7d1266538fd0d7cb1fbc5e16e8a",
".git/objects/a4/1bdf3a7d4d9279e9d98f7da7165820230414ec": "c97711dcaa872d439ce912ea2adbefec",
".git/objects/a4/99cd65a03b7428e5e978f200d68333e820216d": "ba769ae8984502347fcd348f302cb095",
".git/objects/a5/f4dcd0125b17ddff37c11ca53185d1bdacbaed": "2e88d90782ed692ddd9cb8717ee62fb6",
".git/objects/ac/359c078dbd624c1ab6e8aed333f540341ae3dd": "c19ce80e40291e82712688e8f32d3892",
".git/objects/b6/b8806f5f9d33389d53c2868e6ea1aca7445229": "b14016efdbcda10804235f3a45562bbf",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/bb/ee082fc9fcc7ac2c7c37bc0c0fb459704c275a": "275c07f15faf75d690e39a965d2e67ae",
".git/objects/c4/016f7d68c0d70816a0c784867168ffa8f419e1": "fdf8b8a8484741e7a3a558ed9d22f21d",
".git/objects/c4/cad7935c68081c3befd683df4f9f43d5fbdba5": "4d37a64bae7d7906bee6c368904d2023",
".git/objects/c5/bae857a1a12fa80d1e32cacec8690b5585eeaf": "fe7be403f79afccd98a4b71263129984",
".git/objects/c6/d1146361d6ca37fba1a50c20c6792458c74422": "13e81899cfed0d12f13557e17b528642",
".git/objects/ca/3bba02c77c467ef18cffe2d4c857e003ad6d5d": "316e3d817e75cf7b1fd9b0226c088a43",
".git/objects/cb/6b7a6137f8e01d986294349a6bc2fadc6d1849": "9df7d09456db8013ef6b3c4b23309f7a",
".git/objects/ce/a8834aadc822cd7abef98902e58489e0e5dd7e": "2528315a58f3f4115fe7a2f95cdcc4ae",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/7cfefdbe249b8bf90ce8244ed8fc1732fe8f73": "9c0876641083076714600718b0dab097",
".git/objects/e2/c341386ee4a0005d9e24ae21b91db6a0ae4717": "fb26cd64212fb986cb68ecf6faba3391",
".git/objects/e3/e9ee754c75ae07cc3d19f9b8c1e656cc4946a1": "14066365125dcce5aec8eb1454f0d127",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ec/408ebfdd76aa9d7723b20bef4f00aaadbb4bf9": "864e85ea80377bb26392e58e2e74e17d",
".git/objects/ed/b55d4deb8363b6afa65df71d1f9fd8c7787f22": "886ebb77561ff26a755e09883903891d",
".git/objects/f0/7abb9f0c817efafb2afb81a55fa12bce32b95b": "b8eae6eb6d371cbe3ea64f7b925bc887",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f2/493d766e2c6ea5d98d7f6cc0d16b7859650e49": "3785e4de1394847c4ae315abc77bb83c",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/f6/98a4dce4b2f866d10a33c40e7af33facaaff7d": "45dab13c4c05d6861f747920911ea4ce",
".git/objects/f7/110c29b86a6d083930a25fc3159315277f1bd7": "1770fb8b387fa19e3be7e6cc1a092b0e",
".git/objects/f8/c5332fec8e412e89e90a0d0f0865c61c738962": "11f07ce4fbabff597a411dd768f3e15d",
".git/objects/f9/94bc5124b049294d86821e44b047088505e60d": "c7c9eceb2221a960aab65820dbdb1d66",
".git/objects/fc/b3ee5b577ad37f4629c6bd4abd7eeb5bf45789": "be6261feafa1341983c2de1310714431",
".git/objects/fe/3b987e61ed346808d9aa023ce3073530ad7426": "dc7db10bf25046b27091222383ede515",
".git/objects/fe/4324b8e728881b2fd23e30ea79fd3c42d64e01": "d96dbc999eaf7e5ea4577d3ff9fc5ca9",
".git/ORIG_HEAD": "1fedec80ede6762e370e8f63ab1fa907",
".git/refs/heads/main": "1fedec80ede6762e370e8f63ab1fa907",
".git/refs/remotes/origin/main": "1fedec80ede6762e370e8f63ab1fa907",
"assets/AssetManifest.bin": "1d0275cd70634a634b0990589ca60785",
"assets/AssetManifest.bin.json": "e2ef6162c8412a2e69c643265886f59c",
"assets/AssetManifest.json": "3128b6fb7ee4aadb6e9e0baeb3b791c5",
"assets/assets/fonts/Figtree-Regular.ttf": "fde4a0ff6b61f88efd09f91f41c9a6da",
"assets/assets/fonts/Kalnia-Medium.ttf": "d65671e72e78975dd4291fb2b73bc4a0",
"assets/assets/fonts/LexendDeca-Regular.ttf": "a38842a5074c944c929f1d26853e250f",
"assets/assets/fonts/LexendDeca-SemiBold.ttf": "b8326db0bcbc1c379b7b561e563d7983",
"assets/assets/fonts/LibreCaslonText-Bold.ttf": "85b1db7540678c4a471c3455a2867907",
"assets/assets/images/6900.png": "a4ee7f906d9879cb8597fd8027efd477",
"assets/assets/images/back.png": "3f233c41a13f4866214581e0162e523c",
"assets/assets/images/Coupons.png": "a8de0a8a77a482575c594dc9913d02fd",
"assets/assets/images/edit_square.png": "8e2f168381e948f54c0c97e15de2a793",
"assets/assets/images/icon.png": "fd8f1b88d6647cdd9f2b89bc120a7eab",
"assets/assets/images/menu.png": "6beb4c3fb23d43e182bcb3a969aaaa14",
"assets/assets/images/shoppingmode.png": "5c0653c5ea9278478cf6d77f60a81df0",
"assets/assets/images/vector.png": "a7ad079b374605df9f7364d3c56ba28e",
"assets/FontManifest.json": "687fcc6a16dad2ad4114451f25984e4f",
"assets/fonts/MaterialIcons-Regular.otf": "9d27c28fd7ca9687140c2797181006e2",
"assets/NOTICES": "9173ac901efe6ec9687b488de1011c25",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "140ccb7d34d0a55065fbd422b843add6",
"canvaskit/canvaskit.js.symbols": "58832fbed59e00d2190aa295c4d70360",
"canvaskit/canvaskit.wasm": "07b9f5853202304d3b0749d9306573cc",
"canvaskit/chromium/canvaskit.js": "5e27aae346eee469027c80af0751d53d",
"canvaskit/chromium/canvaskit.js.symbols": "193deaca1a1424049326d4a91ad1d88d",
"canvaskit/chromium/canvaskit.wasm": "24c77e750a7fa6d474198905249ff506",
"canvaskit/skwasm.js": "1ef3ea3a0fec4569e5d531da25f34095",
"canvaskit/skwasm.js.symbols": "0088242d10d7e7d6d2649d1fe1bda7c1",
"canvaskit/skwasm.wasm": "264db41426307cfc7fa44b95a7772109",
"canvaskit/skwasm_heavy.js": "413f5b2b2d9345f37de148e2544f584f",
"canvaskit/skwasm_heavy.js.symbols": "3c01ec03b5de6d62c34e17014d1decd3",
"canvaskit/skwasm_heavy.wasm": "8034ad26ba2485dab2fd49bdd786837b",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "888483df48293866f9f41d3d9274a779",
"flutter_bootstrap.js": "7dc7a7820d0ba9d83f56b6f2fcf7e404",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "f25e73a46e8131f717dec62f7f116f76",
"/": "f25e73a46e8131f717dec62f7f116f76",
"main.dart.js": "5fa6a158ab00f0ed45bfaa4fb0187b33",
"manifest.json": "49611824fdbebd7579a02607890154d8",
"version.json": "d9b63a152818428fc05e4bba35b96cd7"};
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
