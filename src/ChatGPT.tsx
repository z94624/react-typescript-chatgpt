import { useState } from "react";
import {
  Configuration,
  OpenAIApi,
  ChatCompletionRequestMessageRoleEnum,
} from "openai";
import { Button, Form, InputGroup } from "react-bootstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";

const ChatGPT: React.FC = () => {
  const configuration = new Configuration({
    apiKey: import.meta.env.VITE_OPENAI_APIKEY,
  });
  const openAi = new OpenAIApi(configuration);

  const [prompt, setPrompt] = useState<string | undefined>("");
  const [response, setResponse] = useState<string | undefined>("");

  const chatGPTMessages = [
    {
      role: ChatCompletionRequestMessageRoleEnum.User,
      content: prompt ? prompt : "Hello",
    },
  ];
  const getOpenAIResponse = async (
    e: React.FormEvent<EventTarget>
  ): Promise<void> => {
    e.preventDefault();
    try {
      const res = await openAi.createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: chatGPTMessages,
      });
      setResponse(res.data.choices[0].message?.content);
    } catch (e) {
      setResponse("Something is going wrong. Please try again.");
    }
  };
  // Wrap the async function call inside a regular function
  const handleFormSubmit = (e: React.FormEvent<EventTarget>): void => {
    e.preventDefault();
    void getOpenAIResponse(e); // Use the 'void' operator to suppress the Promise warning
  };

  return (
    <>
      <form onSubmit={handleFormSubmit}>
        <InputGroup className="mt-5">
          <Form.Control
            placeholder="想跟 ChatGPT 聊天嗎？"
            aria-label="想跟 ChatGPT 聊天嗎？"
            className="border-info"
            type="text"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
          />
          <Button variant="outline-info" id="button-addon2" type="submit">
            <FontAwesomeIcon icon={faPaperPlane} />
          </Button>
        </InputGroup>
      </form>

      {response && <div>{response}</div>}
    </>
  );
};

export default ChatGPT;
