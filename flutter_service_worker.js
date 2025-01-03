'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "b673d836c5c8302c6f577a3216a6b404",
"assets/AssetManifest.bin.json": "1b87d4dd12f5e513d51b933582011473",
"assets/AssetManifest.json": "4c38a7ccbf771a5ea3cf9e66c4d93e5a",
"assets/assets/audio/palagi.mp3": "28b499d080fdb361f55e11adda3c1fed",
"assets/assets/fonts/PressStart2P-Regular.ttf": "f98cd910425bf727bd54ce767a9b6884",
"assets/assets/images/backgound2.jpg": "913ee2090322d4c6ea5f39a7e029463e",
"assets/assets/images/background.jpg": "9f9828dccc4a34e8f195bebfc82f1f2b",
"assets/assets/images/background1.png": "480ef2607ca136bbd1a51f2a68d9ee51",
"assets/assets/images/background3.jpg": "212da27bc253474135b50e28f1676c22",
"assets/assets/images/bg1.jpg": "3703b29acd4d9873f5fbd9d497eac83c",
"assets/assets/images/bubble.png": "7a42f5f03984c747995765fbd31943e9",
"assets/assets/images/fifth_icon.png": "61caf63a94528e0f30be67988adefbbd",
"assets/assets/images/first_icon.png": "9b75b35d044f6f971eaedb9bb06e9f15",
"assets/assets/images/fourth_icon.png": "264a27df5426c3c289acb4c709f0c060",
"assets/assets/images/photo1.jpg": "3c6e83e8a1dd2f3f17dccf71f2d93b97",
"assets/assets/images/pic1.jpg": "67f5697ed05f7c71c748a4e6cbc6bbf4",
"assets/assets/images/pic10.jpg": "f819ab1fdfaa54a618c94c01a9f02c28",
"assets/assets/images/pic11.png": "4cd970bb527b338dd355b8a24706f4a2",
"assets/assets/images/pic12.png": "193b4661eee3e165d6f8b8a954d873b5",
"assets/assets/images/pic13.png": "f53b31407cfdbb7129d9ecf4ce13b25d",
"assets/assets/images/pic14.jpg": "27e70389be28fbb926beae70ef5a6646",
"assets/assets/images/pic15.jpg": "9c731e77341f740c7a1b2e52d1bfc853",
"assets/assets/images/pic16.jpg": "5e28ab848197ddca42f569ee916e2b28",
"assets/assets/images/pic17.jpg": "38063ad16048c5355f0d1cb71999a619",
"assets/assets/images/pic18.jpg": "4a388a8e45deb6ebc0dd69b55de518b3",
"assets/assets/images/pic19.jpg": "9381329cc770dc6f1a684554ffe5be5b",
"assets/assets/images/pic2.jpg": "cede65ac00f03a89afd7036a21fe3a0d",
"assets/assets/images/pic20.jpg": "f7dda01eccbcdb6ca847a99f074ddb44",
"assets/assets/images/pic21.JPG": "9821a42972aaae5b3b44e837b654ab7d",
"assets/assets/images/pic3.jpg": "a149c028628531ac3fcf73eac7821c1b",
"assets/assets/images/pic4.jpg": "49508b43b1a9e83e35216f4641d71e4d",
"assets/assets/images/pic5.jpg": "7b84c69f3c60e16996e1da52cc7110e6",
"assets/assets/images/pic6.jpg": "d2a011281a88df20a14c8f5100dbd99c",
"assets/assets/images/pic7.jpg": "2912ffc30f042d6edac164efd8cfc4ab",
"assets/assets/images/pic8.jpg": "0ee0ae6264ad13182e4d35377b96bf1f",
"assets/assets/images/pic9.jpg": "3e1da0afd03ee0e001bc1fbf3be52921",
"assets/assets/images/playlist1.jpg": "81b2bfa1ea56a311bb209c12ebb74d72",
"assets/assets/images/playlist2.jpg": "28e8621f84b597189c051c795e7d7d59",
"assets/assets/images/playlist3.jpg": "090624426ff6b3e7baff57ee99de6002",
"assets/assets/images/playlist4.jpg": "e28633f0a5f085eab1e9077c6d5d339f",
"assets/assets/images/playlist5.jpg": "71ce5b0ed1256fdf470a4c0ce2b685f2",
"assets/assets/images/playlist6.jpg": "bce52c475a4d481dbec64319fd4394cc",
"assets/assets/images/second_icon.jpg": "f4849b7efda64dd45f441ed9f5b70f1c",
"assets/assets/images/second_icon.png": "e5f94185f5885de630f8e9a09d00b488",
"assets/assets/images/third_icon.png": "7431213784670ecefa924a143a6baf17",
"assets/assets/images/video.png": "6c4c5eb023447eb3ba17f14e70936bd8",
"assets/FontManifest.json": "af72817180f1600c6ad8d83aa72f0a98",
"assets/fonts/MaterialIcons-Regular.otf": "360d56f7721c06c4323cbbd5721bdd72",
"assets/NOTICES": "093f552235a4e60bde22fa7b3ac7c672",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"assets/packages/youtube_player_flutter/assets/speedometer.webp": "50448630e948b5b3998ae5a5d112622b",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "73584c1a3367e3eaf757647a8f5c5989",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "143af6ff368f9cd21c863bfa4274c406",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "2fc47c0a0c3c7af8542b601634fe9674",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "59a12ab9d00ae8f8096fffc417b6e84f",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "a069d7911b8fb5b3d0e3256b84afded4",
"/": "a069d7911b8fb5b3d0e3256b84afded4",
"main.dart.js": "3dfd8486481666e9ef6a4534d529c5cf",
"manifest.json": "b12db4006d7cdea8c5fd263617f65e9c",
"version.json": "1fd9fe9a32e455573dd734ad2052a042"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
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
