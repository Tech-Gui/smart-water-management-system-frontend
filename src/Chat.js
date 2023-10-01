import React, { useState } from "react";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
import { RxPaperPlane } from "react-icons/rx";
import "./chat.css";
import Header from "./components/Header";
import Sidebar from "./SideBar";

function ChatbotPage() {
  const [message, setMessage] = useState("");
  const [response, setResponse] = useState("");
  const [chatHistory, setChatHistory] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Hit your chat endpoint
    const result = await fetch(
      "https://one-more-thing-2-0b78fb9fe4b4.herokuapp.com/chat",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message }),
      }
    );

    if (result.status === 201) {
      const data = await result.json();
      setResponse(data.content);

      // Update chatHistory with the current conversation
      setChatHistory([
        ...chatHistory,
        { role: "user", content: message },
        { role: "ChatGPT", content: data.content },
      ]);

      // Clear the input box
      setMessage("");
    } else {
      // Handle errors here
      console.error("Error:", result);
    }
  };

  return (
    <div
      fluid
      className="d-flex flex-row"
      style={{ minHeight: "100vh", maxHeight: "100vh", background: "#f2f2f2" }}
    >
      <Sidebar />
      <Container>
        <Header />
        <Row className="d-flex justify-content-center">
          <Col md={6}>
            <Card style={{ minHeight: "75vh" }}>
              <Card.Header
                style={{
                  background: "#333",
                  color: "#68E7FD",
                }}
              >
                <h5 className="text-center">Dropwise AI Assistant</h5>
                <p className="text-center small text-white">
                  Chat with our Dropwise AI Assistant!. It knows a lot tricks
                  and tips on how to save water at home. Ask anything to do with
                  water saving{" "}
                </p>
              </Card.Header>
              <Card.Body variant="dark">
                <div className="chat-container-wrapper">
                  <div className="chat-container">
                    {chatHistory.map((chat, index) => (
                      <div
                        key={index}
                        className={`chat-message ${
                          chat.role === "user" ? "user" : "bot"
                        }`}
                      >
                        {chat.content}
                      </div>
                    ))}
                  </div>
                </div>
              </Card.Body>

              <Card.Footer>
                <Form
                  onSubmit={handleSubmit}
                  className="d-flex flex-row justify-content-between mt-3 gap-1 "
                >
                  <Form.Group className="flex-grow-1 mr-2">
                    <Form.Control
                      type="text"
                      placeholder="Type your message..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      style={{ width: "100%" }}
                    />
                  </Form.Group>
                  <Button
                    style={{
                      background: "#333",
                      color: "#68E7FD",
                      border: "none",
                    }}
                    type="submit"
                    className="custom-button"
                  >
                    <RxPaperPlane size={25} />
                  </Button>
                </Form>
              </Card.Footer>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default ChatbotPage;
