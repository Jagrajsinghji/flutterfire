(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{153:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return s})),a.d(t,"metadata",(function(){return o})),a.d(t,"rightToc",(function(){return c})),a.d(t,"default",(function(){return p}));var n=a(2),r=a(9),i=(a(0),a(185)),s={title:"Using Firebase Authentication",sidebar_label:"Usage"},o={id:"auth/usage",title:"Using Firebase Authentication",description:"Once installed, you can access the firebaseauth plugin by importing it in your Dart code:",source:"@site/../docs/auth/usage.mdx",permalink:"/docs/auth/usage",editUrl:"https://github.com/FirebaseExtended/flutterfire/edit/master/docs/../docs/auth/usage.mdx",sidebar_label:"Usage"},c=[{value:"Authentication state",id:"authentication-state",children:[]},{value:"Persisting authentication state",id:"persisting-authentication-state",children:[]},{value:"Sign-in methods",id:"sign-in-methods",children:[]},{value:"Anonymous sign-in",id:"anonymous-sign-in",children:[]},{value:"Email/Password Registration &amp; Sign-in",id:"emailpassword-registration--sign-in",children:[{value:"Registration",id:"registration",children:[]},{value:"Sign-in",id:"sign-in",children:[]},{value:"Verifying a users email",id:"verifying-a-users-email",children:[]}]},{value:"Signing Out",id:"signing-out",children:[]},{value:"Other sign-in methods",id:"other-sign-in-methods",children:[]},{value:"User management",id:"user-management",children:[{value:"Deleting a user",id:"deleting-a-user",children:[]},{value:"Reauthenticating a user",id:"reauthenticating-a-user",children:[]}]}],l=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(i.b)("div",t)}},u=l("Tabs"),b=l("TabItem"),h={rightToc:c};function p(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},h,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Once installed, you can access the ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"!firebase_auth"}),Object(i.b)("inlineCode",{parentName:"a"},"firebase_auth"))," plugin by importing it in your Dart code:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-dart"}),"import 'package:firebase_auth/firebase_auth.dart';\n")),Object(i.b)("p",null,"Before using Firebase Auth, you must first have ensured you have ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"overview#initializing-flutterfire"}),"initialized FlutterFire"),"."),Object(i.b)("p",null,"To create a new Firebase Auth instance, call the ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"!firebase_auth.FirebaseAuth.instance"}),Object(i.b)("inlineCode",{parentName:"a"},"instance"))," getter on ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"!firebase_auth.FirebaseAuth"}),Object(i.b)("inlineCode",{parentName:"a"},"FirebaseAuth")),":"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-dart"}),"FirebaseAuth auth = FirebaseAuth.instance;\n")),Object(i.b)("p",null,"By default, this allows you to interact with Firebase Auth using the default Firebase App used whilst installing FlutterFire on your\nplatform. If however you'd like to use a secondary Firebase App, use the ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"!firebase_auth.FirebaseAuth.instanceFor"}),Object(i.b)("inlineCode",{parentName:"a"},"instanceFor"))," method:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-dart"}),"FirebaseApp secondaryApp = Firebase.app('SecondayApp');\nFirebaseAuth auth = FirebaseAuth.instanceFor(app: secondaryApp);\n")),Object(i.b)("h2",{id:"authentication-state"},"Authentication state"),Object(i.b)("p",null,"Firebase Auth provides many methods and utilities for enabling you to integrate secure authentication into your new or existing\nFlutter application. In many cases, you will need to know about the authentication ",Object(i.b)("em",{parentName:"p"},"state")," of your user, such as whether they're\nlogged in or logged out."),Object(i.b)("p",null,"Firebase Auth enables you to subscribe in realtime to this state via a ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://api.flutter.dev/flutter/dart-async/Stream-class.html"}),Object(i.b)("inlineCode",{parentName:"a"},"Stream")),".\nOnce called, the stream provides an immidiate event of the users current authentication state, and then provides subsequent events whenever\nthe authentication state changes."),Object(i.b)("p",null,"To subscribe to these changes, call the ",Object(i.b)("inlineCode",{parentName:"p"},"authStateChanges()")," method on your ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"!firebase_auth.FirebaseAuth"}),Object(i.b)("inlineCode",{parentName:"a"},"FirebaseAuth"))," instance:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-dart"}),"FirebaseAuth.instance\n  .authStateChanges()\n  .listen((User user) {\n    if (user == null) {\n      print('User is currently signed out!');\n    } else {\n      print('User is signed in!');\n    }\n  });\n")),Object(i.b)("p",null,"The stream returns a ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"!firebase_auth.User"}),Object(i.b)("inlineCode",{parentName:"a"},"User"))," class if the user is signed in, or ",Object(i.b)("inlineCode",{parentName:"p"},"null")," if they are not. You can read more\nabout managing your users below."),Object(i.b)("p",null,"If you also need authentication state change events along with any user token refresh events, you can subscribe via the\n",Object(i.b)("inlineCode",{parentName:"p"},"idTokenChanges()")," method instead."),Object(i.b)("h2",{id:"persisting-authentication-state"},"Persisting authentication state"),Object(i.b)("p",null,"The Firebase SDKs for all platforms provide out of the box support for ensuring that your users authentication state is persisted across\napp restarts or page reloads."),Object(i.b)("p",null,"On native platforms such as Android & iOS, this behaviour is not configurable and the users authenticate state will be persisted on-device\nbetween app restarts. The user can clear the apps cached data via the device settings which will wipe any existing state being stored."),Object(i.b)("p",null,"On web platforms, the users authentication state is stored in ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage"}),"local storage"),".\nIf required you can change this default behaviour to only persist authentication state for the current session, or not at all. To configure\nthese settings, call the ",Object(i.b)("inlineCode",{parentName:"p"},"setPersistence()")," method (note; on native platforms an ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://api.flutter.dev/flutter/dart-core/UnimplementedError-class.html"}),Object(i.b)("inlineCode",{parentName:"a"},"UnimplementedError")),")\nwill be thrown):"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-dart"}),"// Disable persistence on web platforms\nawait FirebaseAuth.instance.setPersistence(Persistence.NONE);\n")),Object(i.b)("h2",{id:"sign-in-methods"},"Sign-in methods"),Object(i.b)("p",null,"Firebase provides a number of ways to sign users into your application, from anonymous users, password authentication,\nphone authentication and using OAuth/social providers."),Object(i.b)("p",null,"Before using any sign-in methods, ensure you have configured the ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://console.firebase.google.com/project/_/authentication/providers"}),"sign-in methods"),"\non the Firebase console."),Object(i.b)("h2",{id:"anonymous-sign-in"},"Anonymous sign-in"),Object(i.b)("p",null,"Even though many applications do not require the user to explicially sign into an application, it is important that you are able\nto uniquely identify your users (for both analytical and security reasons). Anonymous sign-in provides an extra layer of security if\nusing Firebases Firestore, Realtime Database or even an external API, since you're able to detect whether a request comes from an authenticated user."),Object(i.b)("p",null,"If no previous anonymous account on the platform (for your specific application) has been created, when signing in anonymously Firebase\nwill create a new unqiue user which will be persisted across app restarts/page reloads. If the user signs-out and reauthenticates\nanonymously again, they will be signed-in with the previously created account. It is however important to remember the anonymous account created\nwill not be persisted if the user uninstalls the application, clears their browser storage or uses a private browsing method (e.g.\nincognito mode on Google Chrome)."),Object(i.b)("p",null,"To get started, call the ",Object(i.b)("inlineCode",{parentName:"p"},"signInAnonymously()")," method on the ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"!firebase_auth.FirebaseAuth"}),Object(i.b)("inlineCode",{parentName:"a"},"FirebaseAuth"))," instance:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-dart"}),"UserCredential userCredential = await FirebaseAuth.instance.signInAnonymously();\n")),Object(i.b)("p",null,"Once successfully resolved, the user will be granted an anonymous account. If you are listening to changes in\n",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"#authentication-state"}),"authentication state"),", a new event will be sent to your listeners."),Object(i.b)("p",null,"To learn more about how you can handle any errors which are thrown from the method, view the ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"auth/error-handling"}),"Error Handling"),"\ndocumentation."),Object(i.b)("h2",{id:"emailpassword-registration--sign-in"},"Email/Password Registration & Sign-in"),Object(i.b)("p",null,"Email/Password is a common user sign in method for most applications. This requires the user to provide an email address\nand secure password. Users can register new accounts with a method called ",Object(i.b)("inlineCode",{parentName:"p"},"createUserWithEmailAndPassword()")," or sign in to\nan existing account with ",Object(i.b)("inlineCode",{parentName:"p"},"signInWithEmailAndPassword()"),"."),Object(i.b)("h3",{id:"registration"},"Registration"),Object(i.b)("p",null,"To create a new account on your Firebase project call the ",Object(i.b)("inlineCode",{parentName:"p"},"createUserWithEmailAndPassword()")," method with the users email address\nand password:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-dart"}),"try {\n  UserCredential user = await FirebaseAuth.instance.createUserWithEmailAndPassword(\n    email: \"barry.allen@example.com\",\n    password: \"SuperSecretPassword!\"\n  );\n} catch on FirebaseAuthException (e) {\n  if (e.code == 'weak-password') {\n    print('The password provided is too weak.');\n  } else if (e.code == 'email-already-in-use') {\n    print('The account already exists for that email.');\n  }\n} catch (e) {\n  print(e.toString());\n}\n")),Object(i.b)("p",null,"The method is a two-step operation; it will first create the new account (if it does not already exist and the password is valid) and\nthen automatically sign in the user in to that account. If you are listening to changes in ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"#authentication-state"}),"authentication state"),",\na new event will be sent to your listeners."),Object(i.b)("p",null,"To learn more about how you can handle any errors which are thrown from the method, view the ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"auth/error-handling"}),"Error Handling"),"\ndocumentation."),Object(i.b)("h3",{id:"sign-in"},"Sign-in"),Object(i.b)("p",null,"To sign-in to an existing account, call the ",Object(i.b)("inlineCode",{parentName:"p"},"signInWithEmailAndPassword()")," method:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-dart"}),"try {\n  UserCredential user = await FirebaseAuth.instance.signInWithEmailAndPassword(\n    email: \"barry.allen@example.com\",\n    password: \"SuperSecretPassword!\"\n  );\n} catch on FirebaseAuthException (e) {\n  if (e.code == 'user-not-found') {\n    print('No user found for that email.');\n  } else if (e.code == 'wrong-password') {\n    print('Wrong password provided for that user.');\n  }\n}\n")),Object(i.b)("p",null,"Once successful, if you are listening to changes in ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"#authentication-state"}),"authentication state"),", a new event will be sent to your\nlisteners."),Object(i.b)("h3",{id:"verifying-a-users-email"},"Verifying a users email"),Object(i.b)("p",null,"Even though the above authentication flows sign a user into your application, they can provide any valid email address even if they\ndo not have access to that email address. In many cases, you may wish to make a user verify the provided email address before you\ngrant them full access to your application."),Object(i.b)("p",null,"The ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"!firebase_auth.User"}),Object(i.b)("inlineCode",{parentName:"a"},"User"))," class provides a ",Object(i.b)("inlineCode",{parentName:"p"},"sendEmailVerification()")," method and ",Object(i.b)("inlineCode",{parentName:"p"},"emailVerified")," property which you can use to handle\nthis scenario."),Object(i.b)("p",null,"For example, once signed in you can check the property and send an email verification to the user:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-dart"}),"User user = FirebaseAuth.instance.currentUser;\n\nif (!user.emailVerified) {\n  await user.sendEmailVerification();\n}\n")),Object(i.b)("p",null,"Firebase will send an automated email to the user with a unique code. This code can then be entered via the ",Object(i.b)("inlineCode",{parentName:"p"},"applyActionCode()")," method.\nYou can first check whether the code is valid by using the ",Object(i.b)("inlineCode",{parentName:"p"},"checkActionCode()")," method:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-dart"}),"FirebaseAuth auth = FirebaseAuth.instance;\n\n// Get the code from the email:\nString code = 'xxxxxxx';\n\ntry {\n  await auth.checkActionCode(code);\n  await auth.applyActionCode(code);\n\n  // If successful, reload the user:\n  auth.currentUser.reload();\n} catch on FirebaseAuthException (e) {\n  if (e.code == 'invalid-action-code') {\n    print('The code is invalid.');\n  }\n}\n")),Object(i.b)("p",null,"To learn more about how you can handle any errors which are thrown from the method, view the ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"auth/error-handling"}),"Error Handling"),"\ndocumentation."),Object(i.b)("h2",{id:"signing-out"},"Signing Out"),Object(i.b)("p",null,"To sign a user out, call the ",Object(i.b)("inlineCode",{parentName:"p"},"signOut()")," method:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-dart"}),"await FirebaseAuth.instance.signOut();\n")),Object(i.b)("p",null,"If you are listening to changes in ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"#authentication-state"}),"authentication state"),", a new event will be sent to your\nlisteners."),Object(i.b)("h2",{id:"other-sign-in-methods"},"Other sign-in methods"),Object(i.b)("p",null,"Firebase also supports authenticating with external provides. To learn more, view the documentation for your authentication method:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"social#apple"}),"Apple Sign-In.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"social#facebook"}),"Facebook Sign-In.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"social#twitter"}),"Twitter Sign-In.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"social#google"}),"Google Sign-In.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"phone"}),"Phone Number Sign-In."))),Object(i.b)("h2",{id:"user-management"},"User management"),Object(i.b)("p",null,"Once authenticated, FlutterFire provides you access to the user via the ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"!firebase_auth.User"}),Object(i.b)("inlineCode",{parentName:"a"},"User"))," class. The class stores the\ncurrent information about the user such as their unique user ID, any linked provider accounts and methods to manage the user."),Object(i.b)("p",null,"The ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"!firebase_auth.User"}),Object(i.b)("inlineCode",{parentName:"a"},"User"))," class is returned from any ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"#authentication-state"}),"authentication state")," listeners, or as part of\na ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"!firebase_auth.UserCredential"}),Object(i.b)("inlineCode",{parentName:"a"},"UserCredential"))," when using authentication methods. If you are sure the user is currently signed-in,\nyou can also access the ",Object(i.b)("inlineCode",{parentName:"p"},"User")," via the ",Object(i.b)("inlineCode",{parentName:"p"},"currentUser")," property on the ",Object(i.b)("inlineCode",{parentName:"p"},"FirebaseAuth")," instance. The examples below show how to access the\nuser:"),Object(i.b)(u,{defaultValue:"currentUser",values:[{label:"currentUser",value:"currentUser"},{label:"Sign-in Methods",value:"methods"},{label:"State Listener Stream",value:"stream"}],mdxType:"Tabs"},Object(i.b)(b,{value:"currentUser",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-dart"}),"FirebaseAuth auth = FirebaseAuth.instance;\n\nif (auth.currentUser != null) {\n  print(auth.currentUser.uid);\n}\n"))),Object(i.b)(b,{value:"methods",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-dart"}),"UserCredential userCredential = await Firebase.auth.signInAnonymously();\n\nprint(userCredential.user.uid);\n"))),Object(i.b)(b,{value:"stream",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-dart"}),"FirebaseAuth.instance\n  .authStateChanges()\n  .listen((User user) {\n    if (user != null) {\n      print(user.uid);\n    }\n  });\n")))),Object(i.b)("h3",{id:"deleting-a-user"},"Deleting a user"),Object(i.b)("p",null,"If your user wishes to delete their account from your project, this can be achived with the ",Object(i.b)("inlineCode",{parentName:"p"},"delete()")," method. Since this is a\nsecurity-sensitive operation, it requires that user must have recently signed-in. You can handle this scenario by catching the error, for\nexample:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-dart"}),"try {\n  await FirebaseAuth.instance.currentUser.delete();\n} catch on FirebaseAuthException (e) {\n  if (e.code == 'requires-recent-login') {\n    print('The user must reauthenticate before this operation can be executed.');\n  }\n}\n")),Object(i.b)("h3",{id:"reauthenticating-a-user"},"Reauthenticating a user"),Object(i.b)("p",null,"As mentioned above, some operations such as deleting the user, updating their email address or provide require the user to have recently\nsigned in. Rather than signing the user out and back in again, the ",Object(i.b)("inlineCode",{parentName:"p"},"reauthenticateWithCredential()")," method can be called. If a recent login\nis required, create a new ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"!firebase_auth_platform_interface.AuthCredential"}),Object(i.b)("inlineCode",{parentName:"a"},"AuthCredential"))," and pass it to the method. For example,\nto reauthenticate with email & password, create a new ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"!firebase_auth_platform_interface.EmailAuthCredential"}),Object(i.b)("inlineCode",{parentName:"a"},"EmailAuthCredential")),":"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-dart"}),"// Prompt the user to enter their email and password\nString email = 'barry.allen@example.com';\nString password = 'SuperSecretPassword!';\n\n// Create a credential\nEmailAuthCredential credential = EmailAuthProvider.credential(email, password);\n\n// Reauthenticate\nawait FirebaseAuth.instance.currentUser.reauthenticateWithCredential(credential);\n")),Object(i.b)("p",null,"Reauthentication also works if you are using an OAuth credential instead."))}p.isMDXComponent=!0},185:function(e,t,a){"use strict";a.d(t,"a",(function(){return b})),a.d(t,"b",(function(){return d}));var n=a(0),r=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=r.a.createContext({}),u=function(e){var t=r.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},b=function(e){var t=u(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},p=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),b=u(a),p=n,d=b["".concat(s,".").concat(p)]||b[p]||h[p]||i;return a?r.a.createElement(d,o(o({ref:t},l),{},{components:a})):r.a.createElement(d,o({ref:t},l))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,s=new Array(i);s[0]=p;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:n,s[1]=o;for(var l=2;l<i;l++)s[l]=a[l];return r.a.createElement.apply(null,s)}return r.a.createElement.apply(null,a)}p.displayName="MDXCreateElement"}}]);