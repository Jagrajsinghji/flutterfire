(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{141:function(e,a,t){"use strict";t.r(a),t.d(a,"frontMatter",(function(){return p})),t.d(a,"metadata",(function(){return c})),t.d(a,"rightToc",(function(){return o})),t.d(a,"default",(function(){return l}));var n=t(2),r=t(9),i=(t(0),t(185)),p={title:"Core",sidebar_label:"Usage"},c={id:"core/usage",title:"Core",description:"The firebasecore plugin is responsible for connecting your Flutter app to your Firebase project. The plugin must be",source:"@site/../docs/core/usage.mdx",permalink:"/docs/core/usage",editUrl:"https://github.com/FirebaseExtended/flutterfire/edit/master/docs/../docs/core/usage.mdx",sidebar_label:"Usage",sidebar:"main",previous:{title:"Cloud Storage",permalink:"/docs/storage/usage"},next:{title:"Realtime Database",permalink:"/docs/database/overview"}},o=[{value:"Installation",id:"installation",children:[]},{value:"Default Firebase app",id:"default-firebase-app",children:[]},{value:"Secondary Firebase apps",id:"secondary-firebase-apps",children:[{value:"Initializing secondary apps",id:"initializing-secondary-apps",children:[]},{value:"Accessing secondary apps",id:"accessing-secondary-apps",children:[]},{value:"Using app instances",id:"using-app-instances",children:[]},{value:"Deleting instances",id:"deleting-instances",children:[]}]}],s={rightToc:o};function l(e){var a=e.components,t=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},s,t,{components:a,mdxType:"MDXLayout"}),Object(i.b)("p",null,"The ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"!firebase_core"}),Object(i.b)("inlineCode",{parentName:"a"},"firebase_core"))," plugin is responsible for connecting your Flutter app to your Firebase project. The plugin must be\ninstalled and initialized before the usage of any other FlutterFire plugins. It provides basic functionality such\nas:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/overview#initializing-flutterfire"}),"Initializing FlutterFire"),"."),Object(i.b)("li",{parentName:"ul"},"Creating ",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"#secondary-firebase-apps"}),"Secondary Firebase App Instances"),".")),Object(i.b)("h2",{id:"installation"},"Installation"),Object(i.b)("p",null,"The ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"!firebase_core"}),Object(i.b)("inlineCode",{parentName:"a"},"firebase_core"))," plugin can be installed by following the ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/overview"}),"Getting Started")," documentation. Once installed,\nimport the plugin:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-dart"}),"import 'package:firebase_core/firebase_core.dart';\n")),Object(i.b)("h2",{id:"default-firebase-app"},"Default Firebase app"),Object(i.b)("p",null,"FlutterFire requires a default Firebase app to be present before initialization, otherwise an exception will be thrown.\nThe steps for setting up a default app for your platform can be found in the ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/overview"}),"Getting Started")," documentation."),Object(i.b)("p",null,"Some plugins such as Analytics & Performance Monitoring are only compatible with the default Firebase app, however,\nplugins such as Authentication can take advantage of ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"#secondary-firebase-apps"}),"Secondary Firebase Apps"),",\nallowing you to use multiple Firebase projects at once."),Object(i.b)("p",null,"To access the default app, call the ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"!firebase_core.initializeApp"}),Object(i.b)("inlineCode",{parentName:"a"},"initializeApp"))," or ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"!firebase_core.app"}),Object(i.b)("inlineCode",{parentName:"a"},"app"))," method on the ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"!firebase_core"}),Object(i.b)("inlineCode",{parentName:"a"},"Firebase"))," class:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-dart"}),"FirebaseApp defaultApp = await Firebase.initializeApp();\n// or\nFirebaseApp defaultApp = Firebase.app();\n")),Object(i.b)("h2",{id:"secondary-firebase-apps"},"Secondary Firebase apps"),Object(i.b)("p",null,"Some FlutterFire plugins allow the usage of secondary Firebase apps, letting you interchange the project the\nplugin uses. Currently, the Firebase SDKs provide functionality for using secondary apps with the following services:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Authentication."),Object(i.b)("li",{parentName:"ul"},"Realtime Database."),Object(i.b)("li",{parentName:"ul"},"Cloud Firestore."),Object(i.b)("li",{parentName:"ul"},"Cloud Functions."),Object(i.b)("li",{parentName:"ul"},"Cloud Storage."),Object(i.b)("li",{parentName:"ul"},"Instance ID."),Object(i.b)("li",{parentName:"ul"},"ML Kit Natural Language."),Object(i.b)("li",{parentName:"ul"},"ML Kit Vision."),Object(i.b)("li",{parentName:"ul"},"Remote Config.")),Object(i.b)("h3",{id:"initializing-secondary-apps"},"Initializing secondary apps"),Object(i.b)("p",null,"To initialize a secondary app, call the ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"!firebase_core.Firebase.initializeApp"}),Object(i.b)("inlineCode",{parentName:"a"},"initializeApp"))," method with a name and options:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-dart"}),"await Firebase.initializeApp(\n    name: 'SecondaryApp',\n    options: const FirebaseOptions(\n        appId: 'my_appId',\n        apiKey: 'my_apiKey',\n        messagingSenderId: 'my_messagingSenderId',\n        projectId: 'my_projectId'\n    )\n);\n")),Object(i.b)("p",null,"At a minimum, you must provide the ",Object(i.b)("inlineCode",{parentName:"p"},"appId"),", ",Object(i.b)("inlineCode",{parentName:"p"},"apiKey"),", ",Object(i.b)("inlineCode",{parentName:"p"},"messagingSenderId")," and ",Object(i.b)("inlineCode",{parentName:"p"},"projectId"),". Although the other options\nare not required, it is recommended you view the ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"!firebase_core_platform_interface.FirebaseOptions"}),Object(i.b)("inlineCode",{parentName:"a"},"FirebaseOptions"))," reference API for the full list of options available."),Object(i.b)("h3",{id:"accessing-secondary-apps"},"Accessing secondary apps"),Object(i.b)("p",null,"Once initialized, secondary apps can be accessed via the ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"!firebase_core.FirebaseApp"}),Object(i.b)("inlineCode",{parentName:"a"},"app"))," method on ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"!firebase_core"}),Object(i.b)("inlineCode",{parentName:"a"},"FirebaseCore")),":"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-dart"}),"FirebaseApp secondaryApp = Firebase.app('SecondaryApp');\n")),Object(i.b)("p",null,"Attempting to access an app that does not exist will throw an exception."),Object(i.b)("p",null,"It is also possible to get all existing apps at once via the ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"!firebase_core.Firebase.apps"}),Object(i.b)("inlineCode",{parentName:"a"},"apps"))," static property on ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"!firebase_core.Firebase"}),Object(i.b)("inlineCode",{parentName:"a"},"Firebase"))," class:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-dart"}),"List<FirebaseApp> apps = Firebase.apps;\n\napps.forEach((app) {\n  print('App name: ${app.name}');\n});\n")),Object(i.b)("h3",{id:"using-app-instances"},"Using app instances"),Object(i.b)("p",null,"Each FlutterFire plugin provides a streamlined approach for using the default app as well as secondary apps (if applicable).\nThe convenient way to use the default app is by accessing the ",Object(i.b)("inlineCode",{parentName:"p"},"instance")," property on each plugin base class. For example\nif using Cloud Firestore:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-dart"}),"// Access Firestore using the default Firebase app:\nFirestore firestore = Firestore.instance;\n\nfirestore\n  .collection('users')\n  .snapshots()\n  .listen((QuerySnapshot snapshot) {\n     // Query snapshot of the users collection on the default Firebase app\n  });\n")),Object(i.b)("p",null,"If instead you'd like to use a secondary app, pass it to the ",Object(i.b)("inlineCode",{parentName:"p"},"instanceFor")," static method on each plugin base class. For\nexample if using Cloud Firestore:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-dart"}),"FirebaseApp secondaryApp = Firebase.app('SecondaryApp');\n\nFirestore firestore = Firestore.instanceFor(\n  app: secondaryApp\n);\n\nfirestore\n  .collection('users')\n  .snapshots()\n  .listen((QuerySnapshot snapshot) {\n     // Query snapshot of the users collection on the SecondaryApp\n  });\n")),Object(i.b)("h3",{id:"deleting-instances"},"Deleting instances"),Object(i.b)("p",null,"If you no longer need a secondary app, you can delete it by calling the ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"!firebase_core.FirebaseApp.delete"}),Object(i.b)("inlineCode",{parentName:"a"},"delete"))," method on the ",Object(i.b)("inlineCode",{parentName:"p"},"FirebaseApp")," instance:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-dart"}),"FirebaseApp secondaryApp = Firebase.app('SecondaryApp');\n\nawait secondaryApp.delete();\n")),Object(i.b)("p",null,"Any plugin usage attempting to use a deleted app will throw an exception. The default app cannot be deleted and will\nthrow an exception if deleted."))}l.isMDXComponent=!0},185:function(e,a,t){"use strict";t.d(a,"a",(function(){return b})),t.d(a,"b",(function(){return f}));var n=t(0),r=t.n(n);function i(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function p(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?p(Object(t),!0).forEach((function(a){i(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function o(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=r.a.createContext({}),l=function(e){var a=r.a.useContext(s),t=a;return e&&(t="function"==typeof e?e(a):c(c({},a),e)),t},b=function(e){var a=l(e.components);return r.a.createElement(s.Provider,{value:a},e.children)},u={inlineCode:"code",wrapper:function(e){var a=e.children;return r.a.createElement(r.a.Fragment,{},a)}},d=r.a.forwardRef((function(e,a){var t=e.components,n=e.mdxType,i=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),b=l(t),d=n,f=b["".concat(p,".").concat(d)]||b[d]||u[d]||i;return t?r.a.createElement(f,c(c({ref:a},s),{},{components:t})):r.a.createElement(f,c({ref:a},s))}));function f(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var i=t.length,p=new Array(i);p[0]=d;var c={};for(var o in a)hasOwnProperty.call(a,o)&&(c[o]=a[o]);c.originalType=e,c.mdxType="string"==typeof e?e:n,p[1]=c;for(var s=2;s<i;s++)p[s]=t[s];return r.a.createElement.apply(null,p)}return r.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);