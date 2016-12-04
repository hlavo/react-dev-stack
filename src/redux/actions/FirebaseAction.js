import Firebase from 'firebase'

export default {
    initFirebase(){
        return (dispatch)=> {

            let self = this

            const config = {
                apiKey: "AIzaSyCng1apM1ujrbFBuj9IVehjs498EcHZVp4",
                authDomain: "whatsapp-32a0e.firebaseapp.com",
                databaseURL: "https://whatsapp-32a0e.firebaseio.com",
                storageBucket: "whatsapp-32a0e.appspot.com",
                messagingSenderId: "1021107944873"
            }

            const ref = Firebase.initializeApp(config);
            dispatch(self.initSuccessFirebase(ref))
        }
    },
    initSuccessFirebase(firebase){
        return {
            type: "INIT_SUCCESS_FIREBASE",
            firebase
        }
    }
}