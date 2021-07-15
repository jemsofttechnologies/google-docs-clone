import firebase from "firebase";
const firebaseConfig = {
	apiKey: "AIzaSyC2QUh3zYkigfRxpdqFi3D5ggU6XsI5iiE",
	authDomain: "docs-clone-44817.firebaseapp.com",
	projectId: "docs-clone-44817",
	storageBucket: "docs-clone-44817.appspot.com",
	messagingSenderId: "537613395795",
	appId: "1:537613395795:web:11c05a92aaa5f6dfc463a6",
};

const app = !firebase.apps.length
	? firebase.initializeApp(firebaseConfig)
	: firebase.app();

const db = app.firestore();
export { db };
