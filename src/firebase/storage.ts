import { storage } from './firebase';
import {
  ref,
  uploadBytes,
  getDownloadURL,
  deleteObject,
  listAll,
} from 'firebase/storage';

// 🔹 Upload File
export const uploadFile = async (file: File) => {
  const fileRef = ref(storage, `uploads/${file.name}`);
  await uploadBytes(fileRef, file);
  return getDownloadURL(fileRef);
};

// 🔹 Get All Files
export const getAllFiles = async () => {
  const storageRef = ref(storage, 'uploads/');
  const result = await listAll(storageRef);
  return Promise.all(
    result.items.map(async (item) => ({
      name: item.name,
      url: await getDownloadURL(item),
    }))
  );
};

// 🔹 Delete File
export const deleteFile = async (fileName: string) => {
  const fileRef = ref(storage, `uploads/${fileName}`);
  await deleteObject(fileRef);
};
