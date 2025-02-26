const fs = require('fs');
const path = require('path');

async function transcribeAudio(audioFilePath, apiKey) {
  try {
    if (!fs.existsSync(audioFilePath)) {
      throw new Error('El archivo de audio no existe');
    }

    const audioFile = fs.readFileSync(audioFilePath);
    const formData = new FormData();
    const blob = new Blob([audioFile]);

    formData.append('file', blob, path.basename(audioFilePath));
    formData.append('model', 'whisper-1');

    const response = await fetch(
      'https://api.openai.com/v1/audio/transcriptions',
      {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${apiKey}`
        },
        body: formData
      }
    );

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(`Error en la API: ${JSON.stringify(errorData)}`);
    }

    const data = await response.json();
    const transcription = data.text;

    const outputFilePath = path.join(
      path.dirname(audioFilePath),
      `${path.basename(
        audioFilePath,
        path.extname(audioFilePath)
      )}_transcription.txt`
    );

    fs.writeFileSync(outputFilePath, transcription);
    console.log(`Transcripción guardad en: ${outputFilePath}`);
    return transcription;
  } catch (error) {
    console.error('Error durante la transcripción', error.message);
    throw error;
  }
}

const audioPath = './audio.mp3';
const openaiApiKey =
  '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';

transcribeAudio(audioPath, openaiApiKey)
  .then(transcription => {
    console.log('Transcripción completada con exito');
    console.log(transcription);
  })
  .catch(error => {
    console.error('Fallo la transcripción', error);
  });
