import React from "react";
import { Collapse } from "../../components";

export default function Faq() {
  const leftColapData = [
    {
      title: "What is ChatMP3?",
      content:
        "ChatMP3 is an application that allows users such as Students, Professionals and Researchers to upload audio, video, or text documents, and then uses artificial intelligence to transform them into interactive written texts, enhancing the learning experience. What sets ChatMP3 apart is its unique ability to enable users to ask questions directly to the AI, providing detailed answers as interacting with an expert, creating a rich and engaging learning experience",
    },
    {
      title: "How does the App work in recording lectures?",
      content: `ChatMP3 simplifies recording lectures. Just hit "record" on your recording device during a lecture, and it captures every detail. Later, you can upload the recording to ChatMP3 for it to be transformed into an interactive written text, making it easy to review and engage with the lecture material. The app will use speech recognition technology to convert the audio into written text, thus also providing a detailed account of the lecture.`,
    },
    {
      title: "How do I access the text of recorded lessons?",
      content:
        "Accessing the text of recorded lessons on ChatMP3 is easy. After you've uploaded your recording, the platform will process it and provide you with the transcribed text. You can then access this text through the ChatMP3 interface, where you can interact with it, ask questions, and review the material as needed. It's a seamless and user-friendly process.",
    },
    {
      title: "How does the AI Professor work?",
      content:
        "The AI Professor in ChatMP3 is a powerful feature. Once your audio, video, or text is transformed into an interactive written text, you can use the platform's interactive interface to ask questions directly to the text. The AI Professor then responds with detailed answers, providing clarifications and explanations as if you were interacting with an expert on the material. It's like having a personal tutor at your fingertips, ready to help you understand and engage with the content effectively. This feature enhances your learning experience and makes studying more personalized and engaging.",
    },
  ];
  const rightColapData = [
    {
      title: "What devices are supported by ChatMP3?",
      content:
        "Currently, ChatMP3 is only available via Web App, we are working to release the App for iOS and Android devices as soon as possible. In the meantime, you can use both from your phone and PC our Web App and start your new way of learning and studying.",
    },
    {
      title: "Is there a cost associated with using ChatMP3?",
      content:
        "ChatMP3 follows a Freemium model, providing both free and paid versions. The free version includes essential features, while the paid version offers additional benefits, such as unlimited lesson storage and priority access to the virtual professor.",
    },
    {
      title: "What should I do if I encounter technical problems?",
      content: `If you come across any technical issues or have inquiries about using the App, feel free to reach out to our dedicated support team at <a href="mailto:hello@chatmp3.ai">. We are here to assist you in resolving any challenges you might face.`,
    },
    {
      title: "Is ChatMP3 only suitable for Students?",
      content:
        "No, ChatMP3 is not just suitable for Students. While it's a valuable tool for students at various levels, including high school and university, it's also beneficial for professionals. Whether you're attending conferences, workshops, or any professional event, ChatMP3 can help you capture and transform audio or video content into interactive written texts for better comprehension and review. It caters to both academic and professional needs, making it a versatile solution for a wide range of users.",
    },
  ];
  return (
    <>
      <div className="flex flex-col mb-16">
        <h2 className="mb-3 text-2xl lg:text-4xl font-extrabold tracking-tight text-[#F3F4F6] text-center sm:text-center">
          Your Questions, Answered
        </h2>
        <p className="text-[#9CA3AF] text-md lg:text-lg mx-2 sm:mx-0 text-center sm:text-center">
          Find out which questions are the most asked
        </p>
      </div>

      <div className="xl:grid xl:grid-cols-2 w-3/4 mx-auto">
        <div className="col-span-1 pr-6  max-h-fit">
          {leftColapData.map((item, key) => (
            <Collapse open={false} title={item.title} key={key}>
              {item.content}
            </Collapse>
          ))}
        </div>
        <div className="col-span-1 pr-6  max-h-fit">
          {rightColapData.map((item, key) => (
            <Collapse open={false} title={item.title} key={key}>
              {item.content}
            </Collapse>
          ))}
        </div>
      </div>
    </>
  );
}
