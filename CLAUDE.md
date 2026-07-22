# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project overview

Marketing/portfolio site plus a Firebase-authenticated user dashboard for an "Intelligent Solar Panel System" (a Bachelor's Thesis project). Built with Create React App (`react-scripts` 5). UI copy is in Romanian.

## Commands

```bash
npm start   # dev server at http://localhost:3000
npm run build   # production build to /build
npm test    # react-scripts test (Jest + RTL) — no test files currently exist in the repo
```

There is no lint script; ESLint runs implicitly via `react-scripts` (config: `eslintConfig` in `package.json`, extends `react-app`).

Deployment is to Firebase Hosting (`firebase.json` serves `/build`, project alias `solarpowercnn` in `.firebaserc`) via the Firebase CLI (`firebase deploy`), not part of the npm scripts.

## Required local setup

`src/firebase.js` is required by `src/context/AuthContext.js` and other modules but is **git-ignored** (see `.gitignore`) because it holds Firebase project credentials. It must exist locally and export an initialized `auth` (and any other Firebase services used). Without it, the app fails to compile. It's not included in this repo — recreate it from a Firebase project config if missing (`initializeApp` + `firebase.auth()`).

## Architecture

- **Routing** (`src/App.js`): all routes are declared flat in one `<Routes>` tree inside `<AuthProvider>`. Public pages: `/`, `/services`, `/tehnic`, `/sign-up`, `/log-in`, `/galerie`, `/forgot-password`. Protected pages (`/device`, `/update-profile`) are wrapped individually in `<PrivateRoute>`.
- **Auth** (`src/context/AuthContext.js`, `src/components/PrivateRoute.jsx`): uses the Firebase v8-style namespaced API (`auth.signInWithEmailAndPassword`, etc.) even though the `firebase` dependency is v11 — check `src/firebase.js` for how `auth` is constructed/wrapped before assuming v9+ modular APIs apply. `AuthProvider` exposes `currentUser`, `login`, `signup`, `logout`, `resetPassword`, `updateEmail`, `updatePassword` via `useAuth()`. It blocks rendering children until the initial `onAuthStateChanged` callback fires (`loading` state). `PrivateRoute` redirects to `/log-in` when there's no `currentUser`, otherwise renders `<Outlet />`.
- **Demo login**: `Login.jsx` has a "CONT DEMO" button that signs in with a hardcoded `demo@demo.com` account. `Device.jsx` hides the "Update profile" link specifically for that email.
- **Device dashboard** (`src/pages/Device.jsx`): currently displays **randomly generated** voltage/current/power/energy values (`Math.random()`), not live sensor data — the actual Firebase Realtime Database read (`app.database().ref("/")...`) is commented out. Treat this page as a mock/placeholder unless asked to wire it back to a live data source.
- **Pages vs components**: `src/pages/*` are route-level screens; `src/components/*` are shared building blocks (Navbar, Footer, HeroSection, Cards/CardItem/CardServicii variants, ContactUs, DataInfoItem for the dashboard stat tiles). Each page/component pairs with its own CSS file under a sibling `css/` folder (e.g. `src/pages/css/Device.css`, `src/components/css/Navbar.css`) — there is no shared design-system file, so styling is per-component.
- **Gallery** (`src/pages/Galerie.jsx`): uses `react-photo-album`'s `RowsPhotoAlbum` fed by a static photo array in `src/pages/photos.js`. Note: an in-code comment in `App.js` ("Nu merge galeria") flags this route as currently broken/not working.
