import { ref, uploadBytes, getDownloadURL, deleteObject } from "firebase/storage";
import { storage } from "./firebase";

export async function uploadProductImage(file: File, productId: string): Promise<string> {
  const ext = file.name.split(".").pop() || "jpg";
  const path = `products/${productId}_${Date.now()}.${ext}`;
  const storageRef = ref(storage, path);
  await uploadBytes(storageRef, file);
  return getDownloadURL(storageRef);
}

export async function uploadCategoryImage(file: File, category: string): Promise<string> {
  const ext = file.name.split(".").pop() || "jpg";
  const path = `categories/${category}_${Date.now()}.${ext}`;
  const storageRef = ref(storage, path);
  await uploadBytes(storageRef, file);
  return getDownloadURL(storageRef);
}

export async function deleteProductImage(url: string): Promise<void> {
  try {
    const fileRef = ref(storage, url);
    await deleteObject(fileRef);
  } catch {
    // ignore if already deleted
  }
}
