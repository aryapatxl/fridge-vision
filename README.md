## Fridge Vision
An AI-Powered food detector! [Live Site](https://fridge-vision-x.vercel.app)

## Key Functionalities
- **Food Detection**: Upload a photo of food to receive a detailed list of its ingredients and estimated quantities.
- **Serverless Architecture**: A serverless function to securely handle API requests to protect sensitive information.
- **Error Handling & Feedback**: Informative error messages, accounts for issues such as unsupported file types, file size limitations, unreadable images, and non-food uploads.
- **Modular Code**: Built with reusable components for maintainability and scalability. A cleaner codebase.

## Notable UI Features
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
- `Claude AI`

## Advantages of Using `Claude-AI`
- Through my research, Claude AI outperforms other food detection models. Notably: [Foodvisor](https://www.foodvisor.io/en/vision/), [LogMeal](https://logmeal.com/api/demo/) & [Roboflow](https://universe.roboflow.com/fridgeitems/object-fridge-items/model/1?image=https%3A%2F%2Fsource.roboflow.com%2FhMTNbTsxvtZV8ca02dU1rFUOjSh2%2FsbpIo1SWb2JCUP9HfV2M%2Foriginal.jpg)
- **Continuous Learning**: Claude AI adapts to new food items and trends without needing extensive retraining.
- **Natural Language Processing**: Its advanced capabilities allow for understanding complex queries, enhancing user experience.
- **Reduced Development Overhead**: Claude AI minimizes the need for feature engineering, speeding up development and deployment.
- **Better Handling of Ambiguities**: The model effectively interprets ambiguous data, providing relevant results even with incomplete input.

## Challenges
- **JSON Output**
  - **Problem**: The goal was to have the model generate output in JSON format and use `JSON.parse` for parsing. However, extensive testing revealed that this approach may not be reliable due to limitations in the Claude API's response handling and unpredictable responses.
  - **Resolution**: I refactored the model to output the data as a list instead. This alternative approach offers greater flexibility and minimizes the risk of inadvertently overlooking any parsing steps.

 - **Upload Component & Detect Button**
   - **Problem**: I faced challenges in designing the file upload component to accommodate all the use cases such as uploading a file, replacing a file, sending the file to the API, etc. My initial approach was to hard-code each of these through buttons and messages. It became pretty messy.

   - **Resolution**: After some research, I switched my logic. Using simple buttons would be more usable. Instead of separate upload and replace buttons, I found a Tailwind component that combined both simply. Also, I opted to disable the detect button if the model is loading or if the file input is incorrect.

## Demo
[![Demo Video](https://img.youtube.com/vi/78NxnliU7IY/0.jpg)](h[ttps://www.youtube.com/watch?v=YOUTUBE_VIDEO_ID_HERE](https://youtu.be/78NxnliU7IY))
