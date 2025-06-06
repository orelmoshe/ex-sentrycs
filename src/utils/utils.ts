import axios from 'axios';

export const isEnglishWord = async (word: string): Promise<boolean> => {
  try {
    const { data } = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
    return Array.isArray(data) && data.length > 0;
  } catch (error: any) {
    if (error.response?.status === 404) {
      return false;
    }
    console.error('Error checking word:', error);
    return false;
  }
};
