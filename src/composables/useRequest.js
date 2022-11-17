import { ref } from 'vue';

export default function useRequest(request, data, loading) {
  const error = ref('');

  async function run() {
    loading.value = true;
    error.value = '';
    
    try {
      const response = await request();
      if (response.ok)
        data.value = await response.json();
      else 
        error.value = response.statusText;
    } catch(e) {
      error.value = e.message;
    } finally {
      loading.value = false;
    }
    
  }

  return { run, error };
}