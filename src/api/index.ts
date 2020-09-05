import app from '../firebase/base';

export const db = app.firestore();

export const createUser = async (email: string, password: string) => {
  const createResult = await app.auth().createUserWithEmailAndPassword(email, password);

  if (createResult.user) {
    await db.collection('users')
      .doc(createResult.user.uid)
      .set({
        uid: createResult.user.uid,
        email: createResult.user.email
      });
  }

  return createResult;
};

export const loginUser = async (email: string, password: string) => {
  return await app.auth().signInWithEmailAndPassword(email, password);
};


export const signoutUser = async () => {
  return await app.auth().signOut();
};

export const getUserSchedules = async (uid: string) => {
  const userData = db.collection('users').doc(uid);
  return await userData.get();
};
