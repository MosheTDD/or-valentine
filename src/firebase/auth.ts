import { auth } from './firebase';
import {
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  UserCredential,
} from 'firebase/auth';

const provider = new GoogleAuthProvider();

export const signInWithGoogle = async (): Promise<UserCredential> => {
  return await signInWithPopup(auth, provider);
};

export const logout = async () => {
  await signOut(auth);
};
