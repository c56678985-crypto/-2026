import { db } from "./firebase.js";
import { doc, updateDoc } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-firestore.js";

export async function saveAnswer(quizId, section, questionNo, answer, status) {

    try {

        await updateDoc(doc(db, "participants", quizId), {

            [`${section}.Q${questionNo}`]: {
                answer: answer,
                status: status,
                time: new Date().toISOString()
            }

        });

        console.log("Answer Saved");

    } catch (e) {

        console.log(e);

    }

}
