// Serverless function to protext API keys
import { NextResponse } from 'next/server';
import Anthropic from "@anthropic-ai/sdk";
import fs from "fs";
import path from "path"; // handles file path


export async function POST(req) {
  try {
    // read API Key from environment variables
    const apiKey = process.env.ANTHROPIC_API_KEY // Use a server-side variable, not NEXT_PUBLIC
    console.log(apiKey)
    if (!apiKey) {
      return NextResponse.json({ error: "API key is missing" }, { status: 500 });
    }

    // read and convert image to base64 as recommended by Anthropic
    const imageFilePath = "/Users/aryapatel/fridge-vision-1/src/app/adfa.jpeg";
    const base64Image = fs.readFileSync(imageFilePath, { encoding: "base64" });
    console.log("Base64 Image: ", base64Image);
    const anthropic = new Anthropic({ apiKey });

    const msg = await anthropic.messages.create({
        

      model: "claude-3-5-sonnet-20241022",
      max_tokens: 1000,
      temperature: 0,
      system: "You are a fridge analyzer, analyze this picture of a fridge and output the items in the fridge and their quantities in this format: key (item) : value (quantity). If the image is blurry, unreadable, or not a fridge, send an error message.",
      messages: [
        {
          role: "user",
          content: [
            {
              type: "text",
              // sample responses
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
    

    // extract the response from the full output
    const jsonResponseString = msg.content[0].text;

    // parse the JSON
    let jsonResponse;
    try {
      jsonResponse = JSON.parse(jsonResponseString);
    } catch (error) {
      console.error("Invalid JSON response:", jsonResponseString);
      return NextResponse.json({ error: "Received an invalid JSON response." }, { status: 500 });
    }

    // return  parsed JSON response
    return NextResponse.json(jsonResponse);
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json({ error: "An error occurred while processing the image" }, { status: 500 });
  }
}