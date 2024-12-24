// services/apiService.ts
import { useFetch } from '#app';

const BASE_URL = 'https://dummyjson.com/';
export class ApiService {
  // Tokenni olish (localStorage yoki sessionStorage orqali)
  static getToken(): string | null {
    return localStorage.getItem('token'); // Yoki sessionStorage bilan ishlatishingiz mumkin
  }

  static async get<T>(url: string): Promise<any> {
    try {
      const data = await $fetch<T>(BASE_URL + url);

      return data as T;
    } catch (err) {
      console.error('API Error:', err);
    }
  }

  static async post<T>(url: string, payload: any): Promise<T> {
    try {
      const { data, error } = await useFetch(url, {
        method: 'POST',
        body: payload,
      });

      if (error.value) {
        throw error.value;
      }

      return data.value as T;
    } catch (err) {
      console.error('API Error:', err);
      throw err;
    }
  }

  static async put<T>(url: string, payload: any): Promise<T> {
    try {
      const { data, error } = await useFetch(url, {
        method: 'PUT',
        body: payload,
      });

      if (error.value) {
        throw error.value;
      }

      return data.value as T;
    } catch (err) {
      console.error('API Error:', err);
      throw err;
    }
  }

  static async delete<T>(url: string): Promise<void> {
    try {
      const { error } = await useFetch(url, {
        method: 'DELETE',
      });

      if (error.value) {
        throw error.value;
      }
    } catch (err) {
      console.error('API Error:', err);
      throw err;
    }
  }

  // file service
  // GET so'rov (Token bilan)
  static async getWithToken<T>(url: string): Promise<any> {
    try {
      const token = this.getToken();
      const data = await $fetch<T>(BASE_URL + url, {
        headers: {
          Authorization: `Bearer ${token}`, // Token qo'shildi
        },
      });

      return data as T;
    } catch (err) {
      console.error('API Error:', err);
    }
  }

  // POST so'rov (Token bilan)
  static async postWithToken<T>(url: string, body: any): Promise<any> {
    try {
      const token = this.getToken();
      const data = await $fetch<T>(BASE_URL + url, {
        method: 'POST',
        body,
        headers: {
          Authorization: `Bearer ${token}`, // Token qo'shildi
          'Content-Type': 'application/json', // JSON ma'lumotlar
        },
      });

      return data as T;
    } catch (err) {
      console.error('API Error:', err);
    }
  }

  // Fayl yuklash uchun POST so'rov
  static async uploadFile<T>(url: string, file: File): Promise<any> {
    try {
      const token = this.getToken();
      const formData = new FormData();
      formData.append('file', file); // Faylni FormData ga qo'shamiz

      const data = await $fetch<T>(BASE_URL + url, {
        method: 'POST',
        body: formData,
        headers: {
          Authorization: `Bearer ${token}`, // Token qo'shildi
        },
      });

      return data as T;
    } catch (err) {
      console.error('File Upload Error:', err);
    }
  }

}
