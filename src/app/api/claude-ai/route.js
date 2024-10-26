import { NextResponse } from 'next/server';
import Anthropic from "@anthropic-ai/sdk";

export async function POST(req) {
  try {
    const apiKey = process.env.ANTHROPIC_API_KEY;

    // Check for the API key in the environment variables
    if (!apiKey) {
      return NextResponse.json({ error: "Error: API key is missing." }, { status: 500 });
    }

    // Extract form data and the uploaded image file
    const formData = await req.formData();
    const imageFile = formData.get('image');

    // Validate the uploaded image
    if (!imageFile || !imageFile.size) {
      return NextResponse.json({ error: "Error: No image uploaded." }, { status: 400 });
    }

    // Convert the image to base64 format for the API request
    const imageBuffer = await imageFile.arrayBuffer();
    const base64Image = Buffer.from(imageBuffer).toString('base64');
    const anthropic = new Anthropic({ apiKey });

    // Prepare the request to the Anthropic API with image and context
    const msg = await anthropic.messages.create({
      model: "claude-3-5-sonnet-20241022",
      max_tokens: 1000,
      temperature: 0,
      system: "You are a fridge analyzer that analyzes images of refrigerators and outputs a list of all the food items, including condiments, liquids, vegetables, fruits, etc., and their quantities in the fridge in this format: Item: Quantity. Do not return any extra text.",
      messages: [
        {
          role: "user",
          content: [
            {
              type: "text",
              text: "<examples><example><example_description>Readable and clear items in the fridge.</example_description><ideal_output>1. Tomatoes: 4 2. Butter: 100g 3. Milk: 500ml 4. Eggs: 3</ideal_output></example><example><example_description>Image is blurry or not a fridge.</example_description><ideal_output>Error: The image is either unclear or does not contain recognizable items. Please upload a clearer image.</ideal_output></example></examples>"
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

    const responseText = msg.content[0].text;
    console.log("Response from Anthropic:", responseText);

    // Handle error responses from the AI model
    if (responseText.toLowerCase().includes("error")) {
      return NextResponse.json({ error: responseText }, { status: 400 });
    }
    
    // Return the successful detection result
    return NextResponse.json({ result: responseText });
  } catch (error) {
    console.error("Error:", error);
    // Return a generic error message for unexpected errors
    return NextResponse.json({ error: "Error: An unexpected error occurred while processing the image." }, { status: 500 });
  }
}