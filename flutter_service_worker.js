'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/config": "920a11de313bfb8d93d81f4a3a5b71b6",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
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
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
"assets/AssetManifest.bin": "9b0976dea9d6a1f00a6d94ad7ff3189f",
"assets/AssetManifest.bin.json": "bdaba8c66e120ecd48a82d700bcb3fe4",
"assets/AssetManifest.json": "98a582d61983fec27cf24a6be78e4474",
"assets/assets/fonts/IRANSans(FaNum).ttf": "034ca0f6f1a42508cb52287bd63bd48c",
"assets/assets/fonts/IRANSans(FaNum)_Bold.ttf": "e1f0ce3483d8fa5a0e1054e2ca70e8d6",
"assets/assets/fonts/IRANSans(FaNum)_Medium.ttf": "53a716815ede8bd48d7b0fd4f174fcb3",
"assets/assets/fonts/IRANSans_Light.ttf": "8890f43e484ae6f9c2a40025395532aa",
"assets/assets/fonts/IRANSans_UltraLight.ttf": "cf1df0daf58e039d48a14524ab546417",
"assets/assets/icons/bed_ic.svg": "917fe3f5b1f0dbaaa11c913717120ea7",
"assets/assets/icons/bell_ic.svg": "caa7d0b21b986c8fba689cd776e48d97",
"assets/assets/icons/bookmark_ic.svg": "3013ee0b80a84e631653fc609464d815",
"assets/assets/icons/breakfast_ic.svg": "243b2d1234b10b9793ed96ddc08b3a83",
"assets/assets/icons/calendar_ic.svg": "72ee5bf7ffe830dee604ef3179e11773",
"assets/assets/icons/calling_ic_.svg": "5b6982139e006ad46c2b43a4615083b3",
"assets/assets/icons/capacity_ic.svg": "e0b35e5a0bf72d9695fe163de53d44d8",
"assets/assets/icons/carbon_view-filled_ic.svg": "ce73299c55812108c45235aaa4ce6887",
"assets/assets/icons/chat_ic.svg": "b11d8d62dddbda5a48e81ee499bb1286",
"assets/assets/icons/close_ic.svg": "6f8aa52b7b1c56913e086ce1b978c77d",
"assets/assets/icons/comment_count_ic.svg": "5eed2502e03cd8a84a5ffd00bf78bebc",
"assets/assets/icons/conf_await_ic.svg": "2a25068487cfb6d192bc0e27184e9a38",
"assets/assets/icons/delivery_time_ic.svg": "b3f13032f62829ba19f383a4748a673d",
"assets/assets/icons/dinner_ic.svg": "8c796e68dfd7e81cc86d5503f23bff9b",
"assets/assets/icons/discharge_time_ic.svg": "2931e0c65811a9c2b56fdad61a76711f",
"assets/assets/icons/facilities_ic.svg": "0fee7d8a578a299cd4518742e755690f",
"assets/assets/icons/favorite2_fill_ic.svg": "1a17e02cfdbd249bd5c720b69aa2bede",
"assets/assets/icons/favorite2_ic.svg": "6364a632d463154ac8f21885c1099876",
"assets/assets/icons/favorite_ic.svg": "ee1cf1dc9de3c44082521f6f02c30f7a",
"assets/assets/icons/focus_ic.svg": "2c3b9db3d68c91ccff1ebbd34a00a67c",
"assets/assets/icons/heart_ic.svg": "7bf36eccf905ec841b221ec63e60cc11",
"assets/assets/icons/home_ic.svg": "8c56d8422f73b4061a2566fb6e8750f3",
"assets/assets/icons/home_nav_fill_ic.svg": "f6d11c0644dc61db654731a62e9b5225",
"assets/assets/icons/home_nav_outline_ic.svg": "67f6986c5c7158ceead4c75edc58b5a8",
"assets/assets/icons/location_pin_ic.svg": "ffa522e472db75585dad7e5929672057",
"assets/assets/icons/location_pin_nav_fill_ic.svg": "220a189cd4a82481925bebde7f96278f",
"assets/assets/icons/location_pin_nav_outline_ic.svg": "ffa522e472db75585dad7e5929672057",
"assets/assets/icons/location_small_pin_ic.svg": "4ab53d0cafa4dad27296f20b2c5dccfc",
"assets/assets/icons/lunch_ic.svg": "356dc25ec7db1444a21bbb7b359f861c",
"assets/assets/icons/medal_ic.svg": "e4141d5b4a4085a2f6fd6fc1b60e1d35",
"assets/assets/icons/Paper.svg": "e050ac4a16676736fc930d7ed633c12b",
"assets/assets/icons/paper_nav_fill_ic.svg": "aa4f88568318b974abe848385813095c",
"assets/assets/icons/paper_outline_ic.svg": "55a255610dfde34fd71a15c022c64e0d",
"assets/assets/icons/payment_ic.svg": "c979939f83023715e550f6d07b7f3a53",
"assets/assets/icons/photo_ic.svg": "df7407b29fd5b12222ac24d50728b5fd",
"assets/assets/icons/price_ic.svg": "643908e08ee9d22c30e0e9b4e123be73",
"assets/assets/icons/profile_ic.svg": "1a89d1f2a2fe123f55b7fbf0ee868dc7",
"assets/assets/icons/profile_nav_fill_ic.svg": "f00b83b1d2c97656d43963064be24799",
"assets/assets/icons/profile_nav_outline_ic.svg": "3c90bba851b8c7079c1ed4f0199ce8fb",
"assets/assets/icons/reply_ic.svg": "282ec980d3477eb654c2f18ab98275a9",
"assets/assets/icons/rooms_big_ic.svg": "7960607edb2ffe8ab7f944d9d1f3c14a",
"assets/assets/icons/rooms_ic.svg": "2ec8dd3f1d0a03cfe93893cd8466aa83",
"assets/assets/icons/rules_ic.svg": "68f1cdb28cd297567a8052ae260584b0",
"assets/assets/icons/search_ic.svg": "84096a5fb2ccc8fa3c4b004ebd09c857",
"assets/assets/icons/share_line_ic.svg": "329afd1b07995331120c70d12bd70629",
"assets/assets/icons/star_ic.svg": "4772a69acdc0110e99b9ce708321567d",
"assets/assets/icons/trash_bin_ic.svg": "45dbc34fd783af84e6bf50d3b0cb5487",
"assets/assets/icons/union.svg": "b2d334fc4fa0f070e4b79d80e8b72f38",
"assets/assets/icons/upload_ic.svg": "56d59665332c70efdf932e82baca13a3",
"assets/assets/images/desert-thumb-vertical.jpg": "7a84cf8da6b1dff6557b198f9b5fdda9",
"assets/assets/images/feedback.png": "6f6cd63bc82fab3e6aac9236993ce5a7",
"assets/assets/images/image_not_available.png": "6ce9535f12888c3b3a53a4c683491b6b",
"assets/assets/images/intro_shape.svg": "5c23f67203aba051a7011ad1c349315a",
"assets/assets/images/login_shape.svg": "25ba593ebc8b2884e3c6237f6d6a150c",
"assets/assets/images/logo.svg": "6b6989b065b939bf0a1aa7db72882c02",
"assets/FontManifest.json": "0d6a9019e89c94422d40013f37fa7376",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/NOTICES": "5dc1b9199b04c9e6f577395686d54180",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "b93248a553f9e8bc17f1065929d5934b",
"assets/packages/flutter_map/lib/assets/flutter_map_logo.png": "208d63cc917af9713fc9572bd5c09362",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "4769f3245a24c1fa9965f113ea85ec2a",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "3ca5dc7621921b901d513cc1ce23788c",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "a2eb084b706ab40c90610942d98886ec",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/web/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/web/icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"assets/web/manifest.json": "af81b205cf855a7973e730271b7e0c1a",
"canvaskit/canvaskit.js": "26eef3024dbc64886b7f48e1b6fb05cf",
"canvaskit/canvaskit.js.symbols": "efc2cd87d1ff6c586b7d4c7083063a40",
"canvaskit/canvaskit.wasm": "e7602c687313cfac5f495c5eac2fb324",
"canvaskit/chromium/canvaskit.js": "b7ba6d908089f706772b2007c37e6da4",
"canvaskit/chromium/canvaskit.js.symbols": "e115ddcfad5f5b98a90e389433606502",
"canvaskit/chromium/canvaskit.wasm": "ea5ab288728f7200f398f60089048b48",
"canvaskit/skwasm.js": "ac0f73826b925320a1e9b0d3fd7da61c",
"canvaskit/skwasm.js.symbols": "96263e00e3c9bd9cd878ead867c04f3c",
"canvaskit/skwasm.wasm": "828c26a0b1cc8eb1adacbdd0c5e8bcfa",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "4b2350e14c6650ba82871f60906437ea",
"flutter_bootstrap.js": "4cf7461f8b4fd3eae772edc994f6cab7",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "0989fb784d0f58faa76419e980d29781",
"/": "0989fb784d0f58faa76419e980d29781",
"main.dart.js": "f73141969e262f4230105f4afb5177e6",
"manifest.json": "af81b205cf855a7973e730271b7e0c1a",
"version.json": "8669327efe71195f82e84a0d423e16fe"};
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
