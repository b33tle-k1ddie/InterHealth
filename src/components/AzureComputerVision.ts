// AzureComputerVision.ts
import axios, { AxiosRequestConfig } from 'axios';

export interface HandwrittenTextResult {
  extractedText: string;
  // Додайте інші властивості, якщо необхідно
}

const azureEndpoint = 'https://interhealth1.cognitiveservices.azure.com/';
const subscriptionKey = '8bf17219e8da434f846a85bd79056c35';

export const analyzeHandwrittenText = async (base64Image: string): Promise<HandwrittenTextResult> => {
  const url = `${azureEndpoint}/vision/v3.0/read/analyze?language=en&readingOrder=handwriting`;

  const headers = {
    'Content-Type': 'application/octet-stream',
    'Ocp-Apim-Subscription-Key': subscriptionKey,
  };

  // Convert Base64 to Uint8Array
  const arrayBuffer = Uint8Array.from(atob(base64Image), (c) => c.charCodeAt(0));
  const data = new Uint8Array(arrayBuffer);

  try {
    const config: AxiosRequestConfig = {
      url,
      method: 'post',
      headers,
      data,
    };

    const response = await axios.request(config);

    const operationLocation = response.headers['operation-location'];

    if (!operationLocation) {
      throw new Error('Operation location not found in response headers');
    }

    return await pollForResults(operationLocation);

  } catch (error) {
    console.error('Error analyzing handwritten text:', error);
    throw error;
  }
};

const pollForResults = async (operationLocation: string): Promise<HandwrittenTextResult> => {
  const headers = {
    'Ocp-Apim-Subscription-Key': subscriptionKey,
  };

  try {
    let results: any;
    do {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      const response = await axios.get(operationLocation, { headers });
      results = response.data;
      console.log('Results:', results.analyzeResult.readResults[0]?.lines); // Додайте цей рядок для виведення реальних результатів в консоль
    } while (results.status === 'running');

    if (results.status === 'failed') {
      throw new Error('Handwritten text analysis failed');
    }

    // Перегляньте реальні дані у консолі та адаптуйте код відповідно
    return { extractedText: results.analyzeResult.readResults[0]?.lines }; // Замініть це на реальні дані

  } catch (error) {
    console.error('Error polling for results:', error);
    throw error;
  }
};
