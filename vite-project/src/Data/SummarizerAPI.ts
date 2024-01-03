import { HfInference, SummarizationOutput } from '@huggingface/inference';

const API_KEY = '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';
const hf = new HfInference(API_KEY);

export async function summarizeText(
  inputText: string,
  selectedLength: string,
  selectedTemperature: number | undefined
): Promise<string> {
  const summarizationResult: SummarizationOutput = await hf.summarization({
    model: 'facebook/bart-large-cnn',
    inputs: inputText,
    parameters: {
      max_length: selectedLength === 'small' ? 100 : 200,
      temperature: selectedTemperature,
    },
  });
  return summarizationResult.summary_text || 'No summary available';
}
