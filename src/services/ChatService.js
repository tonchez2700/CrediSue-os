import { db, doc, getDoc, getDocs, query, collection, setDoc, orderBy } from './../database/firebase';

export const addChatMessage = async (userId, chatData) => {
  try {
    const docRef = doc(collection(db, 'chats', `user_${userId}`, 'messages'));
    return await setDoc(docRef, chatData);
  } catch (error) {
    return { error: true, message: error.message }
  }
}

export const getChatById = async (chatId) => {
  try {
    const docRef = doc(db, 'chats', chatId);
    const docSnap = await getDoc(docRef);
    if (!docSnap.exists())
      return null;

    return docSnap.data();
  } catch (error) {
    return { error: true, message: `No ha sido posible obtener el chat con el id: ${chatId} ` }
  }
}

export const getChatMessagesByUserId = async (userId) => {
  try {
    const docRef = collection(db, 'chats', `user_${userId}`, 'messages');
    const q = query(docRef, orderBy("createdAt", "desc"));
    const docSnap = await getDocs(q);
    return formatChatResponse(docSnap);
  } catch (error) {
    return { error: true, message: error.message }
  }
}

const formatChatResponse = (data) => {
  let result = [];
  data.forEach((doc) => {
    result = [ ...result, doc.data() ]

  });
  return result;
}

const getUserIdFromKeyName = (keyName) => {
  const result = keyName.split("_")
  return result[ result.length - 1 ]
}