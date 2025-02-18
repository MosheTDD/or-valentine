import { IProposalConfig } from '../types.ts';
import { db } from './firebase';
import {
  collection,
  addDoc,
  getDocs,
  doc,
  updateDoc,
  deleteDoc,
  getDoc,
} from 'firebase/firestore';

const usersCollection = collection(db, 'users');
const proposalsCollection = collection(db, 'proposals');

export const addUser = async (name: string, email: string) => {
  return await addDoc(usersCollection, { name, email, createdAt: new Date() });
};

export const getUsers = async () => {
  const snapshot = await getDocs(usersCollection);
  return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
};

export const getUserById = async (id: string) => {
  const userRef = doc(db, 'users', id);
  const snapshot = await getDoc(userRef);
  return snapshot.exists() ? { id: snapshot.id, ...snapshot.data() } : null;
};

export const updateUser = async (
  id: string,
  newData: Partial<{ name: string; email: string }>
) => {
  const userRef = doc(db, 'users', id);
  return await updateDoc(userRef, newData);
};

export const deleteUser = async (id: string) => {
  const userRef = doc(db, 'users', id);
  return await deleteDoc(userRef);
};

export const saveProposal = async (config: IProposalConfig) => {
  const docRef = await addDoc(proposalsCollection, config);
  return docRef.id;
};

export const getProposal = async (id: string) => {
  const docSnap = await getDoc(doc(db, 'proposals', id));
  return docSnap.exists() ? docSnap.data() : null;
};
