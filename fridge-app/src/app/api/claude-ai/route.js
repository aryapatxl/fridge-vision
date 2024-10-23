const Anthropic = require("@anthropic-ai/sdk");
const fs = require("fs");
require('dotenv').config();

// Read and convert image to base64
const imageFilePath = "/Users/aryapatel/Desktop/fridge-vision/fridge-app/src/app/adfa.jpeg";
const base64Image = fs.readFileSync(imageFilePath, { encoding: "base64" });

const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
});

async function run() {
  try {
    const msg = await anthropic.messages.create({
      model: "claude-3-5-sonnet-20241022", // Ensure this model is valid
      max_tokens: 1000,
      temperature: 0,
      system: "In JSON format, list out the ingredients in this fridge and their quantities. If the image is blurry, unreadable, or not a fridge, send an error message.",
      messages: [
        {
          role: "user",
          content: [
            {
              type: "text",
              text: "<examples>\n<example>\n<example_description>\nIf the photo is readable and consists of ingredients, this is what the response should look like.\n</example_description>\n<ideal_output>\n{\n  \"Tomatoes\": 4,\n  \"Butter\": 100,\n  \"Milk\": 500,\n  \"Eggs\": 3,\n  \"Flour\": 200,\n  \"Sugar\": 50,\n  \"Salt\": 1,\n  \"Olive Oil\": 2\n}\n</ideal_output>\n</example>\n<example>\n<example_description>\nIf the image is unclear or does not contain recognizable ingredients give this message.\n</example_description>\n<ideal_output>\n{\n  \"error\": \"The image is either unclear or does not contain recognizable ingredients. Please provide a clearer image for proper identification.\"\n}\n</ideal_output>\n</example>\n</examples>\n\n"
            },
            {
              type: "image",
              source: {
                type: "base64",
                media_type: "image/jpeg",
                data: base64Image,
              },
            },
          ],
        },
      ],
    });

    console.log(msg);
  } catch (error) {
    console.error("Error:", error);
  }
}

// Execute the function
run();