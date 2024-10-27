## Fridge Vision
An AI-powered food detector that identifies ingredients and estimates quantities from uploaded photos! [Live Site](https://fridge-vision-x.vercel.app)

## Demo
[![Demo Video](https://img.youtube.com/vi/78NxnliU7IY/0.jpg)](https://youtu.be/78NxnliU7IY)

## Key Functionalities
- **Food Detection**: Upload a photo of food to receive a detailed list of its ingredients and estimated quantities.
- **Serverless Architecture**: A serverless function to securely handle API requests to protect sensitive information.
- **Error Handling & Feedback**: Informative error messages, accounts for issues such as unsupported file types, file size limitations, unreadable images, and non-food uploads.
- **Modular Code**: Built with reusable components for maintainability and scalability. A cleaner codebase.

## Notable UX/UI Features
- **Carousel Instructions**: A fun, engaging way to guide users step-by-step.
- **Upload Errors**: Color-coded for easy identification.
- **Light/Dark Mode**: Reduces eye-strain and saves battery.
- **High Contrast Colors**: Enhances accessibility and improves readability.
- **Simple Fonts**: Enhances clarity and legibility.
- **Modern Design**: Increases engagement.

## Tech Stack

### Frontend
- `Next.js`: Simple file-routing, good for static pages, fast development and fast-rendering
- `Tailwind CSS`: Covers most use cases, creating an easier development experience.

### Backend
- `Vercel`: Integrates perfectly with Next.js.
- `React-Slick`: Carousel component
- `Claude-AI`

## Why `Claude-AI`?
My reasoning touches on the `AI` vs `ML` debate. In short, ML models are based on data and rely heavily on pattern matching causing them to make incorrect inferences at times. For example when shown a picture of lettuce, the `LogMeal` model returned various options with certainty scores: [Celery: 25.07%, Endive Stew: 21.57%, Endives: 20.22% , Lettuce: 19.08%, Cabbage: 14.05%]. Claude-AI identified it correctly with a certainty score of 90%-95% and specified the kind of lettuce.

Generally, AI models have a deeper understanding of context, concepts, and complex relationships. In this context, Claude-AI is particularly advanced. It outperformed food detection models such as [Foodvisor](https://www.foodvisor.io/en/vision/), [LogMeal](https://logmeal.com/api/demo/) & [Roboflow](https://universe.roboflow.com/fridgeitems/object-fridge-items/model/1?image=https%3A%2F%2Fsource.roboflow.com%2FhMTNbTsxvtZV8ca02dU1rFUOjSh2%2FsbpIo1SWb2JCUP9HfV2M%2Foriginal.jpg) and AI models such as `Google Gemini`. Claude AI handles ambiguous data exceptionally, accurately identifying when images are blurry, not food-related, depict an empty fridge, etc. Lastly, it continuously learns, it is able to adapt to new food items without extensive retraining, making it the top pick for this project.

## Challenges
- **JSON Output**
  - **Problem**: The goal was to have the model generate output in JSON format and use `JSON.parse` for parsing. However, extensive testing revealed that this approach may not be reliable due to limitations in the Claude API's response handling and unpredictable responses.
  - **Resolution**: I refactored the model to output the data as a list instead. This alternative approach offers greater flexibility and minimizes the risk of inadvertently overlooking any parsing steps.

 - **Upload Component & Detect Button**
   - **Problem**: I faced challenges in designing the file upload component to accommodate all the use cases such as uploading a file, replacing a file, sending the file to the API, etc. My initial approach was to hard-code each of these through buttons and messages. It became pretty messy.

   - **Resolution**: After some research, I switched my logic. Using simple buttons would be more usable. Instead of separate upload and replace buttons, I found a Tailwind component that combined both simply. Also, I opted to disable the detect button if the model is loading or if the file input is incorrect.
